
import { Github, Package, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t bg-background/95 backdrop-blur">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="h-8 w-8 rounded-md bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <span className="text-white font-bold text-sm">S</span>
              </div>
              <span className="text-xl font-bold">Setu.js</span>
            </div>
            <p className="text-muted-foreground mb-4 max-w-md">
              A modern, isomorphic HTTP client that bridges the gap between frontend 
              and backend JavaScript environments.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://www.npmjs.com/package/setu.js"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Package className="h-4 w-4" />
                npm
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-3">Documentation</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="/docs" className="hover:text-foreground transition-colors">Getting Started</a></li>
              <li><a href="/docs#api-reference" className="hover:text-foreground transition-colors">API Reference</a></li>
              <li><a href="/docs#examples" className="hover:text-foreground transition-colors">Examples</a></li>
              <li><a href="/docs#typescript" className="hover:text-foreground transition-colors">TypeScript</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-3">Resources</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Changelog</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Contributing</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Issues</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">License</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 Setu.js. All rights reserved.
          </p>
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            Built with <Heart className="h-4 w-4 text-red-500" /> for the JavaScript community
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
