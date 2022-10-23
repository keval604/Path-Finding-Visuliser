import { useContext } from "react";
import { GridInfoContext, VisitContext } from "../../App";
import { generateClearGrid } from "./ClearGrid";

const RandomGrid = () => {
    const visitCtx=useContext(VisitContext);
    const gridCtx=useContext(GridInfoContext);

    const noRows=gridCtx.noRows.rows;
    const noCols=gridCtx.noCols.cols;
    const cor=gridCtx.cor;
    
    // function generate(setVisited,i,j,val){
    //     return new Promise((resolve, reject) => {
    //         setTimeout(() => {
    //             setVisited(i,j,val);
    //         }, time);
    //     });
    // }
    // console.log(visitCtx.visited);

    const generateRandomGrid=async()=>{
        generateClearGrid();
        const time=100;
        for(let i=0;i<noRows;i++){
            for(let j=0;j<noCols;j++){
                let x=Math.random();
                if((i===cor.start.x && j===cor.start.y) || (i===cor.end.x
                    && j===cor.end.y)){
                    setTimeout(() => {
                        visitCtx.setVisited(i,j,-1);
                    }, time);
                } 
                else if(x>0.7){
                    setTimeout(() => {
                        visitCtx.setVisited(i,j,-2);
                    }, time);
                } 
                else if(x>0.3) {
                    setTimeout(() => {
                        visitCtx.setWeight(i,j,Math.floor(Math.random()*10));
                    }, time);
                } 
            }
        }
        // generate(visitCtx);
    }

    return (
        <button class="btn btn-lg btn-primary px-4" onClick={generateRandomGrid}>Generate RandomGrid</button>
    );
}

export default RandomGrid;