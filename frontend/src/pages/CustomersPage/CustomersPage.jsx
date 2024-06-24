import { useEffect, useState } from "react";

import API from "#services/axios";

import {
  PageWrapper,
  ControlPanel,
  PlaceholderWrapper,
} from "#components/common/Page/Page.styled";
import { Filter } from "#components/common/Filter/Filter";
import { TableWrapper } from "#components/common/Table/Table.styled";
import { CustomersDataTable } from "#components/CustomersDataTable/CustomersDataTable";
import { Paginator } from "#components/common/Paginator/Paginator";
import { Loader } from "#components/common/Loader/Loader";
import { Placeholder } from "#components/common/Placeholder/Placeholder";

const CustomersPage = () => {
  const [customers, setCustomers] = useState(null);
  const [filter, setFilter] = useState("");
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        setError(null);

        const searchParams = new URLSearchParams({ page });
        if (filter) searchParams.set("name", filter.split("/")[0]);

        const { data } = await API.get(`/customers?${searchParams}`);
        setCustomers(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [page, filter]);

  const onFilterSubmit = (value) => {
    setFilter(`${value}/${Date.now()}`);
    setPage(1);
    setCustomers([]);
  };

  const loading = !error && isLoading;
  const hasError = !isLoading && error;
  const content = !error && customers?.paginatedResult?.length > 0;
  const noData =
    !isLoading && !error && customers?.paginatedResult?.length === 0;

  return (
    <PageWrapper>
      <ControlPanel>
        <Filter
          placeholder="User Name"
          fieldName="User Name"
          onFilterSubmit={onFilterSubmit}
          isLoading={isLoading}
        />
      </ControlPanel>

      {content && (
        <>
          <TableWrapper>
            <CustomersDataTable customers={customers.paginatedResult} />
          </TableWrapper>
          <Paginator totalCount={customers.totalCount} setPage={setPage} />
        </>
      )}
      {loading && <Loader />}
      {hasError && (
        <PlaceholderWrapper>
          <Placeholder>Oops... {error}</Placeholder>
        </PlaceholderWrapper>
      )}
      {noData && (
        <PlaceholderWrapper>
          <Placeholder>
            Nothing found. Please check your spelling or try other terms
          </Placeholder>
        </PlaceholderWrapper>
      )}
    </PageWrapper>
  );
};

export default CustomersPage;
