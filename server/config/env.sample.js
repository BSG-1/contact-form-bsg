/**
 *
 * Environment Config
 *
 */

const env = {
    production: {
      name: 'production',
      port: 4000
    },
    dev: {
      name: 'dev',
      port: 4000
    },
    test: {
      name: 'test',
      port: 4000
    },
  };

  env.encrypted_password = 'dmVyeS1kaWZmaWN1bHQtdG8tZ3Vlc3MtcGFzc3dvcmQ=';

  export default env[process.env.NODE_ENV];