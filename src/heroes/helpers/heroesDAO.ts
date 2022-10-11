import heroesData from "../data/heroes.json";
import { Hero } from "../types/Hero";

export const getHeroesByPublisher = (publisher: string) => {
  const validPublisher = ["DC Comics", "Marvel Comics"];
  if (validPublisher.includes(publisher) === false) {
    throw new Error(`Invalid publisher '${publisher}'`);
  } else {
    const heroes = heroesData as Hero[];
    return heroes.filter((hero) => hero.publisher === publisher);
  }
};
