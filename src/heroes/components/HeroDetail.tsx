import { Card, CardHeader, CardContent, Typography } from "@mui/material";
import React from "react";
import { Hero } from "../types/Hero";

type Props = {
  hero: Hero;
};

export const HeroDetail = ({ hero }: Props) => {
  let otherCharactersInfo: JSX.Element | null;

  if (hero.alter_ego === hero.characters) {
    otherCharactersInfo = null;
  } else {
    otherCharactersInfo = (
      <Typography>
        <b>Other Characters:</b> {hero.characters}
      </Typography>
    );
  }

  return (
    <Card>
      <CardHeader
        title={hero.superhero}
        titleTypographyProps={{ variant: "h3" }}
      />
      <CardContent>
        <Typography>
          <b>Publisher:</b> {hero.publisher}
        </Typography>
        <Typography>
          <b>First Appeareance:</b> {hero.first_appearance}
        </Typography>
        <Typography>
          <b>Alter Ego:</b> {hero.alter_ego}
        </Typography>
        {otherCharactersInfo!}
      </CardContent>
    </Card>
  );
};
