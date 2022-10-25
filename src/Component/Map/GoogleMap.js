import './map.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { useMapEvents } from 'react-leaflet/hooks'
import { useState } from 'react';
import L  from 'leaflet';

// const qop = require("query-overpass");
const qop = require('@derhuerst/query-overpass');
const start = "5233360151";
const end = "5233389505";

const sourceIcon = new L.Icon({
   iconUrl: require("../../Images/sourceIcon.png"),
   iconSize: [40, 40],
   iconAnchor: [17, 45],
   popupAnchor: [3,-46]
});

const destIcon = new L.Icon({
   iconUrl: require("../../Images/destIcon.png"),
   iconSize: [40, 40],
   iconAnchor: [17, 45],
   popupAnchor: [3,-46]
});


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
   return <Marker position={cordinate} icon = {props.icon} eventHandlers={{
      click: (e) => {
         setIsMove(true);
         console.log('marker clicked', e);
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
         <EndNode lat="23.1295773" lng="72.541998" icon={destIcon} />
         <EndNode lat="23.1296306" lng="72.5439978" icon ={sourceIcon} />
      </MapContainer>
   ); 
}

export default Map;