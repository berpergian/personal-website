import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles(theme => ({
	footer: {
	    marginTop: 'auto',
	    backgroundColor: 'white',
	    opacity: 0.6,
    	transition: 'all ease 400ms',
    	'&:hover': {
    		opacity: 1,
    	},
    	'@media only screen and (max-width: 768px)': {
    		opacity: 1
    	}
	}
}))

export default function Footer() {
	const classes = useStyles();

	return (
		<footer className={classes.footer}>
			<Container maxWidth="sm">
				<Typography variant="body2" color="textSecondary" align="center">
					© Muhammad Ganjar Imanudin 2019 
				</Typography>
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