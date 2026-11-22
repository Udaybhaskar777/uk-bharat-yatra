import React, { useState } from "react";
import {
  MapPin, Landmark, Train, BedDouble, Heart, CheckCircle2,
  Clock, ShieldCheck, Plane, Bus, ExternalLink, Sparkles
} from "lucide-react";

export default function TempleDetailDrawer({
  temple,
  isWishlisted,
  isVisited,
  onToggleStatus,
  homeCity,
}) {
  const [activeTab, setActiveTab] = useState("history");

  if (!temple) return null;

  return (
    <div className="bg-[#0e1525] border border-amber-500/20 rounded-2xl p-5 sm:p-6 flex flex-col gap-5 shadow-xl">
      {/* Temple Top Header */}
      <div className="flex flex-wrap items-start justify-between gap-4 border-b border-slate-800 pb-4">
        <div className="space-y-1.5">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1 text-xs font-semibold text-amber-400 bg-amber-500/10 border border-amber-500/30 px-2.5 py-0.5 rounded-full">
              <MapPin className="w-3 h-3" /> {temple.city}, {temple.state}
            </span>
            {temple.circuit.map((c) => (
              <span
                key={c}
                className="text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-orange-500/15 text-orange-300 border border-orange-500/30"
              >
                {c}
              </span>
            ))}
          </div>
          <h2 className="text-2xl font-extrabold text-white tracking-tight">
            {temple.name}
          </h2>
          <p className="text-xs text-slate-400">
            Presiding Deity: <span className="text-slate-200 font-medium">{temple.deity}</span> • {temple.region}
          </p>
        </div>

        {/* Action Bar: Wishlist & Mark Visited */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => onToggleStatus(temple.id, "WISHLIST")}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 border transition cursor-pointer ${
              isWishlisted
                ? "bg-rose-500/20 border-rose-500 text-rose-300"
                : "bg-slate-900 border-slate-700 text-slate-300 hover:border-rose-400"
            }`}
          >
            <Heart className={`w-4 h-4 ${isWishlisted ? "fill-rose-500 text-rose-500" : ""}`} />
            {isWishlisted ? "Wishlisted" : "Add to Wishlist"}
          </button>

          <button
            onClick={() => onToggleStatus(temple.id, "VISITED")}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 border transition cursor-pointer ${
              isVisited
                ? "bg-emerald-500/20 border-emerald-500 text-emerald-300"
                : "bg-slate-900 border-slate-700 text-slate-300 hover:border-emerald-400"
            }`}
          >
            <CheckCircle2 className="w-4 h-4" />
            {isVisited ? "Visited ✓" : "Mark as Visited"}
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
          <Landmark className="w-3.5 h-3.5" /> History & Darshan
        </button>

        <button
          onClick={() => setActiveTab("reach")}
          className={`py-2 px-3 rounded-lg text-xs font-bold flex items-center justify-center gap-1.5 transition cursor-pointer ${
            activeTab === "reach"
              ? "bg-amber-500 text-slate-950 shadow"
              : "text-slate-400 hover:text-white"
          }`}
        >
          <Train className="w-3.5 h-3.5" /> How to Reach
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
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> Dress Code & Temple Etiquette
              </span>
              <span className="text-slate-100 font-semibold">{temple.dress_code}</span>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: How to Reach */}
      {activeTab === "reach" && (
        <div className="space-y-3 text-xs">
          <div className="bg-slate-900/80 border border-sky-500/25 rounded-xl p-4 flex flex-wrap items-center justify-between gap-3">
            <div className="space-y-1">
              <span className="text-sky-400 font-bold flex items-center gap-1.5 text-sm">
                <Train className="w-4 h-4" /> Nearest Railway Station ({temple.travel.nearest_railway_code})
              </span>
              <p className="text-slate-200 font-medium">{temple.travel.nearest_railway_name}</p>
              <p className="text-slate-400">Starting from: {homeCity || "Your City"}</p>
            </div>

            <a
              href="https://www.irctc.co.in/nget/train-search"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold flex items-center gap-1.5 transition"
            >
              Book Train on IRCTC <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="bg-slate-900/70 border border-slate-800 rounded-xl p-4 space-y-1">
            <span className="text-amber-400 font-bold flex items-center gap-1.5">
              <Plane className="w-4 h-4" /> Nearest Airport
            </span>
            <p className="text-slate-200">{temple.travel.nearest_airport}</p>
          </div>

          <div className="bg-slate-900/70 border border-slate-800 rounded-xl p-4 space-y-1">
            <span className="text-emerald-400 font-bold flex items-center gap-1.5">
              <Bus className="w-4 h-4" /> Local Bus, Auto & Yatra Tips
            </span>
            <p className="text-slate-200 leading-relaxed">{temple.travel.bus_connectivity}</p>
          </div>
        </div>
      )}

      {/* TAB 3: Nearby Hostels & Dharamshalas */}
      {activeTab === "stays" && (
        <div className="space-y-3">
          <p className="text-xs text-slate-400">
            Budget-friendly Temple Trust rooms, Dharamshalas & verified backpacker hostels near {temple.name}:
          </p>
          {temple.stays.map((stay, index) => (
            <div
              key={index}
              className="bg-slate-900/80 border border-slate-800 rounded-xl p-4 flex flex-wrap items-center justify-between gap-3"
            >
              <div className="space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                  {stay.stay_type}
                </span>
                <h4 className="text-sm font-bold text-white">{stay.stay_name}</h4>
                <p className="text-xs text-slate-400">{stay.booking_link_or_contact}</p>
              </div>

              <div className="text-right">
                <span className="block text-sm font-extrabold text-amber-400">
                  {stay.price_per_night}
                </span>
                <span className="text-[10px] text-slate-400">per night</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}