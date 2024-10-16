const path = require("path");
const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const serviceBasePath = `/rest/api`;

module.exports = function (app) {
  let swaggerDefinition = {
    swagger: "2.0",
    info: {
      title: "User and Admin Management System API's",
      description: "RESTful API for User and Admin Management System",
      version: "1.0",
    },
    produces: ["application/json"],
    host: process.env.HOST_NAME,
    basePath: serviceBasePath,
  };
  let options = {
    swaggerDefinition: swaggerDefinition,
    explorer: true,
    apis: [
      path.join(__dirname, "../controller/*.js"),
      path.join(__dirname, "../router/*.js"),
    ],
  };
  let extraOptions = {
    explorer: true,
    swaggerOptions: {
      validatorUrl: null,
    },
    customSiteTitle: "Swagger - User and Admin Management System",
  };
  swaggerSpec = swaggerJSDoc(options);
  app.use(
    "/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(swaggerSpec, extraOptions)
  );
};
