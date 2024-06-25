import { PageWrapper, ControlPanel } from "#components/common/Page/Page.styled";
import { Filter } from "#components/common/Filter/Filter";
import { AddBtnWithoutPlusIcon } from "#components/common/AddBtnWithoutPlusIcon/AddBtnWithoutPlusIcon.styled";
import { TableWrapper } from "#components/common/Table/Table.styled";
import { AllSuppliersTable } from "#components/AllSuppliersTable/AllSuppliersTable";

const SuppliersPage = () => {
  return (
    <PageWrapper>
      <ControlPanel>
        <Filter placeholder="Supplier Name" fieldName="Supplier Name" />
        <AddBtnWithoutPlusIcon type="button" onClick={() => {}}>
          Add a new supplier
        </AddBtnWithoutPlusIcon>
      </ControlPanel>

      <TableWrapper>
        <AllSuppliersTable suppliers={[]} />
      </TableWrapper>
    </PageWrapper>
  );
};

export default SuppliersPage;
