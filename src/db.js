import { Sequelize } from "sequelize";

const sequelize = new Sequelize("postgres", "postgres", "230324", {
  host: "localhost",
  dialect: "postgres",
  port: 5432,
});

export default sequelize
