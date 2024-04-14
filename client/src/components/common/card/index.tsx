import { BookType } from "../../../gql/type/book";
import "./card.css";

const Card = ({ id, title, author, recommendList }: BookType) => {
  return (
    <div className="card-container">
      <div className="card-title">
        <h3> title: {title} </h3>
      </div>

      <div className="card-content">
        <div>id: {id}</div>
        <div> author: {author.name} </div>
        <div>recommend list length: {recommendList.length}</div>
      </div>
    </div>
  );
};

export default Card;
