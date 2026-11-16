import React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';

/* Icons */
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import DescriptionIcon from '@mui/icons-material/Description';

const RESUME_URL = '/Resume%20-%20Muhammad%20Ganjar%20Imanudin.pdf';

export default function ProfileSection({ resumeData }) {
  const socialMedia = resumeData.socialMedia;

  const links = [
    { title: 'Email', href: socialMedia.email, icon: <EmailIcon />, external: false },
    { title: 'GitHub', href: socialMedia.github, icon: <GitHubIcon />, external: true },
    { title: 'LinkedIn', href: socialMedia.linkedin, icon: <LinkedInIcon />, external: true },
    { title: 'X', href: socialMedia.x, icon: <XIcon />, external: true },
  ];

  return (
    <Card elevation={1} sx={{ borderRadius: 2 }}>
      {/* Wide screens: full-width photo. One-column layouts: round avatar,
          so the photo doesn't fill a whole phone or tablet screen. */}
      <Box
        component="img"
        src={resumeData.photo}
        alt={resumeData.name}
        sx={{
          display: 'block',
          objectFit: 'cover',
          width: { xs: 144, sm: 168, md: '100%' },
          height: { xs: 144, sm: 168, md: 'auto' },
          aspectRatio: { md: '1 / 1' },
          borderRadius: { xs: '50%', md: 0 },
          mx: 'auto',
          mt: { xs: 3, md: 0 },
          objectPosition: 'center 20%',
        }}
      />
      <CardContent sx={{ textAlign: 'center', px: 3 }}>
        <Typography variant="h5" component="h1" sx={{ fontWeight: 600, lineHeight: 1.25 }}>
          {resumeData.name}
        </Typography>
        <Typography
          variant="subtitle1"
          component="p"
          color="primary"
          sx={{ fontWeight: 600, mt: 0.5 }}
        >
          {resumeData.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          {resumeData.headline}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ maxWidth: 420, mx: 'auto' }}>
          {resumeData.summaryBio}
        </Typography>
        <Divider sx={{ my: 2 }} />
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 0.5 }}>
          {links.map((link) => (
            <Tooltip key={link.title} title={link.title}>
              <IconButton
                href={link.href}
                aria-label={link.title}
                {...(link.external && { target: '_blank', rel: 'noopener noreferrer' })}
              >
                {link.icon}
              </IconButton>
            </Tooltip>
          ))}
        </Box>
        <Divider sx={{ my: 2 }} />
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: 1.5,
          }}
        >
          <Button
            variant="contained"
            startIcon={<DescriptionIcon />}
            sx={{ textTransform: 'none' }}
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            My Resume
          </Button>
          <Button
            variant="outlined"
            startIcon={<EmailIcon />}
            sx={{ textTransform: 'none' }}
            href={socialMedia.email}
          >
            Contact me
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}
