import { formatDate } from "./formatDate";

export const groupByDate = (transactions) => {
  const currentDate = new Date();
  const today = formatDate(currentDate);
  const yesterday = formatDate(new Date().setDate(currentDate.getDate() - 1));

  const sortedByDateObj = transactions.reduce((acc, transaction) => {
    let date = formatDate(transaction.date);

    if (date === today) {
      date = "Today";
    } else if (date === yesterday) {
      date = "Yesterday";
    }

    if (!acc[date]) {
      acc[date] = [transaction];
    } else {
      acc[date].push(transaction);
    }

    return acc;
  }, {});

  return Object.entries(sortedByDateObj);
};
