// Adjust these import paths depending on exactly where your files live
import ServiceDetailLayout from "../../_components/ServiceDetailLayout";
import siteData from "../../_lib/data/siteData.json";

// 1. Make generateMetadata async and await params
export async function generateMetadata({ params }) {
  const resolvedParams = await params; 
  const service = siteData.detailedServices.find(s => s.id === resolvedParams.id);
  
  return {
    title: service ? service.title : "Service Not Found",
    description: service ? service.intro : "Service details"
  };
}

// 2. Make the main page component async and await params
export default async function IndividualServicePage({ params }) {
  // Await the params before trying to read the 'id'
  const resolvedParams = await params;
  const { id } = resolvedParams;

  // Find the exact service based on the URL parameter
  const service = siteData.detailedServices.find((s) => s.id === id);
  const homeService = siteData.homeServices.find((hs) => hs.id === id);

  // Fallback if someone types a random URL or if data is missing
  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-500 text-xl font-bold">
        Service "{id}" not found
      </div>
    );
  }

  // Pass the specific service data to the Detail Layout
  return (
    <ServiceDetailLayout 
      service={service} 
      serviceImage={homeService?.image} 
    />
  );
}