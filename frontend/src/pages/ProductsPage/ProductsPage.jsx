import { useEffect, useState } from "react";

import API from "#services/axios";

import {
  PageWrapper,
  ControlPanel,
  PlaceholderWrapper,
} from "#components/common/Page/Page.styled";
import { Filter } from "#components/common/Filter/Filter";
import { AddBtnWithPlusIcon } from "#components/common/AddBtnWithPlusIcon/AddBtnWithPlusIcon";
import { TableWrapper } from "#components/common/Table/Table.styled";
import { AllProductsTable } from "#components/AllProductsTable/AllProductsTable";
import { Paginator } from "#components/common/Paginator/Paginator";
import { Loader } from "#components/common/Loader/Loader";
import { Placeholder } from "#components/common/Placeholder/Placeholder";

const ProductsPage = () => {
  const [products, setProducts] = useState(null);
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

        const { data } = await API.get(`/products?${searchParams}`);
        setProducts(data);
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
    setProducts(null);
  };

  const loading = !error && isLoading;
  const hasError = !isLoading && error;
  const content = !error && products?.paginatedResult?.length > 0;
  const noData =
    !isLoading && !error && products?.paginatedResult?.length === 0;

  return (
    <PageWrapper>
      <ControlPanel>
        <Filter
          placeholder="Product Name"
          fieldName="Product Name"
          onFilterSubmit={onFilterSubmit}
          isLoading={isLoading}
        />
        <AddBtnWithPlusIcon onClick={() => {}}>
          Add a new product
        </AddBtnWithPlusIcon>
      </ControlPanel>

      {content && (
        <>
          <TableWrapper>
            <AllProductsTable products={products.paginatedResult} />
          </TableWrapper>
          <Paginator totalCount={products.totalCount} setPage={setPage} />
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

export default ProductsPage;
