const config = {
  '*': [() => 'npm run lint:format'],
  '*': [() => 'npm run lint:js -w backend'],
  '*': [() => 'npm run lint:js -w frontend']
};

export default config;
