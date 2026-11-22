import React, { useState, useEffect } from "react";
import { Compass, Search, Heart, UserCheck, ChevronDown, MapPin, CheckCircle2 } from "lucide-react";
import { INDIA_TEMPLES_SEED } from "./data/indiaTemplesSeed";
import IndiaLeafletMap from "./components/IndiaLeafletMap";
import TempleDetailDrawer from "./components/TempleDetailDrawer";
import AuthOtpModal from "./components/AuthOtpModal";
import YatraDashboardModal from "./components/YatraDashboardModal";
import { supabase } from "./lib/supabaseClient";

const CIRCUITS = [
  "All",
  "Jyotirlinga",
  "Char Dham",
  "Shakti Peetha",
  "UNESCO",
  "South India",
  "North India & Himalayas",
  "West & Central India",
  "East & North-East India",
];

export default function App() {
  const [temples] = useState(INDIA_TEMPLES_SEED);
  const [selectedTemple, setSelectedTemple] = useState(INDIA_TEMPLES_SEED[0]);
  const [activeFilter, setActiveFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedState, setExpandedState] = useState("Andhra Pradesh");
  const [userEmail, setUserEmail] = useState(() => localStorage.getItem("uk_yatra_email") || "");
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [showDashboard, setShowDashboard] = useState(false);

  const [wishlistIds, setWishlistIds] = useState(() => {
    const saved = localStorage.getItem("uk_yatra_wishlist");
    return saved ? JSON.parse(saved) : ["ap-tirumala", "uk-kedarnath"];
  });

  const [visitedIds, setVisitedIds] = useState(() => {
    const saved = localStorage.getItem("uk_yatra_visited");
    return saved ? JSON.parse(saved) : ["ap-simhachalam"];
  });

  useEffect(() => {
    localStorage.setItem("uk_yatra_wishlist", JSON.stringify(wishlistIds));
  }, [wishlistIds]);

  useEffect(() => {
    localStorage.setItem("uk_yatra_visited", JSON.stringify(visitedIds));
  }, [visitedIds]);

  useEffect(() => {
    if (!supabase) return;
    supabase.auth.getUser().then(({ data }) => {
      if (data?.user?.email) setUserEmail(data.user.email);
    });
  }, []);

  const handleToggleStatus = (templeId, type) => {
    if (!userEmail) {
      setShowAuthModal(true);
      return;
    }

    if (type === "WISHLIST") {
      setWishlistIds((prev) =>
        prev.includes(templeId) ? prev.filter((id) => id !== templeId) : [...prev, templeId]
      );
    } else {
      setVisitedIds((prev) =>
        prev.includes(templeId) ? prev.filter((id) => id !== templeId) : [...prev, templeId]
      );
    }
  };

  const filteredTemples = temples.filter((t) => {
    const matchesFilter =
      activeFilter === "All" ||
      t.circuit.includes(activeFilter) ||
      t.region === activeFilter;

    const q = searchQuery.toLowerCase();
    const matchesSearch =
      t.name.toLowerCase().includes(q) ||
      t.state.toLowerCase().includes(q) ||
      t.city.toLowerCase().includes(q) ||
      t.deity.toLowerCase().includes(q);

    return matchesFilter && matchesSearch;
  });

  // Group filtered temples by State
  const templesByState = filteredTemples.reduce((acc, temple) => {
    if (!acc[temple.state]) acc[temple.state] = [];
    acc[temple.state].push(temple);
    return acc;
  }, {});

  const stateNames = Object.keys(templesByState);

  const handleSelectTemple = (temple) => {
    setSelectedTemple(temple);
    setExpandedState(temple.state);
  };

  return (
    <div className="min-h-screen bg-[#090d16] text-slate-100 flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-[500] bg-[#0d1322]/95 backdrop-blur-md border-b border-amber-500/20 px-4 lg:px-8 py-3.5">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center shadow-lg shadow-orange-500/20">
              <Compass className="w-6 h-6 text-slate-950" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-extrabold tracking-widest uppercase px-2 py-0.5 rounded bg-orange-500/15 text-orange-400 border border-orange-500/30">
                  UK WEBS
                </span>
                <h1 className="text-lg sm:text-xl font-extrabold bg-gradient-to-r from-amber-200 via-orange-400 to-amber-500 bg-clip-text text-transparent">
                  Sacred Bharat Yatra
                </h1>
              </div>
              <p className="text-xs text-slate-400">
                {temples.length} Historic Temples • Char Dham • 12 Jyotirlingas • Shakti Peethas
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2.5 w-full sm:w-auto">
            <div className="relative flex-1 sm:w-64">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search temple, state, deity..."
                className="w-full bg-slate-900 border border-slate-700 rounded-xl pl-9 pr-3 py-2 text-xs focus:outline-none focus:border-amber-500"
              />
            </div>

            <button
              onClick={() => setShowDashboard(true)}
              className="px-3.5 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs flex items-center gap-1.5 transition cursor-pointer shrink-0"
            >
              <Heart className="w-3.5 h-3.5 fill-slate-950" />
              My Yatra ({visitedIds.length + wishlistIds.length})
            </button>

            {!userEmail ? (
              <button
                onClick={() => setShowAuthModal(true)}
                className="px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-bold flex items-center gap-1.5 cursor-pointer shrink-0"
              >
                <UserCheck className="w-3.5 h-3.5 text-amber-400" /> Login
              </button>
            ) : (
              <span className="hidden md:inline-block text-xs text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-2.5 py-1.5 rounded-xl">
                {userEmail.split("@")[0]}
              </span>
            )}
          </div>
        </div>
      </header>

      {/* Circuit & Region Filter Bar */}
      <div className="max-w-7xl w-full mx-auto px-4 lg:px-6 pt-4">
        <div className="flex items-center gap-2 overflow-x-auto pb-2">
          {CIRCUITS.map((item) => (
            <button
              key={item}
              onClick={() => setActiveFilter(item)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition cursor-pointer ${
                activeFilter === item
                  ? "bg-orange-500 text-slate-950"
                  : "bg-slate-900 text-slate-300 border border-slate-800 hover:border-orange-500/40"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      {/* Main Split Map + Detail Drawer */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-4 lg:p-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-6 space-y-4">
          <IndiaLeafletMap
            temples={filteredTemples}
            selectedTemple={selectedTemple}
            onSelectTemple={handleSelectTemple}
            visitedIds={visitedIds}
          />

          {/* State-wise Collapsible Accordion List */}
          <div className="space-y-2 max-h-72 overflow-y-auto pr-1">
            <div className="flex items-center justify-between px-1">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                Explore by State ({stateNames.length} States)
              </span>
              <span className="text-[11px] text-amber-400">
                Click state to view temples
              </span>
            </div>

            {stateNames.map((stateName) => {
              const stateTemples = templesByState[stateName];
              const isOpen = expandedState === stateName || searchQuery.trim().length > 0;

              return (
                <div
                  key={stateName}
                  className="bg-slate-900/90 border border-slate-800 rounded-xl overflow-hidden"
                >
                  {/* State Header Row with Down Arrow */}
                  <button
                    onClick={() =>
                      setExpandedState(expandedState === stateName ? null : stateName)
                    }
                    className="w-full flex items-center justify-between px-3.5 py-2.5 text-left hover:bg-slate-800/60 transition cursor-pointer"
                  >
                    <div className="flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5 text-amber-400" />
                      <span className="text-xs font-extrabold uppercase tracking-wide text-amber-300">
                        {stateName}
                      </span>
                      <span className="text-[11px] px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 font-semibold">
                        {stateTemples.length} {stateTemples.length === 1 ? "Temple" : "Temples"}
                      </span>
                    </div>

                    <ChevronDown
                      className={`w-4 h-4 text-amber-400 transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {/* Expanded Temples Inside Selected State */}
                  {isOpen && (
                    <div className="p-2.5 pt-1 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-2 gap-2 bg-slate-950/50">
                      {stateTemples.map((t) => {
                        const isSelected = selectedTemple?.id === t.id;
                        const isVisited = visitedIds.includes(t.id);

                        return (
                          <button
                            key={t.id}
                            onClick={() => setSelectedTemple(t)}
                            className={`p-2.5 rounded-lg border text-left transition cursor-pointer flex items-start justify-between gap-2 ${
                              isSelected
                                ? "bg-orange-500/15 border-orange-500"
                                : "bg-slate-900/90 border-slate-800 hover:border-slate-700"
                            }`}
                          >
                            <div>
                              <p className="text-xs font-bold text-slate-100 line-clamp-1">
                                {t.name}
                              </p>
                              <p className="text-[11px] text-slate-400">{t.city}</p>
                            </div>
                            {isVisited && (
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                            )}
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div className="lg:col-span-6">
          <TempleDetailDrawer
            temple={selectedTemple}
            isWishlisted={wishlistIds.includes(selectedTemple?.id)}
            isVisited={visitedIds.includes(selectedTemple?.id)}
            onToggleStatus={handleToggleStatus}
            homeCity="Vizianagaram"
          />
        </div>
      </main>

      {/* Modals */}
      <AuthOtpModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        onDemoLogin={(email) => {
          setUserEmail(email);
          localStorage.setItem("uk_yatra_email", email);
        }}
      />

      <YatraDashboardModal
        isOpen={showDashboard}
        onClose={() => setShowDashboard(false)}
        temples={temples}
        wishlistIds={wishlistIds}
        visitedIds={visitedIds}
        userEmail={userEmail}
        onSelectTemple={handleSelectTemple}
        onLogout={() => {
          setUserEmail("");
          localStorage.removeItem("uk_yatra_email");
        }}
      />
    </div>
  );
}