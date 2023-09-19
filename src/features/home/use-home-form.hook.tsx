import { useState } from "react";
import { Form } from "antd";
import { FormData } from "./types";

const fakeHttpRequest = (data: FormData) =>
  new Promise((resolve) => setTimeout(() => resolve(data), 1000));

export function useHomeForm() {
  const [form] = Form.useForm();
  const [data, setData] = useState<Array<FormData>>([]);
  const [loading, setLoading] = useState<boolean>(false);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = async (values: FormData | any) => {
    try {
      setLoading(true);
      await fakeHttpRequest(values);
      setData([...data, values]);
    } catch (error) {
      // TODO: manage the error
      // Add error component layer, Maybe!!! 🙈
    } finally {
      form.resetFields();
      setLoading(false);
    }
  };

  return { form, onSubmit, data, loading };
}
