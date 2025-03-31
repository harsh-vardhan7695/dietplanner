
import { ThemeToggle } from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/90 backdrop-blur-sm">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-primary font-bold text-xl">DietPlanner</span>
        </div>
        
        <div className="hidden md:flex items-center gap-6">
          <nav className="flex gap-6">
            <a href="#features" className="text-sm font-medium transition-colors hover:text-primary">
              Features
            </a>
            <a href="#how-it-works" className="text-sm font-medium transition-colors hover:text-primary">
              How It Works
            </a>
            <a href="#waitlist" className="text-sm font-medium transition-colors hover:text-primary">
              Join Waitlist
            </a>
          </nav>
          <ThemeToggle />
          <Button className="button-hover-effect">Get Started</Button>
        </div>
        
        <div className="flex md:hidden items-center gap-4">
          <ThemeToggle />
          <Button variant="outline" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="container md:hidden py-4 bg-background border-t">
          <nav className="flex flex-col gap-4">
            <a 
              href="#features" 
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </a>
            <a 
              href="#how-it-works" 
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              How It Works
            </a>
            <a 
              href="#waitlist" 
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Join Waitlist
            </a>
            <Button className="w-full">Get Started</Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
