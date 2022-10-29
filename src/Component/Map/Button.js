import React, { useContext } from 'react';
import { MapContext } from './Leaflet';
import { dijkstra } from '../../Algorithm/MapAlgorithm/dijkstra';
import { bfs } from '../../Algorithm/MapAlgorithm/bfs';

const Button = (props) => {
   const mapCtx = useContext(MapContext);
   const AlgorithmCallHandler = () => {
      // console.log("inside AlgorithmCallHandler", mapCtx, mapCtx.lineArray);
      // dijkstra(mapCtx);
      bfs(mapCtx);
   }
   return(
      <button className="btn btn-md btn-primary mx-auto" onClick={AlgorithmCallHandler}> Visualise</button>
   );  
}

export default Button;