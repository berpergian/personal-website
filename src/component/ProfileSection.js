import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Tooltip from '@material-ui/core/Tooltip';

/* Icons */
import IconButton from '@material-ui/core/IconButton';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const useStyles = makeStyles(theme => ({
	button: {
		margin: theme.spacing(1),
	},
	card: {
		display: 'flex',
		flexDirection: 'column'
	},
	cardMedia: {
		
	},
	cardContent: {
		flexGrow: 1,
	},
	label: {
		textTransform: 'capitalize',
	},
	centerPosition: {
		textAlign: "center"
	}
}));

export default function ProfileSection(props) {
	const classes = useStyles();
	const socialMedia = props.resumeData.socialMedia;

	return (
		<Card className={classes.card} elevation={0}>
			<CardMedia className={classes.cardMedia} component="img" image={props.resumeData.photo} title="Profile Picture" />
		    <CardContent classes={classes.cardContent}>
		      <Typography style={{fontSize:18,}} variant="h6" gutterBottom component="h2">{props.resumeData.name}</Typography>
		      <Typography variant="body2" gutterBottom color="textSecondary" component="p">
		        {props.resumeData.summaryBio}
		      </Typography>
		      <Divider/>
		      <div className={classes.centerPosition}>
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
		      <Divider/>
		      <div className={classes.centerPosition}>
			      <Button variant="contained" classes={{root:classes.button,label: classes.label,}} href="/Resume.pdf" target="_blank">
			      		My Resume
			      </Button>
			      <Button variant="contained" classes={{root:classes.button,label: classes.label,}} href={socialMedia.email}>
			      		Hire Me!
			      </Button>
			  </div>
		    </CardContent>
		</Card>
	)
}