import { strings } from '@angular-devkit/core';
import {
  MergeStrategy,
  Rule,
  SchematicContext,
  SchematicsException,
  Source,
  Tree,
  apply,
  branchAndMerge,
  chain,
  mergeWith,
  move,
  template,
  url,
} from '@angular-devkit/schematics';
import { NodeDependency, NodeDependencyType } from '@schematics/angular/utility/dependencies';
import { Location, parseName } from '@schematics/angular/utility/parse-name';
import {
  addPackageJsonDependencies,
  enhanceAngularJsonAssets,
  installPackageJsonDependencies,
} from '../utils/lib-utils';
import { readPackageJson } from '../utils/package-utils';
import { Schema } from './schema.model';

function getParsedPath(workspaceConfigBuffer: Buffer, name: string, relativePath: string): Location {
  let parsedPath = parseName('', name);

  if (parsedPath.path === '/') {
    const workspaceConfig = JSON.parse(workspaceConfigBuffer.toString());
    const projectName = Object.keys(workspaceConfig.projects)[0];
    const defaultProject = workspaceConfig.projects[projectName];
    const sourceRoot = defaultProject.sourceRoot;
    parsedPath = parseName(`${sourceRoot}/${relativePath}`, name);
  }

  return parsedPath;
}

function getTemplate(options: Schema, tree: Tree, name: string, relativePath: string): Source {
  const workspaceConfigBuffer = tree.read('angular.json');
  if (!workspaceConfigBuffer) {
    throw new SchematicsException('Not an Angular CLI Workspace');
  }
  const sourceTemplate = url(`./files/${name}`);
  const { name: parsedName, path } = getParsedPath(workspaceConfigBuffer, name, relativePath);

  return apply(sourceTemplate, [
    template({
      ...options,
      ...strings,
      name: parsedName,
    }),
    move(path),
  ]);
}

function logMessage(): Rule {
  return (tree: Tree, context: SchematicContext) => {
    context.logger.info('⌛️ Waiting for file copy and package installation to finish..');

    return tree;
  };
}

function setup(options: Schema): Rule {
  return (tree: Tree, context: SchematicContext) => {
    const packageJsonFile = readPackageJson(tree);

    const dependencies: NodeDependency[] = [
      {
        type: NodeDependencyType.Dev,
        name: 'msw',
        version: '2.1.2',
      },
      {
        type: NodeDependencyType.Dev,
        name: '@faker-js/faker',
        version: '8.3.1',
      },
    ];

    context.logger.info('🔧️ Installing msw as dependency..');
    context.logger.info('🔧️ Create mockServiceWorker.js file..');
    context.logger.info('🔧️ Enhance main.ts file..');
    context.logger.info('🔧️ Enhance environment.ts file..');
    context.logger.info('🔧️ Add environment.model.ts file..');

    return chain([
      // add msw dependency
      addPackageJsonDependencies(dependencies, packageJsonFile),

      // run npm install
      installPackageJsonDependencies(),

      // enhance angular.json
      enhanceAngularJsonAssets(),

      // override main file with additional logic
      branchAndMerge(
        chain([mergeWith(getTemplate(options, tree, 'main', ''), MergeStrategy.Overwrite)]),
        MergeStrategy.Overwrite
      ),

      // override environment files with additional logic
      branchAndMerge(
        chain([mergeWith(getTemplate(options, tree, 'environments', 'environments'), MergeStrategy.Overwrite)]),
        MergeStrategy.Overwrite
      ),

      logMessage(),
    ])(tree, context);
  };
}

export { setup };
