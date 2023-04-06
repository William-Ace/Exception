import { Google, LinkedIn, Window } from '@mui/icons-material';
import { Alert, Box, Button, Divider, Typography } from '@mui/material';
import { useCallback, useState, useEffect } from 'react';
import Image from 'next/image';

import ForgotPwdForm from '../components/auth/forgot.pwd.form';
import SignInForm from '../components/auth/sign.in.form';
import SignUpForm from '../components/auth/sign.up.form';

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBviOeCokAXqKJdMhKkLjLL-EJIgXNPfsE',
  authDomain: 'project-1934.firebaseapp.com',
  projectId: 'project-1934',
  storageBucket: 'project-1934.appspot.com',
  messagingSenderId: '745239468727',
  appId: '1:745239468727:web:79fca89204e9e9c464cb32',
  measurementId: 'G-VT27HK3Z0V',
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const GoogleProvider = new firebase.auth.GoogleAuthProvider();
GoogleProvider.setCustomParameters({ prompt: 'select_account' });

// Sign in and sign out functins
const signIn = () => auth.signInWithPopup(GoogleProvider);
const signOut = () => auth.signOut();

const handleGoogleLogin = () => {
  const GoogleProvider = new firebase.auth.GoogleAuthProvider();
  GoogleProvider.setCustomParameters({ prompt: 'select_account' });
  firebase
    .auth()
    .signInWithPopup(GoogleProvider)
    .then(data => {
      console.log(data);
    })
    .catch(err => console.log(err));
};

const handleMicrosoftLogin = () => {
  const MicrosoftProvider = new firebase.auth.OAuthProvider('microsoft.com');
  firebase
    .auth()
    .signInWithPopup(MicrosoftProvider)
    .then(data => {
      console.log(data);
    })
    .catch(err => console.log(err));
};

export default function Auth() {
  const handleAuthMode = useCallback((mode: string) => setAuthMode(mode), []);
  const [authMode, setAuthMode] = useState('signin');
  const [user, setUser] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(async user => {});
  }, []);

  return (
    <Box
      className='mainBkg'
      style={{
        backgroundImage: `url('./assets/images/background.ed92fc21.jpg')`,
      }}
    >
      <Box className='contentWrap'>
        <Box className='leftWrap'>
          <Box className='imgCont'>
            <Image
              src='./assets/images/spiral.53b194f3.svg'
              alt='spiral'
              width={150}
              height={31.5}
            />
          </Box>
          <Box className='textHld'>
            <Box className='majorCap'>WELCOME TO THE MARKETPLACE</Box>
            <Box className='minorText'>
              Exceptionly provides hands-on tested remote software engineers
              unlike any other outsourcing company. Our product delivers talent
              directly for hiring without a lifetime markup over 400%.
            </Box>
          </Box>
        </Box>

        <Box className='rightWrap'>
          <Box className='topHld'>
            <Box className='actionTitle'>
              <Image
                src='./assets/images/logo.bf7070eb.svg'
                alt='exceptionly logo'
                width={250}
                height={250}
              />
              <Box className='proText'>
                <Typography>
                  {authMode === 'signin'
                    ? 'Sign in to your account'
                    : authMode === 'signup'
                    ? 'Sign up to your account'
                    : 'Password Recovery'}
                </Typography>
              </Box>
            </Box>

            <Box className='vertical-centre'>
              {authMode === 'forgotpwd' ? (
                <>
                  <Alert
                    severity='info'
                    icon={false}
                    sx={{
                      mt: 8,
                      mb: 8,
                    }}
                  >
                    <Typography variant='body1' gutterBottom>
                      What's Next?
                    </Typography>
                    We are going to send a recovery email to your address if
                    there is an associated account. You can use the link for
                    resetting your password.
                  </Alert>
                  <ForgotPwdForm />
                </>
              ) : (
                <>
                  <Box className='signInGroup'>
                    <Button
                      onClick={signIn}
                      variant='contained'
                      color='primary'
                      startIcon={<Google />}
                      sx={{
                        width: '100%',
                        mb: 2,
                      }}
                    >
                      SIGN IN WITH GOOGLE
                    </Button>
                    <Button
                      variant='contained'
                      color='primary'
                      startIcon={<LinkedIn />}
                      sx={{
                        width: '100%',
                        mb: 2,
                      }}
                    >
                      SIGN IN WITH LINKEDIN
                    </Button>
                    <Button
                      onClick={handleMicrosoftLogin}
                      variant='contained'
                      color='warning'
                      startIcon={<Window />}
                      sx={{
                        width: '100%',
                        mb: 2,
                      }}
                    >
                      SIGN IN WITH MICROSOFT
                    </Button>
                    <Divider sx={{ color: 'rgb(102, 102, 102)' }}>
                      or use business email
                    </Divider>
                  </Box>

                  <Box>
                    {authMode === 'signin' ? (
                      <SignInForm
                        onForgotPwd={() => handleAuthMode('forgotpwd')}
                      />
                    ) : (
                      <SignUpForm />
                    )}
                  </Box>
                </>
              )}
            </Box>
          </Box>
          <Box>
            <Box className='btHld'>
              <Box className='innerNewText'>
                <Typography component='span'>
                  {authMode === 'signin'
                    ? `Don't have an account?`
                    : `Already have an account?`}
                </Typography>
                {authMode === 'signin' ? (
                  <Box onClick={() => handleAuthMode('signup')}>
                    <Typography component='span'>CREATE ACCOUNT</Typography>
                  </Box>
                ) : (
                  <Box onClick={() => handleAuthMode('signin')}>
                    <Typography component='span'>SIGN IN HERE</Typography>
                  </Box>
                )}
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}