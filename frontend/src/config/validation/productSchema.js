import * as Yup from "yup";

export const productSchema = Yup.object().shape({
  name: Yup.string()
    .required("Product info is required")
    .matches(/^[a-zA-Z0-9_\- ]{3,30}$/, "Enter a valid Product info*"),
  category: Yup.string().required("Category is required"),
  stock: Yup.number().required("Stock is required").min(0),
  supplier: Yup.string().required("Supplier is required"),
  price: Yup.number().required("Price is required").min(0.01),
});
