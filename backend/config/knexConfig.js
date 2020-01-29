const knex = require("knex");
const knexConfig = require("../../knexfile.js");

const environment = process.env.ENVIRONMENT || "development"; // development
module.exports = knex(knexConfig[environment]);
