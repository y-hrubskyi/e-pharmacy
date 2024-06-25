import * as Yup from "yup";

export const supplierSchema = Yup.object().shape({
  name: Yup.string()
    .required("Supplier info is required")
    .matches(/^[a-zA-Z0-9_\- ]{3,40}$/, "Enter a valid Supplier info*"),
  address: Yup.string()
    .required("Address is required")
    .matches(/^[a-zA-Z0-9\s,'-]+$/, "Enter a valid Supplier address*"),
  company: Yup.string()
    .required("Company is required")
    .matches(/^[a-zA-Z0-9_\- ]{3,50}$/, "Enter a valid Company name*"),
  date: Yup.string().required("Delivery date is required"),
  amount: Yup.number().required("Price is required").min(0.01),
  status: Yup.string().required("Status is required"),
});
