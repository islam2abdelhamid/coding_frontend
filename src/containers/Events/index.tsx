import { Grid } from '@mui/material';
import { EventCard } from 'components/Event';
import { Event } from 'types/event';

interface EventsProps {
  handleEditButton: (event: Event) => void;
  handleDeleteButton: (event: Event) => void;
  events: Event[];
}

const Events = ({ handleEditButton, events, handleDeleteButton }: EventsProps) => {
  return (
    <Grid container spacing={4}>
      {events.map((event) => (
        <EventCard
          key={event.title}
          event={event}
          handleEditButton={handleEditButton}
          handleDeleteButton={handleDeleteButton}
        />
      ))}
    </Grid>
  );
};
export default Events;
