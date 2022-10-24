import React, { useContext } from 'react';
import { MapContext } from './Leaflet';
import { dijkstra } from '../../Algorithm/MapAlgorithm/dijkstra';

const Button = (props) => {
   const mapCtx = useContext(MapContext);
   const AlgorithmCallHandler = () => {
      // console.log("inside AlgorithmCallHandler", mapCtx, mapCtx.lineArray);
      dijkstra(mapCtx);
   }
   return(
      <button className="btn btn-md btn-primary mx-auto" onClick={AlgorithmCallHandler}> Visualise</button>
   );  
}

export default Button;