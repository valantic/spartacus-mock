import { chain, Rule, SchematicContext, Tree } from '@angular-devkit/schematics';
import { NodeDependency, NodeDependencyType } from '@schematics/angular/utility/dependencies';
import {
  addPackageJsonDependencies,
  enhanceAngularJsonAssets,
  installPackageJsonDependencies,
} from '../utils/lib-utils';
import { readPackageJson } from '../utils/package-utils';

function logMessage(): Rule {
  return (tree: Tree, context: SchematicContext) => {
    context.logger.info('⌛️ Waiting for file copy and package installation to finish..');

    return tree;
  };
}

function setup(): Rule {
  return (tree: Tree, context: SchematicContext) => {
    const packageJsonFile = readPackageJson(tree);

    const dependencies: NodeDependency[] = [
      {
        type: NodeDependencyType.Dev,
        name: 'msw',
        version: '2.2.3',
      },
      {
        type: NodeDependencyType.Dev,
        name: '@faker-js/faker',
        version: '8.4.1',
      },
    ];

    context.logger.info('🔧️ Installing msw as dependency..');
    context.logger.info('🔧️ Create mockServiceWorker.js file..');

    return chain([
      // add msw dependency
      addPackageJsonDependencies(dependencies, packageJsonFile),

      // run npm install
      installPackageJsonDependencies(),

      // enhance angular.json
      enhanceAngularJsonAssets(),

      logMessage(),
    ])(tree, context);
  };
}

export { setup };
