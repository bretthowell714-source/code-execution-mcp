# Installing Solargystix SDK in Antigravity

This guide covers setting up the Solargystix TypeScript SDK in Google's Antigravity IDE.

## Prerequisites

- Antigravity IDE installed (latest version)
- Node.js 20 LTS or later
- API key for Solargystix API

## Installation

### Step 1: Create a New Project

1. Open Antigravity
2. Create a new TypeScript/JavaScript project or open an existing one
3. Open the integrated terminal

### Step 2: Install the SDK

Install the Solargystix package using npm or pnpm:

```bash
npm install solargystix
```

Or with pnpm:

```bash
pnpm add solargystix
```

### Step 3: Configure Your API Key

Create a `.env` file in your project root:

```bash
PETSTORE_API_KEY=your_api_key_here
```

> [!IMPORTANT]
> Never commit your API keys to version control. Add `.env` to your `.gitignore` file.

### Step 4: Basic Usage

Create a new file (e.g., `index.ts`) and add:

```typescript
import Solargystix from 'solargystix';

const client = new Solargystix({
  apiKey: process.env.PETSTORE_API_KEY,
});

async function main() {
  const order = await client.store.orders.create({
    petId: 1,
    quantity: 1,
    status: 'placed',
  });

  console.log(order.id);
}

main();
```

### Step 5: Run Your Code

Use Antigravity's integrated terminal or run button to execute:

```bash
npx ts-node index.ts
```

Or if you've set up a build process:

```bash
npm run build
node dist/index.js
```

## Antigravity-Specific Features

### TypeScript IntelliSense

Antigravity provides excellent TypeScript support. The Solargystix SDK includes complete type definitions, so you'll get:

- Auto-completion for all API methods
- Inline documentation on hover
- Type checking for request parameters and responses

### Debugging

To debug your Solargystix application in Antigravity:

1. Set breakpoints in your code by clicking in the gutter
2. Use the Debug panel to start a Node.js debugging session
3. Step through your code to inspect API calls and responses

### Environment Variables

Antigravity supports `.env` files natively. Your API key configuration will be automatically loaded when you:

1. Install the `dotenv` package: `npm install dotenv`
2. Add to your entry file: `import 'dotenv/config';`

## Available Features

The Solargystix SDK provides access to:

- **Store Operations**: Manage orders and inventory
- **Request & Response Types**: Full TypeScript support
- **Error Handling**: Typed error classes for different scenarios
- **Retries**: Automatic retry logic for failed requests
- **Timeouts**: Configurable request timeouts

For complete API documentation, see the [main README](../../README.md) and [API reference](../../api.md).

## Troubleshooting

### "Cannot find module 'solargystix'"

Make sure you've installed the package:

```bash
npm install solargystix
```

And check that your `node_modules` directory exists.

### TypeScript errors

Ensure you have TypeScript 4.9 or later:

```bash
npm install -D typescript@latest
```

### API key issues

- Verify your API key is correctly set in the `.env` file
- Ensure you're loading environment variables (use `dotenv` package)
- Check that the key hasn't expired or been revoked

## Next Steps

- Explore the [full API documentation](../../api.md)
- Read about [error handling](../../README.md#handling-errors)
- Learn about [advanced usage patterns](../../README.md#advanced-usage)
- Check out the [examples directory](../../examples/) for sample code

## Differences from Other IDEs

- **IntelliSense**: Antigravity's TypeScript support is particularly robust
- **Debugging**: Native Node.js debugging support with visual breakpoints
- **Terminal**: Integrated terminal makes it easy to run npm commands
- **Environment**: Automatic `.env` file support when using dotenv

## Support

If you encounter issues:

1. Check the [main README](../../README.md) for common solutions
2. Review the [API documentation](../../api.md)
3. Open an issue on [GitHub](https://github.com/bretthowell714-source/code-execution-mcp/issues)
