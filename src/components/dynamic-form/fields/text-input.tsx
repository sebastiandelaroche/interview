import { FC } from "react";
import { Form, Input } from "antd";
import { Field } from "../types";

export type Props = Field;

export const TextInput: FC<Props> = (props) => {
  return (
    <Form.Item {...props}>
      <Input />
    </Form.Item>
  );
};
