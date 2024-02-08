"use client"
import { useToggleContext } from "@/providers/ToggleProvider";
import NavLogo from "./NavLogo";
import NavMenu from "./NavMenu";
import navbarStyles from "./navbar.module.css"
import { useModalContext } from "@/providers/ModalProvider";
import { AiOutlineMenu } from "react-icons/ai";
import { IoIosCloseCircle } from "react-icons/io";
import { useAuthContext } from "@/providers/AuthProvider";
import { logoutUser } from "@/lib/database/authUser";
import toast from "react-hot-toast";
import { clearToken } from "@/utils/tokenStorage";
import { usePathname } from "next/navigation";

const Navbar = () => {
    const { navUserToggle, setNavUserToggle } = useToggleContext();
    const { setLoginModal, setSignupModal } = useModalContext();
    const { user, setUser } = useAuthContext();

    // navbar will be hidden if them pathname matches the include pathname
    const pathname = usePathname();
    const isNavbarHidden = /\/reset\/[^/]+$/.test(pathname) || /\/dashboard\/[^/]+$/.test(pathname);

    const handleLogout = async () => {
        try {
            // const dbResponse = await logoutUser();
            // if(dbResponse.isLogout){
            toast.success("Successfully Logout")
            setUser(null)
            clearToken();
            // }
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <nav hidden={isNavbarHidden} id="topbar" className="py-5  bg-primary z-40 sticky top-0">
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
                    {
                        user ?
                            <>
                                <button className="text-secondary cursor-default">{user?.name}</button>
                                <button
                                    onClick={handleLogout}
                                >Logout</button>
                            </>
                            :
                            <>
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
                            </>
                    }
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;