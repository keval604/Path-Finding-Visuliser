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
    function execute(){
        let func;

        // console.log("kya baat hai");
        // if(algorithm==='dijkstra') func=dijkstra();
        //     // else if(algorithm==='BFS') func=useBfs();
        //     // else if(algorithm==='dfs') func=useDfs();
        //     // else if(algorithm==='A*') func=useAStar();

        switch(algorithm){
            case 'none':
                alert("algorithm select karle pahle");
                break;
            case 'dijkstra':
                dijkstra(visitCtx,gridCtx);
                // func=dijkstra;
                break;
            case 'BFS':
                bfs(visitCtx,gridCtx);
                break;
            case 'DFS':
                dfs(visitCtx,gridCtx);
                break;
            case 'A*':
                astar(visitCtx,gridCtx);
                break;
        }
        // console.log(gridCtx);
        // func(visitCtx.visited,gridCtx)
        // return func
    }
    
    return (
        <button class="button" onClick={execute}>Visualize {algorithm}</button>
    );
}

export default Button;