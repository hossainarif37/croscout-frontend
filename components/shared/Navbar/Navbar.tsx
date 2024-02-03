"use client"
import { useToggleContext } from "@/providers/ToggleProvider";
import NavLogo from "./NavLogo";
import NavMenu from "./NavMenu";
import navbarStyles from "./navbar.module.css"
import { useModalContext } from "@/providers/ModalProvider";

const Navbar = () => {
    const { navUserToggle, setNavUserToggle } = useToggleContext();
    const { setLoginModal, setSignupModal } = useModalContext();
    return (
        <nav className="py-5 bg-primary z-50 sticky top-0">
            {/* Wrapper */}
            <div className="wrapper flex-between relative">
                {/* Logo */}
                <NavLogo />

                {/* NavMenu */}
                <NavMenu />

                {/* User Menu Dropdown */}
                <ul className={`${navbarStyles.navUserMenu} ${navUserToggle ? "scale-y-100" : "scale-y-0"}`}>
                    <button
                        onClick={() => {
                            setLoginModal(true);
                            setNavUserToggle(false);

                        }}
                    >Login</button>
                    <button
                        onClick={() => setSignupModal(false)}
                    >Signup</button>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;