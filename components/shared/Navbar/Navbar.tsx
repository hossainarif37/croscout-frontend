import NavLogo from "./NavLogo";
import NavMenu from "./NavMenu";

const Navbar = () => {
    return (
        <nav>
            {/* Wrapper */}
            <div className="wrapper">
                {/* Logo */}
                <NavLogo />

                {/* NavMenu */}
                <NavMenu />
            </div>
        </nav>
    );
};

export default Navbar;