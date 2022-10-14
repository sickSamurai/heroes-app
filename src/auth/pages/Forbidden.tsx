import { Button, Typography } from '@mui/material';
import Grid from '@mui/system/Unstable_Grid';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

export const ForbiddenPage = () => {
  return (
    <Grid
      container
      sx={{ p: 5 }}
      spacing={5}
      columns={1}
      justifyContent="center">
      <Grid xs={1}>
        <Typography align="center" variant="h4">
          No tienes permiso para ingresar a está pagina
        </Typography>
      </Grid>
      <Grid>
        <Button component={RouterLink} to="/" variant="contained">
          Volver al Login
        </Button>
      </Grid>
    </Grid>
  );
};
