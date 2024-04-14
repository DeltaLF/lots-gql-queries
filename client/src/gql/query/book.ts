import { gql } from "@apollo/client";

export const QUERY_BOOKS = gql`
  query Query {
    books {
      title
      id
      author {
        id
        name
      }
      recommendList {
        id
        name
      }
    }
  }
`;

export const QUERY_BOOK = gql`
  query Query($id: Int) {
    book(id: $id) {
      author {
        id
        name
      }
      recommendList {
        id
        name
      }
      id
      title
    }
  }
`;
