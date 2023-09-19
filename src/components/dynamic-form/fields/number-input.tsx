import { FC } from "react";
import { Form, InputNumber } from "antd";
import { Field } from "../types";

export type Props = Field;

export const NumberInput: FC<Props> = (props) => {
  return (
    <Form.Item {...props}>
      <InputNumber />
    </Form.Item>
  );
};
