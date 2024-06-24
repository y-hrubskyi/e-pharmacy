import { PageWrapper, ControlPanel } from "#components/common/Page/Page.styled";
import { Filter } from "#components/common/Filter/Filter";
import { AddBtnWithPlusIcon } from "#components/common/AddBtnWithPlusIcon/AddBtnWithPlusIcon";
import { TableWrapper } from "#components/common/Table/Table.styled";
import { AllProductsTable } from "#components/AllProductsTable/AllProductsTable";

const ProductsPage = () => {
  return (
    <PageWrapper>
      <ControlPanel>
        <Filter placeholder="Product Name" fieldName="Product Name" />
        <AddBtnWithPlusIcon onClick={() => {}}>
          Add a new product
        </AddBtnWithPlusIcon>
      </ControlPanel>

      <TableWrapper>
        <AllProductsTable products={[]} />
      </TableWrapper>
    </PageWrapper>
  );
};

export default ProductsPage;
