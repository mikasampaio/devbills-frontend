import { ComponentProps, forwardRef } from 'react';
import { Controller, useFormContext } from 'react-hook-form';

import { Container } from './styles';

type InputProps = ComponentProps<'input'> & {
  name: string;
  label?: string;
  variant?: 'black' | 'dark';
  width?: string;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(function (
  { name, label, variant = 'dark', width, ...props },
  ref,
) {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => {
        return (
          <Container $variant={variant} width={width}>
            {label && <label htmlFor="">{label}</label>}
            <input
              name={name}
              value={field.value}
              onChange={(e) => field.onChange(e.target.value)}
              ref={ref}
              {...props}
            />

            <span className="text-sm	text-red-400 font-bold">
              {fieldState.error && fieldState.error.message}
            </span>
          </Container>
        );
      }}
    />
  );
});
