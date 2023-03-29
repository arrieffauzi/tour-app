import React from "react";
import style from "../styles/SideMenu.module.css";
import {
  MailOutlined,
  SettingOutlined,
  InfoCircleOutlined,
  AppstoreOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

// Menu Item
const menu = [
  { name: "Browse", icon: <InfoCircleOutlined /> },
  { name: "Suggest Attraction", icon: <InfoCircleOutlined /> },
  { name: "Videos", icon: <InfoCircleOutlined /> },
  { name: "Blog", icon: <InfoCircleOutlined /> },
  { name: "About", icon: <InfoCircleOutlined /> },
];

// Filter Menu Item
const items = [
  getItem("", "mer", null, [getItem("Merlion", "Merlion")], "group"),
  {
    type: "divider",
  },
  getItem("Marina Bay Sands", "mbs", "", [
    getItem(
      "",
      "mb1",
      null,
      [
        getItem("ArtScience Museum", "ArtScience Museum"),
        getItem("Marina Bay Sands Skypark", "Marina Bay Sands Skypark"),
        getItem("Double Helix Bridge", "Double Helix Bridge"),
      ],
      "group"
    ),
  ]),
  {
    type: "divider",
  },
  getItem("Garden by the Bay", "gbb", "", []),
  {
    type: "divider",
  },
  getItem(
    "",
    "",
    null,
    [
      getItem("Asian Civilisations Musemum", "Asian Civilisations Musemum"),
      {
        type: "divider",
      },
      getItem("Clarke Quay", "Clarke Quay"),
      {
        type: "divider",
      },
      getItem("Fort Canning Park", "Fort Canning Park"),
      {
        type: "divider",
      },
      getItem("Singapore Flyer", "Singapore Flyer"),
      {
        type: "divider",
      },
      getItem("Orchard Road", "Orchard Road"),
    ],
    "group"
  ),
];

export default function SideMenu() {
  const onClick = (e) => {
    console.log("click ", e);
  };
  return (
    <div className={`${style.sideContainer} ${style.fullHeight}`}>
      {/* Menu Icon */}
      <div className={style.menu}>
        {menu.map((item, index) => (
          <div className={style.menuItem} key={index}>
            <div className={style.menuContent}>
              {item.icon}
              <span style={{ marginTop: 5 }}>{item.name}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Detail Menu */}
      <div className={style.filter}>
        {/* component by ant design */}
        <Menu
          className={style.filterMenu}
          onClick={onClick}
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          mode="inline"
          items={items}
          rootClassName={style.filterComponent}
          
        />
      </div>
    </div>
  );
}
