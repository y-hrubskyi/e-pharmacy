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

export const AddNewSupplierModal = ({ isOpen, onClose }) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, dirtyFields },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(supplierSchema),
  });

  const onSubmit = async (data) => {
    console.log(data);
  };

  const isCorrectName = dirtyFields.name && !errors.name;
  const hasErrorName = errors.name;
  const isCorrectAddress = dirtyFields.address && !errors.address;
  const hasErrorAddress = errors.address;
  const isCorrectCompany = dirtyFields.company && !errors.company;
  const hasErrorCompany = errors.company;
  const isCorrectDate = dirtyFields.date && !errors.date;
  const hasErrorDate = errors.date;
  const isCorrectAmount = dirtyFields.amount && !errors.amount;
  const hasErrorAmount = errors.amount;
  const isCorrectStatus = dirtyFields.status && !errors.status;
  const hasErrorStatus = errors.status;

  return (
    <ModalBase isOpen={isOpen} onClose={onClose}>
      <FormWrapper>
        <FormTitle>Add a new supplier</FormTitle>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <FormFieldsWrapper>
            <FormInput
              type="text"
              {...register("name")}
              placeholder="Product Info"
              data-is-correct={isCorrectName}
              data-has-error={hasErrorName}
            />
            <FormInput
              type="text"
              {...register("address")}
              placeholder="Address"
              data-is-correct={isCorrectAddress}
              data-has-error={hasErrorAddress}
            />
            <FormInput
              type="text"
              {...register("company")}
              placeholder="Company"
              data-is-correct={isCorrectCompany}
              data-has-error={hasErrorCompany}
            />
            <Controller
              name="date"
              control={control}
              render={({ field }) => (
                <DatePicker
                  placeholder="Delivery date"
                  onChange={field.onChange}
                  selected={field.value}
                  isCorrect={isCorrectDate}
                  hasError={hasErrorDate}
                />
              )}
            />
            <FormInput
              type="number"
              step="any"
              {...register("amount")}
              placeholder="Amount"
              data-is-correct={isCorrectAmount}
              data-has-error={hasErrorAmount}
            />
            <Controller
              name="status"
              control={control}
              render={({ field: { onChange } }) => (
                <SelectBase
                  options={statusOptions}
                  placeholder="Status"
                  menuHeight={76}
                  onChange={onChange}
                  isCorrect={isCorrectStatus}
                  hasError={hasErrorStatus}
                />
              )}
            />
          </FormFieldsWrapper>

          <FormActionBtnsWrapper>
            <FormSubmitBtn type="submit">Add</FormSubmitBtn>
            <FormCancelBtn type="reset">Cancel</FormCancelBtn>
          </FormActionBtnsWrapper>
        </Form>
      </FormWrapper>
    </ModalBase>
  );
};
