import { useEffect, useState } from "react";
import Header from "@/components/Header";
import DocsSidebar from "@/components/DocsSidebar";
import DocsContent from "@/components/DocsContent";
import setu from 'setu.js';

const Docs = () => {
  const [activeSection, setActiveSection] = useState("introduction");
  const [users, setUsers] = useState<{ id: number; name: string; email: string }[]>([]);

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
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-2">Fetched Users</h2>
          <ul className="list-disc pl-5 space-y-1">
            {users.map((user) => (
              <li key={user.id}>{user.name} ({user.email})</li>
            ))}
          </ul>
        </div>
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
