const express = require("express");
const app = express();

// database connection
require("./database");

// Settings
app.set("port", process.env.PORT || 3000);

// Routes
app.use(require("./routes/index"));

app.listen(3000);
console.log("Server on port", 3000);
