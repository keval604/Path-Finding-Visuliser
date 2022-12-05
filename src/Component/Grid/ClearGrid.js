import { useContext } from "react";
import { GridInfoContext, VisitContext } from '../Grid/GridContainer';

let generateClearGrid;

const ClearGrid=()=>{
    const visitCtx=useContext(VisitContext);
    const gridCtx=useContext(GridInfoContext);

    const noRows=gridCtx.noRows.rows;
    const noCols=gridCtx.noCols.cols;
    const cor=gridCtx.cor;

    function generate(visitCtx){
        for(let i=0;i<noRows;i++){
            for(let j=0;j<noCols;j++){
                if((i==cor.start.x && j==cor.start.y) || (i==cor.end.x
                    && j==cor.end.y)) visitCtx.setVisited(i,j,-1);
                else{ 
                    visitCtx.setVisited(i,j,0);
                    visitCtx.setWeight(i,j,0);
                }
            }
        }
    }
    // console.log(visitCtx.visited);
    
    generateClearGrid = () => {
        generate(visitCtx);
    }

    return (
        <button class="btn btn-lg btn-primary px-4" onClick={generateClearGrid}>Clear Grid</button>
    );
}
export { generateClearGrid };
export default ClearGrid;