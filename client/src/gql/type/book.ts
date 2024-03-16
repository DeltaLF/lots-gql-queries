export type BookType = {
  id: number;
  title: string;
  author: string;
};

export type QueryBooksType = {
  books: BookType[];
};
