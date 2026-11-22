import React, { useState } from "react";
import {
  MapPin, Landmark, Train, BedDouble, Heart, CheckCircle2,
  Clock, ShieldCheck, Plane, Bus, ExternalLink, Sparkles, ArrowRight, Navigation
} from "lucide-react";

const POPULAR_ORIGINS = [
  { code: "VZM", name: "Vizianagaram Jn" },
  { code: "VSKP", name: "Visakhapatnam Jn" },
  { code: "SC", name: "Secunderabad Jn" },
  { code: "BZA", name: "Vijayawada Jn" },
  { code: "MAS", name: "MGR Chennai Central" },
  { code: "SBC", name: "KSR Bengaluru" },
  { code: "NDLS", name: "New Delhi" },
  { code: "CSMT", name: "Mumbai CSMT" },
  { code: "HWH", name: "Howrah Jn" },
];

// Curated Wikimedia / Temple Hero Images with Sacred Gradient Fallback
const TEMPLE_IMAGES = {
  "ap-tirumala": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Tirumala_090615.jpg/960px-Tirumala_090615.jpg",
  "ap-simhachalam": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Simhachalam_Temple_Gopuram.jpg/960px-Simhachalam_Temple_Gopuram.jpg",
  "ap-srisailam": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Srisailam_temple_gopuram.jpg/960px-Srisailam_temple_gopuram.jpg",
  "ap-vijayawada": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Kanaka_Durga_Temple%2C_Vijayawada.jpg/960px-Kanaka_Durga_Temple%2C_Vijayawada.jpg",
  "tn-rameswaram": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Ramanathaswamy_temple_corridor.jpg/960px-Ramanathaswamy_temple_corridor.jpg",
  "tn-meenakshi": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Madurai_Meenakshi_Amman_Temple_West_Tower.jpg/960px-Madurai_Meenakshi_Amman_Temple_West_Tower.jpg",
  "tn-brihadeeswarar": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Brihadisvara_Temple_Thanjavur.jpg/960px-Brihadisvara_Temple_Thanjavur.jpg",
  "ka-hampi": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Hampi_virupaksha_temple.jpg/960px-Hampi_virupaksha_temple.jpg",
  "kl-padmanabhaswamy": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Padmanabhaswamy_Temple_Thiruvananthapuram.jpg/960px-Padmanabhaswamy_Temple_Thiruvananthapuram.jpg",
  "uk-kedarnath": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Kedarnath_Temple_in_Rainy_season.jpg/960px-Kedarnath_Temple_in_Rainy_season.jpg",
  "uk-badrinath": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Badrinath_Temple_%2C_Uttarakhand.jpg/960px-Badrinath_Temple_%2C_Uttarakhand.jpg",
  "up-kashi": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Ahilyabai_Ghat_Varanasi.jpg/960px-Ahilyabai_Ghat_Varanasi.jpg",
  "gj-somnath": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Somanath_mandir_%28cropped%29.jpg/960px-Somanath_mandir_%28cropped%29.jpg",
  "gj-dwarkadhish": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Dwarkadhish_Temple%2C_Dwarka.jpg/960px-Dwarkadhish_Temple%2C_Dwarka.jpg",
  "mp-mahakaleshwar": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Mahakaleshwar_Temple%2C_Ujjain.jpg/960px-Mahakaleshwar_Temple%2C_Ujjain.jpg",
  "od-puri": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Jagannath_Temple%2C_Puri.jpg/960px-Jagannath_Temple%2C_Puri.jpg",
  "od-konark": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Konarka_Temple.jpg/960px-Konarka_Temple.jpg",
  "as-kamakhya": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Kamakhya_Temple_-_Guwahati.jpg/960px-Kamakhya_Temple_-_Guwahati.jpg",
};

