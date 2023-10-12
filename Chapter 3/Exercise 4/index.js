const express = require("express");

const port = 3000;
const app = express();

app.set("views", `${__dirname}/views`);
app.set("view engine", "pug");

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => res.render("index.pug"));
app.post("/login", (req, res) =>
  res.send(
    `Username: ${req.body.username} <br/> Password: ${req.body.password}`
  )
);

app.listen(port, () => console.log(`Server listening on port ${port}!`));
