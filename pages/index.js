import React, { createContext, useEffect, useState } from "react";
import styles from "@/styles/Home.module.css";
import { InfoCircleOutlined } from "@ant-design/icons";
import SideMenu from "@/components/SideMenu";
import Content from "@/components/Content";
import MapSection from "@/components/MapSection";
import "mapbox-gl/dist/mapbox-gl.css";

const menu = [
  { name: "Browse", icon: <InfoCircleOutlined /> },
  { name: "Suggest Attraction", icon: <InfoCircleOutlined /> },
  { name: "Videos", icon: <InfoCircleOutlined /> },
  { name: "Blog", icon: <InfoCircleOutlined /> },
  { name: "About", icon: <InfoCircleOutlined /> },
];

export const TourContext = createContext();

export default function Index() {
  const [param, setParam] = useState({data:[],menu:''});

  const getData = async () => {
    try {
      const response = await fetch("./api/location");
      const data = await response.json();
      console.log(data);
      setParam({ data: data.data, menu: "" });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <TourContext.Provider value={{ param, setParam }}>
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
    </TourContext.Provider>
  );
}
