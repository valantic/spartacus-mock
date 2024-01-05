# Installation

The package offers a schematics to install the package and add the needed file changes in your spartacus project.

1. Open a terminal and navigate to the root folder of your angular / spartacus project (the folder where the `angular.json` is located)
2. Install the package: `ng add @valantic/spartacus-mock`
3. Check the automatically added changes in the files
   1. `angular.json`
   2. `package.json`
   3. `src/environments/environment.ts`
   4. `src/environments/environment.model.ts`
   5. `src/main.ts`
4. Check the boilerplate files generated in the `src/mock-server` folder for an easier start
   1. `src/mock-server/index.ts`
   2. `src/mock-server/routes.ts`
   3. `src/mock-server/handlers.ts`
   4. `src/mock-server/pass-through.ts`
   5. `src/mock-server/mock-data/languages/languages.ts`
