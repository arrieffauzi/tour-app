import { TourContext } from "@/pages";
import { Drawer, theme } from "antd";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import style from "../styles/Drawer.module.css";

export default function SideDrawer(open) {
  const [isOpen, setIsOpen] = useState(false);
  const { param, setParam } = useContext(TourContext);
  const { token } = theme.useToken();

  useEffect(() => {
    setIsOpen(open);
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
    <div >
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
            <p>The Merlion is the national personification of Singapore</p>
            <p style={{marginTop:20}}>
              its name combines "mer" meaning the sea, and "lion". The fish body
              represent Singapore's origin as a fishing village when it was
              called Temasek, which mean "Sea Town" in Javanese. The lion head
              represent Singapore's original name-Singapura-meaning "lion city"
              or "kota singa"
            </p>
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

