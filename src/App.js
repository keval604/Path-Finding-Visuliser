import React, {useState } from "react";
import Grid from "./Component/Grid/Grid";
import Header from "./Component/Header/Header";
// import VisContext from "./Context/vis-context";

const rows=20;
  const cols=40;

  let visArray = (new Array(rows)).fill().map(function(){ return new Array(cols).fill(1);});
  let disArray=[];
  for (let i = 0; i < rows; i++) {
      disArray.push([]);
      for (let j = 0; j < cols; j++) {
        disArray[i].push(Number.MAX_SAFE_INTEGER);
      }
  }

const initialCor={
  start:{x:2,y:2},
  end:{x:11,y:12}
}


const VisitContext=React.createContext();
const GridInfoContext=React.createContext();

const App=()=>{ 
    //current val, function to change current val = useState(initial value);
  const [vis,setVis]=useState(visArray);
  const [down,setDown]=useState(false);
 
  const [cor,setCor]=useState(initialCor);
  
  const visitHandler=(row,col,value)=>{
    let newArray=[...vis];
    // console.log(vis);
    newArray[row][col]=value;
    setVis(newArray);
  }

  const mouseHandler=(curr)=>{
    setDown(curr);
  }

  return(
    <>
      <VisitContext.Provider
        value={{
          visited:vis,  //grid array
          setVisited:visitHandler,
          cor:cor,
          mouseHandler:mouseHandler,
          down:down
        }}
      >
        <GridInfoContext.Provider value={{cor:cor, noRows:{rows},noCols:{cols}}}>
          <Header />
          <Grid noRows={rows} noCols={cols}/>
        </GridInfoContext.Provider>
      </VisitContext.Provider>
      
    </>
  )

}

export default App;
export {VisitContext,GridInfoContext};