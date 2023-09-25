import {useEffect, useState} from 'react';
import {createCategory, logIn} from '../../api';
import {useDispatch, useSelector} from 'react-redux';
import {authTypes} from '../../redux/actions/authActions';
import {useHistory} from 'react-router-dom';
import {getFieldError} from '../../utils/utils';
import {ErrorMessage, Field, Form, Formik} from 'formik';
import {FormLabel, TextField} from '@mui/material';
import Button from '@mui/material/Button';

const LogIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const success = useSelector((state) => state.authReducer.success);
  const error = useSelector((state) => state.authReducer.error);
  const isLoading = useSelector((state) => state.authReducer.isLoading);

  const history = useHistory();
  const dispatch = useDispatch();

  const initialValues = {
    email: '',
    password: '',
  };

  useEffect(() => {
    if (success) {
      dispatch({type: authTypes.LOGIN_RESET});
      history.push('/');
    }
  }, [success]);


  const onSubmit = (values) => {
    const data = {username: values.email, password: values.password};
    dispatch(logIn(data));
    history.push('/');
  };

  return (
    <div className="create">
      <h2>Login</h2>
      <Formik
        initialValues={initialValues}
        // validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({handleChange, values}) => ( // Destructure handleChange and values from Formik props
          <Form>

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
                  Logging in...
            </Button>
          ) : (
            <Button sx={{mt: 2}} type="submit" variant="contained">
                  Log in
            </Button>
          )}
          </Form>
        )}

      </Formik>
    </div>
  );
};

export default LogIn;
