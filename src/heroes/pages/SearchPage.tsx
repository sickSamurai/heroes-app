import Grid from '@mui/material/Unstable_Grid2';
import React, { useState } from 'react';

import { SearchForm } from '../components/SearchForm';
import { SearchResults } from '../components/SearchResults';

export const SearchPage = () => {
  return (
    <Grid container sx={{ p: 4 }} columns={3} spacing={2}>
      <Grid xs={1}>
        <SearchForm />
      </Grid>
      <Grid xs={true}>
        <SearchResults />
      </Grid>
    </Grid>
  );
};
