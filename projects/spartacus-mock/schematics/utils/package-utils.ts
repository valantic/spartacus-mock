import { SchematicContext, SchematicsException, TaskId, Tree } from '@angular-devkit/schematics';
import { NodePackageInstallTask } from '@angular-devkit/schematics/tasks';
import { NodeDependency } from '@schematics/angular/utility/dependencies';

export function readPackageJson(tree: Tree): any {
  const pkgPath = '/package.json';
  const buffer = tree.read(pkgPath);
  if (!buffer) {
    throw new SchematicsException('Could not find package.json');
  }

  return JSON.parse(buffer.toString('utf-8'));
}

export function dependencyExists(dependency: NodeDependency, packageJson: any): boolean {
  return packageJson[dependency.type]?.hasOwnProperty(dependency.name);
}

export function createNodePackageInstallationTask(context: SchematicContext): TaskId {
  return context.addTask(new NodePackageInstallTask());
}
