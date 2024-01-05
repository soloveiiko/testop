const dotenv = require('dotenv');
const autorestart = true;
const { NEXT_APP_NAME } = dotenv.config({ path: './.env' }).parsed;
module.exports = {
  apps: [
    {
      name: NEXT_APP_NAME || 'spa',
      exec_mode: 'cluster',
      instances: '1', // Or a number of instances
      script: 'npm',
      args: 'run start',
      watch: true,
      autorestart
    }
  ]
}

