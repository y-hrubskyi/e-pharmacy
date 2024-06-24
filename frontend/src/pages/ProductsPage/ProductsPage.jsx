import { useEffect, useState } from "react";

import API from "#services/axios";

import { PageWrapper, ControlPanel } from "#components/common/Page/Page.styled";
import { Filter } from "#components/common/Filter/Filter";
import { AddBtnWithPlusIcon } from "#components/common/AddBtnWithPlusIcon/AddBtnWithPlusIcon";
import { TableWrapper } from "#components/common/Table/Table.styled";
import { AllProductsTable } from "#components/AllProductsTable/AllProductsTable";

const ProductsPage = () => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await API.get("/products");
        setProducts(data);
      } catch (error) {
        //
      }
    })();
  }, []);

  return (
    <PageWrapper>
      <ControlPanel>
        <Filter placeholder="Product Name" fieldName="Product Name" />
        <AddBtnWithPlusIcon onClick={() => {}}>
          Add a new product
        </AddBtnWithPlusIcon>
      </ControlPanel>

      {products?.paginatedResult?.length && (
        <TableWrapper>
          <AllProductsTable products={products.paginatedResult} />
        </TableWrapper>
      )}
    </PageWrapper>
  );
};

export default ProductsPage;
