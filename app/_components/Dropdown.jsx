"use client";

import { Button, Dropdown, Label } from "@heroui/react";
import Link from "next/link";
import { 
  ChevronDown, 
  Package, 
  Truck, 
  Car, 
  Warehouse, 
  ArrowUpDown 
} from "lucide-react";

export function ServicesDropdown() {
  return (
    <Dropdown>
      <Button 
        aria-label="Services Menu" 
        variant="secondary"
        className="flex items-center gap-1.5 font-semibold hover:text-blue-600 transition-colors"
      >
        <span>Services</span>
        <ChevronDown className="h-4 w-4 opacity-80" />
      </Button>
      
      <Dropdown.Popover className="min-w-65 bg-white rounded-xl shadow-xl border border-gray-200 p-2 z-50">
        <Dropdown.Menu
          aria-label="Geetanjali Transport Services"
          className="flex flex-col gap-1 outline-none"
        >
          <Dropdown.Item 
            key="packers-movers" 
            textValue="Packers and Movers"
            className="rounded-lg hover:bg-blue-50 cursor-pointer transition-colors outline-none group"
          >
            {/* Replaced # with / */}
            <Link href="/services/packers-movers" className="w-full flex items-center gap-3 px-4 py-2.5">
              <Package className="h-4 w-4 text-gray-400 group-hover:text-blue-600 transition-colors shrink-0" />
              <Label className="cursor-pointer font-medium text-gray-700 group-hover:text-blue-700 w-full">
                Packers and Movers
              </Label>
            </Link>
          </Dropdown.Item>
          
          <Dropdown.Item 
            key="transportation" 
            textValue="Transportation"
            className="rounded-lg hover:bg-blue-50 cursor-pointer transition-colors outline-none group"
          >
            {/* Replaced # with / */}
          <Link href="/services/transportation" className="w-full flex items-center gap-3 px-4 py-2.5">
            <Truck className="h-4 w-4 text-gray-400 group-hover:text-blue-600 transition-colors shrink-0" />
            <Label className="cursor-pointer font-medium text-gray-700 group-hover:text-blue-700 w-full">
              Transportation Services
            </Label>
          </Link>
          </Dropdown.Item>
          
          <Dropdown.Item 
            key="car-bike" 
            textValue="Car and Bike Transport"
            className="rounded-lg hover:bg-blue-50 cursor-pointer transition-colors outline-none group"
          >
            {/* Replaced # with / */}
            <Link href="/services/car-bike" className="w-full flex items-center gap-3 px-4 py-2.5">
              <Car className="h-4 w-4 text-gray-400 group-hover:text-blue-600 transition-colors shrink-0" />
              <Label className="cursor-pointer font-medium text-gray-700 group-hover:text-blue-700 w-full">
                Car & Bike Transport
              </Label>
            </Link>
          </Dropdown.Item>
          
          <Dropdown.Item 
            key="warehousing" 
            textValue="Warehousing"
            className="rounded-lg hover:bg-blue-50 cursor-pointer transition-colors outline-none group"
          >
            {/* Replaced # with / */}
            <Link href="/services/warehousing" className="w-full flex items-center gap-3 px-4 py-2.5">
              <Warehouse className="h-4 w-4 text-gray-400 group-hover:text-blue-600 transition-colors shrink-0" />
              <Label className="cursor-pointer font-medium text-gray-700 group-hover:text-blue-700 w-full">
                Warehousing & Storage
              </Label>
            </Link>
          </Dropdown.Item>
          
          <Dropdown.Item 
            key="loading-unloading" 
            textValue="Loading and Unloading"
            className="rounded-lg hover:bg-blue-50 cursor-pointer transition-colors outline-none group"
          >
            {/* Replaced # with / */}
            <Link href="/services/loading-unloading" className="w-full flex items-center gap-3 px-4 py-2.5">
              <ArrowUpDown className="h-4 w-4 text-gray-400 group-hover:text-blue-600 transition-colors shrink-0" />
              <Label className="cursor-pointer font-medium text-gray-700 group-hover:text-blue-700 w-full">
                Loading & Unloading
              </Label>
            </Link>
          </Dropdown.Item>
          
          {/* Optional: Add a "View All Services" link at the bottom of the dropdown */}
          <div className="border-t border-gray-100 my-1"></div>
          <Dropdown.Item 
            key="view-all" 
            textValue="View All Services"
            className="rounded-lg hover:bg-blue-50 cursor-pointer transition-colors outline-none group"
          >
            <Link href="/services" className="w-full flex items-center px-4 py-2.5">
              <Label className="cursor-pointer font-bold text-blue-600 group-hover:text-blue-700 w-full">
                View All Services &rarr;
              </Label>
            </Link>
          </Dropdown.Item>
          
        </Dropdown.Menu>
      </Dropdown.Popover>
    </Dropdown>
  );
}