# spartacus-mock

This project offers you the possibility, to mock the API (OCC) Endpoints of your ([Spartacus](https://github.com/SAP/spartacus)).
It uses the Mock Service Worker (MSW) [library](https://mswjs.io/) to mock the API calls.

## Table of Contents

- [Versions](#versions)
- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Configuration](#configuration)
- [Configuration](#configuration)
- [Developer Documentation](#developer-documentation)
- [Found an issue?](#github-issues)
- [Contribution Guidelines](#contribution-guidelines)

# Versions

This project is tested to work with the listed angular versions and the listed Spartacus Versions in this table.

| Angular          | Spartacus | spartacus-mock |
| ---------------- | :-------: | :------------: |
| >=15.0.0 <16.0.0 |   6.x.x   |      2.x       |
| >=14.0.0 <15.0.0 |   5.x.x   |      1.x       |

It is possible that it works with other versions, but not tested.

# Getting Started

The package offers a schematics to install the package and add the needed file changes in your spartacus project.

> Please note: The schematics adjusts below listed files in your project. If you already have made changes in these files,
> please check the changes carefully.

## Installation

1. Open a terminal and navigate to the root folder of your angular / spartacus project (the folder where the `angular.json` is located)
2. Run the schematics of the package: `ng add @valantic/spartacus-mock`
3. Check the automatically added changes in the files
4. `angular.json`
5. `package.json`
6. `src/environments/environment.ts`
7. `src/environments/environment.model.ts`
8. `src/main.ts`

## Configuration

1. Enhance the file `src/app/spartacus/spartacus-configuration.module.ts` with the following config:

```ts
provideConfig(<OccConfig>{
  backend: {
    occ: {
      prefix: environment.backend.occ.prefix,
      baseUrl: environment.backend.occ.baseUrl,
    }
  },
}),
```

2. Start the spartacus instance as you would normally do: `npm run dev` (or your defined npm task)
3. Open your browser
4. Notice the message in the console: `[MSW] Mocking enabled.`
5. All mocked calls are still normally visible in the network tab of your browser's developer tools

> For more information how you can configure the mock server, see the [Options](https://valantic.gitbook.io/spartacus-mock/api-reference) page.

> For more information how you can define your mock-data, see the [Examples](https://valantic.gitbook.io/spartacus-mock/examples) page.

> For more information about the underlying Mock Service Worker tool, see the [MSW documentation](https://mswjs.io/docs/api/rest).

# Developer Documentation

The developer documentation including api reference & examples can be found [here](https://valantic.gitbook.io/spartacus-mock/).

# GitHub issues

If you encounter a problem with this library or if you have a new feature you'd like to see in this project,
please create [a new issue](https://github.com/valantic/spartacus-mock/issues/new/choose).

# Contribution Guidelines

The contribution guidelines can be found [here](../../CONTRIBUTING.md).
