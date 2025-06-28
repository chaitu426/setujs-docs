
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { CheckCircle, Globe, Zap, Shield, Package, Copy, AlertTriangle, Info } from "lucide-react";
import { motion } from "framer-motion";
import { easeInOut } from 'framer-motion';

interface DocsContentProps {
  activeSection: string;
}

const DocsContent = ({ activeSection }: DocsContentProps) => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: easeInOut } // Valid easing function
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
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-8"
            >
              <div>
                <h1 className="text-4xl font-bold mb-6 tracking-tight">Core Concepts</h1>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Understanding the fundamental concepts behind Setu.js architecture and design.
                </p>
              </div>
        
              <div className="space-y-8">
                {/* Setu Object */}
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
        setu.delete(url, config)`}</code>
                      </pre>
                    </CardContent>
                  </Card>
                </div>
        
                {/* Defaults Configuration */}
                <div>
                  <h2 className="text-2xl font-semibold mb-4">Defaults Configuration</h2>
                  <p className="text-muted-foreground mb-4">
                    Set default configurations globally for all requests:
                  </p>
                  <Card>
                    <CardContent className="p-6">
                      <pre className="bg-muted/30 p-6 rounded-lg overflow-x-auto text-sm border">
                        <code>{`setu.defaults = {
          baseURL: "http://localhost:3000",
          headers: {
            'Content-Type': 'application/json',
          },
          timeout: 5000, // Set a timeout of 5 seconds
        };`}</code>
                      </pre>
                    </CardContent>
                  </Card>
                </div>
        
                {/* Request Configuration */}
                <div>
                  <h2 className="text-2xl font-semibold mb-4">Request Configuration</h2>
                  <p className="text-muted-foreground mb-4">
                    Each request can be customized with advanced configuration:
                  </p>
                  <Card>
                    <CardContent className="p-6">
                      <pre className="bg-muted/30 p-6 rounded-lg overflow-x-auto text-sm border">
                        <code>{`const config = {
          headers: { 'Authorization': 'Bearer token' },
          timeout: 5000,
          retries: 3,
          body: { data: 'value' }
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
console.log(response.data, response.status);`}</code>
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
  status: number;
  headers: Record<string, string>;
  data: T;
  filename?: string;
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
                      <code>{`
const formData = new FormData();
formData.append('metadata', JSON.stringify({ userId: 123, description: 'Test file' }));
formData.append('file', file);

const uploadResponse = await setu.post('/api/upload', {
  body: formData,
  onUploadProgress: (progress) => {
      console.log('Upload progress: \${progress.percent.toFixed(2)}%');
        }
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
  onDownloadProgress: ({ percent }) => {
      console.log('Downloading: \${percent.toFixed(2)}%');
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
  onUploadProgress: (progress) => {
      console.log('Upload progress: \${progress.percent.toFixed(2)}%');
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
  onDownloadProgress: ({ percent }) => {
      console.log('Downloading: \${percent.toFixed(2)}%');
        }
});`}</code>
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
                <h2 className="text-2xl font-semibold mb-4">Downloading a File as a Stream</h2>
                <p className="text-muted-foreground mb-4">Full Downloading support in Node.js:</p>
                <Card>
                  <CardContent className="p-6">
                    <pre className="bg-muted/30 p-6 rounded-lg overflow-x-auto text-sm border">
                      <code>{`import fs from 'fs';
import { pipeline } from 'stream/promises';
import setu from 'setu'; // Your custom HTTP client

const downloadFile = async () => {
  const fileUrl = 'https://example.com/sample.mp4';
  const savePath = './sample.mp4';

  const res = await setu.get(fileUrl, {
    responseType: 'stream',
    onDownloadProgress: (progress) => {
      process.stdout.write('\rDownloaded: \${(progress.loaded / 1024).toFixed(1)} KB');
    },
  });

  await pipeline(res.data, fs.createWriteStream(savePath));
  console.log('\nDownload complete:', savePath);
};

downloadFile().catch((err) => console.error(' Error:', err.message));
`}</code>
                    </pre>
                  </CardContent>
                </Card>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">Uploading a File Using Stream and FormData</h2>
                <p className="text-muted-foreground mb-4">Full Uploading support in Node.js:</p>
                <Card>
                  <CardContent className="p-6">
                    <pre className="bg-muted/30 p-6 rounded-lg overflow-x-auto text-sm border">
                      <code>{`import fs from 'fs';
import FormData from 'form-data';
import setu from 'setu'; // Your custom HTTP client

const uploadFile = async () => {
  const uploadUrl = 'https://httpbin.org/post'; // For demo/testing purpose
  const filePath = './sample.mp4';

  const form = new FormData();
  form.append('file', fs.createReadStream(filePath));

  let uploaded = 0;
  form.on('data', (chunk) => {
    uploaded += chunk.length;
    process.stdout.write('\rUploaded: \${(uploaded / 1024).toFixed(1)} KB');
  });

  const res = await setu.post(uploadUrl, {
    body: form,
    responseType: 'json',
  });

  console.log('\nUpload response:', res.data);
};

uploadFile().catch((err) => console.error('Error:', err.message));
`}</code>
                    </pre>
                  </CardContent>
                </Card>
              </div>
            </div>
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
                <p className="text-muted-foreground mb-4">Setu will automatically retry network failures and timeouts if you configure retries and retryDelay.</p>
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
                <p className="text-muted-foreground mb-4">To avoid overwhelming the server, you can implement exponential delays between retries:</p>
                <Card>
                  <CardContent className="p-6">
                    <pre className="bg-muted/30 p-6 rounded-lg overflow-x-auto text-sm border">
                      <code>{`async function makeRequestWithBackoff(url, config = {}) {
  const maxRetries = config.retries || 3;
  const baseDelay = config.retryDelay || 1000;

  for (let attempt = 0; attempt <= maxRetries; attempt++) {
    try {
      return await setu.get(url, { ...config, retries: 0 }); // Disable internal retry
    } catch (error) {
      if (attempt === maxRetries) throw error;

      const delay = baseDelay * Math.pow(2, attempt); // 1s, 2s, 4s, etc.
      await new Promise(resolve => setTimeout(resolve, delay));
    }
  }
}
`}</code>
                    </pre>
                  </CardContent>
                </Card>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">Conditional Retry (Retry on 5xx or Network Only)</h2>
                <p className="text-muted-foreground mb-4">Retry only for recoverable errors like server errors (5xx) or connection drops:</p>
                <Card>
                  <CardContent className="p-6">
                    <pre className="bg-muted/30 p-6 rounded-lg overflow-x-auto text-sm border">
                      <code>{`async function makeRequestWithConditionalRetry(url, config = {}) {
  const maxRetries = config.retries || 3;

  for (let attempt = 0; attempt <= maxRetries; attempt++) {
    try {
      return await setu.get(url, { ...config, retries: 0 });
    } catch (error) {
      const shouldRetry = !error.response || 
        (error.response.status >= 500 && error.response.status < 600);

      if (!shouldRetry || attempt === maxRetries) {
        throw error;
      }

      const delay = 1000 * Math.pow(2, attempt);
      await new Promise(resolve => setTimeout(resolve, delay));
    }
  }
}
`}</code>
                    </pre>
                  </CardContent>
                </Card>
              </div>
            </div>
            <Alert>
              <Info className="h-4 w-4" />
              <AlertDescription>
              Setu's built-in retries only applies to network-level failures and timeouts — not HTTP 4xx/5xx errors.

              To retry on specific status codes (e.g., 500, 502), use custom retry logic like in the Conditional Retry example.
              </AlertDescription>
            </Alert>
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
                <p className="text-muted-foreground mb-4">Set a timeout (in milliseconds) to automatically abort requests that take too long:</p>
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
                <p className="text-muted-foreground mb-4">Use AbortController for fine-grained manual cancellation:</p>
                <Card>
                  <CardContent className="p-6">
                    <pre className="bg-muted/30 p-6 rounded-lg overflow-x-auto text-sm border">
                      <code>{`const controller = new AbortController();

// Cancel the request after 5 seconds
setTimeout(() => controller.abort(), 5000);

try {
  const response = await setu.get('/api/data', {
    signal: controller.signal
  });
  console.log(response.data);
} catch (error) {
  if (error.name === 'AbortError' || error.code === 'ECONNABORTED') {
    console.log('Request was aborted');
  } else {
    console.error('Request failed', error);
  }
}
`}</code>
                    </pre>
                  </CardContent>
                </Card>
              </div>
            </div>
          </motion.div>
        );

      case "interceptors":
        return (
          <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-10">
  {/* Header */}
  <div>
    <h1 className="text-4xl font-bold tracking-tight mb-4">Next.js – API Routes & SSR</h1>
    <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
      Setu seamlessly integrates into your <strong>Next.js</strong> project—ideal for both client and server-side code. It enhances 
      data fetching in <code className="font-mono">API Routes</code> and <code className="font-mono">getServerSideProps</code> with built-in features like retries, 
      timeouts, and error normalization.
    </p>
  </div>

  <div className="space-y-10">
    {/* API Route Example */}
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold">📦 API Route Example</h2>
      <p className="text-muted-foreground max-w-2xl">
        Handle server-side data fetching from external APIs using `setu` inside <code>/api/</code> route handlers. Automatically retry failed requests and apply timeouts.
      </p>
      <Card>
        <CardContent className="p-6">
          <pre className="bg-muted/30 p-5 rounded-lg overflow-x-auto text-sm border">
            <code>{`// pages/api/proxy.ts
import setu from 'setu.js';

export default async function handler(req, res) {
  try {
    const response = await setu.get('https://api.example.com/data', {
      retries: 3,        // Retry up to 3 times
      retryDelay: 1000,  // Wait 1s between retries
      timeout: 3000      // Auto timeout after 3s
    });

    res.status(200).json(response.data);
  } catch (err) {
    res.status(err.status || 500).json({ message: err.message });
  }
}`}</code>
          </pre>
        </CardContent>
      </Card>
    </div>

    {/* SSR Example */}
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold">⚡ Server-Side Rendering (SSR)</h2>
      <p className="text-muted-foreground max-w-2xl">
        Use `setu` directly in <code>getServerSideProps</code> to pre-render data at request time with retry, timeout, and fallback logic—ideal for reliable eCommerce or dashboards.
      </p>
      <Card>
        <CardContent className="p-6">
          <pre className="bg-muted/30 p-5 rounded-lg overflow-x-auto text-sm border">
            <code>{`// pages/products.tsx
export async function getServerSideProps() {
  try {
    const { data } = await setu.get('https://api.example.com/products', {
      retries: 2,
      timeout: 2500
    });

    return {
      props: { products: data }
    };
  } catch (err) {
    return {
      props: { products: [], error: err.message }
    };
  }
}`}</code>
          </pre>
        </CardContent>
      </Card>
    </div>

    {/* SSG with Fallback */}
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold">🧊 Static Generation (SSG)</h2>
      <p className="text-muted-foreground max-w-2xl">
        Works just as well with <code>getStaticProps</code>. Ideal for blogs, docs, or marketing sites needing build-time data. You can pair it with ISR.
      </p>
      <Card>
        <CardContent className="p-6">
          <pre className="bg-muted/30 p-5 rounded-lg overflow-x-auto text-sm border">
            <code>{`// pages/blog.tsx
export async function getStaticProps() {
  const { data } = await setu.get('https://api.example.com/posts', {
    timeout: 2000,
    retries: 2
  });

  return {
    props: { posts: data },
    revalidate: 60 // Regenerate every 60 seconds (ISR)
  };
}`}</code>
          </pre>
        </CardContent>
      </Card>
    </div>

    {/* Client-Side Fetch with Hooks */}
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold">🧠 Client-Side Fetching (React Hooks)</h2>
      <p className="text-muted-foreground max-w-2xl">
        Use `setu` in client components with React’s lifecycle methods or custom hooks. Works great with SWR or TanStack Query too.
      </p>
      <Card>
        <CardContent className="p-6">
          <pre className="bg-muted/30 p-5 rounded-lg overflow-x-auto text-sm border">
            <code>{`// components/ProductList.tsx
import { useEffect, useState } from 'react';
import setu from 'setu.js';

export function ProductList() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    setu.get('/api/products', {
      retries: 1,
      retryDelay: 1000
    })
      .then(res => setProducts(res.data))
      .catch(err => setError(err.message));
  }, []);

  if (error) return <div>Error: {error}</div>;

  return (
    <ul>
      {products.map(p => <li key={p.id}>{p.name}</li>)}
    </ul>
  );
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
          <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-10">
  {/* Header */}
  <div>
    <h1 className="text-4xl font-bold tracking-tight mb-4">Node.js (Backend)</h1>
    <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
      Setu is built for Node.js environments with first-class support for:
      <strong> retries, timeouts, streaming, upload progress, and binary data</strong>. It’s perfect for REST APIs, background jobs, and server-to-server communication.
    </p>
  </div>

  <div className="space-y-10">
    {/* Express Example */}
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold">🧩 Express.js Example</h2>
      <p className="text-muted-foreground max-w-2xl">
        Make external API calls within your Express routes using Setu with retry and timeout logic baked in. 
        No need to manually wrap logic for common network issues.
      </p>
      <Card>
        <CardContent className="p-6">
          <pre className="bg-muted/30 p-5 rounded-lg overflow-x-auto text-sm border">
            <code>{`// server.js
import express from 'express';
import setu from 'setu.js';

const app = express();

app.get('/data', async (req, res) => {
  try {
    const response = await setu.get('https://api.github.com/repos/vercel/next.js', {
      retries: 3,         // Auto retry 3 times
      retryDelay: 1000,   // Wait 1s between attempts
      timeout: 3000       // Fail if no response within 3s
    });

    res.json(response.data);
  } catch (error) {
    res.status(error.status || 500).json({ error: error.message });
  }
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});`}</code>
          </pre>
        </CardContent>
      </Card>
    </div>

    {/* Streaming Support Example */}
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold">📥 Streaming Downloads</h2>
      <p className="text-muted-foreground max-w-2xl">
        Use Setu to stream large files directly to the client using Node's built-in stream capabilities.
        Ideal for video, PDF, or ZIP downloads.
      </p>
      <Card>
        <CardContent className="p-6">
          <pre className="bg-muted/30 p-5 rounded-lg overflow-x-auto text-sm border">
            <code>{`// stream.js
import express from 'express';
import setu from 'setu.js';
import fs from 'fs';

const app = express();

app.get('/download', async (req, res) => {
  try {
    const response = await setu.get('https://example.com/large-file.zip', {
      responseType: 'stream'
    });

    // Stream directly to client
    res.setHeader('Content-Disposition', 'attachment; filename="file.zip"');
    response.data.pipe(res);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(3001);`}</code>
          </pre>
        </CardContent>
      </Card>
    </div>

    {/* Retry in Background Jobs */}
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold">🔁 Background Retry Example</h2>
      <p className="text-muted-foreground max-w-2xl">
        Setu is great for background jobs where network stability can’t be guaranteed. 
        This example shows exponential backoff for a background task.
      </p>
      <Card>
        <CardContent className="p-6">
          <pre className="bg-muted/30 p-5 rounded-lg overflow-x-auto text-sm border">
            <code>{`// jobs/fetchExternalData.js
import setu from 'setu.js';

async function fetchDataWithBackoff() {
  const maxRetries = 3;
  const delay = 1000;

  for (let attempt = 0; attempt <= maxRetries; attempt++) {
    try {
      const response = await setu.get('https://api.example.com/stats', {
        retries: 0, // manually handling retries here
        timeout: 3000
      });
      console.log('Success:', response.data);
      return;
    } catch (err) {
      if (attempt === maxRetries) {
        console.error('Final failure:', err.message);
        return;
      }
      await new Promise((r) => setTimeout(r, delay * Math.pow(2, attempt)));
    }
  }
}

fetchDataWithBackoff();`}</code>
          </pre>
        </CardContent>
      </Card>
    </div>
  </div>
</motion.div>

        );

      case "browser-vs-nodejs":
        return (
          <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-10">
  {/* Section Header */}
  <div>
    <h1 className="text-4xl font-bold mb-6 tracking-tight">Vue 3 (with Vite)</h1>
    <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
      Why <code className="font-semibold text-foreground">Setu</code>? — It fits perfectly with Vue's Composition API.
      Clean syntax, reactive-friendly API handling, and features like <strong>timeouts</strong>, <strong>retries</strong>, and <strong>progress tracking</strong> make it a powerful drop-in for any modern Vue app.
    </p>
  </div>

  {/* Usage Example */}
  <div className="space-y-8">
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold mb-2">🎯 Basic Fetch Example (Composition API)</h2>
      <p className="text-muted-foreground max-w-2xl">
        This example demonstrates using Setu to fetch a list of posts. 
        Works great with Vue's <code className="text-foreground">ref()</code> and <code className="text-foreground">script setup</code> syntax.
      </p>

      <Card>
        <CardContent className="p-6">
          <pre className="bg-muted/30 p-6 rounded-lg overflow-x-auto text-sm border leading-relaxed text-left">
<code>{`<template>
  <button @click="load" class="px-4 py-2 bg-foreground text-background rounded">
    Fetch Posts
  </button>

  <ul class="mt-4 space-y-2">
    <li v-for="item in posts" :key="item.id" class="text-sm">
      {{ item.title }}
    </li>
  </ul>
</template>

<script setup>
import { ref } from 'vue';
import setu from 'setu.js';

const posts = ref([]);

const load = async () => {
  try {
    const { data } = await setu.get('https://jsonplaceholder.typicode.com/posts', {
      timeout: 3000,
      retries: 2,
    });
    posts.value = data;
  } catch (err) {
    console.error('Failed to fetch posts:', err.message);
  }
};
</script>`}</code>
          </pre>
        </CardContent>
      </Card>
    </div>

    {/* Optional: Retry/Timeout Explanation */}
    <div className="space-y-2">
      <h2 className="text-xl font-semibold">✨ Features in Use</h2>
      <ul className="list-disc pl-6 text-muted-foreground text-sm space-y-1">
        <li><code>timeout</code>: Aborts the request if it takes longer than 3 seconds.</li>
        <li><code>retries</code>: Automatically retries failed requests up to 2 times.</li>
        <li>Fully supports Vue reactivity – <code>ref()</code> updates the UI automatically.</li>
        <li>Works in both <code>.vue</code> SFCs and global stores like Pinia.</li>
      </ul>
    </div>
  </div>
</motion.div>

        );

      case "advanced-usage":
        return (
          <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-10">
  {/* Section Header */}
  <div>
    <h1 className="text-4xl font-bold mb-6 tracking-tight">React Native (Mobile App)</h1>
    <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
      Why <code className="font-semibold text-foreground">Setu</code>? — It brings the power of browser-like network APIs into React Native.
      With built-in <strong>retry logic</strong>, <strong>timeout handling</strong>, and a familiar Axios-like API, it simplifies HTTP networking in mobile apps.
    </p>
  </div>

  <div className="space-y-12">
    {/* Basic Usage */}
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold">📱 Basic Fetch with Retry + Timeout</h2>
      <p className="text-muted-foreground max-w-2xl">
        Setu works out of the box with React Native’s fetch-like environment. 
        This example demonstrates data fetching with a smooth UX and error boundary.
      </p>

      <Card>
        <CardContent className="p-6">
          <pre className="bg-muted/30 p-6 rounded-lg overflow-x-auto text-sm border leading-relaxed text-left">
<code>{`// App.js
import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, StyleSheet, FlatList } from 'react-native';
import setu from 'setu.js';

const App = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setu.get('https://jsonplaceholder.typicode.com/posts', {
      retries: 2,
      retryDelay: 1000,
      timeout: 3000,
    })
      .then(res => setPosts(res.data))
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <ActivityIndicator style={styles.centered} />;
  if (error) return <Text style={styles.error}>Error: {error}</Text>;

  return (
    <FlatList
      data={posts}
      keyExtractor={item => item.id.toString()}
      contentContainerStyle={styles.container}
      renderItem={({ item }) => (
        <Text style={styles.item}>{item.title}</Text>
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  item: {
    fontSize: 16,
    marginBottom: 8,
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
  },
  error: {
    color: 'red',
    padding: 16,
  },
});

export default App;`}</code>
          </pre>
        </CardContent>
      </Card>
    </div>

    {/* Feature Highlights */}
    <div className="space-y-2">
      <h2 className="text-xl font-semibold">✨ Features in Use</h2>
      <ul className="list-disc pl-6 text-muted-foreground text-sm space-y-1">
        <li><code>retries</code>: Automatically retries failed network requests.</li>
        <li><code>retryDelay</code>: Sets delay between retry attempts.</li>
        <li><code>timeout</code>: Cancels the request if it takes too long.</li>
        <li>Built for React Native: works without needing polyfills or special shims.</li>
      </ul>
    </div>
  </div>
</motion.div>

        );

      case "best-practices":
        return (
          <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-10">
  <div>
    <h1 className="text-4xl font-bold mb-6 tracking-tight">SvelteKit (SSR + API Routes)</h1>
    <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
      Why <code className="font-semibold text-foreground">Setu</code>? — First-class support for SSR, retries, timeouts, and seamless usage inside <code>+page.server.ts</code> and <code>+server.ts</code> endpoints. 
      <br />Perfect for SvelteKit’s hybrid rendering model.
    </p>
  </div>

  <div className="space-y-12">

    {/* SSR with +page.server.ts */}
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold">📄 Server-Side Data in <code>+page.server.ts</code></h2>
      <p className="text-muted-foreground max-w-2xl">
        Run HTTP calls server-side before hydration with retry and timeout control.
      </p>

      <Card>
        <CardContent className="p-6">
          <pre className="bg-muted/30 p-6 rounded-lg overflow-x-auto text-sm border leading-relaxed text-left">
<code>{`// src/routes/+page.server.ts
import setu from 'setu.js';

export async function load() {
  const res = await setu.get('https://api.example.com/products', {
    retries: 2,
    retryDelay: 1000,
    timeout: 3000
  });

  return {
    products: res.data
  };
}`}</code>
          </pre>
        </CardContent>
      </Card>
    </div>

    {/* API Route with +server.ts */}
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold">📦 API Route in <code>+server.ts</code></h2>
      <p className="text-muted-foreground max-w-2xl">
        Use Setu to build robust API routes in SvelteKit with full control over failure handling.
      </p>

      <Card>
        <CardContent className="p-6">
          <pre className="bg-muted/30 p-6 rounded-lg overflow-x-auto text-sm border leading-relaxed text-left">
<code>{`// src/routes/api/posts/+server.ts
import { json } from '@sveltejs/kit';
import setu from 'setu.js';

export async function GET() {
  try {
    const res = await setu.get('https://jsonplaceholder.typicode.com/posts', {
      retries: 3,
      retryDelay: 1000
    });

    return json(res.data);
  } catch (err) {
    return json({ message: err.message }, { status: err.status || 500 });
  }
}`}</code>
          </pre>
        </CardContent>
      </Card>
    </div>

    {/* Summary */}
    <div className="space-y-2">
      <h2 className="text-xl font-semibold">✨ Features in Use</h2>
      <ul className="list-disc pl-6 text-muted-foreground text-sm space-y-1">
        <li><code>+page.server.ts</code> for pre-hydration server rendering</li>
        <li><code>+server.ts</code> for backend API routes with retries</li>
        <li>Works seamlessly with Vercel / Netlify Edge or Node runtimes</li>
        <li>Retry + timeout keeps your SSR fast and fault-tolerant</li>
      </ul>
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
