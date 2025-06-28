
import { Github, Package, Heart, Linkedin, BringToFront } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="border-t bg-background"
    >
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="h-8 w-8 rounded-sm bg-foreground flex items-center justify-center">
              <BringToFront className="text-background font-bold text-sm"/>
              </div>
              <span className="text-xl font-medium tracking-tight">Setu.js</span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md leading-relaxed">
              A modern, isomorphic HTTP client that bridges the gap between frontend
              and backend JavaScript environments.
            </p>
            <div className="flex items-center gap-6">
              <motion.a
                whileHover={{ y: -1 }}
                href="https://www.npmjs.com/package/setu.js"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Package className="h-4 w-4" />
                npm
              </motion.a>
              <motion.a
                whileHover={{ y: -1 }}
                href="https://github.com/chaitu426/setu.js"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github className="h-4 w-4" />
                GitHub
              </motion.a>
              <motion.a
                whileHover={{ y: -1 }}
                href="https://www.linkedin.com/in/chaitanya-abhade-b23080321/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </motion.a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Documentation</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="/docs" className="hover:text-foreground transition-colors">Getting Started</a></li>
              <li><a href="/docs" className="hover:text-foreground transition-colors">API Reference</a></li>
              <li><a href="/docs" className="hover:text-foreground transition-colors">Examples</a></li>
              <li><a href="/docs" className="hover:text-foreground transition-colors">TypeScript</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Changelog</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Contributing</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Issues</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">License</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 Setu.js. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-1 text-sm text-muted-foreground">
            <span>Built with</span>
            <Heart className="h-4 w-4 text-red-500" />
            <span>for the JavaScript community by</span>
            <span className="font-medium text-foreground">Chaitanya Abhade</span>
          </div>

        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
