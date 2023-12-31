require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const { sequelize } = require("./models/index");
const init = require("./init");
const cors = require("cors");

const app = express();

app.use(bodyParser.json());
app.use(cors());

require("./models/index");

require("./routes/auth.route")(app);
require("./routes/cart.route")(app);
require("./routes/category.route")(app);
require("./routes/product.route")(app);

sequelize.sync({ force: true }).then(init);

app.listen(process.env.PORT, () =>
  console.log(`Application listening on port ${process.env.PORT}`)
);
