require('dotenv').config();
const app = require('./api/server.js');

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`=== SERVER LISTENING ON ${port} ===`);
});
