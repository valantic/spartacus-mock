# Configuration

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
6. You can customize the mock server by defining more option for the `mockConfig` in the file `src/main.ts`:

```ts
const mockConfig: MockConfig = {
  enableWorker: environment.mockServer || false,
  environment,
};
```

> For more information how you can configure the mock server, see the [Options](../api-reference/options.md) page of the api reference.

> For more information how you can define your mock-data, see the [Examples](../examples/README.md) page.

> For more information about the underlying Mock Service Worker tool, see the [MSW documentation](https://mswjs.io/docs/api/rest).
