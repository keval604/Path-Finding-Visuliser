import React, {useState } from "react";
import Grid from "./Component/Grid/Grid";
import Header from "./Component/Header/Header";
<<<<<<< HEAD
import MapContainer from "./Component/Map/MapContainer";
=======
import Map from "./Component/Map/GoogleMap";
// import Dijikstra from "./Component/Map/dijikstra";
// import VisContext from "./Context/vis-context";
>>>>>>> 5338d418253a50b6c34e9628d8a8675ff801618a

const rows=20;
const cols=40;

let visArray = (new Array(rows)).fill().map(function(){ return new Array(cols).fill(0);});
let weightArray=[];
for (let i = 0; i < rows; i++) {
    weightArray.push([]);
    for (let j = 0; j < cols; j++) {
      weightArray[i].push(1);
    }
}

const initialCor={
  start:{x:3,y:5},
  end:{x:11,y:22}
}


const VisitContext=React.createContext();
const GridInfoContext=React.createContext();

const App=()=>{ 
    //current val, function to change current val = useState(initial value);
  const [vis,setVis]=useState(visArray);
  const [weight,setWeight]=useState(weightArray);
  const [down,setDown]=useState(false);
 
  const [cor,setCor]=useState(initialCor);
  
  const visitHandler=(row,col,value)=>{
    let newArray=[...vis];
    newArray[row][col]=value;
    setVis(newArray);
  }

  const weightHandler=(row,col,value)=>{
    let newArray=[...weight];
    newArray[row][col]=value;
    setWeight(newArray);
  }

  const mouseHandler=(curr)=>{
    setDown(curr);
  }

  return(
    <>
      {/* <VisitContext.Provider
        value={{
          visited:vis,  //grid array
          setVisited:visitHandler,
          weight:weight,
          setWeight:weightHandler,
          cor:cor,
          mouseHandler:mouseHandler,
          down:down
        }}
      >
          
        <GridInfoContext.Provider value={{ cor: cor, noRows: { rows }, noCols: { cols } }}>
          {/* <Header /> */}
          <Map></Map>
          
          {/* <Grid noRows={rows} noCols={cols} /> */}

          {/* <MapContainer></MapContainer> */}
          {/* <Dijikstra></Dijikstra> */}
          {/* <MapContainer> </MapContainer> */}
          {/* <iframe width="425" height="350" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://www.openstreetmap.org/export/embed.html?bbox=72.53963738679887%2C23.12889068334543%2C72.5426307320595%2C23.130469312503628&amp;layer=mapnik" style="border: 1px solid black"></iframe><br/><small><a href="https://www.openstreetmap.org/#map=19/23.12968/72.54113">View Larger Map</a></small> */}
        </GridInfoContext.Provider>
<<<<<<< HEAD
      </VisitContext.Provider> */}
      <MapContainer></MapContainer>
      
=======
      </VisitContext.Provider>
>>>>>>> 5338d418253a50b6c34e9628d8a8675ff801618a
    </>
  )

}

export default App;
export {VisitContext,GridInfoContext};