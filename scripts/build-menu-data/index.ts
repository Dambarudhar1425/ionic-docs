import { components } from '@ionic/docs/core.json';
import { commands } from '../data/cli.json';
import { join, resolve } from 'path';
import { keyBy, slugify } from '../../src/utils';
import Listr from 'listr';
import fs from 'fs-extra';

const MENU_DATA_DIR = resolve(__dirname, '../../src/components/menu/data');

const componentMenu = keyBy(
  components,
  (item) => item.tag.slice(4),
  (item) => `/docs/api/${slugify(item.tag.slice(4))}`
);

const cliCommandMenu = keyBy(
  commands,
  (item) => item.name.slice(6),
  (item) => `/docs/cli/commands/${slugify(item.name.slice(6))}`
);

const tasks = new Listr([
  {
    title: 'Build API reference menu data',
    task: () => fs.outputJSON(
      join(MENU_DATA_DIR, 'api-reference.json'),
      componentMenu,
      { spaces: 2 }
    )
  },
  {
    title: 'Build CLI command menu data',
    task: () => fs.outputJSON(
      join(MENU_DATA_DIR, 'cli-commands.json'),
      cliCommandMenu,
      { spaces: 2 }
    )
  }
]);

export default tasks;

if (!module.parent) {
  tasks.run().catch(console.error);
}
