import React, { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const createTempleIcon = (isSelected, isVisited, circuit) => {
  let color = "#f97316"; // Deep Saffron default
  if (isSelected) color = "#facc15"; // Bright Gold
  else if (isVisited) color = "#10b981"; // Emerald
  else if (circuit.includes("Jyotirlinga")) color = "#ef4444"; // Sacred Crimson
  else if (circuit.includes("Char Dham")) color = "#38bdf8"; // Himalayan Sky

  const size = isSelected ? 22 : 14;

  return L.divIcon({
    className: "custom-temple-pin",
    html: `<div style="
      width:${size}px;
      height:${size}px;
      background:${color};
      border:2.5px solid #090d16;
      border-radius:50%;
      box-shadow:0 0 ${isSelected ? "16px" : "8px"} ${color};
      transition:all 0.2s ease;
    "></div>`,
    iconSize: [size, size],
    iconAnchor: [size / 2, size / 2],
  });
};

function FlyToTemple({ temple }) {
  const map = useMap();
  useEffect(() => {
    if (temple) {
      map.flyTo([temple.latitude, temple.longitude], 6, { duration: 1.1 });
    }
  }, [temple, map]);
  return null;
}

export default function IndiaLeafletMap({
  temples,
  selectedTemple,
  onSelectTemple,
  visitedIds,
}) {
  return (
    <div className="relative w-full h-[460px] lg:h-[540px] rounded-2xl overflow-hidden border border-amber-500/25 shadow-2xl">
      <MapContainer
        center={[22.5, 79.5]}
        zoom={4.5}
        minZoom={4}
        maxZoom={14}
        className="w-full h-full z-0 bg-[#0b101d]"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
          className="map-dark-tiles"
        />

        <FlyToTemple temple={selectedTemple} />

        {temples.map((temple) => {
          const isSelected = selectedTemple?.id === temple.id;
          const isVisited = visitedIds.includes(temple.id);

          return (
            <Marker
              key={temple.id}
              position={[temple.latitude, temple.longitude]}
              icon={createTempleIcon(isSelected, isVisited, temple.circuit)}
              eventHandlers={{
                click: () => onSelectTemple(temple),
              }}
            >
              <Popup className="temple-popup">
                <div className="text-slate-900 font-sans p-0.5">
                  <p className="font-bold text-xs">{temple.name}</p>
                  <p className="text-[11px] text-slate-600">
                    {temple.city}, {temple.state}
                  </p>
                </div>
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>

      {/* Map Legend */}
      <div className="absolute bottom-3 left-3 z-[400] bg-slate-950/90 backdrop-blur-md border border-slate-800 rounded-xl px-3 py-2 text-[11px] flex flex-wrap gap-3">
        <span className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500 inline-block" /> Jyotirlinga
        </span>
        <span className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-sky-400 inline-block" /> Char Dham
        </span>
        <span className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-orange-500 inline-block" /> Shakti / Iconic
        </span>
        <span className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block" /> Visited
        </span>
      </div>
    </div>
  );
}