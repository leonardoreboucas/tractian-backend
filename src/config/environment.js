const dotenv = require("dotenv");
const environment = process.env.NODE_ENVIRONMENT || "development";
const config = dotenv.config({ path: `src/config/${environment}/.env` });
module.exports = {
  configuration: {
    environment: environment,
    serviceName:"API Backend",
    apiVersion: 1,
    api_url: process.env.API_URL || config.parsed.API_URL,
    host: process.env.HOST || config.parsed.HOST,
    port: process.env.PORT || config.parsed.PORT,
    mongodb_uri: process.env.MONGODB_URI || config.parsed.MONGODB_URI
  },
};