import React from 'react';
import setu from "setu.js";

const DemoPage: React.FC = (): JSX.Element => {
    const [msg, setMsg] = React.useState<string>("");
    const [input, setInput] = React.useState<string>("");
    const [error, setError] = React.useState<string>("");
    setu.defaults={
    baseURL: "http://localhost:3000",
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
    timeout: 5000, // Set a timeout of 5 seconds
    };
    const onclick = async () => {
        try {
            const res = await setu.post("http://localhost:3000/api/data", {
                body: {
                    data: input
                }
                
            });
            const response = res.data
            console.log('Response:', response.message);
            setMsg(response.recived);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'An error occurred');
            console.error('Error:', err);
        }
    };

    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <input
                type="text"
                onChange={(e) => setInput(e.target.value)}
                placeholder="Enter data"
            />
            <button
                onClick={onclick}
                style={{ padding: '10px 20px', fontSize: '16px', marginLeft: '10px' }}
            >
                Fetch Data
            </button>
            <div style={{ marginTop: '20px', fontSize: '18px', color: '#333', whiteSpace: 'pre-wrap' }}>
                {msg ? msg : "Click the button to fetch data"}
            </div>
            {error && (
                <div style={{ marginTop: '10px', fontSize: '16px', color: 'red' }}>
                    {error}
                </div>
            )}
        </div>
    );
};

export default DemoPage;
