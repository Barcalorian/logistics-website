import StoreProvider from "./_lib/store/StoreProvider";
import { Josefin_Sans } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import FloatingChat from "./_components/FloatingChat"

const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: {
    template: "%s / Geetanjali Transport Service",
    default: "Welcome / Geetanjali Transport Service"
  },
  description: "Geetanjali Transport Service offers reliable packers and movers, household shifting, office relocation, and commercial logistics services across India.",
  keywords: ["packers and movers Noida", "household shifting", "office relocation", "commercial transport India", "Geetanjali transport, Geetanjali Transport Company Noida, Geetanjali Transport Service Noida, Geetanjali Transport Noida, Geetanjali Logistics Noida, Geetanjali Packers and Movers Noida, Geetanjali Cargo Service Noida, Geetanjali Transport Sector 5 Noida, Transport Company in Noida, Logistics Company in Noida, Cargo Transport Service Noida, Transport Company Noida, Transport Service Noida, Logistics Company Noida, Cargo Service Noida, Goods Transport Noida, Truck Transport Noida, Transportation Service Sector 5 Noida, Harola Transport Service Noida, Noida Transport Agency, Noida Logistics Services, Household Goods Transport Noida, Commercial Goods Transport Noida, Industrial Transport Noida, Full Truck Load Service Noida, Part Load Transport Noida, Door to Door Transport Noida, Interstate Transport Service Noida, Domestic Cargo Service Noida, Warehousing and Logistics Noida, Freight Transport Noida, Best Transport Company in Noida, Reliable Transport Service in Noida, Affordable Logistics Company in Noida, Goods Transportation Service in Noida, Fast Cargo Transport in Noida, Packers and Movers Transport Service Noida, Truck Booking Service Noida, Transportation Company Near Sector 5 Noida, Commercial Logistics Provider Noida, Transport Company Near Harola Noida, Transport Service Near Me, Logistics Company Near Me, Cargo Transport Near Me, Truck Transport Near Me, Goods Carrier Service Noida, Noida Freight Services, Local Transport Company Noida, Transport Company in Sector 5 Noida, Transport Company in Harola Noida, Logistics Services Near Sector 5 Noida, Noida Transport Company, Noida Cargo Company, Noida Logistics Provider, Transport Contractor Noida, Freight Company Noida, Road Transport Service Noida, Parcel Transport Service Noida, Business Logistics Noida, Supply Chain Solutions Noida, Trucking Company Noida, Goods Carrier Noida, Cargo Movers Noida, Logistics Support Noida, Warehouse and Transport Noida, Same Day Transport Noida, Express Cargo Service Noida, NCR Transport Service, Delhi NCR Logistics Company, Noida to Delhi Transport Service, Noida to Gurgaon Transport Service, Noida to Ghaziabad Transport Service, All India Transport Service from Noida, Long Distance Goods Transport Noida, Trusted Transport Company Noida, Professional Logistics Services Noida, Commercial Transportation Noida, Corporate Logistics Solutions Noida, Best Cargo Service Noida, Affordable Transport Services Noida, Safe Goods Transportation Noida, Fast Logistics Services Noida, Transport and Logistics Company Noida, Cargo and Freight Services Noida, Transportation Solutions Noida, Logistics and Supply Chain Noida, Transport Booking Noida, Truck Rental for Goods Transport Noida, Goods Delivery Service Noida, Industrial Logistics Noida, E-commerce Logistics Noida, Warehouse Logistics Noida, Distribution Services Noida, Fleet Transport Services Noida, Loading and Unloading Services Noida, Road Freight Services Noida, Cargo Movement Services Noida, Transport Network Noida, Logistics Management Noida, Geetanjali Transport Company Sector 5 Noida, Geetanjali Transport Harola Noida, Geetanjali Cargo Noida, Geetanjali Logistics Services Noida, Geetanjali Freight Services Noida, Geetanjali Truck Transport Noida, Geetanjali Goods Carrier Noida, Geetanjali Road Transport Noida, Geetanjali Transportation Services Noida, Geetanjali Logistics Company Noida."],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${josefin.className} antialiased min-h-screen bg-primary-950 text-primary-100 flex flex-col relative w-full overflow-x-hidden`}>
        <Header />
        <div className="flex-1 flex flex-col w-full">
          <StoreProvider>
            <main className="w-full flex-1 flex flex-col">{children}</main>
          </StoreProvider>
        </div>
        <Footer />
        <FloatingChat />
      </body>
    </html>
  );
}