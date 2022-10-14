import { ChangeEvent, useState } from 'react';

export const useForm = (defaultValue: string) => {
  const [value, setValue] = useState(defaultValue);
  const onChange = (event: ChangeEvent<HTMLInputElement>) =>
    setValue(event.target.value);

  return { value, onChange };
};
