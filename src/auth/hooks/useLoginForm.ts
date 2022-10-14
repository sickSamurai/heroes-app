import { ChangeEvent, useState } from 'react';

import { User } from '../types/User';

export const useLoginForm = () => {
  const initValues = { username: "", password: "" } as User;
  const [userValues, setUserValues] = useState(initValues);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUserValues({
      ...userValues,
      [event.target.name]: event.target.value
    });
  };

  return { userValues, onChange };
};
