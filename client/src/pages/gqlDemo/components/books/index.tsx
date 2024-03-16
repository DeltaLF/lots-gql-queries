import { useQuery } from "@apollo/client";
import { QUERY_BOOKS } from "../../../../gql/query/book";
import { QueryBooksType } from "../../../../gql/type/book";

const Books = () => {
  const { data, loading } = useQuery<QueryBooksType>(QUERY_BOOKS, {
    fetchPolicy: "network-only",
  });
  if (loading) return <div>loading...</div>;
  const { books } = data || {};

  return (
    <div>
      <h2>Fetch all books</h2>
      {books?.map(({ id, author, title }) => {
        return (
          <div key={id}>
            id: {id}
            title: {title}
            author: {author}
          </div>
        );
      })}
    </div>
  );
};

export default Books;
