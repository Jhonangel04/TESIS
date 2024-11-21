import app from "./app.js";
import sequelize from "./db.js";

app.listen(3000, () => {
  console.log("Server running on port 3000");
});

try {
  await sequelize.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
} finally{
    sequelize.close()
    console.log('The connection has been closed successfully')
}

