/* eslint-disable no-console */
'use strict';

import _ from 'lodash';
import fs from 'fs';

const apiPath = __dirname + '/api';
// load routes sync
const files = fs.readdirSync(apiPath);
const routesInejector  = routesLoader(files, apiPath);

function routesLoader(files, path) {
  const f = _.clone(files, true);

  return server => {
    f.map((file) => {
      console.log(`Loading route form file: ${file}`);
      server.route(require(`${path}/${file}`))
    });
  }
}

export default routesInejector;
