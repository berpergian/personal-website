/* Libraries */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem, { ListItemProps } from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Link from '@material-ui/core/Link';

/* Icons */
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

const useStyles = makeStyles(theme => ({
	layout: {
		display: 'grid',
		gridTemplateColumns: "auto 100px",
	    '@media only screen and (max-width: 400px)': {
	      display: 'block'
	    }
	},
	logo: {
	    maxWidth: 100, 
	    maxHeight: 100, 
	    borderRadius: 5,
	    '@media only screen and (max-width: 400px)': {
	      maxWidth:'80%',      
	      maxHeight:'80%',
	    },
	},
	logoGrid: {
		textAlign: "right", 
		paddingTop: "10px"
	},
	descParaph: {
		fontSize: "10", 
		color: '#5B6973'
	}
}));

export default function Experience(props) {
	const classes = useStyles();
	return (
		<div>
			{props.expData.map((exp, index) => (
				<div>
					<div className={classes.layout}>
						<div>
							<Typography style={{ fontWeight: "bold" }}>
								{exp.position} @ 
								{` `}
					          	<Link style={{ color: '#5B6973AA' }} href={exp.site}>
					          		{exp.company}
					          	</Link>
							</Typography>
							<Typography variant="caption" style={{ color: '#5B6973AA' }}>{exp.location}, {exp.start}-{exp.end}</Typography>
						</div>
						<div className={classes.logoGrid}>
							<img src={"./company/" + exp.logo} alt={exp.name} className={classes.logo} />
						</div>
						<div style={{ gridColumnStart: 1, gridColumnEnd: 3}}>
							<List>
								{exp.descJob.map(job => (
									<ListItem dense style={{ padding: 0 }}>
										<ListItemIcon style={{ minWidth: "30px", alignSelf: 'flex-start', fontSize: 6, margin: '3px 0 0', color: '#5B6973' }}><ArrowRightIcon/></ListItemIcon>
										<ListItemText className={classes.descParaph} primary={job}/>
									</ListItem>
								))}
							</List>
						</div>
					</div>
					{index !== (props.expData.length - 1) &&
						<Divider style={{ marginTop: 5, marginBottom: 15 }} />
					}
				</div>
			))}
		</div>
	)
}