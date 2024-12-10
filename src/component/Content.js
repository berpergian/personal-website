import React from 'react';
import Box from '@mui/material/Box';
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
      <Box
        display="grid"
        gridTemplateColumns={{ xs: '1fr', sm: '1fr 1fr', md: '1fr 2fr' }}
        gap={2} // Spacing between grid items
      >
        <Box>
          <ProfileSection resumeData={resumeData} />
        </Box>
        <Box>
          <ResumeSection resumeData={resumeData} />
        </Box>
      </Box>
    </CardGrid>
  );
}
