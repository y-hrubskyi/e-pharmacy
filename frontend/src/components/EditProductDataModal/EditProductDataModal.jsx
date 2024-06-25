import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

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

export const EditProductDataModal = ({
  isOpen,
  onClose,
  product,
  categories,
  suppliers,
}) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(productSchema),
    defaultValues: {
      name: product.name,
      category: product.category,
      stock: product.stock,
      supplier: product.supplier.id,
      price: product.price,
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  const categoryOptions = createSelectOptions(categories);
  const supplierOptions = suppliers.map(({ id, name }) => ({
    value: id,
    label: name,
  }));

  return (
    <ModalBase isOpen={isOpen} onClose={onClose}>
      <FormWrapper>
        <FormTitle>Edit product</FormTitle>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <FormFieldsWrapper>
            <FormInput
              type="text"
              {...register("name")}
              placeholder="Product Info"
              data-is-correct={!errors.name}
              data-has-error={errors.name}
            />
            <Controller
              name="category"
              control={control}
              render={({ field: { onChange } }) => (
                <SelectBase
                  defaultValue={{
                    value: product.category,
                    label: product.category,
                  }}
                  options={categoryOptions}
                  placeholder="Category"
                  onChange={onChange}
                  isCorrect={!errors.category}
                  hasError={errors.category}
                />
              )}
            />
            <FormInput
              type="number"
              {...register("stock")}
              placeholder="Stock"
              data-is-correct={!errors.stock}
              data-has-error={errors.stock}
            />
            <Controller
              name="supplier"
              control={control}
              render={({ field: { onChange } }) => (
                <SelectBase
                  defaultValue={{
                    value: product.supplier.id,
                    label: product.supplier.name,
                  }}
                  options={supplierOptions}
                  placeholder="Supplier"
                  onChange={onChange}
                  isCorrect={!errors.supplier}
                  hasError={errors.supplier}
                />
              )}
            />
            <FormInput
              type="number"
              step="any"
              {...register("price")}
              placeholder="Price"
              data-is-correct={!errors.price}
              data-has-error={errors.price}
            />
          </FormFieldsWrapper>

          <FormActionBtnsWrapper>
            <FormSubmitBtn type="submit">Save</FormSubmitBtn>
            <FormCancelBtn type="reset">Cancel</FormCancelBtn>
          </FormActionBtnsWrapper>
        </Form>
      </FormWrapper>
    </ModalBase>
  );
};
