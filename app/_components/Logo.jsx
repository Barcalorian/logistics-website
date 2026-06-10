import Link from "next/link";
import Image from "next/image";
// import logo from "@/public/logo.png";

export default function Logo() {

    return(
        <Link href="/" className="flex items-center gap-4 z-10">
            <Image src = "/logo.png"
             height ="60"
             width ="60" 
             alt ="geetanjali transport service logo"
             />
        </Link>
    )
}

 