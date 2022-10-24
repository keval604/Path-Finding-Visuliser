import { useContext } from "react";
import { MapContext } from "../../Component/Map/Leaflet";

const qop = require('@derhuerst/query-overpass');

export const dijkstra = (mapCtx) => {
   const getWays = (nodeId) => {
      console.log("inside getWays");
         
      qop(`[out:json];node(${nodeId}); way(bn); out geom;`)
      .then(console.log)
      .catch(console.error)
   }
   function executeDijkstra() {
      // console.log("inside executeDijikstra", mapCtx);
      // const sourceId = getNodeId(mapCtx.source);
      const sourceId = 5233397151;
      const destinationId = 8386270556
      // fetch ways on which current node is present
      getWays(sourceId);
   }
   executeDijkstra();
};