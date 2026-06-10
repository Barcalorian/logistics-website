"use client";

import React from "react";
import { Check } from "@gravity-ui/icons";

export default function ContactForm() {
  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = {};

    formData.forEach((value, key) => {
      data[key] = value.toString();
    });

    console.log("Form Data:", data);
    alert("This is a frontend-only preview! Form data logged to console.");
    
    e.currentTarget.reset();
  };

  return (
    <form 
      className="flex w-full flex-col gap-6" 
      onSubmit={onSubmit}
    >
      <div className="flex flex-col gap-1.5 w-full">
        <label htmlFor="name" className="text-sm font-medium text-gray-700">
          Full Name <span className="text-red-500">*</span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          placeholder="Enter your full name"
          className="w-full rounded-xl bg-gray-100 border-2 border-transparent px-4 py-3 text-sm text-gray-900 transition-colors focus:bg-white focus:border-blue-500 focus:outline-none hover:bg-gray-200"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
        <div className="flex flex-col gap-1.5 w-full">
          <label htmlFor="email" className="text-sm font-medium text-gray-700">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            placeholder="john@example.com"
            className="w-full rounded-xl bg-gray-100 border-2 border-transparent px-4 py-3 text-sm text-gray-900 transition-colors focus:bg-white focus:border-blue-500 focus:outline-none hover:bg-gray-200"
          />
        </div>

        <div className="flex flex-col gap-1.5 w-full">
          <label htmlFor="phone" className="text-sm font-medium text-gray-700">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            minLength={10}
            placeholder="+91 98765 43210"
            className="w-full rounded-xl bg-gray-100 border-2 border-transparent px-4 py-3 text-sm text-gray-900 transition-colors focus:bg-white focus:border-blue-500 focus:outline-none hover:bg-gray-200"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
        <div className="flex flex-col gap-1.5 w-full">
          <label htmlFor="movingFrom" className="text-sm font-medium text-gray-700">
            Moving From
          </label>
          <input
            id="movingFrom"
            name="movingFrom"
            type="text"
            placeholder="E.g. Noida"
            className="w-full rounded-xl bg-gray-100 border-2 border-transparent px-4 py-3 text-sm text-gray-900 transition-colors focus:bg-white focus:border-blue-500 focus:outline-none hover:bg-gray-200"
          />
        </div>

        <div className="flex flex-col gap-1.5 w-full">
          <label htmlFor="movingTo" className="text-sm font-medium text-gray-700">
            Moving To
          </label>
          <input
            id="movingTo"
            name="movingTo"
            type="text"
            placeholder="E.g. Bengaluru"
            className="w-full rounded-xl bg-gray-100 border-2 border-transparent px-4 py-3 text-sm text-gray-900 transition-colors focus:bg-white focus:border-blue-500 focus:outline-none hover:bg-gray-200"
          />
        </div>
      </div>

      <div className="flex flex-col gap-1.5 w-full">
        <label htmlFor="message" className="text-sm font-medium text-gray-700">
          Message / Requirements <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          placeholder="Tell us about your moving requirements, items to shift, etc..."
          className="w-full rounded-xl bg-gray-100 border-2 border-transparent px-4 py-3 text-sm text-gray-900 transition-colors focus:bg-white focus:border-blue-500 focus:outline-none hover:bg-gray-200 resize-none"
        />
      </div>

      <div className="flex flex-col sm:flex-row gap-4 mt-6">
        <button 
          type="submit" 
          className="flex-1 bg-blue-600 text-white hover:bg-blue-700 px-6 py-3.5 rounded-xl font-bold text-base flex items-center justify-center gap-2 transition-colors shadow-sm"
        >
          <Check className="w-5 h-5" />
          Submit Inquiry
        </button>
        <button 
          type="reset" 
          className="flex-none bg-gray-100 text-gray-700 hover:bg-gray-200 px-8 py-3.5 rounded-xl font-bold text-base transition-colors"
        >
          Reset
        </button>
      </div>
    </form>
  );
}