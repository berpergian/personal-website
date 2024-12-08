import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';

/* Pages */
import Skill from './Skill';
import Portofolio from './Portofolio';
import Experience from './Experience';

/* Icons */
import CodeIcon from '@mui/icons-material/Code';
import AssignmentIcon from '@mui/icons-material/Assignment';
import BusinessIcon from '@mui/icons-material/Business';

/* Styled Components */
const StyledTabs = styled(Tabs)(({ theme }) => ({
  '& .MuiTabs-indicator': {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    '& > div': {
      maxWidth: 40,
      width: '100%',
      backgroundColor: theme.palette.primary.main,
    },
  },
}));

const StyledTab = styled(Tab)(({ theme }) => ({
  textTransform: 'none',
  color: theme.palette.text.primary,
  fontWeight: theme.typography.fontWeightRegular,
  fontSize: theme.typography.pxToRem(15),
  flexGrow: 1, // Ensure tabs grow equally
  maxWidth: 'none', // Allow flexibility
}));


/* TabPanel Component */
function TabPanel({ children, value, index, ...other }) {
  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`resume-tabpanel-${index}`}
      aria-labelledby={`resume-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </Typography>
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

/* Main Component */
export default function ResumeSection({ resumeData }) {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper
      sx={{
        overflow: 'auto',
        flexDirection: 'column',
        height: '550px',
        display: 'flex',
      }}
      elevation={1}
    >
      <StyledTabs
        value={value}
        onChange={handleChange}
        aria-label="resume tabs"
        variant="scrollable"
        scrollButtons="false"
      >
        <StyledTab icon={<CodeIcon />} label="Key Skill" {...a11yProps(0)} />
        <StyledTab icon={<AssignmentIcon />} label="Portfolio" {...a11yProps(1)} />
        <StyledTab icon={<BusinessIcon />} label="Experience" {...a11yProps(2)} />
      </StyledTabs>
      <Divider />
      <TabPanel value={value} index={0}>
        <Skill skillData={resumeData.skills} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Portofolio portoData={resumeData.portofolio} />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Experience expData={resumeData.experience} />
      </TabPanel>
    </Paper>
  );
}

ResumeSection.propTypes = {
  resumeData: PropTypes.shape({
    skills: PropTypes.array.isRequired,
    portofolio: PropTypes.array.isRequired,
    experience: PropTypes.array.isRequired,
  }).isRequired,
};
