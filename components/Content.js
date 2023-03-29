import React from "react";
import style from "../styles/Content.module.css";
import {
  SettingFilled,
  QuestionCircleFilled,
  CloseCircleFilled,
} from "@ant-design/icons";

export default function () {
  return (
    <div className={style.container}>
      <div className={style.header}>
        <div className={style.titleContainer}>
          <div>
            <span className={style.title}>
              TOP-RATED TOURIST ATTRACTION IN SINGAPORE
            </span>
          </div>
          <div className={style.icon}>
            <SettingFilled style={{marginRight:25}}/>
            <QuestionCircleFilled style={{marginRight:25}}/>
            <CloseCircleFilled />
          </div>
        </div>
      </div>
      <div className={style.content}>content</div>
    </div>
  );
}
