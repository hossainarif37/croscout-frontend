'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";

const NavLogo = () => {
    const router = useRouter();

    return (
        <div className="h-[24px] md:h-[48px] md:w-[336px] w-[200px] relative">
            <Image
                onClick={() => router.push("/")}
                className="cursor-pointer"
                src="/images/navLogo.svg"
                alt="Logo"
                height={24}
                width={336}
            />
        </div>
    );
}

export default NavLogo;