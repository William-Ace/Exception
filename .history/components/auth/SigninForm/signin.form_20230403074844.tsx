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

const SigninForm: React.FC<SigninFormProps> = ({ onForgotPwd }) => {
  const { handleSubmit, control } = useForm({
    resolver: yupResolver(formSchema),
    defaultValues: initialValues,
  });
};

export default SigninForm;