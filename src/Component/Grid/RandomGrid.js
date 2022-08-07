import { useContext } from "react";
import { GridInfoContext, VisitContext } from "../../App";
import { generateClearGrid } from "./ClearGrid";

const RandomGrid = () => {
    const visitCtx=useContext(VisitContext);
    const gridCtx=useContext(GridInfoContext);

    const noRows=gridCtx.noRows.rows;
    const noCols=gridCtx.noCols.cols;
    const cor=gridCtx.cor;

    function generate(visitCtx){
        for(let i=0;i<noRows;i++){
            for(let j=0;j<noCols;j++){
                let x=Math.random();
                if((i==cor.start.x && j==cor.start.y) || (i==cor.end.x
                    && j==cor.end.y)) visitCtx.setVisited(i,j,-1);
                else if(x>0.7) visitCtx.setVisited(i,j,-2);
                else if(x>0.3) visitCtx.setVisited(i,j,Math.floor(Math.random()*10)); //weighted
            }
        }
    }
    // console.log(visitCtx.visited);

    function generateRandomGrid() {
        generateClearGrid();
        generate(visitCtx);
    }

    return (
        <button class="btn btn-lg btn-primary px-4 py-3" onClick={generateRandomGrid}>Generate RandomGrid</button>
    );
}

export default RandomGrid;