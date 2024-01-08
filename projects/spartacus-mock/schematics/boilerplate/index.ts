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
import { Location, parseName } from '@schematics/angular/utility/parse-name';
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

function boilerplate(options: Schema): Rule {
  return (tree: Tree, context: SchematicContext) => {
    context.logger.info('🔧️ Add boilerplate src/mock-server folder and files..');

    return chain([
      // add mock-server files with some boilerplate code
      branchAndMerge(
        chain([mergeWith(getTemplate(options, tree, 'mock-server', 'mock-server'), MergeStrategy.Overwrite)]),
        MergeStrategy.Overwrite
      ),

      // add mock-data files with readme
      branchAndMerge(
        chain([mergeWith(getTemplate(options, tree, 'mock-data', 'mock-server/mock-data'), MergeStrategy.Overwrite)]),
        MergeStrategy.Overwrite
      ),

      // add languages files with languages generate method
      branchAndMerge(
        chain([
          mergeWith(
            getTemplate(options, tree, 'mock-data--languages', 'mock-server/mock-data/languages'),
            MergeStrategy.Overwrite
          ),
        ]),
        MergeStrategy.Overwrite
      ),

      logMessage(),
    ])(tree, context);
  };
}

export { boilerplate };
