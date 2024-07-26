import { Icons } from "@/config/icons";

import * as SC from "./Statistics.styled";

export const Statistics = ({
  productsQuantity,
  suppliersQuantity,
  customersQuantity,
}) => {
  const statisticList = [
    {
      title: "All products",
      icon: Icons.statProducts,
      value: productsQuantity,
    },
    {
      title: "All suppliers",
      icon: Icons.statUsers,
      value: suppliersQuantity,
    },
    {
      title: "All customers",
      icon: Icons.statUsers,
      value: customersQuantity,
    },
  ];

  return (
    <SC.StatisticList>
      {statisticList.map((item, index) => (
        <SC.StatisticItem key={index}>
          <SC.StatisticTitleWrapper>
            <SC.StatisticIcon>
              <use href={item.icon}></use>
            </SC.StatisticIcon>
            <SC.StatisticTitle>{item.title}</SC.StatisticTitle>
          </SC.StatisticTitleWrapper>
          <SC.StatisticValue>
            {item.value.toLocaleString("en-US")}
          </SC.StatisticValue>
        </SC.StatisticItem>
      ))}
    </SC.StatisticList>
  );
};
