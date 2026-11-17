import React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';

/* Icons */
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import DescriptionIcon from '@mui/icons-material/Description';
import { thinBlueScrollbar } from './scrollbar';

const RESUME_URL = '/Resume%20-%20Muhammad%20Ganjar%20Imanudin.pdf';

/*
  Two layouts from one grid:
  - below 900px (phones, Surface Duo, portrait tablets): compact header with
    a round avatar beside the name, so the tab content gets most of the screen
  - 900px and up: tall card with the full-width photo
*/
export default function ProfileSection({ resumeData }) {
  const socialMedia = resumeData.socialMedia;

  const links = [
    { title: 'GitHub', href: socialMedia.github, icon: <GitHubIcon />, external: true },
    { title: 'LinkedIn', href: socialMedia.linkedin, icon: <LinkedInIcon />, external: true },
    { title: 'X', href: socialMedia.x, icon: <XIcon />, external: true },
  ];

  return (
    <Card
      elevation={1}
      sx={(theme) => ({
        ...thinBlueScrollbar(theme),
        borderRadius: 2,
        display: 'grid',
        alignContent: 'start',
        alignItems: 'center',
        gridTemplateColumns: {
          xs: '76px minmax(0, 1fr)',
          sm: '96px minmax(0, 1fr)',
          md: 'minmax(0, 1fr)',
        },
        gridTemplateAreas: {
          xs: '"photo info" "bio bio" "actions actions"',
          md: '"photo" "info" "bio" "actions"',
        },
        columnGap: 2,
        rowGap: { xs: 1.5, md: 2 },
        p: { xs: 2, md: 0 },
        // Desktop: fill the column; scroll inside only if a short screen needs it
        height: { md: '100%' },
        overflowY: { md: 'auto' },
        // Short/zoomed screens scroll the page: keep the card its natural
        // height instead of stretching it next to the long tab content
        '@media (max-height: 559px)': { height: 'auto', alignSelf: 'start' },
      })}
    >
      <Box
        component="img"
        src={resumeData.photo}
        alt={resumeData.name}
        sx={{
          gridArea: 'photo',
          display: 'block',
          objectFit: 'cover',
          objectPosition: 'center 20%',
          width: { xs: 76, sm: 96, md: '100%' },
          height: { xs: 76, sm: 96, md: 'min(36vh, 340px)' },
          borderRadius: { xs: '50%', md: 0 },
        }}
      />

      <Box sx={{ gridArea: 'info', textAlign: { xs: 'left', md: 'center' }, px: { md: 3 } }}>
        <Typography
          variant="h5"
          component="h1"
          sx={{ fontWeight: 600, lineHeight: 1.2, fontSize: { xs: '1.15rem', sm: '1.3rem' } }}
        >
          {resumeData.name}
        </Typography>
        <Typography variant="subtitle1" component="p" color="primary" sx={{ fontWeight: 600, lineHeight: 1.4 }}>
          {resumeData.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {resumeData.headline}
        </Typography>
        <Box
          sx={{
            display: 'flex',
            justifyContent: { xs: 'flex-start', md: 'center' },
            ml: { xs: -1, md: 0 },
            mt: 0.5,
          }}
        >
          {links.map((link) => (
            <Tooltip key={link.title} title={link.title}>
              <IconButton
                size="small"
                href={link.href}
                aria-label={link.title}
                sx={{ p: 1 }}
                {...(link.external && { target: '_blank', rel: 'noopener noreferrer' })}
              >
                {link.icon}
              </IconButton>
            </Tooltip>
          ))}
        </Box>
      </Box>

      <Typography
        variant="body2"
        color="text.secondary"
        sx={{
          gridArea: 'bio',
          textAlign: { xs: 'left', md: 'center' },
          px: { md: 3 },
        }}
      >
        {resumeData.summaryBio}
      </Typography>

      <Box
        sx={{
          gridArea: 'actions',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: 1.5,
          '& > a': { flex: { xs: 1, md: 'none' }, textTransform: 'none', whiteSpace: 'nowrap' },
          mx: { md: 3 },
          pt: { md: 2 },
          pb: { md: 3 },
          borderTop: { md: 1 },
          borderColor: { md: 'divider' },
        }}
      >
        <Button
          variant="contained"
          startIcon={<DescriptionIcon />}
          href={RESUME_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          My Resume
        </Button>
        <Button variant="outlined" startIcon={<EmailIcon />} href={socialMedia.email}>
          Contact me
        </Button>
      </Box>
    </Card>
  );
}
