import React, { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./css/web.css";
import L from "leaflet";

function ResetCenterView(props) {
  const { geo, setGeo } = props;
  const map = useMap();

  useEffect(() => {
    if (geo) {
      map.setView(L.latLng(geo?.lat, geo?.lon), map.getZoom(), {
        animate: true,
      });
    }
  }, [geo]);

  return null;
}

export default function Maps(props) {
  const position = [51.505, -0.09];

  const { geo } = props;
  const location = [geo?.lat, geo?.lon];
  const icon = L.icon({
    iconUrl: "../images/placeholder.svg",
    iconSize: [38, 38],
  });

  return (
    <MapContainer
      center={position}
      zoom={18}
      scrollWheelZoom={true}
      style={{ width: "100%", height: "100%", padding: "15px" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://api.maptiler.com/maps/openstreetmap/256/{z}/{x}/{y}.jpg?key=E4Dh2lYt2cGihzrGNRpu"
      />
      {geo && (
        <Marker position={location} icon={icon}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      )}
      <ResetCenterView geo={geo} />
    </MapContainer>
  );
}
