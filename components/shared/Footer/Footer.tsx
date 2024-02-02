import Image from "next/image"
import Link from "next/link"

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="border-t border-secondary py-10 flex-center">
            <p>&copy; {currentYear} Your Company. All rights reserved. | Privacy Policy | Terms of Service</p>
        </footer>
    );
};

export default Footer;