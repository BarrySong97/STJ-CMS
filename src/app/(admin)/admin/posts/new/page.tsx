"use client";
import { IconPlus, IconUpload } from "@douyinfe/semi-icons";
import { Button, Col, Divider, Form, Row, Upload } from "@douyinfe/semi-ui";
import React, { FC, useCallback, useMemo, useState } from "react";
import { BaseEditor, createEditor } from "slate";
import { Slate, Editable, withReact, ReactEditor } from "slate-react";
export interface NewPostProps {}
const { Section, Input, DatePicker, TextArea } = Form;
const NewPost: FC<NewPostProps> = () => {
  const editor = useMemo(() => withReact(createEditor()), []);
  const initialValue = [
    {
      type: "paragraph",
      children: [{ text: "A line of text in a paragraph." }],
    },
  ];
  return (
    <div className="flex h-full">
      <div className="flex-[3] overflow-auto h-full">
        <Slate editor={editor} initialValue={initialValue}>
          <Editable />
        </Slate>
      </div>
      <Divider layout="vertical" margin="24px" className="!h-full" />
      <div className="flex-1">
        <Form onValueChange={(v) => console.log(v)}>
          <Section text={"Meta"}>
            <Upload
              action="https://api.semi.design/upload"
              draggable={true}
              dragMainText={"Upload cover"}
              className="mt-4"
              dragSubText="支持任意类型文件"
            ></Upload>
            <Input
              field="name"
              label="Title"
              initValue={"mikeya"}
              trigger="blur"
            />
            <DatePicker
              field="date"
              label="日期（DatePicker）"
              placeholder="请选择生效日期"
            />
            <TextArea field="description" label="description" />
          </Section>
          <Button
            theme="solid"
            type="primary"
            htmlType="submit"
            className="btn-margin-right"
          >
            Create
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default NewPost;
