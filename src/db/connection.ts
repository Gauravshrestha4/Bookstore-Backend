import { Sequelize } from "sequelize";

const sequelize = new Sequelize("BookStore", "root", "", {
  dialect: "mysql",
  host: "localhost",
  pool: {
    max: 5,
  },
});

sequelize
  .authenticate()
  .then(() => console.log(`SUCCESS: Database connection established.`))
  .catch((err) =>
    console.log(`ERROR: Database connection failed.\n CAUSE: ${err}`)
  );

export { Sequelize, sequelize };
