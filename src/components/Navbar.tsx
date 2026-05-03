import { useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import {
  ArrowRight,
  ChevronDown,
  Menu,
  X,
  Briefcase,
  Headphones,
  Building,
  Coffee,
  Rocket,
  Lightbulb,
} from "lucide-react";

import logoImg from "../assets/images/CIH_logo.png";
import NavbarDropdown from "../components/Ui/NavbarDropdown";
import { cloudinaryAssets } from "../lib/cloudinaryAssets";
import { OptimizedImage } from "../lib/cloudinary";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openMobileGroups, setOpenMobileGroups] = useState<Record<string, boolean>>({
    Services: false,
    Entrepreneurs: false,
  });
  const location = useLocation();

  // Services dropdown items
  const servicesItems = [
    {
      name: "Corporates",
      path: "/corporates",
      icon: Building,
      description: "Partner with us for sustainable business transformation",
    },
    {
      name: "Advisory",
      path: "/advisory",
      icon: Briefcase,
      description: "Expert guidance on circular economy strategy",
    },
    {
      name: "Co-working",
      path: "/co-working",
      icon: Coffee,
      description: "Premium workspace in a collaborative environment",
    },
    {
      name: "BPO",
      path: "/bpo",
      icon: Headphones,
      description: "Streamline operations with our BPO solutions",
    },
  ];

  // Entrepreneurs dropdown items
  const entrepreneurItems = [
    {
      name: "Startup Hub",
      path: "/startup-hub",
      icon: Rocket,
      description: "Launch and scale your startup faster",
    },
    {
      name: "Mentorship",
      path: "/mentorship",
      icon: Lightbulb,
      description: "Guidance from experienced mentors",
    },
  ];

  interface NavItem {
    type: "link" | "dropdown";
    name: string;
    path?: string;
  }

  // Main nav order
  const navItems: NavItem[] = [
    { type: "link", name: "Home", path: "/" },
    { type: "link", name: "About", path: "/about" },
    { type: "dropdown", name: "Services" },
    { type: "link", name: "Projects", path: "/projects" },
    { type: "dropdown", name: "Entrepreneurs" },
    { type: "link", name: "Academy", path: "/academy" },
    { type: "link", name: "Contact Us", path: "/contactUs" },
  ];

  const toggleMobileGroup = (group: string) => {
    setOpenMobileGroups((current) => ({ ...current, [group]: !current[group] }));
  };

  const closeMobileMenu = () => {
    setIsMenuOpen(false);
  };

  const getDropdownItems = (name: string) => {
    if (name === "Services") return servicesItems;
    if (name === "Entrepreneurs") return entrepreneurItems;
    return [];
  };

  const isDropdownActive = (name: string) =>
    getDropdownItems(name).some((item) => item.path === location.pathname);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#3d7118] shadow-lg border-b border-green-800/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center space-x-2 group cursor-pointer"
          >
            <OptimizedImage
              publicId={cloudinaryAssets.logo}
              fallbackSrc={logoImg}
              alt="CIH Logo"
              className="h-32 w-32 object-contain"
              width={256}
              height={256}
              resizeMode="contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-stretch space-x-8 h-full">
            {navItems.map((item) => {
              if (item.type === "link") {
                return (
                  <NavLink
                    key={item.name}
                    to={item.path || "#"}
                    className={({ isActive }) =>
                      `text-sm font-medium relative group transition-colors duration-200 flex items-center h-full ${isActive
                        ? "text-white"
                        : "text-green-100 hover:text-white"
                      }`
                    }
                  >
                    {item.name}

                    <span
                      className={`absolute bottom-4 left-0 h-0.5 bg-[#e1ac00] transition-all duration-300 group-hover:w-full ${location.pathname === item.path ? "w-full" : "w-0"
                        }`}
                    />
                  </NavLink>
                );
              }

              if (item.type === "dropdown" && item.name === "Services") {
                return (
                  <NavbarDropdown
                    key={item.name}
                    label="Services"
                    items={servicesItems}
                  />
                );
              }

              if (
                item.type === "dropdown" &&
                item.name === "Entrepreneurs"
              ) {
                return (
                  <NavbarDropdown
                    key={item.name}
                    label="Entrepreneurs"
                    items={entrepreneurItems}
                  />
                );
              }

              return null;
            })}
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-green-100 p-2 rounded-lg hover:bg-green-800/50 transition-colors"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] transition-all duration-300 lg:hidden ${isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        onClick={closeMobileMenu}
      />

      {/* Mobile Drawer */}
      <div
        className={`fixed top-20 right-4 w-[300px] bg-[#3d7118] z-[70] shadow-2xl transition-all duration-300 ease-in-out transform lg:hidden rounded-2xl border border-green-700/50 overflow-hidden ${isMenuOpen
          ? "opacity-100 translate-y-0"
          : "opacity-0 -translate-y-4 pointer-events-none"
          }`}
      >
        <div className="flex flex-col">
          {/* Drawer Header */}
          <div className="flex justify-between items-center p-4 border-b border-green-700/50 bg-[#3d7118]/50">
            <OptimizedImage
              publicId={cloudinaryAssets.logo}
              fallbackSrc={logoImg}
              alt="CIH Logo"
              className="h-28 w-28 object-contain"
              width={224}
              height={224}
              resizeMode="contain"
            />

            <button
              onClick={closeMobileMenu}
              className="text-green-100 p-2 hover:bg-green-800/50 rounded-lg transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Drawer Links */}
          <div className="py-3 px-3 space-y-1 overflow-y-auto max-h-[calc(100vh-200px)]">
            {navItems.map((item) => {
              if (item.type === "link") {
                return (
                  <NavLink
                    key={item.name}
                    to={item.path || "#"}
                    className={({ isActive }) =>
                      `block px-4 py-3 text-base font-medium rounded-xl transition-all ${isActive
                        ? "text-white bg-green-800/60"
                        : "text-green-100 hover:text-white hover:bg-green-800/30"
                      }`
                    }
                    onClick={closeMobileMenu}
                  >
                    {item.name}
                  </NavLink>
                );
              }

              const dropdownItems = getDropdownItems(item.name);
              const isOpen = openMobileGroups[item.name];
              const active = isDropdownActive(item.name);

              return (
                <div key={item.name} className="pt-1">
                  <button
                    type="button"
                    onClick={() => toggleMobileGroup(item.name)}
                    aria-expanded={isOpen}
                    className={`flex w-full items-center justify-between rounded-xl px-4 py-3 text-base font-medium transition-all ${active
                      ? "text-white bg-green-800/60"
                      : "text-green-100 hover:text-white hover:bg-green-800/30"
                      }`}
                  >
                    <span>{item.name}</span>
                    <ChevronDown className={`h-4 w-4 text-[#e1ac00] transition-transform ${isOpen ? "rotate-180" : ""}`} />
                  </button>

                  {isOpen && (
                    <div className="mt-2 space-y-1 rounded-xl bg-green-950/15 p-2">
                      {dropdownItems.map((dropdownItem) => (
                        <NavLink
                          key={dropdownItem.name}
                          to={dropdownItem.path}
                          className={({ isActive }) =>
                            `flex items-center gap-3 rounded-xl px-3 py-3 text-sm transition-all ${isActive
                              ? "text-white bg-green-800/70"
                              : "text-green-100 hover:text-white hover:bg-green-800/30"
                            }`
                          }
                          onClick={closeMobileMenu}
                        >
                          <div
                            className={`w-8 h-8 rounded-lg flex items-center justify-center ${location.pathname === dropdownItem.path
                              ? "bg-[#e1ac00] text-[#3d7118]"
                              : "bg-green-800/30 text-[#e1ac00]"
                              }`}
                          >
                            <dropdownItem.icon className="h-4 w-4" />
                          </div>

                          <div className="flex-1">
                            <div className="font-medium">{dropdownItem.name}</div>
                            <div className="text-xs leading-snug text-green-200/60">
                              {dropdownItem.description}
                            </div>
                          </div>
                        </NavLink>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Drawer Footer */}
          <div className="p-4 border-t border-green-700/50 bg-[#3d7118]/30">
            <button className="w-full bg-gradient-to-r from-[#e1ac00] to-[#e1ac00] text-white px-5 py-3.5 rounded-xl font-bold shadow-lg flex items-center justify-center gap-2 active:scale-[0.98] transition-transform text-sm">
              Join Community
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
