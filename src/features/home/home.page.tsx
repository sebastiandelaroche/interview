import styled from "styled-components";
import { DynamicForm } from "@components/dynamic-form";
import { HomeTable } from "./home-table";
import { FORM_FIELDS } from "./form-fields";
import { useHomeForm } from "./use-home-form.hook";

const Container = styled.div`
  width: 100%;
`;

const FormContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 0px;
`;

export const HomePage = () => {
  const { form, data, onSubmit, loading } = useHomeForm();

  return (
    <Container>
      <FormContainer>
        <DynamicForm
          form={form}
          fields={FORM_FIELDS}
          onSubmit={onSubmit}
          loading={loading}
        />
      </FormContainer>
      <HomeTable data={data} />
    </Container>
  );
};
