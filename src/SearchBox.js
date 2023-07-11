import React, { useState } from "react";
import "./css/web.css";

const NOMINATIM_BASE_URL =
  "https://nominatim.openstreetmap.org/search?q=135+pilkington+avenue,+birmingham&format=xml&polygon_geojson=1&addressdetails=1";
const params = {
  q: "",
  format: "json",
  addressdetails: "addressdetails",
};
export default function SearchBox(props) {
  const [searchGeo, setSearchGeo] = useState("");
  const [selectedGeo, setSelectedGeo] = useState(props);

  return (
    <div className="search">
      <input
        id="geo"
        value={searchGeo}
        onChange={(event) => setSearchGeo(event.target.value)}
      />
      <button
        className="btn"
        onClick={() => {
          const params = {
            q: searchGeo,
            format: "json",
            addressdetails: 1,
            polygon_geojson: 0,
          };
          const queryString = new URLSearchParams(params).toString();
          const requestOptions = {
            method: "Get",
            redirect: "follow",
          };
          fetch(NOMINATIM_BASE_URL + queryString, requestOptions)
            .then((response) => response.text())
            .then((result) => {
              setSelectedGeo(JSON.parse(result));
            })
            .catch((err) => console.log(err));
        }}
      >
        Search
      </button>
    </div>
  );
}
