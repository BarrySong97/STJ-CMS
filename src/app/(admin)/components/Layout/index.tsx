"use client";
import React from "react";
import { Nav, Avatar, Typography } from "@douyinfe/semi-ui";
import {
  IconSemiLogo,
  IconFeishuLogo,
  IconHelpCircle,
  IconBell,
} from "@douyinfe/semi-icons";
import styles from "./index.module.scss";
import { usePathname } from "next/navigation";
import {
  IcBaselinePhotoLibrary,
  MaterialSymbolsAccountCircle,
  MaterialSymbolsDashboard,
  MaterialSymbolsPostOutline,
  PhWallFill,
} from "../../icon";
const { Title } = Typography;
const Layout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname().split("/").pop();

  const navItems = [
    {
      itemKey: "admin",
      link: "/admin",
      text: "Dashboard",
      icon: <MaterialSymbolsDashboard className={styles.iconHeart} />,
      className: styles.navItem,
    },
    {
      itemKey: "photos",
      text: "Photos",
      link: "/admin/photos",
      icon: <IcBaselinePhotoLibrary className={styles.iconCalendar} />,
      className: styles.navItem,
    },
    {
      itemKey: "posts",
      text: "Posts",
      link: "/admin/posts",
      icon: <MaterialSymbolsPostOutline className={styles.iconCalendar} />,
      className: styles.navItem,
    },
    // {
    //   itemKey: "comments",
    //   text: "Comments",
    //   link: "/admin/comments",
    //   icon: <MaterialSymbolsCommentRounded className={styles.iconRadio} />,
    //   className: styles.navItem,
    // },
    {
      itemKey: "profile",
      text: "profile",
      link: "/admin/profile",
      icon: <MaterialSymbolsAccountCircle className={styles.iconToast} />,
      className: styles.navItem,
    },
    {
      itemKey: "imageWall",
      text: "Image Wall",
      link: "/admin/imageWall",
      icon: <PhWallFill className={styles.iconToast} />,
      className: styles.navItem,
    },
  ];
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
