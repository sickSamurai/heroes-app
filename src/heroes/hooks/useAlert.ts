import { AlertVariant } from '../types/AlertVariant';

export const useAlert = (variant: AlertVariant) => {
  let message = "";
  if (variant === "trySearch") message = "Intenta buscar";
  else if (variant === "notFound")
    message = "No hay heroes con los parametros de busqueda indicados";
  return { message };
};
