"use client";
import { useEffect, useRef } from "react";

export default function GoogleMap() {
  const mapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!mapRef.current) return;

    // Load Google Maps script dynamically
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`;
    script.async = true;
    script.onload = () => {
      if (window.google) {
        new window.google.maps.Map(mapRef.current, {
          center: { lat: 14.676, lng: 121.019 }, // Manila
          zoom: 12,
        });
      }
    };
    document.body.appendChild(script);
  }, []);

  return <div ref={mapRef} className="w-full h-[500px]" />;
}