export default function TempleDetailDrawer({
  temple,
  isWishlisted,
  isVisited,
  onToggleStatus,
  userCoords,
}) {
  const [activeTab, setActiveTab] = useState("history");
  const [fromStation, setFromStation] = useState("VZM");
  const [imgError, setImgError] = useState(false);

  if (!temple) return null;

  // Reset image error when temple changes
  const heroImageUrl = TEMPLE_IMAGES[temple.id];
  const destCode = temple.travel.nearest_railway_code;

  const googleRouteUrl = userCoords
    ? `https://www.google.com/maps/dir/?api=1&origin=${userCoords.lat},${userCoords.lng}&destination=${temple.latitude},${temple.longitude}`
    : `https://www.google.com/maps/dir/?api=1&destination=${temple.latitude},${temple.longitude}`;

  return (
    <div className="bg-[#0e1525] border border-amber-500/20 rounded-2xl overflow-hidden flex flex-col shadow-xl">
      {/* Temple Hero Photo Banner */}
      <div className="relative h-48 sm:h-56 w-full bg-gradient-to-br from-orange-950 via-amber-900/40 to-slate-950 overflow-hidden">
        {heroImageUrl && !imgError ? (
          <img
            key={temple.id}
            src={heroImageUrl}
            alt={temple.name}
            onError={() => setImgError(true)}
            className="w-full h-full object-cover object-center opacity-85"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-amber-600/20 via-orange-900/30 to-slate-950 p-4 text-center">
            <Landmark className="w-10 h-10 text-amber-400/70 mb-2" />
            <span className="text-xs uppercase tracking-widest text-amber-300/80 font-bold">
              {temple.state} • Sacred Heritage
            </span>
          </div>
        )}

        {/* Gradient Overlay + Title */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0e1525] via-[#0e1525]/40 to-transparent" />

        <div className="absolute bottom-3 left-5 right-5 flex flex-wrap items-end justify-between gap-3">
          <div>
            <div className="flex flex-wrap items-center gap-1.5 mb-1.5">
              <span className="inline-flex items-center gap-1 text-[11px] font-bold text-amber-300 bg-slate-950/80 backdrop-blur-md border border-amber-500/30 px-2.5 py-0.5 rounded-full">
                <MapPin className="w-3 h-3" /> {temple.city}, {temple.state}
              </span>
              {temple.circuit.map((c) => (
                <span
                  key={c}
                  className="text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-full bg-orange-500 text-slate-950"
                >
                  {c}
                </span>
              ))}
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-white drop-shadow">
              {temple.name}
            </h2>
          </div>
        </div>
      </div>

      {/* Body Content */}
      <div className="p-5 sm:p-6 space-y-5">
        {/* Action Bar: Wishlist, Visited & Live Route */}
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-4">
          <p className="text-xs text-slate-400">
            Deity: <span className="text-slate-200 font-bold">{temple.deity}</span>
          </p>

          <div className="flex flex-wrap items-center gap-2">
            <a
              href={googleRouteUrl}
              target="_blank"
              rel="noreferrer"
              className="px-3 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 bg-sky-500/15 border border-sky-500/40 text-sky-300 hover:bg-sky-500/25 transition"
            >
              <Navigation className="w-3.5 h-3.5" />
              {userCoords ? "Live GPS Route" : "Google Route"}
            </a>

            <button
              onClick={() => onToggleStatus(temple.id, "WISHLIST")}
              className={`px-3 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 border transition cursor-pointer ${
                isWishlisted
                  ? "bg-rose-500/20 border-rose-500 text-rose-300"
                  : "bg-slate-900 border-slate-700 text-slate-300 hover:border-rose-400"
              }`}
            >
              <Heart className={`w-3.5 h-3.5 ${isWishlisted ? "fill-rose-500 text-rose-500" : ""}`} />
              {isWishlisted ? "Wishlisted" : "Wishlist"}
            </button>

            <button
              onClick={() => onToggleStatus(temple.id, "VISITED")}
              className={`px-3 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 border transition cursor-pointer ${
                isVisited
                  ? "bg-emerald-500/20 border-emerald-500 text-emerald-300"
                  : "bg-slate-900 border-slate-700 text-slate-300 hover:border-emerald-400"
              }`}
            >
              <CheckCircle2 className="w-3.5 h-3.5" />
              {isVisited ? "Visited ✓" : "Mark Visited"}
            </button>
          </div>
        </div>

        {/* 3-Tab Navigation */}
        <div className="grid grid-cols-3 gap-2 bg-slate-950/90 p-1.5 rounded-xl border border-slate-800">
          <button
            onClick={() => setActiveTab("history")}
            className={`py-2 px-3 rounded-lg text-xs font-bold flex items-center justify-center gap-1.5 transition cursor-pointer ${
              activeTab === "history"
                ? "bg-amber-500 text-slate-950 shadow"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <Landmark className="w-3.5 h-3.5" /> History
          </button>

          <button
            onClick={() => setActiveTab("reach")}
            className={`py-2 px-3 rounded-lg text-xs font-bold flex items-center justify-center gap-1.5 transition cursor-pointer ${
              activeTab === "reach"
                ? "bg-amber-500 text-slate-950 shadow"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <Train className="w-3.5 h-3.5" /> Trains & Route
          </button>

          <button
            onClick={() => setActiveTab("stays")}
            className={`py-2 px-3 rounded-lg text-xs font-bold flex items-center justify-center gap-1.5 transition cursor-pointer ${
              activeTab === "stays"
                ? "bg-amber-500 text-slate-950 shadow"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <BedDouble className="w-3.5 h-3.5" /> Nearby Stays
          </button>
        </div>

        {/* TAB 1: History & Darshan */}
        {activeTab === "history" && (
          <div className="space-y-4">
            <div className="bg-slate-900/70 border border-slate-800 rounded-xl p-4 space-y-2">
              <h3 className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" /> Sthala Puranam & Heritage
              </h3>
              <p className="text-sm text-slate-200 leading-relaxed">{temple.full_history}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="bg-slate-900/70 border border-slate-800 rounded-xl p-3.5">
                <span className="text-slate-400 block mb-1">Built / Patronized By</span>
                <span className="text-slate-100 font-semibold">{temple.built_by}</span>
              </div>

              <div className="bg-slate-900/70 border border-slate-800 rounded-xl p-3.5">
                <span className="text-slate-400 flex items-center gap-1 mb-1">
                  <Clock className="w-3.5 h-3.5 text-amber-400" /> Darshan Timings
                </span>
                <span className="text-slate-100 font-semibold">{temple.timings}</span>
              </div>

              <div className="sm:col-span-2 bg-slate-900/70 border border-slate-800 rounded-xl p-3.5">
                <span className="text-slate-400 flex items-center gap-1 mb-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> Dress Code & Etiquette
                </span>
                <span className="text-slate-100 font-semibold">{temple.dress_code}</span>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: From -> To Train Search & Route */}
        {activeTab === "reach" && (
          <div className="space-y-4 text-xs">
            <div className="bg-slate-900/90 border border-sky-500/30 rounded-xl p-4 space-y-3">
              <span className="text-sky-400 font-bold flex items-center gap-1.5 text-sm">
                <Train className="w-4 h-4" /> Direct Train Route Finder
              </span>

              {/* From -> To Visual Selector */}
              <div className="grid grid-cols-1 sm:grid-cols-11 items-center gap-2 bg-slate-950 p-3 rounded-xl border border-slate-800">
                <div className="sm:col-span-5">
                  <label className="text-[10px] uppercase text-slate-400 font-bold block mb-1">
                    From Station (Code)
                  </label>
                  <div className="flex gap-1.5">
                    <input
                      type="text"
                      value={fromStation}
                      onChange={(e) => setFromStation(e.target.value.toUpperCase())}
                      placeholder="VZM"
                      maxLength={5}
                      className="w-20 bg-slate-900 border border-slate-700 rounded-lg px-2.5 py-1.5 text-xs font-extrabold text-amber-400 uppercase focus:outline-none focus:border-sky-400"
                    />
                    <select
                      value={fromStation}
                      onChange={(e) => setFromStation(e.target.value)}
                      className="flex-1 bg-slate-900 border border-slate-700 rounded-lg px-2 py-1.5 text-xs text-slate-200 focus:outline-none"
                    >
                      {POPULAR_ORIGINS.map((st) => (
                        <option key={st.code} value={st.code}>
                          {st.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="sm:col-span-1 flex justify-center pt-3">
                  <ArrowRight className="w-4 h-4 text-sky-400" />
                </div>

                <div className="sm:col-span-5">
                  <label className="text-[10px] uppercase text-slate-400 font-bold block mb-1">
                    To Temple Station
                  </label>
                  <div className="bg-slate-900 border border-sky-500/30 rounded-lg px-3 py-1.5">
                    <span className="font-extrabold text-sky-400">{destCode}</span>
                    <span className="text-slate-300 ml-1.5 line-clamp-1 inline">
                      ({temple.travel.nearest_railway_name.split("(")[0].trim()})
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Buttons for Live Trains */}
              <div className="flex flex-wrap gap-2">
                <a
                  href={`https://www.confirmtkt.com/trains/${fromStation}-to-${destCode}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 py-2.5 px-3 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-extrabold flex items-center justify-center gap-1.5 transition"
                >
                  View Trains ({fromStation} → {destCode}) <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <a
                  href="https://www.irctc.co.in/nget/train-search"
                  target="_blank"
                  rel="noreferrer"
                  className="py-2.5 px-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold flex items-center gap-1.5 transition"
                >
                  IRCTC Official <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            <div className="bg-slate-900/70 border border-slate-800 rounded-xl p-3.5 space-y-1">
              <span className="text-amber-400 font-bold flex items-center gap-1.5">
                <Plane className="w-4 h-4" /> Nearest Airport
              </span>
              <p className="text-slate-200">{temple.travel.nearest_airport}</p>
            </div>

            <div className="bg-slate-900/70 border border-slate-800 rounded-xl p-3.5 space-y-1">
              <span className="text-emerald-400 font-bold flex items-center gap-1.5">
                <Bus className="w-4 h-4" /> Local Bus & Last-Mile Connectivity
              </span>
              <p className="text-slate-200 leading-relaxed">{temple.travel.bus_connectivity}</p>
            </div>
          </div>
        )}

        {/* TAB 3: Nearby Stays — Coming Soon */}
        {activeTab === "stays" && (
          <div className="bg-gradient-to-br from-slate-900 to-slate-950 border border-amber-500/25 rounded-2xl p-6 text-center space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center mx-auto">
              <BedDouble className="w-6 h-6 text-amber-400" />
            </div>
            <span className="inline-block text-[11px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full bg-amber-500/15 text-amber-400 border border-amber-500/30">
              Coming Soon • Phase 2
            </span>
            <h3 className="text-base font-bold text-white">
              Verified Dharamshalas, Temple Trust Rooms & Budget Hostels
            </h3>
            <p className="text-xs text-slate-400 max-w-md mx-auto leading-relaxed">
              We are verifying direct Temple Devasthanam room booking links, free pilgrim dormitories, and budget hostels near{" "}
              <span className="text-slate-200 font-semibold">{temple.name}</span>.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}