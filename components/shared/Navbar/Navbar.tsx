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

const Navbar = () => {
    const { navUserToggle, setNavUserToggle } = useToggleContext();
    const { setLoginModal, setSignupModal } = useModalContext();
    const { user } = useAuthContext();

    const handleLogout = async () => {
        try {
            const dbResponse = await logoutUser();
            if(dbResponse.isLogout){
                toast.success("Successfully Logout")
                clearToken();
            }
        } catch (error) {
            console.log(error);
        }
    }
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
                    {
                        user ?
                            <>
                                <h4 className="text-center my-1">{user?.name}</h4>
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