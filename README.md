# React Starter Template

## Guide

To start a new project, clone this repo and run the following commands

```bash
$ npm install
$ npx husky install
$ npm run dev
```

## More Tools

### Graphql

Use [graphql code generator](https://the-guild.dev/graphql/codegen/docs/guides/react-vue) to generate typescript types from graphql schema and operations. Use [graphql-request](https://github.com/jasonkuhrt/graphql-request) with `tanstack/react-query` to make graphql requests.

```bash
$ npm install graphql graphql-request
$ npm install -D @graphql-codegen/cli @graphql-codegen/client-preset
```

```ts
import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "https://localhost:4000/graphql",
  documents: ["src/**/*.tsx"],
  ignoreNoDocuments: true,
  generates: {
    "./src/gql/": {
      preset: "client"
    }
  }
};
export default config;
```
