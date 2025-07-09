"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";

// Dynamic import to avoid SSR issues with Leaflet
const InteractiveMap = dynamic(() => import("../interactive-map"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-96 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 rounded-lg flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
          <div className="w-8 h-8 bg-primary/40 rounded-full"></div>
        </div>
        <div className="text-lg font-semibold text-foreground mb-2">
          Cargando mapa...
        </div>
        <div className="text-sm text-muted-foreground">Miami, Florida, USA</div>
      </div>
    </div>
  ),
});

interface MapWrapperProps {
  center: [number, number];
  zoom?: number;
  className?: string;
  height?: string;
  showMarker?: boolean;
  popupContent?: string;
}

export default function MapWrapper(props: MapWrapperProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <div
        className={`w-full ${props.height || "h-96"} ${
          props.className || ""
        } bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 rounded-lg flex items-center justify-center`}
      >
        <div className="text-center">
          <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
            <div className="w-8 h-8 bg-primary/40 rounded-full"></div>
          </div>
          <div className="text-lg font-semibold text-foreground mb-2">
            Cargando mapa...
          </div>
          <div className="text-sm text-muted-foreground">
            Miami, Florida, USA
          </div>
        </div>
      </div>
    );
  }

  return <InteractiveMap {...props} />;
}
