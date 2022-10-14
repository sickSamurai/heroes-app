import { Box, Button } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { HeroDetail } from '../components/HeroDetail';
import { getHeroByID } from '../helpers/heroesDAO';

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

    return (
      <Grid
        container
        spacing={2}
        sx={{ p: 4 }}
        columns={2}
        className="animate__animated animate__bounceInLeft">
        <Grid>
          <Box component="img" src={imgURL} alt={hero.id} />
        </Grid>
        <Grid xs={1}>
          <Grid>
            <HeroDetail hero={hero} />
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
