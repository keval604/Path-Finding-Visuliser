import React, {useState } from "react";
import Grid from "./Component/Grid/Grid";
import Header from "./Component/Header/Header";
// import VisContext from "./Context/vis-context";

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
  start:{x:2,y:2},
  end:{x:11,y:12}
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
    // console.log(vis);
    newArray[row][col]=value;
    setVis(newArray);
  }

  const weightHandler=(row,col,value)=>{
    let newArray=[...weight];
    // console.log(vis);
    newArray[row][col]=value;
    setWeight(newArray);
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
          weight:weight,
          setWeight:weightHandler,
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