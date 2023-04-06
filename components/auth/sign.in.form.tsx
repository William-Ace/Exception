import React, { useCallback } from 'react';
import { useForm } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Button } from '@mui/material';
import * as yup from 'yup';

import FormInput from '../input/form.input';

const formSchema = yup.object().shape({
  email: yup.string().email().required('This field is required'),
  password: yup.string().required('No password provided'),
});

const initialValues = {
  email: '',
  password: '',
};

interface SignInFormProps {
  onForgotPwd: () => void;
  signInWithEmailAndPassword: (email, password) => void;
}

const SignInForm: React.FC<SignInFormProps> = ({
  onForgotPwd,
  signInWithEmailAndPassword,
}) => {
  const { handleSubmit, control, register, getValues } = useForm({
    resolver: yupResolver(formSchema),
    defaultValues: initialValues,
  });

  const onFormSubmit = useCallback(() => {
    const { email, password } = getValues();
    signInWithEmailAndPassword(email, password);
  }, []);

  return (
    <form
      onSubmit={handleSubmit(onFormSubmit)}
      className='signInForm'
      data-testid='account-sign-in'
    >
      <FormInput
        control={control}
        name='email'
        label='Email'
        type='text'
        variant='standard'
        register={register}
      />
      <FormInput
        name='password'
        control={control}
        label='Password'
        type='password'
        variant='standard'
        register={register}
      />
      <Box className='signInForm__buttons'>
        <Button color='primary' type='submit' variant='contained'>
          SIGN IN
        </Button>
        <Box className='passRecoveryForm__forgotPassword' onClick={onForgotPwd}>
          Forgot password?
        </Box>
      </Box>
    </form>
  );
};

export default SignInForm;
