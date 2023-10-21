"use client";
import React from "react";
import { Avatar, Button, Form, Upload } from "@douyinfe/semi-ui";
import styles from "./index.module.scss";

const Users = () => {
  return (
    <div className={styles.rootBio}>
      <div className={styles.content}>
        <div className={styles.banner}>
          <img
            src="https://lf9-static.semi.design/obj/semi-tos/template/4f8a1157-99b3-4aeb-b7d5-06c520656ec7.png"
            className={styles.rectangle3}
          />
          <Button type="tertiary" className={styles.button}>
            编辑封面
          </Button>
        </div>
        <div className={styles.profile}>
          <Form className={styles.form}>
            <div className={styles.frame1312316522}>
              <div className={styles.frame1312316520}>
                <Form.Input
                  label={{ text: "First Name" }}
                  field="input"
                  placeholder="请输入内容"
                  initValue="默认值"
                  style={{ width: 330 }}
                  fieldStyle={{ flexGrow: 1, flexBasis: 0, padding: 0 }}
                />
                <Form.Input
                  label={{ text: "Last Name" }}
                  field="field1"
                  placeholder="请输入内容"
                  initValue="默认值"
                  style={{ width: 330 }}
                  fieldStyle={{ flexGrow: 1, flexBasis: 0, padding: 0 }}
                />
              </div>
              <Form.Input
                label={{ text: "Email Address" }}
                field="field2"
                placeholder="请输入"
                style={{ width: "100%" }}
                fieldStyle={{ alignSelf: "stretch", padding: 0 }}
              />
            </div>
            <div className={styles.frame1312316523}>
              <Form.TextArea
                label={{ text: "Bio" }}
                field="textare"
                placeholder="请输入内容"
                validateStatus="default"
                style={{ width: "100%" }}
                fieldStyle={{ alignSelf: "stretch", padding: 0 }}
              />
              <Form.Input
                label={{ text: "Website" }}
                field="field3"
                placeholder="请输入"
                prefix="https://"
                insetLabel="https://"
                style={{ width: "100%" }}
                fieldStyle={{ alignSelf: "stretch", padding: 0 }}
              />
              <div className={styles.formField5frEnabled}>
                <div className={styles.label}>
                  <p className={styles.portfolio}>Portfolio</p>
                </div>
                <Upload
                  action="https://run.mocky.io/v3/d6ac5c9e-4d39-4309-a747-7ed3b5694859"
                  dragSubText="仅支持 png, jpeg"
                  draggable={true}
                  promptPosition="left"
                  defaultFileList={[
                    {
                      uid: "1",
                      name: "file1.jpeg",
                      status: "success",
                      size: "130kb",
                      url: "https://lf3-static.bytednsdoc.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/semi-linker/semi-logo.png",
                    },
                    {
                      uid: "2",
                      name: "file2.jpeg",
                      status: "success",
                      size: "222kb",
                      url: "https://lf3-static.bytednsdoc.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/semi-linker/semi-logo.png",
                    },
                  ]}
                  dragMainText="点击上传文件或拖拽文件到这里"
                  className={styles.upload}
                />
              </div>
            </div>
          </Form>
          <div className={styles.avatar}>
            <Avatar
              size="extra-large"
              src="https://sf6-cdn-tos.douyinstatic.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/root-web-sites/avatarDemo.jpeg"
              color="blue"
              className={styles.avatar}
            >
              示例
            </Avatar>
            <div className={styles.frame1312316525}>
              <p className={styles.richardHendricks}>Richard Hendricks</p>
              <p className={styles.aRichardHendricks}>@RichardHendricks</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
