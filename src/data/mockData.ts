export interface Property {
  id: string;
  name: string;
  type: "Apartment" | "Villa" | "Plot" | "Commercial";
  builder: string;
  location: string;
  city: string;
  area: string;
  price: number; // in Lakhs/Crores. Let's keep it numeric in Crores
  priceDisplay: string;
  pricePerSqFt: string;
  size: string;
  configurations: string[];
  status: "Ready to Move" | "Under Construction";
  rera: string;
  image: string;
  lat: number;
  lng: number;
  amenities: string[];
  description: string;
  loanAvailable: boolean;
}

export interface Location {
  id: string;
  name: string;
  city: string;
  totalProjects: number;
  villas: number;
  apartments: number;
  plots: number;
  commercial: number;
  readyToMove: number;
  underConstruction: number;
  avgPriceSqFt: string;
  appreciationYoY: string;
  investmentScore: number;
  connectivityScore: number;
  infrastructureScore: number;
  safetyScore: number;
  description: string;
  schools: string[];
  hospitals: string[];
  transit: string[];
  lat: number;
  lng: number;
}

export const builders = [
  { id: "b1", name: "Lodha Group", logo: "👑", rating: 4.9 },
  { id: "b2", name: "Prestige Group", logo: "⚜️", rating: 4.8 },
  { id: "b3", name: "Sobha Limited", logo: "💎", rating: 4.9 },
  { id: "b4", name: "DLF Builders", logo: "🏰", rating: 4.7 },
  { id: "b5", name: "Godrej Properties", logo: "🌿", rating: 4.7 }
];

export const locations: Location[] = [
  {
    id: "gachibowli",
    name: "Gachibowli",
    city: "Hyderabad",
    totalProjects: 124,
    villas: 42,
    apartments: 51,
    plots: 18,
    commercial: 13,
    readyToMove: 78,
    underConstruction: 46,
    avgPriceSqFt: "₹9,500",
    appreciationYoY: "+12.5%",
    investmentScore: 92,
    connectivityScore: 95,
    infrastructureScore: 90,
    safetyScore: 88,
    description: "The primary IT hub of Hyderabad, known for its top-tier tech parks, robust social infrastructure, and excellent road connectivity via ORR.",
    schools: ["Oakridge International", "Delhi Public School", "Chirec International"],
    hospitals: ["Continental Hospitals", "AIG Hospitals", "Care Hospitals"],
    transit: ["Gachibowli Metro (Proposed)", "Outer Ring Road Exit 3", "Lingampally MMTS"],
    lat: 17.44008,
    lng: 78.3489
  },
  {
    id: "kokapet",
    name: "Kokapet",
    city: "Hyderabad",
    totalProjects: 98,
    villas: 35,
    apartments: 45,
    plots: 10,
    commercial: 8,
    readyToMove: 38,
    underConstruction: 60,
    avgPriceSqFt: "₹11,500",
    appreciationYoY: "+18.2%",
    investmentScore: 96,
    connectivityScore: 92,
    infrastructureScore: 94,
    safetyScore: 90,
    description: "Hyderabad's most premium luxury high-rise and villa destination, situated right next to the Financial District and Gandipet lake.",
    schools: ["Rockwell International", "Phoenix Greens School", "The Global Edge School"],
    hospitals: ["Continental Hospitals", "Star Hospitals Financial District", "Sunshine Clinics"],
    transit: ["ORR Exit 1 (Kokapet)", "Financial District Access Road", "Metro Phase 2 Line"],
    lat: 17.4192,
    lng: 78.3245
  },
  {
    id: "whitefield",
    name: "Whitefield",
    city: "Bangalore",
    totalProjects: 145,
    villas: 38,
    apartments: 82,
    plots: 12,
    commercial: 13,
    readyToMove: 90,
    underConstruction: 55,
    avgPriceSqFt: "₹8,800",
    appreciationYoY: "+10.8%",
    investmentScore: 88,
    connectivityScore: 94,
    infrastructureScore: 89,
    safetyScore: 86,
    description: "A well-established IT corridor in Bangalore featuring active metro transit, large shopping complexes, and an abundant rental pool.",
    schools: ["The Deens Academy", "Vydehi School of Excellence", "Whitefield Global School"],
    hospitals: ["Manipal Hospital Whitefield", "Columbia Asia Hospital", "RxDx Healthcare"],
    transit: ["Whitefield Metro Station", "Outer Ring Road Connection", "Hoodi Railway Station"],
    lat: 12.9698,
    lng: 77.7500
  },
  {
    id: "hinjewadi",
    name: "Hinjewadi",
    city: "Pune",
    totalProjects: 85,
    villas: 15,
    apartments: 50,
    plots: 8,
    commercial: 12,
    readyToMove: 45,
    underConstruction: 40,
    avgPriceSqFt: "₹6,800",
    appreciationYoY: "+9.5%",
    investmentScore: 84,
    connectivityScore: 88,
    infrastructureScore: 85,
    safetyScore: 83,
    description: "Pune's biggest IT park cluster offering excellent connectivity to Mumbai-Pune Expressway and high demand for executive apartments.",
    schools: ["Blue Ridge Public School", "Mercedes-Benz International School", "Vibgyor High"],
    hospitals: ["Ruby Hall Clinic Hinjewadi", "Lifepoint Multispecialty Hospital", "Mediplus Clinic"],
    transit: ["Hinjewadi Metro Line (Active shortly)", "Mumbai-Pune Expressway Exit", "Wakad Bus Stop"],
    lat: 18.5913,
    lng: 73.7386
  }
];

