import React, {useState } from "react";
import Grid from "./Grid";
import Button from "./Button";
// import VisContext from "./Context/vis-context";

const rows=15;
  const cols=15;

  let visArray = (new Array(rows)).fill().map(function(){ return new Array(cols).fill(0);});
  let disArray=[];
  for (let i = 0; i < rows; i++) {
      disArray.push([]);
      for (let j = 0; j < cols; j++) {
        disArray[i].push(Number.MAX_SAFE_INTEGER);
      }
  }

const initialCor={
  start:{x:2,y:2},
  end:{x:10,y:13}
}


const VisitContext=React.createContext();

const App=()=>{ 

  const [vis,setVis]=useState(visArray);
  const [down,setDown]=useState(false);
 
  const [cor,setCor]=useState(initialCor);
  
  const visitHandler=(row,col,value)=>{
    let newArray=[...vis];
    newArray[row][col]=value;
    setVis(newArray);
  }

  const mouseHandler=(curr)=>{
    setDown(curr);
  }

  return(
    <>
      <h3>Path-Finding stimulation</h3>
      <VisitContext.Provider
        value={{
          visited:vis,
          setVisited:visitHandler,
          cor:cor,
          mouseHandler:mouseHandler,
          down:down
        }}
      >
          <Grid noRows={rows} noCols={cols}/>
      </VisitContext.Provider>
        <h3>Click on any cell to block that cell(cell will not considered in path finding).</h3>
      <Button cor={cor} noRows={rows} noCols={cols} visited={vis} setVisit={visitHandler}/>
    </>
  )

}

export default App;
export {VisitContext};