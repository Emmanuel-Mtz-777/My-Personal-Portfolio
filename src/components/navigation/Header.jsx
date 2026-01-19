import "../../config/i18n"
import { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  HiMenu,
  HiX,
  HiHome,
  HiFolder,
  HiBriefcase,
  HiAcademicCap,
  HiMail,
  HiUser
} from "react-icons/hi";

export default function Header() {
  const { t, i18n } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { id: "home", label: t("nav.home"), icon: <HiHome /> },
    { id: "projects", label: t("nav.projects"), icon: <HiFolder /> },
    //{ id: "experience", label: t("nav.experience"), icon: <HiBriefcase /> },
    { id: "certifications", label: t("nav.certifications"), icon: <HiAcademicCap /> },
    { id: "about", label: t("nav.about"), icon: <HiUser /> },
  ];
  const handleScroll = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
  setMenuOpen(false);
};


  return (
    <>
      <header className="fixed top-0 left-0 w-full z-40 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between h-20 items-center">
          <img src="/img/Logo.webp" alt="Logo"  className="object-contain h-20"/>

          <nav className="hidden md:flex gap-6 text-lg font-semibold text-white/90">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleScroll(item.id)}
                className="hover:text-white transition"
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center bg-white/10 rounded-full p-1 backdrop-blur-sm">
  {["es", "en"].map((lng) => {
    const isActive = i18n.language === lng;

    return (
      <button
        key={lng}
        onClick={() => i18n.changeLanguage(lng)}
        className={`
          px-4 py-1.5 rounded-full text-sm font-semibold transition-all duration-300
          ${isActive
            ? "bg-white text-black shadow-md"
            : "text-white/60 hover:text-white"}
        `}
      >
        {lng.toUpperCase()}
      </button>
    );
  })}
</div>


          <button
            className="md:hidden text-white text-2xl"
            onClick={() => setMenuOpen(true)}
          >
            <HiMenu />
          </button>
        </div>
      </header>
      <div
        className={`fixed inset-0 z-[999] bg-black/80 backdrop-blur-md transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between p-4">
          <img src="/img/Logo.webp" alt="Logo" className="w-20"/>
          <button
            className="text-white text-3xl"
            onClick={() => setMenuOpen(false)}
          >
            <HiX />
          </button>
        </div>

        <nav className="flex flex-col px-10 justify-start  gap-10 text-white text-lg">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-3 hover:text-purple-400 transition"
            >
              <span className="text-2xl">{item.icon}</span>
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </>
  );
}
