import { Rule } from "antd/es/form";

export type Field = {
  type: "text" | "number" | "select";
  name: string;
  label: string;
  options?: Array<{ label: string; value: string }>;
  rules?: Array<Rule>;
};
