import siteData from "../_lib/data/siteData.json"
import ServicesListLayout from "../_components/ServicesListLayout";

export default function ServicesPage() {
  return (
    <ServicesListLayout siteData={siteData} />
  );
}