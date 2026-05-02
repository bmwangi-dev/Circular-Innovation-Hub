import { useState, useRef, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { ChevronDown, ChevronRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface DropdownItem {
    name: string;
    path: string;
    icon: LucideIcon;
    description: string;
}

interface NavbarDropdownProps {
    label: string;
    basePath?: string;
    items: DropdownItem[];
}

const NavbarDropdown = ({
    label,
    basePath,
    items,
}: NavbarDropdownProps) => {
    const [isOpen, setIsOpen] = useState(false);

    const triggerRef = useRef<HTMLDivElement>(null);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    const location = useLocation();

    const isParentActive =
        basePath && location.pathname === basePath;

    const handleMouseEnter = () => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        setIsOpen(true);
    };

    const handleMouseLeave = () => {
        timeoutRef.current = setTimeout(() => {
            setIsOpen(false);
        }, 200);
    };

    const handleToggle = () => {
        setIsOpen((prev) => !prev);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                triggerRef.current &&
                !triggerRef.current.contains(event.target as Node) &&
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target as Node)
            ) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () =>
            document.removeEventListener(
                "mousedown",
                handleClickOutside
            );
    }, []);

    useEffect(() => {
        return () => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
        };
    }, []);

    return (
        <div
            ref={triggerRef}
            className="relative h-full flex items-center"
        >
            <div className="relative flex items-center gap-1.5 py-2">
                {basePath ? (
                    <NavLink
                        to={basePath}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        onClick={handleToggle}
                        className={`text-sm font-medium cursor-pointer transition-colors duration-200 relative group ${isOpen || isParentActive
                            ? "text-white"
                            : "text-green-100 hover:text-white"
                            }`}
                    >
                        {label}

                        <span
                            className={`absolute -bottom-1 left-0 h-0.5 bg-[#e1ac00] transition-all duration-300 ${isOpen || isParentActive
                                ? "w-full"
                                : "w-0 group-hover:w-full"
                                }`}
                        />
                    </NavLink>
                ) : (
                    <span
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        onClick={handleToggle}
                        className={`text-sm font-medium cursor-pointer transition-colors duration-200 relative group ${isOpen
                            ? "text-white"
                            : "text-green-100 hover:text-white"
                            }`}
                    >
                        {label}

                        <span
                            className={`absolute -bottom-1 left-0 h-0.5 bg-[#e1ac00] transition-all duration-300 ${isOpen
                                ? "w-full"
                                : "w-0 group-hover:w-full"
                                }`}
                        />
                    </span>
                )}

                <ChevronDown
                    className={`h-4 w-4 transition-transform duration-300 text-green-100 ${isOpen ? "rotate-180 text-white" : ""
                        }`}
                />
            </div>

            <div
                ref={dropdownRef}
                style={{ top: "100%" }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className={`absolute left-1/2 -translate-x-1/2 pt-3 transition-all duration-300 ease-out z-50 ${isOpen
                    ? "opacity-100 translate-y-0 visible"
                    : "opacity-0 -translate-y-2 invisible"
                    }`}
            >
                <div className="w-80 bg-[#3d7118] rounded-2xl shadow-2xl border border-green-700/50 overflow-hidden">
                    <div className="flex flex-col gap-1 p-2">
                        {items.map((item) => (
                            <NavLink
                                key={item.name}
                                to={item.path}
                                onClick={() => setIsOpen(false)}
                                className={({ isActive }) =>
                                    `group/link flex items-center gap-4 rounded-xl px-4 py-3 transition-all duration-200 ${isActive
                                        ? "bg-[#e1ac00]/20 text-white shadow-sm"
                                        : "text-green-50 hover:bg-[#e1ac00]/15 hover:text-white"
                                    }`
                                }
                            >
                                <div
                                    className={`flex size-10 shrink-0 items-center justify-center rounded-xl transition-all duration-200 ${location.pathname === item.path
                                        ? "bg-[#e1ac00] text-[#3d7118] shadow-lg shadow-yellow-500/20"
                                        : "bg-green-800/40 text-[#e1ac00] group-hover/link:bg-[#e1ac00] group-hover/link:text-[#3d7118]"
                                        }`}
                                >
                                    <item.icon className="size-5" />
                                </div>

                                <div className="flex-1">
                                    <div className="text-sm font-bold tracking-tight">
                                        {item.name}
                                    </div>

                                    <div className="text-[11px] text-green-100/60 mt-0.5 leading-relaxed line-clamp-1">
                                        {item.description}
                                    </div>
                                </div>

                                <ChevronRight className="size-4 text-[#e1ac00]/40 group-hover/link:text-[#e1ac00] opacity-0 group-hover/link:opacity-100 transition-all duration-200 transform -translate-x-1 group-hover/link:translate-x-0" />
                            </NavLink>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavbarDropdown;