import { IconButton, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import styled from '@emotion/styled';

export const SearchBar = () => (
  <Wrapper>
    <TextField placeholder='Search...' size='small' />
    <IconButton type='submit' aria-label='search'>
      <IconButton>
        <SearchIcon />
      </IconButton>
    </IconButton>
  </Wrapper>
);

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;
