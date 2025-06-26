
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { CheckCircle, Globe, Zap, Shield, Package, Copy, AlertTriangle, Info } from "lucide-react";
import { motion } from "framer-motion";

interface DocsContentProps {
  activeSection: string;
}

const DocsContent = ({ activeSection }: DocsContentProps) => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] }
    }
  };

  const renderContent = () => {
    switch (activeSection) {
      case "introduction":
        return (
          <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-8">
            <div>
              <h1 className="text-4xl font-bold mb-6 tracking-tight">Introduction</h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Setu means "bridge" in Sanskrit — A tiny, isomorphic HTTP client that bridges the gap between frontend and backend environments with a consistent, modern API.
              </p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                <Badge variant="secondary">npm version</Badge>
                <Badge variant="secondary">TypeScript Ready</Badge>
                <Badge variant="secondary">MIT License</Badge>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Globe className="h-5 w-5" />
                    Isomorphic
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Works seamlessly in both browser and Node.js environments with the same API.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Zap className="h-5 w-5" />
                    Zero Dependencies
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Lightweight with no external dependencies, keeping your bundle size minimal.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="h-5 w-5" />
                    TypeScript Support
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Full TypeScript support with type safety and excellent IntelliSense.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Package className="h-5 w-5" />
                    Tree Shakable
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Import only what you need with full tree-shaking support.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div>
              <h2 className="text-3xl font-semibold mb-6 tracking-tight">Why Setu.js?</h2>
              <div className="space-y-4">
                {[
                  "Fully isomorphic (runs in both browser & Node.js)",
                  "Supports all HTTP methods: GET, POST, PUT, PATCH, DELETE",
                  "Built-in retry mechanism (configurable delay and count)",
                  "Built-in timeout support",
                  "Upload and download progress tracking",
                  "Stream support in Node.js",
                  "Lightweight, tree-shakable, and zero-dependency"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-foreground" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        );

      case "installation":
        return (
          <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-8">
            <div>
              <h1 className="text-4xl font-bold mb-6 tracking-tight">Installation</h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Choose your preferred package manager to install Setu.js:
              </p>
            </div>

            <div className="grid gap-6">
              {[
                { manager: "npm", command: "npm install setu.js" },
                { manager: "yarn", command: "yarn add setu.js" },
                { manager: "pnpm", command: "pnpm add setu.js" },
                { manager: "bun", command: "bun add setu.js" }
              ].map((item) => (
                <Card key={item.manager}>
                  <CardHeader>
                    <CardTitle>{item.manager}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between bg-muted/30 p-4 rounded-lg border">
                      <code className="text-sm font-mono">{item.command}</code>
                      <Copy className="h-4 w-4 text-muted-foreground cursor-pointer hover:text-foreground" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Alert>
              <Info className="h-4 w-4" />
              <AlertDescription>
                Setu.js works out of the box with no additional configuration required. It automatically detects the environment and uses the appropriate HTTP implementation.
              </AlertDescription>
            </Alert>
          </motion.div>
        );

      case "quick-start":
        return (
          <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-8">
            <div>
              <h1 className="text-4xl font-bold mb-6 tracking-tight">Quick Start</h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Get up and running with Setu.js in minutes with these simple examples.
              </p>
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-semibold mb-4">Basic Usage</h2>
                <Card>
                  <CardContent className="p-6">
                    <pre className="bg-muted/30 p-6 rounded-lg overflow-x-auto text-sm border">
                      <code>{`import setu from 'setu.js';

// Simple GET request
const response = await setu.get('https://api.example.com/users');
console.log(response.data);

// POST request with JSON data
await setu.post('/api/users', {
  body: {
    name: 'John Doe',
    email: 'john@example.com'
  }
});`}</code>
                    </pre>
                  </CardContent>
                </Card>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">TypeScript Usage</h2>
                <Card>
                  <CardContent className="p-6">
                    <pre className="bg-muted/30 p-6 rounded-lg overflow-x-auto text-sm border">
                      <code>{`import setu from 'setu.js';

interface User {
  id: number;
  name: string;
  email: string;
}

// Type-safe GET request
const response = await setu.get<User[]>('https://api.example.com/users');
const users: User[] = response.data;

// Type-safe POST request
await setu.post<User>('/api/users', {
  body: {
    name: 'John Doe',
    email: 'john@example.com'
  }
});`}</code>
                    </pre>
                  </CardContent>
                </Card>
              </div>
            </div>

            <Alert>
              <CheckCircle className="h-4 w-4" />
              <AlertDescription>
                That's it! You're ready to start making HTTP requests with Setu.js. Check out the API Reference for more advanced features like progress tracking, retry logic, and streaming.
              </AlertDescription>
            </Alert>
          </motion.div>
        );

      case "core-concepts":
        return (
          <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-8">
            <div>
              <h1 className="text-4xl font-bold mb-6 tracking-tight">Core Concepts</h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Understanding the fundamental concepts behind Setu.js architecture and design.
              </p>
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-semibold mb-4">The Setu Object</h2>
                <p className="text-muted-foreground mb-4">
                  Setu provides a simple, consistent interface across all environments:
                </p>
                <Card>
                  <CardContent className="p-6">
                    <pre className="bg-muted/30 p-6 rounded-lg overflow-x-auto text-sm border">
                      <code>{`import setu from 'setu.js';

// All HTTP methods are available
setu.get(url, config)
setu.post(url, config)
setu.put(url, config)
setu.patch(url, config)
setu.delete(url, config)
setu.head(url, config)
setu.options(url, config)`}</code>
                    </pre>
                  </CardContent>
                </Card>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">Request Configuration</h2>
                <p className="text-muted-foreground mb-4">
                  Every request accepts a configuration object:
                </p>
                <Card>
                  <CardContent className="p-6">
                    <pre className="bg-muted/30 p-6 rounded-lg overflow-x-auto text-sm border">
                      <code>{`const config = {
  headers: { 'Authorization': 'Bearer token' },
  timeout: 5000,
  retries: 3,
  body: { data: 'value' },
  onUploadProgress: (progress) => console.log(progress),
  onDownloadProgress: (progress) => console.log(progress)
};

await setu.get('/api/data', config);`}</code>
                    </pre>
                  </CardContent>
                </Card>
              </div>
            </div>
          </motion.div>
        );

      case "api-reference":
        return (
          <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-8">
            <div>
              <h1 className="text-4xl font-bold mb-6 tracking-tight">API Reference</h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Complete reference for all Setu.js methods and configurations.
              </p>
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-semibold mb-4">Core Methods</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">setu.get(url, config?)</h3>
                    <p className="text-muted-foreground mb-4">Performs a GET request.</p>
                    <Card>
                      <CardContent className="p-6">
                        <pre className="bg-muted/30 p-6 rounded-lg overflow-x-auto text-sm border">
                          <code>{`const response = await setu.get('https://api.example.com/users');
console.log(response.data, response.status, response.headers);`}</code>
                        </pre>
                      </CardContent>
                    </Card>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2">setu.post(url, config?)</h3>
                    <p className="text-muted-foreground mb-4">Performs a POST request.</p>
                    <Card>
                      <CardContent className="p-6">
                        <pre className="bg-muted/30 p-6 rounded-lg overflow-x-auto text-sm border">
                          <code>{`const response = await setu.post('/api/users', {
  body: { name: 'John', email: 'john@example.com' }
});`}</code>
                        </pre>
                      </CardContent>
                    </Card>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2">setu.put(url, config?)</h3>
                    <p className="text-muted-foreground mb-4">Performs a PUT request.</p>
                    <Card>
                      <CardContent className="p-6">
                        <pre className="bg-muted/30 p-6 rounded-lg overflow-x-auto text-sm border">
                          <code>{`const response = await setu.put('/api/users/1', {
  body: { name: 'John Updated', email: 'john.updated@example.com' }
});`}</code>
                        </pre>
                      </CardContent>
                    </Card>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2">setu.patch(url, config?)</h3>
                    <p className="text-muted-foreground mb-4">Performs a PATCH request.</p>
                    <Card>
                      <CardContent className="p-6">
                        <pre className="bg-muted/30 p-6 rounded-lg overflow-x-auto text-sm border">
                          <code>{`const response = await setu.patch('/api/users/1', {
  body: { name: 'John Patched' }
});`}</code>
                        </pre>
                      </CardContent>
                    </Card>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2">setu.delete(url, config?)</h3>
                    <p className="text-muted-foreground mb-4">Performs a DELETE request.</p>
                    <Card>
                      <CardContent className="p-6">
                        <pre className="bg-muted/30 p-6 rounded-lg overflow-x-auto text-sm border">
                          <code>{`const response = await setu.delete('/api/users/1');`}</code>
                        </pre>
                      </CardContent>
                    </Card>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2">setu.head(url, config?)</h3>
                    <p className="text-muted-foreground mb-4">Performs a HEAD request.</p>
                    <Card>
                      <CardContent className="p-6">
                        <pre className="bg-muted/30 p-6 rounded-lg overflow-x-auto text-sm border">
                          <code>{`const response = await setu.head('/api/users/1');
console.log(response.headers);`}</code>
                        </pre>
                      </CardContent>
                    </Card>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2">setu.options(url, config?)</h3>
                    <p className="text-muted-foreground mb-4">Performs an OPTIONS request.</p>
                    <Card>
                      <CardContent className="p-6">
                        <pre className="bg-muted/30 p-6 rounded-lg overflow-x-auto text-sm border">
                          <code>{`const response = await setu.options('/api/users');
console.log(response.headers);`}</code>
                        </pre>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        );

      case "request-configuration":
        return (
          <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-8">
            <div>
              <h1 className="text-4xl font-bold mb-6 tracking-tight">Request Configuration</h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Configure your requests with headers, timeouts, retries, and more.
              </p>
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-semibold mb-4">Configuration Object</h2>
                <Card>
                  <CardContent className="p-6">
                    <pre className="bg-muted/30 p-6 rounded-lg overflow-x-auto text-sm border">
                      <code>{`interface RequestConfig {
  headers?: Record<string, string>;
  timeout?: number;
  retries?: number;
  retryDelay?: number;
  body?: any;
  responseType?: 'json' | 'text' | 'blob' | 'stream' | 'arrayBuffer';
  onUploadProgress?: (progress: ProgressEvent) => void;
  onDownloadProgress?: (progress: ProgressEvent) => void;
  validateStatus?: (status: number) => boolean;
  maxRedirects?: number;
  signal?: AbortSignal;
}`}</code>
                    </pre>
                  </CardContent>
                </Card>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">Headers</h2>
                <p className="text-muted-foreground mb-4">Set custom headers for your requests:</p>
                <Card>
                  <CardContent className="p-6">
                    <pre className="bg-muted/30 p-6 rounded-lg overflow-x-auto text-sm border">
                      <code>{`// Single request headers
await setu.get('/api/data', {
  headers: {
    'Authorization': 'Bearer your-token',
    'Content-Type': 'application/json',
    'X-Custom-Header': 'value'
  }
});

// Common headers for multiple requests
const commonHeaders = {
  'Authorization': 'Bearer your-token',
  'User-Agent': 'MyApp/1.0'
};

await setu.get('/api/users', { headers: commonHeaders });
await setu.get('/api/posts', { headers: commonHeaders });`}</code>
                    </pre>
                  </CardContent>
                </Card>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">Request Body</h2>
                <p className="text-muted-foreground mb-4">Setu.js automatically handles different body types:</p>
                <Card>
                  <CardContent className="p-6">
                    <pre className="bg-muted/30 p-6 rounded-lg overflow-x-auto text-sm border">
                      <code>{`// JSON object
await setu.post('/api/users', {
  body: { name: 'John', age: 30 }
});

// Form data
const formData = new FormData();
formData.append('name', 'John');
formData.append('file', fileInput.files[0]);

await setu.post('/api/upload', {
  body: formData
});

// Raw string
await setu.post('/api/data', {
  body: 'raw string data',
  headers: { 'Content-Type': 'text/plain' }
});`}</code>
                    </pre>
                  </CardContent>
                </Card>
              </div>
            </div>
          </motion.div>
        );

      case "response-handling":
        return (
          <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-8">
            <div>
              <h1 className="text-4xl font-bold mb-6 tracking-tight">Response Handling</h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Work with response data, status codes, and headers effectively.
              </p>
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-semibold mb-4">Response Object</h2>
                <p className="text-muted-foreground mb-4">Every successful request returns a response object:</p>
                <Card>
                  <CardContent className="p-6">
                    <pre className="bg-muted/30 p-6 rounded-lg overflow-x-auto text-sm border">
                      <code>{`interface Response<T = any> {
  data: T;           // Response data
  status: number;    // HTTP status code
  statusText: string; // HTTP status message
  headers: Headers;  // Response headers
  config: RequestConfig; // Request configuration used
}`}</code>
                    </pre>
                  </CardContent>
                </Card>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">Working with Responses</h2>
                <Card>
                  <CardContent className="p-6">
                    <pre className="bg-muted/30 p-6 rounded-lg overflow-x-auto text-sm border">
                      <code>{`const response = await setu.get('/api/users');

// Access response data
console.log(response.data);

// Check status
if (response.status === 200) {
  console.log('Success!');
}

// Access headers
console.log(response.headers.get('content-type'));`}</code>
                    </pre>
                  </CardContent>
                </Card>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">Response Types</h2>
                <p className="text-muted-foreground mb-4">Control how the response is parsed:</p>
                <Card>
                  <CardContent className="p-6">
                    <pre className="bg-muted/30 p-6 rounded-lg overflow-x-auto text-sm border">
                      <code>{`// JSON response (default)
const jsonResponse = await setu.get('/api/data');
console.log(jsonResponse.data); // Parsed JSON object

// Text response
const textResponse = await setu.get('/api/data', {
  responseType: 'text'
});
console.log(textResponse.data); // Raw text string

// Blob response (useful for files)
const blobResponse = await setu.get('/api/image.jpg', {
  responseType: 'blob'
});
const imageUrl = URL.createObjectURL(blobResponse.data);`}</code>
                    </pre>
                  </CardContent>
                </Card>
              </div>
            </div>
          </motion.div>
        );

      case "http-methods":
        return (
          <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-8">
            <div>
              <h1 className="text-4xl font-bold mb-6 tracking-tight">HTTP Methods</h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Complete guide to using all HTTP methods with Setu.js.
              </p>
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-semibold mb-4">GET Requests</h2>
                <p className="text-muted-foreground mb-4">Perfect for retrieving data:</p>
                <Card>
                  <CardContent className="p-6">
                    <pre className="bg-muted/30 p-6 rounded-lg overflow-x-auto text-sm border">
                      <code>{`// Basic GET
const users = await setu.get('/api/users');

// GET with query parameters
const filteredUsers = await setu.get('/api/users?role=admin&active=true');

// GET with headers
const protectedData = await setu.get('/api/protected', {
  headers: { 'Authorization': 'Bearer token' }
});`}</code>
                    </pre>
                  </CardContent>
                </Card>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">POST Requests</h2>
                <p className="text-muted-foreground mb-4">For creating new resources:</p>
                <Card>
                  <CardContent className="p-6">
                    <pre className="bg-muted/30 p-6 rounded-lg overflow-x-auto text-sm border">
                      <code>{`// Create a new user
const newUser = await setu.post('/api/users', {
  body: {
    name: 'Alice Johnson',
    email: 'alice@example.com',
    role: 'user'
  }
});

// Submit form data
const formData = new FormData();
formData.append('title', 'My Post');
formData.append('content', 'Post content here');

const newPost = await setu.post('/api/posts', {
  body: formData
});`}</code>
                    </pre>
                  </CardContent>
                </Card>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">PUT Requests</h2>
                <p className="text-muted-foreground mb-4">For updating entire resources:</p>
                <Card>
                  <CardContent className="p-6">
                    <pre className="bg-muted/30 p-6 rounded-lg overflow-x-auto text-sm border">
                      <code>{`// Update user completely
const updatedUser = await setu.put('/api/users/123', {
  body: {
    id: 123,
    name: 'Alice Johnson Updated',
    email: 'alice.updated@example.com',
    role: 'admin',
    active: true
  }
});`}</code>
                    </pre>
                  </CardContent>
                </Card>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">PATCH Requests</h2>
                <p className="text-muted-foreground mb-4">For partial updates:</p>
                <Card>
                  <CardContent className="p-6">
                    <pre className="bg-muted/30 p-6 rounded-lg overflow-x-auto text-sm border">
                      <code>{`// Update only specific fields
const patchedUser = await setu.patch('/api/users/123', {
  body: {
    name: 'Alice Smith', // Only update the name
    role: 'moderator'    // and role
  }
});`}</code>
                    </pre>
                  </CardContent>
                </Card>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">DELETE Requests</h2>
                <p className="text-muted-foreground mb-4">For removing resources:</p>
                <Card>
                  <CardContent className="p-6">
                    <pre className="bg-muted/30 p-6 rounded-lg overflow-x-auto text-sm border">
                      <code>{`// Delete a user
await setu.delete('/api/users/123');

// Delete with confirmation
await setu.delete('/api/users/123', {
  headers: { 'X-Confirm': 'true' }
});`}</code>
                    </pre>
                  </CardContent>
                </Card>
              </div>
            </div>
          </motion.div>
        );

      case "file-operations":
        return (
          <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-8">
            <div>
              <h1 className="text-4xl font-bold mb-6 tracking-tight">File Operations</h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Upload and download files with progress tracking.
              </p>
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-semibold mb-4">File Upload</h2>
                <p className="text-muted-foreground mb-4">Upload files with progress tracking:</p>
                <Card>
                  <CardContent className="p-6">
                    <pre className="bg-muted/30 p-6 rounded-lg overflow-x-auto text-sm border">
                      <code>{`const fileInput = document.getElementById('file');
const file = fileInput.files[0];

const formData = new FormData();
formData.append('file', file);

const uploadResponse = await setu.post('/api/upload', {
  body: formData,
  onUploadProgress: (progress) => {
    const percentage = Math.round((progress.loaded / progress.total) * 100);
    console.log(\`Upload progress: \${percentage}%\`);
  }
});`}</code>
                    </pre>
                  </CardContent>
                </Card>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">Multiple File Upload</h2>
                <Card>
                  <CardContent className="p-6">
                    <pre className="bg-muted/30 p-6 rounded-lg overflow-x-auto text-sm border">
                      <code>{`const fileInputs = document.getElementById('files');
const formData = new FormData();

// Add multiple files
for (let i = 0; i < fileInputs.files.length; i++) {
  formData.append('files', fileInputs.files[i]);
}

const uploadResponse = await setu.post('/api/upload-multiple', {
  body: formData,
  onUploadProgress: (progress) => {
    const percentage = Math.round((progress.loaded / progress.total) * 100);
    console.log(\`Uploading \${fileInputs.files.length} files: \${percentage}%\`);
  }
});`}</code>
                    </pre>
                  </CardContent>
                </Card>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">File Download</h2>
                <Card>
                  <CardContent className="p-6">
                    <pre className="bg-muted/30 p-6 rounded-lg overflow-x-auto text-sm border">
                      <code>{`// Download file with progress tracking
const downloadResponse = await setu.get('/api/download/large-file.zip', {
  responseType: 'blob',
  onDownloadProgress: (progress) => {
    if (progress.lengthComputable) {
      const percentage = Math.round((progress.loaded / progress.total) * 100);
      console.log(\`Download progress: \${percentage}%\`);
    }
  }
});

// Create download link
const blob = downloadResponse.data;
const url = window.URL.createObjectURL(blob);
const link = document.createElement('a');
link.href = url;
link.download = 'large-file.zip';
link.click();
window.URL.revokeObjectURL(url);`}</code>
                    </pre>
                  </CardContent>
                </Card>
              </div>
            </div>
          </motion.div>
        );

      case "progress-tracking":
        return (
          <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-8">
            <div>
              <h1 className="text-4xl font-bold mb-6 tracking-tight">Progress Tracking</h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Monitor upload and download progress for better user experience.
              </p>
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-semibold mb-4">Upload Progress</h2>
                <p className="text-muted-foreground mb-4">Track the progress of file uploads:</p>
                <Card>
                  <CardContent className="p-6">
                    <pre className="bg-muted/30 p-6 rounded-lg overflow-x-auto text-sm border">
                      <code>{`await setu.post('/api/upload', {
  body: formData,
  onUploadProgress: (progressEvent) => {
    const { loaded, total, lengthComputable } = progressEvent;
    
    if (lengthComputable) {
      const percentComplete = Math.round((loaded / total) * 100);
      console.log(\`Upload: \${loaded}/\${total} bytes (\${percentComplete}%)\`);
    }
  }
});`}</code>
                    </pre>
                  </CardContent>
                </Card>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">Download Progress</h2>
                <p className="text-muted-foreground mb-4">Track the progress of downloads:</p>
                <Card>
                  <CardContent className="p-6">
                    <pre className="bg-muted/30 p-6 rounded-lg overflow-x-auto text-sm border">
                      <code>{`await setu.get('/api/large-file.zip', {
  responseType: 'blob',
  onDownloadProgress: (progressEvent) => {
    const { loaded, total, lengthComputable } = progressEvent;
    
    if (lengthComputable) {
      const percentComplete = Math.round((loaded / total) * 100);
      console.log(\`Download: \${loaded}/\${total} bytes (\${percentComplete}%)\`);
    }
  }
});`}</code>
                    </pre>
                  </CardContent>
                </Card>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">Progress Event Object</h2>
                <Card>
                  <CardContent className="p-6">
                    <pre className="bg-muted/30 p-6 rounded-lg overflow-x-auto text-sm border">
                      <code>{`interface ProgressEvent {
  loaded: number;        // Bytes transferred so far
  total?: number;        // Total bytes to transfer
  lengthComputable: boolean; // Whether total is known
  timeStamp: number;     // Timestamp of the event
}`}</code>
                    </pre>
                  </CardContent>
                </Card>
              </div>
            </div>
          </motion.div>
        );

      case "streaming":
        return (
          <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-8">
            <div>
              <h1 className="text-4xl font-bold mb-6 tracking-tight">Streaming</h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Stream large files and data efficiently in Node.js environments.
              </p>
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-semibold mb-4">Node.js Streaming Support</h2>
                <p className="text-muted-foreground mb-4">Full streaming support in Node.js:</p>
                <Card>
                  <CardContent className="p-6">
                    <pre className="bg-muted/30 p-6 rounded-lg overflow-x-auto text-sm border">
                      <code>{`import fs from 'fs';
import { pipeline } from 'stream/promises';
import setu from 'setu.js';

// Download large file as stream
const response = await setu.get('https://example.com/large-file.zip', {
  responseType: 'stream'
});

// Pipe to file
await pipeline(
  response.data,
  fs.createWriteStream('./downloads/large-file.zip')
);`}</code>
                    </pre>
                  </CardContent>
                </Card>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">Streaming with Progress</h2>
                <Card>
                  <CardContent className="p-6">
                    <pre className="bg-muted/30 p-6 rounded-lg overflow-x-auto text-sm border">
                      <code>{`import fs from 'fs';
import { Transform, pipeline } from 'stream';

class ProgressTransform extends Transform {
  constructor(options = {}) {
    super(options);
    this.bytesProcessed = 0;
    this.totalBytes = options.totalBytes;
  }
  
  _transform(chunk, encoding, callback) {
    this.bytesProcessed += chunk.length;
    
    if (this.totalBytes) {
      const percentage = Math.round((this.bytesProcessed / this.totalBytes) * 100);
      console.log(\`Progress: \${percentage}%\`);
    }
    
    this.push(chunk);
    callback();
  }
}`}</code>
                    </pre>
                  </CardContent>
                </Card>
              </div>
            </div>
          </motion.div>
        );

      case "error-handling":
        return (
          <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-8">
            <div>
              <h1 className="text-4xl font-bold mb-6 tracking-tight">Error Handling</h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Comprehensive error handling strategies for robust applications.
              </p>
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-semibold mb-4">Basic Error Handling</h2>
                <Card>
                  <CardContent className="p-6">
                    <pre className="bg-muted/30 p-6 rounded-lg overflow-x-auto text-sm border">
                      <code>{`try {
  const response = await setu.get('/api/data');
  console.log(response.data);
} catch (error) {
  console.error('Request failed:', error.message);
  
  if (error.response) {
    // Server responded with error status
    console.error('Status:', error.response.status);
    console.error('Data:', error.response.data);
  } else if (error.request) {
    // Request was made but no response received
    console.error('No response received');
  }
}`}</code>
                    </pre>
                  </CardContent>
                </Card>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">Error Types</h2>
                <Card>
                  <CardContent className="p-6">
                    <pre className="bg-muted/30 p-6 rounded-lg overflow-x-auto text-sm border">
                      <code>{`interface SetuError extends Error {
  config?: RequestConfig;
  request?: any;
  response?: {
    status: number;
    statusText: string;
    data: any;
    headers: Headers;
  };
  code?: string;
}`}</code>
                    </pre>
                  </CardContent>
                </Card>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">Status Code Validation</h2>
                <Card>
                  <CardContent className="p-6">
                    <pre className="bg-muted/30 p-6 rounded-lg overflow-x-auto text-sm border">
                      <code>{`// Custom status validation
const response = await setu.get('/api/data', {
  validateStatus: (status) => {
    // Only treat 2xx and 3xx as success
    return status >= 200 && status < 400;
  }
});

// Accept specific error codes as valid
const response = await setu.get('/api/data', {
  validateStatus: (status) => {
    // Treat 404 as valid response
    return (status >= 200 && status < 300) || status === 404;
  }
});`}</code>
                    </pre>
                  </CardContent>
                </Card>
              </div>
            </div>

            <Alert>
              <AlertTriangle className="h-4 w-4" />
              <AlertDescription>
                Always handle errors appropriately in production applications. Use try-catch blocks for async/await or .catch() for promises.
              </AlertDescription>
            </Alert>
          </motion.div>
        );

      case "retry-logic":
        return (
          <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-8">
            <div>
              <h1 className="text-4xl font-bold mb-6 tracking-tight">Retry Logic</h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Built-in retry mechanisms for handling transient failures.
              </p>
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-semibold mb-4">Basic Retry Configuration</h2>
                <Card>
                  <CardContent className="p-6">
                    <pre className="bg-muted/30 p-6 rounded-lg overflow-x-auto text-sm border">
                      <code>{`// Retry failed requests automatically
const response = await setu.get('/api/unreliable-endpoint', {
  retries: 3,           // Retry up to 3 times
  retryDelay: 1000      // Wait 1 second between retries
});`}</code>
                    </pre>
                  </CardContent>
                </Card>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">Exponential Backoff</h2>
                <Card>
                  <CardContent className="p-6">
                    <pre className="bg-muted/30 p-6 rounded-lg overflow-x-auto text-sm border">
                      <code>{`async function makeRequestWithBackoff(url, config = {}) {
  const maxRetries = config.retries || 3;
  const baseDelay = config.retryDelay || 1000;
  
  for (let attempt = 0; attempt <= maxRetries; attempt++) {
    try {
      return await setu.get(url, { ...config, retries: 0 });
    } catch (error) {
      if (attempt === maxRetries) throw error;
      
      const delay = baseDelay * Math.pow(2, attempt);
      await new Promise(resolve => setTimeout(resolve, delay));
    }
  }
}`}</code>
                    </pre>
                  </CardContent>
                </Card>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">Conditional Retry</h2>
                <Card>
                  <CardContent className="p-6">
                    <pre className="bg-muted/30 p-6 rounded-lg overflow-x-auto text-sm border">
                      <code>{`// Retry only for specific error conditions
async function makeRequestWithConditionalRetry(url, config = {}) {
  const maxRetries = config.retries || 3;
  
  for (let attempt = 0; attempt <= maxRetries; attempt++) {
    try {
      return await setu.get(url, { ...config, retries: 0 });
    } catch (error) {
      // Only retry on network errors or 5xx server errors
      const shouldRetry = !error.response || 
        (error.response.status >= 500 && error.response.status < 600);
      
      if (!shouldRetry || attempt === maxRetries) {
        throw error;
      }
      
      const delay = 1000 * Math.pow(2, attempt);
      await new Promise(resolve => setTimeout(resolve, delay));
    }
  }
}`}</code>
                    </pre>
                  </CardContent>
                </Card>
              </div>
            </div>
          </motion.div>
        );

      case "timeouts":
        return (
          <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-8">
            <div>
              <h1 className="text-4xl font-bold mb-6 tracking-tight">Timeouts</h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Configure request timeouts to prevent hanging requests.
              </p>
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-semibold mb-4">Basic Timeout Configuration</h2>
                <Card>
                  <CardContent className="p-6">
                    <pre className="bg-muted/30 p-6 rounded-lg overflow-x-auto text-sm border">
                      <code>{`// Set timeout for a single request
const response = await setu.get('/api/data', {
  timeout: 5000 // 5 seconds
});

// Different timeouts for different operations
const fastResponse = await setu.get('/api/ping', {
  timeout: 1000 // 1 second for health checks
});

const slowResponse = await setu.get('/api/heavy-computation', {
  timeout: 30000 // 30 seconds for heavy operations
});`}</code>
                    </pre>
                  </CardContent>
                </Card>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">Timeout with AbortController</h2>
                <Card>
                  <CardContent className="p-6">
                    <pre className="bg-muted/30 p-6 rounded-lg overflow-x-auto text-sm border">
                      <code>{`// Manual timeout control
const controller = new AbortController();

// Cancel request after 5 seconds
setTimeout(() => controller.abort(), 5000);

try {
  const response = await setu.get('/api/data', {
    signal: controller.signal
  });
  console.log(response.data);
} catch (error) {
  if (error.name === 'AbortError') {
    console.log('Request was aborted');
  }
}`}</code>
                    </pre>
                  </CardContent>
                </Card>
              </div>
            </div>
          </motion.div>
        );

      case "interceptors":
        return (
          <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-8">
            <div>
              <h1 className="text-4xl font-bold mb-6 tracking-tight">Interceptors</h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Intercept requests and responses to add global functionality.
              </p>
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-semibold mb-4">Request Interceptors</h2>
                <p className="text-muted-foreground mb-4">Modify requests before they are sent:</p>
                <Card>
                  <CardContent className="p-6">
                    <pre className="bg-muted/30 p-6 rounded-lg overflow-x-auto text-sm border">
                      <code>{`// Add authentication header to all requests
function addAuthHeader(config) {
  const token = localStorage.getItem('authToken');
  if (token) {
    config.headers = {
      ...config.headers,
      'Authorization': \`Bearer \${token}\`
    };
  }
  return config;
}

// Use interceptor
const response = await setu.get('/api/protected', addAuthHeader({}));`}</code>
                    </pre>
                  </CardContent>
                </Card>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">Response Interceptors</h2>
                <Card>
                  <CardContent className="p-6">
                    <pre className="bg-muted/30 p-6 rounded-lg overflow-x-auto text-sm border">
                      <code>{`// Global response handler
function handleResponse(response) {
  // Log all responses
  console.log(\`Response: \${response.status} - \${response.config.url}\`);
  
  // Handle specific status codes
  if (response.status === 401) {
    // Redirect to login
    window.location.href = '/login';
  }
  
  return response;
}

// Wrapper function for all requests
async function makeRequest(method, url, config = {}) {
  try {
    const response = await setu[method](url, config);
    return handleResponse(response);
  } catch (error) {
    console.error('Request failed:', error);
    throw error;
  }
}`}</code>
                    </pre>
                  </CardContent>
                </Card>
              </div>
            </div>
          </motion.div>
        );

      case "typescript-support":
        return (
          <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-8">
            <div>
              <h1 className="text-4xl font-bold mb-6 tracking-tight">TypeScript Support</h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Full TypeScript support with type safety and excellent IntelliSense.
              </p>
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-semibold mb-4">Type-Safe Requests</h2>
                <Card>
                  <CardContent className="p-6">
                    <pre className="bg-muted/30 p-6 rounded-lg overflow-x-auto text-sm border">
                      <code>{`interface User {
  id: number;
  name: string;
  email: string;
}

// Type-safe GET request
const response = await setu.get<User[]>('/api/users');
const users: User[] = response.data; // Fully typed

// Type-safe POST request
const newUser = await setu.post<User>('/api/users', {
  body: {
    name: 'John Doe',
    email: 'john@example.com'
  }
});`}</code>
                    </pre>
                  </CardContent>
                </Card>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">Generic Response Types</h2>
                <Card>
                  <CardContent className="p-6">
                    <pre className="bg-muted/30 p-6 rounded-lg overflow-x-auto text-sm border">
                      <code>{`interface ApiResponse<T> {
  data: T;
  message: string;
  status: 'success' | 'error';
}

interface User {
  id: number;
  name: string;
  email: string;
}

// Type-safe API response
const response = await setu.get<ApiResponse<User[]>>('/api/users');
const users = response.data.data; // Fully typed User[]
const message = response.data.message; // string
const status = response.data.status; // 'success' | 'error'`}</code>
                    </pre>
                  </CardContent>
                </Card>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">Request Configuration Types</h2>
                <Card>
                  <CardContent className="p-6">
                    <pre className="bg-muted/30 p-6 rounded-lg overflow-x-auto text-sm border">
                      <code>{`interface RequestConfig {
  headers?: Record<string, string>;
  timeout?: number;
  retries?: number;
  retryDelay?: number;
  body?: any;
  responseType?: 'json' | 'text' | 'blob' | 'stream' | 'arrayBuffer';
  onUploadProgress?: (progress: ProgressEvent) => void;
  onDownloadProgress?: (progress: ProgressEvent) => void;
  validateStatus?: (status: number) => boolean;
  maxRedirects?: number;
  signal?: AbortSignal;
}

// Fully typed configuration
const config: RequestConfig = {
  headers: { 'Content-Type': 'application/json' },
  timeout: 5000,
  retries: 3
};

const response = await setu.get<User>('/api/user/1', config);`}</code>
                    </pre>
                  </CardContent>
                </Card>
              </div>
            </div>
          </motion.div>
        );

      case "browser-vs-nodejs":
        return (
          <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-8">
            <div>
              <h1 className="text-4xl font-bold mb-6 tracking-tight">Browser vs Node.js</h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Understanding the differences and capabilities in different environments.
              </p>
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-semibold mb-4">Environment Detection</h2>
                <p className="text-muted-foreground mb-4">Setu.js automatically detects the environment and uses the appropriate HTTP implementation.</p>
                <Card>
                  <CardContent className="p-6">
                    <pre className="bg-muted/30 p-6 rounded-lg overflow-x-auto text-sm border">
                      <code>{`// Same code works in both environments
import setu from 'setu.js';

// Browser: Uses fetch API
// Node.js: Uses http/https modules
const response = await setu.get('/api/data');`}</code>
                    </pre>
                  </CardContent>
                </Card>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">Browser-Specific Features</h2>
                <Card>
                  <CardContent className="p-6">
                    <pre className="bg-muted/30 p-6 rounded-lg overflow-x-auto text-sm border">
                      <code>{`// File uploads with progress
const fileInput = document.getElementById('file');
const formData = new FormData();
formData.append('file', fileInput.files[0]);

await setu.post('/api/upload', {
  body: formData,
  onUploadProgress: (progress) => {
    console.log(\`Upload: \${progress.loaded}/\${progress.total}\`);
  }
});

// Blob downloads
const response = await setu.get('/api/image.jpg', {
  responseType: 'blob'
});
const imageUrl = URL.createObjectURL(response.data);`}</code>
                    </pre>
                  </CardContent>
                </Card>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">Node.js-Specific Features</h2>
                <Card>
                  <CardContent className="p-6">
                    <pre className="bg-muted/30 p-6 rounded-lg overflow-x-auto text-sm border">
                      <code>{`import fs from 'fs';
import { pipeline } from 'stream/promises';

// Streaming support
const response = await setu.get('https://example.com/large-file.zip', {
  responseType: 'stream'
});

await pipeline(
  response.data,
  fs.createWriteStream('./large-file.zip')
);

// File system operations
const fileStream = fs.createReadStream('./upload.txt');
await setu.post('/api/upload', {
  body: fileStream,
  headers: { 'Content-Type': 'text/plain' }
});`}</code>
                    </pre>
                  </CardContent>
                </Card>
              </div>
            </div>
          </motion.div>
        );

      case "advanced-usage":
        return (
          <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-8">
            <div>
              <h1 className="text-4xl font-bold mb-6 tracking-tight">Advanced Usage</h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Advanced patterns and techniques for power users.
              </p>
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-semibold mb-4">Custom Client Creation</h2>
                <Card>
                  <CardContent className="p-6">
                    <pre className="bg-muted/30 p-6 rounded-lg overflow-x-auto text-sm border">
                      <code>{`class ApiClient {
  constructor(baseURL, defaultConfig = {}) {
    this.baseURL = baseURL;
    this.defaultConfig = defaultConfig;
  }
  
  async request(method, url, config = {}) {
    const fullUrl = url.startsWith('http') ? url : \`\${this.baseURL}\${url}\`;
    const mergedConfig = { ...this.defaultConfig, ...config };
    return await setu[method](fullUrl, mergedConfig);
  }
  
  get(url, config) { return this.request('get', url, config); }
  post(url, config) { return this.request('post', url, config); }
}`}</code>
                    </pre>
                  </CardContent>
                </Card>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">Request/Response Middleware</h2>
                <Card>
                  <CardContent className="p-6">
                    <pre className="bg-muted/30 p-6 rounded-lg overflow-x-auto text-sm border">
                      <code>{`class SetuWithMiddleware {
  constructor() {
    this.requestMiddleware = [];
    this.responseMiddleware = [];
  }
  
  addRequestMiddleware(fn) {
    this.requestMiddleware.push(fn);
  }
  
  addResponseMiddleware(fn) {
    this.responseMiddleware.push(fn);
  }
  
  async request(method, url, config = {}) {
    // Apply request middleware
    let finalConfig = config;
    for (const middleware of this.requestMiddleware) {
      finalConfig = await middleware(finalConfig);
    }
    
    // Make request
    let response = await setu[method](url, finalConfig);
    
    // Apply response middleware
    for (const middleware of this.responseMiddleware) {
      response = await middleware(response);
    }
    
    return response;
  }
}`}</code>
                    </pre>
                  </CardContent>
                </Card>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">Request Caching</h2>
                <Card>
                  <CardContent className="p-6">
                    <pre className="bg-muted/30 p-6 rounded-lg overflow-x-auto text-sm border">
                      <code>{`class CachedApiClient {
  constructor() {
    this.cache = new Map();
    this.cacheTTL = 5 * 60 * 1000; // 5 minutes
  }
  
  getCacheKey(method, url, config) {
    return \`\${method}:\${url}:\${JSON.stringify(config)}\`;
  }
  
  async get(url, config = {}) {
    const cacheKey = this.getCacheKey('get', url, config);
    const cached = this.cache.get(cacheKey);
    
    if (cached && Date.now() - cached.timestamp < this.cacheTTL) {
      return cached.response;
    }
    
    const response = await setu.get(url, config);
    this.cache.set(cacheKey, {
      response,
      timestamp: Date.now()
    });
    
    return response;
  }
}`}</code>
                    </pre>
                  </CardContent>
                </Card>
              </div>
            </div>
          </motion.div>
        );

      case "best-practices":
        return (
          <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-8">
            <div>
              <h1 className="text-4xl font-bold mb-6 tracking-tight">Best Practices</h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Recommended patterns and practices for using Setu.js effectively.
              </p>
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-semibold mb-4">Error Handling</h2>
                <p className="text-muted-foreground mb-4">Always handle errors appropriately:</p>
                <Card>
                  <CardContent className="p-6">
                    <pre className="bg-muted/30 p-6 rounded-lg overflow-x-auto text-sm border">
                      <code>{`// Good: Proper error handling
try {
  const response = await setu.get('/api/data');
  return response.data;
} catch (error) {
  console.error('API Error:', error.message);
  throw error;
}

// Bad: No error handling
const response = await setu.get('/api/data');
return response.data; // Could throw unhandled errors`}</code>
                    </pre>
                  </CardContent>
                </Card>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">Request Configuration</h2>
                <Card>
                  <CardContent className="p-6">
                    <pre className="bg-muted/30 p-6 rounded-lg overflow-x-auto text-sm border">
                      <code>{`// Good: Explicit configuration
const config = {
  timeout: 10000,
  retries: 3,
  headers: { 'Content-Type': 'application/json' }
};

// Good: Environment-specific timeouts
const timeout = process.env.NODE_ENV === 'development' ? 30000 : 10000;

// Bad: Magic numbers
await setu.get('/api/data', { timeout: 5000 });`}</code>
                    </pre>
                  </CardContent>
                </Card>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">TypeScript Usage</h2>
                <Card>
                  <CardContent className="p-6">
                    <pre className="bg-muted/30 p-6 rounded-lg overflow-x-auto text-sm border">
                      <code>{`// Good: Define interfaces
interface User {
  id: number;
  name: string;
  email: string;
}

const users = await setu.get<User[]>('/api/users');

// Good: Use generic types
interface ApiResponse<T> {
  data: T;
  status: string;
}

const response = await setu.get<ApiResponse<User[]>>('/api/users');`}</code>
                    </pre>
                  </CardContent>
                </Card>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">Performance Optimization</h2>
                <Card>
                  <CardContent className="p-6">
                    <pre className="bg-muted/30 p-6 rounded-lg overflow-x-auto text-sm border">
                      <code>{`// Good: Use appropriate response types
const textData = await setu.get('/api/text', {
  responseType: 'text'
});

// Good: Implement caching for repeated requests
const cache = new Map();
const getCachedData = async (url) => {
  if (cache.has(url)) {
    return cache.get(url);
  }
  const response = await setu.get(url);
  cache.set(url, response.data);
  return response.data;
};

// Good: Use streams for large files
const response = await setu.get('/api/large-file', {
  responseType: 'stream'
});`}</code>
                    </pre>
                  </CardContent>
                </Card>
              </div>
            </div>
          </motion.div>
        );

      case "troubleshooting":
        return (
          <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-8">
            <div>
              <h1 className="text-4xl font-bold mb-6 tracking-tight">Troubleshooting</h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Common issues and their solutions.
              </p>
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-semibold mb-4">Common Issues</h2>
                
                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Network Errors</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">
                        If you're experiencing network errors, check your internet connection and ensure the API endpoint is accessible.
                      </p>
                      <pre className="bg-muted/30 p-4 rounded-lg text-sm border">
                        <code>{`// Check if the endpoint is reachable
try {
  await setu.get('/api/health');
} catch (error) {
  console.error('Endpoint not reachable:', error.message);
}`}</code>
                      </pre>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>CORS Issues</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">
                        CORS errors occur when making cross-origin requests. Ensure your server has proper CORS headers configured.
                      </p>
                      <pre className="bg-muted/30 p-4 rounded-lg text-sm border">
                        <code>{`// Server-side CORS configuration (Express.js example)
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));`}</code>
                      </pre>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Timeout Issues</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">
                        If requests are timing out, try increasing the timeout value or implementing retry logic.
                      </p>
                      <pre className="bg-muted/30 p-4 rounded-lg text-sm border">
                        <code>{`// Increase timeout for slow endpoints
const response = await setu.get('/api/slow-endpoint', {
  timeout: 30000, // 30 seconds
  retries: 2
});`}</code>
                      </pre>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>TypeScript Errors</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">
                        Ensure you have proper type definitions and are using correct generic types.
                      </p>
                      <pre className="bg-muted/30 p-4 rounded-lg text-sm border">
                        <code>{`// Define proper interfaces
interface ApiResponse<T> {
  data: T;
  status: number;
  message: string;
}

const response = await setu.get<ApiResponse<User[]>>('/api/users');`}</code>
                      </pre>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">Debugging Tips</h2>
                <Card>
                  <CardContent className="p-6">
                    <pre className="bg-muted/30 p-6 rounded-lg overflow-x-auto text-sm border">
                      <code>{`// Enable request/response logging
async function debugRequest(method, url, config = {}) {
  console.log(\`Making \${method.toUpperCase()} request to \${url}\`, config);
  
  try {
    const response = await setu[method](url, config);
    console.log(\`Response from \${url}:\`, response.status, response.data);
    return response;
  } catch (error) {
    console.error(\`Error from \${url}:\`, error.message);
    throw error;
  }
}

// Use debug wrapper
const response = await debugRequest('get', '/api/users');`}</code>
                    </pre>
                  </CardContent>
                </Card>
              </div>
            </div>
          </motion.div>
        );

      default:
        return (
          <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-8">
            <div>
              <h1 className="text-4xl font-bold mb-6 tracking-tight">
                {activeSection.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                This section is under construction. Please check back later for detailed documentation.
              </p>
            </div>
          </motion.div>
        );
    }
  };

  return (
    <div className="flex-1 px-8 py-8 min-h-screen">
      <div className="max-w-4xl mx-auto">
        {renderContent()}
      </div>
    </div>
  );
};

export default DocsContent;
