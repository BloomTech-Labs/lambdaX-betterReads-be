require('dotenv').config();
const oidc = require('./api/auth');

const app = require('./api/server.js');

const port = process.env.PORT || 4000

oidc.on('ready', () => {
  app.listen(port, () => console.log(`Started!`));
});

oidc.on('error', err => {
  console.log('Unable to configure ExpressOIDC', err);
});

// server.listen(port, () => {
//     console.log(`server listening on http://${port}`)
// });