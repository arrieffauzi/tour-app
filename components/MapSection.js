import React, { useContext, useEffect, useState } from "react";
import Map, { Marker, Popup } from "react-map-gl";
import { PushpinOutlined } from "@ant-design/icons";
import { TourContext } from "@/pages";
import style from "@/styles/Map.module.css";

export default function MapSection() {
  const { param, setParam } = useContext(TourContext);
  const [zoom, setZoom] = useState(15);
  const [currentPlaceId, setCurrentPlaceId] = useState(null);
  const [location, setLocation] = useState({ lat: 1.28692, lng: 103.85457 });

  useEffect(() => {
    console.log("paramMap", param);
    let currentMenuId = [{ id: 0 }];
    if (param !== {}) {
      currentMenuId = param.data.filter((item) => item.placeName == param.menu);
      if (currentMenuId.length > 0) {
        setCurrentPlaceId(currentMenuId[0].id);
        setLocation({ lat: currentMenuId[0].lat, lng: currentMenuId[0].lng });
        console.log("current", currentMenuId[0].id);
      }
    }
  }, [param]);

  const onClosePopUp = () => {
    setZoom(15);
  };

  const handleMarkerClick = (id, location) => {
    setZoom(17);
    setCurrentPlaceId(id);
    setLocation(location);
  };

  return (
    <div>
      <Map
        initialViewState={{
          latitude: 1.28692,
          longitude: 103.85457,
          zoom: 15,
        }}
        latitude={location.lat}
        longitude={location.lng}
        zoom={zoom}
        style={{ width: 1420, height: 876 }}
        mapStyle="mapbox://styles/mapbox/dark-v11"
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
      >
        {param.data &&
          param.data.map((item, index) => (
            <div key={index}>
              <Marker
                longitude={item.lng}
                latitude={item.lat}
                color="red"
                onClick={() =>
                  handleMarkerClick(item.id, { lat: item.lat, lng: item.lng })
                }
                style={{ cursor: "pointer" }}
                scale={currentPlaceId == item.id ? 2 : 1}
              />

              {item.id == currentPlaceId && (
                <Popup
                  longitude={item.lng}
                  latitude={item.lat}
                  anchor="top-left"
                  onClose={() => {
                    onClosePopUp();
                  }}
                  closeOnClick={false}
                  onOpen={() => {
                    setZoom(17);
                  }}
                >
                  <div className={style.popUpcontent}>
                    <span className={style.placeName}>{item.placeName}</span>
                    <span className={style.desc}>{item.shortDesc}</span>
                  </div>
                </Popup>
              )}
            </div>
          ))}
      </Map>
    </div>
  );
}
