"use client";

import { useState, useRef, useEffect } from "react";
import { Search, MapPin, Building, Home, ArrowRight } from "lucide-react";
import { searchSuggestions } from "@/data/mockData";

interface LocationSearchProps {
  onSearch: (query: string) => void;
  size?: "large" | "compact";
}

export default function LocationSearch({ onSearch, size = "large" }: LocationSearchProps) {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(false);
  const [filtered, setFiltered] = useState<typeof searchSuggestions>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setActive(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setQuery(val);
    if (val.trim() === "") {
      setFiltered([]);
      return;
    }

    const matches = searchSuggestions.filter((item) =>
      item.name.toLowerCase().includes(val.toLowerCase())
    );
    setFiltered(matches);
    setActive(true);
  };

  const handleSuggestionClick = (name: string) => {
    setQuery(name);
    onSearch(name);
    setActive(false);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query);
      setActive(false);
    }
  };

  return (
    <div ref={containerRef} className="relative w-full z-20">
      <form onSubmit={handleSearchSubmit} className="relative flex items-center">
        <div className="absolute left-5 text-[#C9A84C] animate-pulse">
          <Search size={size === "large" ? 22 : 18} />
        </div>
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          onFocus={() => setActive(true)}
          placeholder="Search your preferred location (e.g., Gachibowli, Kokapet)..."
          className={`w-full bg-rgba(14,14,26,0.6) text-white font-sans font-medium placeholder-[#8888a8] border border-gold-500/20 hover:border-gold-500/45 focus:border-gold-500/80 rounded-2xl transition-all duration-300 outline-none backdrop-blur-md shadow-gold/5 ${
            size === "large" ? "py-5 pl-14 pr-32 text-lg" : "py-3.5 pl-11 pr-24 text-sm"
          }`}
        />
        <button
          type="submit"
          className={`absolute right-2.5 btn-gold flex items-center gap-1.5 ${
            size === "large" ? "py-3 px-6 text-sm" : "py-2 px-4 text-xs"
          }`}
        >
          <span>Find Homes</span>
          <ArrowRight size={14} />
        </button>
      </form>

      {/* Autocomplete Dropdown */}
      {active && (filtered.length > 0 || query.trim() !== "") && (
        <div className="absolute top-full left-0 right-0 mt-3 glass-card rounded-2xl overflow-hidden shadow-gold-lg border border-gold-500/15 max-h-72 overflow-y-auto">
          {filtered.length > 0 ? (
            filtered.map((item) => (
              <button
                key={item.name}
                onClick={() => handleSuggestionClick(item.name)}
                className="w-full text-left py-4 px-5 hover:bg-[#C9A84C]/10 border-b border-white/5 last:border-b-0 flex items-center justify-between text-white transition-all duration-200 group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-gold-500/10 flex items-center justify-center text-[#C9A84C] group-hover:bg-[#C9A84C]/25 transition-colors">
                    {item.type === "city" ? <Home size={15} /> : <MapPin size={15} />}
                  </div>
                  <div>
                    <div className="font-semibold text-sm">{item.name}</div>
                    <div className="text-xs text-[#8888a8] capitalize">{item.type}</div>
                  </div>
                </div>
                <div className="text-xs text-[#C9A84C] font-bold opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                  <span>Select</span>
                  <ArrowRight size={12} />
                </div>
              </button>
            ))
          ) : (
            <div className="py-6 text-center text-[#8888a8] text-sm">
              No exact location matches found. Press Enter to search "{query}".
            </div>
          )}
        </div>
      )}
    </div>
  );
}
