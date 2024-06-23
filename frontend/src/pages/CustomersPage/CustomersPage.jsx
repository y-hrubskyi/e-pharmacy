import { useEffect, useState } from "react";

import API from "#services/axios";

import { PageWrapper, ControlPanel } from "#components/common/Page/Page.styled";
import { Filter } from "#components/common/Filter/Filter";
import { CustomersDataTable } from "#components/CustomersDataTable/CustomersDataTable";

import * as SC from "./CustomerPage.styled";

const CustomersPage = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await API.get("/customers");
        setCustomers(data.paginatedResult);
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

      {customers.length > 0 && (
        <SC.TableWrapper>
          <CustomersDataTable customers={customers} />
        </SC.TableWrapper>
      )}
    </PageWrapper>
  );
};

export default CustomersPage;
