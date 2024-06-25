import * as Yup from "yup";

export const filterSchema = (fieldName) =>
  Yup.object().shape({
    name: Yup.string().required(`${fieldName} is required`),
  });
