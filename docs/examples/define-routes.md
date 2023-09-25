# Define Routes

You need to define routes for your custom endpoints or if you want to adjust the url / params of a default endpoint.
Default Endpoints can use the `getDefaultRoutes` [function](../api-reference/default-routes.md)

1. Create a routes file `src/mock-server/routes.ts`
2. Add a routes function which returns an object like the following:

```ts
import { Environment } from 'src/environments/environment.model';

export function getRoutes(environment: Environment) {
  const occEndpoint = `${environment.backend.occ?.baseUrl}${environment.backend.occ?.prefix}`;

  return {
    customEndpoint: `${occEndpoint}:baseSiteId/my-custom-endpoint`,
  };
}
```
