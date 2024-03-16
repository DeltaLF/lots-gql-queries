import { useQuery } from "@apollo/client";
import { QUERY_BOOKS } from "../../../../gql/query/book";
import { QueryBooksType } from "../../../../gql/type/book";
import Card from "../../../../components/common/card";
import "./books.css";

const Books = () => {
  const { data, loading } = useQuery<QueryBooksType>(QUERY_BOOKS, {
    fetchPolicy: "no-cache",
  });
  if (loading) return <div>loading...</div>;
  const { books } = data || {};

  return (
    <div>
      <h2>Fetch all books</h2>
      <div className="books-content">
        {books?.map(({ id, author, title }) => {
          return <Card key={id} id={id} author={author} title={title} />;
        })}
      </div>
    </div>
  );
};

export default Books;
