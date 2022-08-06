import { useContext } from "react";
import { VisitContext,GridInfoContext } from "../../App";

import { dijkstra } from "../../Algorithm/dijkstra";

import {bfs} from "../../Algorithm/bfs";
import {dfs} from "../../Algorithm/dfs";
import {astar} from "../../Algorithm/astar";

const Button=(props)=>{
    const visitCtx=useContext(VisitContext);
    const gridCtx=useContext(GridInfoContext);

    let algorithm=props.selectedAlgo=="none"?'':props.selectedAlgo;
    let speed=props.speed;
    let cor=gridCtx.cor,noRows=gridCtx.noRows.rows,noCols=gridCtx.noCols.cols;

    function clearVisited(){
        for(let i=0;i<noRows;i++){
            for(let j=0;j<noCols;j++)
                if(visitCtx.visited[i][j]< -2)
                    visitCtx.setVisited(i,j,0);
        }
        // console.log("cleared");
        visitCtx.setVisited(cor.start.x,cor.start.y,-1);
        visitCtx.setVisited(cor.end.x,cor.end.y,-1);
    }


    function execute(){
        clearVisited();
        switch(algorithm){
            case 'none':
                alert("algorithm select karle pahle");
                break;
            case 'dijkstra':
                dijkstra(visitCtx,gridCtx,speed);
                break;
            case 'BFS':
                bfs(visitCtx,gridCtx,speed);
                break;
            case 'DFS':
                dfs(visitCtx,gridCtx,speed);
                break;
            case 'A*':
                astar(visitCtx,gridCtx,speed);
                break;
            default:
                break;
        }
    }
    
    return (
        <button class="button" onClick={execute}>Visualize {algorithm}</button>
    );
}

export default Button;