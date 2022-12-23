import {
  Alert,
  Box,
  CircularProgress,
  Container,
  CssBaseline,
  Fab,
  IconButton,
  Zoom,
} from '@mui/material';
import { createEvent, deleteEvent, updateEvent } from 'api/events';
import { EventForm } from 'components/Event';
import { PageWrapper } from 'components/PageWrapper';
import Events from 'containers/Events';
import useFetchEvents from 'hooks/useFetchEvents';
import { useCallback, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Event } from 'types/event';
import AddIcon from '@mui/icons-material/Add';

const initialValue: Event = {
  id: null,
  title: '',
  date: '2023-01-1',
  image: '',
  details: '',
};

export const Home = () => {
  const [showForm, setShowForm] = useState(false);
  const [initialValues, setInitialValues] = useState<Event>(initialValue);
  const toggleFormHandler = useCallback(() => {
    setShowForm((prevState) => !prevState);
  }, []);
  const { fetchEvents, events, error, loading } = useFetchEvents();

  const handleEditButton = (event: Event) => {
    setInitialValues(event);
    toggleFormHandler();
  };

  const handleDeleteButton = async (event: Event) => {
    if (event.id) {
      await deleteEvent(event.id);
      fetchEvents();
    }
  };

  const handleFormSubmit = async (event: Event) => {
    if (event.id) {
      await updateEvent(event);
    } else {
      await createEvent({ ...event, id: new Date().getTime() });
    }
    setInitialValues(initialValue);
    toggleFormHandler();
    fetchEvents();
  };

  if (error) return <Alert severity='error'>ops! something went wrong</Alert>;

  return (
    <>
      <CssBaseline />
      <Helmet>
        <title>Home</title>
      </Helmet>
      <PageWrapper>
        <Container maxWidth='lg'>
          {loading ? (
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <CircularProgress />
            </Box>
          ) : (
            <Events
              handleEditButton={handleEditButton}
              events={events}
              handleDeleteButton={handleDeleteButton}
            />
          )}
          {showForm && (
            <EventForm
              toggleFormHandler={toggleFormHandler}
              initialValues={initialValues}
              handleFormSubmit={handleFormSubmit}
            />
          )}
          <IconButton
            sx={{
              position: 'fixed',
              bottom: '5rem',
              right: '5rem',
            }}
            onClick={toggleFormHandler}
          >
            <Fab color='info' aria-label='edit' size='medium'>
              <AddIcon />
            </Fab>
          </IconButton>
        </Container>
      </PageWrapper>
    </>
  );
};
