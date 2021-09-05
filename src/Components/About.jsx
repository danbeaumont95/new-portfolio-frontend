import React from 'react';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import HotelIcon from '@material-ui/icons/Hotel';
import RepeatIcon from '@material-ui/icons/Repeat';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import SchoolIcon from '@material-ui/icons/School';
import WorkIcon from '@material-ui/icons/Work';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Typography, Container } from '@material-ui/core';
import background from '../Images/background.png';
import NewBackground from '../Images/new-background.jpeg';

const useStyles = makeStyles((theme) => ({
  all: {
    backgroundImage: 'url('+ NewBackground+')',
    backgroundPosition: 'center', 
      backgroundSize: 'cover', 
      backgroundRepeat: 'no-repeat',
      // borderRadius: 8,
},
timeline: {
  marginTop: theme.spacing(-2)
},
      paper: {
        padding: '6px 16px',
      },
      secondaryTail: {
        backgroundColor: theme.palette.secondary.main,
      },
      heroContent: {
        //   backgroundColor: theme.palette.background.paper,
          padding: theme.spacing(8, 0, 6),
        },
  }));

const About = () => {
    const classes = useStyles();
    return (
        <div className={classes.all}>
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" style={{color: '#fff7f1'}} gutterBottom>
              About Me
            </Typography>
            <Typography variant="h5" align="center" style={{color: '#fff7f1'}} paragraph>
              Below is a timeline of my career starting from University
            </Typography>
          </Container>
        </div>
        <Timeline align="alternate" className={classes.timeline}>
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" style={{color: '#fff7f1'}}>
            September 2015
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot>
            <SchoolIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
              Started University
            </Typography>
            <Typography>Enrolled on Business Management BA Hons at University of Huddersfield</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" style={{color: '#fff7f1'}}>
            August 2018
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary">
            <SchoolIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
            Graduated Uni with a 2:1
            </Typography>
            <Typography>Started looking for my first full-time job</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" style={{color: '#fff7f1'}}>
            October 2018
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary">
            <WorkIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
              Got my first full time job
            </Typography>
            <Typography>Wasn't sure what I wanted to do with my career after Uni so got a job at a solicitors company in Leeds</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
      <TimelineOppositeContent>
          <Typography variant="body2" style={{color: '#fff7f1'}}>
            June 2019
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary" variant="outlined">
            <LaptopMacIcon />
          </TimelineDot>
          <TimelineConnector className={classes.secondaryTail} />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
              Wrote my first line of code!
            </Typography>
            <Typography>I realised a job in the legal sector wasn't for me so looking into other career paths and stumbled onto a website called codecademy and started learning HTML/CSS after my work hours</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" style={{color: '#fff7f1'}}>
            July 2019 - July 2020
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary">
            <LaptopMacIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
              Created many mini projects using HTML/CSS and basic JavaScript
            </Typography>
            <Typography>Carried on learning HTML and CSS, and then took some online courses to learn the basics of JavaScript</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" style={{color: '#fff7f1'}}>
            November 2020
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary">
            <LaptopMacIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
              Completed tech test and enrolled on NorthCoders coding bootcamp
            </Typography>
            <Typography>Invested into myself and my career and quit my full time job to invest all my time into NorthCoders</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" style={{color: '#fff7f1'}}>
            November 2020 - March 2021
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary">
            <SchoolIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
              Completed NorthCoders
            </Typography>
            <Typography>Learned JavaScript, Node, React and PostGreSQL, and completed many full stack projects, some of these are available to view on My Projects page</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" style={{color: '#fff7f1'}}>
            April 2021
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary">
            <LaptopMacIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
              Landed my first Dev role and was employed as a Junior Node Developer
            </Typography>
            <Typography>All the hard work paid off, and landed my first dev job</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" style={{color: '#fff7f1'}}>
            April 2021 - August 2021
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary">
            <LaptopMacIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
              Worked full time at Templar Payments
            </Typography>
            <Typography>Had to learn MongoDB/Mongoose on the job and was writing production level code on my first day. Some day-to-day tasks included creating and writing to our API, doing a lot of data manipulation to get company statistics from the information on our database, and using React to do front end work when required</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" style={{color: '#fff7f1'}}>
            August 2021
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary">
            <LaptopMacIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
              Templar Payments went into liquidation
            </Typography>
            <Typography>Unfortunately my first dev job ended prematurely, however during this time I still coded 8-10 hours a day and improved my skills and kept on learning, and I am now fully efficient as a MERN Developer</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>

      {/* <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="secondary">
            <RepeatIcon />
          </TimelineDot>
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
              Repeat
            </Typography>
            <Typography>Because this is the life you love!</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem> */}
    </Timeline>
        </div>
    )
};

export default About;