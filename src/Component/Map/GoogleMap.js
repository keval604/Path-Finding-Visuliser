import './map.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { useMapEvents } from 'react-leaflet/hooks'

const qop = require("query-overpass");
const startNode = "5233360151";
const endNode = "5233389505";

const getCoordinate = (nodeId) => {
   return new Promise((resolve, reject) => {
            qop(`node(${nodeId});out geom;`, (data, x) => {
            let c =  x.features[0].geometry.coordinates;
            console.log(x);
            resolve(c);
         });
   });   
   // const y = qop(`node(${nodeId});out geom;`, (data, x) => {
   //          let c =  x.features[0].geometry.coordinates;
   //    });
   // console.log("hiii");
   // return y;
}

const markPoint =  async () => {
   const cords = await getCoordinate(startNode);
   console.log(cords)
   return cords;
}

function MyComponent() {
  const map = useMapEvents({
     click: () => {
      map.locate()
    },
     locationfound: (location) => {
        console.log('location found:', location);
        markPoint();
    },
  })
  return null
}


const Map = async () => {
   return (
      <MapContainer className='leaflet-container' center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
         <TileLayer
         attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
         />
         
         <MyComponent />
      </MapContainer>

   ); 
}


export default Map;