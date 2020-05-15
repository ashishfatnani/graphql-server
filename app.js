const { ApolloServer,PubSub } = require("apollo-server");
const gql = require("graphql-tag");
const mongoose = require("mongoose");
const connectDB = require("./config/db");
const Post = require("./models/Post");
const typeDefs = require("./graphql/typeDefs");
const resolvers = require("./graphql/resolvers");

connectDB();
const pubsub = new PubSub();


const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => ({ req })
});
server.listen(5000, () => {
  console.log("Serving on the port number 5000");
});
