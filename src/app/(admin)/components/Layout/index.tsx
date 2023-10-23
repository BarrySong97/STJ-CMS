"use client";
import React from "react";
import { Nav, Avatar, Breadcrumb, Typography } from "@douyinfe/semi-ui";
import {
  IconSemiLogo,
  IconFeishuLogo,
  IconHelpCircle,
  IconBell,
  IconSetting,
} from "@douyinfe/semi-icons";
import { IconHeart, IconCalendar, IconRadio } from "@douyinfe/semi-icons-lab";
import styles from "./index.module.scss";
import { usePathname } from "next/navigation";
const { Title } = Typography;
const Layout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname().split("/").pop();

  const navItems = [
    {
      itemKey: "admin",
      link: "/admin",
      text: "Dashboard",
      icon: <IconHeart className={styles.iconHeart} />,
      className: styles.navItem,
    },
    {
      itemKey: "media",
      text: "Medias",
      link: "/admin/media",
      icon: <IconCalendar className={styles.iconCalendar} />,
      className: styles.navItem,
    },
    {
      itemKey: "posts",
      text: "Posts",
      link: "/admin/posts",
      icon: <IconCalendar className={styles.iconCalendar} />,
      className: styles.navItem,
    },
    {
      itemKey: "comments",
      text: "Comments",
      link: "/admin/comments",
      icon: <IconRadio className={styles.iconRadio} />,
      className: styles.navItem,
    },
    {
      itemKey: "users",
      text: "Users",
      link: "/admin/users",
      icon: <IconRadio className={styles.iconRadio} />,
      className: styles.navItem,
    },
    {
      itemKey: "settings",
      text: "Settings",
      link: "/admin/settings",
      icon: <IconSetting className={styles.iconToast} />,
      className: styles.navItem,
    },
  ];
  const headerName = navItems.find((v) => v.itemKey === pathname)?.text;
  return (
    <div className={styles.rootSidenavTab}>
      <Nav
        mode="horizontal"
        header={{
          logo: (
            <div className={styles.navigationHeaderLogo}>
              <IconSemiLogo className={styles.semiIconsSemiLogo} />
            </div>
          ),
          text: "STJ - CMS",
        }}
        footer={
          <div className={styles.dIV}>
            <IconFeishuLogo
              size="large"
              className={styles.semiIconsFeishuLogo}
            />
            <IconHelpCircle
              size="large"
              className={styles.semiIconsHelpCircle}
            />
            <IconBell size="large" className={styles.semiIconsBell} />
            <Avatar
              size="small"
              src="https://sf6-cdn-tos.douyinstatic.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/root-web-sites/avatarDemo.jpeg"
              color="blue"
              className={styles.avatar}
            >
              示例
            </Avatar>
          </div>
        }
        className={styles.nav}
      ></Nav>
      <div className={styles.main}>
        <Nav
          mode="vertical"
          items={navItems}
          selectedKeys={[pathname ?? ""]}
          footer={{ collapseButton: true }}
          className={styles.left}
        ></Nav>
        <div className={styles.mainRight}>
          {/* <Title heading={3} className="!mb-2">
            {headerName}
          </Title> */}
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
