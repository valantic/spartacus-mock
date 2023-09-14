# README

## spartacus-mock

This project offers you the possibility, to mock the API (OCC) Endpoints of your Composable-Storefront ([Spartacus](https://github.com/SAP/spartacus)). It uses the Mock Service Worker (MSW) [library](https://mswjs.io/) to mock the API calls.

* [Getting Started](./#getting-started)
* [Versions](./#versions)
* [Motivation](./#motivation)
* [Feature Scope](./#feature-scope)
* [Documentation](./#documentation)

## Getting started

You want to get started quickly? Follow the steps of the [Getting Started](getting-started/) section.

## Versions

This project is tested to work with the listed angular versions and the listed Spartacus Versions in this table.

| Angular          | Spartacus | spartacus-mock |
| ---------------- | :-------: | :------------: |
| >=15.0.0 <16.0.0 |   6.x.x   |       2.x      |
| >=14.0.0 <15.0.0 |   5.x.x   |       1.x      |

It is possible that it works with other versions, but not tested.

## Motivation

When building Frontend application for SAP Commerce (former hybris), it was always a little bit annoying, as the frontend engineers needed to run hybris on their local machines. Additionally, one needed to wait until new features where built by the backend to be able to build the frontend for it.

In the new world of composable storefront (former spartacus), it already got easier as it is now possible to use a remote environment as backend. The problem of features not being ready yet or not being deployed to the remote environment still exists.

Spartacus-mock tries to solve both problems since you don't need to wait anymore, until

* "...that dev system is ready"
* "...that feature has been merged & deployed by the backend"
* "...that page / component has been added in Smartedit by the backend"

It comes with the mock-data for the standard electronics store.

You can then define your own custom mock-data tailored to your custom spartacus project. Adding new pages and components in no time helps you, developing your actual feature, without waiting until the Backend has finished or the hassle of running a local hybris ;-).

## Feature Scope

Spartacus-Mock currently offers mock data for the following spartacus features / pages for the default electronics store:

* Home Page
* Content Page
* Product Categories
* Product Search
* Product Detail
* Cart
* Checkout
* My Account (except Order Returns)

See [Roadmap](https://valantic.gitbook.io/spartacus-mock/roadmap) for more information about the planned features.

## Documentation

* [Getting Started](https://valantic.gitbook.io/spartacus-mock/getting-started)
* [Examples](https://valantic.gitbook.io/spartacus-mock/examples)
* [API Reference](https://valantic.gitbook.io/spartacus-mock/api-reference)
