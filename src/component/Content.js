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
      sx={{ py: { xs: 2, sm: 4 }, px: { xs: 2, sm: 3 } }}
    >
      <Box
        sx={{
          display: 'grid',
          // Phones, Surface Duo and portrait tablets: one column.
          // Landscape tablets, laptops and desktops: profile + resume side by side.
          gridTemplateColumns: {
            xs: 'minmax(0, 1fr)',
            md: 'minmax(260px, 1fr) minmax(0, 2.3fr)',
          },
          gap: { xs: 2, md: 3 },
          alignItems: 'start',
          maxWidth: { xs: 680, md: 'none' },
          mx: 'auto',
        }}
      >
        <Box
          sx={{
            // Keep the profile in view while scrolling, but only when the whole
            // card fits on screen (short laptop screens would cut off its buttons).
            '@media (min-width: 900px) and (min-height: 820px)': {
              position: 'sticky',
              top: 32,
            },
          }}
        >
          <ProfileSection resumeData={resumeData} />
        </Box>
        <ResumeSection resumeData={resumeData} />
      </Box>
    </Container>
  );
}
