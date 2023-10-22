import React, { FC } from "react";
import { Card, Typography } from "@douyinfe/semi-ui";
const { Title } = Typography;
export type DataChipItem = {
  title: string;
  data: string | number;
  icon?: React.ReactNode;
};
export interface DataChipProps {
  datasource: DataChipItem;
}
const DataChip: FC<DataChipProps> = ({ datasource }) => {
  const { title, data, icon } = datasource;
  return (
    <Card
      className="shadow"
      bodyStyle={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      {icon && <div className="text-5xl">{icon}</div>}
      <div>
        <Title heading={4}>{title}</Title>
        <Title heading={5}>{data}</Title>
      </div>
    </Card>
  );
};

export default DataChip;
