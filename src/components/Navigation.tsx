import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, MessageCircle } from "lucide-react";
import CareFitLogo from "./CareFitLogo";
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;
  const navigation = [{
    name: "Início",
    href: "/"
  }, {
    name: "Nossa História",
    href: "/nossa-historia"
  }, {
    name: "Ciclo Completo",
    href: "/jornada"
  }, {
    name: "Jornada Propósito",
    href: "/jornada"
  }, {
    name: "Ice Mind",
    href: "/ice-mind-experience"
  }, {
    name: "Nosso Espaço",
    href: "/espaco"
  }, {
    name: "Comunidade",
    href: "/comunidade"
  }, {
    name: "Contato",
    href: "/contato"
  }];
  return <>
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-[4px]">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3">
              <CareFitLogo size={58} />
              <div className="text-xl font-bold text-primary px-[11px]">
                <span>CAREFIT</span> <span className="text-accent">Run Base</span>
                <div className="text-xs text-muted-foreground font-normal mx-0">Centro de Transformação do Corredor.</div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navigation.map(item => <Link key={item.name} to={item.href} className={`text-sm font-medium transition-colors hover:text-accent ${isActive(item.href) ? "text-accent" : "text-foreground"}`}>
                  {item.name}
                </Link>)}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-background border-t border-border">
              {navigation.map(item => <Link key={item.name} to={item.href} className={`block px-3 py-2 text-base font-medium transition-colors hover:text-accent ${isActive(item.href) ? "text-accent" : "text-foreground"}`} onClick={() => setIsOpen(false)}>
                  {item.name}
                </Link>)}
            </div>
          </div>}
      </nav>

      {/* WhatsApp Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button variant="whatsapp" size="icon" className="w-14 h-14 rounded-full shadow-2xl" onClick={() => {
        window.open('https://api.whatsapp.com/send?phone=5516996008849', '_blank');
      }}>
          <MessageCircle className="w-6 h-6" />
        </Button>
      </div>
    </>;
};
export default Navigation;