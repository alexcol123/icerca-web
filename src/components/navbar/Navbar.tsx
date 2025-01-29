"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Shield, Users, BookOpen, Heart, Phone, Menu, X } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Prevent scrolling when menu is open
    if (!isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = "unset";
  };

  const MobileMenu = () => (
    <div className="fixed inset-0 bg-background/95 z-50 md:hidden">
      <div className="flex flex-col h-full">
        {/* Menu Header */}
        <div className="flex items-center justify-between px-4 h-16 border-b">
          <Link
            href="/"
            className="flex items-center"
            onClick={handleLinkClick}
          >
            <Shield className="h-8 w-8 text-primary" />
            <span className="ml-2 text-lg font-bold text-primary">
              Comunidad Segura
            </span>
          </Link>
          <button
            className="p-2 hover:bg-gray-100 rounded-md"
            onClick={toggleMenu}
            aria-label="Close menu"
          >
            <X className="h-6 w-6 text-primary" />
          </button>
        </div>

        {/* Menu Content */}
        <div className="flex-1 overflow-y-auto">
          <div className="px-4 py-8 space-y-8">
            {/* Navigation Links */}
            <div className="space-y-6">
              <Link
                href="/derechos"
                className="flex items-center gap-3 p-2 text-lg hover:text-primary transition-colors"
                onClick={handleLinkClick}
              >
                <BookOpen className="h-5 w-5" />
                <span>Conozca Sus Derechos</span>
              </Link>
              <Link
                href="/telefonos"
                className="flex items-center gap-3 p-2 text-lg hover:text-primary transition-colors"
                onClick={handleLinkClick}
              >
                <Phone className="h-5 w-5" />
                <span>Números de Emergencia</span>
              </Link>
              <Link
                href="/como-funciona"
                className="flex items-center gap-3 p-2 text-lg hover:text-primary transition-colors"
                onClick={handleLinkClick}
              >
                <Users className="h-5 w-5" />
                <span>Como Funciona</span>
              </Link>
            </div>

            {/* Support Button */}
            <Button
              asChild
              variant="default"
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg py-6  w-60 "
              onClick={handleLinkClick}
            >
           
                <Link href="/donar">
                  <Heart className="w-5 h-5 mr-2" />
                  Contribuir
                </Link>
         
            </Button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <nav className="border-b bg-background relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo Section */}
          <Link href="/" className="flex items-center">
            <Shield className="h-8 w-8 text-primary" />
            <span className="ml-2 text-lg font-bold text-primary">
              Comunidad Segura
            </span>
          </Link>

          {/* Desktop Navigation Menu */}
          <div className="hidden md:block">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-foreground">
                    Recursos
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-4 w-[250px]">
                      <NavigationMenuLink asChild>
                        <Link
                          href="/derechos"
                          className="flex items-center gap-2 hover:text-primary transition-colors"
                        >
                          <BookOpen className="h-4 w-4" />
                          <span>Conozca Sus Derechos</span>
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link
                          href="/telefonos"
                          className="flex items-center gap-2 hover:text-primary transition-colors"
                        >
                          <Phone className="h-4 w-4" />
                          <span>Números de Emergencia</span>
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link
                          href="/como-funciona"
                          className="flex items-center gap-2 hover:text-primary transition-colors"
                        >
                          <Users className="h-4 w-4" />
                          <span>Como Funciona</span>
                        </Link>
                      </NavigationMenuLink>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Desktop Action Button */}
          <div className="hidden md:block">
            <Button
              asChild
              variant="default"
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              <Link href="/donar">
                <Heart className="w-4 h-4 mr-2" />
                Apoyar
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:bg-gray-100 rounded-md"
            onClick={toggleMenu}
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6 text-primary" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && <MobileMenu />}
    </nav>
  );
};

export default Navbar;
