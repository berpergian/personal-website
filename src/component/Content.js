import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import ProfileSection from './ProfileSection';
import ResumeSection from './ResumeSection';
const resumeData = require('../resume_data.json');

export default function Content() {
  return (
    <Container
      component="main"
      maxWidth="lg"
      sx={{
        flex: 1,
        minHeight: 0,
        display: 'flex',
        py: { xs: 1.5, sm: 2, md: 3 },
        px: { xs: 1.5, sm: 3 },
      }}
    >
      <Box
        sx={{
          flex: 1,
          minHeight: 0,
          width: '100%',
          display: 'grid',
          // Phones, Surface Duo and portrait tablets: compact profile on top,
          // tab content fills the rest. Landscape tablets and up: side by side.
          gridTemplateColumns: {
            xs: 'minmax(0, 1fr)',
            md: 'minmax(260px, 1fr) minmax(0, 2.3fr)',
          },
          gridTemplateRows: {
            xs: 'auto minmax(0, 1fr)',
            md: 'minmax(0, 1fr)',
          },
          gap: { xs: 1.5, sm: 2, md: 3 },
          maxWidth: { xs: 680, md: 'none' },
          mx: 'auto',
        }}
      >
        <ProfileSection resumeData={resumeData} />
        <ResumeSection resumeData={resumeData} />
      </Box>
    </Container>
  );
}
