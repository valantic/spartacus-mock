import { Rule, SchematicContext, Tree, chain, schematic } from '@angular-devkit/schematics';
import { Schema } from '../setup/schema.model';

export default function (options: Schema): Rule {
  return (tree: Tree, context: SchematicContext) => {
    return chain([schematic('setup', options), schematic('boilerplate', options)])(tree, context);
  };
}
