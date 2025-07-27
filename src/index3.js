const { ApolloServer, gql } = require('apollo-server');

const fs = require("fs");
const path = require("path");

let links = [
  {
    id: "1",
    description: "タイトル的な",
    url: "http://www."
  },
];


const resolvers = {

  Query: {
    info: () => "sample dummy",
    feed: () => links,
  },

  Mutation: {
    post: (parent, args) =>  {
      let idCount = links.length;
      const link = {
        id: `${idCount++}`,
        description: args.description,
        url: args.url,
      };
      links.push(link);
      return link;
    },
  },

};

const server = new ApolloServer({ 
  typeDefs: fs.readFileSync(path.join(__dirname, "schema.graphql"), "utf-8"), 
  resolvers, 
  playground: true, 
});

server
  .listen()
  .then(({ url }) => {
    console.log(`${url}でサーバーが起動中・・・`);
  });
