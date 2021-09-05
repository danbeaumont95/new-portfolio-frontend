  
import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import FirstPortfolio from '../Images/first-portfolio.png';
import NCNews from '../Images/nc-news.png';
import PitchPerfect from '../Images/pitch-perfect.PNG';
import Templar from '../Images/Templar.png';
import Secret from '../Images/secret.jpeg';
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
    icon: {
      marginRight: theme.spacing(2),
    },
    heroContent: {
    //   backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
      marginTop: theme.spacing(4),
    },
    cardGrid: {
      paddingTop: theme.spacing(3),
      paddingBottom: theme.spacing(8),
    },
    card: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
    cardMedia: {
      paddingTop: '59.25%', // 16:9
    },
    cardContent: {
      flexGrow: 1,
    },
    footer: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(6),
    },
  }));

  const cards = [
    {
        name: 'Original Portfolio site',
        description: 'This was my first portfolio site I made during my coding bootcamp',
        img: FirstPortfolio,
        liveSite: "https://danbeaumont95.github.io/hosted-portfolio-site/",
        source: "https://github.com/danbeaumont95/hosted-portfolio-site"
    }, 
    {
        name: 'Pitch Perfect',
        description: 'This was my final project at my coding bootcamp. We worked in a group of 5, each of us taking turns working on the front end, back end and writing the tests',
        img: PitchPerfect,
        liveSite: "https://pitchperfect.netlify.app/",
        source: "https://github.com/danbeaumont95/Pitch-Perfect-Backend"
    }, 
    {
      name: 'Templar Payments',
      description: 'This was the web app I worked on at my first role as a junior developer',
      img: Templar,
      liveSite: "https://app.templarpayments.com/",
      source: ""
    },
    {
        name: 'NC News',
        description: 'This as a full stack app made using React, Node and PostgreSQL and was a mimmick of reddit',
        img: NCNews,
        liveSite: "",
        source: "https://github.com/danbeaumont95/nc-news"
    },
    
    {
      name: 'Coming soon',
      description: 'This is an upcoming app',
      img: Secret,
      liveSite: "",
      source: ""
    },
    {
      name: 'Coming soon',
      description: 'This is an upcoming app',
      img: Secret,
      liveSite: "",
      source: ""
    },
];

const Projects = () => {
    const classes = useStyles();
    return (
        <div className={classes.all}>
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" style={{color: '#fff7f1'}} gutterBottom>
              My Projects
            </Typography>
            <Typography variant="h5" align="center" style={{color: '#fff7f1'}} paragraph>
              Below is a small collection of the projects I have made in the 2 years I have been coding
            </Typography>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={card.img}
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.name}
                    </Typography>
                    <Typography>
                      {card.description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary" href={card.liveSite}>
                      View Live Site
                    </Button>
                    <Button size="small" color="primary" href={card.source}>
                      Source Code
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
        </div>
    )
}

export default Projects;