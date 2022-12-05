import React from "react";
import { useState } from "react";
import Grid from '../Grid/Grid';
import Header from '../Header/Header';

const VisitContext=React.createContext();
const GridInfoContext = React.createContext();

const GridContainer = (props)=>{
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

    const [vis,setVis]=useState(visArray);
    const [weight,setWeight]=useState(weightArray);
    const [down, setDown] = useState(false);
    const[speed, setSpeed] = useState(1);
    
    const [cor,setCor]=useState(initialCor);
    
    const visitHandler=(row,col,value)=>{
        let newArray=[...vis];
        newArray[row][col]=value;
        // console.log(newArray);
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

    const SpeedHandler = (val) => {
        setSpeed(val);
    }


    return (
      <>
        <VisitContext.Provider
            value={{
            visited:vis,  //grid array
            setVisited:visitHandler,
            weight:weight,
            setWeight:weightHandler,
            cor:cor,
            mouseHandler:mouseHandler,
            down: down,
            speed: speed,
            setSpeed:SpeedHandler
            }}
        >
            
                <GridInfoContext.Provider value={{ cor: cor, noRows: { rows }, noCols: { cols } }}>
                <Header typeHandler={props.typeHandler} type="grid" speed={speed}/>
                <Grid noRows={rows} noCols={cols} />
            </GridInfoContext.Provider>
        </VisitContext.Provider> 
      </>  
    );
};

export default GridContainer;
export {VisitContext,GridInfoContext};