export const properties: Property[] = [
  {
    id: "prop-001",
    name: "Lodha Bellezza",
    type: "Apartment",
    builder: "Lodha Group",
    location: "Kokapet, Hyderabad",
    city: "Hyderabad",
    area: "Kokapet",
    price: 3.85,
    priceDisplay: "₹3.85 Cr",
    pricePerSqFt: "₹11,200",
    size: "3450 sq.ft",
    configurations: ["3 BHK", "4 BHK"],
    status: "Ready to Move",
    rera: "P02400003561",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80",
    lat: 17.4192,
    lng: 78.3245,
    amenities: ["Infinity Pool", "Sky Lounge", "Private Lift Lobby", "Concierge Service", "Spa & Sauna"],
    description: "A gorgeous luxury high-rise development overlooking the lake. Features private decks, home automation, and Italian marble flooring.",
    loanAvailable: true
  },
  {
    id: "prop-002",
    name: "Prestige Golfshire",
    type: "Villa",
    builder: "Prestige Group",
    location: "Gachibowli, Hyderabad",
    city: "Hyderabad",
    area: "Gachibowli",
    price: 7.20,
    priceDisplay: "₹7.20 Cr",
    pricePerSqFt: "₹15,500",
    size: "5200 sq.ft",
    configurations: ["4 BHK Villa", "5 BHK Villa"],
    status: "Under Construction",
    rera: "P02400004812",
    image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800&q=80",
    lat: 17.44008,
    lng: 78.3489,
    amenities: ["18-Hole Mini Golf", "Wine Cellar", "Infinity Edge Plunge Pool", "Home Theatre Room", "Barbeque Pit"],
    description: "An ultra-luxury gated community of state-of-the-art designer villas, offering maximum privacy and an upscale lifestyle.",
    loanAvailable: true
  },
  {
    id: "prop-003",
    name: "Sobha Royal Pavilion",
    type: "Apartment",
    builder: "Sobha Limited",
    location: "Whitefield, Bangalore",
    city: "Bangalore",
    area: "Whitefield",
    price: 2.10,
    priceDisplay: "₹2.10 Cr",
    pricePerSqFt: "₹8,400",
    size: "2500 sq.ft",
    configurations: ["3 BHK", "3.5 BHK"],
    status: "Ready to Move",
    rera: "PRM/KA/RERA/1251/446/PR/180621/001900",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    lat: 12.9698,
    lng: 77.7500,
    amenities: ["Clubhouse", "Badminton Courts", "Reflexology Path", "Creche", "Gymnasium"],
    description: "An elegant collection of premium residences themed around classic Rajasthani architectural motifs with Sobha's hallmark design standard.",
    loanAvailable: true
  },
  {
    id: "prop-004",
    name: "Godrej Woodside Estate",
    type: "Plot",
    builder: "Godrej Properties",
    location: "Hinjewadi, Pune",
    city: "Pune",
    area: "Hinjewadi",
    price: 0.95,
    priceDisplay: "₹95 L",
    pricePerSqFt: "₹4,200",
    size: "2200 sq.ft",
    configurations: ["Residential Plot"],
    status: "Under Construction",
    rera: "P52100054231",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80",
    lat: 18.5913,
    lng: 73.7386,
    amenities: ["Gated Perimeter", "Paved Roads", "Rainwater Harvesting", "Children's Park", "24/7 CCTV Security"],
    description: "Premium villa plots nestled in a peaceful nature cluster next to the primary IT park, giving you the freedom to build your dream residence.",
    loanAvailable: false
  }
];

export const searchSuggestions = [
  { name: "Hyderabad", type: "city" },
  { name: "Bangalore", type: "city" },
  { name: "Pune", type: "city" },
  { name: "Gachibowli", type: "area" },
  { name: "Kokapet", type: "area" },
  { name: "Whitefield", type: "area" },
  { name: "Hinjewadi", type: "area" }
];

export function getLocationById(id: string): Location | undefined {
  return locations.find((l) => l.id.toLowerCase() === id.toLowerCase());
}
