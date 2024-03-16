import { BookType } from "../types/index";

const N = 20;

const books: BookType[] = new Array(N).fill(0).map((_, ind) => ({
  id: ind,
  title: `Book ${ind}`,
  author: `Author ${ind}`,
}));

export { books };
