"use client";

import { useEffect, useState } from "react";
import { Location } from "@/data/mockData";
import {
  TrendingUp,
  MapPin,
  Building,
  School,
  Activity,
  Navigation,
  CheckCircle,
  Clock,
  Sparkles
} from "lucide-react";

interface LocationDashboardProps {
  location: Location;
}

export default function LocationDashboard({ location }: LocationDashboardProps) {
  const [animatedScore, setAnimatedScore] = useState(0);

  useEffect(() => {
    setAnimatedScore(0);
    const duration = 1000; // 1 second animation
    const startTime = performance.now();

    const animate = (time: number) => {
      const elapsed = time - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Easing out quadratic
      const ease = progress * (2 - progress);
      setAnimatedScore(Math.floor(ease * location.investmentScore));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [location]);

  return (
    <div className="glass-card rounded-3xl p-8 border border-gold-500/15 luxury-shadow relative overflow-hidden animate-fade-in">
      {/* Background glow lines */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#C9A84C]/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-sir-purple/5 rounded-full blur-[100px]" />

      {/* Top section: Title and Stats */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 pb-6 border-b border-white/10">
        <div>
          <div className="flex items-center gap-2 text-[#C9A84C] text-sm font-semibold uppercase tracking-wider mb-1">
            <MapPin size={14} />
            <span>Market Profile</span>
          </div>
          <h2 className="text-3xl md:text-4xl text-white font-heading">
            {location.name}, <span className="gold-text">{location.city}</span>
          </h2>
          <p className="text-[#8888a8] mt-2 max-w-xl text-sm leading-relaxed">
            {location.description}
          </p>
        </div>

        {/* Investment Score Badge */}
        <div className="flex items-center gap-4 bg-white/5 border border-gold-500/15 rounded-2xl p-4 self-stretch lg:self-auto justify-center">
          <div className="relative w-16 h-16 rounded-full border-2 border-gold-500/20 flex items-center justify-center bg-black">
            <div className="absolute inset-0 rounded-full border-t-2 border-gold-500 animate-spin" style={{ animationDuration: "3s" }} />
            <span className="font-heading font-black text-xl text-white">
              {animatedScore}
            </span>
          </div>
          <div>
            <div className="text-xs text-[#8888a8] font-bold uppercase tracking-wider">
              SIR Investment
            </div>
            <div className="text-base font-extrabold text-white flex items-center gap-1.5 mt-0.5">
              <span>Class A Premium</span>
              <Sparkles size={14} className="text-[#C9A84C]" />
            </div>
          </div>
        </div>
      </div>

      {/* Count breakdown row */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 py-8 border-b border-white/5 text-center">
        <div>
          <div className="text-2xl font-black text-white">{location.totalProjects}</div>
          <div className="text-xs text-[#8888a8] font-semibold mt-1">Total Projects</div>
        </div>
        <div>
          <div className="text-2xl font-black text-[#C9A84C]">{location.villas}</div>
          <div className="text-xs text-[#8888a8] font-semibold mt-1">Luxury Villas</div>
        </div>
        <div>
          <div className="text-2xl font-black text-white">{location.apartments}</div>
          <div className="text-xs text-[#8888a8] font-semibold mt-1">Apartments</div>
        </div>
        <div>
          <div className="text-2xl font-black text-white">{location.plots}</div>
          <div className="text-xs text-[#8888a8] font-semibold mt-1">Villas Plots</div>
        </div>
        <div>
          <div className="text-2xl font-black text-white">{location.commercial}</div>
          <div className="text-xs text-[#8888a8] font-semibold mt-1">Commercial</div>
        </div>
        <div className="border-t md:border-t-0 md:border-l border-white/5 pt-4 md:pt-0">
          <div className="text-2xl font-black text-sir-green flex items-center justify-center gap-1">
            <CheckCircle size={16} />
            <span>{location.readyToMove}</span>
          </div>
          <div className="text-xs text-[#8888a8] font-semibold mt-1">Ready to Move</div>
        </div>
        <div className="border-t md:border-t-0 md:border-l border-white/5 pt-4 md:pt-0">
          <div className="text-2xl font-black text-gold-400 flex items-center justify-center gap-1">
            <Clock size={16} />
            <span>{location.underConstruction}</span>
          </div>
          <div className="text-xs text-[#8888a8] font-semibold mt-1">Under Construction</div>
        </div>
      </div>

      {/* Metrics & Neighbor Insights */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pt-8">
        {/* Market Pricing details */}
        <div className="flex flex-col justify-between p-6 bg-white/5 rounded-2xl border border-white/5">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm font-semibold text-white">Market Trends</span>
            <TrendingUp size={16} className="text-sir-green" />
          </div>
          <div className="space-y-4">
            <div className="flex justify-between items-baseline">
              <span className="text-sm text-[#8888a8]">Avg. Price / sq.ft</span>
              <span className="text-xl font-bold text-white">{location.avgPriceSqFt}</span>
            </div>
            <div className="flex justify-between items-baseline">
              <span className="text-sm text-[#8888a8]">YoY Appreciation</span>
              <span className="text-xl font-bold text-sir-green">{location.appreciationYoY}</span>
            </div>
            <div className="flex justify-between items-baseline">
              <span className="text-sm text-[#8888a8]">Connectivity Score</span>
              <span className="text-xl font-bold text-[#C9A84C]">{location.connectivityScore}/100</span>
            </div>
          </div>
        </div>

        {/* Infrastructure & Safety */}
        <div className="p-6 bg-white/5 rounded-2xl border border-white/5 space-y-4">
          <span className="text-sm font-semibold text-white block mb-2">Location Index Rating</span>
          <div className="space-y-3">
            <div>
              <div className="flex justify-between text-xs text-[#8888a8] mb-1">
                <span>Infrastructure Index</span>
                <span>{location.infrastructureScore}%</span>
              </div>
              <div className="w-full h-1.5 bg-black rounded-full overflow-hidden">
                <div className="h-full bg-[#C9A84C] rounded-full" style={{ width: `${location.infrastructureScore}%` }} />
              </div>
            </div>
            <div>
              <div className="flex justify-between text-xs text-[#8888a8] mb-1">
                <span>Safety Index</span>
                <span>{location.safetyScore}%</span>
              </div>
              <div className="w-full h-1.5 bg-black rounded-full overflow-hidden">
                <div className="h-full bg-sir-green rounded-full" style={{ width: `${location.safetyScore}%` }} />
              </div>
            </div>
          </div>
        </div>

        {/* Nearby Conveniences */}
        <div className="p-6 bg-white/5 rounded-2xl border border-white/5 space-y-4">
          <span className="text-sm font-semibold text-white block mb-2">Neighborhood Insights</span>
          <div className="space-y-2 text-xs">
            <div className="flex items-start gap-2">
              <School size={14} className="text-[#C9A84C] mt-0.5" />
              <div>
                <span className="text-[#8888a8] font-semibold">Schools:</span>{" "}
                <span className="text-white">{location.schools.join(", ")}</span>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <Activity size={14} className="text-sir-red mt-0.5" />
              <div>
                <span className="text-[#8888a8] font-semibold">Hospitals:</span>{" "}
                <span className="text-white">{location.hospitals.join(", ")}</span>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <Navigation size={14} className="text-sir-purple mt-0.5" />
              <div>
                <span className="text-[#8888a8] font-semibold">Transit Links:</span>{" "}
                <span className="text-white">{location.transit.join(", ")}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
