import React, { useCallback } from 'react';
import { useForm } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Button } from '@mui/material';
import * as yup from 'yup';

import FormInput from '../input/form.input';

const formSchema = yup.object().shape({
  firstName: yup.string().required('This field is required'),
  lastName: yup.string().required('This field is required'),
  email: yup.string().email().required('This field is required'),
  password: yup.string().required('No password provided'),
});

const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
};

type typeCreateUserWithEmailAndPassword = (a: {}) => void;

const SignUpForm = ({
  createUserWithEmailAndPassword: typeCreateUserWithEmailAndPassword,
}) => {
  const { handleSubmit, control, register, getValues } = useForm({
    resolver: yupResolver(formSchema),
    defaultValues: initialValues,
  });

  const onFormSubmit = useCallback(
    () => createUserWithEmailAndPassword(getValues()),
    [getValues, createUserWithEmailAndPassword]
  );

  return (
    <form onSubmit={handleSubmit(onFormSubmit)} className='signInForm'>
      <FormInput
        control={control}
        name='firstName'
        label='First name'
        type='text'
        variant='standard'
        register={register}
      />
      <FormInput
        control={control}
        name='lastName'
        label='Last name'
        type='text'
        variant='standard'
        register={register}
      />
      <FormInput
        control={control}
        name='email'
        label='Email'
        type='text'
        variant='standard'
        register={register}
      />
      <FormInput
        control={control}
        name='password'
        label='Password'
        type='password'
        variant='standard'
        register={register}
      />
      <Box className='signInForm__buttons'>
        <Button color='primary' type='submit' variant='contained'>
          SIGN UP
        </Button>
      </Box>
    </form>
  );
};

export default SignUpForm;
