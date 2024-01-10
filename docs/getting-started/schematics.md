# Schematics

This package offers the following angular custom schematics to speedup your beginning with spartacus-mock:

| schematics name | command                                   | Description                                                                                                                                                                                                             |
| --------------- | ----------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ng add          | `ng add @valantic/spartacus-mock`         | This schematics command installs all the needed dependencies, copies the needed <br/>file changes in the files `package.json`, `angular.json`, `main.ts`, `environment.ts`. It also runs the schematics `boilerplate`.  |
| boilerplate     | `ng boilerplate @valantic/spartacus-mock` | This schematics command adds the folder `src/mock-server/mock-data`, and the files `routes.ts`, `handler.ts`, `pass-through.ts`, some example mock-data files and the `index.ts` file to be imported in your `maint.ts` |
