import { Button, Dialog, DialogContent, Grid, TextField, Typography } from '@mui/material';
import { useFormik } from 'formik';
import { Event } from 'types/event';
import * as yup from 'yup';

const validationSchema = yup.object({
  title: yup.string().required('Title is required'),
  date: yup.date().required('Date is required'),
  image: yup.string().required('Image URL is required'),
  details: yup.string().required('Details is required'),
});

interface EventFormProps {
  handleCloseForm: () => void;
  initialValues: Event;
  handleFormSubmit: (event: Event) => void;
}

export const EventForm = (props: EventFormProps) => {
  const { handleCloseForm, initialValues, handleFormSubmit } = props;

  const formik = useFormik({
    initialValues,
    validationSchema: validationSchema,
    onSubmit: (event) => {
      handleFormSubmit(event);
    },
  });

  const handleClose = () => {
    handleCloseForm();
  };
  return (
    <Dialog fullWidth maxWidth='sm' open={true}>
      <DialogContent>
        <Grid container rowGap={1}>
          <Grid container direction='row'>
            <Typography variant='h5'>Event Form</Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              margin='dense'
              variant='outlined'
              label='Event Title'
              name='title'
              value={formik.values.title}
              onChange={formik.handleChange}
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
              onChange={formik.handleChange}
              error={formik.touched.date && Boolean(formik.errors.date)}
              helperText={formik.touched.date && formik.errors.date}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              type='url'
              margin='dense'
              variant='outlined'
              label='Event Image URL'
              name='image'
              value={formik.values.image}
              onChange={formik.handleChange}
              error={formik.touched.image && Boolean(formik.errors.image)}
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
              onChange={formik.handleChange}
              error={formik.touched.details && Boolean(formik.errors.details)}
              helperText={formik.touched.details && formik.errors.details}
            />
          </Grid>
          <Grid container justifyContent='space-between'>
            <Button onClick={handleClose} variant='outlined'>
              Cancel
            </Button>
            <Button onClick={() => formik.handleSubmit()} variant='contained'>
              Save Event
            </Button>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
};
