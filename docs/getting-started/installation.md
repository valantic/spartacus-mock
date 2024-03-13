# Installation

The package offers a schematics to install the package and add the needed file changes in your spartacus project.

## Schematics installation

1. Run the angular schematics `ng add @valantic/spartacus-mock` to install the package, add all needed changes and generate the boilerplate files.
2. Check all the file changes made by the schematics, restore potential previous custom changes, as the adjusted files where copied from spartacus-mock
3. Optional: If you use PWA functionality, enhance your `ngsw-config.json` section `app` config `files` array with `"!/*mock*.js"`. This makes sure, the service worker does not load the mock server files.
   ```json
   {
     "name": "app",
     "installMode": "prefetch",
     "resources": {
       "files": [
         "/favicon.ico",
         "/index.html",
         "/manifest.webmanifest",
         "/*.css",
         "/*.js",
         "!/*mock*.js"
       ]
     }
   }
   ```

## Manual installation

1. Open a terminal and navigate to the root folder of your angular / spartacus project (the folder where the `angular.json` is located)
2. Run `npm i @valantic/spartacus-mock@3.1.0 -d` to install the package as devDependency
3. Run `npm i msw@2.2.3 -d` to install the package as devDependency
4. Enhance `angular.json` architect build target assets array with `"src/mockServiceWorker.js"`
5. Enhanced `package.json` with the following object in the root level
   ```
   "msw": {
      "workerDirectory": "src"
   }
   ```
6. Enhance your `src/environments/environment.ts` file with the following properties (these properties are needed for the mock server to work)
   1. `mockServer: true,`
   2. with the following object in the root level
   ```
   backend: {
     occ: {
       baseUrl: '<your-spartacus-dev-env-url>',
       prefix: '/occ/v2/',
     },
   },
   ```
7. Add an `src/environments/environment.model.ts` to have better type safety
8. Replace the content of the file `src/main.ts` with the following content:

   ```ts
   import { enableProdMode } from '@angular/core';
   import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
   import { AppModule } from './app/app.module';
   import { environment } from './environments/environment';

   if (environment.production) {
     enableProdMode();
   }

   async function prepare(): Promise<
     ServiceWorkerRegistration | undefined
   > {
     if (!environment.mockServer) {
       return undefined;
     }

     const { prepareMockServer } = await import(
       /* webpackChunkName: "mock-server" */ './mock-server'
     );

     return prepareMockServer();
   }

   function bootstrap() {
     platformBrowserDynamic()
       .bootstrapModule(AppModule)
       .catch((err) => console.error(err));
   }

   if (document.readyState === 'complete') {
     prepare().then(() => bootstrap());
   } else {
     document.addEventListener('DOMContentLoaded', () =>
       prepare().then(() => bootstrap())
     );
   }
   ```

   Merge potential previous custom changes with the above content, if you have any

9. Optional: Run the schematics `ng boilerplate @valantic/spartacus-mock` and check the boilerplate files generated in the `src/mock-server` folder for an easier start

   1. `src/mock-server/index.ts`
   2. `src/mock-server/routes.ts`
   3. `src/mock-server/handlers.ts`
   4. `src/mock-server/pass-through.ts`
   5. `src/mock-server/mock-data/languages/languages.ts`

10. Optional: If you use PWA functionality, enhance your `ngsw-config.json` `app` config `files` array with `"!/*mock*.js"`. This makes sure, the service worker does not load the mock server files.

```json
{
  "name": "app",
  "installMode": "prefetch",
  "resources": {
    "files": [
      "/favicon.ico",
      "/index.html",
      "/manifest.webmanifest",
      "/*.css",
      "/*.js",
      "!/*mock*.js"
    ]
  }
}
```
