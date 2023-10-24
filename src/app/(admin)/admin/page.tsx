"use client";
import React, { FC, useEffect, useState } from "react";
import DataChip, { DataChipItem } from "../components/DataChip";
import {
  IcBaselineAccountBox,
  IcBaselineArticle,
  IcRoundCommentBank,
  IcSharpPermMedia,
  MdiEye,
} from "../icon";
import PostHeatmap from "../components/Heatmap";
import LineChart from "../components/LineChart";
import { Card, Table, Tag, Typography } from "@douyinfe/semi-ui";
import { ColumnProps } from "@douyinfe/semi-ui/lib/es/table";
export interface AdminProps {}
const { Text } = Typography;
const DAY = 24 * 60 * 60 * 1000;
const Admin: FC<AdminProps> = () => {
  const dataChipList: DataChipItem[] = [
    {
      title: "Posts",
      data: 100,
      icon: (
        <IcBaselineArticle
          style={{
            color: "var(--semi-color-primary)",
          }}
        />
      ),
    },
    {
      title: "Photos",
      data: 100,

      icon: (
        <IcSharpPermMedia
          style={{
            color: "var(--semi-color-success)",
          }}
        />
      ),
    },
    {
      title: "Comments",
      data: 100,
      icon: (
        <IcRoundCommentBank
          style={{
            color: "var(--semi-color-secondary)",
          }}
        />
      ),
    },
    {
      title: "Views",
      data: 100,
      icon: (
        <MdiEye
          style={{
            color: "var(--semi-color-tertiary)",
          }}
        />
      ),
    },
  ];
  const columns: ColumnProps<any>[] = [
    {
      title: "标题",
      dataIndex: "name",
      render: (text, record, index) => {
        return (
          <Text
            ellipsis={{
              showTooltip: {
                opts: { content: "架构|Semi-inf|graph.cheet.relation" },
              },
            }}
            // strong
            link={{ href: "https://semi.design/" }}
            underline
          >
            {text}
          </Text>
        );
      },
    },
    {
      title: "分类",
      dataIndex: "size",
      render: (text) => {
        return (
          <Tag size="large" color="cyan">
            {text}
          </Tag>
        );
      },
    },
    {
      title: "创建日期",
      dataIndex: "updateTime",
    },
    {
      title: "更新日期",
      dataIndex: "createDate",
    },
  ];
  const [dataSource, setData] = useState([]);

  const getData = () => {
    const data = [];
    for (let i = 0; i < 46; i++) {
      const isSemiDesign = i % 2 === 0;
      const randomNumber = (i * 1000) % 199;
      data.push({
        key: "" + i,
        name: isSemiDesign
          ? `Semi Design 设计稿${i}.fig`
          : `Semi D2C 设计稿${i}.fig`,
        owner: isSemiDesign ? "姜鹏志" : "郝宣",
        size: randomNumber,
        updateTime: new Date().valueOf() + randomNumber * DAY,
        avatarBg: isSemiDesign ? "grey" : "red",
      });
    }
    return data;
  };

  useEffect(() => {
    const data = getData();
    setData(data);
  }, []);

  return (
    <div>
      <div className="flex gap-4">
        <Card title="Posts Table" className="flex-1">
          <Table
            pagination={{
              pageSize: 10,
            }}
            columns={columns}
            dataSource={dataSource}
          />
        </Card>
        <div className="flex-1 flex flex-col gap-4">
          <div className="grid grid-cols-2 grid-rows-2 gap-4 mb-4">
            {dataChipList.map((item) => {
              return <DataChip key={item.title} datasource={item} />;
            })}
          </div>
          <Card title="Posts Calendar" className="">
            <PostHeatmap />
          </Card>
          <Card title="Views Trends" className="mt-4 ">
            <LineChart />
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Admin;
