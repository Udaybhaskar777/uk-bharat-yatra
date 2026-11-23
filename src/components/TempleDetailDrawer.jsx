import React, { useState, useEffect } from "react";
import {
  MapPin, Landmark, Train, BedDouble, Heart, CheckCircle2,
  Clock, ShieldCheck, Plane, Bus, ExternalLink, Sparkles, ArrowRight,
  Navigation, IndianRupee, LocateFixed, Wallet
} from "lucide-react";
import { INDIAN_STATIONS, getTrainOptionsAndFares } from "../utils/trainFareEngine";

// Exact Wikipedia Page Titles for All Temples & All 51 Shakti Peethas
const TEMPLE_WIKI_TITLES = {
  // Core Temples
  "ap-tirumala": "Venkateswara Temple, Tirumala",
  "ap-srisailam": "Mallikarjuna Temple, Srisailam",
  "ap-vijayawada": "Kanaka Durga Temple",
  "ap-simhachalam": "Varaha Lakshmi Narasimha temple, Simhachalam",
  "ap-srikalahasti": "Srikalahasteeswara temple",
  "tg-yadadri": "Yadagirigutta Temple",
  "tg-bhadrachalam": "Bhadrachalam Temple",
  "tg-ramappa": "Ramappa Temple",
  "tg-thousandpillar": "Thousand Pillar Temple",
  "tn-rameswaram": "Ramanathaswamy Temple",
  "tn-meenakshi": "Meenakshi Temple",
  "tn-brihadeeswarar": "Brihadisvara Temple, Thanjavur",
  "tn-arunachaleswarar": "Arunachalesvara Temple",
  "tn-srirangam": "Ranganathaswamy Temple, Srirangam",
  "ka-hampi": "Virupaksha Temple, Hampi",
  "ka-udupi": "Udupi Sri Krishna Matha",
  "ka-murudeshwar": "Murudeshwar Temple",
  "ka-kukke": "Kukke Subramanya Temple",
  "ka-chamundeshwari": "Chamundeshwari Temple",
  "kl-padmanabhaswamy": "Padmanabhaswamy Temple",
  "kl-sabarimala": "Sabarimala Temple",
  "kl-guruvayur": "Guruvayur Temple",
  "uk-kedarnath": "Kedarnath Temple",
  "uk-badrinath": "Badrinath Temple",
  "uk-gangotri": "Gangotri Temple",
  "uk-yamunotri": "Yamunotri Temple",
  "uk-neelkanth": "Neelkanth Mahadev Temple",
  "up-kashi": "Kashi Vishwanath Temple",
  "up-ayodhya": "Ram Mandir",
  "up-vrindavan": "Banke Bihari Temple",
  "up-mathura": "Krishna Janmasthan Temple Complex",
  "jk-vaishnodevi": "Vaishno Devi Temple",
  "jk-amarnath": "Amarnath Temple",
  "jk-shankaracharya": "Shankaracharya Temple",
  "hp-hidimba": "Hidimba Devi Temple",
  "hp-jwalaji": "Jwalamukhi Temple",
  "hp-jakhoo": "Jakhu Temple",
  "pb-durgiana": "Durgiana Temple",
  "hr-kurukshetra": "Brahma Sarovar",
  "gj-somnath": "Somnath temple",
  "gj-dwarkadhish": "Dwarkadhish Temple",
  "gj-nageshwar": "Nageshvara Jyotirlinga",
  "gj-ambaji": "Ambaji Temple",
  "mh-siddhivinayak": "Siddhivinayak Temple, Mumbai",
  "mh-shirdi": "Sai Baba Temple, Shirdi",
  "mh-trimbakeshwar": "Trimbakeshwar Shiva Temple",
  "mh-bhimashankar": "Bhimashankar Temple",
  "mh-grishneshwar": "Grishneshwar Temple",
  "mp-mahakaleshwar": "Mahakaleshwar Jyotirlinga",
  "mp-omkareshwar": "Omkareshwar Temple",
  "mp-khajuraho": "Kandariya Mahadeva Temple",
  "rj-pushkar": "Brahma Temple, Pushkar",
  "rj-khatushyam": "Khatushyam Temple",
  "rj-karnimata": "Karni Mata Temple",
  "rj-dilwara": "Dilwara Temples",
  "od-puri": "Jagannath Temple, Puri",
  "od-konark": "Konark Sun Temple",
  "od-lingaraja": "Lingaraja Temple",
  "jh-baidyanath": "Baidyanath Temple",
  "br-mahabodhi": "Mahabodhi Temple",
  "br-vishnupad": "Vishnupad Temple, Gaya",
  "wb-dakshineswar": "Dakshineswar Kali Temple",
  "wb-kalighat": "Kalighat Kali Temple",
  "as-kamakhya": "Kamakhya Temple",
  "tr-tripurasundari": "Tripura Sundari Temple",

  // All 51 Shakti Peethas Exact Wikipedia Titles
  "sp-kamakhya": "Kamakhya Temple",
  "sp-kalighat": "Kalighat Kali Temple",
  "sp-vimala": "Vimala Temple",
  "sp-taratarini": "Tara Tarini Temple",
  "sp-shankari": "Koneswaram temple",
  "sp-kamakshi": "Kamakshi Amman Temple",
  "sp-shrinkhala": "Pandua, Hooghly",
  "sp-chamundeshwari": "Chamundeshwari Temple",
  "sp-jogulamba": "Jogulamba Devi Temple",
  "sp-bhramarambika": "Mallikarjuna Temple, Srisailam",
  "sp-kolhapur": "Mahalakshmi Temple, Kolhapur",
  "sp-mahur": "Mahur, Maharashtra",
  "sp-harsiddhi": "Harsiddhi Temple",
  "sp-puruhutika": "Kukkuteswara Swamy Temple",
  "sp-biraja": "Biraja Temple",
  "sp-manikyamba": "Draksharamam",
  "sp-alopi": "Alopi Devi Mandir",
  "sp-jwalamukhi": "Jwalamukhi Temple",
  "sp-manglagauri": "Mangla Gauri Temple",
  "sp-vishalakshi": "Vishalakshi Temple",
  "sp-sharadapeeth": "Sharada Peeth",
  "sp-amarnath": "Amarnath Temple",
  "sp-bajreshwari": "Vajreshwari Temple, Kangra",
  "sp-nainadevi": "Naina Devi Temple",
  "sp-chintpurni": "Chintpurni",
  "sp-katyayani": "Katyayani Peeth",
  "sp-chitrakoot": "Chitrakoot, Madhya Pradesh",
  "sp-amarkantak": "Amarkantak",
  "sp-danteshwari": "Danteshwari Temple",
  "sp-kurukshetra": "Bhadrakali Temple, Kurukshetra",
  "sp-ambaji": "Ambaji Temple",
  "sp-chandrabhaga": "Somnath temple",
  "sp-pavagadh": "Kalika Mata Temple, Pavagadh",
  "sp-saptashrungi": "Saptashrungi",
  "sp-manibandh": "Pushkar",
  "sp-virat": "Viratnagar",
  "sp-tripurasundari": "Tripura Sundari Temple",
  "sp-jayanti": "Nartiang Durga Temple",
  "sp-kankalitala": "Kankalitala",
  "sp-bakreshwar": "Bakreshwar",
  "sp-attahas": "Attahas",
  "sp-nandikeshwari": "Nandikeshwari Temple",
  "sp-nalhati": "Nalateshwari Temple",
  "sp-tarapith": "Tarapith",
  "sp-bahula": "Ketugram",
  "sp-ujaani": "Kogram",
  "sp-kiriteswari": "Kiriteswari Temple",
  "sp-vibhash": "Bargabhima Temple",
  "sp-trisrota": "Jalpaiguri",
  "sp-ratnavali": "Khanakul",
  "sp-baidyanath": "Baidyanath Temple",
  "sp-mithila": "Janakpur",
  "sp-godavaritir": "Rajahmundry",
  "sp-kanyakumari": "Kumari Amman Temple",
  "sp-suchindram": "Thanumalayan Temple",
  "sp-hinglaj": "Hinglaj Mata Mandir",
  "sp-guhyeshwari": "Guhyeshwari Temple",
  "sp-gandaki": "Muktinath",
  "sp-manasa": "Lake Manasarovar",
  "sp-sugandha": "Sugandha Shaktipeeth",
  "sp-karatoatat": "Bhabanipur Shaktipeeth",
  "sp-chattal": "Chandranath Temple",
  "sp-jeshoreshwari": "Jeshoreshwari Kali Temple",
  "sp-shrihatta": "Shree Shail",
};

