import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, Polyline, useMap } from "react-leaflet";
import { Navigation, Map as MapIcon, Satellite, LocateFixed } from "lucide-react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const createTempleIcon = (isSelected, isVisited, circuit) => {
  let color = "#f97316"; // Deep Saffron
  if (isSelected) color = "#facc15"; // Bright Gold
  else if (isVisited) color = "#10b981"; // Emerald
  else if (circuit.includes("Jyotirlinga")) color = "#ef4444"; // Crimson
  else if (circuit.includes("Char Dham")) color = "#0284c7"; // Sky Blue

  const size = isSelected ? 22 : 14;

  return L.divIcon({
    className: "custom-temple-pin",
    html: `<div style="
      width:${size}px;
      height:${size}px;
      background:${color};
      border:2.5px solid #ffffff;
      border-radius:50%;
      box-shadow:0 2px 8px rgba(0,0,0,0.65);
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
      map.flyTo([temple.latitude, temple.longitude], 6, { duration: 1.0 });
    }
  }, [temple, map]);
  return null;
}

function calculateDistanceKm(lat1, lon1, lat2, lon2) {
  const R = 6371;
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  return Math.round(R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)));
}

export default function IndiaLeafletMap({
  temples,
  selectedTemple,
  onSelectTemple,
  visitedIds,
  userCoords,
  onDetectLocation,
  locating,
}) {
  // ROAD = Google Maps Road View | HYBRID = Google Satellite + Labels
  const [mapStyle, setMapStyle] = useState("ROAD");

  const distanceKm =
    userCoords && selectedTemple
      ? calculateDistanceKm(
          userCoords.lat,
          userCoords.lng,
          selectedTemple.latitude,
          selectedTemple.longitude
        )
      : null;

  const googleDirectionsUrl = userCoords
    ? `https://www.google.com/maps/dir/?api=1&origin=${userCoords.lat},${userCoords.lng}&destination=${selectedTemple.latitude},${selectedTemple.longitude}&travelmode=driving`
    : `https://www.google.com/maps/dir/?api=1&destination=${selectedTemple.latitude},${selectedTemple.longitude}`;

  const tileUrl =
    mapStyle === "ROAD"
      ? "https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}"
      : "https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}";

  return (
    <div className="space-y-2.5">
      {/* Map Style & Live Location Top Controls */}
      <div className="flex flex-wrap items-center justify-between gap-2 bg-slate-900/90 border border-slate-800 p-2 rounded-xl">
        <div className="flex items-center gap-1.5">
          <button
            onClick={() => setMapStyle("ROAD")}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition cursor-pointer ${
              mapStyle === "ROAD"
                ? "bg-amber-500 text-slate-950"
                : "text-slate-300 hover:bg-slate-800"
            }`}
          >
            <MapIcon className="w-3.5 h-3.5" /> Google Map
          </button>
          <button
            onClick={() => setMapStyle("HYBRID")}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition cursor-pointer ${
              mapStyle === "HYBRID"
                ? "bg-sky-500 text-slate-950"
                : "text-slate-300 hover:bg-slate-800"
            }`}
          >
            <Satellite className="w-3.5 h-3.5" /> Satellite View
          </button>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={onDetectLocation}
            disabled={locating}
            className="px-3 py-1.5 rounded-lg bg-emerald-500/15 border border-emerald-500/40 text-emerald-300 hover:bg-emerald-500/25 text-xs font-bold flex items-center gap-1.5 transition cursor-pointer"
          >
            <LocateFixed className={`w-3.5 h-3.5 ${locating ? "animate-spin" : ""}`} />
            {locating ? "Locating..." : userCoords ? "GPS Active ✓" : "Use Live Location"}
          </button>

          <a
            href={googleDirectionsUrl}
            target="_blank"
            rel="noreferrer"
            className="px-3 py-1.5 rounded-lg bg-orange-500 hover:bg-orange-400 text-slate-950 text-xs font-bold flex items-center gap-1.5 transition"
          >
            <Navigation className="w-3.5 h-3.5" />
            {distanceKm ? `Route (${distanceKm} km)` : "Get Route"}
          </a>
        </div>
      </div>

      {/* Interactive Google Map with ALL 65 Temple Pins */}
      <div className="relative w-full h-[410px] lg:h-[470px] rounded-2xl overflow-hidden border border-amber-500/25 shadow-2xl bg-[#0b101d]">
        <MapContainer
          center={[22.5, 79.5]}
          zoom={4.5}
          minZoom={4}
          maxZoom={18}
          className="w-full h-full z-0"
        >
          <TileLayer
            key={mapStyle}
            attribution="&copy; Google Maps"
            url={tileUrl}
          />

          <FlyToTemple temple={selectedTemple} />

          {/* User Live GPS Location Pin + Route Line to Selected Temple */}
          {userCoords && (
            <>
              <Marker
                position={[userCoords.lat, userCoords.lng]}
                icon={L.divIcon({
                  className: "user-gps-pin",
                  html: `<div style="width:18px;height:18px;background:#2563eb;border:3px solid #ffffff;border-radius:50%;box-shadow:0 0 14px #2563eb;"></div>`,
                  iconSize: [18, 18],
                  iconAnchor: [9, 9],
                })}
              >
                <Popup>
                  <div className="text-slate-900 font-bold text-xs">Your Live Location</div>
                </Popup>
              </Marker>

              {selectedTemple && (
                <Polyline
                  positions={[
                    [userCoords.lat, userCoords.lng],
                    [selectedTemple.latitude, selectedTemple.longitude],
                  ]}
                  pathOptions={{
                    color: "#2563eb",
                    weight: 3.5,
                    dashArray: "8, 8",
                  }}
                />
              )}
            </>
          )}

          {/* All Filtered Temple Pins on Google Map */}
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
                <Popup>
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

        {/* Legend */}
        <div className="absolute bottom-3 left-3 z-[400] bg-slate-950/90 backdrop-blur-md border border-slate-800 rounded-xl px-3 py-2 text-[11px] flex flex-wrap gap-3 text-slate-200">
          <span className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500 inline-block" /> Jyotirlinga
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-sky-500 inline-block" /> Char Dham
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-orange-500 inline-block" /> Shakti / Iconic
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block" /> Visited
          </span>
        </div>
      </div>
    </div>
  );
}