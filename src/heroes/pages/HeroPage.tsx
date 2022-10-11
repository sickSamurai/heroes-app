import { useParams, useNavigate } from "react-router-dom";
import { getHeroByID } from "../helpers/heroesDAO";
import Grid from "@mui/material/Unstable_Grid2";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Typography,
} from "@mui/material";
import { useState } from "react";

type Params = {
  heroID: string;
};

export const HeroPage = () => {
  const params = useParams() as Params;
  const [hero] = useState(getHeroByID(params.heroID));
  const navigate = useNavigate();

  const navigateBack = () => {
    navigate(-1);
  };

  if (!hero) {
    return null;
  } else {
    const imgURL = `/static/${hero.id}.jpg`;

    const otherCharactersInfo =
      hero.alter_ego === hero.characters ? null : (
        <Typography>
          <b>Other Characters:</b> {hero.characters}
        </Typography>
      );

    return (
      <Grid container spacing={2} sx={{ p: 4 }} columns={2}>
        <Grid>
          <Box component="img" src={imgURL} alt={hero.id} />
        </Grid>
        <Grid xs={1}>
          <Grid>
            <Card>
              <CardHeader title={hero.superhero}></CardHeader>
              <CardContent>
                <Typography>
                  <b>Publisher:</b> {hero.publisher}
                </Typography>
                <Typography>
                  <b>Alter Ego:</b> {hero.alter_ego}
                </Typography>
                <Typography>
                  <b>First Appeareance:</b> {hero.first_appearance}
                </Typography>
                {otherCharactersInfo!}
              </CardContent>
            </Card>
          </Grid>
          <Grid>
            <Button
              variant="contained"
              color="error"
              onClick={() => navigateBack()}>
              Regresar
            </Button>
          </Grid>
        </Grid>
      </Grid>
    );
  }
};
