const http = require("http");
const app = require("./app");
require("./config/db");

const PORT = process.env.PORT || 80;

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`Starting server on port ${PORT}!`);
});
