export interface Cat {
  id: string;
  imageUrl: string;
  name: string;
  origin: string;
  affection: number;
}

export interface ApiBreed {
  id: string;
  name: string;
  origin: string;
  affection_level: number;
}

export interface ApiCat {
  id: string;
  url: string;
  breeds: ApiBreed[];
}
