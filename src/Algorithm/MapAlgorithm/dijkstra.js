import { getWays,getCoordinate, getDistance } from "./queryFunctions";

export const mapDijkstra =  (mapCtx) => {
   const sourceId = 5233390625;
   const destinationId = 5204890047;

   let visited=new Array();
   let distance =new Array(); 
   let parent =new Array();

   // console.log(getDistance([23.129448208002582, 72.54414621480198], [23.129418599311766,72.54283745519845]));

   const findMinVertex=(distance)=>{
      let minVertex,minDist=Number.MAX_SAFE_INTEGER;

      for (const key in distance) {
         if(visited[key]!=true){
            const value = distance[key];
            if(value<minDist){
               minDist=value;
               minVertex=key;
            }
         }
      }
      return minVertex;
   }
   
   async function sleep(ms) {
      return new Promise((resolve) => setTimeout(resolve, ms));
   }


   async function executeDijkstra() {
      // const sourceId = getNodeId(mapCtx.source);
      
      distance[sourceId]=0;
      
      while(true){
         let u = findMinVertex(distance);
         
         let cord=await getCoordinate(u);
         if(parent[u]){
            mapCtx.setLineArray([cord,parent[u]]); 
         }
         if(parseInt(u) === destinationId) return;

         visited[u]=true;
         const y = await getWays(u);

         for(let i=0; i<y.length; i++){
            let index=y[i].nodes.indexOf(parseInt(u));
            let adjNode;
            
            if(index > 0){
               adjNode = y[i].nodes[index - 1];
               let adjNodeCord = y[i].geometry[index - 1];

               if (distance[adjNode] === undefined) {
                  distance[adjNode] = distance[u] + getDistance(cord, [adjNodeCord.lat, adjNodeCord.lon]);
               } else {
                  distance[adjNode] = Math.min(distance[adjNode] , distance[u] + getDistance(cord,[adjNodeCord.lat,adjNodeCord.lon]));
               }
               parent[adjNode]= cord;
               
            }
            if(index<y[i].nodes.length-1){
               adjNode=y[i].nodes[index+1];
               let adjNodeCord = y[i].geometry[index + 1];

               if (distance[adjNode] === undefined) {
                  distance[adjNode] = distance[u] + getDistance(cord, [adjNodeCord.lat, adjNodeCord.lon]);
               } else {
                  distance[adjNode] = Math.min(distance[adjNode] , distance[u] + getDistance(cord,[adjNodeCord.lat,adjNodeCord.lon]));
               }
               parent[adjNode]=cord;
            }
         }

      }
     
   }
   executeDijkstra();
};