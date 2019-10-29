/* Libraries */
import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Tooltip from '@material-ui/core/Tooltip';

/* Icons */
import IconButton from '@material-ui/core/IconButton';
import WebIcon from '@material-ui/icons/Web';
import GitHubIcon from '@material-ui/icons/GitHub';

const useStyles = makeStyles(theme => ({
	layout: {
		display: 'grid',
		gridTemplateColumns: "auto 150px",
		gridTemplateRows: "30px auto",
	    '@media only screen and (max-width: 400px)': {
	      display: 'block'
	    }
	},
	imgProject: {
		gridArea:"1 / 2 / 3 / 3"
	},
	image: {
		maxWidth: 150,
	    maxHeight: 150,
	    borderRadius: 5,
	    cursor: 'pointer',
	    '@media only screen and (max-width: 400px)': {
	      maxWidth: '100%',
	      maxHeight: '100%',
	    },
	},
	sourceProject: {
		textAlign: "right"
	},
	titleProject: {
		fontWeight: "bold",
		lineHeight: '30px'
	},
	tag: {
		display: 'inline-block',
		backgroundColor: '#e0e0e0',
		fontSize: 11,
		margin: '0 5px 2px 0',
		padding: '3px 5px',
		borderRadius: 4,
	},
}))

export default function Portofolio(props) {
	const classes = useStyles();

	return (
		<div>
			<Typography variant="h6" align="justify" gutterBottom>
				Some Things I Have Built
			</Typography>
			{props.portoData.map((exp, index) => (
				<div>
					<div className={classes.layout}>
						<div style={{display:"flex"}}>
							<div style={{ flex: 1}}>
								<Typography className={classes.titleProject}>{exp.title}</Typography>
							</div>
							<div>
								{exp.site &&
									<Tooltip title="Site">
										<IconButton size="small" target="_blank" href={exp.site}>
											<WebIcon />
										</IconButton>
									</Tooltip>
								}
								{exp.github &&
									<Tooltip title="Github">
										<IconButton style={{ marginRight: 5 }} size="small" target="_blank" href={exp.github}>
											<GitHubIcon />
										</IconButton>
									</Tooltip>
								}
							</div>
						</div>
						<div className={classes.imgProject}>
							{exp.image ?
								(<img src={"./portofolio/" + exp.image} alt={exp.title} className={classes.image} />) 
								:
								(<img src={"./NoImage.jpg"} alt={exp.title} className={classes.image} />)
							}
						</div>
						<div>
							<Typography variant="caption" style={{ color: '#5B6973AA' }}>{exp.description}</Typography>
						</div>
					</div>
					<div>
						{exp.tech.map(tech => <Typography variant="caption" className={classes.tag}>{tech}</Typography>)}
					</div>
					{index !== (props.portoData.length - 1) &&
						<Divider style={{ marginTop: 5, marginBottom: 15 }} />
					}
				</div>
			))}
		</div>
	)
}