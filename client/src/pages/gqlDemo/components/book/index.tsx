import { useQuery } from "@apollo/client";
import { QUERY_BOOK } from "../../../../gql/query/book";
import { QueryBookType } from "../../../../gql/type/book";
import Card from "../../../../components/common/card";
import { useState } from "react";
import "./book.css";

const Book = () => {
  const [searchedBookIds, setSearchedBookIds] = useState([0]);
  const { data, loading } = useQuery<QueryBookType>(QUERY_BOOK, {
    fetchPolicy: "no-cache",
    variables: { id: searchedBookIds.at(-1) },
  });

  const { book } = data || {};

  return (
    <div>
      <h2>Fetch one book</h2>
      <div>
        <h3>fetch history</h3>
        <div className="fetch-history-content">
          {searchedBookIds.map((id, key) => {
            return (
              <div className="fetch-history-element" key={`${id}_${key}`}>
                {id}
              </div>
            );
          })}
        </div>
      </div>
      <button
        onClick={() => {
          setSearchedBookIds((prev) => [...prev, (prev.at(-1)! + 1) % 20]);
        }}
      >
        fetch
      </button>
      <button onClick={() => setSearchedBookIds([0])}>reset</button>
      <div className="book-content">
        {loading && <div>loading...</div>}
        {!loading && book && (
          <Card id={book.id} author={book.author} title={book.title} />
        )}
        {!loading && !book && <h3>Book not found</h3>}
      </div>
    </div>
  );
};

export default Book;
