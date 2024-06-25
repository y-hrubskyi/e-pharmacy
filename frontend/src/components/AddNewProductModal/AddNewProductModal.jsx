import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import toast from "react-hot-toast";

import API from "#services/axios";
import { productSchema } from "#config/validation/productSchema";
import { createSelectOptions } from "#utils";

import { ModalBase } from "#components/common/ModalBase/ModalBase";
import {
  FormWrapper,
  FormTitle,
  Form,
  FormFieldsWrapper,
  FormInput,
  FormActionBtnsWrapper,
  FormSubmitBtn,
  FormCancelBtn,
} from "#components/common/ModalForm/ModalForm.styled";
import { SelectBase } from "#components/common/SelectBase/SelectBase";

export const AddNewProductModal = ({
  isOpen,
  onClose,
  categories,
  suppliers,
}) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, dirtyFields },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(productSchema),
  });

  const onSubmit = async (data) => {
    const supplierName = suppliers.find(
      (supplier) => supplier.id === data.supplier
    )?.name;

    data.supplier = {
      id: data.supplier,
      name: supplierName,
    };

    try {
      const addProductPromise = API.post("/products", data);
      await toast.promise(addProductPromise, {
        loading: "Adding...",
        success: "Successful added!",
        error: (error) => error.message,
      });
      onClose();
    } catch (error) {
      // handled in toast.promise
    }
  };

  const categoryOptions = createSelectOptions(categories);
  const supplierOptions = suppliers.map(({ id, name }) => ({
    value: id,
    label: name,
  }));

  const isCorrectName = dirtyFields.name && !errors.name;
  const hasErrorName = errors.name;
  const isCorrectCategory = dirtyFields.category && !errors.category;
  const hasErrorCategory = errors.category;
  const isCorrectStock = dirtyFields.stock && !errors.stock;
  const hasErrorStock = errors.stock;
  const isCorrectSupplier = dirtyFields.supplier && !errors.supplier;
  const hasErrorSupplier = errors.supplier;
  const isCorrectPrice = dirtyFields.price && !errors.price;
  const hasErrorPrice = errors.price;

  return (
    <ModalBase isOpen={isOpen} onClose={onClose}>
      <FormWrapper>
        <FormTitle>Add a new product</FormTitle>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <FormFieldsWrapper>
            <FormInput
              type="text"
              {...register("name")}
              placeholder="Product Info"
              data-is-correct={isCorrectName}
              data-has-error={hasErrorName}
            />
            <Controller
              name="category"
              control={control}
              render={({ field: { onChange } }) => (
                <SelectBase
                  options={categoryOptions}
                  placeholder="Category"
                  onChange={onChange}
                  isCorrect={isCorrectCategory}
                  hasError={hasErrorCategory}
                />
              )}
            />
            <FormInput
              type="number"
              {...register("stock")}
              placeholder="Stock"
              data-is-correct={isCorrectStock}
              data-has-error={hasErrorStock}
            />
            <Controller
              name="supplier"
              control={control}
              render={({ field: { onChange } }) => (
                <SelectBase
                  options={supplierOptions}
                  placeholder="Supplier"
                  onChange={onChange}
                  isCorrect={isCorrectSupplier}
                  hasError={hasErrorSupplier}
                />
              )}
            />
            <FormInput
              type="number"
              step="any"
              {...register("price")}
              placeholder="Price"
              data-is-correct={isCorrectPrice}
              data-has-error={hasErrorPrice}
            />
          </FormFieldsWrapper>

          <FormActionBtnsWrapper>
            <FormSubmitBtn type="submit">Add</FormSubmitBtn>
            <FormCancelBtn type="reset" onClick={onClose}>
              Cancel
            </FormCancelBtn>
          </FormActionBtnsWrapper>
        </Form>
      </FormWrapper>
    </ModalBase>
  );
};
