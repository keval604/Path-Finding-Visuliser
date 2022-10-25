import './map.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { useMapEvents } from 'react-leaflet/hooks'
import { useState } from 'react';

// const qop = require("query-overpass");
const qop = require('@derhuerst/query-overpass');
const start = "5233360151";
const end = "5233389505";

const getCoordinate = async (nodeId) => {
   const y = qop(`node(${nodeId});out geom;`, (data, x) => {
      let cord = x.features[0].geometry.coordinates;
      console.log(cord);
   });
   console.log(y);
   return y;
   console.log(nodeId);
}
// ,[23.1296306,72.5439978]
function EndNode(props) {
   const [cordinate, setCordinate] = useState([props.lat, props.lng]);
   const [isMove, setIsMove] = useState(false);
   const map = useMapEvents({
      click: (e) => {
         if (isMove == true) {
            setCordinate([e.latlng.lat, e.latlng.lng]);
            setIsMove(false);
         }
         
    }
   })
   // draggable={true} 
   return <Marker position={cordinate} eventHandlers={{
      click: (e) => {
         setIsMove(true);
         console.log('marker clicked', e.latlng);
      },
    }}></Marker>;
}

const Map = () => {
   return (
      <MapContainer className='leaflet-container' center={[23.1295773, 72.5419998]} zoom={17} scrollWheelZoom={true}>
         <TileLayer
         attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
         />
         <EndNode lat = "23.1295773" lng = "72.541998" />
         <EndNode lat="23.1296306" lng="72.5439978"/>
      </MapContainer>
   ); 
}

export default Map;