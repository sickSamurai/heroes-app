import { Alert, Typography } from '@mui/material';
import React from 'react';

import { useAlert } from '../hooks/useAlert';
import { AlertVariant } from '../types/AlertVariant';

type Props = {
  variant: AlertVariant;
};

export const ResultAlert = ({ variant }: Props) => {
  const { message: alertMessage } = useAlert(variant);

  return (
    <Alert severity="info">
      <Typography variant="body1">{alertMessage}</Typography>
    </Alert>
  );
};
