export type BookType = {
  id: number;
  title: string;
  author: string;
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
