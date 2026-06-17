"use client";

import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image"; // Imported for image rendering
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { MapPin, ArrowRight } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function BranchesListLayout({ siteData }) {
  const containerRef = useRef(null);
  const locations = siteData?.locations || [];

  useGSAP(() => {
    const headerTl = gsap.timeline();
    headerTl
      .fromTo(".animate-branch-title", { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.8, ease: "power4.out" })
      .fromTo(".animate-branch-bar", { width: 0 }, { width: 96, duration: 0.6, ease: "power2.out" }, "-=0.4")
      .fromTo(".animate-branch-subtitle", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }, "-=0.4");

    if (locations.length > 0) {
      gsap.fromTo(".animate-branch-card",
        { opacity: 0, y: 30 },
        { 
          opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: "power2.out",
          scrollTrigger: {
            trigger: ".branches-grid-container",
            start: "top 85%",
            toggleActions: "play none none reset",
          }
        }
      );
    }
  }, { scope: containerRef, dependencies: [locations] });

  return (
    <div ref={containerRef} className="w-full min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8 overflow-x-hidden">
      <div className="max-w-7xl mx-auto w-full">
        
        {/* Title Group */}
        <div className="text-center mb-16 w-full">
          <h1 className="animate-branch-title opacity-0 will-change-transform text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
            Our Operational Branches
          </h1>
          <div className="animate-branch-bar w-0 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
          <p className="animate-branch-subtitle opacity-0 will-change-transform mt-6 max-w-3xl mx-auto text-base sm:text-lg text-gray-600 leading-relaxed">
            Geetanjali Transport Service seamlessly links major economic corridors and states across India. Select your regional branch below to discover covered cities and customized local service tracking setups.
          </p>
        </div>

        {/* Directory Card Grid */}
        {locations.length === 0 ? (
          <div className="text-center text-gray-500 py-12 font-medium">No branches available at the moment.</div>
        ) : (
          <div className="branches-grid-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full">
            {locations.map((branch) => (
              <div 
                key={branch.id} 
                className="animate-branch-card opacity-0 will-change-transform bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col hover:shadow-xl transition-shadow duration-300 group"
              >
                {/* MATCHED VISUAL INFRASTRUCTURE: Replicating your identical services page image component wrappers */}
                <div className="relative h-48 sm:h-56 w-full bg-gray-200 overflow-hidden">
                  {branch.image ? (
                    <Image 
                      src={branch.image} 
                      alt={`${branch.state} Branch Operations`} 
                      fill 
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-400 text-sm">No Image Available</div>
                  )}
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
                </div>

                {/* Text Content Wrapper */}
                <div className="p-6 sm:p-8 flex flex-col grow">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900">{branch.state} Branch</h3>
                  </div>

                  <p className="text-gray-600 text-sm sm:text-base mb-6 leading-relaxed grow">
                    {branch.desc}
                  </p>

                  <div className="mb-8 w-full">
                    <span className="text-xs uppercase tracking-wider text-gray-400 font-bold block mb-2.5">Cities Covered</span>
                    <div className="flex flex-wrap gap-1.5 w-full">
                      {branch.cities.map((city, idx) => (
                        <span key={idx} className="text-xs bg-gray-100 font-medium text-gray-700 px-2.5 py-1 rounded-lg">
                          {city}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link 
                    href={`/branches/${branch.id}`} 
                    className="mt-auto flex items-center justify-center gap-2 bg-blue-50 text-blue-700 md:hover:bg-blue-600 md:hover:text-white border border-blue-100 md:hover:border-blue-600 font-semibold py-3 rounded-xl transition-all duration-300 group/btn text-center w-full"
                  >
                    Explore More
                    <ArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
}