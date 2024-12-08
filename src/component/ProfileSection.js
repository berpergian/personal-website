import React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';

/* Icons */
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function ProfileSection({ resumeData }) {
  const socialMedia = resumeData.socialMedia;

  return (
    <Card
      elevation={0}
      sx={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <CardMedia
        component="img"
        image={resumeData.photo}
        title="Profile Picture"
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography
          variant="h6"
          gutterBottom
          component="h2"
          sx={{ fontSize: 18, textAlign: 'center' }}
        >
          {resumeData.name}
        </Typography>
        <Typography
          variant="body2"
          gutterBottom
          color="textSecondary"
          sx={{ textAlign: 'center' }}
        >
          {resumeData.summaryBio}
        </Typography>
        <Divider sx={{ my: 2 }} />
        <div style={{ textAlign: 'center' }}>
          <Tooltip title="Email">
            <IconButton target="_blank" href={socialMedia.email}>
              <EmailIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="GitHub">
            <IconButton target="_blank" href={socialMedia.github}>
              <GitHubIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Twitter">
            <IconButton target="_blank" href={socialMedia.twitter}>
              <TwitterIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="LinkedIn">
            <IconButton target="_blank" href={socialMedia.linkedin}>
              <LinkedInIcon />
            </IconButton>
          </Tooltip>
        </div>
        <Divider sx={{ my: 2 }} />
        <div style={{ textAlign: 'center' }}>
          <Button
            variant="contained"
            sx={{ m: 1, textTransform: 'capitalize' }}
            href="/Resume.pdf"
            target="_blank"
          >
            My Resume
          </Button>
          <Button
            variant="contained"
            sx={{ m: 1, textTransform: 'capitalize' }}
            href={socialMedia.email}
          >
            Hire Me!
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
