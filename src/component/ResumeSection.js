import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';

/* Pages */
import Skill from './Skill';
import Portfolio from './Portfolio';
import Experience from './Experience';

/* Icons */
import CodeIcon from '@mui/icons-material/Code';
import AssignmentIcon from '@mui/icons-material/Assignment';
import BusinessIcon from '@mui/icons-material/Business';

/* Styled Components */
const StyledTabs = styled(Tabs)(({ theme }) => ({
  '& .MuiTabs-indicator': {
    backgroundColor: theme.palette.primary.main,
  },
}));

const StyledTab = styled(Tab)(({ theme }) => ({
  textTransform: 'none',
  color: theme.palette.text.primary,
  fontWeight: theme.typography.fontWeightRegular,
  fontSize: theme.typography.pxToRem(15),
  minHeight: 64,
  minWidth: 0,
  [theme.breakpoints.down('sm')]: {
    fontSize: theme.typography.pxToRem(14),
    padding: theme.spacing(1, 0.5),
  },
}));

/* TabPanel Component: the only scrolling area on the page */
function TabPanel({ children, value, index }) {
  if (value !== index) return null;
  return (
    <Box
      role="tabpanel"
      tabIndex={0}
      id={`resume-tabpanel-${index}`}
      aria-labelledby={`resume-tab-${index}`}
      sx={(theme) => ({
        flex: 1,
        minHeight: 0,
        px: { xs: 2, sm: 3 },
        py: { xs: 2, sm: 3 },
        '&:focus-visible': { outline: 'none' },
        // Only scroll inside when the fixed one-screen layout is active
        // (matches App.css). On short or zoomed-in screens the page scrolls
        // instead, and the panel must let the wheel pass through to it.
        '@media (min-height: 560px)': {
          overflowY: 'auto',
          overscrollBehavior: 'contain',
        },
        // Thin scrollbar in the same blue as the tab underline
        scrollbarWidth: 'thin',
        scrollbarColor: `${theme.palette.primary.main} transparent`,
        '&::-webkit-scrollbar': { width: 6 },
        '&::-webkit-scrollbar-track': { background: 'transparent' },
        '&::-webkit-scrollbar-thumb': {
          backgroundColor: theme.palette.primary.main,
          borderRadius: 3,
        },
      })}
    >
      {children}
    </Box>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  value: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
};

/* Accessibility Props */
function a11yProps(index) {
  return {
    id: `resume-tab-${index}`,
    'aria-controls': `resume-tabpanel-${index}`,
  };
}

/* Tab order; the names double as URL hashes, e.g. /#portfolio */
const TAB_HASHES = ['experience', 'skills', 'portfolio'];

function initialTab() {
  const index = TAB_HASHES.indexOf(window.location.hash.replace('#', ''));
  return index === -1 ? 0 : index;
}

/* Main Component */
export default function ResumeSection({ resumeData }) {
  const [value, setValue] = useState(initialTab);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    window.history.replaceState(null, '', `#${TAB_HASHES[newValue]}`);
  };

  return (
    <Paper
      elevation={1}
      sx={{
        borderRadius: 2,
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        minHeight: 0,
        height: '100%',
      }}
    >
      <StyledTabs
        sx={{ flex: 'none' }}
        value={value}
        onChange={handleChange}
        aria-label="resume tabs"
        variant="fullWidth"
      >
        <StyledTab icon={<BusinessIcon />} label="Experience" {...a11yProps(0)} />
        <StyledTab icon={<CodeIcon />} label="Skills" {...a11yProps(1)} />
        <StyledTab icon={<AssignmentIcon />} label="Portfolio" {...a11yProps(2)} />
      </StyledTabs>
      <Divider />
      <TabPanel value={value} index={0}>
        <Experience expData={resumeData.experience} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Skill skillData={resumeData.skills} />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Portfolio portfolioData={resumeData.portfolio} />
      </TabPanel>
    </Paper>
  );
}

ResumeSection.propTypes = {
  resumeData: PropTypes.shape({
    skills: PropTypes.array.isRequired,
    portfolio: PropTypes.array.isRequired,
    experience: PropTypes.array.isRequired,
  }).isRequired,
};
