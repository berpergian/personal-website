/* Libraries */
import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Tooltip from '@material-ui/core/Tooltip';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

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

export interface ImageDialogProps {
	open: boolean;
	selectedValue: object;
	onClose: (value: string) => void;
}

function ImageDialog(props: ImageDialogProps) {
	const { onClose, selectedValue, open } = props;

	const handleClose = () => {
		onClose(selectedValue);
	};

	return (
		<Dialog
			fullWidth="true"
			maxWidth="md"
			open={open}
			onClose={handleClose}
			aria-labelledby="project-dialog"
			aria-describedby="project-image-preview"
		>
			<DialogTitle>{selectedValue.title}</DialogTitle>
			<DialogContent>
				<img src={"./portofolio/" + selectedValue.image} alt={selectedValue.title} style={{ width: '100%', height: '100%' }} />
			</DialogContent>
			<DialogActions>
				<Button onClick={handleClose}>Close</Button>
			</DialogActions>
		</Dialog>
	)
}

export default function Portofolio(props) {
	const classes = useStyles();
	const [open, setOpen] = React.useState(false);
	const [selectedValue, setSelectedValue] = React.useState("");
	
	const handleClickOpen = (itemporto: object) => {
		setSelectedValue(itemporto);
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<div>
			<Typography variant="h6" align="justify" gutterBottom>
				Some Things I Have Built
			</Typography>
			{props.portoData.map((porto, index) => (
				<div>
					<div className={classes.layout}>
						<div style={{display:"flex"}}>
							<div style={{ flex: 1}}>
								<Typography className={classes.titleProject}>{porto.title}</Typography>
							</div>
							<div>
								{porto.site &&
									<Tooltip title="Site">
										<IconButton size="small" target="_blank" href={porto.site}>
											<WebIcon />
										</IconButton>
									</Tooltip>
								}
								{porto.github &&
									<Tooltip title="Github">
										<IconButton style={{ marginRight: 5 }} size="small" target="_blank" href={porto.github}>
											<GitHubIcon />
										</IconButton>
									</Tooltip>
								}
							</div>
						</div>
						<div className={classes.imgProject}>
							{porto.image ?
								(<img src={"./portofolio/" + porto.image} alt={porto.title} className={classes.image} onClick={() => handleClickOpen(porto)} />) 
								:
								(<img src={"./NoImage.jpg"} alt={porto.title} className={classes.image} />)
							}
							<ImageDialog selectedValue={selectedValue} open={open} onClose={handleClose} />
						</div>
						<div>
							<Typography variant="caption" style={{ color: '#5B6973AA' }}>{porto.description}</Typography>
						</div>
					</div>
					<div>
						{porto.tech.map(tech => <Typography variant="caption" className={classes.tag}>{tech}</Typography>)}
					</div>
					{index !== (props.portoData.length - 1) &&
						<Divider style={{ marginTop: 5, marginBottom: 15 }} />
					}
				</div>
			))}
		</div>
	)
}