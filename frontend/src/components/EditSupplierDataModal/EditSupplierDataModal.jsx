import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { supplierSchema } from "#config/validation/supplierSchema";
import { SupplierStatuses } from "#config/constants";
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
import { DatePicker } from "#components/common/DatePicker/DatePicker";

const statusOptions = createSelectOptions(Object.values(SupplierStatuses));

export const EditSupplierDataModal = ({ isOpen, onClose, supplier }) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(supplierSchema),
    defaultValues: {
      name: supplier.name,
      address: supplier.address,
      company: supplier.company,
      date: supplier.date,
      amount: supplier.amount,
      status: supplier.status,
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <ModalBase isOpen={isOpen} onClose={onClose}>
      <FormWrapper>
        <FormTitle>Add a new supplier</FormTitle>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <FormFieldsWrapper>
            <FormInput
              type="text"
              {...register("name")}
              placeholder="Supplier Info"
              data-is-correct={!errors.name}
              data-has-error={errors.name}
            />
            <FormInput
              type="text"
              {...register("address")}
              placeholder="Address"
              data-is-correct={!errors.address}
              data-has-error={errors.address}
            />
            <FormInput
              type="text"
              {...register("company")}
              placeholder="Company"
              data-is-correct={!errors.company}
              data-has-error={errors.company}
            />
            <Controller
              name="date"
              control={control}
              render={({ field }) => (
                <DatePicker
                  placeholder="Delivery date"
                  onChange={field.onChange}
                  selected={field.value}
                  isCorrect={!errors.date}
                  hasError={errors.date}
                />
              )}
            />
            <FormInput
              type="number"
              step="any"
              {...register("amount")}
              placeholder="Amount"
              data-is-correct={!errors.amount}
              data-has-error={errors.amount}
            />
            <Controller
              name="status"
              control={control}
              render={({ field: { onChange } }) => (
                <SelectBase
                  defaultValue={{
                    value: supplier.status,
                    label: supplier.status,
                  }}
                  options={statusOptions}
                  placeholder="Status"
                  menuHeight={76}
                  onChange={onChange}
                  isCorrect={!errors.status}
                  hasError={errors.status}
                />
              )}
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
