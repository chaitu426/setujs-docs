
import { Button } from "@/components/ui/button";
import { Github, BookOpen, Package, Sun, Moon } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Header = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' || 'light';
    setTheme(savedTheme);
    document.documentElement.classList.toggle('dark', savedTheme === 'dark');
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  return (
    <motion.header 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-sm"
    >
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center space-x-3">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
            className="h-8 w-8 rounded-sm bg-foreground flex items-center justify-center"
          >
            <span className="text-background font-bold text-sm">S</span>
          </motion.div>
          <span className="text-xl font-medium tracking-tight">Setu.js</span>
        </Link>
        
        <nav className="flex items-center space-x-1">
          <motion.div whileHover={{ y: -1 }} transition={{ duration: 0.2 }}>
            <Link to="/docs" className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Documentation
            </Link>
          </motion.div>
          
          <div className="flex items-center space-x-1 ml-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button variant="ghost" size="sm" asChild>
                <a href="https://www.npmjs.com/package/setu.js" target="_blank" rel="noopener noreferrer">
                  <Package className="h-4 w-4" />
                </a>
              </Button>
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button variant="ghost" size="sm" asChild>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4" />
                </a>
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button variant="ghost" size="sm" onClick={toggleTheme}>
                {theme === 'light' ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
              </Button>
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button size="sm" asChild>
                <Link to="/docs">
                  <BookOpen className="h-4 w-4 mr-2" />
                  Get Started
                </Link>
              </Button>
            </motion.div>
          </div>
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;
