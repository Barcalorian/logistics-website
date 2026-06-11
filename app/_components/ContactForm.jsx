"use client";

import React, { useRef } from "react";
import ContactForm from "./ContactForm";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useMyStore } from "../_lib/store/StoreProvider";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ContactLayout() {
  const containerRef = useRef(null);

  const companyDetails = useMyStore((state) => state.companyDetails);

  const LocationIcon = () => (
    <svg className="w-6 h-6 mr-4 text-blue-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
    </svg>
  );

  const PhoneIcon = () => (
    <svg className="w-6 h-6 mr-4 text-blue-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
    </svg>
  );

  const EmailIcon = () => (
    <svg className="w-6 h-6 mr-4 text-blue-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
    </svg>
  );

  const ShieldIcon = () => (
    <svg className="w-6 h-6 mr-4 text-blue-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
    </svg>
  );

  const WebsiteIcon = () => (
    <svg className="w-6 h-6 mr-4 text-blue-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/>
    </svg>
  );

  useGSAP(() => {
    const headerTl = gsap.timeline();
    headerTl
      .fromTo(".animate-contact-title", 
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power4.out" }
      )
      .fromTo(".animate-contact-bar", 
        { width: 0 },
        { width: 96, duration: 0.6, ease: "power2.out" },
        "-=0.4"
      )
      .fromTo(".animate-contact-subtitle", 
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
        "-=0.4"
      );

    const contactBlocks = gsap.utils.toArray(".animate-contact-block");
    contactBlocks.forEach((block) => {
      const cardNum = block.querySelector(".bg-card-number");
      const headerInner = block.querySelector(".card-header-inner");
      const listItems = block.querySelectorAll(".contact-list-item");
      const mediaInner = block.querySelector(".card-media-inner");
      const formInner = block.querySelector(".contact-form-inner");
      const mapInner = block.querySelector(".contact-map-inner");

      const cardTl = gsap.timeline({
        scrollTrigger: {
          trigger: block,
          start: "top 85%",
          // "play none none reset" ensures it restarts when scrolling back to top
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
        .fromTo(headerInner,
          { opacity: 0, x: -25 },
          { opacity: 1, x: 0, duration: 0.6, ease: "power3.out" },
          "-=0.4"
        );

      if (listItems.length > 0) {
        cardTl.fromTo(listItems,
          { opacity: 0, x: -15 },
          { opacity: 1, x: 0, duration: 0.5, stagger: 0.1, ease: "power2.out" },
          "-=0.3"
        );
      }

      if (mediaInner) {
        cardTl.fromTo(mediaInner,
          { opacity: 0, scale: 0.95, x: 25 },
          { opacity: 1, scale: 1, x: 0, duration: 0.6, ease: "power2.out" },
          "-=0.4"
        );
      }

      if (formInner) {
        cardTl.fromTo(formInner,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
          "-=0.3"
        );
      }

      if (mapInner) {
        cardTl.fromTo(mapInner,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
          "-=0.4"
        );
      }
    });

  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8 overflow-x-hidden">
      <div className="max-w-6xl mx-auto">
        
        <div className="text-center mb-20">
          <h1 className="animate-contact-title opacity-0 will-change-transform text-3xl font-extrabold text-gray-900 sm:text-4xl mb-4">
            Get in Touch
          </h1>
          <div className="animate-contact-bar w-0 h-1 bg-blue-600 mx-auto rounded-full"></div>
          <p className="animate-contact-subtitle opacity-0 will-change-transform mt-6 max-w-3xl mx-auto text-xl text-gray-600">
            Let's make your move stress-free. Whether you are shifting your home, relocating your office, or need industrial transport, Geetanjali Transport Service is here to provide safe and reliable solutions across India.
          </p>
        </div>

        <div className="space-y-16">
          
          <div className="animate-contact-block opacity-0 will-change-transform bg-white rounded-2xl shadow-sm p-8 md:p-12 border border-gray-100 relative overflow-hidden">
            <div className="bg-card-number absolute -top-6 -right-6 text-9xl font-black text-gray-50 opacity-0 pointer-events-none select-none">
              01
            </div>

            <div className="card-header-inner opacity-0 relative z-10 mb-10 md:w-3/4">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Contact Information</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Your trusted partner for household shifting, office relocation, and commercial logistics. Reach out to us directly or view our official credentials below.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10 mt-8 pt-8 border-t border-gray-100">
              

              <div className="space-y-8">
                <div className="contact-list-item opacity-0 flex items-start">
                  <LocationIcon />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Office Address</h3>
                    <p className="text-gray-600 leading-relaxed">
                      {companyDetails.address}
                    </p>
                  </div>
                </div>

                <div className="contact-list-item opacity-0 flex items-start">
                  <PhoneIcon />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Contact Numbers</h3>
                    {companyDetails.phones.map((phone, idx) => (
                      <p key={idx} className="text-gray-600 leading-relaxed">
                        <a href={`tel:${companyDetails.phoneLinks[idx]}`} className="hover:text-blue-600 transition-colors font-medium">
                          {phone}
                        </a>
                      </p>
                    ))}
                  </div>
                </div>

                <div className="contact-list-item opacity-0 flex items-start">
                  <EmailIcon />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Email Address</h3>
                    {companyDetails.emails.map((email, idx) => (
                      <p key={idx} className="text-gray-600 leading-relaxed">
                        <a href={`mailto:${email}`} className="hover:text-blue-600 transition-colors font-medium">
                          {email}
                        </a>
                      </p>
                    ))}
                  </div>
                </div>

                <div className="contact-list-item opacity-0 flex items-start">
                  <WebsiteIcon />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Website</h3>
                    <p className="text-gray-600 leading-relaxed">
                      <a href={companyDetails.websiteUrl} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors font-medium">
                        {companyDetails.websiteDisplay}
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="card-media-inner opacity-0 flex flex-col justify-between h-full">
                <div className="flex items-start mb-8">
                  <ShieldIcon />
                  <div className="w-full">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Company Details</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-4">
                      <div>
                        <p className="text-xs text-gray-400 uppercase tracking-wider font-bold mb-1">Proprietor</p>

                        <p className="font-medium text-gray-700">{companyDetails.proprietor}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-400 uppercase tracking-wider font-bold mb-1">GSTIN</p>
                        
                        <p className="font-medium text-gray-700">{companyDetails.gstin}</p>
                      </div>
                      <div className="col-span-2">
                        <p className="text-xs text-gray-400 uppercase tracking-wider font-bold mb-1">UDYAM Reg.</p>
                        
                        <p className="font-medium text-gray-700">{companyDetails.udyam}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <img
                  src="/contact.jpg"
                  alt="Moving boxes and transportation"
                  className="rounded-xl object-cover w-full h-48 shadow-sm border border-gray-100"
                />
              </div>

            </div>
          </div>

          <div className="animate-contact-block opacity-0 will-change-transform bg-white rounded-2xl shadow-sm p-8 md:p-12 border border-gray-100 relative overflow-hidden">
            <div className="bg-card-number absolute -top-6 -right-6 text-9xl font-black text-gray-50 opacity-0 pointer-events-none select-none">
              02
            </div>

            <div className="card-header-inner opacity-0 relative z-10 mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Request a Free Quote</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Fill out the form below with your requirements, and our team will get back to you promptly with a customized solution.
              </p>
            </div>

            <div className="relative z-10 mt-8 pt-8 border-t border-gray-100">
              <div className="contact-form-inner opacity-0">
                <ContactForm />
              </div>

              <div className="contact-map-inner opacity-0 mt-10 border-t border-gray-100 pt-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Visit Our Office
                </h3>
                <div className="overflow-hidden rounded-2xl shadow-sm border border-gray-200">
                  <iframe
                    src="https://maps.google.com/maps?q=Geetanjali%20Transport%20Service%20Noida&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Geetanjali Transport Service Location"
                    className="w-full"
                  />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}