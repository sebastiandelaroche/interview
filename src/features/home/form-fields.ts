import { Field } from "@components/dynamic-form";

export const FORM_FIELDS: Array<Field> = [
  {
    type: "text",
    name: "name",
    label: "Full Name",
    rules: [
      { required: true },
      {
        message: "Only text",
        validator: (_, value) =>
          /^[a-zA-Z ]*$/.test(value)
            ? Promise.resolve()
            : Promise.reject("Only text"),
      },
    ],
  },
  {
    type: "number",
    name: "age",
    label: "Age",
    rules: [{ required: true }],
  },
  {
    type: "select",
    name: "gender",
    label: "Gender",
    options: [
      { label: "Male", value: "male" },
      { label: "Female", value: "female" },
    ],
    rules: [{ required: true }],
  },
];
