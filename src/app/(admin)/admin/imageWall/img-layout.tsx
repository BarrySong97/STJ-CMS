import { FC, useRef, useState } from "react";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import GridLayout, { Layout } from "react-grid-layout";
export interface TestProps {}

// fake data generator

const ImageLayout: FC<TestProps> = () => {
  return (
    <GridLayout
      className="layout ml-[-10px] "
      layout={layout}
      cols={9}
      rowHeight={90}
      width={1102}
    >
      {data?.map((item, i) => {
        return (
          <div key={i}>
            <img src={item.url} alt="" className="h-full w-full object-cover" />
          </div>
        );
      })}
    </GridLayout>
  );
};

export default ImageLayout;
