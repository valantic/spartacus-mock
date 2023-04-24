# Contributing Guidelines

_Pull requests, bug reports, and all other forms of contribution are welcomed and highly encouraged!_ :octocat:

### Contents

- [Code of Conduct](#book-code-of-conduct)
- [Asking Questions](#bulb-asking-questions)
- [How can I Contribute?](#inbox_tray-how-can-i-contribute)

> **This guide serves to set clear expectations for everyone involved with the project so that we can improve it
> together while also creating a welcoming space for everyone to participate. Following these guidelines will help
> ensure a positive experience for contributors and maintainers.**

## :book: Code of Conduct

Please review our [Code of Conduct](./CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code.

## :bulb: Asking Questions

If you have any question that does not relate to a bug or a feature request, please use [GitHub Discussions](https://github.com/valantic/spartacus-mock/discussions) instead of GitHub issues.

## :inbox_tray: How can I Contribute?

### GitHub issues

If you encounter a problem with this library or if you have a new feature you'd like to see in this project,
please create [a new issue](https://github.com/valantic/spartacus-mock/issues/new/choose).

### Join the Dev Team

1. Clone the repository
2. Make sure, you use the same node version for your project and the spartacus-mock, to make npm link work
3. Make sure, you have the compiled spartacus libraries somewhere available (SAP RBSC via S-User Token) or self hosted on a Gitlab Private Repo
4. Add an `.npmrc` file containing the credentials
5. Run `npm install` in the root of this project
6. Run `npm link` in the root of this project to be able to use the current dev version of the library in your spartacus project
7. Run `npm run watch` to start the watch mode
8. Run `npm link @valantic/spartacus-mock` in your spartacus project's root folder to link the dev version of the library
9. When you're done, make a pull request with your changes
