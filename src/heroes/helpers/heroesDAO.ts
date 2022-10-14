import heroesData from '../data/heroes.json';
import { Hero } from '../types/Hero';

export const getHeroesByPublisher = (publisher: string) => {
  const validPublisher = ["DC Comics", "Marvel Comics"];
  if (validPublisher.includes(publisher) === false) {
    throw new Error(`Invalid publisher '${publisher}'`);
  } else {
    const heroes = heroesData as Hero[];
    return heroes.filter((hero) => hero.publisher === publisher);
  }
};

export const getHeroByID = (id: string) => {
  const heroes = heroesData as Hero[];
  const foundHero = heroes.find((hero) => hero.id === id);
  return !foundHero ? null : foundHero;
};

export const getHeroesByName = (name: string) => {
  const heroes = heroesData as Hero[];
  const foundHeroes = heroes.filter((hero) =>
    hero.superhero.toLowerCase().includes(name.toLowerCase())
  );
  return foundHeroes;
};
