import { BookType, PeopleType } from "../types/index";
import {
  fromArrWithKeyToMap,
  getRandomNFromArr,
  intToPId,
} from "../utils/general";

const BOOK_COUNT = 20;
const PEOPLE_COUNT = 40;
const people: PeopleType[] = new Array(PEOPLE_COUNT).fill(0).map((_, ind) => {
  return {
    id: intToPId(ind),
    name: `user${ind}`,
    books: [],
  };
});

const peopleMap: Map<String, PeopleType> = fromArrWithKeyToMap(people, "id");

const books: BookType[] = new Array(BOOK_COUNT).fill(0).map((_, ind) => ({
  id: ind,
  title: `Book ${ind}`,
  author: people[ind],
  recommendList: getRandomNFromArr(
    people,
    Math.floor(Math.random() * PEOPLE_COUNT)
  ),
}));

export { books, people, peopleMap };
