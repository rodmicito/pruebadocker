const mongoose = require("mongoose");
const URI = "mongodb://mongo/example_db";
mongoose
  .connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((db) => console.log(`Database is connected to${db.connection.host}`))
  .catch((err) => console.error(err));
