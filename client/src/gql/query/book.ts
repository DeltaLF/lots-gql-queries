import { gql } from "@apollo/client";

export const QUERY_BOOKS = gql`
  query Query {
    books {
      title
      id
      author
    }
  }
`;
