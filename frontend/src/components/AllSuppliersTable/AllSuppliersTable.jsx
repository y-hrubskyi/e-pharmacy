import { useState } from "react";

import { Icons } from "@/config/icons";
import { useModal } from "@/hooks/useModal";

import {
  Table,
  Caption,
  TRow,
  TDataCell,
} from "@/components/common/Table/Table.styled";
import { EditSupplierDataModal } from "@/components/EditSupplierDataModal/EditSupplierDataModal";

import * as SC from "./AllSuppliersTable.styled";

export const AllSuppliersTable = ({ suppliers, setSuppliers }) => {
  const [currentSupplier, setCurrentSupplier] = useState(null);
  const { isModalOpen, toggleModal } = useModal();

  const handleEditSupplierClick = (supplier) => {
    setCurrentSupplier(supplier);
    toggleModal();
  };

  return (
    <>
      <Table>
        <Caption>All Suppliers</Caption>
        <thead>
          <TRow>
            <SC.NameColumn>Supplier info</SC.NameColumn>
            <SC.AddressColumn>Address</SC.AddressColumn>
            <SC.CompanyColumn>Company</SC.CompanyColumn>
            <SC.DeliveryDateColumn>Delivery date</SC.DeliveryDateColumn>
            <SC.AmountColumn>Amount</SC.AmountColumn>
            <SC.StatusColumn>Status</SC.StatusColumn>
            <SC.ActionColumn>Action</SC.ActionColumn>
          </TRow>
        </thead>
        <tbody>
          {suppliers.map((supplier) => (
            <TRow key={supplier._id}>
              <TDataCell>{supplier.name}</TDataCell>
              <SC.AddressDataCell>{supplier.address}</SC.AddressDataCell>
              <SC.CompanyDataCell>{supplier.company}</SC.CompanyDataCell>
              <SC.DeliveryDateDataCell>{supplier.date}</SC.DeliveryDateDataCell>
              <TDataCell>{supplier.amount.toLocaleString("en-US")}</TDataCell>
              <TDataCell>
                <SC.SupplierStatusText data-supplier-status={supplier.status}>
                  {supplier.status}
                </SC.SupplierStatusText>
              </TDataCell>
              <TDataCell>
                <SC.EditBtn
                  type="button"
                  onClick={() => handleEditSupplierClick(supplier)}
                >
                  <SC.ActionIcon>
                    <use href={Icons.edit}></use>
                  </SC.ActionIcon>
                  Edit
                </SC.EditBtn>
              </TDataCell>
            </TRow>
          ))}
        </tbody>
      </Table>

      {isModalOpen && (
        <EditSupplierDataModal
          isOpen={isModalOpen}
          onClose={toggleModal}
          supplier={currentSupplier}
          setSuppliers={setSuppliers}
        />
      )}
    </>
  );
};
