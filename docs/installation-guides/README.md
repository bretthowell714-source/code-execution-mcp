# Installation Guides

This directory contains detailed installation instructions for the Solargystix TypeScript SDK across different development environments and IDEs.

## Installation Guides by IDE

- **[Antigravity](install-antigravity.md)** - Installation guide for Google Antigravity IDE

## General Installation

For general installation instructions, see the [main README](../../README.md#installation).

## Quick Start

```bash
npm install solargystix
```

```typescript
import Solargystix from 'solargystix';

const client = new Solargystix({
  apiKey: process.env.PETSTORE_API_KEY,
});
```

## Need Help?

If you don't see your IDE or environment listed, the general installation instructions in the [main README](../../README.md) should work for most TypeScript/JavaScript development environments.

For issues or questions, please [open an issue](https://github.com/bretthowell714-source/code-execution-mcp/issues) on GitHub.
