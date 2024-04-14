import { PeopleType } from "./people";

export type BookType = {
  id: number;
  title: string;
  author: PeopleType;
  recommendList: PeopleType[];
};
export type QueryBooksType = {
  books: BookType[];
};

export type QueryBookType = {
  book: BookType;
};

export type QueryBookVariable = {
  id: number;
};
