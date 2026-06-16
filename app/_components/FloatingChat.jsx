"use client";

import React, { useState, useRef, useEffect } from "react";
import { MessageSquare, X, Send, PhoneCall, CheckCheck } from "lucide-react";
import Image from "next/image";

export default function FloatingChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [hasOpened, setHasOpened] = useState(false);
  const chatInputRef = useRef(null);

  // The primary WhatsApp number from your contact details
  const whatsappNumber = "919716009462"; 

  // Auto-open a subtle notification dot after 3 seconds to grab attention
  useEffect(() => {
    const timer = setTimeout(() => {
      setHasOpened(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const toggleChat = () => {
    setIsOpen(!isOpen);
    setHasOpened(true); // Clear the notification dot once clicked
    if (!isOpen) {
      setTimeout(() => {
        chatInputRef.current?.focus();
      }, 100);
    }
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    // Encode the message for the WhatsApp URL
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    
    // Open WhatsApp in a new tab
    window.open(whatsappUrl, "_blank");
    setMessage("");
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[90] flex flex-col items-end">
      
      {/* Chat Window */}
      <div 
        className={`transition-all duration-300 origin-bottom-right mb-4 ${
          isOpen 
            ? "scale-100 opacity-100 pointer-events-auto shadow-2xl" 
            : "scale-50 opacity-0 pointer-events-none"
        } w-[calc(100vw-3rem)] sm:w-80 bg-white rounded-2xl border border-gray-100 overflow-hidden flex flex-col`}
      >
        {/* Header */}
        <div className="bg-blue-600 p-4 flex items-center justify-between text-white">
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10 bg-white rounded-full flex items-center justify-center overflow-hidden shrink-0">
               <Image 
                  src="/logo2.png" 
                  alt="Geetanjali Support" 
                  fill 
                  className="object-contain p-1"
                />
            </div>
            <div>
              <h3 className="font-bold text-sm leading-tight">Geetanjali Support</h3>
              <p className="text-[11px] text-blue-100 flex items-center gap-1 mt-0.5">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span>
                Typically replies instantly
              </p>
            </div>
          </div>
          <button 
            onClick={toggleChat}
            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-blue-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Chat Body */}
        <div className="p-4 bg-gray-50 flex-1 h-64 overflow-y-auto flex flex-col gap-4">
          <p className="text-center text-xs text-gray-400 font-medium my-1">Today</p>
          
          {/* Support Message Bubble */}
          <div className="flex items-start gap-2 max-w-[90%]">
            <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center shrink-0 mt-1">
               <span className="text-blue-600 text-[10px] font-bold">GT</span>
            </div>
            <div className="bg-white border border-gray-200 text-gray-700 text-sm p-3 rounded-2xl rounded-tl-sm shadow-sm leading-relaxed">
              Hello! 👋 Welcome to Geetanjali Transport Service. How can we help you with your relocation today?
            </div>
          </div>

          {/* Quick Actions */}
          <div className="flex flex-col gap-2 ml-8 mt-1">
            <a href="tel:+919716009462" className="inline-flex items-center gap-2 bg-white border border-blue-200 text-blue-600 text-xs font-semibold px-3 py-2 rounded-xl hover:bg-blue-50 transition-colors w-max shadow-sm">
              <PhoneCall className="w-3.5 h-3.5" />
              Call us directly
            </a>
          </div>
        </div>

        {/* Input Area */}
        <form onSubmit={handleSendMessage} className="p-3 bg-white border-t border-gray-100">
          <div className="flex items-center gap-2 relative">
            <input
              ref={chatInputRef}
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message..."
              className="w-full bg-gray-100 text-gray-900 text-sm rounded-full py-3 pl-4 pr-12 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
            />
            <button 
              type="submit"
              disabled={!message.trim()}
              className="absolute right-1 w-9 h-9 flex items-center justify-center bg-blue-600 text-white rounded-full hover:bg-blue-700 disabled:opacity-50 disabled:hover:bg-blue-600 transition-all shadow-sm"
            >
              <Send className="w-4 h-4 ml-0.5" />
            </button>
          </div>
          <p className="text-[10px] text-gray-400 text-center mt-2 flex items-center justify-center gap-1">
             <CheckCheck className="w-3 h-3 text-blue-500" /> Uses WhatsApp for quick replies
          </p>
        </form>
      </div>

      {/* Floating Toggle Button */}
      <button
        onClick={toggleChat}
        className={`relative w-14 h-14 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-xl hover:bg-blue-700 hover:scale-105 active:scale-95 transition-all duration-300 z-50 ${isOpen ? 'rotate-90 scale-0 opacity-0' : 'rotate-0 scale-100 opacity-100'}`}
        aria-label="Open chat"
      >
        <MessageSquare className="w-6 h-6" />
        
        {/* Notification Dot */}
        {!hasOpened && (
          <span className="absolute top-0 right-0 flex h-3.5 w-3.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-red-500 border-2 border-white"></span>
          </span>
        )}
      </button>

      {/* Cross Button that appears in the same spot when open */}
      <button
        onClick={toggleChat}
        className={`absolute bottom-0 right-0 w-14 h-14 bg-gray-900 text-white rounded-full flex items-center justify-center shadow-xl hover:bg-gray-800 active:scale-95 transition-all duration-300 z-40 ${isOpen ? 'rotate-0 scale-100 opacity-100' : '-rotate-90 scale-0 opacity-0'}`}
        aria-label="Close chat"
      >
        <X className="w-6 h-6" />
      </button>

    </div>
  );
}