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
import WebIcon from '@mui/icons-material/Web';
import GitHubIcon from '@mui/icons-material/GitHub';
import { styled } from '@mui/material/styles';

/* Styled Components */
const Layout = styled('div')(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'auto 150px',
  gridTemplateRows: '30px auto',
  [theme.breakpoints.down('sm')]: {
    display: 'block',
  },
}));

const ImageContainer = styled('div')({
  gridArea: '1 / 2 / 3 / 3',
});

const StyledImage = styled('img')(({ theme }) => ({
  maxWidth: 150,
  maxHeight: 150,
  borderRadius: 5,
  cursor: 'pointer',
  [theme.breakpoints.down('sm')]: {
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));

const Title = styled(Typography)({
  fontWeight: 'bold',
  lineHeight: '30px',
});

const Tag = styled(Typography)(({ theme }) => ({
  display: 'inline-block',
  backgroundColor: theme.palette.grey[300],
  fontSize: 11,
  margin: '0 5px 2px 0',
  padding: '3px 5px',
  borderRadius: 4,
}));

/* Dialog Component */
export interface ImageDialogProps {
  open: boolean;
  selectedValue: any;
  onClose: (value: any) => void;
}

function ImageDialog(props: ImageDialogProps) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  return (
    <Dialog
      fullWidth
      maxWidth="md"
      open={open}
      onClose={handleClose}
      aria-labelledby="project-dialog"
      aria-describedby="project-image-preview"
    >
      <DialogTitle>{selectedValue.title}</DialogTitle>
      <DialogContent>
        <img
          src={`./portofolio/${selectedValue.image}`}
          alt={selectedValue.title}
          style={{ width: '100%', height: '100%' }}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
}

/* Main Component */
export default function Portofolio(props: { portoData: any[] }) {
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState<any>('');

  const handleClickOpen = (itemporto: any) => {
    setSelectedValue(itemporto);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      {props.portoData.map((porto, index) => (
        <div key={index}>
          <Layout>
            <div style={{ display: 'flex' }}>
              <div style={{ flex: 1 }}>
                <Title>{porto.title}</Title>
              </div>
              <div>
                {porto.site && (
                  <Tooltip title="Site">
                    <IconButton size="small" target="_blank" href={porto.site}>
                      <WebIcon />
                    </IconButton>
                  </Tooltip>
                )}
                {porto.github && (
                  <Tooltip title="Github">
                    <IconButton
                      style={{ marginRight: 5 }}
                      size="small"
                      target="_blank"
                      href={porto.github}
                    >
                      <GitHubIcon />
                    </IconButton>
                  </Tooltip>
                )}
              </div>
            </div>
            <ImageContainer>
              {porto.image ? (
                <StyledImage
                  src={`./portofolio/${porto.image}`}
                  alt={porto.title}
                  onClick={() => handleClickOpen(porto)}
                />
              ) : (
                <StyledImage src="./NoImage.jpg" alt={porto.title} />
              )}
              <ImageDialog
                selectedValue={selectedValue}
                open={open}
                onClose={handleClose}
              />
            </ImageContainer>
            <div>
              <Typography variant="caption" style={{ color: '#5B6973AA' }}>
                {porto.description}
              </Typography>
            </div>
          </Layout>
          <div>
            {porto.tech.map((tech, idx) => (
              <Tag key={idx} variant="caption">
                {tech}
              </Tag>
            ))}
          </div>
          {index !== props.portoData.length - 1 && (
            <Divider style={{ marginTop: 5, marginBottom: 15 }} />
          )}
        </div>
      ))}
    </div>
  );
}
