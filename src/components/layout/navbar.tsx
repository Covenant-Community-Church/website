"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Heart, ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/mode-toggle";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

// --- TYPES & CONSTANTS ---
// Define a type for navigation items for better type-safety and autocompletion.
export interface NavItem {
    name: string;
    href: string;
    description?: string; // Optional description for dropdowns
    children?: NavItem[];
}

// Define navigation items in a single, easy-to-manage constant.
// Adding a 'children' array to an item will automatically create a dropdown.
const NAV_ITEMS: NavItem[] = [
    { name: "Home", href: "/" },
    {
        name: "I'm New",
        href: "/new",
        children: [
            {
                name: "Meeting Times & Location",
                href: "/new/meeting-times",
                description: "Find out when and where we meet for our services.",
            },
            {
                name: "What to Expect",
                href: "/new/what-to-expect",
                description: "Learn what a typical Sunday service is like.",
            },
            {
                name: "Our Beliefs",
                href: "/new/beliefs",
                description: "Discover the core doctrines of our faith.",
            },
            {
                name: "FAQ",
                href: "/new/faq",
                description: "Get answers to frequently asked questions.",
            },
        ],
    },
    {
        name: "About Us",
        href: "/about",
        children: [
            {
                name: "Our Story",
                href: "/about/story",
                description: "Learn about the history and vision of our church.",
            },
            {
                name: "Our Leadership",
                href: "/about/leadership",
                description: "Meet the pastors and staff who lead our church.",
            },
            {
                name: "Contact Us",
                href: "/contact",
                description: "Get in touch with us with any questions you may have.",
            },
        ],
    },
    {
        name: "Get Involved",
        href: "/involved",
        children: [
            {
                name: "Ministries",
                href: "/ministries",
                description: "Explore the different ministries available.",
            },
            {
                name: "Care Groups",
                href: "/involved/care-groups",
                description: "Join a small group for fellowship and growth.",
            },
        ],
    },
    {
        name: "Sermons & Resources",
        href: "/resources",
        children: [
            {
                name: "Sermons",
                href: "/sermons",
                description: "Watch or listen to our latest sermons.",
            },

            {
                name: "Pastor's Blog",
                href: "/resources/blog",
                description: "Read the latest updates and thoughts from our pastor.",
            },
        ],
    },
];

// --- CUSTOM HOOK ---
// Encapsulates scroll detection logic for reusability.
function useScroll(threshold = 10) {
    const [isScrolled, setIsScrolled] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > threshold);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [threshold]);

    return isScrolled;
}

// --- SUB-COMPONENTS ---

const NavLogo = () => (
    <Link
        href="/"
        className="flex items-center gap-2 flex-shrink-0"
        aria-label="Return to Homepage"
    >
        <Image src="/logo.png" alt="Church Logo" width={40} height={40} />
        <h1>Covenant Community Church</h1>
    </Link>
);

const DesktopNav = () => (
    <NavigationMenu className="hidden md:flex">
        <NavigationMenuList>
            {NAV_ITEMS.map((item) => (
                <NavigationMenuItem key={item.name}>
                    {item.children ? (
                        <>
                            <NavigationMenuTrigger>
                                {item.name}
                                <ChevronDown
                                    className="relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180"
                                    aria-hidden="true"
                                />
                            </NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                                    {item.children.map((child) => (
                                        <ListItem key={child.name} href={child.href} title={child.name}>
                                            {child.description}
                                        </ListItem>
                                    ))}
                                </ul>
                            </NavigationMenuContent>
                        </>
                    ) : (
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            {item.name}
                        </NavigationMenuLink>
                    )}
                </NavigationMenuItem>
            ))}
        </NavigationMenuList>
    </NavigationMenu>
);

const MobileNav = ({ onLinkClick }: { onLinkClick: () => void }) => (
    <div className="md:hidden absolute top-full left-0 w-full bg-background border-t pb-4" role="menu">
        <Accordion type="multiple" className="container w-full">
            {NAV_ITEMS.map((item) =>
                item.children ? (
                    <AccordionItem value={item.name} key={item.name}>
                        <AccordionTrigger className="py-4 text-muted-foreground hover:text-foreground hover:no-underline">
                            {item.name}
                        </AccordionTrigger>
                        <AccordionContent className="pl-4 pb-0">
                            <div className="flex flex-col">
                                {item.children.map((child) => (
                                    <Link
                                        key={child.name}
                                        href={child.href}
                                        className="text-muted-foreground transition-colors hover:text-foreground py-3"
                                        onClick={onLinkClick}
                                        role="menuitem"
                                        >
                                        {child.name}
                                    </Link>
                                ))}
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                ) : (
                    <Link
                        key={item.name}
                        href={item.href}
                        className="flex items-center text-muted-foreground transition-colors hover:text-foreground py-4 border-b"
                        onClick={onLinkClick}
                        role="menuitem"
                        >
                        {item.name}
                    </Link>
                )
            )}
        </Accordion>
        <div className="container pt-4">
            <Button asChild variant="default" className="w-full">
                <Link href="/donate" onClick={onLinkClick} >
                    <Heart className="mr-2 h-4 w-4" /> Donate
                </Link>
            </Button>
        </div>
    </div>
);

// --- MAIN NAVBAR COMPONENT ---

export function Navbar() {
    const isScrolled = useScroll();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

    const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
    const closeMobileMenu = () => setIsMobileMenuOpen(false);

    return (
        <header
            className={cn(
                "fixed top-0 w-full z-50 transition-all duration-300",
                isScrolled ? "bg-background/80 backdrop-blur-md shadow-sm" : "bg-transparent"
            )}
        >
            <div className="container mx-auto px-4 h-16 flex items-center justify-between gap-4">
                <NavLogo />
                <div className="flex-1 flex justify-center">
                    <DesktopNav />
                </div>
                <div className="flex items-center gap-2">
                    <Button asChild variant="default" className="hidden md:inline-flex">
                        <Link href="/donate" >
                            <Heart className="mr-2 h-4 w-4" /> Donate
                        </Link>
                    </Button>
                    <Button
                        variant="ghost"
                        size="icon"
                        className="md:hidden"
                        onClick={toggleMobileMenu}
                        aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                        aria-controls="mobile-menu"
                        aria-expanded={isMobileMenuOpen}
                    >
                        {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                    </Button>
                </div>
            </div>
            {isMobileMenuOpen && <MobileNav onLinkClick={closeMobileMenu} />}
        </header>
    );
}

// Helper component for NavigationMenu items.
const ListItem = React.forwardRef<React.ElementRef<"a">, React.ComponentPropsWithoutRef<"a">>(
    ({ className, title, children, ...props }, ref) => {
        return (
            <li>
                <NavigationMenuLink asChild>
                    <a
                        ref={ref}
                        className={cn(
                            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                            className
                        )}
                        {...props}
                    >
                        <div className="text-sm font-medium leading-none">{title}</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            {children}
                        </p>
                    </a>
                </NavigationMenuLink>
            </li>
        );
    }
);
ListItem.displayName = "ListItem";