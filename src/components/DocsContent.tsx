
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Separator } from "@/components/ui/separator";
import { CheckCircle, Globe, Zap, Shield, Package } from "lucide-react";

interface DocsContentProps {
  activeSection: string;
}

const DocsContent = ({ activeSection }: DocsContentProps) => {
  const renderContent = () => {
    switch (activeSection) {
      case "introduction":
        return (
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold mb-4">Introduction</h1>
              <p className="text-lg text-muted-foreground mb-6">
                Setu means "bridge" in Sanskrit — A tiny, isomorphic HTTP client that bridges the gap between frontend and backend environments with a consistent, modern API.
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
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
              <h2 className="text-2xl font-semibold mb-4">Why Setu.js?</h2>
              <div className="space-y-3">
                {[
                  "Fully isomorphic (runs in both browser & Node.js)",
                  "Supports all HTTP methods: GET, POST, PUT, PATCH, DELETE",
                  "Built-in retry mechanism (configurable delay and count)",
                  "Built-in timeout support",
                  "Upload and download progress tracking",
                  "Stream support in Node.js",
                  "Lightweight, tree-shakable, and zero-dependency"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case "installation":
        return (
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold mb-4">Installation</h1>
              <p className="text-lg text-muted-foreground mb-6">
                Choose your preferred package manager to install Setu.js:
              </p>
            </div>

            <div className="grid gap-4">
              <Card>
                <CardHeader>
                  <CardTitle>npm</CardTitle>
                </CardHeader>
                <CardContent>
                  <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                    <code>npm install setu.js</code>
                  </pre>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>yarn</CardTitle>
                </CardHeader>
                <CardContent>
                  <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                    <code>yarn add setu.js</code>
                  </pre>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>pnpm</CardTitle>
                </CardHeader>
                <CardContent>
                  <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                    <code>pnpm add setu.js</code>
                  </pre>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>bun</CardTitle>
                </CardHeader>
                <CardContent>
                  <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                    <code>bun add setu.js</code>
                  </pre>
                </CardContent>
              </Card>
            </div>

            <Alert>
              <AlertDescription>
                Setu.js works out of the box with no additional configuration required. It automatically detects the environment and uses the appropriate HTTP implementation.
              </AlertDescription>
            </Alert>
          </div>
        );

      case "quick-start":
        return (
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold mb-4">Quick Start</h1>
              <p className="text-lg text-muted-foreground mb-6">
                Get up and running with Setu.js in minutes with these simple examples.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">Basic Usage</h2>
              <Card>
                <CardContent className="p-6">
                  <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
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
                  <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
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

            <Alert>
              <AlertDescription>
                That's it! You're ready to start making HTTP requests with Setu.js. Check out the API Reference for more advanced features like progress tracking, retry logic, and streaming.
              </AlertDescription>
            </Alert>
          </div>
        );

      default:
        return (
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold mb-4">
                {activeSection.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
              </h1>
              <p className="text-lg text-muted-foreground">
                This section is under construction. Please check back later for detailed documentation.
              </p>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="flex-1 px-8 py-6">
      <div className="max-w-4xl mx-auto">
        {renderContent()}
      </div>
    </div>
  );
};

export default DocsContent;
