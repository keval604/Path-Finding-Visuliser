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

    async function generate(visitCtx) {
        // const y= await console.log(visitCtx.weight);
        for(let i=0;i<noRows;i++){
            for(let j=0;j<noCols;j++){
                let x=Math.random();
                if ((i === cor.start.x && j === cor.start.y) || (i === cor.end.x
                    && j === cor.end.y)) visitCtx.setVisited(i, j, -1);
                else if (x > 0.7) visitCtx.setWeight(i, j, 1000000);
                else if (x > 0.3) visitCtx.setWeight(i, j, Math.floor(Math.random() * 10)+1); //weighted
                else visitCtx.setWeight(i, j, 1);
            }
        }
        // console.log(visitCtx.weight);
    }
    // console.log(visitCtx.visited);

    function generateRandomGrid() {
        // console.log(visitCtx.weight);
        generateClearGrid();
        generate(visitCtx);
        
    }
    // console.log(visitCtx.weight);
    return (

        <button class="btn btn-lg btn-primary px-4" onClick={generateRandomGrid}>Generate RandomGrid</button>
    );
}

export default RandomGrid;