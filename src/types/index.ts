export type BookType = {
  id: number;
  title: string;
  author: PeopleType;
  recommendList: PeopleType[];
};

export type QueryHistory = {
  id?: number;
  time: Date;
};

export type PeopleType = {
  id: string;
  name: string;
  books: BookType[];
};
