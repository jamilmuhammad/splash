'use client';

import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, GeoJSON, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// IMPORTANT: Put your downloaded geojson in /public/indonesia.geojson
// or import it directly if it's small enough.
// For this MVP, we fetch it from the public folder.

interface MapProps {
  highlightedCode: string | null;
  coordinates: [number, number] | null;
}

// Helper to zoom when coordinates change
function MapController({ coords }: { coords: [number, number] | null }) {
  const map = useMap();
  useEffect(() => {
    if (coords) {
      map.flyTo(coords, 9, { duration: 2 });
    }
  }, [coords, map]);
  return null;
}

export default function MapIndonesia({ highlightedCode, coordinates }: MapProps) {
  const [geoJsonData, setGeoJsonData] = useState<any>(null);

  useEffect(() => {
    fetch('/indonesia-provinces.json')
      .then((res) => res.json())
      .then((data) => setGeoJsonData(data))
      .catch((err) => console.error('Failed to load GeoJSON:', err));
  }, []);
  
  // Style function for the map polygons
  const style = (feature: any) => {
    const isMatch = feature.properties.kode === highlightedCode;
    return {
      fillColor: isMatch ? '#10b981' : '#64748b', // Green if match, Slate if not
      weight: 1,
      opacity: 1,
      color: 'white',
      fillOpacity: isMatch ? 0.8 : 0.4,
    };
  };

  // Function to load GeoJSON (using a placeholder approach here)
  // In real app: import data from '@/data/indonesia-provinces.json'
  const onEachFeature = (feature: any, layer: L.Layer) => {
     if(feature.properties && feature.properties.name) {
         layer.bindPopup(feature.properties.name);
     }
  };

  return (
    <div className="h-full w-full rounded-xl overflow-hidden shadow-inner border border-slate-200 bg-slate-100 relative z-0">
      <MapContainer 
        center={[-2.5, 118]} 
        zoom={5} 
        style={{ height: '100%', width: '100%' }}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; OpenStreetMap'
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        />
        
        {geoJsonData && (
          <GeoJSON data={geoJsonData} style={style} onEachFeature={onEachFeature} />
        )}
        
        <MapController coords={coordinates} />
      </MapContainer>
      
      {/* Overlay Notice for MVP */}
      <div className="absolute bottom-4 left-4 bg-white/90 p-2 text-xs rounded z-[400]">
        * Showing simplified data
      </div>
    </div>
  );
}