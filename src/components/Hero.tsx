
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  const codeVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        ease: [0.25, 0.1, 0.25, 1],
        delay: 0.6
      }
    }
  };

  return (
    <section className="relative py-32 lg:py-40 overflow-hidden">
      <div className="container relative">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div variants={itemVariants} className="mb-8">
            <div className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-medium mb-8">
              Modern HTTP Client for JavaScript
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tighter mb-8 leading-none">
              Bridge the gap between{" "}
              <span className="text-muted-foreground">
                frontend & backend
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
              Setu means "bridge" in Sanskrit. A tiny, isomorphic HTTP client that provides 
              a consistent, modern API across all JavaScript environments.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button size="lg" asChild>
                <Link to="/docs">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button variant="outline" size="lg" asChild>
                <a href="https://www.npmjs.com/package/setu.js" target="_blank" rel="noopener noreferrer">
                  npm install setu.js
                </a>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            variants={codeVariants}
            className="relative"
          >
            <div className="bg-card border border-border rounded-lg p-8 text-left max-w-2xl mx-auto">
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
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
