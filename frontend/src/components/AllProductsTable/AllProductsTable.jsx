import { useState } from "react";
import toast from "react-hot-toast";

import { Icons } from "@/config/icons";
import { useModal } from "@/hooks/useModal";
import API from "@/services/axios";

import {
  Table,
  Caption,
  TRow,
  TDataCell,
} from "@/components/common/Table/Table.styled";
import { EditProductDataModal } from "@/components/EditProductDataModal/EditProductDataModal";

import * as SC from "./AllProductsTable.styled";

export const AllProductsTable = ({
  products,
  categories,
  suppliers,
  setProducts,
}) => {
  const [currentProduct, setCurrentProduct] = useState(null);
  const { isModalOpen, toggleModal } = useModal();

  const handleEditProductClick = (product) => {
    setCurrentProduct(product);
    toggleModal();
  };

  const handleRemoveProductClick = async (productId) => {
    try {
      const removeProductPromise = API.delete(`/products/${productId}`);
      await toast.promise(removeProductPromise, {
        loading: "Removing...",
        success: () => {
          setProducts((prevState) => ({
            ...prevState,
            paginatedResult: prevState.paginatedResult.filter(
              (product) => product._id !== productId
            ),
          }));
          return "Successful removed!";
        },
        error: (error) => error.message,
      });
    } catch (error) {
      // handled in toast.promise
    }
  };

  return (
    <>
      <Table>
        <Caption>All Products</Caption>
        <thead>
          <TRow>
            <SC.NameColumn>Product info</SC.NameColumn>
            <SC.CategoryColumn>Category</SC.CategoryColumn>
            <SC.StockColumn>Stock</SC.StockColumn>
            <SC.SupplierColumn>Supplier</SC.SupplierColumn>
            <SC.PriceColumn>Price</SC.PriceColumn>
            <SC.ActionColumn>Action</SC.ActionColumn>
          </TRow>
        </thead>
        <tbody>
          {products.map((product) => (
            <TRow key={product._id}>
              <TDataCell>{product.name}</TDataCell>
              <TDataCell>{product.category}</TDataCell>
              <TDataCell>{product.stock}</TDataCell>
              <TDataCell>{product.supplier.name}</TDataCell>
              <TDataCell>{product.price.toLocaleString("en-US")}</TDataCell>
              <SC.ActionDataCell>
                <SC.EditBtn
                  type="button"
                  onClick={() => handleEditProductClick(product)}
                >
                  <SC.ActionIcon>
                    <use href={Icons.edit}></use>
                  </SC.ActionIcon>
                </SC.EditBtn>
                <SC.RemoveBtn
                  type="button"
                  onClick={() => handleRemoveProductClick(product._id)}
                >
                  <SC.ActionIcon>
                    <use href={Icons.trash}></use>
                  </SC.ActionIcon>
                </SC.RemoveBtn>
              </SC.ActionDataCell>
            </TRow>
          ))}
        </tbody>
      </Table>

      {isModalOpen && (
        <EditProductDataModal
          isOpen={isModalOpen}
          onClose={toggleModal}
          product={currentProduct}
          categories={categories}
          suppliers={suppliers}
          setProducts={setProducts}
        />
      )}
    </>
  );
};
