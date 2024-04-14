import { books, people, peopleMap } from "./db/index";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { QueryHistory } from "./types";
import { getRandomNFromArr } from "./utils/general";
import { GraphQLError } from "graphql";

const typeDefs = `#graphql
  type People {
    id: String
    name: String
    books: [Book]
  }

  type Book {
    id: Int
    title: String
    author: People
    recommendList: [People]
  }

  type Query {
    books: [Book]
    book(id: Int): Book
    getRandomPeople(count:Int): [People]
    getPeopleById(pId:String): People
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
    getRandomPeople: (parent, args: { count: number }) => {
      /*
        This query is a specific example of that query parameter doesn't necessary an unique identifier
      */
      return getRandomNFromArr(people, args.count);
    },
    getPeopleById: (parent, args: { pId: string }) => {
      const result = peopleMap.get(args.pId);
      if (!result)
        throw new GraphQLError("The people you specified is not found", {
          extensions: {
            code: "NOT_FOUND",
          },
        });

      return result;
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
