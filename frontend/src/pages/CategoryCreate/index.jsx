import {useState} from 'react';
import {useHistory} from 'react-router-dom';
import {createCategory} from '../../api';
import {useDispatch, useSelector} from 'react-redux';
import {ErrorMessage, Field, Form, Formik} from 'formik';
import {getFieldError} from '../../utils/utils';
import * as Yup from 'yup';
import {FormLabel, TextField} from '@mui/material';
import Button from '@mui/material/Button';

const CategoryCreate = () => {
  const categoryState = useSelector((state) => state.categoriesReducer);

  const history = useHistory();
  const dispatch = useDispatch();

  const initialValues = {
    title: '',
  };

  const validationSchema = Yup.object({
    title: Yup.string().required('Title is required'),
  });

  const onSubmit = async (values) => {
    await dispatch(createCategory(values));
    history.push('/categories/');
  };

  return (
    <div className="create">
      <h2>Create New Category</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({handleChange, values}) => ( // Destructure handleChange and values from Formik props
          <Form>

            <FormLabel sx={{mt: 2}}>Title</FormLabel>
            <TextField
              id="filled-basic"
              variant="outlined"
              name='title'
              type='text'
              fullWidth
              onChange={handleChange}
              value={values.title}
            />
            <ErrorMessage name="title" component="div" className="error" />

            {getFieldError('non_field_errors', categoryState.error) && (
              <div className="error">{getFieldError('non_field_errors', categoryState.error)}</div>
            )}

            {categoryState.isLoading ? (
            <Button sx={{mt: 2}} type="submit" disabled variant="contained">
                  Creating...
            </Button>
          ) : (
            <Button sx={{mt: 2}} type="submit" variant="contained">
                  Create
            </Button>
          )}
          </Form>
        )}

      </Formik>
    </div>
  );
};

export default CategoryCreate;
