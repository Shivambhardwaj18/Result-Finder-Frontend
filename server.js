const dotenv = require("dotenv");
const { ApolloServer } = require("apollo-server-express");
const express = require("express");
const { importSchema } = require("graphql-import");
const Query = require("./resolvers/Query");
const Mutation = require("./resolvers/Mutation");
const chalk = require("chalk");
const typeDefs = importSchema("./schema/schema.graphql");
const cors = require("cors");
dotenv.config();

const resolvers = {
  Query,
  Mutation,
};

const app = express();
app.use(cors());
app.get("/", (req, res) => res.json({ version: "v1", status: "healthy" }));

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  playground: true,
  introspection: true,
});

apolloServer.applyMiddleware({ app });

let server = app.listen({ port: process.env.PORT }, () => {
  console.log(chalk.blue("server up"));
});
server.timeout = 30000000000000;
