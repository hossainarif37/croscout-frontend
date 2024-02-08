"use client"
import { useToggleContext } from "@/providers/ToggleProvider";
import NavLogo from "./NavLogo";
import NavMenu from "./NavMenu";
import navbarStyles from "./navbar.module.css"
import { useModalContext } from "@/providers/ModalProvider";
import { AiOutlineMenu } from "react-icons/ai";
import { IoIosCloseCircle } from "react-icons/io";
import Link from "next/link";

const Navbar = () => {
    const { navUserToggle, setNavUserToggle } = useToggleContext();
    const { setLoginModal, setSignupModal } = useModalContext();
    return (
        <nav id="topbar" className="py-5  bg-primary z-40 sticky top-0">
            {/* Wrapper */}
            <div className="wrapper flex-between relative">
                {/* Logo */}
                <NavLogo />

                {/* NavMenu - Visible for Version */}
                <NavMenu />

                {/* Menu Button - Visible for Mobile Version */}
                <button
                    onClick={() => setNavUserToggle((prev) => !prev)}
                    className="block md:hidden text-white select-none text-2xl">
                    {navUserToggle ? <IoIosCloseCircle /> : <AiOutlineMenu color="white" />}
                </button>


                {/* User Menu Dropdown */}
                <ul className={`${navbarStyles.navUserMenu} ${navUserToggle ? "scale-y-100" : "scale-y-0"}`}>
                    <button
                        onClick={() => {
                            setLoginModal(true);
                            setNavUserToggle(false);

                        }}
                    >Login</button>
                    <button
                        onClick={() => {
                            setSignupModal(true);
                            setNavUserToggle(false);

                        }}
                    >Signup</button>
                    <Link href={"/dashboard"} className="select-none font-semibold text-secondary hover:bg-slate-200 w-full text-left py-2 px-4 rounded-lg duration-150">Dashboard</Link>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;