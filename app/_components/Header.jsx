import Navigation from "./Navigation";
import Logo from "./Logo";
import TopBanner from "./TopBanner";

export default function Header() {
    return (
        <header className="border-b border-primary-900 flex flex-col">
            <TopBanner />
            
            <div className="px-8 py-5">
                <div className="flex justify-between items-center max-w-7xl mx-auto">
                    <Logo />
                    <Navigation />
                </div>
            </div>
        </header>
    );
}