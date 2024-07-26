import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import toast from "react-hot-toast";
import { format } from "date-fns";

import API from "@/services/axios";
import { supplierSchema } from "@/config/validation/supplierSchema";
import { SupplierStatuses } from "@/config/constants";
import { createSelectOptions } from "@/utils";

import { ModalBase } from "@/components/common/ModalBase/ModalBase";
import {
  FormWrapper,
  FormTitle,
  Form,
  FormFieldsWrapper,
  FormInput,
  FormActionBtnsWrapper,
  FormSubmitBtn,
  FormCancelBtn,
} from "@/components/common/ModalForm/ModalForm.styled";
import { SelectBase } from "@/components/common/SelectBase/SelectBase";
import { DatePicker } from "@/components/common/DatePicker/DatePicker";

const statusOptions = createSelectOptions(Object.values(SupplierStatuses));

export const EditSupplierDataModal = ({
  isOpen,
  onClose,
  supplier,
  setSuppliers,
}) => {
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

  const onSubmit = async (data) => {
    data.date = format(data.date, "MMMM d, yyyy");

    try {
      const editSupplierPromise = API.put(`/suppliers/${supplier._id}`, data);
      await toast.promise(editSupplierPromise, {
        loading: "Saving...",
        success: ({ data }) => {
          setSuppliers((prevState) => ({
            ...prevState,
            paginatedResult: prevState.paginatedResult.map((supplier) =>
              supplier._id === data._id ? data : supplier
            ),
          }));
          return "Successful saved!";
        },
        error: (error) => error.message,
      });
      onClose();
    } catch (error) {
      // handled in toast.promise
    }
  };

  return (
    <ModalBase isOpen={isOpen} onClose={onClose}>
      <FormWrapper>
        <FormTitle>Edit supplier</FormTitle>
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
            <FormCancelBtn type="reset" onClick={onClose}>
              Cancel
            </FormCancelBtn>
          </FormActionBtnsWrapper>
        </Form>
      </FormWrapper>
    </ModalBase>
  );
};
