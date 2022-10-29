import './map.css';
import React, { useContext } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import { useMapEvents } from 'react-leaflet/hooks'
import { useState } from 'react';
import L, { icon, map }  from 'leaflet';
import { dijkstra } from "../../Algorithm/MapAlgorithm/dijkstra";
import Button  from "./Button";

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
}

const MapContext = React.createContext();
const LeafletMap = () => {
   const [source,setSource]=useState([23.1295773,72.541998]);
   const [destination, setDestination] = useState([23.1296306, 72.5439978]);
   const [multiPolyline, setMultiPolyLine] = useState([
      [
         source,
         destination
      ],
      // []
   ]);
   // const destinationCordinate = [23.1296306, 72.5439978]; 
   const limeOptions = { color: 'lime' };
   const LineArrayHandler = (cords) => {
      console.log("line Handlr",multiPolyline);
      // let newLines = [...multiPolyline,cords];
      // console.log("inside lineARray Handler",multiPolyline);
      // console.log("newlines",newLines);
      setMultiPolyLine((oldArray)=>{
         return [...oldArray,cords];
      });
   };
   
   return (
      <div>
         <MapContext.Provider value = {{
            lineArray: multiPolyline,
            setLineArray: LineArrayHandler,
            source: source,
            destination: destination
         }}
         >
         <Button></Button>
            
      <MapContainer className='leaflet-container' center={[23.1295773, 72.5419998]} zoom={17} scrollWheelZoom={true}>
         <TileLayer
         attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
         />
         <Marker position={source} icon={sourceIcon} draggable={true} eventHandlers={{
            click: (e) => {
               console.log('marker clicked', e);
            },
            dragend: (e) => {

               let cord = e.target._latlng;
               console.log('source dragged', cord);               // let cord=e.cord.lat,cordoncord._latlng
               setSource([cord.lat, cord.lng]);
               setMultiPolyLine([
                  [
                     [cord.lat, cord.lng],
                     destination
                  ]
               ]);
            }
               // console.log('source dragged', e.target._latlng);
         }}>
         </Marker>
         
         <Marker position={destination} icon={destIcon} draggable={true} eventHandlers={{
            click: (e) => {
               console.log('marker clicked', e);
               
            },
            dragend: (e) => {
               let cord=e.target._latlng;
               console.log('destination dragged', cord);
               setDestination([cord.lat, cord.lng]);
               setMultiPolyLine([
                  [
                     source,
                     [cord.lat, cord.lng]
                  ]
               ]);
            }
         }}>
            </Marker>
            <Polyline pathOptions={limeOptions} positions={multiPolyline} />
            </MapContainer>
            </MapContext.Provider>
      </div>
   ); 
}

export default LeafletMap;
export { MapContext };