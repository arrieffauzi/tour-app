import React from "react";
import styles from "@/styles/Home.module.css";
import { InfoCircleOutlined } from "@ant-design/icons";
import SideMenu from "@/components/SideMenu";
import Content from "@/components/Content";

const menu = [
  { name: "Browse", icon: <InfoCircleOutlined /> },
  { name: "Suggest Attraction", icon: <InfoCircleOutlined /> },
  { name: "Videos", icon: <InfoCircleOutlined /> },
  { name: "Blog", icon: <InfoCircleOutlined /> },
  { name: "About", icon: <InfoCircleOutlined /> },
];

export default function Index() {
  return (
    <div className={styles.home}>
      {/* Side Menu Section */}
      <div className={styles.sideMenu}>
        <SideMenu />
      </div>
      {/* Content Section */}
      <div className={styles.content}>
        <Content />
      </div>
    </div>
  );
}
