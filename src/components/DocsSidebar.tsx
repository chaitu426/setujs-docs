
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { 
  Book, Code, Settings, Zap, FileText, Upload, Download, 
  AlertCircle, RotateCcw, Clock, Filter, Globe, Wrench, 
  Lightbulb, HelpCircle, Play 
} from "lucide-react";

interface DocsSidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const DocsSidebar = ({ activeSection, onSectionChange }: DocsSidebarProps) => {
  const sections = [
    {
      title: "Getting Started",
      items: [
        { id: "introduction", title: "Introduction", icon: Book },
        { id: "installation", title: "Installation", icon: Download },
        { id: "quick-start", title: "Quick Start", icon: Play },
        { id: "core-concepts", title: "Core Concepts", icon: Lightbulb },
      ]
    },
    {
      title: "API Reference",
      items: [
        { id: "api-reference", title: "Core Methods", icon: Code },
        { id: "request-configuration", title: "Request Config", icon: Settings },
        { id: "response-handling", title: "Response Handling", icon: FileText },
        { id: "http-methods", title: "HTTP Methods", icon: Globe },
      ]
    },
    {
      title: "Features",
      items: [
        { id: "file-operations", title: "File Operations", icon: Upload },
        { id: "progress-tracking", title: "Progress Tracking", icon: Download },
        { id: "streaming", title: "Streaming", icon: Zap },
        { id: "retry-logic", title: "Retry Logic", icon: RotateCcw },
        { id: "timeouts", title: "Timeouts", icon: Clock },
      ]
    },
    {
      title: "Diff Technologies",
      items: [
        { id: "interceptors", title: "Next.js", icon: Filter },
        { id: "typescript-support", title: "Node.js(Express)", icon: Code },
        { id: "browser-vs-nodejs", title: "Vue 3 (with Vite)", icon: Globe },
        { id: "advanced-usage", title: "React Native ", icon: Wrench },
        { id: "best-practices", title: "SvelteKit", icon: Lightbulb },
        // { id: "troubleshooting", title: "Troubleshooting", icon: HelpCircle },

      ]
    }
  ];

  return (
    <div className="w-64 border-r bg-background">
      <div className="p-6 border-b">
        <h2 className="text-lg font-semibold tracking-tight">Documentation</h2>
      </div>
      
      <ScrollArea className="h-[calc(100vh-8rem)] px-4">
        <div className="space-y-8 py-6">
          {sections.map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4 px-2">
                {section.title}
              </h3>
              <div className="space-y-1">
                {section.items.map((item) => (
                  <motion.button
                    key={item.id}
                    whileHover={{ x: 2 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => onSectionChange(item.id)}
                    className={cn(
                      "w-full flex items-center gap-3 px-3 py-2.5 text-sm rounded-lg transition-all text-left",
                      activeSection === item.id
                        ? "bg-muted text-foreground font-medium"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                    )}
                  >
                    <item.icon className="h-4 w-4" />
                    {item.title}
                  </motion.button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default DocsSidebar;
