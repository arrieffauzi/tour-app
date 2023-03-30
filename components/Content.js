import React from "react";
import style from "../styles/Content.module.css";
import {
  SettingFilled,
  QuestionCircleFilled,
  CloseCircleFilled,
} from "@ant-design/icons";
import SideDrawer from "./SideDrawer";
import Header from "./Header";
import MapSection from "./MapSection";

export default function () {
  return (
    <div className={style.container}>
      {/* Content Header */}
      <div className={style.header}>
        <Header />
      </div>

      {/* Content Body */}
      <div className={style.content}>
        <div>
          <MapSection />
        </div>
        <SideDrawer />
      </div>
    </div>
  );
}
