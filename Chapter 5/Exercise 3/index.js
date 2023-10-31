const express = require("express");
const { runQuery } = require("./database");

const port = 3000;
const app = express();

app.get("/fare", async (req, res, next) => {
  try {
    const { uid } = req.query;
    const sql =
      "select users.name, sum(round(types.fare_rate * trains.distance / 1000, -2)) as totalFare " +
      "from tickets join users on tickets.user = users.id and users.id = ? " +
      "join trains on tickets.train = trains.id " +
      "join types on trains.type = types.id";
    const { name, totalFare } = (await runQuery(sql, [uid]))[0];
    return res.send(`Total fare of ${name} is ${totalFare} KRW.`);
  } catch (err) {
    console.error(err);
    return res.sendStatus(500);
  }
});

app.get("/train/status", async (req, res, next) => {
  try {
    const { tid } = req.query;
    const sql =
      "select count(*) as occupied, types.max_seats as maximum " +
      "from tickets join trains on trains.id = tickets.train and trains.id = ? " +
      "join types on trains.type = types.id";
    const { occupied, maximum } = (await runQuery(sql, [tid]))[0];
    const isSeatLeft = occupied < maximum;
    return res.send(`Train ${tid} is ${isSeatLeft ? "not " : ""}sold out.`);
  } catch (err) {
    console.error(err);
    return res.sendStatus(500);
  }
});

app.listen(port, () => console.log(`Server listening on port ${port}!`));
