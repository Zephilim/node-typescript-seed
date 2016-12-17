import { join  } from 'path';

import { SeedConfig  } from './seed.config';

/**
 * This class extends the basic seed configuration, allowing for project specific overrides. A few examples can be found
 * below.
 */
export class ProjectConfig extends SeedConfig {

  PROJECT_TASKS_DIR = join(process.cwd(), this.TOOLS_DIR, 'tasks', 'project');

  // ADD GIT URL TO YOUR PROJECT
  GIT_REMOTE_ORIGIN = `https://github.com/UIUXEngineering/node-typescript-test.git`;

  constructor() {
    super();

    /* Add to or override NPM module configurations: */
    // this.mergeObject(this.PLUGIN_CONFIGS['browser-sync'], { ghostMode: false });
  }

}
