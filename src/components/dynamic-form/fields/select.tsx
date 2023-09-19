import { FC } from "react";
import { Form, Select as SelectAntd } from "antd";
import { Field } from "../types";

export type Props = Field;

export const Select: FC<Props> = ({ options, ...props }) => {
  return (
    <Form.Item {...props}>
      <SelectAntd options={options} />
    </Form.Item>
  );
};
