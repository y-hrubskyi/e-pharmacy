import { PageWrapper, ControlPanel } from "#components/common/Page/Page.styled";
import { Filter } from "#components/common/Filter/Filter";
import { TableWrapper } from "#components/common/Table/Table.styled";
import { AllOrdersTable } from "#components/AllOrdersTable/AllOrdersTable";

const OrdersPage = () => {
  return (
    <PageWrapper>
      <ControlPanel>
        <Filter placeholder="User Name" fieldName="User Name" />
      </ControlPanel>

      <TableWrapper>
        <AllOrdersTable orders={[]} />
      </TableWrapper>
    </PageWrapper>
  );
};

export default OrdersPage;
