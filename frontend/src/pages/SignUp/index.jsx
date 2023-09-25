import {useEffect, useState} from 'react';
import {getPostDetailRequest, signUp} from '../../api';
import {useDispatch, useSelector} from 'react-redux';
import Modal from '../../components/Modal';
import {useHistory} from 'react-router-dom';
import * as Yup from 'yup';
import {Formik, Form, Field, ErrorMessage} from 'formik';

import {authTypes} from '../../redux/actions/authActions';
import {getFieldError} from '../../utils/utils';
import {FormControl, FormLabel, NativeSelect, TextField} from '@mui/material';
import Button from '@mui/material/Button';

const SignUp = () => {
  const isLoading = useSelector((state) => state.authReducer.isLoading);
  const success = useSelector((state) => state.authReducer.success);
  const error = useSelector((state) => state.authReducer.error);


  const history = useHistory();
  const dispatch = useDispatch();

  const initialValues = {
    first_name: '',
    last_name: '',
    email: '',
    password: '',
  };

  const validationSchema = Yup.object({
    first_name: Yup.string().required('First name is required'),
    last_name: Yup.string().required('Last name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().required('Password is required'),
  });


  useEffect(() => {
    if (success) {
      dispatch({type: authTypes.SIGN_UP_RESET});
      history.push('/log-in');
    }
  }, [success]);

  const onSubmit = (values) => {
    const full_name = `${values.first_name} ${values.last_name}`;
    const user = {full_name, email: values.email, password: values.password};
    dispatch(signUp(user));
  };

  return (
    <div className="create">
      <h2>Sign Up</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({handleChange, values}) => ( // Destructure handleChange and values from Formik props
          <Form>
            <FormLabel sx={{mt: 1}}>First name</FormLabel>
            <TextField
              variant="outlined"
              name='first_name'
              type='text'
              fullWidth
              onChange={handleChange}
              value={values.first_name}
            />
            <ErrorMessage name="first_name" component="div" className="error" />

            <FormLabel sx={{mt: 1}}>Last name</FormLabel>
            <TextField
              variant="outlined"
              name='last_name'
              type='text'
              fullWidth
              onChange={handleChange}
              value={values.last_name}
            />
            <ErrorMessage name="last_name" component="div" className="error" />

            <FormLabel sx={{mt: 1}}>Email</FormLabel>
            <TextField
              variant="outlined"
              name='email'
              type='email'
              fullWidth
              onChange={handleChange}
              value={values.email}
            />
            <ErrorMessage name="email" component="div" className="error" />

            <FormLabel sx={{mt: 1}}>Password</FormLabel>
            <TextField
              variant="outlined"
              name='password'
              type='password'
              fullWidth
              onChange={handleChange}
              value={values.password}
            />
            <ErrorMessage name="password" component="div" className="error" />

            {getFieldError('non_field_errors', error) && (
              <div className="error">{getFieldError('non_field_errors', error)}</div>
            )}

            {isLoading ? (
                <Button sx={{mt: 2}} type="submit" disabled variant="contained">
                  Signing up...
                </Button>
          ) : (
            <Button sx={{mt: 2}} type="submit" variant="contained">
                  Sign up
            </Button>
          )}
          </Form>
        )}

      </Formik>
    </div>
  );
};

export default SignUp;
