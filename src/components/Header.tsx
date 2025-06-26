
import { Button } from "@/components/ui/button";
import { Github, BookOpen, Package } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded-md bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
            <span className="text-white font-bold text-sm">S</span>
          </div>
          <span className="text-xl font-bold">Setu.js</span>
        </Link>
        
        <nav className="flex items-center space-x-6">
          <Link to="/docs" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Documentation
          </Link>
          
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="sm" asChild>
              <a href="https://www.npmjs.com/package/setu.js" target="_blank" rel="noopener noreferrer">
                <Package className="h-4 w-4 mr-2" />
                npm
              </a>
            </Button>
            
            <Button variant="ghost" size="sm" asChild>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4 mr-2" />
                GitHub
              </a>
            </Button>
            
            <Button size="sm" asChild>
              <Link to="/docs">
                <BookOpen className="h-4 w-4 mr-2" />
                Get Started
              </Link>
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
