
import { useState } from "react";
import Header from "@/components/Header";
import DocsSidebar from "@/components/DocsSidebar";
import DocsContent from "@/components/DocsContent";

const Docs = () => {
  const [activeSection, setActiveSection] = useState("introduction");

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex flex-1">
        <DocsSidebar 
          activeSection={activeSection} 
          onSectionChange={setActiveSection}
        />
        <DocsContent activeSection={activeSection} />
      </div>
    </div>
  );
};

export default Docs;
