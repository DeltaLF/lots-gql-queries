import { books } from "./db/index";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

const typeDefs = `#graphql
  type Book {
    id: Int
    title: String
    author: String
  }

  type Query {
    books: [Book]
    book(id: Int): Book
  }
`;

const resolvers = {
  Query: {
    books: () => books,
    book: (parent, args, contextValue, info) => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(books.find((book) => book.id === args.id));
        }, 1000 * Math.random());
      });
    },
  },
};
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`Gql server on: ${url}`);
