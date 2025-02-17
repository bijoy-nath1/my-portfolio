import { Link } from "react-router";
import SectionIds from "./SectionIds";
import developerImg from "../../assets/developerImg.png";
import { useEffect, useState } from "react";
import { FiMenu } from "react-icons/fi"; // Menu icon
import { IoClose } from "react-icons/io5"; // Close icon

function Navbar() {
  const [activeLink, setActiveLink] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Mobile menu state

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const marginTop = 80; // Adjust for sticky navbar
      const scrollToY =
        element.getBoundingClientRect().top + window.scrollY - marginTop;

      window.scrollTo({ top: scrollToY, behavior: "smooth" });
    }
  };

  const updateActiveSection = () => {
    let newActiveSection = SectionIds[0]; // Default to first section

    for (let i = SectionIds.length - 1; i >= 0; i--) {
      const section = document.getElementById(SectionIds[i]);
      if (section) {
        const rect = section.getBoundingClientRect();
        const middleScreen = window.innerHeight / 2;

        if (rect.top <= middleScreen && rect.bottom >= middleScreen) {
          newActiveSection = SectionIds[i];
          break;
        }
      }
    }

    if (newActiveSection !== activeLink) {
      setActiveLink(newActiveSection);
    }
  };

  // Detect scrolling and update active section
  useEffect(() => {
    const handleScroll = () => {
      updateActiveSection();
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [activeLink]);

  return (
    <header className="h-16 w-full flex items-center justify-center sticky top-0 bg-white  z-50">
      <nav className="h-full w-full flex justify-between items-center px-6 md:px-20 py-4">
        {/* Logo Section */}
        <div className="flex items-center gap-2">
          <div className="h-12 w-12 rounded-full border-violet-400 border-2">
            <img src={developerImg} alt="Developer" className="w-full h-full" />
          </div>
          <h1 className="text-violet-900  text-xl">Bijay</h1>
        </div>

        {/* Desktop Nav */}
        <div className="hidden sm:flex items-center gap-8">
          {SectionIds.map((section, i) => (
            <Link
              to="#"
              key={i}
              className={`font-semibold text-lg transition-all ${
                activeLink === section
                  ? "text-amber-500 border-b-2 border-amber-500"
                  : "text-violet-900"
              }`}
              onClick={() => {
                scrollToSection(section);
                setIsMenuOpen(false); // Close menu after clicking
              }}
            >
              {section}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="sm:hidden text-violet-900 text-2xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <IoClose /> : <FiMenu />}
        </button>

        {/* Mobile Menu (Sliding from Right) */}
        <div
          className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 sm:hidden flex flex-col items-center py-10 space-y-6`}
        >
          {/* Close Button */}
          <button
            className="absolute top-4 right-4 text-2xl text-gray-600"
            onClick={() => setIsMenuOpen(false)}
          >
            <IoClose />
          </button>

          {/* Mobile Menu Items */}
          {SectionIds.map((section, i) => (
            <Link
              to="#"
              key={i}
              className={`font-semibold text-lg transition-all ${
                activeLink === section
                  ? "text-amber-500 border-b-2 border-amber-500"
                  : "text-violet-900"
              }`}
              onClick={() => {
                scrollToSection(section);
                setIsMenuOpen(false); // Close menu after clicking
              }}
            >
              {section}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
