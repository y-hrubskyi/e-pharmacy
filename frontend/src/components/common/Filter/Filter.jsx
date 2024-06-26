import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Icons } from "#config/icons";
import { filterSchema } from "#config/validation/filterSchema";

import { TextField } from "#components/common/TextField/TextField";
import * as SC from "./Filter.styled";

export const Filter = ({
  placeholder,
  fieldName,
  onFilterSubmit,
  isLoading,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors, dirtyFields },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(filterSchema(fieldName)),
  });

  const onSubmit = (data) => {
    onFilterSubmit(data.name);
  };

  const handleResetFilter = () => {
    onFilterSubmit("");
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

      <SC.FilterActionBtn type="submit" disabled={isLoading}>
        <SC.FilterIcon>
          <use href={Icons.filter}></use>
        </SC.FilterIcon>
        Filter
      </SC.FilterActionBtn>
      <SC.FilterActionBtn
        type="reset"
        disabled={isLoading}
        onClick={handleResetFilter}
      >
        Reset
      </SC.FilterActionBtn>
    </SC.FilterForm>
  );
};
