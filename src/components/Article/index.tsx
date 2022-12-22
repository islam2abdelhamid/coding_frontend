import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

interface ArticleProps {
  article: {
    date: string;
    description: string;
    image: string;
    imageLabel: string;
    title: string;
  };
}

export default function Article(props: ArticleProps) {
  const { article } = props;

  return (
    <Grid item xs={12} md={6}>
      <CardActionArea component='a' href='#'>
        <Card sx={{ display: 'flex' }}>
          <CardContent sx={{ flex: 1 }}>
            <Typography component='h2' variant='h5'>
              {article.title}
            </Typography>
            <Typography variant='subtitle1' color='text.secondary'>
              {article.date}
            </Typography>
            <Typography variant='subtitle1' paragraph>
              {article.description}
            </Typography>
            <Typography variant='subtitle1' color='primary'>
              Continue reading...
            </Typography>
          </CardContent>
          <CardMedia
            component='img'
            sx={{ width: 160, display: { xs: 'none', sm: 'block' } }}
            image={article.image}
            alt={article.imageLabel}
          />
        </Card>
      </CardActionArea>
    </Grid>
  );
}
