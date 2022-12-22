import styled from '@emotion/styled';

export const Logo = () => {
  return (
    <Wrapper>
      <img src='/logo.png' alt='logo' width={50} height={50} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;
