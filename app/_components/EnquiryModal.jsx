"use client";

import React, { useRef } from "react";
import Image from "next/image";
import EnquiryModal from "./EnquiryModal";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useMyStore } from "../_lib/store/StoreProvider"; 

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function HomeLayout() {
  const containerRef = useRef(null);

  const homeServices = useMyStore((state) => state.homeServices);
  const ratesData = useMyStore((state) => state.ratesData);
  const partnersData = useMyStore((state) => state.partnersData);

  useGSAP(() => {
    const heroTl = gsap.timeline();
    heroTl
      .fromTo(".animate-hero-box",
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power4.out", delay: 0.1 }
      )
      .fromTo(".animate-hero-title",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
        "-=0.4"
      )
      .fromTo(".animate-hero-btn",
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 0.6, ease: "back.out(1.5)" },
        "-=0.4"
      );

    gsap.timeline({
      scrollTrigger: {
        trigger: ".animate-intro-section",
        start: "top 85%",
        toggleActions: "play none none reset",
      },
    })
    .fromTo(".animate-intro-left",
      { opacity: 0, x: -30 },
      { opacity: 1, x: 0, duration: 0.7, ease: "power2.out" }
    )
    .fromTo(".animate-intro-right",
      { opacity: 0, x: 30 },
      { opacity: 1, x: 0, duration: 0.7, ease: "power2.out" },
      "-=0.5"
    );

    gsap.timeline({
      scrollTrigger: {
        trigger: ".animate-overview-block",
        start: "top 85%",
        toggleActions: "play none none reset",
      },
    })
    .fromTo(".animate-overview-block",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.7, ease: "power2.out" }
    );

    gsap.timeline({
      scrollTrigger: {
        trigger: ".services-grid-container",
        start: "top 80%",
        toggleActions: "play none none reset",
      },
    })
    .fromTo(".animate-service-card",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.6, stagger: 0.15, ease: "power2.out" }
    );

    gsap.timeline({
      scrollTrigger: {
        trigger: ".animate-rates-section",
        start: "top 85%",
        toggleActions: "play none none reset",
      },
    })
    .fromTo(".animate-rates-section",
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.7, ease: "power2.out" }
    );

    const counterTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".counter-grid-container",
        start: "top 85%",
        toggleActions: "play none none reset",
      },
    });

    counterTl.fromTo(".animate-counter-card",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.6, stagger: 0.15, ease: "power2.out" }
    )
    .fromTo(".counter-number",
      { textContent: 0 },
      {
        textContent: (index, element) => Number(element.getAttribute("data-target")),
        duration: 1.5,
        snap: { textContent: 1 },
        ease: "power2.out",
        stagger: 0.15
      },
      "<0.1" 
    );

    gsap.timeline({
      scrollTrigger: {
        trigger: ".animate-cert-banner",
        start: "top 85%",
        toggleActions: "play none none reset",
      },
    })
    .fromTo(".animate-cert-banner",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.7, ease: "power2.out" }
    )
    .fromTo(".animate-cert-item",
      { opacity: 0, x: -20 },
      { opacity: 1, x: 0, duration: 0.5, stagger: 0.15, ease: "power2.out" },
      "-=0.3"
    )
    .fromTo(".animate-cert-btn",
      { opacity: 0, scale: 0.95 },
      { opacity: 1, scale: 1, duration: 0.5, stagger: 0.1, ease: "back.out(1.2)" },
      "-=0.2"
    );

    gsap.timeline({
      scrollTrigger: {
        trigger: ".bento-grid-container",
        start: "top 85%",
        toggleActions: "play none none reset",
      },
    })
    .fromTo(".animate-bento-item",
      { opacity: 0, y: 40, scale: 0.95 },
      { opacity: 1, y: 0, scale: 1, duration: 0.7, stagger: 0.1, ease: "back.out(1.2)" }
    );

    gsap.timeline({
      scrollTrigger: {
        trigger: ".partners-section-container",
        start: "top 85%",
        toggleActions: "play none none reset",
      },
    })
    .fromTo(".animate-partners-header",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.7, ease: "power2.out" }
    )
    .fromTo(".animate-partner-logo",
      { opacity: 0, scale: 0.8, y: 20 },
      { opacity: 1, scale: 1, y: 0, duration: 0.5, stagger: 0.1, ease: "back.out(1.2)" },
      "-=0.4"
    );

  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="min-h-screen bg-gray-50 flex flex-col overflow-x-hidden w-full">

      <EnquiryModal />
      
      <div className="relative w-full min-h-[460px] sm:min-h-[540px] md:h-[75vh] lg:h-[80vh] flex items-center text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/home-1.jpg"
            alt="Geetanjali Transport Service Background"
            fill
            sizes="100vw"
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-black/50 z-10"></div>
        </div>

        <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="max-w-3xl">
            <div className="animate-hero-box opacity-0 will-change-transform p-5 sm:p-8 md:p-10 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20">
              <h2 className="animate-hero-title opacity-0 will-change-transform text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6 sm:mb-8 uppercase tracking-tight">
                instant packer & movers
              </h2>

              <Link href="/contact">
                <button className="animate-hero-btn opacity-0 will-change-transform inline-flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm sm:text-lg px-6 py-3.5 sm:px-8 sm:py-4 rounded-xl shadow-lg transition-all duration-300 active:scale-95">
                  Get Started
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24 " stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 overflow-hidden">

        <div className="animate-overview-block opacity-0 will-change-transform mb-12 md:mb-16 bg-white p-6 sm:p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">
          <h2 className="text-2xl font-extrabold text-gray-900 sm:text-4xl text-center mb-6 sm:mb-8">
            Company Overview
          </h2>
          <div className="space-y-4 sm:space-y-6 text-sm sm:text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto text-justify sm:text-left">
            <p>
              Geetanjali Transport Service is a trusted name in the transport, logistics, packers and movers industry in India. With a strong commitment to safety, punctuality, affordability, and customer satisfaction, the company has established itself as a reliable relocation partner.
            </p>
            <p>
              From household shifting and office relocation to industrial transportation and commercial logistics, the company provides customized services for every requirement utilizing modern transport systems and experienced manpower.
            </p>
          </div>
        </div>
        
        <div className="animate-intro-section grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-12 md:mb-16 items-start">
          <div className="animate-intro-left opacity-0 will-change-transform pt-2 md:pt-10">
            <div className="w-20 h-20 sm:w-24 sm:h-24 relative mb-4 sm:mb-6 rounded-full overflow-hidden border-4 border-blue-50 shadow-md bg-white">
              <Image
                src="/owner-image.png"
                alt="Owner Image"
                fill
                sizes="(max-width: 768px) 80px, 96px"
                className="object-cover"
                priority
              />
            </div>

            <p className="text-blue-600 font-bold uppercase tracking-widest text-xs sm:text-sm mb-1 sm:mb-2">Proprietor</p>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-900 mb-4 sm:mb-6">Rajesh Kumar</h2>
            <p className="text-gray-600 text-sm sm:text-lg leading-relaxed text-justify sm:text-left">
              Geetanjali Transport Service is a trusted name in the transport, logistics, and relocation industry in India. Guided by a strong commitment to safety, punctuality, and affordability, we provide customized, stress-free moving solutions for families, businesses, and industrial clients across the nation.
            </p>
          </div>

          <div className="animate-intro-right opacity-0 will-change-transform bg-blue-50 p-6 sm:p-8 md:p-10 rounded-2xl border border-blue-100 shadow-sm relative overflow-hidden">
            <div className="relative z-10">
              <div className="w-20 h-20 sm:w-24 sm:h-24 relative mb-4 sm:mb-6">
                <Image
                  src="/logo2.png"
                  alt="Geetanjali Transport Service Logo"
                  fill
                  sizes="(max-width: 768px) 80px, 96px"
                  className="object-contain drop-shadow-sm"
                  priority
                />
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Delivering Excellence Since 2017</h3>
              <p className="text-gray-700 text-sm sm:text-lg leading-relaxed mb-6 sm:mb-8">
                With years of dedicated experience, we have built a legacy of trust alongside thousands of satisfied customers. Our professional team and modern transport systems ensure your belongings are handled with top-tier care from packing to delivery.
              </p>
              <Link href="/contact">
                <button className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm sm:text-base px-5 py-2.5 sm:px-6 sm:py-3 rounded-xl transition-all shadow-md active:scale-95">
                  Get in Touch
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </Link>
            </div>
            <div className="absolute top-0 right-0 -mt-6 -mr-6 w-32 h-32 bg-blue-200 rounded-full opacity-40 blur-2xl pointer-events-none"></div>
          </div>
        </div>

        <div className="mb-16 md:mb-20">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 text-center mb-8 md:mb-10">
            Our Work & Reach
          </h2>
          
          <div className="bento-grid-container grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[160px] sm:auto-rows-[200px] md:auto-rows-[220px]">
            <div className="md:col-span-2 md:row-span-2 relative rounded-2xl sm:rounded-3xl overflow-hidden animate-bento-item opacity-0 group shadow-sm bg-gray-200 row-span-2">
              <Image 
                src="/packing-loading.jpg" 
                alt="Expert Packing and Loading" 
                fill 
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
              <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 pr-4 sm:pr-6">
                <h4 className="text-white font-bold text-lg sm:text-2xl mb-1">Expert Packing & Care</h4>
                <p className="text-gray-300 text-xs sm:text-sm">Premium materials used to secure your valuable belongings.</p>
              </div>
            </div>

            <div className="bg-blue-600 text-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 flex flex-col justify-center animate-bento-item opacity-0 shadow-sm relative overflow-hidden">
              <div className="relative z-10">
                <h4 className="text-3xl sm:text-5xl font-black tracking-tight mb-1 sm:mb-2">9+ Yrs</h4>
                <p className="text-blue-100 text-xs sm:text-sm font-medium leading-snug">
                  Delivering trust and reliability since our inception in 2017.
                </p>
              </div>
              <div className="absolute -bottom-4 -right-4 text-6xl sm:text-8xl opacity-10">⏳</div>
            </div>

            <div className="bg-white border border-gray-100 rounded-2xl sm:rounded-3xl p-5 sm:p-6 flex flex-col justify-center animate-bento-item opacity-0 shadow-sm">
              <h4 className="text-3xl sm:text-5xl font-black text-gray-900 tracking-tight mb-1 sm:mb-2">120+</h4>
              <p className="text-gray-500 text-xs sm:text-sm font-medium leading-snug">
                Major cities connected seamlessly across our Indian network.
              </p>
            </div>

            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden animate-bento-item opacity-0 group shadow-sm bg-gray-200">
              <Image 
                src="/transportation-fleet.jpg" 
                alt="Transportation Fleet" 
                fill 
                sizes="(max-width: 768px) 100vw, 25vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all"></div>
              <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 text-white font-bold text-sm sm:text-base">Modern Fleet</div>
            </div>

            <div className="bg-white border border-gray-100 rounded-2xl sm:rounded-3xl p-5 sm:p-6 flex flex-col justify-center animate-bento-item opacity-0 shadow-sm">
              <h4 className="text-3xl sm:text-5xl font-black text-gray-900 tracking-tight mb-1 sm:mb-2">8.5k+</h4>
              <p className="text-gray-500 text-xs sm:text-sm font-medium leading-snug">
                Successful relocations completed for happy families & businesses.
              </p>
            </div>

            <div className="md:col-span-2 bg-gray-900 text-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 flex flex-col justify-center animate-bento-item opacity-0 shadow-sm relative overflow-hidden">
              <div className="relative z-10 flex items-center gap-4 sm:gap-6">
                <div className="shrink-0 w-12 h-12 sm:w-16 sm:h-16 bg-white/10 rounded-full flex items-center justify-center text-xl sm:text-3xl">
                  🎧
                </div>
                <div>
                  <h4 className="text-lg sm:text-3xl font-bold mb-0.5">24/7 Support</h4>
                  <p className="text-gray-400 text-xs sm:text-sm font-medium">
                    Round-the-clock assistance. Your peace of mind is our top priority.
                  </p>
                </div>
              </div>
            </div>

            <div className="md:col-span-2 relative rounded-2xl sm:rounded-3xl overflow-hidden animate-bento-item opacity-0 group shadow-sm bg-gray-200">
              <Image 
                src="/loading-storage.jpg" 
                alt="Warehousing and Storage" 
                fill 
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 pr-4 sm:pr-6">
                <h4 className="text-white font-bold text-base sm:text-xl mb-0.5">Secure Warehousing</h4>
                <p className="text-gray-300 text-xs sm:text-sm">Safe, temporary, and long-term storage facilities.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-16 md:mb-20">
          <div className="text-center mb-10 md:mb-14">
            <span className="text-blue-600 font-bold uppercase tracking-widest text-xs sm:text-sm mb-2 block">
              What We Do
            </span>
            <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
              Tailored Relocation & Logistics Solutions
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full mb-4 sm:mb-6"></div>
            <p className="text-sm sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              From delicate household items to heavy industrial cargo, discover how we make every move seamless, secure, and entirely stress-free.
            </p>
          </div>
          
          <div className="services-grid-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {homeServices.map((service, i) => (
              <div 
                key={i} 
                className="animate-service-card opacity-0 will-change-transform bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col hover:shadow-lg transition-shadow duration-300 group"
              >
                <div className="relative h-48 sm:h-56 w-full bg-gray-200 overflow-hidden">
                  <Image 
                    src={service.image} 
                    alt={service.title} 
                    fill 
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
                </div>
                
                <div className="p-5 sm:p-8 flex flex-col grow">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">{service.title}</h3>
                  <p className="text-xs sm:text-sm text-gray-600 mb-6 grow leading-relaxed line-clamp-3">
                    {service.desc}
                  </p>
                  
                  <Link href={`/services#${service.id}`} className="mt-auto">
                    <button className="w-full flex items-center justify-center gap-2 bg-gray-50 text-blue-700 hover:bg-blue-600 hover:text-white border border-gray-100 hover:border-blue-600 font-semibold py-2.5 sm:py-3.5 rounded-xl transition-all duration-300 text-xs sm:text-base">
                      View Details
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="animate-rates-section opacity-0 will-change-transform mb-16 md:mb-20 bg-white p-5 sm:p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">
          <div className="text-center mb-8 md:mb-10">
             <span className="text-blue-600 font-bold uppercase tracking-widest text-xs sm:text-sm mb-2 block">
              Transparent Pricing
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-3 sm:mb-4">
              Estimated Rates & Charges
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full mb-4 sm:mb-6"></div>
            <p className="text-xs sm:text-lg text-gray-600 max-w-2xl mx-auto">
              Review our approximate moving costs based on property size and transit distance. For an exact customized quote, please reach out to our team.
            </p>
          </div>

          <div className="overflow-x-auto pb-2 custom-scrollbar">
            <table className="w-full text-left border-collapse min-w-[850px] text-xs sm:text-sm">
              <thead>
                <tr className="bg-blue-50 text-blue-900">
                  <th className="p-3 sm:p-4 font-bold rounded-tl-xl border-b border-blue-100 whitespace-nowrap">Shifting Type</th>
                  <th className="p-3 sm:p-4 font-bold border-b border-blue-100 whitespace-nowrap">Up to 50 km</th>
                  <th className="p-3 sm:p-4 font-bold border-b border-blue-100 whitespace-nowrap">Up to 500 km</th>
                  <th className="p-3 sm:p-4 font-bold border-b border-blue-100 whitespace-nowrap">Up to 1000 km</th>
                  <th className="p-3 sm:p-4 font-bold border-b border-blue-100 whitespace-nowrap">1000 km to 1500 km</th>
                  <th className="p-3 sm:p-4 font-bold rounded-tr-xl border-b border-blue-100 whitespace-nowrap">Within 2500 km</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                {ratesData.map((row, idx) => (
                  <tr key={idx} className="border-b border-gray-100 hover:bg-gray-50/80 transition-colors">
                    <td className="p-3 sm:p-4 font-semibold text-gray-900 whitespace-nowrap">{row.type}</td>
                    <td className="p-3 sm:p-4 whitespace-nowrap">{row.upto50}</td>
                    <td className="p-3 sm:p-4 whitespace-nowrap">{row.upto500}</td>
                    <td className="p-3 sm:p-4 whitespace-nowrap">{row.upto1000}</td>
                    <td className="p-3 sm:p-4 whitespace-nowrap">{row.upto1500}</td>
                    <td className="p-3 sm:p-4 whitespace-nowrap">{row.upto2500}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 text-[11px] sm:text-sm text-gray-500 flex items-start gap-1.5">
            <span className="text-blue-500 text-base leading-none select-none">*</span>
            <p>Note: These are estimated standard rates. Actual charges may vary based on exact volume, floor level, packing material type, and seasonal demand. GST and tolls are applicable separately.</p>
          </div>
        </div>

        <div className="counter-grid-container mt-12 md:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center">
          {[
            { label: "Happy Customers", target: 5000, suffix: "+" },
            { label: "Cities Covered", target: 120, suffix: "+" },
            { label: "Years Experience", target: 9, suffix: "+" }, 
            { label: "Successful Moves", target: 8500, suffix: "+" }
          ].map((stat, i) => (
            <div key={i} className="animate-counter-card opacity-0 will-change-transform bg-white p-4 sm:p-6 md:p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
              <div className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-blue-600 mb-1 flex justify-center items-center">
                <span className="counter-number" data-target={stat.target}>0</span>
                <span>{stat.suffix}</span>
              </div>
              <p className="text-gray-500 font-semibold text-xs sm:text-base leading-tight">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="animate-cert-banner opacity-0 will-change-transform mt-12 md:mt-16 bg-blue-50 border border-blue-100 rounded-2xl p-5 sm:p-8 lg:p-12 flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8">
          <div className="flex-1 w-full text-center sm:text-left">
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
              <span className="text-2xl sm:text-3xl select-none">🛡️</span>
              <h3 className="text-lg sm:text-2xl font-bold text-gray-900">100% Government Certified Movers</h3>
            </div>
            <p className="text-gray-600 text-xs sm:text-lg mb-6 sm:mb-8 leading-relaxed">
              Fully registered and tax-compliant business ensuring absolute safety and legal transparency for your valuable goods.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full">
              <div className="animate-cert-item opacity-0 will-change-transform flex flex-col bg-white p-3.5 rounded-lg border border-gray-200 shadow-sm w-full sm:w-auto">
                <span className="text-[10px] sm:text-xs text-blue-600 uppercase tracking-widest font-bold mb-0.5">MSME Udyam</span>
                <span className="text-sm sm:text-lg font-mono font-bold text-gray-900 break-all">UDYAM-UP-28-0033633</span>
              </div>
              <div className="animate-cert-item opacity-0 will-change-transform flex flex-col bg-white p-3.5 rounded-lg border border-gray-200 shadow-sm w-full sm:w-auto">
                <span className="text-[10px] sm:text-xs text-blue-600 uppercase tracking-widest font-bold mb-0.5">GSTIN</span>
                <span className="text-sm sm:text-lg font-mono font-bold text-gray-900 break-all">09APBPK8031K1ZR</span>
              </div>
            </div>
          </div>
          
          <div className="flex flex-row lg:flex-col gap-3 w-full lg:w-auto mt-2 sm:mt-0">
            <a href="/Certificate-1.pdf" target="_blank" className="animate-cert-btn opacity-0 will-change-transform flex-1 lg:flex-none flex items-center justify-center gap-2 bg-white text-blue-700 text-xs sm:text-sm font-bold px-4 py-2.5 sm:px-6 sm:py-3 rounded-xl border border-blue-200 hover:bg-blue-50 transition-all shadow-sm">
              📄 View GST
            </a>
            <a href="/certificate-2.pdf" target="_blank" className="animate-cert-btn opacity-0 will-change-transform flex-1 lg:flex-none flex items-center justify-center gap-2 bg-white text-blue-700 text-xs sm:text-sm font-bold px-4 py-2.5 sm:px-6 sm:py-3 rounded-xl border border-blue-200 hover:bg-blue-50 transition-all shadow-sm">
              📄 View MSME
            </a>
          </div>
        </div>

        <div className="partners-section-container mt-16 md:mt-24 mb-4">
          <div className="animate-partners-header opacity-0 will-change-transform text-center mb-8 md:mb-12">
            <span className="text-blue-600 font-bold uppercase tracking-widest text-xs sm:text-sm mb-2 block">
              Our Trusted Network
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-3 sm:mb-4">
              Corporate Partners & Clients
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full mb-4 sm:mb-6"></div>
            <p className="text-xs sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              We are proud to have facilitated smooth relocations and continuous logistical support for employees and offices of India&apos;s leading brands.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 items-center justify-items-center">
            {partnersData.map((partner, idx) => (
              <div 
                key={idx} 
                className="animate-partner-logo opacity-0 will-change-transform w-full h-20 sm:h-28 md:h-32 flex items-center justify-center p-4 sm:p-6 grayscale hover:grayscale-0 transition-all duration-500 cursor-pointer bg-white rounded-xl border border-gray-50 shadow-xs"
                title={partner.name}
              >
                <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
                  <Image 
                    src={partner.logo} 
                    alt={`${partner.name} Logo`} 
                    fill 
                    sizes="(max-width: 768px) 40vw, 25vw"
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

      </main>
    </div>
  );
}