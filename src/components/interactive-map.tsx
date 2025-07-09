"use client";

import { useEffect, useRef, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix for default markers in react-leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

interface InteractiveMapProps {
  center: [number, number];
  zoom?: number;
  className?: string;
  height?: string;
  showMarker?: boolean;
  popupContent?: string;
}

export default function InteractiveMap({
  center = [25.9564, -80.1392], // Coordenadas de Aventura, Florida
  zoom = 15,
  className = "",
  height = "h-96",
  showMarker = true,
}: InteractiveMapProps) {
  const mapRef = useRef<L.Map>(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    // Ensure map is properly initialized
    if (mapRef.current) {
      mapRef.current.invalidateSize();
    }
  }, []);

  // Improved custom marker icon with better design
  const customIcon = new L.Icon({
    iconUrl: `data:image/svg+xml;base64,${btoa(`
      <svg width="40" height="50" viewBox="0 0 40 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <!-- Shadow -->
        <ellipse cx="20" cy="48" rx="8" ry="2" fill="rgba(0,0,0,0.2)"/>
        
        <!-- Pin body with gradient -->
        <defs>
          <linearGradient id="pinGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style="stop-color:#3B82F6;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#1D4ED8;stop-opacity:1" />
          </linearGradient>
          <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="rgba(0,0,0,0.3)"/>
          </filter>
        </defs>
        
        <!-- Main pin shape -->
        <path d="M20 2C12.268 2 6 8.268 6 16C6 28 20 42 20 42C20 42 34 28 34 16C34 8.268 27.732 2 20 2Z" 
              fill="url(#pinGradient)" filter="url(#shadow)"/>
        
        <!-- Inner circle -->
        <circle cx="20" cy="18" r="8" fill="white" opacity="0.9"/>
        
        <!-- Center dot -->
        <circle cx="20" cy="18" r="4" fill="#3B82F6"/>
        
        <!-- Highlight effect -->
        <circle cx="16" cy="14" r="2" fill="white" opacity="0.6"/>
      </svg>
    `)}`,
    iconSize: [40, 50],
    iconAnchor: [20, 50],
    popupAnchor: [0, -50],
  });

  const popupContent = `
    <div class="text-center p-3 max-w-xs">
      <div class="font-bold text-gray-900 mb-1 text-lg">
        Vascruz Group LLC
      </div>
      <div class="text-sm text-gray-600 mb-1">
        Aventura, Florida, USA
      </div>
      <div class="text-xs text-blue-600 font-medium">
        3530 Mystic Pointe Drive
      </div>
    </div>
  `;

  return (
    <div className={`w-full ${height} ${className}`}>
      <MapContainer
        center={center}
        zoom={zoom}
        className="w-full h-full rounded-lg"
        zoomControl={true}
        scrollWheelZoom={false}
        doubleClickZoom={false}
        ref={mapRef}
      >
        <TileLayer
          attribution=""
          url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
        />
        {showMarker && (
          <Marker
            position={center}
            icon={customIcon}
            eventHandlers={{
              click: (e) => {
                const marker = e.target;
                if (isPopupOpen) {
                  // Si está abierto, lo cerramos
                  marker.closePopup();
                  setIsPopupOpen(false);
                } else {
                  // Si está cerrado, lo abrimos
                  marker
                    .bindPopup(popupContent, {
                      maxWidth: 300,
                      className: "custom-popup",
                    })
                    .openPopup();
                  setIsPopupOpen(true);
                }
              },
              popupclose: (e) => {
                // Cuando el popup se cierra por cualquier medio, actualizamos el estado
                setIsPopupOpen(false);
              },
            }}
          />
        )}
      </MapContainer>
    </div>
  );
}
