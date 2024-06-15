import https from 'node:https';
import { CronJob } from 'cron';

import { BACKEND_URL } from './env.js';

export const job = new CronJob('*/14 * * * *', () => {
  console.log('Restarting server');

  https
    .get(BACKEND_URL + '/cron/ping', res => {
      if (res.statusCode === 200) {
        console.log('Server restarted');
      } else {
        console.error(
          'Failed to restart server with status code: ',
          res.statusCode
        );
      }
    })
    .on('error', err => {
      console.error('Error during Restart: ', err.message);
    });
});
