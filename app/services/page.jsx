import siteData from "../_lib/data/siteData.json"
import ServicesLayout from "../_components/ServicesLayout";

export default function ServicesPage() {
  return (
    <ServicesLayout siteData={siteData} />
  );
}