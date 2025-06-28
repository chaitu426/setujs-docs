
import { useEffect, useState } from "react";
import Header from "@/components/Header";
import DocsSidebar from "@/components/DocsSidebar";
import DocsContent from "@/components/DocsContent";
import setu from 'setu.js';



const Docs = () => {
  const [activeSection, setActiveSection] = useState("introduction");

  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const { data } = await setu.get('https://jsonplaceholder.typicode.com/users', {
          timeout: 5000,
        });
        setUsers(data);
      } catch (error) {
        console.error('Failed to fetch users:', error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex flex-1">
        <p>{users}</p>
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
