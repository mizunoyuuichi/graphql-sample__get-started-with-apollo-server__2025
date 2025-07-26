const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`

  type Book {
    title: String
    author: Author
  }

  type Author {
    name: String
    books: [Book]
  }

  type Query {
    books: [Book]
    authors: [Author]
  }
`;


const authors = [
  { name: 'Kate Chopin' },
  { name: 'Paul Auster' }
]

const books = [
  {
    title: 'The Awakening',
    author: authors.find(a => a.name == 'Kate Chopin'),
  },
  {
    title: 'City of Glass',
    author: authors.find(a => a.name == 'Paul Auster'),
  },
];

const resolvers = {
  Query: {
    books: () => books,
    authors: () => authors
  },
};

const server = new ApolloServer({ 
  typeDefs, 
  resolvers, 
  playground: true, 
});

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
