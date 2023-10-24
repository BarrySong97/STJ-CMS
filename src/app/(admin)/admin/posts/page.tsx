"use client";
import { IconHelpCircle, IconMore } from "@douyinfe/semi-icons";
import {
  Avatar,
  Button,
  Card,
  Form,
  Image,
  Table,
  Tag,
  Tooltip,
  Typography,
} from "@douyinfe/semi-ui";
import { ColumnProps } from "@douyinfe/semi-ui/lib/es/table";
import Link from "next/link";
import React, { FC, useEffect, useMemo, useState } from "react";
export interface PostsProps {}
const { Text } = Typography;
const { Option } = Form.Select;

const DAY = 24 * 60 * 60 * 1000;
const Posts: FC<PostsProps> = () => {
  const columns: ColumnProps<any>[] = [
    {
      title: "封面",
      dataIndex: "key",
      render: (text) => {
        return (
          <Image
            width={200}
            height={120}
            src="https://lf3-static.bytednsdoc.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/root-web-sites/abstract.jpg"
          />
        );
      },
    },
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

  const rowSelection = useMemo(
    () => ({
      onChange: (selectedRowKeys, selectedRows) => {
        console.log(
          `selectedRowKeys: ${selectedRowKeys}`,
          "selectedRows: ",
          selectedRows
        );
      },
      getCheckboxProps: (record) => ({
        disabled: record.name === "Michael James", // Column configuration not to be checked
        name: record.name,
      }),
    }),
    []
  );
  const scroll = useMemo(() => ({ y: 650 }), []);

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
    <div title="posts">
      <div className="flex  justify-between items-center mb-4 ">
        <Button className="mr-2" theme="solid">
          <Link href={"/admin/posts/new"}> New</Link>
        </Button>
        <Form
          layout="horizontal"
          labelPosition="inset"
          onValueChange={(values) => console.log(values)}
        >
          <Form.Input showClear field="search" label="Search Posts" />
          <Form.Select
            field="category"
            showClear
            label={{ text: "Category" }}
            style={{ width: 176 }}
          >
            <Option value="admin">代码</Option>
            <Option value="user">生活</Option>
            <Option value="guest">随笔</Option>
          </Form.Select>
          <Form.DatePicker
            field="dataRange"
            label="Data Range"
            type="dateRange"
          ></Form.DatePicker>
        </Form>
      </div>
      <Table
        columns={columns}
        dataSource={dataSource}
        rowSelection={rowSelection}
        scroll={scroll}
      />
    </div>
  );
};

export default Posts;
