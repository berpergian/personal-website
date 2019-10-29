/* Libraries */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles(theme => ({
	headerColumn: {
		fontWeight: "bold",
		lineHeight: '60px'
	},
	layout: {
		display: 'grid',
	    '@media only screen and (max-width: 400px)': {
	      display: 'block'
	    }
	},
	logo: {
		width: '10%',
		padding: theme.spacing(0.5),
	},
	tag: {
		display: 'inline-block',
		backgroundColor: '#e0e0e0',
		fontSize: 11,
		margin: '0 5px 2px 0',
		padding: '3px 5px',
		borderRadius: 4,
	},
	skillPos: {
		gridColumnStart: 2, 
		gridColumnEnd: 3, 
		textAlign: "right"
	}
}));

export default function Skill(props) {
	const classes = useStyles();

	return (
		<div>
			<Typography variant="body2" align="justify" gutterBottom>
				Before I graduate from my college, I worked at a software house Ciptadra to develop high-quality front-end website.
				Currently, I'm looking for a job which can develop my expertise, especially in the front-end field.
			</Typography>
			<Typography variant="body2" align="justify" gutterBottom>
				Here are a few technologies I have both worked, learned, and know:
			</Typography>
			<div className={classes.layout}>
				<div className={classes.headerColumn}>
					Proficient
				</div>
				<div className={classes.skillPos}>
					{props.skillData.profSkill.map(skill => (
						<Tooltip title={skill.name}>
							<img src={"./tech/" + skill.logo} alt={skill.name} className={classes.logo} />
						</Tooltip>
					))}
				</div>
			</div>
			<Divider style={{ marginTop: 5, marginBottom: 5 }} />
			<div className={classes.layout}>
				<div className={classes.headerColumn}>
					Learned
				</div>
				<div className={classes.skillPos}>
					{props.skillData.learnSkill.map(skill => (
						<Tooltip title={skill.name}>
							<img src={"./tech/" + skill.logo} alt={skill.name} className={classes.logo} />
						</Tooltip>
					))}
				</div>
			</div>
			<Divider style={{ marginTop: 5, marginBottom: 5 }} />
			<div className={classes.layout}>
				<div className={classes.headerColumn}>
					Know with
				</div>
				<div className={classes.skillPos}>
					{props.skillData.knowSkill.map(skill => (
						<Tooltip title={skill.name}>
							<img src={"./tech/" + skill.logo} alt={skill.name} className={classes.logo} />
						</Tooltip>
					))}
				</div>
			</div>
			<Typography style={{ paddingTop: "10px" }}>Other tech interests:</Typography>
			<div>
				{props.skillData.others.map(skill => <Typography variant="caption" className={classes.tag}>{skill}</Typography>)}
			</div>
		</div>
	)
}