async function fetchTemplePhoto(temple) {
  const wikiTitle = TEMPLE_WIKI_TITLES[temple.id] || temple.name;

  // 1. Try Direct Wikipedia REST Summary API
  try {
    const res = await fetch(
      `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(wikiTitle)}`
    );
    if (res.ok) {
      const data = await res.json();
      const img = data?.originalimage?.source || data?.thumbnail?.source;
      if (img) return img;
    }
  } catch (_) {}

  // 2. Fallback: Search Wikipedia by Temple Name + City for Page Thumbnail
  try {
    const query = `${temple.name.split("(")[0].trim()} ${temple.city}`;
    const searchRes = await fetch(
      `https://en.wikipedia.org/w/api.php?action=query&generator=search&gsrsearch=${encodeURIComponent(
        query
      )}&gsrlimit=1&prop=pageimages&pithumbsize=960&format=json&origin=*`
    );
    if (searchRes.ok) {
      const searchData = await searchRes.json();
      const pages = searchData?.query?.pages;
      if (pages) {
        const firstPage = Object.values(pages)[0];
        if (firstPage?.thumbnail?.source) return firstPage.thumbnail.source;
      }
    }
  } catch (_) {}

  return null;
}

export default function TempleDetailDrawer({
  temple,
  isWishlisted,
  isVisited,
  onToggleStatus,
  userCoords,
  onDetectLocation,
}) {
  const [activeTab, setActiveTab] = useState("history");
  const [fromStation, setFromStation] = useState("VZM");
  const [selectedClass, setSelectedClass] = useState("SL");
  const [pilgrims, setPilgrims] = useState(1);
  const [photoUrl, setPhotoUrl] = useState(null);
  const [loadingPhoto, setLoadingPhoto] = useState(true);

  useEffect(() => {
    if (!userCoords) return;
    let nearest = INDIAN_STATIONS[0];
    let minDist = Infinity;
    INDIAN_STATIONS.forEach((st) => {
      const d = Math.hypot(st.lat - userCoords.lat, st.lng - userCoords.lng);
      if (d < minDist) {
        minDist = d;
        nearest = st;
      }
    });
    setFromStation(nearest.code);
  }, [userCoords]);

  useEffect(() => {
    if (!temple) return;
    let isMounted = true;
    setLoadingPhoto(true);
    setPhotoUrl(null);

    fetchTemplePhoto(temple).then((img) => {
      if (!isMounted) return;
      setPhotoUrl(img);
      setLoadingPhoto(false);
    });

    return () => {
      isMounted = false;
    };
  }, [temple]);

  if (!temple) return null;

  const trainData = getTrainOptionsAndFares(fromStation, temple);
  const destCode = temple.travel.nearest_railway_code;
  const roundTripTrainCost = trainData.baseFares[selectedClass] * 2 * pilgrims;
  const localFoodAndAutoCost = 550 * pilgrims;
  const totalBudgetEstimate = roundTripTrainCost + localFoodAndAutoCost;

  const googleRouteUrl = userCoords
    ? `https://www.google.com/maps/dir/?api=1&origin=${userCoords.lat},${userCoords.lng}&destination=${temple.latitude},${temple.longitude}`
    : `https://www.google.com/maps/dir/?api=1&destination=${temple.latitude},${temple.longitude}`;

  return (
    <div className="bg-[#0e1525] border border-amber-500/20 rounded-2xl overflow-hidden flex flex-col shadow-xl">
      {/* Temple Hero Photo Banner */}
      <div className="relative h-52 sm:h-60 w-full bg-gradient-to-br from-orange-950 via-amber-900/40 to-slate-950 overflow-hidden">
        {photoUrl ? (
          <img
            key={photoUrl}
            src={photoUrl}
            alt={temple.name}
            onError={() => setPhotoUrl(null)}
            className="w-full h-full object-cover object-center opacity-90 transition-opacity duration-300"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-amber-600/20 via-orange-900/30 to-slate-950 p-4 text-center">
            <Landmark className={`w-10 h-10 text-amber-400/70 mb-2 ${loadingPhoto ? "animate-pulse" : ""}`} />
            <span className="text-xs uppercase tracking-widest text-amber-300/80 font-bold">
              {loadingPhoto ? "Loading Sacred Darshan..." : `${temple.state} • Sacred Heritage`}
            </span>
          </div>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-[#0e1525] via-[#0e1525]/35 to-transparent" />

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
        {/* Action Bar */}
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-4">
          <div className="space-y-0.5">
            <p className="text-xs text-slate-400">
              Deity: <span className="text-slate-200 font-bold">{temple.deity}</span>
            </p>
            {temple.fallen_part && (
              <p className="text-xs text-pink-400 font-semibold">
                Sacred Relic / Body Part: <span className="text-pink-200">{temple.fallen_part}</span>
              </p>
            )}
          </div>

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
            <Train className="w-3.5 h-3.5" /> Trains & Fares
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

        {/* TAB 2: In-App Trains, Timings, Ticket Rates & Yatra Cost */}
        {activeTab === "reach" && (
          <div className="space-y-4 text-xs">
            <div className="bg-slate-900/90 border border-sky-500/30 rounded-xl p-4 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-sky-400 font-bold flex items-center gap-1.5 text-sm">
                  <Train className="w-4 h-4" /> Trains & IRCTC Fare Check ({trainData.distanceKm} km)
                </span>

                <button
                  onClick={onDetectLocation}
                  className="text-[11px] px-2.5 py-1 rounded-lg bg-emerald-500/15 border border-emerald-500/40 text-emerald-300 font-bold flex items-center gap-1 cursor-pointer"
                >
                  <LocateFixed className="w-3 h-3" />
                  {userCoords ? `Nearest: ${fromStation} ✓` : "Detect My Station"}
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-11 items-center gap-2 bg-slate-950 p-3 rounded-xl border border-slate-800">
                <div className="sm:col-span-5">
                  <label className="text-[10px] uppercase text-slate-400 font-bold block mb-1">
                    From Your Station
                  </label>
                  <select
                    value={fromStation}
                    onChange={(e) => setFromStation(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-2.5 py-2 text-xs font-bold text-amber-400 focus:outline-none focus:border-sky-400"
                  >
                    {INDIAN_STATIONS.map((st) => (
                      <option key={st.code} value={st.code}>
                        {st.code} — {st.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="sm:col-span-1 flex justify-center pt-3">
                  <ArrowRight className="w-4 h-4 text-sky-400" />
                </div>

                <div className="sm:col-span-5">
                  <label className="text-[10px] uppercase text-slate-400 font-bold block mb-1">
                    Temple Destination Station
                  </label>
                  <div className="bg-slate-900 border border-sky-500/30 rounded-lg px-3 py-2 font-bold">
                    <span className="text-sky-400">{destCode}</span>
                    <span className="text-slate-300 ml-1.5">
                      — {temple.travel.nearest_railway_name.split("(")[0].trim()}
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-2.5">
                {trainData.trains.map((tr) => (
                  <div
                    key={tr.trainNo}
                    className="bg-slate-950/90 border border-slate-800 rounded-xl p-3 space-y-2.5"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div>
                        <span className="text-[10px] font-extrabold px-2 py-0.5 rounded bg-sky-500/15 text-sky-400 mr-2">
                          #{tr.trainNo}
                        </span>
                        <span className="font-bold text-slate-100">{tr.name}</span>
                      </div>
                      <span className="text-[11px] text-slate-400">
                        {tr.dep} → {tr.arr} ({tr.duration})
                      </span>
                    </div>

                    <div className="grid grid-cols-4 gap-1.5">
                      {Object.entries(tr.fares).map(([cls, price]) => (
                        <button
                          key={cls}
                          onClick={() => setSelectedClass(cls)}
                          className={`p-2 rounded-lg border text-left transition cursor-pointer ${
                            selectedClass === cls
                              ? "bg-amber-500/15 border-amber-500"
                              : "bg-slate-900 border-slate-800 hover:border-slate-700"
                          }`}
                        >
                          <span className="block text-[10px] font-bold text-slate-400">
                            {cls} Class
                          </span>
                          <span className="text-xs font-extrabold text-emerald-400">
                            ₹{price}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-r from-amber-500/15 to-orange-500/10 border border-amber-500/30 rounded-xl p-3.5 flex flex-wrap items-center justify-between gap-3">
                <div>
                  <span className="text-amber-400 font-bold flex items-center gap-1">
                    <Wallet className="w-3.5 h-3.5" /> Total Round-Trip Yatra Estimate ({selectedClass} Class)
                  </span>
                  <p className="text-[11px] text-slate-300 mt-0.5">
                    Up & Down Train (₹{roundTripTrainCost}) + Local Auto & Annadanam/Food (₹{localFoodAndAutoCost})
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <select
                    value={pilgrims}
                    onChange={(e) => setPilgrims(Number(e.target.value))}
                    className="bg-slate-950 border border-slate-700 rounded-lg px-2 py-1 text-xs font-bold text-slate-200"
                  >
                    {[1, 2, 3, 4, 5, 6].map((p) => (
                      <option key={p} value={p}>
                        {p} {p === 1 ? "Person" : "People"}
                      </option>
                    ))}
                  </select>

                  <span className="text-base font-extrabold text-amber-300 flex items-center">
                    <IndianRupee className="w-4 h-4" />
                    {totalBudgetEstimate.toLocaleString("en-IN")}
                  </span>
                </div>
              </div>

              <a
                href="https://www.irctc.co.in/nget/train-search"
                target="_blank"
                rel="noreferrer"
                className="w-full py-2.5 px-4 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-extrabold flex items-center justify-center gap-1.5 transition"
              >
                Ready to Book? Open IRCTC Portal <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="bg-slate-900/70 border border-slate-800 rounded-xl p-3.5 space-y-1">
                <span className="text-amber-400 font-bold flex items-center gap-1.5">
                  <Plane className="w-4 h-4" /> Nearest Airport
                </span>
                <p className="text-slate-200">{temple.travel.nearest_airport}</p>
              </div>

              <div className="bg-slate-900/70 border border-slate-800 rounded-xl p-3.5 space-y-1">
                <span className="text-emerald-400 font-bold flex items-center gap-1.5">
                  <Bus className="w-4 h-4" /> Local Bus & Auto Tips
                </span>
                <p className="text-slate-200 leading-relaxed">{temple.travel.bus_connectivity}</p>
              </div>
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