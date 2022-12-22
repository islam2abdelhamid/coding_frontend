import { Button, Dialog, DialogContent, Grid, TextField, Typography } from '@mui/material';
import { useFormik } from 'formik';
import * as yup from 'yup';

const validationSchema = yup.object({
  title: yup.string().required('Title is required'),
  date: yup.date().required('Date is required'),
  details: yup.string().required('Details is required'),
});

const ArticleForm = () => {
  const formik = useFormik({
    initialValues: {
      title: '',
      date: '2023-01-22',
      details: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      try {
        alert(JSON.stringify(values, null, 2));
        // createProduct({ ...values, id: new Date().getTime() });
        // fetchProducts();
        formik.resetForm();
      } catch (error) {
        console.log(error);
      }
    },
  });
  return (
    <Dialog fullWidth maxWidth='sm' open={true}>
      <DialogContent>
        <Grid container rowGap={1}>
          <Grid container direction='row'>
            <Typography variant='h5'>Add New Event</Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              margin='dense'
              variant='outlined'
              label='Event Title'
              name='title'
              value={formik.values.title}
              error={formik.touched.title && Boolean(formik.errors.title)}
              helperText={formik.touched.title && formik.errors.title}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              type='date'
              margin='dense'
              variant='outlined'
              label='Event Date'
              name='date'
              value={formik.values.date}
              error={formik.touched.date && Boolean(formik.errors.date)}
              helperText={formik.touched.date && formik.errors.date}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              margin='dense'
              multiline
              rows='5'
              variant='outlined'
              label='Event Details'
              name='details'
              value={formik.values.details}
              error={formik.touched.details && Boolean(formik.errors.details)}
              helperText={formik.touched.details && formik.errors.details}
            />
          </Grid>
          <Grid container justifyContent='flex-end'>
            <Button onClick={() => formik.handleSubmit()} variant='contained'>
              Add Product
            </Button>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
};

export default ArticleForm;
