import { useContext } from "react";
import { GridInfoContext, VisitContext } from "../../App";

const RandomGrid=()=>{
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
                else if(x>0.6) visitCtx.setVisited(i,j,Math.floor(Math.random()*10)); //weighted
            }
        }
    }
    console.log(visitCtx.visited);

    function generateRandomGrid(){
        generate(visitCtx);
    }

    return (
        <button class="button" onClick={generateRandomGrid}>generateRandomGrid</button>
    );
}

export default RandomGrid;