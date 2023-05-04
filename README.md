# SpartacusMock

> This project is still in development and not ready for production use.

This project offers you the possibility, to mock the OCC Endpoint of your Spartacus Storefront. It uses the [Mock Service Worker](https://mswjs.io/) to mock the API calls.

## How to use

### Getting started

The package offers a schematics to install the package and add the needed file changes in your spartacus project.

1. Open a terminal and navigate to the root folder of your angular / spartacus project (the folder where the `angular.json` is located)
2. Install the package: `ng add @valantic/spartacus-mock`
3. Check the automatically added changes in the files
   1. `angular.json`
   2. `package.json`
   3. `src/environments/environment.ts`
   4. `src/main.ts`
4. Start the spartacus instance as you would normally do
5. Open your browser
   1. Notice the message in the console: `[MSW] Mocking enabled.`
   2. All mocked calls are still normally visible in the network tab of your browser's developer tools
   3. For more information, see the [MSW documentation](https://mswjs.io/docs/api/rest)

### Define Mock Data

Out of the box, `spartacus-mock` comes with all mock-data needed to run the standard spartacus electronic sample store.
For your project, you probably want to define your own mock-data for the default endpoints or also add more mocked pages / components / endpoints.

### Mocking Endpoints

TODO

### Mocking Pages

TODO

### Mocking Components

TODO

## GitHub issues

If you encounter a problem with this library or if you have a new feature you'd like to see in this project,
please create [a new issue](https://github.com/valantic/spartacus-mock/issues/new/choose).
