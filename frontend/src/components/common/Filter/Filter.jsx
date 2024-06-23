import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Icons } from "#config/icons";
import { filterSchema } from "#config/validation/filterSchema";

import { TextField } from "#components/common/TextField/TextField";
import * as SC from "./Filter.styled";

export const Filter = ({ placeholder, fieldName }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, dirtyFields },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(filterSchema(fieldName)),
  });

  const onSubmit = async (data) => {
    console.log(data);
  };

  const isCorrectName = dirtyFields.name && !errors.name;
  const hasErrorName = errors.name;

  return (
    <SC.FilterForm onSubmit={handleSubmit(onSubmit)}>
      <TextField hasError={hasErrorName} errorMessage={errors.name?.message}>
        <SC.NameInput
          type="text"
          {...register("name")}
          placeholder={placeholder}
          data-is-correct={isCorrectName}
          data-has-error={hasErrorName}
        />
      </TextField>

      <SC.FilterSubmitBtn type="submit">
        <SC.FilterIcon>
          <use href={Icons.filter}></use>
        </SC.FilterIcon>
        Filter
      </SC.FilterSubmitBtn>
    </SC.FilterForm>
  );
};
