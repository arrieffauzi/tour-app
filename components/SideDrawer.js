import { TourContext } from "@/pages";
import { Drawer, theme } from "antd";
import React, { useContext, useEffect, useState } from "react";
import style from "../styles/Drawer.module.css";
import { IoLocationSharp } from "react-icons/io5";
import { BiWorld } from "react-icons/bi";

export default function SideDrawer(open) {
  const [isOpen, setIsOpen] = useState(false);
  const { param, setParam } = useContext(TourContext);
  const [selected, setSelected] = useState([]);
  const { token } = theme.useToken();

  useEffect(() => {
    setIsOpen(open);
    let currentMenu = [];
    if (param !== {}) {
      currentMenu = param.data.filter((item) => item.placeName == param.menu);
      if (currentMenu.length > 0) {
        setSelected(currentMenu[0]);
        console.log("current", currentMenu[0]);
      }
    }
    console.log('drawer param',param);
  }, [open]);

  const onClose = () => {
    setIsOpen(false);
  };

  const containerStyle = {
    position: "relative",
    height: "100%",
    overflow: "hidden",
    textAlign: "center",
    background: token.colorFillAlter,
  };

  return (
    <div>
      <Drawer
        // title="Basic Drawer"
        headerStyle={{ display: "none" }}
        bodyStyle={{ padding: 0 }}
        placement="right"
        onClose={onClose}
        open={isOpen}
        getContainer={false}
        width={348}
      >
        <div className={style.container}>
          <div className={style.image}>
            {/* <Image src={'/header.png'} width={348} height={180}/> */}
            <img src="/header.png" className={style.img} />
          </div>
          <div className={style.nameContainer}>
            <span className={style.name}>{param.menu && param.menu}</span>
          </div>
          <div className={style.desc}>
            <p>{selected.shortDesc}</p>
            <p style={{ marginTop: 20 }}>
              {selected.longDesc}
            </p>
            <div className={style.address}>
              <span>
                <IoLocationSharp color="#72cdd2" /> 10 Bayfront Avenue,
                Singapore
              </span>
              <span style={{marginTop:10}}>
                <BiWorld color="#92d72e" /> http://www.marinabaysands.com/
              </span>
            </div>
          </div>
        </div>
      </Drawer>
    </div>
  );
}

// import React from 'react'

// export default function SideDrawer() {
//   return (
//     <div>SideDrawer</div>
//   )
// }
