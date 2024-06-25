import { useEffect, useState } from "react";

import API from "#services/axios";

import { PageWrapper, ControlPanel } from "#components/common/Page/Page.styled";
import { Filter } from "#components/common/Filter/Filter";
import { AddBtnWithoutPlusIcon } from "#components/common/AddBtnWithoutPlusIcon/AddBtnWithoutPlusIcon.styled";
import { TableWrapper } from "#components/common/Table/Table.styled";
import { AllSuppliersTable } from "#components/AllSuppliersTable/AllSuppliersTable";

const SuppliersPage = () => {
  const [suppliers, setSuppliers] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await API.get("/suppliers");
        setSuppliers(data);
      } catch (error) {
        //
      }
    })();
  }, []);

  return (
    <PageWrapper>
      <ControlPanel>
        <Filter placeholder="Supplier Name" fieldName="Supplier Name" />
        <AddBtnWithoutPlusIcon type="button" onClick={() => {}}>
          Add a new supplier
        </AddBtnWithoutPlusIcon>
      </ControlPanel>

      {suppliers?.paginatedResult?.length > 0 && (
        <TableWrapper>
          <AllSuppliersTable
            suppliers={suppliers.paginatedResult}
            setProducts={setSuppliers}
          />
        </TableWrapper>
      )}
    </PageWrapper>
  );
};

export default SuppliersPage;
