"use client";
import { Button, Form, Image, List } from "@douyinfe/semi-ui";
import React, { FC } from "react";
export interface MediaProps {}
const Media: FC<MediaProps> = () => {
  const data = [
    {
      title: "审核管理平台",
      rating: 4.5,
      feedbacks: 124,
    },
    {
      title: "扁鹊",
      rating: 4,
      feedbacks: 108,
    },
    {
      title: "直播审核平台",
      rating: 3.5,
      feedbacks: 244,
    },
    {
      title: "抖音安全测试",
      feedbacks: 189,
    },
    {
      title: "内容平台",
      rating: 3,
      feedbacks: 128,
    },
    {
      title: "策略平台",
      rating: 4,
      feedbacks: 156,
    },
  ];
  return (
    <div className="qqq">
      <div className="flex  justify-between items-center mb-4 ">
        <Button className="mr-2" theme="solid">
          New
        </Button>
        <Form
          layout="horizontal"
          labelPosition="inset"
          onValueChange={(values) => console.log(values)}
        >
          <Form.DatePicker
            field="dataRange"
            label="Data Range"
            type="dateRange"
          ></Form.DatePicker>
        </Form>
      </div>
      <div className="grid grid-cols-6 gap-4">
        {data.map((item) => {
          return (
            <Image
              className="shadow"
              key={item.title}
              // width={200}
              // height={120}
              src="https://lf3-static.bytednsdoc.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/root-web-sites/abstract.jpg"
            />
          );
        })}
      </div>
    </div>
  );
};

export default Media;
