"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link"; 
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ServicesListLayout({ siteData }) {
  const containerRef = useRef(null);
  const { detailedServices, homeServices } = siteData;

  useGSAP(() => {
    const headerTl = gsap.timeline();
    headerTl
      .fromTo(".animate-services-title", 
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power4.out" }
      )
      .fromTo(".animate-services-bar", 
        { width: 0 },
        { width: 96, duration: 0.6, ease: "power2.out" },
        "-=0.4"
      )
      .fromTo(".animate-services-subtitle", 
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
        "-=0.4"
      );

    gsap.fromTo(".animate-service-card",
      { opacity: 0, y: 30 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.6, 
        stagger: 0.15, 
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".services-grid-container",
          start: "top 85%",
          toggleActions: "play none none reset",
        }
      }
    );
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="w-full min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8 overflow-x-hidden">
      <div className="max-w-7xl mx-auto w-full">
        
        <div className="text-center mb-16 w-full">
          <h1 className="animate-services-title opacity-0 will-change-transform text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
            Our Comprehensive Services
          </h1>
          <div className="animate-services-bar w-0 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
          <p className="animate-services-subtitle opacity-0 will-change-transform mt-6 max-w-3xl mx-auto text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed">
            From household shifting to industrial transportation, Geetanjali Transport Service offers a complete range of professional logistics solutions. Select a service below to learn more.
          </p>
        </div>

        <div className="services-grid-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full">
          {detailedServices.map((service) => {
            const matchingHomeService = homeServices.find(hs => hs.id === service.id);
            const serviceImage = matchingHomeService ? matchingHomeService.image : null;

            return (
              <div 
                key={service.id} 
                className="animate-service-card opacity-0 will-change-transform bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col hover:shadow-xl transition-shadow duration-300 group"
              >
                <div className="relative h-56 sm:h-64 w-full bg-gray-200 overflow-hidden">
                  {serviceImage ? (
                    <Image 
                      src={serviceImage} 
                      alt={service.title} 
                      fill 
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-400">No Image</div>
                  )}
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="p-6 sm:p-8 flex flex-col grow">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-8 grow leading-relaxed line-clamp-3 text-sm sm:text-base">
                    {service.intro}
                  </p>
                  
                  {/* Dynamic link to the individual service page */}
                  <Link href={`/services/${service.id}`} className="mt-auto">
                    <button className="w-full flex items-center justify-center gap-2 bg-blue-50 text-blue-700 hover:bg-blue-600 hover:text-white border border-blue-100 hover:border-blue-600 font-semibold py-3 sm:py-3.5 rounded-xl transition-all duration-300">
                      Explore Service
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}