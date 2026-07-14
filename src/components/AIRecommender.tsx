"use client";

import { useState } from "react";
import { Sparkles, ArrowRight, Building, CheckCircle, Percent } from "lucide-react";
import { properties } from "@/data/mockData";

export default function AIRecommender() {
  const [city, setCity] = useState("Hyderabad");
  const [type, setType] = useState("Apartment");
  const [budget, setBudget] = useState("3.0"); // in Crores
  const [bhk, setBhk] = useState("3 BHK");
  const [recommendations, setRecommendations] = useState<any[]>([]);
  const [submitted, setSubmitted] = useState(false);

  const handleRecommend = () => {
    // Filter and score properties
    const budgetNum = parseFloat(budget);
    const scored = properties.map((prop) => {
      let score = 100;

      // Location match
      if (prop.city.toLowerCase() !== city.toLowerCase()) {
        score -= 30;
      }
      // Type match
      if (prop.type.toLowerCase() !== type.toLowerCase()) {
        score -= 25;
      }
      // Price proximity score
      const priceDiff = Math.abs(prop.price - budgetNum);
      const pricePenalty = Math.min((priceDiff / budgetNum) * 35, 35);
      score -= pricePenalty;

      // BHK match
      const bhkMatch = prop.configurations.some((c) => c.includes(bhk.split(" ")[0]));
      if (!bhkMatch) {
        score -= 15;
      }

      const finalScore = Math.max(Math.round(score), 45);

      return {
        ...prop,
        matchScore: finalScore,
      };
    });

    // Sort by highest match score
    const sorted = scored.sort((a, b) => b.matchScore - a.matchScore).slice(0, 3);
    setRecommendations(sorted);
    setSubmitted(true);
  };

  return (
    <div id="ai-finder" className="glass-card rounded-3xl p-8 border border-gold-500/15 luxury-shadow relative overflow-hidden">
      <div className="absolute top-0 left-0 w-64 h-64 bg-sir-purple/5 rounded-full blur-[80px]" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#C9A84C]/5 rounded-full blur-[80px]" />

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        {/* Filter Input Column */}
        <div className="lg:col-span-2 space-y-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sir-purple/10 border border-sir-purple/20 text-[#7C3AED] text-xs font-bold uppercase tracking-wider mb-3">
              <Sparkles size={12} className="animate-spin" style={{ animationDuration: "3s" }} />
              <span>Smart Recommendation Engine</span>
            </div>
            <h3 className="text-3xl text-white font-heading leading-tight">
              AI Property <span className="gold-text">Match Finder</span>
            </h3>
            <p className="text-[#8888a8] text-sm mt-2">
              Answer 4 simple preferences, and our matching model will select the highest compatibility developments.
            </p>
          </div>

          <div className="space-y-4">
            {/* City */}
            <div>
              <label className="text-xs text-[#8888a8] font-bold uppercase block mb-1.5">Target City</label>
              <div className="flex gap-2">
                {["Hyderabad", "Bangalore", "Pune"].map((c) => (
                  <button
                    key={c}
                    onClick={() => setCity(c)}
                    className={`flex-1 py-2 rounded-xl text-xs font-semibold border transition-all ${
                      city === c
                        ? "border-[#C9A84C] bg-[#C9A84C]/10 text-white"
                        : "border-white/5 bg-white/5 text-[#8888a8] hover:text-white"
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>

            {/* Property Type */}
            <div>
              <label className="text-xs text-[#8888a8] font-bold uppercase block mb-1.5">Property Type</label>
              <div className="flex gap-2">
                {["Apartment", "Villa", "Plot"].map((t) => (
                  <button
                    key={t}
                    onClick={() => setType(t)}
                    className={`flex-1 py-2 rounded-xl text-xs font-semibold border transition-all ${
                      type === t
                        ? "border-[#C9A84C] bg-[#C9A84C]/10 text-white"
                        : "border-white/5 bg-white/5 text-[#8888a8] hover:text-white"
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            {/* Budget */}
            <div>
              <div className="flex justify-between text-xs font-bold uppercase mb-1.5">
                <span className="text-[#8888a8]">Target Budget</span>
                <span className="text-white">₹{budget} Cr</span>
              </div>
              <input
                type="range"
                min="0.5"
                max="8.0"
                step="0.25"
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                className="w-full h-1 bg-black rounded-lg appearance-none cursor-pointer accent-[#C9A84C]"
              />
            </div>

            {/* BHK */}
            <div>
              <label className="text-xs text-[#8888a8] font-bold uppercase block mb-1.5">Configuration</label>
              <div className="flex gap-2">
                {["2 BHK", "3 BHK", "4 BHK", "5 BHK"].map((b) => (
                  <button
                    key={b}
                    onClick={() => setBhk(b)}
                    className={`flex-1 py-2 rounded-xl text-xs font-semibold border transition-all ${
                      bhk === b
                        ? "border-[#C9A84C] bg-[#C9A84C]/10 text-white"
                        : "border-white/5 bg-white/5 text-[#8888a8] hover:text-white"
                    }`}
                  >
                    {b}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <button
            onClick={handleRecommend}
            className="w-full btn-gold py-4 rounded-xl flex items-center justify-center gap-2"
          >
            <span>Run AI Model Match</span>
            <ArrowRight size={16} />
          </button>
        </div>

        {/* Output Column */}
        <div className="lg:col-span-3 flex flex-col justify-center min-h-[300px]">
          {!submitted ? (
            <div className="h-full border border-white/5 bg-white/5 rounded-2xl flex flex-col items-center justify-center p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-sir-purple/10 border border-sir-purple/20 flex items-center justify-center text-[#7C3AED] mb-4">
                <Sparkles size={24} />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">Awaiting Matching Execution</h4>
              <p className="text-[#8888a8] text-xs max-w-xs">
                Select your parameters and click "Run AI Model Match" to display matching properties.
              </p>
            </div>
          ) : (
            <div className="space-y-4 animate-fade-in">
              <h4 className="text-sm font-bold uppercase text-[#8888a8] tracking-wider mb-2">
                Top AI compatibility matches ({recommendations.length})
              </h4>
              {recommendations.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-4 bg-white/5 border border-white/10 hover:border-gold-500/30 rounded-2xl p-4 transition-all duration-300 group"
                >
                  <div className="w-20 h-20 rounded-xl overflow-hidden bg-black flex-shrink-0 relative">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="text-xs text-[#8888a8] font-bold uppercase">{item.builder}</div>
                    <h5 className="font-heading text-lg text-white font-bold leading-tight mt-0.5 group-hover:text-[#C9A84C] transition-colors truncate">
                      {item.name}
                    </h5>
                    <div className="text-xs text-[#8888a8] mt-1 truncate">
                      📍 {item.location} • {item.size}
                    </div>
                  </div>

                  <div className="flex flex-col items-end gap-1 flex-shrink-0">
                    <div className="text-base font-extrabold text-[#C9A84C]">{item.priceDisplay}</div>
                    <div className="flex items-center gap-1 text-[#7C3AED] bg-sir-purple/10 border border-sir-purple/20 rounded-full px-2 py-0.5 text-[10px] font-bold">
                      <Percent size={10} />
                      <span>{item.matchScore}% Match</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
