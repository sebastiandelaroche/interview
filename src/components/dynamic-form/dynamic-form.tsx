import { FC } from "react";
import { Form, Button } from "antd";
import styled from "styled-components";
import { Field } from "./types";
import { getFieldComponent } from "./fields/utils";

type DynamicForm = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  form?: any;
  onSubmit: (values: unknown) => void;
  fields: Array<Field>;
};

const Container = styled.div`
  border: 1px solid gray;
  padding: 3rem;
  border-radius: 10px;
`;

export const DynamicForm: FC<DynamicForm> = ({ form, fields, onSubmit }) => {
  return (
    <Container>
      <Form
        form={form}
        onFinish={onSubmit}
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
      >
        {fields.map((field, index) =>
          getFieldComponent({ ...field, key: `field-${index}` })
        )}

        <Button type="primary" htmlType="submit" style={{ width: "100%" }}>
          Submit
        </Button>
      </Form>
    </Container>
  );
};
