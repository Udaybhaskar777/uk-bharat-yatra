import React, { useState, useEffect, useMemo } from "react";
import {
  Compass, Search, Heart, UserCheck, ChevronDown, MapPin,
  CheckCircle2, User, Landmark, Mountain
} from "lucide-react";
import { INDIA_TEMPLES_SEED } from "./data/indiaTemplesSeed";
import { SHAKTI_PEETHAS_51 } from "./data/shaktiPeethas51";
import { INDIA_TOURISM_SEED } from "./data/indiaTourismSeed";
import IndiaLeafletMap from "./components/IndiaLeafletMap";
import TempleDetailDrawer from "./components/TempleDetailDrawer";
import AuthOtpModal from "./components/AuthOtpModal";
import YatraDashboardModal from "./components/YatraDashboardModal";
import { supabase } from "./lib/supabaseClient";

const TEMPLE_FILTERS = [
  "All",
  "51 Shakti Peethas",
  "4 Adi Peethas",
  "18 Maha Peethas",
  "Jyotirlinga",
  "Char Dham",
  "UNESCO",
  "South India",
  "North India & Himalayas",
  "West & Central India",
  "East & North-East India",
  "Subcontinent (Outside India)",
];

const TOURISM_FILTERS = [
  "All",
  "Hill Station",
  "Beach",
  "Heritage & Forts",
  "Wildlife & National Park",
  "Waterfalls",
  "Valley & Adventure",
  "Islands",
  "UNESCO",
  "South India",
  "North India & Himalayas",
  "West & Central India",
  "East & North-East India",
];

