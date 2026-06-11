"use client";

import Link from 'next/link';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useMyStore } from '../_lib/store/StoreProvider';

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function AboutLayout() {
  const containerRef = useRef(null);
  const reasons = useMyStore((state) => state.reasons);

  const CheckIcon = () => (
    <svg className="w-5 h-5 mr-2 text-blue-500 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
    </svg>
  );

  useEffect(() => {
    let ctx = gsap.context(() => {
      
      gsap.from(".hero-element", {
        y: 40,
        opacity: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: "power3.out",
        delay: 0.2
      });

      gsap.utils.toArray(".gsap-card").forEach((card) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top 85%", 
            toggleActions: "play none none reverse",
          },
          y: 60,
          opacity: 0,
          duration: 1,
          ease: "power3.out"
        });
      });

      gsap.utils.toArray(".gsap-number").forEach((num) => {
        gsap.from(num, {
          scrollTrigger: {
            trigger: num.parentElement,
            start: "top 80%",
          },
          scale: 0.5,
          opacity: 0,
          rotation: -10,
          duration: 1.5,
          ease: "back.out(1.5)"
        });
      });

      gsap.from(".gsap-reason", {
        scrollTrigger: {
          trigger: ".reasons-grid",
          start: "top 80%",
        },
        x: -30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out"
      });

      gsap.utils.toArray(".gsap-image").forEach((img) => {
        gsap.from(img, {
          scrollTrigger: {
            trigger: img,
            start: "top 90%",
          },
          scale: 1.1,
          opacity: 0,
          duration: 1.2,
          ease: "power3.out"
        });
      });

    }, containerRef);

    return () => ctx.revert(); 
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        <div className="text-center mb-20">
          <h1 className="hero-element text-3xl font-extrabold text-gray-900 sm:text-4xl mb-4">
            About Geetanjali Transport Service
          </h1>
          <div className="hero-element w-24 h-1 bg-blue-600 mx-auto rounded-full origin-left"></div>
          <p className="hero-element mt-6 max-w-3xl mx-auto text-xl text-gray-600">
            A trusted name in the transport, logistics, packers, and movers industry in India, providing reliable relocation and transportation solutions for businesses and individuals nationwide.
          </p>
        </div>

        <div className="space-y-16">
          
          <div className="gsap-card bg-white rounded-2xl shadow-sm p-8 md:p-12 border border-gray-100 relative overflow-hidden">
            <div className="gsap-number absolute -top-6 -right-6 text-9xl font-black text-gray-50 opacity-50 pointer-events-none select-none">
              01
            </div>

            <div className="relative z-10 flex flex-col lg:flex-row gap-10 items-center">
              <div className="lg:w-1/2">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Comprehensive Solutions</h2>
                <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                  <p>
                    With a strong commitment to safety, punctuality, affordability, and customer satisfaction, we have established ourselves as a reliable partner for families, industries, and commercial sectors across the country.
                  </p>
                  <p>
                    From household shifting and office relocation to industrial transportation and commercial logistics, we provide customized services for every requirement. Operating with modern transport systems, experienced manpower, professional packing methods, and a customer-first approach, we ensure smooth and stress-free service.
                  </p>
                </div>
              </div>
              <div className="lg:w-1/2 w-full overflow-hidden rounded-xl">
                <img
                  src="/about-1.jpg"
                  alt="Geetanjali Transport Service Fleet Operations"
                  className="gsap-image object-cover w-full shadow-sm h-64 md:h-80"
                />
              </div>
            </div>
          </div>

          <div className="gsap-card bg-white rounded-2xl shadow-sm p-8 md:p-12 border border-gray-100 relative overflow-hidden">
            <div className="gsap-number absolute -top-6 -right-6 text-9xl font-black text-gray-50 opacity-50 pointer-events-none select-none">
              02
            </div>

            <div className="relative z-10 mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Purpose</h2>
              <p className="text-lg text-gray-600 leading-relaxed max-w-3xl">
                We believe that customer trust is the foundation of our success, and every service is delivered with complete dedication and operational excellence.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10 mt-8 pt-8 border-t border-gray-100 items-center">
              
              <div className="w-full h-full overflow-hidden rounded-xl">
                <img 
                  src="/about-2.png"
                  className="gsap-image object-cover w-full h-64 lg:h-full min-h-75 lg:min-h-100"
                  alt="Professional Packing and Moving Team"
                />
              </div>

              <div className="flex flex-col space-y-8">
                <div className="flex flex-col">
                  <h3 className="text-xl font-semibold text-blue-700 mb-3 flex items-center">
                    <CheckIcon />
                    Our Vision
                  </h3>
                  <p className="text-gray-600 leading-relaxed pl-7">
                    To become one of the most trusted and respected transportation and relocation companies in India. We aim to provide reliable, affordable, and professional logistics solutions to customers while continuously improving service quality and expanding our transportation network nationwide. We believe in creating long-term relationships through honesty and dedication.
                  </p>
                </div>

                <div className="flex flex-col">
                  <h3 className="text-xl font-semibold text-blue-700 mb-3 flex items-center">
                    <CheckIcon />
                    Our Mission
                  </h3>
                  <p className="text-gray-600 leading-relaxed pl-7">
                    To deliver safe, efficient, and timely transportation and relocation services with complete customer satisfaction. We are committed to ensuring safe packing, maintaining transparency in pricing, offering customized services, and utilizing modern logistics methods for every residential, commercial, and industrial project we undertake.
                  </p>
                </div>
              </div>

            </div>
          </div>

          <div className="gsap-card bg-white rounded-2xl shadow-sm p-8 md:p-12 border border-gray-100 relative overflow-hidden">
            <div className="gsap-number absolute -top-6 -right-6 text-9xl font-black text-gray-50 opacity-50 pointer-events-none select-none">
              03
            </div>

            <div className="relative z-10 mb-10 md:w-3/4">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Us?</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                There are many reasons why customers trust Geetanjali Transport Service for their transportation and relocation solutions:
              </p>
            </div>

            <div className="reasons-grid grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-10 mt-8 pt-8 border-t border-gray-100">
              {reasons.map((reason, index) => (
                <div key={index} className="gsap-reason flex items-start">
                  <CheckIcon />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{reason.title}</h3>
                    <p className="text-gray-600 mt-1">{reason.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="gsap-card bg-white rounded-2xl shadow-sm p-8 md:p-12 border border-gray-100 relative overflow-hidden">
            <div className="gsap-number absolute -top-6 -right-6 text-9xl font-black text-gray-50 opacity-50 pointer-events-none select-none">
              04
            </div>

            <div className="relative z-10 mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Quality, Safety & Professional Team</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10 border-t border-gray-100 pt-8">
              <div>
                <h3 className="text-xl font-semibold text-blue-700 mb-3 flex items-center">
                  <CheckIcon />
                  Commitment to Quality & Safety
                </h3>
                <p className="text-gray-600 leading-relaxed pl-7 mb-4">
                  We believe that quality service creates customer trust and long-term relationships. Safety is our ultimate priority. We follow strict safety guidelines to protect customer belongings, which include:
                </p>
                <ul className="list-disc text-gray-600 leading-relaxed pl-12 space-y-2 marker:text-blue-500">
                  <li>Use of quality packing materials and professional handling methods</li>
                  <li>Secure loading/unloading by trained staff members</li>
                  <li>Safe transportation vehicles with careful route planning</li>
                  <li>Advanced vehicle monitoring systems</li>
                </ul>
              </div>

              <div className="overflow-hidden rounded-xl">
                <h3 className="text-xl font-semibold text-blue-700 mb-3 flex items-center">
                  <CheckIcon />
                  Professional Team & Customer Support
                </h3>
                <p className="text-gray-600 leading-relaxed pl-7 mb-6">
                  Our success is supported by dedicated transport managers, drivers, packers, logistics coordinators, and warehouse staff. Our customer support team ensures quick responses for booking services, transportation inquiries, tracking updates, and relocation planning.
                </p>
                <img 
                  src="/about-3.jpg"
                  className="gsap-image object-cover w-full h-48 rounded-xl shadow-sm"
                  alt="Secure Fleet and Transport Vehicles"
                />
              </div>
            </div>
          </div>

          <div className="gsap-card bg-white rounded-2xl shadow-sm p-8 md:p-12 border border-gray-100 relative overflow-hidden">
            <div className="gsap-number absolute -top-6 -right-6 text-9xl font-black text-gray-50 opacity-50 pointer-events-none select-none">
              05
            </div>

            <div className="relative z-10 mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Nationwide Network</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10 border-t border-gray-100 pt-8">
              <div className="flex flex-col">
                <h3 className="text-xl font-semibold text-blue-700 mb-3 flex items-center">
                  <CheckIcon />
                  Major Service Locations
                </h3>
                <p className="text-gray-600 leading-relaxed pl-7">
                  We provide transportation and relocation services in various cities and states across India, including: Noida, Greater Noida, Delhi, Ghaziabad, Gurgaon, Faridabad, Meerut, Lucknow, Kanpur, Agra, Jaipur, Chandigarh, Mumbai, Pune, Hyderabad, Bengaluru, Chennai, Kolkata, Ahmedabad, and Surat. We continue to expand our network for better nationwide coverage.
                </p>
              </div>

              <div className="flex flex-col">
                <h3 className="text-xl font-semibold text-blue-700 mb-3 flex items-center">
                  <CheckIcon />
                  The Importance of Our Services
                </h3>
                <p className="text-gray-600 leading-relaxed pl-7">
                  In today’s fast-moving world, professional packers and movers are essential. People frequently relocate due to jobs, business expansion, education, or lifestyle changes. Furthermore, efficient transportation is the backbone of business operations and supply chain management, ensuring timely delivery everywhere.
                </p>
              </div>
            </div>

            <div className="mt-10 relative z-10 overflow-hidden rounded-xl">
              <img 
                src="/about-4.jpg"
                className="gsap-image object-cover w-full h-64 md:h-80 shadow-sm"
                alt="Nationwide Delivery Network Map"
              />
            </div>
          </div>

          <div className="gsap-card bg-white rounded-2xl shadow-sm p-8 md:p-12 border border-gray-100 relative overflow-hidden">
            <div className="gsap-number absolute -top-6 -right-6 text-9xl font-black text-gray-50 opacity-50 pointer-events-none select-none">
              06
            </div>

            <div className="relative z-10 mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Leadership</h2>
            </div>

            <div className="flex flex-col md:flex-row gap-10 items-center relative z-10 border-t border-gray-100 pt-8">
              
              <div className="w-48 h-48 md:w-56 md:h-56 shrink-0 overflow-hidden rounded-2xl shadow-md border border-gray-200">
                <img 
                  src="/owner-image.png" 
                  alt="Rajesh Kumar - Founder & Proprietor" 
                  className="gsap-image w-full h-full object-cover" 
                />
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Rajesh Kumar</h3>
                <p className="text-blue-600 font-semibold mb-4 text-lg">Founder & Proprietor</p>
                
                <div className="space-y-4 text-gray-600 text-base leading-relaxed">
                  <p>
                    Established in July 2017, Geetanjali Transport Service was founded by Mr. Rajesh Kumar as an officially registered proprietorship in Noida, Uttar Pradesh. Operating out of its commercial hub in Harola, Sector 5, the company has grown steadily into a trusted logistics partner across the entire Delhi NCR corridor and key nationwide routes.
                  </p>
                  <p>
                    As the primary executive and sole proprietor, Mr. Kumar manages end-to-end fleet coordination, asset allocation, and customer service compliance. Under his practical guidance, the company ensures legal transparency with a fully compliant GST framework and handles complex regional distribution tasks alongside customized domestic shifting requirements.
                  </p>
                  <p>
                    With deep roots in the local transport community of Gautam Buddha Nagar, his operational vision centers around three core principles: verifiable pricing structures, absolute safety protocols for commercial cargo, and structural reliability for household relocations.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div className="text-center mt-16 overflow-hidden">
          <Link 
            href="/services"
            className="gsap-card inline-flex items-center justify-center bg-blue-600 px-8 py-4 text-white text-lg font-semibold hover:bg-blue-700 transition-colors rounded-lg shadow-sm"
          >
            Explore Our Services
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>

      </div>
    </div>
  );
}