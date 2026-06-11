import Navigation from "./Navigation";
import Logo from "./Logo";
import TopBanner from "./TopBanner";

export default function Header() {
    return (
        <header className="border-b border-primary-900 flex flex-col w-full">
            <TopBanner />
            
            <div className="px-4 sm:px-6 lg:px-8 py-4 sm:py-5">
                <div className="flex justify-between items-center max-w-7xl mx-auto w-full">
                    <Logo />
                    <Navigation />
                </div>
            </div>
        </header>
    );
}