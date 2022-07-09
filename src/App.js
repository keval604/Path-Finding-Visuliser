import React, {useState } from "react";
import Grid from "./Grid";
import Button from "./Button";
// import VisContext from "./Context/vis-context";

const rows=20;
  const cols=20;

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
  end:{x:15,y:13}
}


const VisitContext=React.createContext();

const App=()=>{ 

  const [vis,setVis]=useState(visArray);
 
  const [cor,setCor]=useState(initialCor);
  
  const visitHandler=(row,col,value)=>{
    let newArray=[...vis];
    newArray[row][col]=value;
    setVis(newArray);
  }

  return(
    <>
      <VisitContext.Provider
        value={{
          visited:vis,
          setVisited:visitHandler,
          cor:cor
        }}
      >
          <Grid noRows={rows} noCols={cols}/>
      </VisitContext.Provider>

      <Button cor={cor} noRows={rows} noCols={cols} visited={vis} setVisit={visitHandler}/>
    </>
  )

}

export default App;
export {VisitContext};