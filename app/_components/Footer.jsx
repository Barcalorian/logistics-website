"use client"

import { useEffect, useState } from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [visitorCount, setVisitorCount] = useState(null);

  const LocationIcon = () => (
    <svg className="w-5 h-5 mr-3 text-blue-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
    </svg>
  );

  const PhoneIcon = () => (
    <svg className="w-5 h-5 mr-3 text-blue-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
    </svg>
  );

  const EmailIcon = () => (
    <svg className="w-5 h-5 mr-3 text-blue-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
    </svg>
  );

  const GlobeIcon = () => (
    <svg className="w-5 h-5 mr-3 text-blue-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
    </svg>
  );

  useEffect(() => {
    setVisitorCount(12450);
  }, []);

  return (
    // REMOVED: select-none completely to allow micro-wiggles on touchscreens to click properly
    <footer className="w-full bg-white border-t border-gray-200 pt-16 pb-8 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 w-full">
          
          <div className="flex flex-col h-full w-full">
            <div className="space-y-6 mb-6">
              <div className="inline-block p-2 rounded-2xl bg-gray-50 border border-gray-100 shadow-sm">
                <img 
                  src="logos/logo.png" 
                  alt="Geetanjali Transport Service Logo" 
                  className="h-16 w-16 object-contain rounded-xl"
                />
              </div>
              <h3 className="text-gray-900 text-xl font-bold">
                Geetanjali Transport Service
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Your trusted partner for safe, reliable, and affordable transportation, logistics, and relocation services across India.
              </p>
            </div>

            <div className="flex flex-wrap pt-2 mt-auto gap-1">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="p-3 -ml-2 text-gray-500 md:hover:text-blue-600 md:hover:bg-blue-50 rounded-xl transition-colors" aria-label="Facebook">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" /></svg>
              </a>

              <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="p-3 text-gray-500 md:hover:text-black md:hover:bg-gray-100 rounded-xl transition-colors" aria-label="X (Twitter)">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
              </a>

              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-3 text-gray-500 md:hover:text-pink-600 md:hover:bg-pink-50 rounded-xl transition-colors" aria-label="Instagram">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>

              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-3 text-gray-500 md:hover:text-blue-700 md:hover:bg-blue-50 rounded-xl transition-colors" aria-label="LinkedIn">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
              </a>

              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="p-3 text-gray-500 md:hover:text-red-600 md:hover:bg-red-50 rounded-xl transition-colors" aria-label="YouTube">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
              </a>

              <a href="https://wa.me/919716009462" target="_blank" rel="noopener noreferrer" className="p-3 text-gray-500 md:hover:text-green-600 md:hover:bg-green-50 rounded-xl transition-colors" aria-label="WhatsApp">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.455 5.703 1.456h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
              </a>
            </div>
          </div>

          <div className="flex flex-col h-full w-full">
            <div>
              <h4 className="text-gray-900 text-lg font-bold mb-6">
                Quick Links
              </h4>
              <ul className="space-y-1 mb-6">
                {/* DYNAMIC FIXED: Swapped Link tags to standard HTML anchor tags. This clears memory context instantly on touch screens. */}
                <li><a href="/" className="block py-2 w-full text-gray-600 md:hover:text-blue-600 transition-colors font-medium">Home</a></li>
                <li><a href="/about" className="block py-2 w-full text-gray-600 md:hover:text-blue-600 transition-colors font-medium">About Us</a></li>
                <li><a href="/services" className="block py-2 w-full text-gray-600 md:hover:text-blue-600 transition-colors font-medium">Our Services</a></li>
                <li><a href="/branches" className="block py-2 w-full text-gray-600 md:hover:text-blue-600 transition-colors font-medium">Branches</a></li>
                <li><a href="/gallery" className="block py-2 w-full text-gray-600 md:hover:text-blue-600 transition-colors font-medium">Gallery</a></li>
                <li><a href="/videos" className="block py-2 w-full text-gray-600 md:hover:text-blue-600 transition-colors font-medium">Videos</a></li>
                <li><a href="/contact" className="block py-2 w-full text-gray-600 md:hover:text-blue-600 transition-colors font-medium">Contact Us</a></li>
              </ul>
            </div>

            <div className="flex items-center text-xs font-medium text-gray-500 space-x-2 border-t border-gray-100 pt-4 mt-auto">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500"></span>
              </span>
              <span>Visits:</span>
              <span className="text-gray-900 font-bold tabular-nums">
                {visitorCount !== null ? visitorCount.toLocaleString() : "..."}
              </span>
            </div>
          </div>

          <div className="flex flex-col h-full w-full">
            <div>
              <h4 className="text-gray-900 text-lg font-bold mb-6">
                Our Services
              </h4>
              <ul className="space-y-1">
                {/* DYNAMIC FIXED: Bypasses client-side calculation freezes entirely */}
                <li><a href="/services/packers-movers" className="block py-2 w-full text-gray-600 md:hover:text-blue-600 transition-colors font-medium">Packers and Movers</a></li>
                <li><a href="/services/transportation" className="block py-2 w-full text-gray-600 md:hover:text-blue-600 transition-colors font-medium">Transportation Services</a></li>
                <li><a href="/services/car-bike" className="block py-2 w-full text-gray-600 md:hover:text-blue-600 transition-colors font-medium">Car & Bike Transport</a></li>
                <li><a href="/services/warehousing" className="block py-2 w-full text-gray-600 md:hover:text-blue-600 transition-colors font-medium">Warehousing & Storage</a></li>
                <li><a href="/services/loading-unloading" className="block py-2 w-full text-gray-600 md:hover:text-blue-600 transition-colors font-medium">Loading & Unloading</a></li>
              </ul>
            </div>

            <div className="mt-8">
              <h4 className="text-gray-900 text-lg font-bold mb-4">
                Select Language
              </h4>
              <div className="relative">
                <select 
                  defaultValue="en"
                  className="w-full appearance-none bg-gray-50 border border-gray-200 text-gray-700 py-2.5 px-4 pr-10 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all cursor-pointer font-medium text-sm"
                >
                  <option value="en">English</option>
                  <option value="hi">हिंदी (Hindi)</option>
                  <option value="bn">বাংলা (Bengali)</option>
                  <option value="te">తెలుగు (Telugu)</option>
                  <option value="mr">मराठी (Marathi)</option>
                  <option value="ta">தமிழ் (Tamil)</option>
                  <option value="gu">ગુજરાતી (Gujarati)</option>
                  <option value="ur">اردو (Urdu)</option>
                  <option value="kn">ಕನ್ನಡ (Kannada)</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full overflow-hidden">
            <h4 className="text-gray-900 text-lg font-bold mb-6">
              Contact Us
            </h4>
            <ul className="space-y-5 text-sm w-full">
              <li className="flex items-start w-full">
                <LocationIcon />
                <span className="text-gray-600 leading-relaxed wrap-break-words">
                  Plot No. 512B, Shop No. 3, Ground Floor, Adarsh Market, Nearby Fire Station Harola, Sector 5, Noida, UP 201301
                </span>
              </li>
              <li className="flex items-start w-full">
                <PhoneIcon />
                <span className="text-gray-600 leading-relaxed wrap-break-words">
                  +91 9716009462 <br/> +91 7838516655
                </span>
              </li>
              <li className="flex items-start w-full">
                <EmailIcon />
                <div className="flex flex-col space-y-2 w-full">
                  <a href="mailto:info@geetanjalitransportservice.in" className="block py-1 text-gray-600 md:hover:text-blue-600 transition-colors wrap-break-words">
                    Info@geetanjalitransportservice.in
                  </a>
                  <a href="mailto:geetanjalitransportservices@gmail.com" className="block py-1 text-gray-600 md:hover:text-blue-600 transition-colors wrap-break-words">
                    Geetanjalitransportservices@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex items-start w-full">
                <GlobeIcon />
                <a href="https://www.geetanjalitransportservice.in" target="_blank" rel="noopener noreferrer" className="block py-1 text-gray-600 md:hover:text-blue-600 transition-colors wrap-break-words">
                  www.geetanjalitransportservice.in
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-gray-100 flex flex-col lg:flex-row items-center justify-between gap-6 text-sm text-gray-500 w-full">
          
          <div className="text-center lg:text-left w-full lg:w-auto">
            © {currentYear} Geetanjali Transport Service. All rights reserved.
          </div>

          <div className="text-center w-full lg:w-auto">
            Design & Developed by <a href="https://webworldhub.in" target="_blank" rel="noopener noreferrer" className="p-2 text-blue-600 md:hover:text-blue-700 font-medium transition-colors">webworldhub.in</a>
          </div>

          <div className="flex flex-row justify-center lg:justify-end gap-4 text-center lg:text-right whitespace-nowrap overflow-x-auto scrollbar-none [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden w-full lg:w-auto touch-action-pan-x">
            {/* FIXED: Anchor tags for legal subpages to maintain single-touch instant execution accuracy */}
            <a href="/work-process" className="inline-block py-1 text-gray-500 md:hover:text-blue-600 font-medium transition-colors">
              Work Process
            </a>
            <a href="/refund-policy" className="inline-block py-1 text-gray-500 md:hover:text-blue-600 font-medium transition-colors">
              Refund Policy
            </a>
            <a href="/privacy-policy" className="inline-block py-1 text-gray-500 md:hover:text-blue-600 font-medium transition-colors">
              Privacy Policy
            </a>
            <a href="/terms-and-conditions" className="inline-block py-1 text-gray-500 md:hover:text-blue-600 font-medium transition-colors">
              Terms & Conditions
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
}