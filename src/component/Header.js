import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1,
    },
    toolbar: {
    	borderBottom: `1px solid ${theme.palette.divider}`,
    },
}));

export default function Header() {
	const classes = useStyles();
	const header = "/Header.png";

	return(
		<div className={classes.root}>
			<AppBar style={{ background: {header}, boxShadow: 'none'}}>
				<Typography color="textPrimary">Muhammad Ganjar Imanudin</Typography>
				<Typography color="textPrimary">Personal Website</Typography>
			</AppBar>
		</div>
	);
}