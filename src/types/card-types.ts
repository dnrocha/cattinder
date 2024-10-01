export interface CardI extends CardInfoI {
  imageUrl: string;
}

export interface CardInfoI {
  name: string;
  origin: string;
  affection: number;
}
