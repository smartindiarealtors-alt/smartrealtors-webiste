"use client";

import { useState } from "react";
import { GitCompare, ArrowRight, Brain, Sparkles, AlertCircle } from "lucide-react";
import { locations } from "@/data/mockData";

export default function ComparePanel() {
  const [locAKey, setLocAKey] = useState("gachibowli");
  const [locBKey, setLocBKey] = useState("kokapet");

  const locA = locations.find((l) => l.id === locAKey) || locations[0];
  const locB = locations.find((l) => l.id === locBKey) || locations[1];

  // Helper values for dynamic AI comparison verdict
  const getAiVerdict = () => {
    if (locAKey === locBKey) {
      return "Please select two different locations to run the comparative AI model analysis.";
    }
    const scoreDiff = locA.investmentScore - locB.investmentScore;
    const priceDiff = parseFloat(locA.avgPriceSqFt.replace(/[^0-9]/g, "")) - parseFloat(locB.avgPriceSqFt.replace(/[^0-9]/g, ""));

    let verdict = "";
    if (Math.abs(scoreDiff) <= 4) {
      verdict = `Both ${locA.name} and ${locB.name} exhibit exceptionally high development patterns. However, ${
        priceDiff < 0 ? locA.name : locB.name
      } presents a slightly more attractive entry pricing, while ${
        scoreDiff > 0 ? locA.name : locB.name
      } commands higher price appreciation momentum due to denser corporate/IT infrastructure proximity.`;
    } else {
      verdict = `${scoreDiff > 0 ? locA.name : locB.name} is the clear leader for long-term investment, boasting a higher investment rating of ${
        scoreDiff > 0 ? locA.investmentScore : locB.investmentScore
      }/100. It benefits from stronger infrastructure and faster pricing appreciation (${
        scoreDiff > 0 ? locA.appreciationYoY : locB.appreciationYoY
      } growth).`;
    }

    return verdict;
  };

  return (
    <div id="compare" className="glass-card rounded-3xl p-8 border border-gold-500/15 luxury-shadow relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#C9A84C]/5 rounded-full blur-[80px]" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-sir-purple/5 rounded-full blur-[80px]" />

      <div className="flex items-center gap-2 text-[#C9A84C] text-sm font-semibold uppercase tracking-wider mb-2">
        <GitCompare size={14} />
        <span>Market Analysis Compare</span>
      </div>
      <h3 className="text-3xl text-white font-heading mb-6">
        Compare Markets <span className="gold-text">Side-by-Side</span>
      </h3>

      {/* Select Box Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div>
          <label className="text-xs text-[#8888a8] font-bold uppercase block mb-1.5">Select Area A</label>
          <select
            value={locAKey}
            onChange={(e) => setLocAKey(e.target.value)}
            className="w-full bg-black text-white font-sans font-medium border border-gold-500/15 focus:border-gold-500/80 rounded-xl p-4 transition-all duration-300 outline-none cursor-pointer"
          >
            {locations.map((l) => (
              <option key={l.id} value={l.id}>
                {l.name} ({l.city})
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="text-xs text-[#8888a8] font-bold uppercase block mb-1.5">Select Area B</label>
          <select
            value={locBKey}
            onChange={(e) => setLocBKey(e.target.value)}
            className="w-full bg-black text-white font-sans font-medium border border-gold-500/15 focus:border-gold-500/80 rounded-xl p-4 transition-all duration-300 outline-none cursor-pointer"
          >
            {locations.map((l) => (
              <option key={l.id} value={l.id}>
                {l.name} ({l.city})
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Table grid */}
      <div className="border border-white/10 rounded-2xl overflow-hidden bg-black/40">
        <div className="grid grid-cols-3 bg-white/5 border-b border-white/10 py-4 px-6 text-sm font-bold text-white uppercase tracking-wider font-heading">
          <div>Metric</div>
          <div className="text-center text-[#C9A84C]">{locA.name}</div>
          <div className="text-center text-sir-purple">{locB.name}</div>
        </div>

        {/* Rows */}
        <div className="divide-y divide-white/5 text-sm">
          {/* Average Price */}
          <div className="grid grid-cols-3 py-4 px-6 items-center text-white">
            <div className="text-[#8888a8] font-semibold">Avg. Price / sq.ft</div>
            <div className="text-center font-bold">{locA.avgPriceSqFt}</div>
            <div className="text-center font-bold">{locB.avgPriceSqFt}</div>
          </div>

          {/* YoY Growth */}
          <div className="grid grid-cols-3 py-4 px-6 items-center text-white">
            <div className="text-[#8888a8] font-semibold">YoY Price Growth</div>
            <div className="text-center text-sir-green font-bold">{locA.appreciationYoY}</div>
            <div className="text-center text-sir-green font-bold">{locB.appreciationYoY}</div>
          </div>

          {/* Investment Score */}
          <div className="grid grid-cols-3 py-4 px-6 items-center text-white">
            <div className="text-[#8888a8] font-semibold">Investment Score</div>
            <div className="text-center font-extrabold text-[#C9A84C]">{locA.investmentScore}/100</div>
            <div className="text-center font-extrabold text-[#C9A84C]">{locB.investmentScore}/100</div>
          </div>

          {/* Safety Rating */}
          <div className="grid grid-cols-3 py-4 px-6 items-center text-white">
            <div className="text-[#8888a8] font-semibold">Safety Index</div>
            <div className="text-center">{locA.safetyScore}%</div>
            <div className="text-center">{locB.safetyScore}%</div>
          </div>

          {/* Infrastructure Rating */}
          <div className="grid grid-cols-3 py-4 px-6 items-center text-white">
            <div className="text-[#8888a8] font-semibold">Infrastructure Index</div>
            <div className="text-center">{locA.infrastructureScore}%</div>
            <div className="text-center">{locB.infrastructureScore}%</div>
          </div>
        </div>
      </div>

      {/* AI Verdict Card */}
      <div className="mt-6 p-6 bg-sir-purple/10 border border-sir-purple/20 rounded-2xl flex items-start gap-4">
        <div className="w-10 h-10 rounded-xl bg-sir-purple/20 flex items-center justify-center text-[#7C3AED] flex-shrink-0">
          <Brain size={20} className="animate-pulse" />
        </div>
        <div>
          <div className="flex items-center gap-1 text-[#7C3AED] text-xs font-bold uppercase tracking-wider mb-1">
            <Sparkles size={12} />
            <span>AI Predictive Comparison Verdict</span>
          </div>
          <p className="text-[#a0aec0] text-sm leading-relaxed">{getAiVerdict()}</p>
        </div>
      </div>
    </div>
  );
}
