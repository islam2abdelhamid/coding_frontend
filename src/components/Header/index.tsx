import { Button } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import { Logo } from 'components/Header/Logo';
import { SearchBar } from 'components/Header/SearchBar';

export const Header = () => {
  return (
    <Toolbar
      sx={{
        borderBottom: '1px solid #e0e0e0',
        boxShadow: '0 1px 6px #00000024',
        justifyContent: 'space-evenly',
      }}
    >
      <Logo />
      <SearchBar />
      <Button variant='outlined'>Add Article</Button>
    </Toolbar>
  );
};
