import {
  Button,
  Card,
  CardActions,
  CardHeader,
  CardMedia,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

import { Hero } from "../types/Hero";

type Props = {
  hero: Hero;
};

export const HeroCard = ({ hero }: Props) => {
  return (
    <Card>
      <CardHeader title={hero.superhero} />
      <CardMedia
        component="img"
        image={`/static/${hero.id}.jpg`}
        alt={hero.superhero}
      />
      <CardActions>
        <Button size="small" component={Link} to={`/hero/${hero.id}`}>
          Ver Más
        </Button>
      </CardActions>
    </Card>
  );
};
