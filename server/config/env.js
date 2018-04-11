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
  }
};
env[process.env.NODE_ENV].encrypted_password = 'UHdlanNjVHRWRz5FOWE/Zw==';
export default env[process.env.NODE_ENV];
