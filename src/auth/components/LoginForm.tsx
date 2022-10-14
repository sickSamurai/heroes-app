import { Box, Button, Card, CardActions, CardContent, CardHeader, Stack, TextField } from '@mui/material';
import React, { FormEvent, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import AuthContext from '../context/AuthContext';
import { useLoginForm } from '../hooks/useLoginForm';

export const LoginForm = () => {
  const navigate = useNavigate();
  const { onLogin } = useContext(AuthContext);
  const { userValues: user, onChange } = useLoginForm();

  const login = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const lastPath = localStorage.getItem("lastPath") || "/";
    onLogin!(user);
    navigate(lastPath, { replace: true });
  };

  return (
    <Box component="form" autoComplete="off" onSubmit={login}>
      <Card sx={{ width: "33%", mx: "auto", my: 2 }}>
        <CardHeader title="Login" />
        <CardContent>
          <Stack spacing={4}>
            <TextField
              name="username"
              type="text"
              value={user.username}
              onChange={onChange}
              variant="filled"
              label="Usuario"
              placeholder="Ingresa tu Usuario"
              required
            />
            <TextField
              name="password"
              type="password"
              value={user.password}
              onChange={onChange}
              variant="filled"
              label="Contraseña"
              placeholder="Ingresa tu Contraseña"
              required
            />
          </Stack>
        </CardContent>
        <CardActions>
          <Button type="submit" variant="contained" sx={{ mx: "auto" }}>
            Log In
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};
