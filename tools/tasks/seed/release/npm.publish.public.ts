import { exec } from 'child_process';

export = (done: any) => {

  let command = 'npm publish --access=public';

  // Only deletes tags locally, not remote
  exec(command, done);

};
