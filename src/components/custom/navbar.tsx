"use client"
import {NavBody, NavItems, MobileNav, MobileNavHeader, MobileNavToggle, MobileNavMenu, Navbar} from "@/components";
import {useState} from "react";

interface NavbarItems {
    navItems: {
        link: string;
        name: string
    }[];
}

export const  NavbarSection =({navItems}: any)  => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);


    return (
        <Navbar className={"z-1000 pt-10 w-fit mx-auto "}>
            {/* Desktop Navigation */}
            <NavBody className=" bg-gray-600/50 items-center h-10 w-fit px-10 fixed mx-auto left-1/2  transform -translate-x-1/2 ">
                <NavItems  items={navItems} />
            </NavBody>

            {/* Mobile Navigation */}
            <MobileNav className="bg-gray-600/80  h-10 z-1000 w-fit mx-0 fixed ">
                <MobileNavHeader className="px-4 w-fit">
                    <MobileNavToggle
                        isOpen={isMobileMenuOpen}
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    />
                </MobileNavHeader>

                <MobileNavMenu
                    isOpen={isMobileMenuOpen}
                    onClose={() => setIsMobileMenuOpen(false)}
                    className="w-fit"
                >
                    {navItems.map((item:any, idx:any) => (
                        <a
                            key={`mobile-link-${idx}`}
                            href={item.link}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="relative text-neutral-600 dark:text-neutral-300"
                        >
                            <span className="block">{item.name}</span>
                        </a>
                    ))}

                </MobileNavMenu>
            </MobileNav>
        </Navbar>
    );
}