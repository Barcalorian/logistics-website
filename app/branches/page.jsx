import BranchesListLayout from "../_components/BranchesListLayout";
import siteData from "../_lib/data/siteData.json";

export const metadata = {
  title: "Our Operational Branches / Geetanjali Transport Service",
  description: "Discover our state-wise operational logistics networks and shifting hubs mapped safely across India."
};

export default function BranchesPage() {
  return <BranchesListLayout siteData={siteData} />;
}