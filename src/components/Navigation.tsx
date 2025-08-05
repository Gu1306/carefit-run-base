import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, MessageCircle } from "lucide-react";
import CareFitLogo from "./CareFitLogo";
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navItems = [{
    name: "Início",
    path: "/"
  }, {
    name: "Manifesto",
    path: "/manifesto"
  }, {
    name: "Serviços",
    path: "/servicos"
  }, {
    name: "Jornada Propósito",
    path: "/jornada"
  }, {
    name: "Nossa História",
    path: "/historia"
  }, {
    name: "Contato",
    path: "/contato"
  }];
  const isActive = (path: string) => location.pathname === path;
  return <>
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-[4px]">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3">
              <CareFitLogo size={48} />
              <div className="text-xl font-bold text-primary">
                CareFit <span className="text-accent">Run Base</span>
                <div className="text-xs text-muted-foreground font-normal">
                  Seu desafio começa na base. A gente caminha junto até o topo.
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map(item => <Link key={item.name} to={item.path} className={`text-sm font-medium transition-colors hover:text-accent ${isActive(item.path) ? "text-accent" : "text-foreground"}`}>
                  {item.name}
                </Link>)}
              <Button variant="whatsapp" size="sm" onClick={() => window.open('https://wa.me/5511999999999', '_blank')}>
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </Button>
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
              {navItems.map(item => <Link key={item.name} to={item.path} className={`block px-3 py-2 text-base font-medium transition-colors hover:text-accent ${isActive(item.path) ? "text-accent" : "text-foreground"}`} onClick={() => setIsOpen(false)}>
                  {item.name}
                </Link>)}
              <div className="px-3 py-2">
                <Button variant="whatsapp" size="sm" className="w-full" onClick={() => {
              window.open('https://wa.me/5511999999999', '_blank');
              setIsOpen(false);
            }}>
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </Button>
              </div>
            </div>
          </div>}
      </nav>

      {/* WhatsApp Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button variant="whatsapp" size="icon" className="w-14 h-14 rounded-full shadow-2xl" onClick={() => window.open('https://wa.me/5511999999999', '_blank')}>
          <MessageCircle className="w-6 h-6" />
        </Button>
      </div>
    </>;
};
export default Navigation;