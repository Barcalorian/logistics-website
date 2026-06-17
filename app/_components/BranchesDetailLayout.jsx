"use client";

import React, { useRef } from "react";
import Link from "next/link"; // Updated to use NextLink
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { MapPin, ShieldCheck, ClipboardCheck, Clock, Award, Phone } from "lucide-react";

export default function BranchDetailLayout({ branch }) {
  const containerRef = useRef(null);

  const branchCopywritingMap = {
    "uttar-pradesh": {
      tagline: "The Pulse of Our Logistics Infrastructure",
      heroDesc: "Operating directly from our core commercial hub in Sector 5, Noida, our Uttar Pradesh branch delivers unparalleled regional expertise alongside swift national grid connectivity.",
      expertPitch: "With strategic loading facilities situated in immediate proximity to the primary highway frameworks of Western UP, we handle high-volume residential freight and zero-delay warehouse transfers across the state flawlessly."
    },
    "delhi-ncr": {
      tagline: "High-Speed Relocations Across Capital Corridors",
      heroDesc: "Managing capital transit variables requires precision tracking and rapid deployment capacity. Our Delhi NCR branch ensures elite household shifts and commercial cargo management.",
      expertPitch: "We are deeply specialized in bypassing complex metropolitan routing jams and regulatory restrictions, getting your high-value corporate or domestic freight delivered with absolute precision safety indexes."
    },
    "haryana": {
      tagline: "Streamlined Moving Services For Enterprise Hubs",
      heroDesc: "Serving the high-density corporate blocks of Gurgaon and major residential domains of Faridabad with elite moving protocols.",
      expertPitch: "From fragile IT assets requiring anti-static packing arrays to multistory residential villa shifting logistics, our Haryana operators bring premium care to active industrial transport sectors."
    },
    "rajasthan": {
      tagline: "Securing Transit Across Heritage Pipelines",
      heroDesc: "Bringing transparent pricing matrices and shock-absorbent packaging infrastructure to Jaipur and extensive inter-state connecting routes.",
      expertPitch: "Our specialized transport fleet is strictly optimized to secure long-distance heavy payloads from high temperature variances and structural wear over prolonged transit operations."
    },
    "chandigarh": {
      tagline: "Structured Logistics For Organized Domains",
      heroDesc: "Premium damage-free moving routes customized perfectly for the structured sectors of Chandigarh and nearby corporate properties.",
      expertPitch: "We map out precision timelines to ensure that your corporate relocations match local delivery guidelines seamlessly and securely, with zero localized downtime parameters."
    },
    "maharashtra": {
      tagline: "Connecting Core Indian Economic Grids",
      heroDesc: "Deploying systematic household containers and heavy freight carrier systems across Mumbai, Pune, and surrounding central distribution nodes.",
      expertPitch: "Our branch bridges prolonged cross-country highway networks with micro-level local asset dropping arrangements, keeping state border filings legally compliant and clear."
    },
    "gujarat": {
      tagline: "Commercial Precision Matched With Relocation Care",
      heroDesc: "Managing active cargo dispatch setups and home relocation projects across Ahmedabad, Surat, and adjoining commercial processing zones.",
      expertPitch: "We understand industrial timing necessities. Our local fleet operations deliver optimized dispatch intervals ensuring that consumer shifting configurations align directly with your timing requirements."
    },
    "telangana": {
      tagline: "Technical Shifting Expertise For Digital Workspaces",
      heroDesc: "Ensuring highly secure workstation transitions and domestic home moving projects across the expanding technical infrastructure of Hyderabad.",
      expertPitch: "We use multiple shock-insulated layer sheets alongside dynamic heavy structural lifting equipment to move high-value electronics and household elements without any structural damage."
    },
    "karnataka": {
      tagline: "Southern Logistic Pioneers Delivering Moving Peace of Mind",
      heroDesc: "Manning highly reliable home shifting pathways and corporate asset deployment routes across Bengaluru and key inter-state highways.",
      expertPitch: "Our team focuses strictly on ensuring item preservation through changing transit conditions, keeping track visibility live for customers throughout the operational route."
    },
    "tamil-nadu": {
      tagline: "Industrial Strength Safety Standards For Domestic Shifting",
      heroDesc: "Providing certified packing safety, transparent rate index tracking, and specialized fleet assistance across the Chennai grid.",
      expertPitch: "We merge heavy machinery logistical safety backgrounds with delicate domestic packing protocols, protecting fragile glassware and family assets equally."
    },
    "west-bengal": {
      tagline: "Eastern Gateway Relocation Strategies Mapped Securely",
      heroDesc: "Facilitating clear eastern terminal freight operations and organized residential shifting projects across Kolkata networks.",
      expertPitch: "Our team skillfully navigates coastal transit configurations and local distribution regulations, keeping items protected from external environmental factors during seasonal changes."
    }
  };

  const currentCopy = branchCopywritingMap[branch?.id] || {
    tagline: "Nationwide Logistics Excellence Delivered Locally",
    heroDesc: "Providing top-tier packing, moving, and secure transport setups across regional corridors with complete legal transparency.",
    expertPitch: "Our local operators connect regional transport assets seamlessly with cross-country pipelines, safeguarding items from origin to drop-off."
  };

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.fromTo(".animate-title", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" })
      .fromTo(".animate-bar", { width: 0 }, { width: 96, duration: 0.5, ease: "power2.out" }, "-=0.3")
      .fromTo(".animate-intro", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }, "-=0.3")
      .fromTo(".animate-block-item", { opacity: 0, y: 25 }, { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: "power2.out" }, "-=0.2");
  }, { scope: containerRef });

  if (!branch) return <div className="min-h-screen flex items-center justify-center text-gray-500">Branch details missing</div>;

  return (
    <div ref={containerRef} className="w-full min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8 overflow-x-hidden">
      <div className="max-w-6xl mx-auto w-full">
        
        {/* NextLink Back Button */}
        <Link href="/branches" className="inline-flex items-center text-blue-600 md:hover:text-blue-800 font-medium mb-10 transition-colors group">
          <svg className="w-5 h-5 mr-2 transform group-hover:-translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to All Branches
        </Link>

        <div className="text-center mb-16 w-full">
          <span className="text-blue-600 font-bold uppercase tracking-widest text-xs sm:text-sm mb-2 block animate-title opacity-0">
            {currentCopy.tagline}
          </span>
          <h1 className="animate-title opacity-0 will-change-transform text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6">
            {branch.state} Branch Operations
          </h1>
          <div className="animate-bar w-0 h-1.5 bg-blue-600 mx-auto rounded-full mb-8"></div>
          <p className="animate-intro opacity-0 will-change-transform max-w-4xl mx-auto text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed">
            {currentCopy.heroDesc}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start w-full mb-16">
          
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 md:p-10 rounded-3xl border border-gray-100 shadow-sm animate-block-item opacity-0 w-full">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Choose Our {branch.state} Team?</h3>
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base mb-8">
              {currentCopy.expertPitch}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full pt-6 border-t border-gray-100">
              <div className="flex gap-3">
                <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm sm:text-base">Expert Regional Packing</h4>
                  <p className="text-xs text-gray-500 mt-1">Multi-layer defense parameters matching local shifting and vehicle requirements perfectly.</p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center shrink-0">
                  <ClipboardCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm sm:text-base">Transparent Local Rates</h4>
                  <p className="text-xs text-gray-500 mt-1">Fixed rate index configurations matching standard moving distance ranges.</p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm sm:text-base">Punctual Dispatch Grids</h4>
                  <p className="text-xs text-gray-500 mt-1">Carefully planned route execution maintaining prompt delivery parameters.</p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm sm:text-base">Government Certified Safety</h4>
                  <p className="text-xs text-gray-500 mt-1">Fully legitimate MSME and GST-registered operations handling valuable client shipments.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 bg-gradient-to-br from-gray-900 to-blue-950 p-6 sm:p-8 rounded-3xl text-white shadow-md animate-block-item opacity-0 w-full">
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight mb-2">Cities Covered</h3>
            <p className="text-blue-200 text-xs sm:text-sm mb-6 font-medium">Active terminal dispatch locations across {branch.state}:</p>
            
            <div className="flex flex-col gap-3 w-full">
              {branch.cities?.map((city, idx) => (
                <div key={idx} className="flex items-center gap-3 bg-white/5 border border-white/10 p-3.5 rounded-xl w-full">
                  <MapPin className="w-4 h-4 text-blue-400 shrink-0" />
                  <span className="font-semibold text-sm sm:text-base text-gray-100">{city} Terminal</span>
                </div>
              ))}
            </div>
          </div>

          {/* NextLink CTA Trigger Button */}
          <div className="text-center w-full animate-block-item opacity-0 pb-10 lg:col-span-12 mt-6">
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center gap-3 bg-blue-600 px-8 py-4 text-white text-base sm:text-lg font-bold md:hover:bg-blue-700 transition-all rounded-xl shadow-lg w-full sm:w-auto"
            >
              <Phone className="w-5 h-5" />
              Connect With An Operator in {branch.state}
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}