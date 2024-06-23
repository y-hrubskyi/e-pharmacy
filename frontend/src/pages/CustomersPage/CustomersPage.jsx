import { PageWrapper, ControlPanel } from "#components/common/Page/Page.styled";
import { Filter } from "#components/common/Filter/Filter";
import { CustomersDataTable } from "#components/CustomersDataTable/CustomersDataTable";

import * as SC from "./CustomerPage.styled";

const CustomersPage = () => {
  return (
    <PageWrapper>
      <ControlPanel>
        <Filter placeholder="User Name" fieldName="User Name" />
      </ControlPanel>

      <SC.TableWrapper>
        <CustomersDataTable customers={[]} />
      </SC.TableWrapper>
    </PageWrapper>
  );
};

export default CustomersPage;
