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

  const currentYear = new Date().getFullYear();
  const experienceYears = currentYear - 2017; 

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

    const introTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".animate-intro-section",
        start: "top 85%",
        toggleActions: "play none none reset",
      },
    });

    introTl
      .fromTo(".animate-intro-left",
        { opacity: 0, x: -30 },
        { opacity: 1, x: 0, duration: 0.7, ease: "power2.out" }
      )
      .fromTo(".animate-intro-right",
        { opacity: 0, x: 30 },
        { opacity: 1, x: 0, duration: 0.7, ease: "power2.out" },
        "-=0.5"
      );

    const overviewTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".animate-overview-block",
        start: "top 85%",
        toggleActions: "play none none reset",
      },
    });

    overviewTl.fromTo(".animate-overview-block",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.7, ease: "power2.out" }
    );

    const servicesTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".services-grid-container",
        start: "top 80%",
        toggleActions: "play none none reset",
      },
    });

    servicesTl.fromTo(".animate-service-card",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.6, stagger: 0.15, ease: "power2.out" }
    );

    const ratesTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".animate-rates-section",
        start: "top 85%",
        toggleActions: "play none none reset",
      },
    });

    ratesTl.fromTo(".animate-rates-section",
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
    );

    counterTl.fromTo(".counter-number",
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

    const certTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".animate-cert-banner",
        start: "top 85%",
        toggleActions: "play none none reset",
      },
    });

    certTl
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

    const bentoTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".bento-grid-container",
        start: "top 85%",
        toggleActions: "play none none reset",
      },
    });

    bentoTl.fromTo(".animate-bento-item",
      { opacity: 0, y: 40, scale: 0.95 },
      { opacity: 1, y: 0, scale: 1, duration: 0.7, stagger: 0.1, ease: "back.out(1.2)" }
    );

    const partnersTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".partners-section-container",
        start: "top 85%",
        toggleActions: "play none none reset",
      },
    });

    partnersTl
      .fromTo(".animate-partners-header",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.7, ease: "power2.out" }
      )
      .fromTo(".animate-partner-logo",
        { opacity: 0, scale: 0.8, y: 20 },
        { opacity: 1, scale: 1, y: 0, duration: 0.5, stagger: 0.1, ease: "back.out(1.2)" },
        "-=0.4"
      );

    const identityBentoTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".identity-bento-container",
        start: "top 85%",
        toggleActions: "play none none reset",
      },
    });

    identityBentoTl.fromTo(".animate-identity-bento-item",
      { opacity: 0, y: 40, scale: 0.95 },
      { opacity: 1, y: 0, scale: 1, duration: 0.7, stagger: 0.1, ease: "back.out(1.2)" }
    );

    const footerTrustTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".animate-footer-trust-section",
        start: "top 85%",
        toggleActions: "play none none reset",
      },
    });

    footerTrustTl
      .fromTo(".animate-owner-message-card",
        { opacity: 0, x: -40 },
        { opacity: 1, x: 0, duration: 0.8, ease: "power3.out" }
      )
      .fromTo(".animate-trust-pitch-card",
        { opacity: 0, x: 40 },
        { opacity: 1, x: 0, duration: 0.8, ease: "power3.out" },
        "-=0.8"
      );

  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="min-h-screen bg-gray-50 flex flex-col overflow-x-hidden">

      <EnquiryModal />
      
      <div className="relative w-full h-[80vh] min-h-125 flex items-center text-white overflow-hidden">
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

        <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-3xl">
            <div className="animate-hero-box opacity-0 will-change-transform p-8 md:p-10 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20">
              <h1 className="animate-hero-title opacity-0 will-change-transform text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-8 uppercase tracking-tight">
                Instant Packers & Movers
              </h1>
              <p className="text-xl text-gray-200 mb-6 font-medium">
                Your premier nationwide logistics companion delivering professional relocation with utmost care.
              </p>

              <Link href="/contact">
                <button className="animate-hero-btn opacity-0 will-change-transform inline-flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg px-8 py-4 rounded-xl shadow-lg transition-all duration-300 active:scale-95">
                  Get Started
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* Company Overview Section */}
        <div className="animate-overview-block opacity-0 will-change-transform mb-16 bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl text-center mb-8">
            Company Overview
          </h2>
          <div className="space-y-6 text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto">
            <p>
              Geetanjali Transport Service is a trusted name in the transport, logistics, packers and movers industry in India. With a strong commitment to safety, punctuality, affordability, and customer satisfaction, the company has established itself as a reliable transportation and relocation partner for businesses, families, industries, offices, and individuals across the country.
            </p>
            <p>
              From household shifting and office relocation to industrial transportation and commercial logistics, the company provides customized services for every requirement utilizing modern transport systems, professional packing methods, and experienced manpower.
            </p>
          </div>
        </div>
        
        <div className="animate-intro-section grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 items-start">
          
          <div className="animate-intro-left opacity-0 will-change-transform pt-8 md:pt-10">
            <div className="w-24 h-24 relative mb-6 rounded-full overflow-hidden border-4 border-blue-50 shadow-md bg-white">
              <Image
                src="/owner-image.png"
                alt="Owner Image"
                fill
                sizes="96px"
                className="object-cover"
                priority
              />
            </div>

            <p className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-2">Proprietor</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">Rajesh Kumar</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Geetanjali Transport Service is a trusted name in the transport, logistics, and relocation industry in India. Guided by a strong commitment to safety, punctuality, and affordability, we provide customized, stress-free moving solutions for families, businesses, and industrial clients across the nation.
            </p>
          </div>

          {/* Fully Restored Original Text Content & Layout Block */}
          <div className="animate-intro-right opacity-0 will-change-transform bg-blue-50 p-8 md:p-10 rounded-2xl border border-blue-100 shadow-sm relative overflow-hidden">
            <div className="relative z-10">
              <div className="w-24 h-24 relative mb-6">
                <Image
                  src="/logo2.png"
                  alt="Geetanjali Transport Service Logo"
                  fill
                  sizes="96px"
                  className="object-contain drop-shadow-sm"
                  priority
                />
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Delivering Excellence Since 2017</h3>
              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                With years of dedicated experience, we have built a legacy of trust alongside thousands of satisfied customers. Our professional team and modern transport systems ensure your belongings are handled with top-tier care from packing to delivery.
              </p>
              <Link href="/contact">
                <button className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3 rounded-xl transition-all shadow-md active:scale-95">
                  Get in Touch
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </Link>
            </div>

            <div className="absolute top-0 right-0 -mt-6 -mr-6 w-32 h-32 bg-blue-200 rounded-full opacity-40 blur-2xl pointer-events-none"></div>
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-10">
            Our Work & Strategic Reach
          </h2>
          
          <div className="bento-grid-container grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[220px]">
            
            <div className="md:col-span-2 md:row-span-2 relative rounded-3xl overflow-hidden animate-bento-item opacity-0 group shadow-sm bg-gray-200">
              <Image 
                src="/packing-loading.jpg" 
                alt="Expert Packing and Loading Operations" 
                fill 
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-6 left-6 pr-6">
                <h4 className="text-white font-bold text-2xl mb-1">Expert Packing & Care</h4>
                <p className="text-gray-300 text-sm">Premium industrial grade shock-absorbent materials used to secure transit items.</p>
              </div>
            </div>

            <div className="md:col-span-1 md:row-span-1 bg-blue-600 text-white rounded-3xl p-6 flex flex-col justify-center animate-bento-item opacity-0 shadow-sm relative overflow-hidden">
              <div className="relative z-10">
                <h4 className="text-5xl font-black tracking-tight mb-2">{experienceYears}+ Yrs</h4>
                <p className="text-blue-100 text-sm font-medium leading-snug">
                  Providing premium logistics and relocation safety standards since 2017.
                </p>
              </div>
              <div className="absolute -bottom-6 -right-6 text-[100px] opacity-10">⏳</div>
            </div>

            <div className="md:col-span-1 md:row-span-1 bg-white border border-gray-100 rounded-3xl p-6 flex flex-col justify-center animate-bento-item opacity-0 shadow-sm">
              <h4 className="text-5xl font-black text-gray-900 tracking-tight mb-2">120+</h4>
              <p className="text-gray-500 text-sm font-medium leading-snug">
                Major strategic hubs mapped seamlessly across our domestic Indian networks.
              </p>
            </div>

            <div className="md:col-span-1 md:row-span-1 relative rounded-3xl overflow-hidden animate-bento-item opacity-0 group shadow-sm bg-gray-200 min-h-55">
              <Image 
                src="/transportation-fleet.jpg" 
                alt="Transportation Fleet Logistic Networks" 
                fill 
                sizes="(max-width: 768px) 100vw, 25vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-all"></div>
              <div className="absolute bottom-4 left-4 text-white font-bold">Modern Fleet Operations</div>
            </div>

            <div className="md:col-span-1 md:row-span-1 bg-white border border-gray-100 rounded-3xl p-6 flex flex-col justify-center animate-bento-item opacity-0 shadow-sm">
              <h4 className="text-5xl font-black text-gray-900 tracking-tight mb-2">8.5k+</h4>
              <p className="text-gray-500 text-sm font-medium leading-snug">
                Flawless relocations executed for families, commercial centers, and businesses.
              </p>
            </div>

            <div className="md:col-span-2 md:row-span-1 bg-gray-900 text-white rounded-3xl p-6 md:p-8 flex flex-col justify-center animate-bento-item opacity-0 shadow-sm relative overflow-hidden">
              <div className="relative z-10 flex items-center gap-6">
                <div className="shrink-0 w-16 h-16 bg-white/10 rounded-full flex items-center justify-center text-3xl">
                  🎧
                </div>
                <div>
                  <h4 className="text-3xl font-bold mb-1">Professional Communication</h4>
                  <p className="text-gray-400 text-sm font-medium">
                    Round-the-clock booking assistance, transparent pricing logs, and tracking support updates.
                  </p>
                </div>
              </div>
            </div>

            <div className="md:col-span-2 md:row-span-1 relative rounded-3xl overflow-hidden animate-bento-item opacity-0 group shadow-sm bg-gray-200 min-h-55">
              <Image 
                src="/loading-storage.jpg" 
                alt="Warehousing and Storage Facilities" 
                fill 
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 pr-6">
                <h4 className="text-white font-bold text-xl mb-1">Secure Warehousing</h4>
                <p className="text-gray-300 text-sm">Monitored long-term and temporary household storage arrangements.</p>
              </div>
            </div>

          </div>
        </div>

        <div className="mb-20">
          <div className="text-center mb-14">
            <span className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-2 block">
              What We Do
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-5 tracking-tight">
              Tailored Relocation & Logistics Solutions
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              From fragile household goods to heavy-duty industrial machinery deployments, explore our range of customized dynamic relocation solutions.
            </p>
          </div>
          
          <div className="services-grid-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {homeServices.map((service, i) => (
              <div 
                key={i} 
                className="animate-service-card opacity-0 will-change-transform bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col hover:shadow-lg transition-shadow duration-300 group"
              >
                <div className="relative h-56 w-full bg-gray-200 overflow-hidden">
                  <Image 
                    src={service.image} 
                    alt={service.title} 
                    fill 
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
                </div>
                
                <div className="p-8 flex flex-col grow">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-8 grow leading-relaxed line-clamp-3">
                    {service.desc}
                  </p>
                  
                  <Link href={`/services#${service.id}`} className="mt-auto">
                    <button className="w-full flex items-center justify-center gap-2 bg-gray-50 text-blue-700 hover:bg-blue-600 hover:text-white border border-gray-100 hover:border-blue-600 font-semibold py-3.5 rounded-xl transition-all duration-300">
                      View Details
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="animate-rates-section opacity-0 will-change-transform mb-20 bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">
          <div className="text-center mb-10">
             <span className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-2 block">
              Transparent Pricing
            </span>
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
              Estimated Rates & Charges
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Review approximate shipping costs categorized by sizing models and regional transit distances. Reach out to our operators directly for customized parameters.
            </p>
          </div>

          <div className="overflow-x-auto pb-4">
            <table className="w-full text-left border-collapse min-w-212.5">
              <thead>
                <tr className="bg-blue-50 text-blue-900">
                  <th className="p-4 font-bold rounded-tl-xl border-b border-blue-100 whitespace-nowrap">Shifting Type</th>
                  <th className="p-4 font-bold border-b border-blue-100 whitespace-nowrap">Up to 50 km</th>
                  <th className="p-4 font-bold border-b border-blue-100 whitespace-nowrap">Up to 500 km</th>
                  <th className="p-4 font-bold border-b border-blue-100 whitespace-nowrap">Up to 1000 km</th>
                  <th className="p-4 font-bold border-b border-blue-100 whitespace-nowrap">1000 km to 1500 km</th>
                  <th className="p-4 font-bold rounded-tr-xl border-b border-blue-100 whitespace-nowrap">Within 2500 km</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                {ratesData.map((row, idx) => (
                  <tr key={idx} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                    <td className="p-4 font-semibold text-gray-900 whitespace-nowrap">{row.type}</td>
                    <td className="p-4 whitespace-nowrap">{row.upto50}</td>
                    <td className="p-4 whitespace-nowrap">{row.upto500}</td>
                    <td className="p-4 whitespace-nowrap">{row.upto1000}</td>
                    <td className="p-4 whitespace-nowrap">{row.upto1500}</td>
                    <td className="p-4 whitespace-nowrap">{row.upto2500}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-5 text-sm text-gray-500 flex items-start gap-2">
            <span className="text-blue-500 text-lg leading-none">*</span>
            <p>Note: These are estimated standard operational index charges. Actual matrix metrics might vary according to dynamic packing configurations, volumetric payload scale adjustments, state tollways, and active seasonal requirements. GST and transit insurance additions apply locally.</p>
          </div>
        </div>

        {/* Counter Block Section */}
        <div className="counter-grid-container mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { label: "Happy Customers", target: 5000, suffix: "+" },
            { label: "Cities Covered", target: 120, suffix: "+" },
            { label: "Years Experience", target: experienceYears, suffix: "+" }, 
            { label: "Successful Moves", target: 8500, suffix: "+" }
          ].map((stat, i) => (
            <div key={i} className="animate-counter-card opacity-0 will-change-transform bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
              <div className="text-3xl md:text-5xl font-extrabold text-blue-600 mb-2 flex justify-center items-center">
                <span className="counter-number" data-target={stat.target}>0</span>
                <span>{stat.suffix}</span>
              </div>
              <p className="text-gray-600 font-medium md:text-lg">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="animate-cert-banner opacity-0 will-change-transform mt-16 bg-blue-50 border border-blue-100 rounded-2xl p-8 lg:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">🛡️</span>
              <h3 className="text-2xl font-bold text-gray-900">100% Government Certified Movers</h3>
            </div>
            <p className="text-gray-600 mb-8 text-lg">
              Fully registered and tax-compliant business ensuring absolute safety, legal transparency, and legitimate commercial tracking for your valuable assets.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <div className="animate-cert-item opacity-0 will-change-transform flex flex-col bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                <span className="text-xs text-blue-600 uppercase tracking-widest font-bold mb-1">MSME Udyam Registration</span>
                <span className="text-lg font-bold text-gray-900">UDYAM-UP-28-0033633</span>
              </div>
              <div className="animate-cert-item opacity-0 will-change-transform flex flex-col bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                <span className="text-xs text-blue-600 uppercase tracking-widest font-bold mb-1">GSTIN Identification</span>
                <span className="text-lg font-bold text-gray-900">09APBPK8031K1ZR</span>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col gap-4 w-full md:w-auto">
            <a href="/Certificate-1.pdf" target="_blank" rel="noopener noreferrer" className="animate-cert-btn opacity-0 will-change-transform flex items-center justify-center gap-2 bg-white text-blue-700 font-bold px-6 py-3 rounded-xl border border-blue-200 hover:bg-blue-50 transition-all">
              📄 View GST Filing
            </a>
            <a href="/certificate-2.pdf" target="_blank" rel="noopener noreferrer" className="animate-cert-btn opacity-0 will-change-transform flex items-center justify-center gap-2 bg-white text-blue-700 font-bold px-6 py-3 rounded-xl border border-blue-200 hover:bg-blue-50 transition-all">
              📄 View MSME Document
            </a>
          </div>
        </div>

        <div className="partners-section-container mt-24 mb-16">
          <div className="animate-partners-header opacity-0 will-change-transform text-center mb-12">
            <span className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-2 block">
              Our Trusted Network
            </span>
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
              Corporate Partners & Clients
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              We are proud to have facilitated smooth relocations and continuous logistical support for employees and offices of India&apos;s leading brands.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 items-center justify-items-center">
            {partnersData.map((partner, idx) => (
              <div 
                key={idx} 
                className="animate-partner-logo opacity-0 will-change-transform w-full h-28 md:h-32 flex items-center justify-center p-6 grayscale hover:grayscale-0 transition-all duration-500 cursor-pointer"
                title={partner.name}
              >
                <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
                  <Image 
                    src={partner.logo} 
                    alt={`${partner.name} Corporate Logo`} 
                    fill 
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="identity-bento-container mt-24 mb-16 border-t border-gray-200 pt-16">
          <div className="text-center mb-12">
            <span className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-2 block">Our Identity</span>
            <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">Who We Are</h2>
            <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[240px]">
            <div className="animate-identity-bento-item opacity-0 will-change-transform md:col-span-2 md:row-span-1 bg-white border border-gray-100 rounded-3xl p-8 shadow-sm flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span>🚀</span> Certified Logistics Pioneers
              </h3>
              <p className="text-gray-600 text-md leading-relaxed">
                Geetanjali Transport Service is a premium registered multi-modal logistics agency operating under certified government authorization frameworks. We serve as an integrated relocation management ecosystem providing structural tracking, transparent pricing indices, and high-security asset containerization across nationwide networks.
              </p>
            </div>

            <div className="animate-identity-bento-item opacity-0 will-change-transform md:col-span-1 md:row-span-2 relative rounded-3xl overflow-hidden bg-gray-200 shadow-sm group">
              <Image
                src="/transit-infrastructure.jpg" 
                alt="Geetanjali Operational Transit Infrastructure" 
                fill 
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-xs bg-blue-600 text-white font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-2 inline-block">Infrastructure</span>
                <h4 className="text-white font-bold text-xl">Integrated Nationwide Networks</h4>
              </div>
            </div>

            <div className="animate-identity-bento-item opacity-0 will-change-transform md:col-span-1 md:row-span-1 relative rounded-3xl overflow-hidden bg-gray-200 shadow-sm group">
              <Image 
                src="/coordination-management.jpg" 
                alt="Professional Logistics Coordination Management" 
                fill 
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent"></div>
              <div className="absolute bottom-5 left-5">
                <h4 className="text-white font-bold text-lg">Trained Operational Specialists</h4>
              </div>
            </div>

            <div className="animate-identity-bento-item opacity-0 will-change-transform md:col-span-1 md:row-span-1 bg-linear-to-br from-blue-600 to-blue-700 text-white rounded-3xl p-6 shadow-md flex flex-col justify-center">
              <h4 className="text-lg font-bold mb-3 uppercase tracking-wider text-blue-100">Strategic Vectors</h4>
              <ul className="space-y-2 text-sm font-medium">
                <li className="flex items-center gap-2">✓ Absolute payload monitoring</li>
                <li className="flex items-center gap-2">✓ Full regulatory transparency</li>
                <li className="flex items-center gap-2">✓ Predictable matrix configurations</li>
                <li className="flex items-center gap-2">✓ Zero structural loss guarantees</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Owner's Message & Core Trust Split Section */}
        <div className="animate-footer-trust-section grid grid-cols-1 lg:grid-cols-12 gap-8 mt-24 border-t border-gray-200 pt-16">
          
          {/* Column 1: Fancy Message from Owner with Dark Gradient Backdrop & Clean Footer Icons */}
          <div className="animate-owner-message-card opacity-0 will-change-transform lg:col-span-5 bg-linear-to-br from-gray-900 to-blue-950 p-8 rounded-3xl text-white shadow-xl flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-blue-500 rounded-full opacity-10 blur-xl pointer-events-none group-hover:scale-150 transition-transform duration-700"></div>
            
            <div>
              <span className="text-blue-400 font-bold uppercase tracking-widest text-xs mb-3 block">Word From Leadership</span>
              <h3 className="text-2xl font-black tracking-tight mb-4 text-white">
                “Your peace of mind is our blueprint for execution.”
              </h3>
              <p className="text-gray-200 text-md leading-relaxed italic mb-8 font-light">
                &ldquo;Relocation is not merely about shifting containers from point A to point B; it represents transitioning your livelihood, family spaces, or commercial legacies. We treat your cargo parameters with the identical protective oversight we assign to our own company assets.&rdquo;
              </p>
            </div>

            <div className="border-t border-white/10 pt-6 mt-4">
              <p className="text-sm font-bold text-blue-400 tracking-wide uppercase mb-4">Direct Support Pathways:</p>
              
              <div className="flex flex-col gap-4 text-gray-200 font-medium mb-6">
                <div className="flex items-start">
                  <svg className="w-5 h-5 mr-3 text-blue-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                  </svg>
                  <div className="flex flex-col text-white font-semibold">
                    <a href="tel:+919716009462" className="hover:text-blue-400 transition-colors leading-tight">
                      +91 9716009462
                    </a>
                    <a href="tel:+917838516655" className="hover:text-blue-400 transition-colors leading-tight mt-1.5">
                      +91 7838516655
                    </a>
                  </div>
                </div>

                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-3 text-blue-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                  <a href="mailto:Info@geetanjalitransportservice.in" className="text-white font-semibold hover:text-blue-400 transition-colors break-all leading-none">
                    Info@geetanjalitransportservice.in
                  </a>
                </div>
              </div>

              <div className="mt-4 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-xs font-bold text-blue-400">
                  RK
                </div>
                <div>
                  <p className="text-xs font-bold text-white leading-none">Rajesh Kumar</p>
                  <p className="text-[11px] text-blue-400 font-semibold uppercase tracking-wider mt-0.5">Proprietor, Geetanjali Transport</p>
                </div>
              </div>
            </div>
          </div>

          <div className="animate-trust-pitch-card opacity-0 will-change-transform lg:col-span-7 bg-white p-8 md:p-10 rounded-3xl border border-gray-100 shadow-sm flex flex-col justify-center items-start">
            <span className="text-blue-600 font-bold uppercase tracking-widest text-xs mb-2">Uncompromising Integrity</span>
            <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-5 leading-tight">
              Architecting Absolute Logistics Trust Nationwide
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Through rigorous structural standardization, verified compliance configurations, and strict adherence to localized state transit directives, we eliminate operational uncertainties. Thousands of domestic consumers and corporate clients recognize Geetanjali as the primary standard for transparent pricing models and safe asset management.
            </p>
            
            <Link href="/contact">
              <button className="inline-flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 text-white font-bold text-md px-8 py-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 active:scale-95 group">
                Connect With An Operator
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </Link>
          </div>

        </div>

      </main>
    </div>
  );
}