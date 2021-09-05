
import React, {useState, useEffect} from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import { Button } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import InstagramIcon from '@material-ui/icons/Instagram';
// import AboutComponent from '../about/about';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
// import CallIcon from '@material-ui/icons/Call';
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import ProfilePic from '../Images/Profile-pic.jpeg';
import { Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    // flexGrow: 1
    textDecoration: 'none'
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    
  },
  large: {
    width: theme.spacing(12),
    height: theme.spacing(12),
  },

  smallIcon: {
    width: theme.spacing(5),
    height: theme.spacing(5),
  },

  drawerPaper: {
    width: drawerWidth,
    backgroundColor:'#f2f3f7',
  },

  listItem:{
     justifyContent:'center',
     color:'black',
     textAlign:'center',
     textDecoration: 'none'
  },

  listItemText:{
    fontSize:'0.9em',
    textDecoration: 'none'
  },

  listItemIcon:{
   minWidth:'30px',
   textDecoration: 'none'
  },
  

  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
   
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  links: {
    flex: 1,
    color: '#ffffff',
    textDecoration: 'none'
  }
}));

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}


export default function SideBar() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  
  
  const handleDrawerOpen = () => {
    setOpen(true);
  };

 

  const handleDrawerClose = () => {
    setOpen(false);
  };

 console.log(window.localStorage, 'local storageeeeeeeeeee');

 const logout = () => {
   console.log('logging out');
  localStorage.clear();
  window.location = '/'
}

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
        style={{background : '#2E3B55'}}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          
        <Typography className={classes.links} >
          <Link to={"/"} className={classes.links}>
          Home
          </Link>
          
        </Typography>
        <Typography className={classes.links}>
        <Link to={"/projects"} className={classes.links}>
          My Projects
        </Link>
        </Typography>
        <Typography className={classes.links}>
          <Link to={"/about"} className={classes.links}>
          About Me
          </Link>
        </Typography>
        {window.localStorage.userToken ? (
          <Button color="inherit" onClick={logout} style={{color: '#ffffff'}}>Logout</Button>
        ) : <Link to={"/login"}>
        <Button color="inherit" style={{color: '#ffffff'}}>Login/Register</Button>
        </Link>}
        
        </Toolbar>
      </AppBar>
      
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <List>
            
            <ListItem className={classes.listItem} style={{textDecoration: 'none'}}>
                <Avatar className={classes.large} alt="Dan Beaumont" src={ProfilePic} style={{textDecoration: 'none'}}/>

            </ListItem>
         
            <ListItem className={classes.listItem}>
            <MailOutlineIcon/>
              <ListItemText classes={{primary:classes.listItemText}}>danielbeaumont95@hotmail.co.uk</ListItemText>
            </ListItem>
           

            <ListItem className={classes.listItem}>
           
            {/* <CallIcon/>  */}
            </ListItem>

            <ListItem className={classes.listItem}>
            <a target="_blank" href="https://www.linkedin.com/in/daniel-beaumont/"><LinkedInIcon/></a>
            </ListItem>


            <ListItem className={classes.listItem}>
            <a target="_blank" href="https://www.instagram.com/danbeaumont95/"><InstagramIcon/></a>

            </ListItem>
             <ListItem className={classes.listItem}>
             <a target="_blank" href="https://www.facebook.com/daniel.beaumont.31"><FacebookIcon/></a>
 
            </ListItem>  
            <ListItem className={classes.listItem}>
             <a target="_blank" href="https://github.com/danbeaumont95"><GitHubIcon/></a>
 
            </ListItem> 
            <ListItem className={classes.listItem}>
              <ListItemText classes={{primary:classes.listItemText}}>Made During September 21</ListItemText>
            </ListItem>   

            {/* <ListItem className={classes.listItem}>
              <ListItemText classes={{primary:classes.listItemText}}>Something Coming Soon !!!</ListItemText>
            </ListItem> */}
            
         
        </List>
    
        
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        {/* <AboutComponent></AboutComponent> */}
        {/* about */}
      </main>
    </div>
  );
}