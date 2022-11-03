import React, {useState } from "react";

import GridContainer from "./Component/Grid/GridContainer";
import LeafletMap from "./Component/Map/Leaflet";

const App=()=>{ 
  const [containerType,setContainerType]=useState("grid");

  const containerTypeHandler=(container)=>{
    setContainerType(container);
  }

  return (
    <>
        {containerType==="grid" && <GridContainer typeHandler={containerTypeHandler}></GridContainer>}
        {containerType==="map" && <LeafletMap typeHandler={containerTypeHandler}></LeafletMap>}
    </>
  );
};

{/* <iframe width="425" height="350" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://www.openstreetmap.org/export/embed.html?bbox=72.53963738679887%2C23.12889068334543%2C72.5426307320595%2C23.130469312503628&amp;layer=mapnik" style="border: 1px solid black"></iframe><br/><small><a href="https://www.openstreetmap.org/#map=19/23.12968/72.54113">View Larger Map</a></small> */}
export default App;
