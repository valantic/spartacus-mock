# Changelog

# next

# 4.0.1

- fix wrong tslib version

# 4.0.0

- Update to Angular 17 and Spartacus 2211.x
- Update to msw 2.2.3

# 3.5.0

- extract translation handler to be able to use it without setting enableDefaultData to true

# 3.4.0

- Update to version 2.1.2 of msw

# 3.3.0

- Update docs

# 3.2.0

- Improve installation docs
- Add boilerplate schematics

# 3.1.0

- Update to latest version of msw

## 3.0.0

- #58 Update to msw 2.x, update all handlers to use the new syntax, see breaking changes below
- #61 Improve separation of defaultData and inclusion mode
- #62 Add quiet option to disable console output

### Breaking Changes

- rename config option `disableDefaultData` to `enableDefaultData`
- add new options `inclusionMode` (previously used `disableDefaultData`)
- use msw Version 2.x, check Migration Guide [here](https://mswjs.io/docs/migrations/1.x-to-2.x)

## 2.2.0

- #50 Updates Spartacus dependency to latest 6.4.0
- #50 Updates Node Version to latest 18.x
- #50 Updates MSW Version to 1.3.1
- #48 Update Faker.js version to 8.x and replaces deprecated methods
- #42 Enhance documentation to show the available default routes
- #41 Enhance documentation to show the options for spartacus-mock

## 2.1.0

- Fix bug with translations

## 2.0.0

- Add support for Angular 15 and Spartacus 6.3.0
- Add option to use custom translations without defining a custom handler for the translation route
- Add whitelisting mode to use within an existing project

### Breaking Changes

- rename config option `passThroughUrls` to `passThroughRequests`
- rename interface `PassThroughUrl` to `MockRequest`

## 1.0.3

- Add faker to project dependencies
- Temporary add types to project dev dependencies to fix bug when using library

## 1.0.1

- Cleanup docs

## 1.0.0

- Initial Release
