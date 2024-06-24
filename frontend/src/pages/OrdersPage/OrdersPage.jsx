import { useEffect, useState } from "react";

import API from "#services/axios";

import { PageWrapper, ControlPanel } from "#components/common/Page/Page.styled";
import { Filter } from "#components/common/Filter/Filter";
import { TableWrapper } from "#components/common/Table/Table.styled";
import { AllOrdersTable } from "#components/AllOrdersTable/AllOrdersTable";

const OrdersPage = () => {
  const [orders, setOrders] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await API.get("/orders");
        setOrders(data);
      } catch (error) {
        //
      }
    })();
  }, []);

  return (
    <PageWrapper>
      <ControlPanel>
        <Filter placeholder="User Name" fieldName="User Name" />
      </ControlPanel>

      {orders?.paginatedResult?.length && (
        <>
          <TableWrapper>
            <AllOrdersTable orders={orders.paginatedResult} />
          </TableWrapper>
        </>
      )}
    </PageWrapper>
  );
};

export default OrdersPage;
