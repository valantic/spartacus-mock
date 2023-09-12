# spartacus-mock

This project offers you the possibility, to mock the API (OCC) Endpoints of your [Composable Storefront](https://github.com/SAP/spartacus) (Spartacus).
It uses the [Mock Service Worker](https://mswjs.io/) to mock the API calls.

## Table of Contents

- [Versions](#versions)
- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Configuration](#configuration)
- [Feature Scope](#feature-scope)
- [API Reference](#api-reference--examples)
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

## Installation

1. Open a terminal and navigate to the root folder of your angular / spartacus project (the folder where the `angular.json` is located)
2. Install the package: `ng add @valantic/spartacus-mock`
3. Check the automatically added changes in the files
   1. `angular.json`
   2. `package.json`
   3. `src/environments/environment.ts`
   4. `src/environments/environment.model.ts`
   5. `src/main.ts`

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

2. Start the spartacus instance as you would normally do: `npm run dev` (or your defined npm script)
3. Open your browser
4. Notice the message in the console: `[MSW] Mocking enabled.`
5. All mocked calls are still normally visible in the network tab of your browser's developer tools
6. For more information about the underlying Mock Service Worker tool, see the [MSW documentation](https://mswjs.io/docs/api/rest).

## Feature Scope

Spartacus-Mock currently offers mock data for the following spartacus features / pages for the default electronics store:

- Home Page
- Content Page
- Product Categories
- Product Search
- Product Detail
- Cart
- Checkout
- My Account (except Order Returns)

See [Roadmap](./docs/roadmap.md) for more information about the planned features.

# API Reference & Examples

The developer documentation including api reference & examples can be found [here](./docs/README.md).

## Contribution Guidelines

The contribution guidelines can be found [here](./CONTRIBUTING.md).
