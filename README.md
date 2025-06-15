# Hono RPC Starter

This project is a starter template for building a server-client application using Hono Rpc and TypeScript. It includes a basic setup for serving and consuming a REST API.

## Project Structure

- **src/index.ts**: Sets up the server using Hono and defines the routes.
- **src/routes.ts**: Contains the route definitions for handling post-related requests.
- **src/client.ts**: Provides a client setup for consuming the API endpoints.
- **tsconfig.json**: TypeScript configuration file.
- **package.json**: Project dependencies and scripts.

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or pnpm

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/hono-rpc-starter.git
   ```

2. Navigate to the project directory:

   ```bash
   cd hono-rpc-starter
   ```

3. Install the dependencies:

   ```bash
   pnpm install
   ```

### Running the Application

1. **Start the server:**

   ```bash
   pnpm server
   ```

   The server will start on `http://localhost:3000`.

2. **Start the client:**

   ```bash
   pnpm client
   ```

### Building for Production

To build the project for production, run:

```bash
pnpm build
```

This will compile the TypeScript files into JavaScript in the `dist` directory.

## API Endpoints

- **GET /**: Returns a simple "Hello Hono!" message.
- **GET /posts/all**: Fetches all posts.
- **GET /posts/id:slug**: Fetches a specific post by slug.

## License

This project is licensed under the MIT License.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any changes.

## Acknowledgements

This project uses the [Hono](https://github.com/honojs/hono) framework and the [Zod](https://github.com/colinhacks/zod) validation library.
