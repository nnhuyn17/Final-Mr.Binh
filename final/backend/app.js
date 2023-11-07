const express = require("express");
const bookRoutes = require("./routes/books");
const swaggerJsdoc = require("swagger-jsdoc")
const swaggerUi = require("swagger-ui-express");

const app = express();

// middleware
app.use(express.json());

// define all our routes
app.use("/", bookRoutes);

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
        url: process.env.BASE_URL || "http://localhost:3000/",
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
