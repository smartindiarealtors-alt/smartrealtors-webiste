"use client";

import { useState } from "react";
import { Sparkles, Heart, Building, CheckCircle, ShieldCheck } from "lucide-react";
import { Property } from "@/data/mockData";

interface PropertyCardProps {
  property: Property;
  onBook: (propName: string) => void;
}

export default function PropertyCard({ property, onBook }: PropertyCardProps) {
  const [liked, setLiked] = useState(false);

  return (
    <div className="glass-card rounded-2xl overflow-hidden border border-gold-500/15 hover:border-gold-500/40 transition-all duration-500 group flex flex-col h-full luxury-shadow">
      {/* Property Image & Status overlay */}
      <div className="relative h-56 w-full bg-black overflow-hidden flex-shrink-0">
        <img
          src={property.image}
          alt={property.name}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

        {/* Favorite Icon */}
        <button
          onClick={() => setLiked(!liked)}
          className={`absolute top-4 right-4 w-9 h-9 rounded-full flex items-center justify-center backdrop-blur-md transition-all ${
            liked
              ? "bg-[#C9A84C] text-[#06060e]"
              : "bg-black/40 text-white hover:bg-black/65 border border-white/10"
          }`}
        >
          <Heart size={16} fill={liked ? "currentColor" : "none"} />
        </button>

        {/* RERA Approved Badge */}
        <div className="absolute top-4 left-4 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-sir-green/40 text-[#16A34A] text-[10px] font-bold uppercase tracking-wider">
          <ShieldCheck size={12} />
          <span>RERA Verified</span>
        </div>

        {/* Builder Profile Tag */}
        <div className="absolute bottom-4 left-4">
          <div className="text-[10px] text-[#C9A84C] font-bold uppercase tracking-wider">
            {property.builder}
          </div>
          <h4 className="font-heading text-lg text-white font-bold leading-tight mt-0.5">
            {property.name}
          </h4>
        </div>
      </div>

      {/* Property Details */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div className="space-y-3">
          <div className="flex justify-between items-center text-xs text-[#8888a8]">
            <span className="flex items-center gap-1">
              <Building size={12} />
              <span>{property.type}</span>
            </span>
            <span>📍 {property.location}</span>
          </div>

          <div className="flex flex-wrap gap-1.5">
            {property.configurations.map((config) => (
              <span
                key={config}
                className="text-[10px] font-bold px-2 py-0.5 rounded bg-white/5 border border-white/10 text-white"
              >
                {config}
              </span>
            ))}
            <span
              className={`text-[10px] font-bold px-2 py-0.5 rounded border ${
                property.status === "Ready to Move"
                  ? "bg-sir-green/10 border-sir-green/20 text-sir-green"
                  : "bg-gold-500/10 border-gold-500/20 text-[#C9A84C]"
              }`}
            >
              {property.status}
            </span>
          </div>

          <p className="text-xs text-[#8888a8] line-clamp-2 leading-relaxed">
            {property.description}
          </p>
        </div>

        {/* Price & Primary CTA */}
        <div className="mt-5 pt-4 border-t border-white/5 flex items-center justify-between">
          <div>
            <div className="text-[10px] text-[#8888a8] font-bold uppercase tracking-wider">
              Investment Ask
            </div>
            <div className="text-xl font-extrabold text-white">{property.priceDisplay}</div>
          </div>

          <button
            onClick={() => onBook(property.name)}
            className="btn-gold py-2 px-4 text-xs"
          >
            <span>Book Visit</span>
          </button>
        </div>
      </div>
    </div>
  );
}
