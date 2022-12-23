import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Fab, IconButton } from '@mui/material';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Event } from 'types/event';

interface EventCardProps {
  event: Event;
  handleEditButton: (event: Event) => void;
  handleDeleteButton: (event: Event) => void;
}

export const EventCard = (props: EventCardProps) => {
  const { event, handleEditButton, handleDeleteButton } = props;
  return (
    <Grid item xs={12} md={6}>
      <CardActionArea component='a' href='#'>
        <Card sx={{ display: 'flex' }}>
          <CardContent sx={{ flex: 1 }}>
            <Typography component='h2' variant='h5'>
              {event.title}
            </Typography>
            <Typography variant='subtitle1' color='text.secondary'>
              {event.date}
            </Typography>
            <Typography variant='subtitle1' paragraph>
              {event.details}
            </Typography>
            <IconButton onClick={() => handleEditButton(event)}>
              <Fab color='secondary' aria-label='edit' size='small'>
                <EditIcon />
              </Fab>
            </IconButton>
            <IconButton onClick={() => handleDeleteButton(event)}>
              <Fab color='error' aria-label='edit' size='small'>
                <DeleteIcon />
              </Fab>
            </IconButton>
          </CardContent>
          <CardMedia
            component='img'
            sx={{ width: 160, display: { xs: 'none', sm: 'block' } }}
            image={event.image}
            alt={event.title}
          />
        </Card>
      </CardActionArea>
    </Grid>
  );
};
