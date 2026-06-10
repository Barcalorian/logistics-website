"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ServicesLayout({ services }) {
  const containerRef = useRef(null);

  const CheckIcon = () => (
    <svg className="w-5 h-5 mr-2 text-blue-500 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
    </svg>
  );

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

    const serviceBlocks = gsap.utils.toArray(".animate-service-block");
    serviceBlocks.forEach((block) => {
      const cardNum = block.querySelector(".bg-card-number");
      const contentInner = block.querySelector(".service-content-inner");
      const gridItems = block.querySelectorAll(".service-grid-item");

      const cardTl = gsap.timeline({
        scrollTrigger: {
          trigger: block,
          start: "top 85%",
          toggleActions: "play none none reset" 
        }
      });

      cardTl
        .fromTo(block,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.7, ease: "power2.out" }
        )
        .fromTo(cardNum,
          { opacity: 0, y: -40, scale: 0.85 },
          { opacity: 0.5, y: 0, scale: 1, duration: 0.7, ease: "back.out(1.2)" },
          "-=0.5"
        )
        .fromTo(contentInner,
          { opacity: 0, x: -25 },
          { opacity: 1, x: 0, duration: 0.6, ease: "power3.out" },
          "-=0.4"
        );

      if (gridItems.length > 0) {
        cardTl.fromTo(gridItems,
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: "power2.out" },
          "-=0.3"
        );
      }
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8 overflow-x-hidden">
      <div className="max-w-6xl mx-auto">
        
        <div className="text-center mb-20">
          <h1 className="animate-services-title opacity-0 will-change-transform text-3xl font-extrabold text-gray-900 sm:text-4xl mb-4">
            Our Comprehensive Services
          </h1>
          <div className="animate-services-bar w-0 h-1 bg-blue-600 mx-auto rounded-full"></div>
          <p className="animate-services-subtitle opacity-0 will-change-transform mt-6 max-w-3xl mx-auto text-xl text-gray-600">
            From household shifting to industrial transportation, Geetanjali Transport Service offers a complete range of professional logistics solutions.
          </p>
        </div>

        <div className="space-y-24">
          {services.map((service, index) => (
            <div 
              key={service.id} 
              id={service.id} 
              className="animate-service-block opacity-0 will-change-transform scroll-mt-24 bg-white rounded-2xl shadow-sm p-8 md:p-12 border border-gray-100 relative overflow-hidden"
            >
              <div className="bg-card-number absolute -top-6 -right-6 text-9xl font-black text-gray-50 opacity-0 pointer-events-none select-none">
                0{index + 1}
              </div>

              <div className="service-content-inner opacity-0 relative z-10 mb-10 md:w-3/4">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">{service.title}</h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {service.intro}
                </p>
              </div>

              {service.subCategories.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10 mt-8 pt-8 border-t border-gray-100">
                  {service.subCategories.map((sub, subIndex) => (
                    <div key={subIndex} className="service-grid-item opacity-0 flex flex-col">
                      <h3 className="text-xl font-semibold text-blue-700 mb-3 flex items-center">
                        <CheckIcon />
                        {sub.name}
                      </h3>
                      <p className="text-gray-600 leading-relaxed pl-7">
                        {sub.desc}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}