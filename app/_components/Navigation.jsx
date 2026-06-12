import Link from "next/link";
import { ServicesDropdown } from "./Dropdown";
import { 
  Home, 
  Info, 
  MapPin, 
  Image, 
  Video, 
  Mail 
} from "lucide-react";

export default function Navigation() {
  return (
    // ADDED: text-gray-900 to ensure links are clearly visible on the white background
    <nav className="z-10 font-semibold w-full text-gray-900">
      <ul className="flex items-center justify-start lg:justify-center gap-6 md:gap-8 lg:gap-10 w-max mx-auto lg:mx-0 px-2 lg:px-0 text-sm md:text-base">
        <li>
          <Link
            href="/"
            className="flex items-center gap-2 transition-colors hover:text-blue-600 whitespace-nowrap"
          >
            <Home className="h-4 w-4" />
            <span>Home</span>
          </Link>
        </li>

        <li>
          <Link
            href="/about"
            className="flex items-center gap-2 transition-colors hover:text-blue-600 whitespace-nowrap"
          >
            <Info className="h-4 w-4" />
            <span>About Us</span>
          </Link>
        </li>

        <ServicesDropdown />

        <li>
          <Link
            href="/branches"
            className="flex items-center gap-2 transition-colors hover:text-blue-600 whitespace-nowrap"
          >
            <MapPin className="h-4 w-4" />
            <span>Branches</span>
          </Link>
        </li>

        <li>
          <Link
            href="/gallery"
            className="flex items-center gap-2 transition-colors hover:text-blue-600 whitespace-nowrap"
          >
            <Image className="h-4 w-4" />
            <span>Gallery</span>
          </Link>
        </li>

        <li>
          <Link
            href="/video"
            className="flex items-center gap-2 transition-colors hover:text-blue-600 whitespace-nowrap"
          >
            <Video className="h-4 w-4" />
            <span>Videos</span>
          </Link>
        </li>

        <li>
          <Link
            href="/contact"
            className="flex items-center gap-2 transition-colors hover:text-blue-600 whitespace-nowrap"
          >
            <Mail className="h-4 w-4" />
            <span>Contact Us</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}