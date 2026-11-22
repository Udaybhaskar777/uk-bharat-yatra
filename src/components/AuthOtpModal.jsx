import React, { useState } from "react";
import { Mail, KeyRound, X, ShieldCheck } from "lucide-react";
import { supabase } from "../lib/supabaseClient";

export default function AuthOtpModal({ isOpen, onClose, onDemoLogin }) {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState("EMAIL"); // EMAIL | OTP
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  if (!isOpen) return null;

  const handleSendOtp = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    if (!supabase) {
      setStep("OTP");
      setMessage("Demo Mode: Enter any 6-digit OTP (e.g. 123456) to test.");
      setLoading(false);
      return;
    }

    const { error } = await supabase.auth.signInWithOtp({ email });
    setLoading(false);
    if (error) {
      setMessage(error.message);
    } else {
      setStep("OTP");
      setMessage("6-digit OTP sent to your email! Check Inbox/Spam.");
    }
  };

  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    if (!supabase) {
      onDemoLogin(email);
      setLoading(false);
      onClose();
      return;
    }

    const { error } = await supabase.auth.verifyOtp({
      email,
      token: otp,
      type: "email",
    });
    setLoading(false);
    if (error) {
      setMessage(error.message);
    } else {
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-[1000] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-[#0e1525] border border-amber-500/30 rounded-2xl max-w-md w-full p-6 space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold text-amber-400 flex items-center gap-2">
            <ShieldCheck className="w-5 h-5" /> Sacred Bharat Yatra Login
          </h3>
          <button onClick={onClose} className="text-slate-400 hover:text-white cursor-pointer">
            <X className="w-5 h-5" />
          </button>
        </div>

        <p className="text-xs text-slate-400">
          Sync your Yatra Wishlist, Visited Jyotirlingas & Char Dham progress across devices.
        </p>

        {step === "EMAIL" ? (
          <form onSubmit={handleSendOtp} className="space-y-3">
            <div className="relative">
              <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="w-full bg-slate-950 border border-slate-700 rounded-xl pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:border-amber-500"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm transition cursor-pointer"
            >
              {loading ? "Sending OTP..." : "Send 6-Digit Email OTP"}
            </button>
          </form>
        ) : (
          <form onSubmit={handleVerifyOtp} className="space-y-3">
            <div className="relative">
              <KeyRound className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                required
                maxLength={6}
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                placeholder="Enter 6-digit OTP"
                className="w-full bg-slate-950 border border-slate-700 rounded-xl pl-10 pr-4 py-2.5 text-sm tracking-widest font-bold focus:outline-none focus:border-amber-500"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm transition cursor-pointer"
            >
              {loading ? "Verifying..." : "Verify & Continue Yatra"}
            </button>
          </form>
        )}

        {message && <p className="text-xs text-amber-300 bg-amber-500/10 p-2.5 rounded-lg">{message}</p>}
      </div>
    </div>
  );
}