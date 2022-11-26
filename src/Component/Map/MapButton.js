import { useContext } from "react";
import { MapContext } from "./Leaflet";
import { mapBFS } from "../../Algorithm/MapAlgorithm/bfs";
import { mapDijkstra } from "../../Algorithm/MapAlgorithm/dijkstra";
import { mapAstar } from "../../Algorithm/MapAlgorithm/MapAstar";

const MapButton = (props)=>{
    const mapCtx = useContext(MapContext);
    let algorithm=props.selectedAlgo === "none"?'':props.selectedAlgo;

    function execute(){
        switch(algorithm){
            case 'none':
                alert("algorithm select karle pahle");
                break;
            case 'dijkstra':
                mapDijkstra(mapCtx);
                break;
            case 'BFS':
                mapBFS(mapCtx);
                break;
            // case 'DFS':
            //     dfs(mapCtx);
            //     break;
            case 'A*':
                mapAstar(mapCtx);
                break;
            default:
                break;
        }
    }
    

    return (
        <button class="btn btn-lg btn-primary px-4" onClick={execute}>Visualize {algorithm}</button>
    );
};

export default MapButton;