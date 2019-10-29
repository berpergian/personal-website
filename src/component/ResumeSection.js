/* Libraries */
import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles, withStyles, Theme, createStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';

/* Pages */
import Skill from './Skill';
import Portofolio from './Portofolio'
import Experience from './Experience';

/* Icons */
import CodeIcon from '@material-ui/icons/Code';
import AssignmentIcon from '@material-ui/icons/Assignment';
import BusinessIcon from '@material-ui/icons/Business';



interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

const StyledTabs = withStyles({
  indicator: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    '& > div': {
      maxWidth: 40,
      width: '100%',
      backgroundColor: '#635ee7',
    },
  },
})((props: StyledTabsProps) => <Tabs variant="scrollable" scrollButtons="on" {...props} TabIndicatorProps={{ children: <div /> }} />);

const StyledTab = withStyles((theme: Theme) =>
  createStyles({
    root: {
      textTransform: 'none',
      color: '#000000',
      fontWeight: theme.typography.fontWeightRegular,
      fontSize: theme.typography.pxToRem(15),
      marginRight: theme.spacing(1),
      '&:focus': {
        opacity: 1,
      },
    },
  }),
)((props: StyledTabProps) => <Tab disableRipple {...props} />);

const useStyles = makeStyles(theme => ({
	paper: {
    	overflow: 'auto',
    	flexDirection: 'column'
	},

}));

function TabPanel(props: TabPanelProps) {
	const { children, value, index, ...other } = props;

	return (
		<Typography
	      component="div"
	      role="tabpanel"
	      hidden={value !== index}
	      id={`resume-tabpanel-${index}`}
	      aria-labelledby={`resume-tab-${index}`}
	      {...other}
	    >
	      <Box p={3}>{children}</Box>
	    </Typography>
	);
}

function a11yProps(index: any) {
  return {
    id: `resume-tab-${index}`,
    'aria-controls': `resume-tabpanel-${index}`,
  };
}

export default function ResumeSection(props) {
	const classes = useStyles();
	const [value, setValue] = React.useState(0);

	const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
		setValue(newValue);
	};

	return (
		<Paper className={classes.paper}>
			<StyledTabs value={value} onChange={handleChange} aria-label="resume tabs">
				{/*<StyledTab icon={<CodeIcon />} label="About Me" {...a11yProps(0)} />*/}
				<StyledTab icon={<CodeIcon />} label="Key Skill" {...a11yProps(0)} />
				<StyledTab icon={<AssignmentIcon />} label="Portofolio" {...a11yProps(1)} />
				<StyledTab icon={<BusinessIcon />} label="Experience" {...a11yProps(2)} />
			</StyledTabs>
			<Divider />
			{/*<TabPanel value={value} index={0}>
			<TabPanel>*/}
			<TabPanel value={value} index={0}>
				<Skill skillData={props.resumeData.skills}/>
			</TabPanel>
			<TabPanel value={value} index={1}>
				<Portofolio portoData={props.resumeData.portofolio}/>
			</TabPanel>
			<TabPanel value={value} index={2}>
				<Experience expData={props.resumeData.experience}/>
			</TabPanel>
		</Paper>
	)
}