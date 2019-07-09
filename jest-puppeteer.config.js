module.exports = {
  server: {
    command: 'PORT=3500 npm run start',
    port: 3500,
    launchTimeout: 10000,
    debug: true,
  },
  browserContext: 'incognito',
};
