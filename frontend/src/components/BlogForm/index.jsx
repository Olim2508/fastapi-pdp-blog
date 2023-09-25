import {useDispatch, useSelector} from 'react-redux';
import {ErrorMessage, Field, Form, Formik, useFormikContext} from 'formik';
import {getFieldError} from '../../utils/utils';
import * as Yup from 'yup';
import {FormControl, FormHelperText, FormLabel, InputLabel, NativeSelect, TextField} from '@mui/material';
import {Input} from '@mui/icons-material';
import Button from '@mui/material/Button';

const BlogForm = ({isUpdate = false, initialValues, onSubmit, categories}) => {
  const isLoading = useSelector((state) => state.postsReducer.isLoading);
  const success = useSelector((state) => state.postsReducer.success);
  const error = useSelector((state) => state.postsReducer.error);


  const validationSchema = Yup.object({
    title: Yup.string().required('Title is required'),
    category: Yup.string().required('Category is required'),
    content: Yup.string().required('Content is required'),
  });

  return (
    <div className="create">
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

            <FormLabel sx={{mt: 2}}>Category</FormLabel>
            <FormControl fullWidth>
              <NativeSelect
                name="category"
                onChange={handleChange}
                // defaultValue={null}
                inputProps={{
                  name: 'category',
                  id: 'uncontrolled-native',
                }}
              >
                <option value="">---</option>
                {categories && (
                  categories.map((category) => (
                    <option
                      key={category.id}
                      value={category.id}
                      selected={category.id == initialValues.category}
                    >
                      {category.title}
                    </option>
                  ))
                )}
              </NativeSelect>
            </FormControl>
            <ErrorMessage name="category" component="div" className="error" />

            <FormLabel sx={{mt: 2}}>Content</FormLabel>
            <TextField id="filled-basic"
              variant="outlined"
              name={'content'}
              type={'text'}
              fullWidth
              multiline
              rows={4}
              onChange={handleChange}
              value={values.content}
            />
            <ErrorMessage name="author" component="div" className="error" />

            {getFieldError('non_field_errors', error) && (
              <div className="error">{getFieldError('non_field_errors', error)}</div>
            )}

            {isLoading ? (
                <Button sx={{mt: 2}} type="submit" disabled variant="contained">
                  {isUpdate ? 'Updating Blog...' : 'Creating Blog'}
                </Button>
          ) : (
              <Button sx={{mt: 2}} type="submit" variant="contained">
                {isUpdate ? 'Update' : 'Create'}
              </Button>
          )}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default BlogForm;
