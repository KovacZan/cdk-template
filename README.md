# CDK Template

![banner](./banner.png)

This is a blank project for AWS CDK development with TypeScript. The app is executed with
[tsx](https://github.com/egoist/tsx) and tested with [Vitest](https://vitest.dev).

The `cdk.json` file tells the CDK Toolkit how to execute your app.

## Requirements

- Node.js >= 24
- pnpm >= 10 (`corepack enable pnpm`)

## Setup

```
pnpm install
```

## Useful commands

- `pnpm build` compile typescript to js
- `pnpm watch` watch for changes and compile
- `pnpm test` run the Vitest unit tests
- `pnpm cdk synth` emits the synthesized CloudFormation template
- `pnpm cdk diff` compare deployed stack with current state
- `pnpm cdk deploy` deploy this stack to your default AWS account/region
- `pnpm lint` lint the source with ESLint (flat config in `eslint.config.mjs`)
- `pnpm format` format the codebase with Prettier

## Git hooks

The `prepare` script wires husky so `lint-staged` runs ESLint and Prettier on every commit.
