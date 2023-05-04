import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';
import { NodeDependency, addPackageJsonDependency } from '@schematics/angular/utility/dependencies';
import { createNodePackageInstallationTask, dependencyExists } from './package-utils';
import { getWorkspace } from './workspace-utils';

export function addPackageJsonDependencies(dependencies: NodeDependency[], packageJson: any): Rule {
  return (tree: Tree, _context: SchematicContext): Tree => {
    for (const dependency of dependencies) {
      if (!dependencyExists(dependency, packageJson)) {
        addPackageJsonDependency(tree, dependency);
      }
    }
    return tree;
  };
}

export function enhanceAngularJsonAssets(): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    const { path, workspaceConfig } = getWorkspace(tree);
    const projectName = Object.keys(workspaceConfig.projects)[0];
    const architect = workspaceConfig.projects[projectName].architect;

    // `build` architect section
    const architectBuild = architect?.build;

    const buildOptions = {
      ...architectBuild?.options,
      assets: [...(architectBuild?.options as any)?.assets, 'src/mockServiceWorker.js'],
    };

    const updatedAngularJson = {
      ...workspaceConfig,
      projects: {
        ...workspaceConfig.projects,
        [projectName]: {
          ...workspaceConfig.projects[projectName],
          architect: {
            ...architect,
            build: {
              ...architectBuild,
              options: buildOptions,
            },
          },
        },
      },
    };

    const initialContent = tree.read(path)?.toString('utf-8') ?? '';
    const toUpdate = JSON.stringify(updatedAngularJson, null, 2);
    // prevent the unnecessary Angular logs about the files being updated
    if (initialContent !== toUpdate) {
      tree.overwrite(path, toUpdate);
    }

    return tree;
  };
}

export function installPackageJsonDependencies(): Rule {
  return (tree: Tree, context: SchematicContext) => {
    createNodePackageInstallationTask(context);
    return tree;
  };
}
