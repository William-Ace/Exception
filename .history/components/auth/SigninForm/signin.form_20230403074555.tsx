import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const formSchema = yup.object().shape({
  email: yup.string().email().required('This field is required'),
  password: yup.string().required('No password provided'),
});

const initialValues = {
  email: '',
  password: '',
};

interface SigninFormProps {
  onForgotPwd: () => void;
}
