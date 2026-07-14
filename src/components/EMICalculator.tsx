"use client";

import { useState } from "react";
import { DollarSign, Percent, Calendar, Sparkles } from "lucide-react";

export default function EMICalculator() {
  const [loanAmount, setLoanAmount] = useState(150); // in Lakhs (1.5 Cr)
  const [interestRate, setInterestRate] = useState(8.5); // 8.5%
  const [tenure, setTenure] = useState(20); // 20 years

  // Calculate EMI
  const P = loanAmount * 100000; // convert to Rupees
  const r = interestRate / 12 / 100; // monthly interest rate
  const n = tenure * 12; // monthly tenure

  const emi = P * r * (Math.pow(1 + r, n) / (Math.pow(1 + r, n) - 1));
  const totalPayment = emi * n;
  const totalInterest = totalPayment - P;

  const principalRatio = P / totalPayment;
  const interestRatio = totalInterest / totalPayment;

  // Pie chart variables
  const radius = 60;
  const circumference = 2 * Math.PI * radius;
  const interestOffset = circumference * (1 - interestRatio);

  const formatCurrency = (val: number) => {
    if (val >= 10000000) {
      return `₹${(val / 10000000).toFixed(2)} Cr`;
    }
    return `₹${(val / 100000).toFixed(2)} L`;
  };

  return (
    <div id="emi-advisor" className="glass-card rounded-3xl p-8 border border-gold-500/15 luxury-shadow relative overflow-hidden">
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#C9A84C]/5 rounded-full blur-[80px]" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-sir-purple/5 rounded-full blur-[80px]" />

      <div className="flex items-center gap-2 text-[#C9A84C] text-sm font-semibold uppercase tracking-wider mb-2">
        <Sparkles size={14} />
        <span>Financial Planner</span>
      </div>
      <h3 className="text-3xl text-white font-heading mb-6">
        EMI & Mortgage <span className="gold-text">Calculator</span>
      </h3>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        {/* Sliders */}
        <div className="lg:col-span-3 space-y-6">
          {/* Loan Amount */}
          <div>
            <div className="flex justify-between text-xs font-bold uppercase mb-2">
              <span className="text-[#8888a8]">Loan Amount</span>
              <span className="text-white">{formatCurrency(P)}</span>
            </div>
            <input
              type="range"
              min="10"
              max="500"
              step="5"
              value={loanAmount}
              onChange={(e) => setLoanAmount(parseInt(e.target.value))}
              className="w-full h-1 bg-black rounded-lg appearance-none cursor-pointer accent-[#C9A84C]"
            />
            <div className="flex justify-between text-[10px] text-[#8888a8] mt-1">
              <span>₹10 L</span>
              <span>₹5 Cr</span>
            </div>
          </div>

          {/* Interest Rate */}
          <div>
            <div className="flex justify-between text-xs font-bold uppercase mb-2">
              <span className="text-[#8888a8]">Interest Rate</span>
              <span className="text-white">{interestRate}%</span>
            </div>
            <input
              type="range"
              min="5"
              max="15"
              step="0.1"
              value={interestRate}
              onChange={(e) => setInterestRate(parseFloat(e.target.value))}
              className="w-full h-1 bg-black rounded-lg appearance-none cursor-pointer accent-[#C9A84C]"
            />
            <div className="flex justify-between text-[10px] text-[#8888a8] mt-1">
              <span>5%</span>
              <span>15%</span>
            </div>
          </div>

          {/* Tenure */}
          <div>
            <div className="flex justify-between text-xs font-bold uppercase mb-2">
              <span className="text-[#8888a8]">Loan Tenure</span>
              <span className="text-white">{tenure} Years</span>
            </div>
            <input
              type="range"
              min="5"
              max="30"
              step="1"
              value={tenure}
              onChange={(e) => setTenure(parseInt(e.target.value))}
              className="w-full h-1 bg-black rounded-lg appearance-none cursor-pointer accent-[#C9A84C]"
            />
            <div className="flex justify-between text-[10px] text-[#8888a8] mt-1">
              <span>5 Yrs</span>
              <span>30 Yrs</span>
            </div>
          </div>
        </div>

        {/* Breakdown output and SVG Pie Chart */}
        <div className="lg:col-span-2 flex flex-col md:flex-row lg:flex-col items-center justify-center gap-6 p-6 bg-white/5 rounded-2xl border border-white/5">
          {/* SVG Pie Chart */}
          <div className="relative w-36 h-36 flex items-center justify-center flex-shrink-0">
            <svg width="100%" height="100%" viewBox="0 0 140 140" className="transform -rotate-90">
              {/* Principal Track (Base) */}
              <circle
                cx="70"
                cy="70"
                r={radius}
                fill="transparent"
                stroke="#C9A84C"
                strokeWidth="12"
              />
              {/* Interest Section */}
              <circle
                cx="70"
                cy="70"
                r={radius}
                fill="transparent"
                stroke="#7C3AED"
                strokeWidth="12"
                strokeDasharray={circumference}
                strokeDashoffset={interestOffset}
                strokeLinecap="round"
              />
            </svg>
            <div className="absolute text-center">
              <div className="text-[10px] text-[#8888a8] font-bold uppercase">Monthly EMI</div>
              <div className="text-lg font-extrabold text-white mt-0.5 leading-none">
                ₹{Math.round(emi).toLocaleString("en-IN")}
              </div>
            </div>
          </div>

          {/* Breakdown description */}
          <div className="flex-1 space-y-3 w-full text-sm">
            <div className="flex justify-between items-center pb-2 border-b border-white/5">
              <span className="text-[#8888a8] flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#C9A84C]" />
                Principal
              </span>
              <span className="font-bold text-white">{formatCurrency(P)}</span>
            </div>
            <div className="flex justify-between items-center pb-2 border-b border-white/5">
              <span className="text-[#8888a8] flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-sir-purple" />
                Interest
              </span>
              <span className="font-bold text-white">{formatCurrency(totalInterest)}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-[#8888a8] font-bold">Total Payment</span>
              <span className="font-extrabold text-[#C9A84C]">{formatCurrency(totalPayment)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
