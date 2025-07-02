
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
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-12"
          >
            {/* Title */}
            <div>
              <h1 className="text-4xl font-bold mb-6 tracking-tight">How Setu.js Works</h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Setu.js is designed with modularity, performance, and cross-environment compatibility in mind. Below is a complete architectural breakdown of how it resolves modules, detects environments, handles requests, and processes responses — all with zero dependencies.
              </p>
            </div>
        
            {/* Section 1: Module Resolution */}
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold">1. Module Resolution</h2>
              <p className="text-muted-foreground">
                Whether you import Setu.js using ESM (`import`) or CommonJS (`require`), the client intelligently resolves the right build depending on your environment. This ensures optimal compatibility in both server and browser contexts.
              </p>
              <img
                src="/arch3.png"
                alt="Module Resolution"
                className="w-xl"
              />
              <ul className="list-disc list-inside text-muted-foreground text-sm space-y-1">
                <li>
                  If <code>import</code> is used: bundlers like Vite/Webpack auto-select the ESM build.
                </li>
                <li>
                  If <code>require</code> is used in a Node.js file, the CommonJS entry is resolved.
                </li>
                <li>
                  Based on whether the environment is Node.js or browser, Setu internally picks:
                  <ul className="list-disc list-inside ml-4">
                    <li><code>dist/node/index.js</code> → Node.js clients</li>
                    <li><code>dist/browser/index.js</code> → Browsers or bundlers</li>
                  </ul>
                </li>
              </ul>
            </div>
        
            {/* Section 2: Architecture Overview */}
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold">2. Architecture Overview</h2>
              <p className="text-muted-foreground">
                Here's a full overview of how requests flow through Setu.js — from environment detection to request processing, error handling, and response parsing.
              </p>
              <img
                src="/arch.png"
                alt="Setu Architecture"
                className="rounded-lg border w-full"
              />
        
              {/* Step-by-step breakdown */}
              <div className="space-y-6">
        
                {/* Environment Selection */}
                <Card>
                  <CardHeader>
                    <CardTitle>1. Environment Detection</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground">
                    Setu starts by detecting if the runtime is <strong>Node.js</strong> or <strong>browser</strong>.
                    It uses simple environment checks (like `typeof window === 'undefined'`) to choose the appropriate adapter.
                  </CardContent>
                </Card>
        
                {/* Adapters */}
                <Card>
                  <CardHeader>
                    <CardTitle>2. Adapter Layer</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground space-y-2">
                    Setu uses two internal adapters:
                    <ul className="list-disc list-inside">
                      <li>
                        <strong>Browser Adapter</strong>:
                        Uses <code>XMLHttpRequest</code> for all requests.
                        Supports:
                        <ul className="list-disc list-inside ml-4">
                          <li>Upload/Download progress tracking</li>
                          <li>Timeouts via `xhr.timeout`</li>
                          <li>Abort using `AbortController`</li>
                        </ul>
                      </li>
                      <li>
                        <strong>Node Adapter</strong>:
                        Uses Node.js <code>http</code>/<code>https</code> modules.
                        Supports:
                        <ul className="list-disc list-inside ml-4">
                          <li>Streamed file uploads/downloads</li>
                          <li>FormData via `form-data` package</li>
                          <li>Request abort via manual timeout logic</li>
                        </ul>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
        
                {/* Core Engine */}
                <Card>
                  <CardHeader>
                    <CardTitle>3. Core Engine</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground space-y-2">
                    The core engine is where Setu applies shared logic, regardless of adapter:
                    <ul className="list-disc list-inside">
                      <li>
                        <strong>Retry Logic</strong>: Retry on network failures and optionally with exponential backoff.
                      </li>
                      <li>
                        <strong>Timeout Manager</strong>: Auto-aborts requests that exceed a defined duration.
                      </li>
                      <li>
                        <strong>Request Builder</strong>: Merges base URL, query parameters, and headers.
                      </li>
                      <li>
                        <strong>Response Parser</strong>: Auto-detects and parses JSON, text, blob, arrayBuffer, or stream.
                      </li>
                    </ul>
                  </CardContent>
                </Card>
        
                {/* Configuration */}
                <Card>
                  <CardHeader>
                    <CardTitle>4. Configuration & Utilities</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground space-y-2">
                    Setu provides flexible per-request and global configuration via:
                    <ul className="list-disc list-inside">
                      <li><code>headers</code>: Custom request headers</li>
                      <li><code>timeout</code>: Milliseconds to abort if exceeded</li>
                      <li><code>retries</code>: Number of retry attempts</li>
                      <li><code>responseType</code>: Choose between <code>'json'</code>, <code>'text'</code>, <code>'blob'</code>, <code>'stream'</code>, etc.</li>
                      <li><strong>Utilities:</strong> Like <code>mergeHeaders</code> and <code>buildQuery</code> help normalize headers and query strings.</li>
                    </ul>
                  </CardContent>
                </Card>
        
                {/* Error Handling */}
                <Card>
                  <CardHeader>
                    <CardTitle>5. Error Management</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground">
                    If any error occurs, Setu wraps it with a normalized error object that includes:
                    <ul className="list-disc list-inside">
                      <li><strong>status</strong>: HTTP status code (if available)</li>
                      <li><strong>message</strong>: Human-readable message</li>
                      <li><strong>config</strong>: The config used for the request</li>
                      <li><strong>response</strong>: The raw response (if any)</li>
                    </ul>
                    This ensures consistent error handling across all environments and use cases.
                  </CardContent>
                </Card>
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
          <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-12">
            <div>
              <h1 className="text-4xl font-bold mb-4 tracking-tight">Quick Start</h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Get started with <code className="font-mono">Setu.js</code> — a minimal and flexible HTTP client for modern JavaScript & TypeScript apps.
              </p>
            </div>
        
            <div className="space-y-12">
              {/* ✅ Basic Usage */}
              <div>
                <h2 className="text-2xl font-semibold mb-4">🔹 Basic Usage</h2>
                <Card>
                  <CardContent className="p-6">
                    <pre className="bg-muted/30 p-6 rounded-lg overflow-x-auto text-sm border font-mono">
                      <code>{`import setu from 'setu.js';
        
        // Basic GET request
        const response = await setu.get('/api/users');
        console.log(response.data);
        
        // POST request with JSON payload
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
        
              {/* ✅ TypeScript Usage */}
              <div>
                <h2 className="text-2xl font-semibold mb-4">🔹 TypeScript Usage</h2>
                <Card>
                  <CardContent className="p-6">
                    <pre className="bg-muted/30 p-6 rounded-lg overflow-x-auto text-sm border font-mono">
                      <code>{`import setu from 'setu.js';
        
        interface User {
          id: number;
          name: string;
          email: string;
        }
        
        // GET with inferred response typing
        const res = await setu.get<User[]>('/api/users');
        const users = res.data;
        
        // POST with response typing (optional)
        await setu.post<User>('/api/users', {
          body: {
            name: 'Jane Doe',
            email: 'jane@example.com'
          }
        });`}</code>
                    </pre>
                  </CardContent>
                </Card>
              </div>
            </div>
        
            {/* ✅ Wrap-up Alert */}
            <Alert>
              <CheckCircle className="h-4 w-4 text-green-500" />
              <AlertDescription>
                That’s it — you're ready to start making requests with <strong>Setu.js</strong>. Continue to the API Reference for more control like retries, progress, and timeouts.
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
              className="space-y-12"
            >
              <div>
                <h1 className="text-4xl font-bold mb-6 tracking-tight">Core Concepts</h1>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Understand the architecture and philosophy behind <code className="font-mono">Setu.js</code> — a modern HTTP client built for clarity, consistency, and full TypeScript support.
                </p>
              </div>
          
              <div className="space-y-12">
                {/* Setu Object */}
                <div>
                  <h2 className="text-2xl font-semibold mb-4">🔹 The Setu Object</h2>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    <strong>Setu</strong> is a single object that provides all HTTP methods (`get`, `post`, `put`, `patch`, `delete`) with a consistent signature. It works the same in both browser and Node.js environments, simplifying your codebase.
                  </p>
                  <Card>
                    <CardContent className="p-6">
                      <pre className="bg-muted/30 p-6 rounded-lg overflow-x-auto text-sm border font-mono">
                        <code>{`import setu from 'setu.js';
          
          // All HTTP methods are available
          setu.get(url, config);
          setu.post(url, config);
          setu.put(url, config);
          setu.patch(url, config);
          setu.delete(url, config);`}</code>
                      </pre>
                    </CardContent>
                  </Card>
                </div>
          
                {/* Defaults Configuration */}
                <div>
                  <h2 className="text-2xl font-semibold mb-4">🔹 Global Defaults</h2>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    You can define global defaults like `baseURL`, `headers`, or `timeout` which apply to **every request** unless overridden. This makes your API layer more DRY and configurable.
                  </p>
                  <Card>
                    <CardContent className="p-6">
                      <pre className="bg-muted/30 p-6 rounded-lg overflow-x-auto text-sm border font-mono">
                        <code>{`setu.defaults = {
            baseURL: "https://api.example.com",
            headers: {
              'Content-Type': 'application/json',
            },
            timeout: 5000, // Default 5s timeout
          };`}</code>
                      </pre>
                    </CardContent>
                  </Card>
                </div>
          
                {/* Per-Request Config */}
                <div>
                  <h2 className="text-2xl font-semibold mb-4">🔹 Per-Request Configuration</h2>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Each individual request can override global defaults and include advanced features like custom headers, retry logic, timeouts, and request body. This gives you granular control over each request.
                  </p>
                  <Card>
                    <CardContent className="p-6">
                      <pre className="bg-muted/30 p-6 rounded-lg overflow-x-auto text-sm border font-mono">
                        <code>{`const config = {
            headers: { Authorization: 'Bearer token' },
            timeout: 5000,      // Request-specific timeout
            retries: 3,         // Retry up to 3 times on failure
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
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-12"
          >
            <div>
              <h1 className="text-4xl font-bold mb-6 tracking-tight">Request Configuration</h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Customize every request using a flexible config object — control headers, timeouts, retries, and more with full type safety.
              </p>
            </div>
        
            <div className="space-y-12">
              {/* Configuration Object */}
              <div>
                <h2 className="text-2xl font-semibold mb-4">🔹 Configuration Object</h2>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  This is the shape of the configuration object you pass to any method like <code className="font-mono">setu.get()</code> or <code className="font-mono">setu.post()</code>. Most fields are optional and can be combined based on your needs.
                </p>
                <Card>
                  <CardContent className="p-6">
                    <pre className="bg-muted/30 p-6 rounded-lg overflow-x-auto text-sm border font-mono">
                      <code>{`interface RequestConfig {
          headers?: Record<string, string>;           // Custom HTTP headers
          timeout?: number;                           // Request timeout in ms
          retries?: number;                           // Retry count on failure
          retryDelay?: number;                        // Delay between retries (ms)
          body?: any;                                 // Request payload (JSON, FormData, etc.)
          responseType?: 'json' | 'text' | 'blob' |
                         'stream' | 'arrayBuffer';    // Expected response format
          onUploadProgress?: (progress) => void;      // Upload progress event
          onDownloadProgress?: (progress) => void;    // Download progress event
          validateStatus?: (status) => boolean;       // Custom logic to accept/reject status
          maxRedirects?: number;                      // Max number of redirects to follow
          signal?: AbortSignal;                       // Cancel request with AbortController
        }`}</code>
                    </pre>
                  </CardContent>
                </Card>
              </div>
        
              {/* Headers */}
              <div>
                <h2 className="text-2xl font-semibold mb-4">🔹 Headers</h2>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Use the <code className="font-mono">headers</code> field to send tokens, content types, or custom headers. You can define them per-request or reuse them across multiple calls.
                </p>
                <Card>
                  <CardContent className="p-6">
                    <pre className="bg-muted/30 p-6 rounded-lg overflow-x-auto text-sm border font-mono">
                      <code>{`// ✅ Set headers for a single request
        await setu.get('/api/data', {
          headers: {
            'Authorization': 'Bearer your-token',
            'Content-Type': 'application/json',
            'X-Custom-Header': 'value'
          }
        });
        
        // ✅ Reuse headers across multiple requests
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
        
              {/* Request Body */}
              <div>
                <h2 className="text-2xl font-semibold mb-4">🔹 Request Body</h2>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  <strong>Setu.js</strong> intelligently detects and handles various body formats — from JSON objects to raw text or multipart form data. You can also override content-type headers manually.
                </p>
                <Card>
                  <CardContent className="p-6">
                    <pre className="bg-muted/30 p-6 rounded-lg overflow-x-auto text-sm border font-mono">
                      <code>{`// ✅ JSON object body
        await setu.post('/api/users', {
          body: { name: 'John', age: 30 }
        });
        
        // ✅ FormData (e.g. file upload)
        const formData = new FormData();
        formData.append('name', 'John');
        formData.append('file', fileInput.files[0]);
        
        await setu.post('/api/upload', {
          body: formData
        });
        
        // ✅ Raw text body with explicit content-type
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
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-12"
          >
            <div>
              <h1 className="text-4xl font-bold mb-6 tracking-tight">Response Handling</h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Work with response data, status codes, and headers effectively using Setu.js.
              </p>
            </div>
        
            <div className="space-y-12">
              {/* Response Object */}
              <div>
                <h2 className="text-2xl font-semibold mb-4">🔹 Response Object</h2>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Every request in Setu.js returns a strongly typed response object. It contains the HTTP status, headers, parsed data, and optionally a filename (for file downloads).
                </p>
                <Card>
                  <CardContent className="p-6">
                    <pre className="bg-muted/30 p-6 rounded-lg overflow-x-auto text-sm border font-mono">
                      <code>{`interface Response<T = any> {
          status: number;                       // HTTP status code (e.g. 200, 404)
          headers: Record<string, string>;     // Response headers (lower-cased keys)
          data: T;                              // Parsed response payload
          filename?: string;                   // Extracted filename (for downloads)
        }`}</code>
                    </pre>
                  </CardContent>
                </Card>
              </div>
        
              {/* Working with Responses */}
              <div>
                <h2 className="text-2xl font-semibold mb-4">🔹 Working with Responses</h2>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  You can directly access the response data, inspect the status, or read any header. This structure is designed to feel familiar if you’ve used Axios.
                </p>
                <Card>
                  <CardContent className="p-6">
                    <pre className="bg-muted/30 p-6 rounded-lg overflow-x-auto text-sm border font-mono">
                      <code>{`const response = await setu.get('/api/users');
        
        // ✅ Access parsed data
        console.log(response.data);
        
        // ✅ Check status
        if (response.status === 200) {
          console.log('Success!');
        }
        
        // ✅ Access headers
        console.log(response.headers['content-type']);`}</code>
                    </pre>
                  </CardContent>
                </Card>
              </div>
        
              {/* Response Types */}
              <div>
                <h2 className="text-2xl font-semibold mb-4">🔹 Response Types</h2>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Use the <code className="font-mono">responseType</code> config to control how Setu parses the returned data — whether it's JSON, text, or binary blobs.
                </p>
                <Card>
                  <CardContent className="p-6">
                    <pre className="bg-muted/30 p-6 rounded-lg overflow-x-auto text-sm border font-mono">
                      <code>{`// ✅ JSON (default)
        const jsonResponse = await setu.get('/api/data');
        console.log(jsonResponse.data); // Parsed JSON
        
        // ✅ Plain text
        const textResponse = await setu.get('/api/raw', {
          responseType: 'text'
        });
        console.log(textResponse.data); // Raw string
        
        // ✅ Binary blob (e.g. for file downloads)
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
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            <div>
              <h1 className="text-4xl font-bold mb-6 tracking-tight">HTTP Methods</h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Complete guide to using all HTTP methods with Setu.js.
              </p>
            </div>
        
            <div className="space-y-12">
              {/* GET */}
              <div>
                <h2 className="text-2xl font-semibold mb-4">GET Requests</h2>
                <p className="text-muted-foreground mb-4">
                  Use <code className="font-mono">GET</code> to retrieve data from the server. It's the most common request method and doesn't modify server-side state.
                </p>
                <Card>
                  <CardContent className="p-6">
                    <pre className="bg-muted/30 p-6 rounded-lg overflow-x-auto text-sm border font-mono">
                      <code>{`// ✅ Basic GET
        const users = await setu.get('/api/users');
        
        // ✅ With query parameters
        const filteredUsers = await setu.get('/api/users?role=admin&active=true');
        
        // ✅ With custom headers
        const protected = await setu.get('/api/protected', {
          headers: { 'Authorization': 'Bearer token' }
        });`}</code>
                    </pre>
                  </CardContent>
                </Card>
              </div>
        
              {/* POST */}
              <div>
                <h2 className="text-2xl font-semibold mb-4">POST Requests</h2>
                <p className="text-muted-foreground mb-4">
                  Use <code className="font-mono">POST</code> to create new resources or submit data to the server.
                </p>
                <Card>
                  <CardContent className="p-6">
                    <pre className="bg-muted/30 p-6 rounded-lg overflow-x-auto text-sm border font-mono">
                      <code>{`// ✅ Create a new user with JSON body
        const newUser = await setu.post('/api/users', {
          body: {
            name: 'Alice Johnson',
            email: 'alice@example.com',
            role: 'user'
          }
        });
        
        // ✅ Submit form data using FormData
        const formData = new FormData();
        formData.append('title', 'My Post');
        formData.append('content', 'Post content');
        
        const post = await setu.post('/api/posts', {
          body: formData
        });`}</code>
                    </pre>
                  </CardContent>
                </Card>
              </div>
        
              {/* PUT */}
              <div>
                <h2 className="text-2xl font-semibold mb-4">PUT Requests</h2>
                <p className="text-muted-foreground mb-4">
                  Use <code className="font-mono">PUT</code> to completely replace an existing resource.
                </p>
                <Card>
                  <CardContent className="p-6">
                    <pre className="bg-muted/30 p-6 rounded-lg overflow-x-auto text-sm border font-mono">
                      <code>{`// ✅ Full update of a user
        const updatedUser = await setu.put('/api/users/123', {
          body: {
            id: 123,
            name: 'Alice Updated',
            email: 'alice.updated@example.com',
            role: 'admin',
            active: true
          }
        });`}</code>
                    </pre>
                  </CardContent>
                </Card>
              </div>
        
              {/* PATCH */}
              <div>
                <h2 className="text-2xl font-semibold mb-4">PATCH Requests</h2>
                <p className="text-muted-foreground mb-4">
                  Use <code className="font-mono">PATCH</code> when you want to update only a few fields of a resource.
                </p>
                <Card>
                  <CardContent className="p-6">
                    <pre className="bg-muted/30 p-6 rounded-lg overflow-x-auto text-sm border font-mono">
                      <code>{`// ✅ Partial update of a user
        const patchedUser = await setu.patch('/api/users/123', {
          body: {
            name: 'Alice Smith',
            role: 'moderator'
          }
        });`}</code>
                    </pre>
                  </CardContent>
                </Card>
              </div>
        
              {/* DELETE */}
              <div>
                <h2 className="text-2xl font-semibold mb-4">DELETE Requests</h2>
                <p className="text-muted-foreground mb-4">
                  Use <code className="font-mono">DELETE</code> to remove a resource from the server.
                </p>
                <Card>
                  <CardContent className="p-6">
                    <pre className="bg-muted/30 p-6 rounded-lg overflow-x-auto text-sm border font-mono">
                      <code>{`// ✅ Basic delete request
        await setu.delete('/api/users/123');
        
        // ✅ Delete with extra headers
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
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            <div>
              <h1 className="text-4xl font-bold mb-6 tracking-tight">File Operations</h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Upload and download files with progress tracking.
              </p>
            </div>
        
            <div className="space-y-12">
              {/* File Upload */}
              <div>
                <h2 className="text-2xl font-semibold mb-4">File Upload</h2>
                <p className="text-muted-foreground mb-4">
                  Upload files using <code className="font-mono">FormData</code> with real-time progress updates.
                </p>
                <Card>
                  <CardContent className="p-6">
                    <pre className="bg-muted/30 p-6 rounded-lg overflow-x-auto text-sm border font-mono">
                      <code>{`const formData = new FormData();
        formData.append('metadata', JSON.stringify({
          userId: 123,
          description: 'Test file'
        }));
        formData.append('file', file);
        
        const uploadResponse = await setu.post('/api/upload', {
          body: formData,
          onUploadProgress: (progress) => {
            console.log(\`Upload progress: \${progress.percent.toFixed(2)}%\`);
          }
        });`}</code>
                    </pre>
                  </CardContent>
                </Card>
              </div>
        
              {/* File Download */}
              <div>
                <h2 className="text-2xl font-semibold mb-4">File Download</h2>
                <p className="text-muted-foreground mb-4">
                  Download files using <code className="font-mono">blob</code> responses and show download progress.
                </p>
                <Card>
                  <CardContent className="p-6">
                    <pre className="bg-muted/30 p-6 rounded-lg overflow-x-auto text-sm border font-mono">
                      <code>{`const downloadResponse = await setu.get('/api/download/large-file.zip', {
          responseType: 'blob',
          onDownloadProgress: ({ percent }) => {
            console.log(\`Downloading: \${percent.toFixed(2)}%\`);
          }
        });
        
        // Generate download link
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
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            <div>
              <h1 className="text-4xl font-bold mb-6 tracking-tight">Progress Tracking</h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Monitor upload and download progress for better user experience.
              </p>
            </div>
        
            <div className="space-y-12">
              {/* Upload Progress */}
              <div>
                <h2 className="text-2xl font-semibold mb-4">Upload Progress</h2>
                <p className="text-muted-foreground mb-4">
                  Use <code className="font-mono">onUploadProgress</code> to track file uploads in real-time.
                </p>
                <Card>
                  <CardContent className="p-6">
                    <pre className="bg-muted/30 p-6 rounded-lg overflow-x-auto text-sm border font-mono">
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
        
              {/* Download Progress */}
              <div>
                <h2 className="text-2xl font-semibold mb-4">Download Progress</h2>
                <p className="text-muted-foreground mb-4">
                  Use <code className="font-mono">onDownloadProgress</code> to track how much data has been received.
                </p>
                <Card>
                  <CardContent className="p-6">
                    <pre className="bg-muted/30 p-6 rounded-lg overflow-x-auto text-sm border font-mono">
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
        
//modifyed up to this //////////hiiii
      case "streaming":
        return (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            <div>
              <h1 className="text-4xl font-bold mb-6 tracking-tight">Streaming</h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Stream large files and data efficiently in Node.js environments.
              </p>
            </div>
        
            <div className="space-y-12">
              {/* Downloading a File as a Stream */}
              <div>
                <h2 className="text-2xl font-semibold mb-4">Downloading a File as a Stream</h2>
                <p className="text-muted-foreground mb-4">
                  Use <code className="font-mono">responseType: 'stream'</code> to download large files chunk by chunk in Node.js:
                </p>
                <Card>
                  <CardContent className="p-6">
                    <pre className="bg-muted/30 p-6 rounded-lg overflow-x-auto text-sm border font-mono">
                      <code>{`import fs from 'fs';
        import { pipeline } from 'stream/promises';
        import setu from 'setu';
        
        const downloadFile = async () => {
          const fileUrl = 'https://example.com/sample.mp4';
          const savePath = './sample.mp4';
        
          const res = await setu.get(fileUrl, {
            responseType: 'stream',
            onDownloadProgress: (progress) => {
              process.stdout.write('\\rDownloaded: \${(progress.loaded / 1024).toFixed(1)} KB');
            },
          });
        
          await pipeline(res.data, fs.createWriteStream(savePath));
          console.log('\\nDownload complete:', savePath);
        };
        
        downloadFile().catch((err) => console.error('Error:', err.message));`}</code>
                    </pre>
                  </CardContent>
                </Card>
              </div>
        
              {/* Uploading a File Using Stream */}
              <div>
                <h2 className="text-2xl font-semibold mb-4">Uploading a File Using Stream and FormData</h2>
                <p className="text-muted-foreground mb-4">
                  Stream file uploads with FormData and real-time tracking:
                </p>
                <Card>
                  <CardContent className="p-6">
                    <pre className="bg-muted/30 p-6 rounded-lg overflow-x-auto text-sm border font-mono">
                      <code>{`import fs from 'fs';
        import FormData from 'form-data';
        import setu from 'setu';
        
        const uploadFile = async () => {
          const uploadUrl = 'https://httpbin.org/post';
          const filePath = './sample.mp4';
        
          const form = new FormData();
          form.append('file', fs.createReadStream(filePath));
        
          let uploaded = 0;
          form.on('data', (chunk) => {
            uploaded += chunk.length;
            process.stdout.write('\\rUploaded: \${(uploaded / 1024).toFixed(1)} KB');
          });
        
          const res = await setu.post(uploadUrl, {
            body: form,
            responseType: 'json',
          });
        
          console.log('\\nUpload response:', res.data);
        };
        
        uploadFile().catch((err) => console.error('Error:', err.message));`}</code>
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
        
            <div className="space-y-12">
              {/* Basic Retry */}
              <div>
                <h2 className="text-2xl font-semibold mb-4">Basic Retry Configuration</h2>
                <p className="text-muted-foreground mb-4">
                  Setu will automatically retry network failures and timeouts if you configure <code className="font-mono">retries</code> and <code className="font-mono">retryDelay</code>.
                </p>
                <Card>
                  <CardContent className="p-6">
                    <pre className="bg-muted/30 p-6 rounded-lg overflow-x-auto text-sm border font-mono">
                      <code>{`// Retry failed requests automatically
        const response = await setu.get('/api/unreliable-endpoint', {
          retries: 3,           // Retry up to 3 times
          retryDelay: 1000      // Wait 1 second between retries
        });`}</code>
                    </pre>
                  </CardContent>
                </Card>
              </div>
        
              {/* Exponential Backoff */}
              <div>
                <h2 className="text-2xl font-semibold mb-4">Exponential Backoff</h2>
                <p className="text-muted-foreground mb-4">
                  To avoid overwhelming the server, you can implement exponential delays between retries:
                </p>
                <Card>
                  <CardContent className="p-6">
                    <pre className="bg-muted/30 p-6 rounded-lg overflow-x-auto text-sm border font-mono">
                      <code>{`async function makeRequestWithBackoff(url, config = {}) {
          const maxRetries = config.retries || 3;
          const baseDelay = config.retryDelay || 1000;
        
          for (let attempt = 0; attempt <= maxRetries; attempt++) {
            try {
              return await setu.get(url, { ...config, retries: 0 }); // Disable internal retry
            } catch (error) {
              if (attempt === maxRetries) throw error;
        
              const delay = baseDelay * Math.pow(2, attempt); // 1s, 2s, 4s...
              await new Promise(resolve => setTimeout(resolve, delay));
            }
          }
        }`}</code>
                    </pre>
                  </CardContent>
                </Card>
              </div>
        
              {/* Conditional Retry */}
              <div>
                <h2 className="text-2xl font-semibold mb-4">Conditional Retry (Retry on 5xx or Network Only)</h2>
                <p className="text-muted-foreground mb-4">
                  Retry only for recoverable errors like server errors (<code className="font-mono">5xx</code>) or connection drops:
                </p>
                <Card>
                  <CardContent className="p-6">
                    <pre className="bg-muted/30 p-6 rounded-lg overflow-x-auto text-sm border font-mono">
                      <code>{`async function makeRequestWithConditionalRetry(url, config = {}) {
          const maxRetries = config.retries || 3;
        
          for (let attempt = 0; attempt <= maxRetries; attempt++) {
            try {
              return await setu.get(url, { ...config, retries: 0 }); // Disable built-in retry
            } catch (error) {
              const shouldRetry = !error.response || 
                (error.response.status >= 500 && error.response.status < 600);
        
              if (!shouldRetry || attempt === maxRetries) throw error;
        
              const delay = 1000 * Math.pow(2, attempt); // 1s, 2s, 4s...
              await new Promise(resolve => setTimeout(resolve, delay));
            }
          }
        }`}</code>
                    </pre>
                  </CardContent>
                </Card>
              </div>
            </div>
        
            <Alert>
              <Info className="h-4 w-4" />
              <AlertDescription>
                Setu's built-in retries only apply to network-level failures and timeouts — not HTTP 4xx/5xx errors.
                <br />
                To retry on specific status codes (e.g. <code className="font-mono">500</code>, <code className="font-mono">502</code>), use custom logic like in the Conditional Retry example.
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
        
            <div className="space-y-12">
              {/* Basic Timeout Configuration */}
              <div>
                <h2 className="text-2xl font-semibold mb-4">Basic Timeout Configuration</h2>
                <p className="text-muted-foreground mb-4">
                  Set a timeout (in milliseconds) to automatically abort requests that take too long:
                </p>
                <Card>
                  <CardContent className="p-6">
                    <pre className="bg-muted/30 p-6 rounded-lg overflow-x-auto text-sm border font-mono">
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
        
              {/* Timeout with AbortController */}
              <div>
                <h2 className="text-2xl font-semibold mb-4">Timeout with AbortController</h2>
                <p className="text-muted-foreground mb-4">
                  Use <code className="font-mono">AbortController</code> for fine-grained manual cancellation control:
                </p>
                <Card>
                  <CardContent className="p-6">
                    <pre className="bg-muted/30 p-6 rounded-lg overflow-x-auto text-sm border font-mono">
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
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            <div>
              <h1 className="text-4xl font-bold mb-6 tracking-tight">How Setu.js Works</h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                A behind-the-scenes look at Setu.js — from environment detection to core request handling.
              </p>
            </div>
        
            <div className="space-y-12">
              {/* Module Resolution */}
              <div>
                <h2 className="text-2xl font-semibold mb-4">Module Resolution</h2>
                <p className="text-muted-foreground mb-4">
                  Setu.js intelligently resolves modules based on how it's imported and the environment it’s running in:
                </p>
                <Card>
                  <CardContent className="p-4">
                    <img
                      src="/path-to-your-upload/Screenshot from 2025-06-29 20-55-23.png"
                      alt="Module Resolution"
                      className="rounded-lg w-full"
                    />
                  </CardContent>
                </Card>
                <ul className="list-disc list-inside text-muted-foreground mt-4 space-y-2">
                  <li><code>import</code> triggers ESM path, while <code>require</code> uses CommonJS path.</li>
                  <li>Setu.js checks whether it's in Node.js or browser.</li>
                  <li>Loads the correct adapter from <code>dist/node/index.js</code> or <code>dist/browser/index.js</code>.</li>
                </ul>
              </div>
        
              {/* Runtime Architecture */}
              <div>
                <h2 className="text-2xl font-semibold mb-4">Runtime Architecture</h2>
                <p className="text-muted-foreground mb-4">
                  Here’s how Setu.js processes requests internally once the correct environment is resolved:
                </p>
                <Card>
                  <CardContent className="p-4">
                    <img
                      src="/path-to-your-upload/Screenshot from 2025-06-29 20-45-21.png"
                      alt="Architecture Diagram"
                      className="rounded-lg w-full"
                    />
                  </CardContent>
                </Card>
                <div className="text-muted-foreground mt-4 space-y-4 text-sm">
                  <p>
                    ✅ <strong>Environment Selection</strong>: Automatically detects whether you’re in a browser or Node.js.
                  </p>
                  <p>
                    ✅ <strong>Browser Adapter</strong>: Uses XHR for network requests, and handles upload/download progress.
                  </p>
                  <p>
                    ✅ <strong>Node Adapter</strong>: Uses the native HTTP/HTTPS module, with support for streaming and FormData.
                  </p>
                  <p>
                    ✅ <strong>Core Engine</strong>: Central pipeline that includes Retry Logic, Timeout & Abort, Response Parser, and the Request Builder.
                  </p>
                  <p>
                    ✅ <strong>Configuration Layer</strong>: Manages global and per-request settings, including headers, baseURL, and timeout.
                  </p>
                  <p>
                    ✅ <strong>Utilities</strong>: Tools like Query Builder and Header Merger enhance flexibility and reduce boilerplate.
                  </p>
                  <p>
                    ✅ <strong>Error Manager</strong>: Captures and reports consistent error formats across both environments.
                  </p>
                </div>
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
