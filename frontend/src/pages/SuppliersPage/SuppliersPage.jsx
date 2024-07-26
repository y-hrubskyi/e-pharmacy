import { useEffect, useState } from "react";

import API from "@/services/axios";
import { useModal } from "@/hooks/useModal";

import {
  PageWrapper,
  ControlPanel,
  PlaceholderWrapper,
} from "@/components/common/Page/Page.styled";
import { Filter } from "@/components/common/Filter/Filter";
import { AddBtnWithoutPlusIcon } from "@/components/common/AddBtnWithoutPlusIcon/AddBtnWithoutPlusIcon.styled";
import { TableWrapper } from "@/components/common/Table/Table.styled";
import { AllSuppliersTable } from "@/components/AllSuppliersTable/AllSuppliersTable";
import { Paginator } from "@/components/common/Paginator/Paginator";
import { AddNewSupplierModal } from "@/components/AddNewSupplierModal/AddNewSupplierModal";
import { Loader } from "@/components/common/Loader/Loader";
import { Placeholder } from "@/components/common/Placeholder/Placeholder";

const SuppliersPage = () => {
  const [suppliers, setSuppliers] = useState(null);
  const [filter, setFilter] = useState("");
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { isModalOpen, toggleModal } = useModal();

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        setError(null);

        const searchParams = new URLSearchParams({ page });
        if (filter) searchParams.set("name", filter.split("/")[0]);

        const { data } = await API.get(`/suppliers?${searchParams}`);
        setSuppliers(data);
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
    setSuppliers(null);
  };

  const loading = !error && isLoading;
  const hasError = !isLoading && error;
  const content = !error && suppliers?.paginatedResult?.length > 0;
  const noData =
    !isLoading && !error && suppliers?.paginatedResult?.length === 0;

  return (
    <PageWrapper>
      <ControlPanel>
        <Filter
          placeholder="Supplier Name"
          fieldName="Supplier Name"
          onFilterSubmit={onFilterSubmit}
          isLoading={isLoading}
        />
        <AddBtnWithoutPlusIcon type="button" onClick={toggleModal}>
          Add a new supplier
        </AddBtnWithoutPlusIcon>
      </ControlPanel>

      {content && (
        <>
          <TableWrapper>
            <AllSuppliersTable
              suppliers={suppliers.paginatedResult}
              setSuppliers={setSuppliers}
            />
          </TableWrapper>
          <Paginator totalCount={suppliers.totalCount} setPage={setPage} />
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

      {isModalOpen && (
        <AddNewSupplierModal
          isOpen={isModalOpen}
          onClose={toggleModal}
          setSuppliers={setSuppliers}
        />
      )}
    </PageWrapper>
  );
};

export default SuppliersPage;
