import { FC } from "react";
import { Table } from "antd";
import { FormData } from "./types";

type Props = {
  data: Array<FormData>;
};

export const HomeTable: FC<Props> = ({ data }) => (
  <Table columns={columns} dataSource={data} />
);

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Gender",
    dataIndex: "gender",
    key: "gender",
  },
];
