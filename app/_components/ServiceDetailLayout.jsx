"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link"; 
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function ServiceDetailLayout({ service, serviceImage }) {
  const containerRef = useRef(null);

  const CheckIcon = () => (
    <svg className="w-5 h-5 mr-3 text-blue-500 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
    </svg>
  );

  // GSAP animations triggered immediately when the page loads
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.fromTo(".animate-title", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" })
      .fromTo(".animate-bar", { width: 0 }, { width: 96, duration: 0.5, ease: "power2.out" }, "-=0.3")
      .fromTo(".animate-intro", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }, "-=0.3")
      .fromTo(".animate-image", { opacity: 0, x: -30, scale: 0.95 }, { opacity: 1, x: 0, scale: 1, duration: 0.8, ease: "power3.out" }, "-=0.2")
      // GSAP automatically skips this step if there are no subcategories to animate
      .fromTo(".animate-sub", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5, stagger: 0.1, ease: "power2.out" }, "-=0.6")
      .fromTo(".animate-btn", { opacity: 0, scale: 0.95 }, { opacity: 1, scale: 1, duration: 0.5, ease: "back.out(1.2)" }, "-=0.3");
  }, { scope: containerRef });

  if (!service) return <div className="min-h-screen flex items-center justify-center text-gray-500">Service not found</div>;

  return (
    <div ref={containerRef} className="w-full min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8 overflow-x-hidden">
      <div className="max-w-7xl mx-auto w-full">
        
        {/* Back Navigation */}
        <Link href="/services" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium mb-10 transition-colors">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to All Services
        </Link>

        {/* Title Section */}
        <div className="text-center mb-16 w-full">
          <h1 className="animate-title opacity-0 will-change-transform text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6">
            {service.title}
          </h1>
          <div className="animate-bar w-0 h-1.5 bg-blue-600 mx-auto rounded-full mb-8"></div>
          <p className="animate-intro opacity-0 will-change-transform max-w-4xl mx-auto text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed">
            {service.intro}
          </p>
        </div>

        {/* Main Content Area */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start w-full mb-20">
          
          {/* Service Image */}
          <div className="animate-image opacity-0 will-change-transform w-full lg:w-1/2 relative rounded-3xl overflow-hidden shadow-xl bg-gray-200 h-[300px] sm:h-[400px] lg:h-[500px]">
            {serviceImage ? (
              <Image 
                src={serviceImage} 
                alt={service.title} 
                fill 
                sizes="(max-width: 1024px) 100vw, 50vw" 
                className="object-cover hover:scale-105 transition-transform duration-700" 
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-gray-400">No Image Available</div>
            )}
          </div>

          {/* Subcategories (What is Included) */}
          <div className="w-full lg:w-1/2 flex flex-col h-full justify-center">
            {/* Conditional Rendering added here to handle empty subcategories arrays cleanly */}
            {service.subCategories && service.subCategories.length > 0 && (
              <>
                <h3 className="animate-sub opacity-0 will-change-transform text-2xl font-bold text-gray-900 mb-8">
                  What this service includes:
                </h3>
                
                <div className="grid grid-cols-1 gap-5 sm:gap-6 w-full">
                  {service.subCategories.map((sub, index) => (
                    <div key={index} className="animate-sub opacity-0 will-change-transform flex flex-col bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                      <h4 className="text-lg sm:text-xl font-bold text-blue-700 mb-3 flex items-start">
                        <CheckIcon />
                        <span className="mt-0.5">{sub.name}</span>
                      </h4>
                      <p className="text-gray-600 leading-relaxed pl-8 text-sm sm:text-base">
                        {sub.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>

        {/* Bottom Enquiry Button specific to this service */}
        <div className="text-center w-full pb-10">
          <Link 
            href="/contact" 
            className="animate-btn opacity-0 will-change-transform inline-flex items-center justify-center bg-blue-600 px-8 py-4 sm:px-10 sm:py-5 text-white text-base sm:text-lg lg:text-xl font-bold hover:bg-blue-700 transition-all rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 w-full sm:w-auto"
          >
            Get Enquiry For {service.title}
            <svg className="w-5 h-5 sm:w-6 sm:h-6 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>

      </div>
    </div>
  );
}