
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Zap, Globe, Shield, Package } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Hero = () => {
  const features = [
    { icon: Globe, text: "Isomorphic" },
    { icon: Zap, text: "Zero Dependencies" },
    { icon: Shield, text: "TypeScript Ready" },
    { icon: Package, text: "Tree Shakable" }
  ];

  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-purple-50/30" />
      
      <div className="container relative">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="secondary" className="mb-6">
              Modern HTTP Client for JavaScript
            </Badge>
            
            <h1 className="text-4xl lg:text-6xl font-bold tracking-tight mb-6">
              Bridge the gap between{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                frontend & backend
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Setu means "bridge" in Sanskrit. A tiny, isomorphic HTTP client that provides 
              a consistent, modern API across all JavaScript environments.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <Button size="lg" asChild>
              <Link to="/docs">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            
            <Button variant="outline" size="lg" asChild>
              <a href="https://www.npmjs.com/package/setu.js" target="_blank" rel="noopener noreferrer">
                npm install setu.js
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-6 mb-16"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.text}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                className="flex items-center gap-2 px-4 py-2 rounded-full border bg-background/60 backdrop-blur"
              >
                <feature.icon className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">{feature.text}</span>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="bg-card border rounded-lg p-6 text-left max-w-2xl mx-auto"
          >
            <pre className="text-sm overflow-x-auto">
              <code className="text-muted-foreground">
{`import setu from 'setu.js';

// Simple GET request
const response = await setu.get('/api/users');
console.log(response.data);

// POST with progress tracking
await setu.post('/api/upload', {
  body: formData,
  onUploadProgress: (progress) => {
    console.log(\`\${progress.loaded}/\${progress.total}\`);
  }
});`}
              </code>
            </pre>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
