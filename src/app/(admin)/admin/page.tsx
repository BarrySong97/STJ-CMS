"use client";
import React, { FC } from "react";
import DataChip, { DataChipItem } from "../components/DataChip";
import {
  IcBaselineAccountBox,
  IcBaselineArticle,
  IcRoundCommentBank,
  IcSharpPermMedia,
} from "../icon";
import PostHeatmap from "../components/Heatmap";
export interface AdminProps {}
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
      title: "Medias",
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
      title: "Users",
      data: 100,
      icon: (
        <IcBaselineAccountBox
          style={{
            color: "var(--semi-color-tertiary)",
          }}
        />
      ),
    },
  ];
  return (
    <div>
      <div className="grid grid-cols-4 gap-4 mb-4">
        {dataChipList.map((item) => {
          return <DataChip key={item.title} datasource={item} />;
        })}
      </div>
      <div>
        <PostHeatmap />
      </div>
    </div>
  );
};

export default Admin;
