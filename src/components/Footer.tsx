
import { ThemeToggle } from "@/components/ThemeToggle";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t py-12 md:py-16">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <h3 className="text-lg font-medium">DietPlanner</h3>
            <p className="text-sm text-muted-foreground">
              AI-powered nutrition planning for a healthier life.
            </p>
            <div className="flex items-center">
              <ThemeToggle />
              <span className="ml-2 text-sm text-muted-foreground">Toggle theme</span>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-sm font-medium">Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#features" className="text-muted-foreground hover:text-foreground">
                  Features
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="text-muted-foreground hover:text-foreground">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#waitlist" className="text-muted-foreground hover:text-foreground">
                  Join Waitlist
                </a>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-sm font-medium">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-sm font-medium">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="mailto:info@dietplanner-app.com" className="text-muted-foreground hover:text-foreground">
                  info@dietplanner-app.com
                </a>
              </li>
              <li className="text-muted-foreground">
                123 Nutrition Street
                <br />
                Healthy City, HC 98765
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>© {currentYear} DietPlanner. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
