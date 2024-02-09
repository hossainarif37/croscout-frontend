import type { Metadata } from "next";
import { Onest } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar/Navbar";
import Footer from "@/components/shared/Footer/Footer";
import { ModalProvider } from "@/providers/ModalProvider";
import { ToggleProvider, useToggleContext } from "@/providers/ToggleProvider";
import LoginModal from "@/components/ui/Modal/LoginModal";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SignupModal from "@/components/ui/Modal/SignupModal";
import CalenderModal from "@/components/ui/Modal/CalenderModal";
import GuestModal from "@/components/ui/Modal/GuestModal";
import { SearchProvider } from "@/providers/SearchProvider";
import LocationModal from "@/components/ui/Modal/LocationModal";
import LanguageModal from "@/components/ui/Modal/LanguageModal";
import { LocalizationProvider } from "@/providers/LocalizationContext";
import { usePathname } from "next/navigation";
import { Toaster } from "react-hot-toast";
import { AuthProvider } from "@/providers/AuthProvider";

const onest = Onest({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"]
});

// const { navUserToggle, setNavUserToggle } = useToggleContext();

// const handleToogleUserMenu = () => {
//   setNavUserToggle(false);
// }

export const metadata: Metadata = {
  title: "Airbnb",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={`${onest.className} bg-primary`}>
        <LocalizationProvider>
          <AuthProvider>
            <SearchProvider>
              <ModalProvider>
                <ToggleProvider>
                  <Toaster
                    position="top-center"
                    reverseOrder={false}
                  />
                  {/* Modals */}
                  <LoginModal />
                  <SignupModal />
                  <LocationModal />
                  <CalenderModal />
                  <GuestModal />
                  <LanguageModal />


                  <div className="flex h-screen flex-col ">
                    <Navbar />
                    <main className="flex-1">
                      {children}
                    </main>
                    <Footer />
                  </div>
                </ToggleProvider>
              </ModalProvider>
            </SearchProvider>
          </AuthProvider>
        </LocalizationProvider>
      </body>
    </html>
  );
}
