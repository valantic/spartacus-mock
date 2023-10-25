# Changelog

## next

## 2.4.0

- Remove default translations as they otherwise get added to the project's main bundle

## 2.3.2

- Adjust name of internal translation function

## 2.3.1

- Soften peer dependencies requirements

## 2.3.0

- Updates Spartacus dependency to latest 6.5.1
- Updates MSW Version to 1.3.2
- Update angular dependencies

## 2.2.0

- #50 Updates Spartacus dependency to latest 6.4.0
- #50 Updates Node Version to latest 18.x
- #50 Updates MSW Version to 1.3.1
- #48 Update Faker.js version to 8.x and replaces deprecated methods
- #42 Enhance documentation to show the available default routes
- #41 Enhance documentation to show the options for spartacus-mock

## 2.1.0

- Remove default translations for non-standard spartacus packages

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
