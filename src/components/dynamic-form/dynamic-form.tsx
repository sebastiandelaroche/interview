import { FC } from "react";
import { Form, Button, FormInstance } from "antd";
import styled from "styled-components";
import { getFieldComponent } from "./fields/utils";
import { Field } from "./types";

type DynamicForm = {
  onSubmit: (values: unknown) => void;
  fields: Array<Field>;
  form?: FormInstance;
  loading?: boolean;
};

const Container = styled.div`
  width: 300px;
  border: 1px solid gray;
  border-radius: 10px;
  padding: 2rem;
`;

export const DynamicForm: FC<DynamicForm> = ({
  form,
  fields,
  onSubmit,
  loading,
}) => {
  return (
    <Container>
      <Form form={form} onFinish={onSubmit}>
        {fields.map((field, index) =>
          getFieldComponent({ ...field, key: `field-${index}` })
        )}
        <Button
          type="primary"
          htmlType="submit"
          loading={!!loading}
          style={{ width: "100%" }}
        >
          Submit
        </Button>
      </Form>
    </Container>
  );
};
