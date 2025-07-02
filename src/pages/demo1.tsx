import { useEffect, useState } from 'react';
import setu from 'setu.js';

export default function UserFetcher() {
  const [users, setUsers] = useState([]);
  const [status, setStatus] = useState('loading'); // 'loading' | 'success' | 'error'
  const [postStatus, setPostStatus] = useState<'idle' | 'success' | 'error'>('idle');

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

  const createUser = async () => {
    try {
      const res = await setu.post(
        'https://jsonplaceholder.typicode.com/users', 
    {
        body: JSON.stringify({
          name: 'Chaitanya Setu',
          email: 'setu@example.com',
          role: 'developer',
        }),
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer your-token',
        },
        timeout: 3000,
        retry: 2,
        retryDelay: 1000,
        validateStatus: status => status >= 200 && status < 300
    });

      console.log('Created user:', res.data);
      setPostStatus('success');
    } catch (err) {
      console.error('POST request failed:', err);
      setPostStatus('error');
    }
  };

  return (
    <div className="space-y-4 text-sm">
      <div>
        <h2 className="font-semibold mb-2">Fetched Users</h2>
        {status === 'loading' && <p>Loading users...</p>}
        {status === 'error' && <p className="text-red-500">Failed to load users.</p>}
        <ul className="list-disc list-inside text-muted-foreground">
          {users.map(user => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      </div>

      <div>
        <button
          onClick={createUser}
          className="px-4 py-1.5 bg-primary text-white rounded-md hover:bg-primary/90 transition"
        >
          Create User via POST
        </button>
        {postStatus === 'success' && <p className="text-green-500 mt-2">User created successfully!</p>}
        {postStatus === 'error' && <p className="text-red-500 mt-2">Failed to create user.</p>}
      </div>
    </div>
  );
}
