import { useEffect, useState } from "react";

import API from "#services/axios";

import { Statistics } from "#components/Statistics/Statistics";
import { RecentCustomersTable } from "#components/RecentCustomersTable/RecentCustomersTable";

import * as SC from "./DashboardPage.styled";

const DashboardPage = () => {
  const [dashboardInfo, setDashboardInfo] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await API.get("/dashboard");
        setDashboardInfo(data);
      } catch (error) {
        //
      }
    })();
  }, []);

  return (
    <SC.PageWrapper>
      {dashboardInfo && (
        <>
          <Statistics
            productsQuantity={dashboardInfo.productsQuantity}
            suppliersQuantity={dashboardInfo.suppliersQuantity}
            customersQuantity={dashboardInfo.customersQuantity}
          />
          <SC.TablesContainer>
            <SC.TableWrapper>
              <RecentCustomersTable customers={dashboardInfo.recentCustomers} />
            </SC.TableWrapper>
          </SC.TablesContainer>
        </>
      )}
    </SC.PageWrapper>
  );
};

export default DashboardPage;
