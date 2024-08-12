import React from 'react';
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const StockholmMap = ({ isochrone }) => {
  return (
    <MapContainer
      center={[59.3293, 18.0686]}
      zoom={11}
      style={{ height: '100%', width: '100%' }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {isochrone && <GeoJSON data={isochrone} style={() => ({ fillColor: 'blue', weight: 2, opacity: 1, color: 'white', fillOpacity: 0.7 })} />}
    </MapContainer>
  );
};

export default StockholmMap;