import { BookType } from "./book";

export type PeopleType = {
  id: string;
  name: string;
  books: BookType[];
};
