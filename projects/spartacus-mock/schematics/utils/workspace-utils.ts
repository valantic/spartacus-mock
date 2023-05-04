import { SchematicsException, Tree } from '@angular-devkit/schematics';
import { WorkspaceSchema } from '@schematics/angular/utility/workspace-models';
import { parse } from 'jsonc-parser';

const DEFAULT_POSSIBLE_PROJECT_FILES = ['/angular.json', '/.angular.json'];

export function getWorkspace(
  host: Tree,
  files = DEFAULT_POSSIBLE_PROJECT_FILES
): { path: string; workspaceConfig: WorkspaceSchema } {
  const workspaceConfig = getAngularJsonFile(host, files);
  const path = files.filter((filePath) => host.exists(filePath))[0];

  return {
    path,
    workspaceConfig,
  };
}

export function getAngularJsonFile(tree: Tree, possibleProjectFiles = DEFAULT_POSSIBLE_PROJECT_FILES): WorkspaceSchema {
  const path = possibleProjectFiles.filter((filePath) => tree.exists(filePath))[0];
  if (!path) {
    throw new SchematicsException(`Could not find Angular`);
  }

  const configBuffer = tree.read(path);
  if (configBuffer === null) {
    throw new SchematicsException(`Could not find (${path})`);
  }

  const angularJsonContent = configBuffer.toString();
  return parse(angularJsonContent, undefined, { allowTrailingComma: true });
}
