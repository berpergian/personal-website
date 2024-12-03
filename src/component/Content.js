import React from 'react';
import Grid from '@mui/material/Grid2';
import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';
import ProfileSection from './ProfileSection';
import ResumeSection from './ResumeSection';
const resumeData = require('../resume_data.json');

// Styled Container
const CardGrid = styled(Container)(({ theme }) => ({
  paddingTop: theme.spacing(4),
  paddingBottom: theme.spacing(4),
}));

export default function Content() {
  return (
    <CardGrid maxWidth="md">
      <Grid container spacing={2}>
        <Grid xs={12} sm={6} md={4}>
          <ProfileSection resumeData={resumeData} />
        </Grid>
        <Grid xs={12} sm={6} md={8}>
          <ResumeSection resumeData={resumeData} />
        </Grid>
      </Grid>
    </CardGrid>
  );
}
