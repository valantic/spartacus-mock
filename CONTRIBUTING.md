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

### Prerequisites

1. Clone the repository
2. Make sure, you use the same node version for your project and the spartacus-mock, to make npm link work
3. Make sure, you have the compiled spartacus libraries somewhere available (SAP RBSC via S-User Token) or self hosted on a Gitlab Private Repo
4. Add an `.npmrc` file containing the credentials
5. Run `npm install` in the root of this project to install the angular lib dependencies
6. Run `npm install` in `projects/spartacus-mock` to install the schematics dependencies

### Develop the mock-data

1. Do your changes in the mock-data
2. Go to the dist folder of the package `cd dist/spartacus-mock`
3. Run `npm link` in the dist folder to be able to use the current dev version of the library in your spartacus project
4. Go back to the project root `cd ../..`
5. Run `npm run watch` to start the watch mode
6. When you're done, make a pull request with your changes

### Develop the schematics

1. Do your changes in the schematics in `projects/spartacus-mock/schematics`
2. Run `npm run build` in `projects/spartacus-mock` to build the schematics
3. When you're done, make a pull request with your changes

### Use the library while developing

1. Make sure, the build tasks have been run for both the lib and the schematics
2. Run `npm link` in the folder `dist/spartacus-mock` of this library to be able to use the current dev version of the library in your spartacus project
3. Run `npm link @valantic/spartacus-mock` in your spartacus project's root folder to link the dev version of the library
4. Run `ng add @valantic/spartacus-mock` in your spartacus project's root folder to add the library and run the schematics
5. Run `npm link @valantic/spartacus-mock` again, since running `ng add` seems to delete the link

### Build the library

1. Run `npm run build` in the root of this project to build the angular lib
2. Run `npm run build` in `projects/spartacus-mock` to build the schematics

### Releasing

1. Make sure, you have described your changes in the file [CHANGELOG.md](CHANGELOG.md)
2. Make sure, you have done the steps to build the library and the schematics
3. Move all changes in the file [CHANGELOG.md](CHANGELOG.md) from below `## Next` below a new Paragraph with the
   to be released version
4. Change the Version in the [package.json](projects/spartacus-mock/package.json) of the angular lib
5. Create a Git Tag with the to be released version number ` git tag x.x.x`
6. Commit and Push the changes to the remote (Make sure to also push Tags `git push origin --tags`)
7. Open the terminal and go to the folder `dist/spartacus-mock`
8. Login to NPM `npm login` if you not already are logged in
9. Push the Release `npm publish --access public`
10. [Create the Release](https://github.com/valantic/spartacus-mock/releases/new) on the github repo with the
    changes from the [CHANGELOG.md](CHANGELOG.md)
11. Make sure you have pushed all changes to the Repo
