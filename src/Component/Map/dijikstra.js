// const qop = require("query-overpass");
// const startNode = "5233360151";
// const endNode = "5233389505";

// const getCoordinate =  async (nodeId) => {
//    // alert("kuchh bhi");
//    const y = await new Promise((resolve, reject) => {
//             qop(`node(${nodeId});out geom;`, (data, x) => {
//             let c =  x.features[0].geometry.coordinates;
//             resolve(c);
//          }
//       );
//       });   
//       return y;
// }

// const markPoint = async () => {
//    alert("kuchh bhi");
//    const cords = await getCoordinate(startNode);
//    console.log(cords);
// }
// var map = L.map('map').setView([23.127159, 72.542818], 16);
//          L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
//                maxZoom: 19,
//                attribution: '© OpenStreetMap'
//          }).addTo(map);

// markPoint();


// const Dijikstra = ()=>{
   
// }

// export default Dijikstra;