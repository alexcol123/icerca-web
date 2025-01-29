import React from "react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {  Shield, Users, BookOpen, Heart, Phone } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="border-b bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo Section */}
          <Link href="/" className="flex items-center">
            <Shield className="h-8 w-8 text-primary" />
            <span className="ml-2 text-lg font-bold text-primary">
              Comunidad Segura
            </span>
          </Link>

          {/* Navigation Menu */}
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

          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
            <Button
              asChild
              variant="ghost"
              className="text-foreground hover:text-primary hover:bg-background"
            >
              <Link href="/derechos">
                <BookOpen className="w-4 h-4 mr-2" />
                Mis Derechos
              </Link>
            </Button>

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
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
