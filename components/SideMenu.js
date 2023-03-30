import React, { useContext } from "react";
import style from "../styles/SideMenu.module.css";
import { InfoCircleOutlined, InfoCircleFilled } from "@ant-design/icons";
import { Menu } from "antd";
import { TourContext } from "@/pages";

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
  { name: "Browse", icon: "/icon-browse.png" },
  { name: "Suggest Attraction", icon: "/icon-lion.png" },
  { name: "Videos", icon: "/icon-video.png" },
  { name: "Blog", icon: "/icon-blog.png" },
  { name: "About", icon: "/icon-info.png" },
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
        getItem("Art Science Museum", "Art Science Museum"),
        getItem("Marina Bay Sands Skypark", "Marina Bay Sands Skypark"),
        getItem("Double Helix Bridge", "Double Helix Bridge"),
      ],
      "group"
    ),
  ]),
  {
    type: "divider",
  },
  getItem("Garden by the Bay", "gbb", "", [
    getItem("Gardens By The Bay", "Gardens By The Bay"),
  ]),
  {
    type: "divider",
  },
  getItem("Chinatown", "ch", "", [getItem("Chinatown", "Chinatown")]),
  {
    type: "divider",
  },
  getItem(
    "",
    "",
    null,
    [
      getItem("Asian Civilisations Museum", "Asian Civilisations Museum"),
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
  const { param, setParam } = useContext(TourContext);
  const onClick = (e) => {
    setParam((prev) => {
      return { data: prev.data, menu: e.key };
    });
  };
  
  return (
    <div className={`${style.sideContainer} ${style.fullHeight}`}>
      {/* Menu Icon */}
      <div className={style.menu}>
        {menu.map((item, index) => (
          <div className={style.menuItem} key={index}>
            <div className={style.menuContent}>
              <div className={style.icon}>
                <img src={item.icon}/>
                </div>
              <span className={style.menuName} style={{ marginTop: 5 }}>
                {item.name}
              </span>
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
