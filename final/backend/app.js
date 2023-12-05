const express = require("express");
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");
const cors = require('cors');

const swaggerJsdoc = require("swagger-jsdoc")
const swaggerUi = require("swagger-ui-express");
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');

const db = require("./config/database")
const configViewEngine = require("./config/viewEngine")
const app = express();

// middleware
app.use(express.json());
app.use(cors());

configViewEngine(app)
// define all our routes
app.use("/", userRoutes);
app.use("/", authRoutes);

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "User Express API",
      version: "0.1.0",
      description:
        "This is a simple User API application made with Express and documented with Swagger",
    },
    servers: [
      {
        url: "http://localhost:3000/",
      },
    ],
  },
  apis: ["./routes/*.js"],
};
const specs = swaggerJsdoc(options);
app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(specs)
);

db.query('SELECT 1 + 1', (error, results, fields) => {
  if (error) throw error;
  console.log('Connected to MySQL!');
});

const port = 8081;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});


