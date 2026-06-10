import ServicesLayout from "../_components/ServicesLayout";
import siteData from "../_lib/data/siteData.json"
// Adjust the path above if your 'lib' folder is somewhere else

export default function ServicesPage() {
  return <ServicesLayout services={siteData.detailedServices} />;
}