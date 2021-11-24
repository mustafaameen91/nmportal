const express = require("express");
const app = express();
const history = require("connect-history-api-fallback");
const cors = require("cors");
app.use(cors());
app.use(express.json());

const staticFileMiddleware = express.static(__dirname + "/dist");
app.use(staticFileMiddleware);
app.use(
   history({
      disableDotRule: true,
      verbose: true,
   })
);

app.use(staticFileMiddleware);

app.listen(4100, () => {
   console.log("app listening on port 4100");
});
