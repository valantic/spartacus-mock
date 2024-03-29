# Contributing Guidelines

_Pull requests, bug reports, and all other forms of contribution are welcomed and highly encouraged!_ :octocat:

### Contents

- [Code of Conduct](#book-code-of-conduct)
- [Asking Questions](#bulb-asking-questions)
- [How can I Contribute?](#inboxtray-how-can-i-contribute)

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

1. Make sure, the build (or watch) tasks have been run for both the lib and the schematics
   1. For the schematics, the build task needs to be run once to copy the `collection.json` to the dist folder
2. Make sure to use the same node versions for spartacus-mock and your test project to make npm link work
3. Make sure to remove "@valantic/spartacus-mock" from the package.json of your test project since it get's linked via symlink
4. Run `npm link` in the folder `dist/spartacus-mock` of this library to be able to use the current dev version of the library in your spartacus project
5. Run `npm link @valantic/spartacus-mock` in your spartacus project's root folder to link the dev version of the library
6. Run `ng add @valantic/spartacus-mock` in your spartacus project's root folder to add the library and run the schematics
7. Run `npm link @valantic/spartacus-mock` again, since running `ng add` seems to delete the link

### Update Angular Major Version

1. Follow the steps in the page https://update.angular.io/?l=3&v=14.0-15.0 to update the angular version
2. Test if it still works with the current demo electronics store of spartacus

### Build the library

1. Run `npm run build` in the root of this project to build the angular lib
2. Run `npm run build` in `projects/spartacus-mock` to build the schematics

### Releasing

1. Switch to the current Release branch
2. Merge the current main branch into the release branch
3. Describe your changes in the file [CHANGELOG.md](./docs/changelog.md)
4. Move all changes in the file [CHANGELOG.md](./docs/changelog.md) from below `## Next` below a new Paragraph with the
   to be released version
5. Change the Version in the [package.json](projects/spartacus-mock/package.json) of the angular lib
6. If new files within the docs folder have been added or changed, make sure, they are listed in the SUMMARY.md,
   see [here](https://docs.gitbook.com/integrations/git-sync/troubleshooting#nothing-happens-on-gitbook-after-adding-a-new-file-to-my-repository)
7. Build the library and the schematics according to the steps above at `## Build the library`
8. Create a Git Tag with the to be released version number `git tag x.x.x`
9. Commit and Push the changes to the remote (Make sure to also push Tags `git push origin --tags`)
10. Open the terminal and go to the folder `dist/spartacus-mock`
11. Login to NPM `npm login` if you not already are logged in
12. Push the Release `npm publish --access public`
13. [Create the Release](https://github.com/valantic/spartacus-mock/releases/new) on the github repo with the changes from the [CHANGELOG.md](./docs/changelog.md)
14. Attach the zip file from the dist folder to the release in github
15. Test if the release works with the spartacus demo project
16. Check if the Gitbook pages have updated correctly
    1. If sync did not happen automatically, go to app.gitbook.com
    2. Click on the 3 dots next to the edit button in the top bar
    3. Click Synchronize with git
    4. Scroll down and click Sync
