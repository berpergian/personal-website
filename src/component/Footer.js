import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { styled } from '@mui/material/styles';

/* Styled Footer */
const FooterContainer = styled('footer')(({ theme }) => ({
  marginTop: 'auto',
  backgroundColor: 'white',
  opacity: 0.6,
  transition: 'all ease 400ms',
  '&:hover': {
    opacity: 1,
  },
  [theme.breakpoints.down('md')]: {
    opacity: 1,
  },
}));

export default function Footer() {
  return (
    <FooterContainer>
      <Container maxWidth="sm">
        <Typography variant="body2" color="textSecondary" align="center">
          © Muhammad Ganjar Imanudin 2024
        </Typography>
        <Typography variant="body2" color="textSecondary" align="center">
          Background Photo by{' '}
          <Link color="inherit" href="https://unsplash.com/photos/IocJwyqRv3M">
            Louie Martinez
          </Link>{' '}
          on Unsplash
        </Typography>
      </Container>
    </FooterContainer>
  );
}
