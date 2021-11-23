import { Sequelize } from "sequelize";

const db = new Sequelize("klinik2", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default db;
