const qop = require('@derhuerst/query-overpass');
   
export const getWays = async(nodeId) => {
    try{
       return await qop(`[out:json];node(${nodeId}); way(bn); out geom;`);
    }
    catch(err){
       console.log(err);
    }

}

export const getCoordinate=async(nodeId)=>{
    try{
       const x=await qop(`[out:json];node(${nodeId});out;`);
       return [x[0].lat,x[0].lon];
    }
    catch(err){
       console.log(err);
    }
 }