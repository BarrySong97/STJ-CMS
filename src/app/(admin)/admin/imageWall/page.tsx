"use client";
import { Card } from "@douyinfe/semi-ui";
import React, { FC } from "react";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import GridLayout, { Layout } from "react-grid-layout";
export interface ImageWallProps {}
const ImageWall: FC<ImageWallProps> = () => {
  const data = [
    {
      id: "cllokitvl0008qh35u8d8jfsi",
      createdAt: "2023-08-24T02:52:14.145Z",
      updatedAt: "2023-08-24T02:52:14.145Z",
      url: "https://images-1253529509.cos.ap-chengdu.myqcloud.com/1692845530712.jpg",
      title: null,
      content: null,
    },
    {
      id: "cll3gnypd0000pd3zthaqgk9a",
      createdAt: "2023-08-09T08:21:05.521Z",
      updatedAt: "2023-08-09T08:21:05.521Z",
      url: "https://images-1253529509.cos.ap-chengdu.myqcloud.com/1691569263568.jpg",
      title: null,
      content: null,
    },
    {
      id: "clkw5ttop000kqq3z8uriyi9z",
      createdAt: "2023-08-04T05:43:19.945Z",
      updatedAt: "2023-08-04T05:43:19.945Z",
      url: "https://pic.imgdb.cn/item/64a38a1f1ddac507cc5eb255.jpg",
      title: null,
      content: null,
    },
    {
      id: "clkw5tlwf000iqq3z4nodpkpa",
      createdAt: "2023-08-04T05:43:09.856Z",
      updatedAt: "2023-08-04T05:43:09.856Z",
      url: "https://pic.imgdb.cn/item/64a38a1f1ddac507cc5eb318.jpg",
      title: null,
      content: null,
    },
    {
      id: "clkw5tgku000gqq3z6jn8rz9o",
      createdAt: "2023-08-04T05:43:02.958Z",
      updatedAt: "2023-08-04T05:43:02.958Z",
      url: "https://pic.imgdb.cn/item/64a38a271ddac507cc5ec193.jpg",
      title: null,
      content: null,
    },
    {
      id: "clkw5t9bf000eqq3zplmke5i0",
      createdAt: "2023-08-04T05:42:53.547Z",
      updatedAt: "2023-08-04T05:42:53.547Z",
      url: "https://pic.imgdb.cn/item/64a38a281ddac507cc5ec22c.jpg",
      title: null,
      content: null,
    },
    {
      id: "clkw5t52h000cqq3ztj6cxtzn",
      createdAt: "2023-08-04T05:42:48.041Z",
      updatedAt: "2023-08-04T05:42:48.041Z",
      url: "https://pic.imgdb.cn/item/64a38a281ddac507cc5ec26f.jpg",
      title: null,
      content: null,
    },
    {
      id: "clkw5szsg000aqq3z0asn06za",
      createdAt: "2023-08-04T05:42:41.200Z",
      updatedAt: "2023-08-04T05:42:41.200Z",
      url: "https://pic.imgdb.cn/item/64a38a281ddac507cc5ec2d8.jpg",
      title: null,
      content: null,
    },
  ];
  const layout =
    '[{"w":2,"h":3,"x":7,"y":7,"i":"0","moved":false,"static":false},{"w":3,"h":5,"x":0,"y":0,"i":"1","moved":false,"static":false},{"w":4,"h":3,"x":3,"y":3,"i":"2","moved":false,"static":false},{"w":2,"h":5,"x":7,"y":0,"i":"3","moved":false,"static":false},{"w":3,"h":5,"x":0,"y":5,"i":"4","moved":false,"static":false},{"w":4,"h":3,"x":3,"y":0,"i":"5","moved":false,"static":false},{"w":4,"h":4,"x":3,"y":6,"i":"6","moved":false,"static":false},{"w":2,"h":2,"x":7,"y":5,"i":"7","moved":false,"static":false}]';

  return (
    <Card
      title="Image Wall"
      style={{
        maxWidth: 1125,
      }}
    >
      <GridLayout
        className="layout ml-[-10px] "
        layout={JSON.parse(layout) as any}
        cols={9}
        rowHeight={90}
        width={1102}
      >
        {data?.map((item, i) => {
          return (
            <div key={i}>
              <img
                src={item.url}
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
          );
        })}
      </GridLayout>
    </Card>
  );
};

export default ImageWall;
