import React from 'react';
import Paper from '@material-ui/core/Paper';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ProfilePic from '../Images/Profile-pic.jpeg';
import ReactLogo from '../Images/react.png';
import Javascript from '../Images/javascript.jpg';
import Node from '../Images/node.svg';
import NewNode from '../Images/newnode.png'
import Mongo from '../Images/mongo.png';
import NewMongo from '../Images/newmongo.jpeg'
import Psql from '../Images/psql.png';
import TypeScript from '../Images/typescript.png';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    overflow: 'hidden',
   paddingTop:10,
  },
  paper: {
    padding: theme.spacing(2),
  },
}));
// display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',

export default function Languages() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <div className="container" style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <h2 className="sub-heading">Languages <span className="title">Certifications</span> <Divider variant="middle" /> </h2>
            
        </div>
      <Paper className={classes.paper}>
          <Grid container wrap="nowrap" spacing={2}>
            <Grid item>
            <Avatar alt="Remy Sharp" src={ReactLogo}/>
            </Grid>
            <Grid item xs zeroMinWidth>
              <Typography noWrap>React</Typography>
              <Typography>Class and Hooks</Typography>
            </Grid>
          </Grid>
    
      </Paper>
      <Paper className={classes.paper}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
          <Avatar className={classes.large} alt="Remy Sharp" src={Javascript}/>
          </Grid>
          <Grid item xs>
            <Typography noWrap>Javascript</Typography>
            <Typography>Advanced JS and Languages/Frameworks</Typography>
          </Grid>
        </Grid>
      </Paper>
      <Paper className={classes.paper}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
          <Avatar className={classes.large} alt="Remy Sharp" src={NewNode}/>
          </Grid>
          <Grid item xs>
            <Typography>Node JS</Typography>
            <Typography>Including Express, Socket.io etc</Typography>
          </Grid>
        </Grid>
      </Paper>
      <Paper className={classes.paper}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
          <Avatar className={classes.large} alt="Remy Sharp" src={NewMongo}/>
          </Grid>
          <Grid item xs>
            <Typography>Mongo DB</Typography>
            <Typography>Including Mongoose</Typography>
          </Grid>
        </Grid>
      </Paper>
      <Paper className={classes.paper}>
        <Grid container wrap="nowrap" spacing={2}>
    
          <Grid item>
          <Avatar className={classes.large} alt="Remy Sharp" src={Psql}/>
          </Grid>
          <Grid item xs>
            <Typography>PostgreSQL</Typography>
            <Typography>Fundamentals</Typography>
          </Grid>
        </Grid>
        <Grid container wrap="nowrap" spacing={2}>
    
          <Grid item>
          <Avatar className={classes.large} alt="Remy Sharp" src={TypeScript}/>
          </Grid>
          <Grid item xs>
            <Typography>TypeScript</Typography>
            <Typography>Currently Learning</Typography>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}