
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Github, Sparkles } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { easeInOut } from 'framer-motion';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease:easeInOut
      }
    }
  };

  const codeVariants = {
    hidden: { y: 50, opacity: 0, scale: 0.95 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.2,
        ease: easeInOut,
        delay: 0.8
      }
    }
  };

  const floatingVariants = {
    animate: {
      y: [-5, 5, -5],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const techs = [
    "React",
    "Next.js",
    "Node.js",
    "Svelte",
    "Vue"
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % techs.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [techs.length]);

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden bg-gradient-to-b from-background via-background to-muted/20">
      {/* Subtle background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-foreground/[0.03] blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-foreground/[0.03] blur-3xl" />
      </div>

      <div className="container relative">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-5xl mx-auto text-center"
        >
          
          <motion.div variants={itemVariants} className="mb-4">

            
          <motion.div
      tabIndex={0}
      whileHover={{ scale: 1.01 }}
      whileFocus={{ scale: 1.01 }}
      transition={{ type: "spring", stiffness: 250, damping: 20 }}
      className="inline-flex items-center gap-2 mb-8 rounded-full border border-border bg-background/60 px-3 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring transition-all"
    >
      <span className="text-foreground/70 font-medium">Works with</span>
      <AnimatePresence mode="wait">
        <motion.span
          key={techs[index]}
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -4 }}
          transition={{ duration: 0.3 }}
          className="text-foreground font-semibold min-w-[80px] text-sm"
        >
          {techs[index]}
        </motion.span>
      </AnimatePresence>
    </motion.div>



            
            <h1 className="text-5xl lg:text-8xl font-bold tracking-tighter mb-8 leading-[0.9] bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent">
              Bridge the gap between{" "}
              <span className="text-muted-foreground/80">
                frontend & backend
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed font-light">
              Setu means "bridge" in Sanskrit. A tiny, isomorphic HTTP client that provides 
              a consistent, modern API across all JavaScript environments.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-20"
          >
            <motion.div 
              whileHover={{ scale: 1.02, y: -2 }} 
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              <Button size="lg" className="h-12 px-8 text-base font-medium shadow-lg shadow-foreground/10" asChild>
                <Link to="/docs">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </motion.div>
            
            <motion.div 
              whileHover={{ scale: 1.02, y: -2 }} 
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              <Button variant="outline" size="lg" className="h-12 px-8 text-base font-medium border-border/50 bg-background/50 backdrop-blur-sm hover:bg-muted/50" asChild>
                <a href="https://www.npmjs.com/package/setu.js" target="_blank" rel="noopener noreferrer">
                  <Download className="mr-2 h-5 w-5" />
                  npm install setu.js
                </a>
              </Button>
            </motion.div>
            
            <motion.div 
              whileHover={{ scale: 1.02, y: -2 }} 
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              <Button variant="ghost" size="lg" className="h-12 px-8 text-base font-medium" asChild>
                <a href="https://github.com/chaitu426/setu.js" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-5 w-5" />
                  GitHub
                </a>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            variants={codeVariants}
            className="relative"
          >
            <motion.div
              
              animate="animate"
              className="relative max-w-4xl mx-auto"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-foreground/5 via-foreground/10 to-foreground/5 rounded-xl blur-xl" />
              <div className="relative bg-card/80 backdrop-blur-sm border border-border/50 rounded-xl p-8 shadow-2xl shadow-foreground/5">
                <div className="flex items-center gap-2 mb-6 text-sm text-muted-foreground">
                  <div className="flex gap-1.5">
                    <div className="h-3 w-3 rounded-full bg-red-500/20 border border-red-500/30" />
                    <div className="h-3 w-3 rounded-full bg-yellow-500/20 border border-yellow-500/30" />
                    <div className="h-3 w-3 rounded-full bg-green-500/20 border border-green-500/30" />
                  </div>
                  <span className="ml-2 font-medium">setu-example.js</span>
                </div>
                <pre className="text-left text-sm  lg:text-base leading-relaxed overflow-x-auto">
                  <code className="text-foreground/90 font-mono">
{`  import setu from 'setu.js';

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

          {/* Feature highlights */}
          <motion.div
            variants={itemVariants}
            className="mt-24 grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto"
          >
            {[
              { title: "Zero Dependencies", desc: "Lightweight & fast" },
              { title: "TypeScript Ready", desc: "Full type safety" },
              { title: "Isomorphic", desc: "Browser & Node.js" },
              { title: "Modern API", desc: "Promise-based" }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                className="text-center p-4"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
