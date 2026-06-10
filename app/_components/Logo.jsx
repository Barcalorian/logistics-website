import Link from "next/link";
import Image from "next/image";

export default function Logo() {
    return(
        <Link href="/">
            <Image 
                src="/logo2.png"
                height={60}
                width={60} 
                quality={50}
                alt="Geetanjali transport service logo"
                priority        
            />
        </Link>
    )
}