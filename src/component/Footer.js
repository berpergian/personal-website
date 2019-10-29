import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles(theme => ({
	footer: {
	}
}))

export default function Footer() {
	const classes = useStyles();

	return (
		<footer className={classes.footer}>
			<Container maxWidth="sm">
	          <Typography variant="body2" color="textSecondary" align="center">
	          	Background Photo by
	          	{` `}
	          	<Link color="inherit" href="https://unsplash.com/photos/IocJwyqRv3M">
	          		Louie Martinez
	          	</Link>
	          	{` `}
	          	on Unsplash
	          </Typography>
	        </Container>
	    </footer>
	)
}