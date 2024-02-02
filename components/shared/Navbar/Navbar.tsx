import NavLogo from "./NavLogo";
import NavMenu from "./NavMenu";

const Navbar = () => {
    return (
        <nav className="py-5">
            {/* Wrapper */}
            <div className="wrapper flex-between">
                {/* Logo */}
                <NavLogo />

                {/* NavMenu */}
                <NavMenu />
            </div>
        </nav>
    );
};

export default Navbar;