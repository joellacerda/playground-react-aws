export type Cat = {
  id: string;
  name: string;
  age: string;
  breed: string;
  thumbnail: {
    key: string;
    url: string;
  };
};

export type Breed = {
  id: number;
  name: string;
};

export type Age = {
  id: number;
  name: string;
};
