const express = require("express");
const userRoutes = require("./routes/users");
const swaggerJsdoc = require("swagger-jsdoc")
const swaggerUi = require("swagger-ui-express");

const app = express();

// middleware
app.use(express.json());

// define all our routes
app.use("/", userRoutes);

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

const port = 3000;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