export default function App() {
  // Unified Master Directory: 120 Temples + 28 States & 8 UTs Tourism Spots
  const allPlaces = useMemo(() => {
    const map = new Map();
    INDIA_TEMPLES_SEED.forEach((t) => map.set(t.id, { ...t, place_type: "temple" }));

    const overlapMap = {
      "as-kamakhya": "sp-kamakhya",
      "wb-kalighat": "sp-kalighat",
      "ka-chamundeshwari": "sp-chamundeshwari",
      "ap-srisailam": "sp-bhramarambika",
      "hp-jwalaji": "sp-jwalamukhi",
      "gj-ambaji": "sp-ambaji",
      "tr-tripurasundari": "sp-tripurasundari",
      "jh-baidyanath": "sp-baidyanath",
      "jk-amarnath": "sp-amarnath",
    };

    Object.keys(overlapMap).forEach((oldId) => map.delete(oldId));
    SHAKTI_PEETHAS_51.forEach((sp) => map.set(sp.id, { ...sp, place_type: "temple" }));
    INDIA_TOURISM_SEED.forEach((tour) => map.set(tour.id, tour));

    return Array.from(map.values());
  }, []);

  // Mode Switcher: 'temple' | 'tourism'
  const [placeMode, setPlaceMode] = useState("temple");
  const [selectedPlace, setSelectedPlace] = useState(allPlaces[0]);
  const [activeFilter, setActiveFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedState, setExpandedState] = useState("Andhra Pradesh");
  const [userCoords, setUserCoords] = useState(null);
  const [locating, setLocating] = useState(false);

  const [user, setUser] = useState(() => {
    const email = localStorage.getItem("uk_yatra_email");
    return email ? { id: "local", email } : null;
  });

  const [profile, setProfile] = useState(() => {
    const saved = localStorage.getItem("uk_yatra_profile");
    return saved
      ? JSON.parse(saved)
      : { full_name: "", home_city: "Vizianagaram", home_station: "VZM" };
  });

  const [showAuthModal, setShowAuthModal] = useState(false);
  const [showDashboard, setShowDashboard] = useState(false);

  const [wishlistIds, setWishlistIds] = useState(() => {
    const saved = localStorage.getItem("uk_yatra_wishlist");
    return saved ? JSON.parse(saved) : ["ap-tirumala", "tour-ap-araku"];
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
    localStorage.setItem("uk_yatra_profile", JSON.stringify(profile));
  }, [profile]);

  const handleSwitchMode = (newMode) => {
    setPlaceMode(newMode);
    setActiveFilter("All");
    setSearchQuery("");
    const firstInMode = allPlaces.find((p) => p.place_type === newMode);
    if (firstInMode) {
      setSelectedPlace(firstInMode);
      setExpandedState(firstInMode.state);
    }
  };

  const syncUserFromSupabase = async (authUser) => {
    if (!supabase || !authUser?.id || authUser.id === "local") return;

    const { data: profData } = await supabase
      .from("user_profiles")
      .select("*")
      .eq("id", authUser.id)
      .single();

    if (profData) {
      setProfile({
        full_name: profData.full_name || "",
        home_city: profData.home_city || "Vizianagaram",
        home_station: localStorage.getItem("uk_yatra_station") || "VZM",
      });
    } else {
      await supabase.from("user_profiles").upsert({
        id: authUser.id,
        email: authUser.email,
        full_name: authUser.email.split("@")[0],
        home_city: "Vizianagaram",
      });
    }

    const { data: logs } = await supabase
      .from("user_temple_logs")
      .select("temple_id, status")
      .eq("user_id", authUser.id);

    if (logs && logs.length > 0) {
      setWishlistIds(logs.filter((l) => l.status === "WISHLIST").map((l) => l.temple_id));
      setVisitedIds(logs.filter((l) => l.status === "VISITED").map((l) => l.temple_id));
    }
  };

  useEffect(() => {
    if (!supabase) return;
    supabase.auth.getUser().then(({ data }) => {
      if (data?.user) {
        setUser(data.user);
        localStorage.setItem("uk_yatra_email", data.user.email);
        syncUserFromSupabase(data.user);
      }
    });

    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session?.user) {
        setUser(session.user);
        localStorage.setItem("uk_yatra_email", session.user.email);
        syncUserFromSupabase(session.user);
      } else {
        setUser(null);
        localStorage.removeItem("uk_yatra_email");
      }
    });

    return () => listener?.subscription?.unsubscribe();
  }, []);

  const handleUpdateProfile = async (updatedData) => {
    setProfile(updatedData);
    localStorage.setItem("uk_yatra_station", updatedData.home_station);

    if (supabase && user?.id && user.id !== "local") {
      await supabase.from("user_profiles").upsert({
        id: user.id,
        email: user.email,
        full_name: updatedData.full_name,
        home_city: updatedData.home_city,
      });
    }
  };

  const handleDetectLocation = () => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser.");
      return;
    }
    setLocating(true);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setUserCoords({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
        });
        setLocating(false);
      },
      () => {
        alert("Please allow Location permission in your browser to calculate live route.");
        setLocating(false);
      }
    );
  };

  const handleToggleStatus = async (placeId, type) => {
    if (!user) {
      setShowAuthModal(true);
      return;
    }

    const isCurrentlyInList =
      type === "WISHLIST"
        ? wishlistIds.includes(placeId)
        : visitedIds.includes(placeId);

    if (type === "WISHLIST") {
      setWishlistIds((prev) =>
        isCurrentlyInList ? prev.filter((id) => id !== placeId) : [...prev, placeId]
      );
    } else {
      setVisitedIds((prev) =>
        isCurrentlyInList ? prev.filter((id) => id !== placeId) : [...prev, placeId]
      );
    }

    if (supabase && user?.id && user.id !== "local") {
      if (isCurrentlyInList) {
        await supabase
          .from("user_temple_logs")
          .delete()
          .eq("user_id", user.id)
          .eq("temple_id", placeId);
      } else {
        await supabase.from("user_temple_logs").upsert(
          {
            user_id: user.id,
            temple_id: placeId,
            status: type,
            visited_date: type === "VISITED" ? new Date().toISOString().split("T")[0] : null,
          },
          { onConflict: "user_id,temple_id" }
        );
      }
    }
  };

  // Filter places by active Mode ('temple' vs 'tourism'), Category & Search
  const filteredPlaces = allPlaces.filter((p) => {
    const matchesMode = p.place_type === placeMode;
    const matchesFilter =
      activeFilter === "All" ||
      p.circuit.includes(activeFilter) ||
      p.region === activeFilter ||
      p.sub_category === activeFilter;

    const q = searchQuery.toLowerCase();
    const matchesSearch =
      p.name.toLowerCase().includes(q) ||
      p.state.toLowerCase().includes(q) ||
      p.city.toLowerCase().includes(q) ||
      (p.deity && p.deity.toLowerCase().includes(q)) ||
      (p.sub_category && p.sub_category.toLowerCase().includes(q)) ||
      (p.fallen_part && p.fallen_part.toLowerCase().includes(q));

    return matchesMode && matchesFilter && matchesSearch;
  });

  // Nearby Combo Suggestions (If viewing Temple -> show Tourism in same state, and vice-versa!)
  const nearbyComboPlaces = useMemo(() => {
    if (!selectedPlace) return [];
    const targetType = selectedPlace.place_type === "temple" ? "tourism" : "temple";
    const sameState = allPlaces.filter(
      (p) => p.place_type === targetType && p.state === selectedPlace.state
    );
    if (sameState.length > 0) return sameState.slice(0, 3);
    return allPlaces
      .filter((p) => p.place_type === targetType && p.region === selectedPlace.region)
      .slice(0, 3);
  }, [selectedPlace, allPlaces]);

  const placesByState = filteredPlaces.reduce((acc, place) => {
    if (!acc[place.state]) acc[place.state] = [];
    acc[place.state].push(place);
    return acc;
  }, {});

  const stateNames = Object.keys(placesByState);

  const handleSelectPlace = (place) => {
    if (place.place_type !== placeMode) {
      setPlaceMode(place.place_type);
      setActiveFilter("All");
    }
    setSelectedPlace(place);
    setExpandedState(place.state);
  };

  const currentFilters = placeMode === "temple" ? TEMPLE_FILTERS : TOURISM_FILTERS;

  return (
    <div className="min-h-screen bg-[#090d16] text-slate-100 flex flex-col">
      {/* Top Navbar with Instant [Temples] & [Tourism] Switcher right next to UK WEBS */}
      <header className="sticky top-0 z-[500] bg-[#0d1322]/95 backdrop-blur-md border-b border-amber-500/20 px-4 lg:px-8 py-3">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          {/* Left: UK WEBS Brand + Prominent Mode Switcher */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center shadow-lg shadow-orange-500/20">
                <Compass className="w-5 h-5 text-slate-950" />
              </div>
              <div>
                <span className="text-[11px] font-extrabold tracking-widest uppercase px-2 py-0.5 rounded bg-orange-500/15 text-orange-400 border border-orange-500/30">
                  UK WEBS
                </span>
                <p className="text-[11px] text-slate-400 hidden sm:block mt-0.5">
                  Bharat Explorer
                </p>
              </div>
            </div>

            {/* Instant Switcher Pill: Temples <-> Tourism */}
            <div className="flex items-center bg-slate-950 p-1 rounded-xl border border-slate-800 shadow-inner">
              <button
                onClick={() => handleSwitchMode("temple")}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-extrabold flex items-center gap-1.5 transition cursor-pointer ${
                  placeMode === "temple"
                    ? "bg-gradient-to-r from-orange-500 to-amber-500 text-slate-950 shadow"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                <Landmark className="w-3.5 h-3.5" />
                <span>Temples</span>
              </button>

              <button
                onClick={() => handleSwitchMode("tourism")}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-extrabold flex items-center gap-1.5 transition cursor-pointer ${
                  placeMode === "tourism"
                    ? "bg-gradient-to-r from-emerald-500 to-teal-400 text-slate-950 shadow"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                <Mountain className="w-3.5 h-3.5" />
                <span>Tourism</span>
              </button>
            </div>
          </div>

          {/* Right: Search, My Yatra & Login */}
          <div className="flex items-center gap-2.5 w-full lg:w-auto">
            <div className="relative flex-1 lg:w-64">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={
                  placeMode === "temple"
                    ? "Search temple, state, Shakti Peetha..."
                    : "Search hill station, beach, fort, state..."
                }
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

            {!user ? (
              <button
                onClick={() => setShowAuthModal(true)}
                className="px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-bold flex items-center gap-1.5 cursor-pointer shrink-0"
              >
                <UserCheck className="w-3.5 h-3.5 text-amber-400" /> Sign In
              </button>
            ) : (
              <button
                onClick={() => setShowDashboard(true)}
                className="px-3 py-2 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 hover:bg-emerald-500/25 text-xs font-bold flex items-center gap-1.5 cursor-pointer shrink-0"
              >
                <User className="w-3.5 h-3.5" />
                {profile.full_name || user.email.split("@")[0]}
              </button>
            )}
          </div>
        </div>
      </header>

      {/* Dynamic Category / Circuit Filter Bar */}
      <div className="max-w-7xl w-full mx-auto px-4 lg:px-6 pt-4">
        <div className="flex items-center gap-2 overflow-x-auto pb-2">
          {currentFilters.map((item) => (
            <button
              key={item}
              onClick={() => setActiveFilter(item)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition cursor-pointer ${
                activeFilter === item
                  ? placeMode === "temple"
                    ? "bg-orange-500 text-slate-950"
                    : "bg-emerald-500 text-slate-950"
                  : "bg-slate-900 text-slate-300 border border-slate-800 hover:border-amber-500/40"
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
            temples={filteredPlaces}
            selectedTemple={selectedPlace}
            onSelectTemple={handleSelectPlace}
            visitedIds={visitedIds}
            userCoords={userCoords}
            onDetectLocation={handleDetectLocation}
            locating={locating}
          />

          {/* State-wise Collapsible Accordion List */}
          <div className="space-y-2 max-h-72 overflow-y-auto pr-1">
            <div className="flex items-center justify-between px-1">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                Explore {placeMode === "temple" ? "Temples" : "Tourism"} by State ({stateNames.length})
              </span>
              <span className="text-[11px] text-amber-400">
                Showing {filteredPlaces.length} destinations
              </span>
            </div>

            {stateNames.map((stateName) => {
              const stateItems = placesByState[stateName];
              const isOpen = expandedState === stateName || searchQuery.trim().length > 0;

              return (
                <div
                  key={stateName}
                  className="bg-slate-900/90 border border-slate-800 rounded-xl overflow-hidden"
                >
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
                        {stateItems.length}
                      </span>
                    </div>

                    <ChevronDown
                      className={`w-4 h-4 text-amber-400 transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="p-2.5 pt-1 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-2 gap-2 bg-slate-950/50">
                      {stateItems.map((p) => {
                        const isSelected = selectedPlace?.id === p.id;
                        const isVisited = visitedIds.includes(p.id);

                        return (
                          <button
                            key={p.id}
                            onClick={() => setSelectedPlace(p)}
                            className={`p-2.5 rounded-lg border text-left transition cursor-pointer flex items-start justify-between gap-2 ${
                              isSelected
                                ? "bg-orange-500/15 border-orange-500"
                                : "bg-slate-900/90 border-slate-800 hover:border-slate-700"
                            }`}
                          >
                            <div>
                              <p className="text-xs font-bold text-slate-100 line-clamp-1">
                                {p.name}
                              </p>
                              <p className="text-[11px] text-slate-400">
                                {p.city} • {p.sub_category || p.fallen_part || p.deity}
                              </p>
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
            temple={selectedPlace}
            isWishlisted={wishlistIds.includes(selectedPlace?.id)}
            isVisited={visitedIds.includes(selectedPlace?.id)}
            onToggleStatus={handleToggleStatus}
            userCoords={userCoords}
            onDetectLocation={handleDetectLocation}
            defaultStation={profile.home_station}
            comboPlaces={nearbyComboPlaces}
            onSelectComboPlace={handleSelectPlace}
          />
        </div>
      </main>

      {/* Modals */}
      <AuthOtpModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        onDemoLogin={(email) => {
          setUser({ id: "local", email });
          localStorage.setItem("uk_yatra_email", email);
        }}
      />

      <YatraDashboardModal
        isOpen={showDashboard}
        onClose={() => setShowDashboard(false)}
        temples={allPlaces}
        wishlistIds={wishlistIds}
        visitedIds={visitedIds}
        user={user}
        profile={profile}
        onUpdateProfile={handleUpdateProfile}
        onSelectTemple={handleSelectPlace}
        onLogout={async () => {
          if (supabase) await supabase.auth.signOut();
          setUser(null);
          localStorage.removeItem("uk_yatra_email");
        }}
      />
    </div>
  );
}