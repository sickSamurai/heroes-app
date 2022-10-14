import { useLocation } from 'react-router-dom';

export const useHeroQuery = () => {
  const search = useLocation().search;
  const searchParams = new URLSearchParams(search);
  const heroQuery = searchParams.get("query");
  return { heroQuery };
};
