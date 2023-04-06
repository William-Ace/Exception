import React from 'react';
import '@testing-library/jest-dom';
import { render, fireEvent } from '@testing-library/react';
import SignInForm from '../components/auth/sign.in.form';

describe('Login Page', () => {
  it('sign in', () => {
    const { getByTestId } = render(
      <SignInForm
        signInWithEmailAndPassword={() => {}}
        onForgotPwd={() => {}}
      />
    );

    const signIn = getByTestId('account-sign-in');
    fireEvent.submit(signIn);

    const email = getByTestId('account-email');

    expect(email.children[0]).toHaveClass('MuiInputLabel-root');
  });
});
