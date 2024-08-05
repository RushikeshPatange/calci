# Calci

A `monorepo` that demonstrates `workspaces` integration with a `package-based design`.

## Folder Structure
```
.
├── LICENSE
├── README.md
├── node_modules (will be visible on yarn install in root directory)
│   └── @calci
│       ├── adder -> ../../packages/adder (symlinks)
│       └── subtractor -> ../../packages/subtractor (symlinks)
├── package.json
├── packages
│   ├── adder
│   │   ├── index.js
│   │   └── package.json
│   └── subtractor
│       ├── index.js
│       └── package.json
├── test
│   ├── adder
│   │   ├── adder.js
│   │   └── package.json
│   └── subtractor
│       ├── package.json
│       └── subtractor.js
└── yarn.lock
```

You can find more about yarn workspaces [here](https://yarnpkg.com/features/workspaces).

## Getting Started

### Installation of Necessary Packages
To install all the packages in the monorepo, run:
```sh
yarn install
```

### Running Tests

#### Test `@calci/adder`
```sh
yarn workspace adder test -- <num1> <num2>
```

#### Test `@calci/subtractor`
```sh
yarn workspace subtractor test -- <num1> <num2>
```

#### Test Both Packages in One Go
```sh
yarn run test
```

The `monorepo` design along with `workspaces` makes it possible to use the packages within the repository efficiently. This design pattern also allows developers to publish packages independently to the npm registry.

## Publishing Packages
To publish the `@calci/adder` package to the npm registry, follow these steps:
```sh
cd packages/adder # Assuming you are at the root
yarn login
yarn publish --access public
```

You can find more on package publishing using yarn [here](https://classic.yarnpkg.com/lang/en/docs/cli/publish/).

## Helpful Links
- [Workspaces with yarn](https://medium.com/tribalscale/using-yarn-workspaces-to-create-a-monorepo-33203152d0c6)
- [Monorepo guide](https://monorepo.tools/)