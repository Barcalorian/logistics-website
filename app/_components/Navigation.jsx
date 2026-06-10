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
    <nav className="z-10 font-semibold">
      <ul className="flex items-center gap-16">
        <li>
          <Link
            href="/"
            className="flex items-center gap-2 transition-colors hover:text-blue-600"
          >
            <Home className="h-4 w-4" />
            <span>Home</span>
          </Link>
        </li>

        <li>
          <Link
            href="/about"
            className="flex items-center gap-2 transition-colors hover:text-blue-600"
          >
            <Info className="h-4 w-4" />
            <span>About Us</span>
          </Link>
        </li>

        {/* Note: Make sure to add an icon inside ServicesDropdown internally if needed! */}
        <ServicesDropdown />

        <li>
          <Link
            href="/branches"
            className="flex items-center gap-2 transition-colors hover:text-blue-600"
          >
            <MapPin className="h-4 w-4" />
            <span>Branches</span>
          </Link>
        </li>

        <li>
          <Link
            href="/gallery"
            className="flex items-center gap-2 transition-colors hover:text-blue-600"
          >
            <Image className="h-4 w-4" />
            <span>Gallery</span>
          </Link>
        </li>

        <li>
          <Link
            href="/video"
            className="flex items-center gap-2 transition-colors hover:text-blue-600"
          >
            <Video className="h-4 w-4" />
            <span>Videos</span>
          </Link>
        </li>

        <li>
          <Link
            href="/contact"
            className="flex items-center gap-2 transition-colors hover:text-blue-600"
          >
            <Mail className="h-4 w-4" />
            <span>Contact Us</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}