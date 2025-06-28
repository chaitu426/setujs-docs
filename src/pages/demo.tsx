import React, { useEffect, useState } from 'react';
import setu from 'setu.js';

export default function UserFetcher() {
  const [users, setUsers] = useState([]);
  const [status, setStatus] = useState('loading'); // 'loading' | 'success' | 'error'

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const { data } = await setu.get('https://jsonplaceholder.typicode.com/users', {
          timeout: 5000,
        });
        setUsers(data);
        setStatus('success');
      } catch (error) {
        console.error('Failed to fetch users:', error);
        setStatus('error');
      }
    };

    fetchUsers();
  }, []);

  if (status === 'loading') return <div className="text-sm">Loading users...</div>;
  if (status === 'error') return <div className="text-sm text-red-500">Failed to load users.</div>;

  return (
    <div className="space-y-2 text-sm">
      <h2 className="font-semibold">Fetched Users</h2>
      <ul className="list-disc list-inside">
        {users.map(user => (
          <li key={user.id} className="text-muted-foreground">{user.name}</li>
        ))}
      </ul>
    </div>
  );
}
