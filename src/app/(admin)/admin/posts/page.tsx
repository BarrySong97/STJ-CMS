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
  const data = [
    {
      key: "1",
      name: "Semi Design 设计稿.fig",
      nameIconSrc:
        "https://lf3-static.bytednsdoc.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/figma-icon.png",
      size: "2M",
      owner: "姜鹏志",
      updateTime: "2020-02-02 05:13",
      avatarBg: "grey",
    },
    {
      key: "2",
      name: "Semi Design 分享演示文稿",
      nameIconSrc:
        "https://lf3-static.bytednsdoc.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/docs-icon.png",
      size: "2M",
      owner: "郝宣",
      updateTime: "2020-01-17 05:31",
      avatarBg: "red",
    },
    {
      key: "3",
      name: "设计文档",
      nameIconSrc:
        "https://lf3-static.bytednsdoc.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/docs-icon.png",
      size: "34KB",
      owner: "Zoey Edwards",
      updateTime: "2020-01-26 11:01",
      avatarBg: "light-blue",
    },
  ];

  return (
    <div title="posts">
      <div className="flex  items-center mb-4 ">
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
        <Button className="mr-2" theme="solid">
          Search
        </Button>
        <Button>Reset</Button>
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
