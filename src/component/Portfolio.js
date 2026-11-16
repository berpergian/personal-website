/* Libraries */
import React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Tooltip from '@mui/material/Tooltip';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import useMediaQuery from '@mui/material/useMediaQuery';
import { styled, useTheme } from '@mui/material/styles';
import WebIcon from '@mui/icons-material/Web';
import GitHubIcon from '@mui/icons-material/GitHub';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import BrandIcon from './BrandIcon';

/* Styled Components */
const Layout = styled('div', {
  shouldForwardProp: (prop) => prop !== 'hasImage',
})(({ theme, hasImage }) => ({
  display: 'grid',
  gridTemplateColumns: hasImage ? 'minmax(0, 1fr) 200px' : 'minmax(0, 1fr)',
  gridTemplateAreas: hasImage ? '"header image" "desc image"' : '"header" "desc"',
  gridTemplateRows: 'auto 1fr',
  columnGap: theme.spacing(2),
  // Phones: image goes full width between the title and the description
  [theme.breakpoints.down('sm')]: {
    gridTemplateColumns: 'minmax(0, 1fr)',
    gridTemplateAreas: hasImage ? '"header" "image" "desc"' : '"header" "desc"',
    rowGap: theme.spacing(1),
  },
}));

const Thumbnail = styled('button')(({ theme }) => ({
  gridArea: 'image',
  position: 'relative',
  padding: 0,
  border: 0,
  background: 'none',
  cursor: 'pointer',
  alignSelf: 'start',
  borderRadius: 6,
  overflow: 'hidden',
  '& img': {
    display: 'block',
    width: '100%',
    height: 'auto',
    transition: 'transform 200ms ease',
  },
  '&:hover img, &:focus-visible img': {
    transform: 'scale(1.03)',
  },
  '&:focus-visible': {
    outline: `2px solid ${theme.palette.primary.main}`,
    outlineOffset: 2,
  },
}));

const GalleryBadge = styled('span')({
  position: 'absolute',
  right: 6,
  bottom: 6,
  display: 'flex',
  alignItems: 'center',
  gap: 4,
  padding: '2px 6px',
  borderRadius: 4,
  fontSize: 11,
  color: '#fff',
  backgroundColor: 'rgba(0, 0, 0, 0.65)',
});

const Header = styled('div')({
  gridArea: 'header',
  display: 'flex',
  alignItems: 'center',
  minHeight: 34,
});

const Title = styled(Typography)({
  fontWeight: 'bold',
  flex: 1,
});

const Tag = styled(Typography)(({ theme }) => ({
  display: 'inline-block',
  backgroundColor: theme.palette.grey[300],
  fontSize: 11,
  margin: '8px 5px 2px 0',
  padding: '3px 5px',
  borderRadius: 4,
}));

/* Dialog Component: shows the project's screenshots (or its single image) */
function ImageDialog({ project, onClose }) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const images = project?.gallery?.length ? project.gallery : project?.image ? [project.image] : [];

  return (
    <Dialog
      fullWidth
      fullScreen={fullScreen}
      maxWidth="md"
      open={Boolean(project)}
      onClose={onClose}
      aria-labelledby="project-dialog-title"
    >
      <DialogTitle id="project-dialog-title">{project?.title}</DialogTitle>
      <DialogContent dividers sx={{ display: 'grid', gap: 2 }}>
        {images.map((image, index) => (
          <img
            key={image}
            src={`./portfolio/${image}`}
            alt={`${project.title} screenshot ${index + 1}`}
            loading="lazy"
            style={{ width: '100%', height: 'auto', borderRadius: 6 }}
          />
        ))}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
}

/* Main Component */
export default function Portfolio({ portfolioData }) {
  const [selectedProject, setSelectedProject] = React.useState(null);

  return (
    <div>
      {portfolioData.map((project, index) => (
        <div key={project.title}>
          <Layout hasImage={Boolean(project.image)}>
            <Header>
              <Title component="h3">{project.title}</Title>
              {project.site && (
                <Tooltip title="Website">
                  <IconButton
                    size="small"
                    aria-label={`${project.title} website`}
                    target="_blank"
                    rel="noopener noreferrer"
                    href={project.site}
                  >
                    <WebIcon />
                  </IconButton>
                </Tooltip>
              )}
              {project.steam && (
                <Tooltip title="Steam">
                  <IconButton
                    size="small"
                    aria-label={`${project.title} on Steam`}
                    target="_blank"
                    rel="noopener noreferrer"
                    href={project.steam}
                  >
                    <BrandIcon name="Steam" colored={false} />
                  </IconButton>
                </Tooltip>
              )}
              {project.github && (
                <Tooltip title="GitHub">
                  <IconButton
                    size="small"
                    aria-label={`${project.title} on GitHub`}
                    target="_blank"
                    rel="noopener noreferrer"
                    href={project.github}
                  >
                    <GitHubIcon />
                  </IconButton>
                </Tooltip>
              )}
            </Header>
            {project.image && (
              <Thumbnail
                type="button"
                onClick={() => setSelectedProject(project)}
                aria-label={`View ${project.title} screenshots`}
              >
                <img src={`./portfolio/${project.image}`} alt={project.title} />
                {project.gallery?.length > 0 && (
                  <GalleryBadge>
                    <PhotoLibraryIcon sx={{ fontSize: 13 }} />
                    {project.gallery.length}
                  </GalleryBadge>
                )}
              </Thumbnail>
            )}
            <div style={{ gridArea: 'desc' }}>
              {project.role && (
                <Typography variant="body2" sx={{ fontWeight: 500, mb: 0.5 }}>
                  {project.role}
                </Typography>
              )}
              <Typography variant="body2" style={{ color: '#5B6973' }}>
                {project.description}
              </Typography>
            </div>
          </Layout>
          <div>
            {project.tech.map((tech) => (
              <Tag key={tech} variant="caption">
                {tech}
              </Tag>
            ))}
          </div>
          {index !== portfolioData.length - 1 && <Divider sx={{ mt: 1.5, mb: 2 }} />}
        </div>
      ))}
      <ImageDialog project={selectedProject} onClose={() => setSelectedProject(null)} />
    </div>
  );
}
