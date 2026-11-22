import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { Navigation, Map as MapIcon, Globe, LocateFixed } from "lucide-react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const createTempleIcon = (isSelected, isVisited, circuit) => {
  let color = "#f97316";
  if (isSelected) color = "#facc15";
  else if (isVisited) color = "#10b981";
  else if (circuit.includes("Jyotirlinga")) color = "#ef4444";
  else if (circuit.includes("Char Dham")) color = "#38bdf8";

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

// Haversine formula to calculate distance in km from user's live GPS
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
  const [mapMode, setMapMode] = useState("PINS"); // PINS | GOOGLE

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

  return (
    <div className="space-y-2.5">
      {/* Map Mode & Live Location Top Controls */}
      <div className="flex flex-wrap items-center justify-between gap-2 bg-slate-900/90 border border-slate-800 p-2 rounded-xl">
        <div className="flex items-center gap-1.5">
          <button
            onClick={() => setMapMode("PINS")}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition cursor-pointer ${
              mapMode === "PINS"
                ? "bg-amber-500 text-slate-950"
                : "text-slate-300 hover:bg-slate-800"
            }`}
          >
            <MapIcon className="w-3.5 h-3.5" /> Bharat Pins
          </button>
          <button
            onClick={() => setMapMode("GOOGLE")}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition cursor-pointer ${
              mapMode === "GOOGLE"
                ? "bg-sky-500 text-slate-950"
                : "text-slate-300 hover:bg-slate-800"
            }`}
          >
            <Globe className="w-3.5 h-3.5" /> Google Maps View
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

      {/* Map Viewport */}
      <div className="relative w-full h-[410px] lg:h-[470px] rounded-2xl overflow-hidden border border-amber-500/25 shadow-2xl bg-[#0b101d]">
        {mapMode === "PINS" ? (
          <>
            <MapContainer
              center={[22.5, 79.5]}
              zoom={4.5}
              minZoom={4}
              maxZoom={15}
              className="w-full h-full z-0 bg-[#0b101d]"
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
                className="map-dark-tiles"
              />

              <FlyToTemple temple={selectedTemple} />

              {/* User Live Location Pin */}
              {userCoords && (
                <Marker
                  position={[userCoords.lat, userCoords.lng]}
                  icon={L.divIcon({
                    className: "user-gps-pin",
                    html: `<div style="width:16px;height:16px;background:#3b82f6;border:3px solid #fff;border-radius:50%;box-shadow:0 0 14px #3b82f6;"></div>`,
                    iconSize: [16, 16],
                    iconAnchor: [8, 8],
                  })}
                >
                  <Popup>
                    <div className="text-slate-900 font-bold text-xs">Your Live Location</div>
                  </Popup>
                </Marker>
              )}

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
          </>
        ) : (
          /* Free Official Google Maps Embed for Selected Temple */
          <iframe
            title={selectedTemple.name}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            src={`https://maps.google.com/maps?q=${encodeURIComponent(
              `${selectedTemple.name}, ${selectedTemple.city},${selectedTemple.state}`
            )}&t=&z=14&ie=UTF8&iwloc=&output=embed`}
          />
        )}
      </div>
    </div>
  );
}