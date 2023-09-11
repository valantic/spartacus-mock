# spartacus-mock

This project offers you the possibility, to mock the API (OCC) Endpoints of your Composable Storefront (Spartacus). It uses the [Mock Service Worker](https://mswjs.io/) to mock the API calls.

## Table of Contents

- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Usage](#usage)
- [Documentation](#documentation)

# Getting Started

The package offers a schematics to install the package and add the needed file changes in your spartacus project.

1. Open a terminal and navigate to the root folder of your angular / spartacus project (the folder where the `angular.json` is located)
2. Install the package: `ng add @valantic/spartacus-mock`
3. Check the automatically added changes in the files
4. `angular.json`
5. `package.json`
6. `src/environments/environment.ts`
7. `src/environments/environment.model.ts`
8. `src/main.ts`
9. Enhance the file `src/app/spartacus/spartacus-configuration.module.ts` with the following config:

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

5. Start the spartacus instance as you would normally do: `npm run dev` (or your defined npm script)
6. Open your browser
7. Notice the message in the console: `[MSW] Mocking enabled.`
8. All mocked calls are still normally visible in the network tab of your browser's developer tools
9. For more information, see the [MSW documentation](https://mswjs.io/docs/api/rest)

# Documentation

## Usage Documentation

The developer usage documentation can be found [here](./projects/spartacus-mock/README.md).

## Contribution Documentation

The contribution documentation can be found [here](./CONTRIBUTING.md).
