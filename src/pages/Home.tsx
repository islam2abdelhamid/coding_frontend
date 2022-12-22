import { Container, CssBaseline, Grid } from '@mui/material';
import axios from 'axios';
import Article from 'components/Article';
import ArticleForm from 'components/Article/ArticleForm';
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';

interface Article {
  date: string;
  description: string;
  image: string;
  imageLabel: string;
  title: string;
}

export const Home = () => {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    axios.get('http://localhost:3004/articles').then((response) => {
      setArticles(response.data);
    });
  }, []);

  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <CssBaseline />
      <Container maxWidth='lg'>
        <main>
          <Grid container spacing={4}>
            {articles.map((article) => (
              <Article key={article.title} article={article} />
            ))}
            <ArticleForm />
          </Grid>
        </main>
      </Container>
    </>
  );
};
