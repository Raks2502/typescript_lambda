import swaggerJsDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: "Serverless API",
      version: "1.0.0",
      description: "API Documentation",
    },
    host: "localhost:3000",
    basePath: "/",
  },
  apis: ["src/handler.ts"],
};

export const swaggerDocs = swaggerJsDoc(swaggerOptions);
