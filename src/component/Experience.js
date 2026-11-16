/* Libraries */
import React from 'react';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Link from '@mui/material/Link';

/* Icons */
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

/* Styled Components */
const Layout = styled('div')(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'minmax(0, 1fr) 100px',
  columnGap: theme.spacing(2),
  // Phones keep the logo beside the title, just smaller
  [theme.breakpoints.down('sm')]: {
    gridTemplateColumns: 'minmax(0, 1fr) 56px',
    columnGap: theme.spacing(1.5),
  },
}));

const Logo = styled('img')({
  maxWidth: '100%',
  maxHeight: 100,
  borderRadius: 5,
});

const LogoGrid = styled('div')({
  textAlign: 'right',
  paddingTop: '10px',
});

const DescParaph = styled(ListItemText)({
  fontSize: '10px',
  color: '#5B6973',
});

export default function Experience({ expData }) {
  return (
    <div>
      {expData.map((exp, index) => (
        <div key={index}>
          <Layout>
            <div>
              <Typography style={{ fontWeight: 'bold' }}>
                {exp.position} @{' '}
                <Link
                  style={{ color: '#5B6973AA' }}
                  href={exp.site}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {exp.company}
                </Link>
              </Typography>
              <Typography variant="caption" style={{ color: '#5B6973AA' }}>
                {exp.location}, {exp.start} - {exp.end}
              </Typography>
              {exp.note && (
                <Typography
                  variant="caption"
                  component="div"
                  style={{ color: '#5B6973AA', fontStyle: 'italic' }}
                >
                  {exp.note}
                </Typography>
              )}
            </div>
            <LogoGrid>
              <Logo src={`./company/${exp.logo}`} alt={exp.company} />
            </LogoGrid>
            <div style={{ gridColumn: '1 / 3' }}>
              <List>
                {exp.descJob.map((job, jobIndex) => (
                  <ListItem
                    key={jobIndex}
                    dense
                    style={{ padding: 0 }}
                  >
                    <ListItemIcon
                      style={{
                        minWidth: '30px',
                        alignSelf: 'flex-start',
                        fontSize: 6,
                        margin: '3px 0 0',
                        color: '#5B6973',
                      }}
                    >
                      <ArrowRightIcon />
                    </ListItemIcon>
                    <DescParaph primary={job} />
                  </ListItem>
                ))}
              </List>
            </div>
          </Layout>
          {index !== expData.length - 1 && (
            <Divider style={{ marginTop: 5, marginBottom: 15 }} />
          )}
        </div>
      ))}
    </div>
  );
}
