const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema");
const resolvers = require("./resolvers");

const app = express();

app.get("/", (req, res) => {
  res.send("Home page GraphQL");
});

const root = resolvers;

app.use(
  "/graphqltest",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);
app.listen(8080, () => {
  console.log("server running on 8080");
});
