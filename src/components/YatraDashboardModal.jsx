import React, { useState } from "react";
import { X, Award, Heart, CheckCircle2, Trash2, LogOut } from "lucide-react";
import { supabase } from "../lib/supabaseClient";

export default function YatraDashboardModal({
  isOpen,
  onClose,
  temples,
  wishlistIds,
  visitedIds,
  userEmail,
  onSelectTemple,
  onLogout,
}) {
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [deleting, setDeleting] = useState(false);

  if (!isOpen) return null;

  const visitedTemples = temples.filter((t) => visitedIds.includes(t.id));
  const wishlistTemples = temples.filter((t) => wishlistIds.includes(t.id));

  const jyotirlingaVisited = visitedTemples.filter((t) =>
    t.circuit.includes("Jyotirlinga")
  ).length;
  const charDhamVisited = visitedTemples.filter((t) =>
    t.circuit.includes("Char Dham")
  ).length;

  const handleDeleteAccount = async () => {
    setDeleting(true);
    if (supabase) {
      await supabase.functions.invoke("delete-user");
      await supabase.auth.signOut();
    }
    localStorage.clear();
    setDeleting(false);
    setConfirmDelete(false);
    onLogout();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[1000] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-[#0e1525] border border-slate-700 rounded-2xl max-w-2xl w-full p-6 space-y-5 max-h-[88vh] overflow-y-auto">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <div>
            <h3 className="text-lg font-extrabold text-amber-400 flex items-center gap-2">
              <Award className="w-5 h-5" /> Sacred Bharat Yatra Dashboard
            </h3>
            {userEmail && <p className="text-xs text-slate-400">{userEmail}</p>}
          </div>
          <button onClick={onClose} className="text-slate-400 hover:text-white cursor-pointer">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Circuit Progress Bars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-3.5 space-y-2">
            <div className="flex justify-between text-xs font-bold">
              <span className="text-red-400">12 Jyotirlingas</span>
              <span>{jyotirlingaVisited} / 12 Completed</span>
            </div>
            <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-red-500 transition-all"
                style={{ width: `${(jyotirlingaVisited / 12) * 100}%` }}
              />
            </div>
          </div>

          <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-3.5 space-y-2">
            <div className="flex justify-between text-xs font-bold">
              <span className="text-sky-400">Char Dham Yatra</span>
              <span>{charDhamVisited} / 4 Completed</span>
            </div>
            <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-sky-400 transition-all"
                style={{ width: `${(charDhamVisited / 4) * 100}%` }}
              />
            </div>
          </div>
        </div>

        {/* Visited & Wishlist Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <h4 className="text-xs font-bold uppercase text-emerald-400 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4" /> Visited Temples ({visitedTemples.length})
            </h4>
            <div className="space-y-1.5 max-h-48 overflow-y-auto">
              {visitedTemples.length === 0 ? (
                <p className="text-xs text-slate-500">No temples marked as visited yet.</p>
              ) : (
                visitedTemples.map((t) => (
                  <button
                    key={t.id}
                    onClick={() => {
                      onSelectTemple(t);
                      onClose();
                    }}
                    className="w-full text-left bg-emerald-500/10 border border-emerald-500/25 rounded-lg px-3 py-2 text-xs hover:border-emerald-400 cursor-pointer"
                  >
                    <p className="font-bold text-slate-100">{t.name}</p>
                    <p className="text-[11px] text-slate-400">{t.state}</p>
                  </button>
                ))
              )}
            </div>
          </div>

          <div className="space-y-2">
            <h4 className="text-xs font-bold uppercase text-rose-400 flex items-center gap-1.5">
              <Heart className="w-4 h-4" /> Yatra Wishlist ({wishlistTemples.length})
            </h4>
            <div className="space-y-1.5 max-h-48 overflow-y-auto">
              {wishlistTemples.length === 0 ? (
                <p className="text-xs text-slate-500">Wishlist is empty.</p>
              ) : (
                wishlistTemples.map((t) => (
                  <button
                    key={t.id}
                    onClick={() => {
                      onSelectTemple(t);
                      onClose();
                    }}
                    className="w-full text-left bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-xs hover:border-amber-400 cursor-pointer"
                  >
                    <p className="font-bold text-slate-100">{t.name}</p>
                    <p className="text-[11px] text-slate-400">
                      {t.state} • Rail: {t.travel.nearest_railway_code}
                    </p>
                  </button>
                ))
              )}
            </div>
          </div>
        </div>

        {/* Account Settings & GDPR Account Deletion */}
        {userEmail && (
          <div className="border-t border-slate-800 pt-4 flex flex-wrap items-center justify-between gap-3">
            <button
              onClick={onLogout}
              className="px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold flex items-center gap-1.5 cursor-pointer"
            >
              <LogOut className="w-3.5 h-3.5" /> Sign Out
            </button>

            {!confirmDelete ? (
              <button
                onClick={() => setConfirmDelete(true)}
                className="px-3 py-2 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 hover:bg-red-500/20 text-xs font-semibold flex items-center gap-1.5 cursor-pointer"
              >
                <Trash2 className="w-3.5 h-3.5" /> Delete Account
              </button>
            ) : (
              <div className="flex items-center gap-2">
                <span className="text-xs text-red-400">Wipe all data permanently?</span>
                <button
                  onClick={handleDeleteAccount}
                  disabled={deleting}
                  className="px-3 py-1.5 rounded-lg bg-red-600 text-white text-xs font-bold cursor-pointer"
                >
                  {deleting ? "Deleting..." : "Confirm Delete"}
                </button>
                <button
                  onClick={() => setConfirmDelete(false)}
                  className="px-2.5 py-1.5 rounded-lg bg-slate-800 text-xs cursor-pointer"
                >
                  Cancel
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}