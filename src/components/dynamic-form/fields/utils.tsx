import { Field } from "../types";
import { NumberInput } from "./number-input";
import { TextInput } from "./text-input";
import { Select } from "./select";

export const getFieldComponent = (field: Field & { key: string }) => {
  switch (field.type) {
    case "number":
      return <NumberInput {...field} />;
    case "text":
      return <TextInput {...field} />;
    case "select":
      return <Select {...field} />;
    default:
      throw new Error("Invalid field type");
  }
};
