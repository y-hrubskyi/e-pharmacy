import { Fragment } from "react";

import { groupByDate, addPlusOrMinus } from "#utils";

import { Table, Caption, TRow } from "#components/common/Table/Table.styled";

import * as SC from "./IncomesExpensesTable.styled";

export const IncomesExpensesTable = ({ transactions }) => {
  const grouppedByDateEntries = groupByDate(transactions);

  return (
    <Table>
      <Caption>Income/Expenses</Caption>
      <tbody>
        {grouppedByDateEntries.map(([date, transactions]) => (
          <Fragment key={date}>
            <TRow key={date}>
              <SC.DateColumn colSpan="3">{date}</SC.DateColumn>
            </TRow>
            {transactions.map((transaction) => (
              <TRow key={transaction._id}>
                <SC.TransactionTypeCell>
                  <SC.TransactionTypeText
                    data-transaction-type={transaction.type}
                  >
                    {transaction.type}
                  </SC.TransactionTypeText>
                </SC.TransactionTypeCell>
                <SC.ParticipantNameCell>
                  {transaction.participant.name}
                </SC.ParticipantNameCell>
                <SC.TransactionAmountCell
                  data-transaction-type={transaction.type}
                >
                  {addPlusOrMinus(transaction.type)}
                  {transaction.amount.toLocaleString("en-US")}
                </SC.TransactionAmountCell>
              </TRow>
            ))}
          </Fragment>
        ))}
      </tbody>
    </Table>
  );
};
