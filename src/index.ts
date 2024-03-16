import { books } from "./db/index";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { QueryHistory } from "./types";

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

const queryBookHistory: QueryHistory[] = [];
const queryBookResponseHistory: QueryHistory[] = [];

const resolvers = {
  Query: {
    books: () => books,
    book: (parent, args: { id?: number }, contextValue, info) => {
      console.log("queryBookHistory:", queryBookHistory);
      console.log("queryBookResponseHistory:", queryBookResponseHistory);
      console.log("request comes args: ", args);
      queryBookHistory.push({ id: args.id, time: new Date() });
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          console.log("response args: ", args);
          queryBookResponseHistory.push({ id: args.id, time: new Date() });
          resolve(books.find((book) => book.id === args.id));
        }, 5000 * Math.random());
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
