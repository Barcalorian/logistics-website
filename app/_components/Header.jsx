import Navigation from "./Navigation";
import Logo from "./Logo";
import TopBanner from "./TopBanner";

export default function Header() {
    return (
        <header className="border-b border-primary-900 flex flex-col w-full bg-white z-50">
            <TopBanner />
            
            <div className="px-4 sm:px-6 lg:px-8 py-4 w-full">
                <div className="flex flex-col lg:flex-row justify-between items-center gap-4 lg:gap-0 max-w-7xl mx-auto w-full">
                    
                    {/* Hides the Logo on mobile, shows it on md (768px) screens and larger */}
                    <div className="hidden md:block">
                        <Logo />
                    </div>
                    
                    <div className="w-full lg:w-auto overflow-x-auto pb-2 lg:pb-0 scrollbar-none [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
                        <Navigation />
                    </div>
                </div>
            </div>
        </header>
    );
}