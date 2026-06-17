import BranchDetailLayout from "../../_components/BranchesDetailLayout";
import siteData from "../../_lib//data/siteData.json"; 

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const branchData = siteData.locations.find(loc => loc.id === resolvedParams.id);

  return {
    title: branchData ? `${branchData.state} Branch Operations / Geetanjali Transport Service` : "Branch Operations",
    description: branchData ? `Professional shifting and transport logistics terminal details inside ${branchData.state}.` : "Logistics hub details."
  };
}

export default async function IndividualBranchPage({ params }) {
  const resolvedParams = await params;
  const { id } = resolvedParams;

  const matchedBranch = siteData.locations.find((loc) => loc.id === id);

  if (!matchedBranch) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-gray-500 text-xl font-bold bg-gray-50">
        Branch Location Not Setup
        <a href="/branches" className="mt-4 text-blue-600 text-base font-normal hover:underline">
          Return to branches overview
        </a>
      </div>
    );
  }

  return <BranchDetailLayout branch={matchedBranch} />;
}