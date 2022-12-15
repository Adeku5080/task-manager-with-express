const app = require("./app");
require("./db/connect");

const port = 8000;

app.listen(port, () => {
  console.log(`you are listening on port ${port}`);
});


