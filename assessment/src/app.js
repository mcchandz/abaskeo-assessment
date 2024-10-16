const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config({ path: "./config/dev.env" });
const {router} = require('./router/router.js')
const contextPath = "/rest/api";
const app = express();

require("./db/mongoose.js");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(contextPath, router);
require("./swagger/swagger.js")(app);

const PORT = process.env.PORT;
app.listen(PORT, () =>
  console.log(`server running on port ${PORT}`)
);
app.get("/",(req, res)=>{
 res.send("Hi,This is Home!")
})
