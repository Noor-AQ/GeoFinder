import React, { useState } from "react";
import SearchBox from "./SearchBox";
import Maps from "./Maps";
import "./css/web.css";

function App() {
  const [geo, setGeo] = useState(null);
  return (
    <div className="container">
      <div>
        <SearchBox selectedGeo={geo} setSelectedGeo={setGeo} />
      </div>
      <div className="map" style={{ width: "100vw", height: "70vh" }}>
        <Maps geo={geo} />
      </div>
    </div>
  );
}

export default App;
