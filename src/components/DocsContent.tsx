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
      transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }
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
  } else {
    // Other error
    console.error('Error:', error.message);
  }
}`}</code>
                    </pre>
                  </CardContent>
                </Card>
              </div>

              <Alert>
                <AlertTriangle className="h-4 w-4" />
                <AlertDescription>
                  Always handle errors appropriately in production applications. Use try-catch blocks for async/await or .catch() for promises.
                </AlertDescription>
              </Alert>
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
      
      // Update UI
      updateProgressBar('upload-progress', percentComplete);
    } else {
      console.log(\`Upload: \${loaded} bytes uploaded\`);
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
      
      // Update UI
      updateProgressBar('download-progress', percentComplete);
    } else {
      console.log(\`Download: \${loaded} bytes received\`);
    }
  }
});`}</code>
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
    <div className="flex-1 px-8 py-8">
      <div className="max-w-4xl mx-auto">
        {renderContent()}
      </div>
    </div>
  );
};

export default DocsContent;
