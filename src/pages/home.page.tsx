import { Form } from "antd";
import { useState } from "react";
import styled from "styled-components";
import { Field, DynamicForm } from "../components/dynamic-form";

const FORM_FIELDS: Array<Field> = [
  {
    type: "text",
    name: "name",
    label: "Full Name",
    rules: [
      { required: true },
      {
        message: "Only text",
        validator: (_, value) => {
          if (/^[a-zA-Z ]*$/.test(value)) {
            return Promise.resolve();
          } else {
            return Promise.reject("Only text");
          }
        },
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

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HomePage = () => {
  const [form] = Form.useForm();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [data, setData] = useState<any>();

  const onSubmitHandle = (values: unknown) => {
    console.log("values", values);
    setData(values);
    form.resetFields();
  };

  return (
    <Container>
      <DynamicForm form={form} fields={FORM_FIELDS} onSubmit={onSubmitHandle} />
      <pre>{JSON.stringify(data || {}, null, 2)}</pre>
    </Container>
  );
};
