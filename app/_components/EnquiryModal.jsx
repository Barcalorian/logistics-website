"use client";

import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useMyStore } from "../_lib/store/StoreProvider";
import { 
  X, 
  Check, 
  MapPin, 
  Navigation, 
  Truck, 
  Package, 
  Phone, 
  CalendarClock 
} from "lucide-react";

export default function EnquiryModal() {
  const isEnquiryModalOpen = useMyStore((state) => state.isEnquiryModalOpen);
  const openEnquiryModal = useMyStore((state) => state.openEnquiryModal);
  const closeEnquiryModal = useMyStore((state) => state.closeEnquiryModal);

  const [shouldRender, setShouldRender] = useState(false);
  const modalRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      openEnquiryModal();
    }, 1200); 

    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (isEnquiryModalOpen) {
      setShouldRender(true);
    } else if (!isEnquiryModalOpen && shouldRender) {
      closeModalAnimation();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isEnquiryModalOpen]);

  const { contextSafe } = useGSAP(() => {
    if (!shouldRender || !isEnquiryModalOpen) return;

    const tl = gsap.timeline();

    tl.fromTo(".modal-backdrop",
      { opacity: 0 },
      { opacity: 1, duration: 0.5, ease: "power3.out" }
    )
    .fromTo(".modal-box",
      { opacity: 0, y: 40, scale: 0.95 },
      { opacity: 1, y: 0, scale: 1, duration: 0.7, ease: "back.out(1.2)" },
      "-=0.3"
    )
    .fromTo(".modal-item",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.5, stagger: 0.1, ease: "power2.out" },
      "-=0.4"
    );
  }, { scope: modalRef, dependencies: [shouldRender, isEnquiryModalOpen] });

  const closeModalAnimation = contextSafe(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        setShouldRender(false);
        closeEnquiryModal();
      }
    });
    
    tl.to(".modal-box", 
      { opacity: 0, y: 20, scale: 0.95, duration: 0.3, ease: "power2.in" }
    )
    .to(".modal-backdrop", 
      { opacity: 0, duration: 0.3 }, 
      "-=0.2"
    );
  });

  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = {};

    formData.forEach((value, key) => {
      data[key] = value.toString();
    });

    console.log("Enquiry Form Data:", data);
    alert("Inquiry submitted! Data logged to console.");
    
    e.currentTarget.reset();
    closeModalAnimation(); 
  };

  if (!shouldRender) return null;

  return (
    <div 
      ref={modalRef} 
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
    >
      <div 
        className="modal-backdrop absolute inset-0 bg-black/60 backdrop-blur-sm opacity-0 will-change-transform"
        onClick={closeModalAnimation} 
      ></div>
      
      {/* CRITICAL FIXES HERE:
        - Reduced max-h to 85vh on mobile so it doesn't get hidden under browser UI.
        - Reduced border radius slightly on mobile (rounded-2xl) to save edge space.
      */}
      <div className="modal-box relative w-full max-w-2xl bg-white rounded-2xl sm:rounded-3xl shadow-2xl max-h-[85vh] sm:max-h-[90vh] overflow-y-auto opacity-0 will-change-transform z-10 [scrollbar-width:thin] [-ms-overflow-style:none] [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-thumb]:bg-gray-300 [&::-webkit-scrollbar-thumb]:rounded-full">
        
        <button
          onClick={closeModalAnimation}
          className="absolute top-3 right-3 sm:top-5 sm:right-5 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-500 hover:bg-red-50 hover:text-red-600 transition-colors z-20"
          aria-label="Close modal"
        >
          <X className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>

        {/* Compressed padding on mobile */}
        <div className="p-5 sm:p-8 md:p-10">
          <div className="modal-item opacity-0 will-change-transform mt-1 sm:mt-2">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-900 mb-1 sm:mb-2 text-center">
              Get your free enquiry
            </h2>
            <p className="text-gray-500 text-center mb-5 sm:mb-8 text-xs sm:text-sm md:text-base">
              Fill out the details below and we will get back to you instantly.
            </p>
          </div>

          {/* Compressed gaps on mobile (gap-3 instead of gap-5) */}
          <form className="flex flex-col gap-3 sm:gap-6" onSubmit={onSubmit}>
            <div className="modal-item opacity-0 will-change-transform grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-6 w-full">
              <div className="flex flex-col gap-1 sm:gap-1.5 w-full">
                <label htmlFor="movingFrom" className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm font-medium text-gray-700">
                  <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-600" />
                  <span>Moving From <span className="text-red-500">*</span></span>
                </label>
                {/* Reduced vertical padding on inputs (py-2.5 on mobile) */}
                <input
                  id="movingFrom"
                  name="movingFrom"
                  type="text"
                  required
                  placeholder="E.g. Noida"
                  className="w-full rounded-xl bg-gray-100 border-2 border-transparent px-3 py-2.5 sm:px-4 sm:py-3 text-sm text-gray-900 transition-colors focus:bg-white focus:border-blue-500 focus:outline-none hover:bg-gray-200"
                />
              </div>

              <div className="flex flex-col gap-1 sm:gap-1.5 w-full">
                <label htmlFor="movingTo" className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm font-medium text-gray-700">
                  <Navigation className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-600" />
                  <span>Moving To <span className="text-red-500">*</span></span>
                </label>
                <input
                  id="movingTo"
                  name="movingTo"
                  type="text"
                  required
                  placeholder="E.g. Bengaluru"
                  className="w-full rounded-xl bg-gray-100 border-2 border-transparent px-3 py-2.5 sm:px-4 sm:py-3 text-sm text-gray-900 transition-colors focus:bg-white focus:border-blue-500 focus:outline-none hover:bg-gray-200"
                />
              </div>
            </div>

            <div className="modal-item opacity-0 will-change-transform grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-6 w-full">
              <div className="flex flex-col gap-1 sm:gap-1.5 w-full">
                <label htmlFor="movingType" className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm font-medium text-gray-700">
                  <Truck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-600" />
                  <span>Moving Type <span className="text-red-500">*</span></span>
                </label>
                <select
                  id="movingType"
                  name="movingType"
                  required
                  defaultValue=""
                  className="w-full rounded-xl bg-gray-100 border-2 border-transparent px-3 py-2.5 sm:px-4 sm:py-3 text-sm text-gray-900 transition-colors focus:bg-white focus:border-blue-500 focus:outline-none hover:bg-gray-200 cursor-pointer"
                >
                  <option value="" disabled>Select Moving Type</option>
                  <option value="Within city">Within city</option>
                  <option value="Within state">Within state</option>
                  <option value="Other state">Other state</option>
                  <option value="International">International</option>
                </select>
              </div>

              <div className="flex flex-col gap-1 sm:gap-1.5 w-full">
                <label htmlFor="selectService" className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm font-medium text-gray-700">
                  <Package className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-600" />
                  <span>Select Service <span className="text-red-500">*</span></span>
                </label>
                <select
                  id="selectService"
                  name="selectService"
                  required
                  defaultValue=""
                  className="w-full rounded-xl bg-gray-100 border-2 border-transparent px-3 py-2.5 sm:px-4 sm:py-3 text-sm text-gray-900 transition-colors focus:bg-white focus:border-blue-500 focus:outline-none hover:bg-gray-200 cursor-pointer"
                >
                  <option value="" disabled>Select Service</option>
                  <option value="Household shifting">Household shifting</option>
                  <option value="Few items shifting">Few items shifting</option>
                  <option value="1BHK Shifting">1BHK Shifting</option>
                  <option value="2BHK Shifting">2BHK Shifting</option>
                  <option value="3BHK Shifting">3BHK Shifting</option>
                  <option value="4BHK Shifting">4BHK Shifting</option>
                  <option value="Bungalow Shifting">Bungalow Shifting</option>
                  <option value="Two Wheeler Shifting">Two Wheeler Shifting</option>
                  <option value="Four Wheeler Shifting">Four Wheeler Shifting</option>
                  <option value="Office / Commercial Shifting">Office / Commercial Shifting</option>
                  <option value="Other Shifting">Other Shifting</option>
                  <option value="Bill for Claim">Bill for Claim</option>
                </select>
              </div>
            </div>

            <div className="modal-item opacity-0 will-change-transform grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-6 w-full">
              <div className="flex flex-col gap-1 sm:gap-1.5 w-full">
                <label htmlFor="phone" className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm font-medium text-gray-700">
                  <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-600" />
                  <span>Phone Number <span className="text-red-500">*</span></span>
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  minLength={10}
                  placeholder="+91 98765 43210"
                  className="w-full rounded-xl bg-gray-100 border-2 border-transparent px-3 py-2.5 sm:px-4 sm:py-3 text-sm text-gray-900 transition-colors focus:bg-white focus:border-blue-500 focus:outline-none hover:bg-gray-200"
                />
              </div>

              <div className="flex flex-col gap-1 sm:gap-1.5 w-full">
                <label htmlFor="movingTime" className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm font-medium text-gray-700">
                  <CalendarClock className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-600" />
                  <span>Moving Time <span className="text-red-500">*</span></span>
                </label>
                <select
                  id="movingTime"
                  name="movingTime"
                  required
                  defaultValue=""
                  className="w-full rounded-xl bg-gray-100 border-2 border-transparent px-3 py-2.5 sm:px-4 sm:py-3 text-sm text-gray-900 transition-colors focus:bg-white focus:border-blue-500 focus:outline-none hover:bg-gray-200 cursor-pointer"
                >
                  <option value="" disabled>Select Timeline</option>
                  <option value="Urgently">Urgently</option>
                  <option value="Within a week">Within a week</option>
                  <option value="Within 15 days">Within 15 days</option>
                  <option value="Within a month">Within a month</option>
                  <option value="Not fixed">Not fixed</option>
                </select>
              </div>
            </div>

            <div className="modal-item opacity-0 will-change-transform mt-1 sm:mt-3">
              <button 
                type="submit" 
                className="w-full bg-blue-600 text-white hover:bg-blue-700 px-6 py-3 sm:py-4 rounded-xl font-bold text-sm sm:text-lg flex items-center justify-center gap-2 transition-colors shadow-lg active:scale-[0.98]"
              >
                <Check className="w-4 h-4 sm:w-6 sm:h-6" />
                Submit Enquiry
              </button>
            </div>
            
          </form>
        </div>
      </div>
    </div>
  );
}