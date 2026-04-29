import { useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import {
  ArrowRight,
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

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
    { type: "link", name: "Contact Us", path: "/contact" },
  ];

  // Mobile links only
  const navLinks = navItems.filter((item) => item.type === "link");

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#1B4332] shadow-lg border-b border-emerald-800/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center space-x-2 group cursor-pointer"
          >
            <img
              src={logoImg}
              alt="CIH Logo"
              className="h-32 w-32 object-contain"
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
                        : "text-emerald-100 hover:text-white"
                      }`
                    }
                  >
                    {item.name}

                    <span
                      className={`absolute bottom-4 left-0 h-0.5 bg-[#F4A261] transition-all duration-300 group-hover:w-full ${location.pathname === item.path ? "w-full" : "w-0"
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
              className="text-emerald-100 p-2 rounded-lg hover:bg-emerald-800/50 transition-colors"
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
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Mobile Drawer */}
      <div
        className={`fixed top-20 right-4 w-[300px] bg-[#2D6A4F] z-[70] shadow-2xl transition-all duration-300 ease-in-out transform lg:hidden rounded-2xl border border-emerald-700/50 overflow-hidden ${isMenuOpen
          ? "opacity-100 translate-y-0"
          : "opacity-0 -translate-y-4 pointer-events-none"
          }`}
      >
        <div className="flex flex-col">
          {/* Drawer Header */}
          <div className="flex justify-between items-center p-4 border-b border-emerald-700/50 bg-[#1B4332]/50">
            <img
              src={logoImg}
              alt="CIH Logo"
              className="h-28 w-28 object-contain"
            />

            <button
              onClick={() => setIsMenuOpen(false)}
              className="text-emerald-100 p-2 hover:bg-emerald-800/50 rounded-lg transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Drawer Links */}
          <div className="py-3 px-3 space-y-1 overflow-y-auto max-h-[calc(100vh-200px)]">
            {navLinks.map((item) => (
              <NavLink
                key={item.name}
                to={item.path || "#"}
                className={({ isActive }) =>
                  `block px-4 py-3 text-base font-medium rounded-xl transition-all ${isActive
                    ? "text-white bg-emerald-800/60"
                    : "text-emerald-100 hover:text-white hover:bg-emerald-800/30"
                  }`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </NavLink>
            ))}

            {/* Services Section */}
            <div className="mt-2 pt-2">
              <div className="px-4 py-2 text-xs font-semibold text-[#F4A261] uppercase tracking-wider">
                Our Services
              </div>

              {servicesItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-4 py-3 text-base font-medium rounded-xl transition-all ${isActive
                      ? "text-white bg-emerald-800/60"
                      : "text-emerald-100 hover:text-white hover:bg-emerald-800/30"
                    }`
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center ${location.pathname === item.path
                      ? "bg-[#F4A261] text-[#2D6A4F]"
                      : "bg-emerald-800/30 text-[#F4A261]"
                      }`}
                  >
                    <item.icon className="h-4 w-4" />
                  </div>

                  <div className="flex-1">
                    <div className="font-medium">{item.name}</div>
                    <div className="text-xs text-emerald-200/60">
                      {item.description}
                    </div>
                  </div>
                </NavLink>
              ))}
            </div>
          </div>

          {/* Drawer Footer */}
          <div className="p-4 border-t border-emerald-700/50 bg-[#1B4332]/30">
            <button className="w-full bg-gradient-to-r from-[#F4A261] to-[#E76F51] text-white px-5 py-3.5 rounded-xl font-bold shadow-lg flex items-center justify-center gap-2 active:scale-[0.98] transition-transform text-sm">
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