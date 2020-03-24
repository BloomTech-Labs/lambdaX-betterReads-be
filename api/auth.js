const { ExpressOIDC } = require('@okta/oidc-middleware');

const oidc = new ExpressOIDC({
  issuer: process.env.OKTA_URL,
  client_id: process.env.OKTA_CLIENT_ID,
  client_secret: process.env.OKTA_CLIENT_SECRET,
  redirect_uri: 'http://localhost:3000/implicit/callback',
  scope: 'openid profile',
  appBaseUrl: 'http://localhost:4000'
});

module.exports = oidc;
