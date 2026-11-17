/* Libraries */
import React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Collapse from '@mui/material/Collapse';
import Divider from '@mui/material/Divider';
import Link from '@mui/material/Link';
import Tooltip from '@mui/material/Tooltip';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import useMediaQuery from '@mui/material/useMediaQuery';
import { styled, useTheme } from '@mui/material/styles';

/* Icons */
import WebIcon from '@mui/icons-material/Web';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import BrandIcon from './BrandIcon';

/* Placeholder for projects without a screenshot */
const NO_IMAGE = './NoImage.jpg';

/* Styled Components */
const Layout = styled('div')(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'minmax(0, 1fr) 200px',
  gridTemplateAreas: '"header media" "body media"',
  gridTemplateRows: 'auto 1fr',
  columnGap: theme.spacing(2.5),
  // Phones: media goes full width between the title and the text
  [theme.breakpoints.down('sm')]: {
    gridTemplateColumns: 'minmax(0, 1fr)',
    gridTemplateAreas: '"header" "media" "body"',
    rowGap: theme.spacing(1),
  },
}));

const Media = styled('div')({
  gridArea: 'media',
  alignSelf: 'start',
  position: 'relative',
  width: '100%',
  aspectRatio: '16 / 9',
  borderRadius: 6,
  overflow: 'hidden',
  // faint edge so light images (e.g. a white logo card) don't blend into the panel
  '&::after': {
    content: '""',
    position: 'absolute',
    inset: 0,
    borderRadius: 'inherit',
    boxShadow: 'inset 0 0 0 1px rgba(0, 0, 0, 0.08)',
    pointerEvents: 'none',
  },
});

const ThumbnailButton = styled('button')(({ theme }) => ({
  display: 'block',
  width: '100%',
  height: '100%',
  padding: 0,
  border: 0,
  cursor: 'pointer',
  '& img': {
    display: 'block',
    width: '100%',
    height: '100%',
    transition: 'transform 200ms ease',
  },
  '&:hover img, &:focus-visible img': { transform: 'scale(1.04)' },
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
  pointerEvents: 'none',
});

const Header = styled('div')({
  gridArea: 'header',
  display: 'flex',
  alignItems: 'center',
  minHeight: 34,
});

const Tag = styled(Typography)(({ theme }) => ({
  display: 'inline-block',
  backgroundColor: theme.palette.grey[200],
  color: theme.palette.text.secondary,
  fontSize: 11,
  margin: '0 5px 5px 0',
  padding: '2px 6px',
  borderRadius: 4,
}));

/* Dialog: the project's screenshots, each scaled to fit the screen */
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
      <DialogContent dividers sx={{ display: 'grid', gap: 2, justifyItems: 'center' }}>
        {images.map((image, index) => (
          <img
            key={image}
            src={`./portfolio/${image}`}
            alt={`${project.title} screenshot ${index + 1}`}
            loading="lazy"
            style={{ maxWidth: '100%', maxHeight: '75vh', height: 'auto', borderRadius: 6 }}
          />
        ))}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
}

function ProjectLinks({ project }) {
  const links = [
    project.site && { title: 'Website', href: project.site, icon: <WebIcon /> },
    project.steam && { title: 'Steam', href: project.steam, icon: <BrandIcon name="Steam" colored={false} /> },
    project.video && { title: 'Video', href: project.video, icon: <YouTubeIcon /> },
    project.github && { title: 'GitHub', href: project.github, icon: <GitHubIcon /> },
  ].filter(Boolean);

  return links.map((link) => (
    <Tooltip key={link.title} title={link.title}>
      <IconButton
        size="small"
        aria-label={`${project.title}: ${link.title}`}
        target="_blank"
        rel="noopener noreferrer"
        href={link.href}
      >
        {link.icon}
      </IconButton>
    </Tooltip>
  ));
}

function Project({ project, onOpenGallery }) {
  const [expanded, setExpanded] = React.useState(false);
  const hasDetails = project.details?.length > 0;
  const detailsId = `details-${project.title.replace(/\W+/g, '-').toLowerCase()}`;

  const toggle = (
    <Link
      component="button"
      type="button"
      variant="body2"
      underline="hover"
      onClick={() => setExpanded((value) => !value)}
      aria-expanded={expanded}
      aria-controls={detailsId}
      sx={{ fontWeight: 600, verticalAlign: 'baseline', whiteSpace: 'nowrap' }}
    >
      {expanded ? 'Show less' : 'Read more'}
    </Link>
  );

  return (
    <Layout>
      <Header>
        <Typography component="h3" sx={{ fontWeight: 'bold', flex: 1 }}>
          {project.title}
        </Typography>
        <ProjectLinks project={project} />
      </Header>

      <Media>
        {project.image ? (
          <ThumbnailButton
            type="button"
            onClick={() => onOpenGallery(project)}
            aria-label={`View ${project.title} images`}
            style={{ background: project.imageBackground || 'transparent' }}
          >
            <img
              src={`./portfolio/${project.image}`}
              alt={project.title}
              style={{
                objectFit: project.imageFit || 'cover',
                padding: project.imagePadding,
                boxSizing: 'border-box',
              }}
            />
          </ThumbnailButton>
        ) : (
          <img
            src={NO_IMAGE}
            alt=""
            style={{
              display: 'block',
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        )}
        {project.gallery?.length > 0 && (
          <GalleryBadge>
            <PhotoLibraryIcon sx={{ fontSize: 13 }} />
            {project.gallery.length}
          </GalleryBadge>
        )}
      </Media>

      <div style={{ gridArea: 'body' }}>
        {project.role && (
          <Typography variant="body2" sx={{ fontWeight: 500, mb: 0.5 }}>
            {project.role}
          </Typography>
        )}
        <Typography variant="body2" sx={{ color: '#5B6973', lineHeight: 1.6 }}>
          {project.summary}
          {hasDetails && !expanded && <> {toggle}</>}
        </Typography>
        {hasDetails && (
          <Collapse in={expanded} id={detailsId}>
            <Typography
              component="ul"
              variant="body2"
              sx={{ color: '#5B6973', lineHeight: 1.6, pl: 2.5, my: 1 }}
            >
              {project.details.map((detail) => (
                <li key={detail}>{detail}</li>
              ))}
            </Typography>
            {toggle}
          </Collapse>
        )}
        <div style={{ marginTop: 10 }}>
          {project.tech.map((tech) => (
            <Tag key={tech} variant="caption">
              {tech}
            </Tag>
          ))}
        </div>
      </div>
    </Layout>
  );
}

/* Main Component */
export default function Portfolio({ portfolioData }) {
  const [galleryProject, setGalleryProject] = React.useState(null);

  return (
    <div>
      {portfolioData.map((project, index) => (
        <React.Fragment key={project.title}>
          <Project project={project} onOpenGallery={setGalleryProject} />
          {index !== portfolioData.length - 1 && <Divider sx={{ my: 2 }} />}
        </React.Fragment>
      ))}
      <ImageDialog project={galleryProject} onClose={() => setGalleryProject(null)} />
    </div>
  );
}
