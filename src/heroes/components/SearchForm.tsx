import SearchIcon from '@mui/icons-material/Search';
import { Box, IconButton, InputAdornment, InputProps, TextField } from '@mui/material';
import React, { FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';

import { useForm } from '../hooks/useForm';

export const SearchForm = () => {
  const { value: searchTerm, onChange } = useForm("");
  const navigate = useNavigate();
  const search = (event: FormEvent<HTMLFormElement>) => {
    navigate(`?query=${searchTerm.trim()}`);
    event.preventDefault();
  };

  const inputProps: InputProps = {
    endAdornment: (
      <InputAdornment position="end">
        <IconButton type="submit" color="inherit">
          <SearchIcon />
        </IconButton>
      </InputAdornment>
    ),
  };

  return (
    <>
      <Box component="form" autoComplete="off" onSubmit={search}>
        <TextField
          variant="filled"
          label="Buscar Heroe"
          value={searchTerm}
          onChange={onChange}
          InputProps={inputProps}
          sx={{ width: "100%" }}
        />
      </Box>
    </>
  );
};
