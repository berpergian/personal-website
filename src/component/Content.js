import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import ProfileSection from './ProfileSection';
import ResumeSection from './ResumeSection';
const resumeData = require('../resume_data.json');

const useStyles = makeStyles(theme => ({
  cardGrid: {
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(4),
  }
}));

export default function Content() {
  const classes = useStyles();

  return (
    <Container className={classes.cardGrid} maxWidth="md">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4}>
          <ProfileSection resumeData={resumeData}/>
        </Grid>
        <Grid item xs={12} sm={6} md={8}>
          <ResumeSection resumeData={resumeData}/>
        </Grid>
      </Grid>
    </Container>
  );
}