import { useEffect, useState } from "react";

import API from "@/services/axios";

import { Statistics } from "@/components/Statistics/Statistics";
import { RecentCustomersTable } from "@/components/RecentCustomersTable/RecentCustomersTable";
import { IncomesExpensesTable } from "@/components/IncomesExpensesTable/IncomesExpensesTable";
import { Loader } from "@/components/common/Loader/Loader";
import { Placeholder } from "@/components/common/Placeholder/Placeholder";

import * as SC from "./DashboardPage.styled";

const DashboardPage = () => {
  const [dashboardInfo, setDashboardInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        setError(null);

        const { data } = await API.get("/dashboard");
        setDashboardInfo(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  const loading = !error && isLoading;
  const hasError = !isLoading && error;
  const content = !isLoading && !error && dashboardInfo;
  const noData = !isLoading && !error && !dashboardInfo;

  return (
    <SC.PageWrapper>
      {content && (
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
            <SC.TableWrapper>
              <IncomesExpensesTable
                transactions={dashboardInfo.recentTransactions}
              />
            </SC.TableWrapper>
          </SC.TablesContainer>
        </>
      )}
      {loading && <Loader />}
      {hasError && (
        <SC.PlaceholderWrapper>
          <Placeholder>Oops... {error}</Placeholder>
        </SC.PlaceholderWrapper>
      )}
      {noData && (
        <SC.PlaceholderWrapper>
          <Placeholder>Nothing found</Placeholder>
        </SC.PlaceholderWrapper>
      )}
    </SC.PageWrapper>
  );
};

export default DashboardPage;
