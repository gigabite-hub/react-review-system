export type User = {
  username: string;
  age: number;
  avatar: string;
  occupation: string;
};

export type Review = {
  user: User;
  rating: number;
  comment: string;
};
