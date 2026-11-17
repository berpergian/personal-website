import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { styled } from '@mui/material/styles';

/* Solid dark strip: readable on top of any part of the background photo */
const FooterContainer = styled('footer')(({ theme }) => ({
  marginTop: 'auto',
  backgroundColor: 'rgba(15, 23, 32, 0.92)',
  color: 'rgba(255, 255, 255, 0.85)',
  padding: theme.spacing(1.5, 0),
  // Phones: tighter footer so the scrollable tab content gets more room
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(0.75, 0),
    '& .MuiTypography-root': { fontSize: '0.75rem', lineHeight: 1.5 },
  },
}));

export default function Footer() {
  return (
    <FooterContainer>
      <Container maxWidth="sm">
        <Typography variant="body2" align="center">
          © Muhammad Ganjar Imanudin {new Date().getFullYear()}
        </Typography>
        <Typography variant="body2" align="center" sx={{ opacity: 0.75 }}>
          Background photo by{' '}
          <Link
            color="inherit"
            href="https://unsplash.com/photos/IocJwyqRv3M"
            target="_blank"
            rel="noopener noreferrer"
          >
            Louie Martinez
          </Link>{' '}
          on Unsplash
        </Typography>
      </Container>
    </FooterContainer>
  );
}
