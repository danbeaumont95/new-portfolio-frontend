import React, { useState, useEffect, useRef } from 'react'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
// import Link from '@material-ui/core/Link';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import UserService from '../Services/user.service';
import Form from 'react-validation/build/form';
import NewBackground from '../Images/new-background.jpeg';
const Swal = require('sweetalert2');

const useStyles = makeStyles((theme) => ({
  all: {
    backgroundImage: 'url('+ NewBackground+')',
    backgroundPosition: 'center', 
      backgroundSize: 'cover', 
      backgroundRepeat: 'no-repeat',
      height: '100%'
      // borderRadius: 8,
},
    paper: {
      marginTop: theme.spacing(0),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      color: '#ffffff',
    },
    avatar: {
      marginTop: theme.spacing(8),
      backgroundColor: theme.palette.secondary.main,
      
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(3),
      color: '#ffffff',
      backgroundColor: '#ffffff',
      opacity: '80%',
      padding: theme.spacing(4)
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));

const Register = () => {
    const classes = useStyles();
    const form = useRef();
    // const [user, setUser] = useState({});
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [onMailingList, setOnMailingList] = useState(false);
    const [successful, setSuccessful] = useState(false);


    const onChangeFirstName = (e) => {
        const firstName = e.target.value;
        setFirstName(firstName);
    };
    const onChangeLastName = (e) => {
        const lastName = e.target.value;
        setLastName(lastName);
    };
    const onChangeUsername = (e) => {
        const username = e.target.value;
        setUsername(username);
    };
    const onChangeEmail = (e) => {
        const email = e.target.value;
        setEmail(email);
    };
    const onChangePassword = (e) => {
        const password = e.target.value;
        setPassword(password);
    };
    const onChangeOnMailingList = (e) => {
        console.log(e.target.checked, 'target');
        const onMailingList = e.target.checked;
        console.log(onMailingList, 'mail list func');
        setOnMailingList(onMailingList);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSuccessful(false);
        form.current.validateAll();

        UserService.register(firstName, lastName, email, username, password, onMailingList)
            .then((res) => {
                console.log(res.data, 'res.data');
                // return <Redirect to="/home" />
                if (res.data.error) {
                    console.log('there is an error');
                    return Swal.fire({
                        title: 'Error!',
                        text: res.data.msg,
                        // imageUrl: 'https://unsplash.it/400/200',
                        // imageWidth: 400,
                        // imageHeight: 200,
                        // imageAlt: 'Custom image',
                      })
                }
                
                console.log('done');
                
                setSuccessful(true);
                
                return Swal.fire({
                    title: 'All good!',
                    text: 'You will now be redirected to the login page',
                    // imageUrl: 'https://unsplash.it/400/200',
                    // imageWidth: 400,
                    // imageHeight: 200,
                    // imageAlt: 'Custom image',
                  }).then(() => {
                    window.location = "/login";
                    // return <Redirect to="/home" />
                  })
            })
            .catch(() => {
                console.log('in catch');
                setSuccessful(false)
            })
    }

    return (
        <div className={classes.all}>
        <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Form className={classes.form} noValidate onSubmit={handleSubmit} ref={form}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                value={[firstName]}
                onChange={onChangeFirstName}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
                value={[lastName]}
                onChange={onChangeLastName}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                autoComplete="username"
                value={[username]}
                onChange={onChangeUsername}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={[email]}
                onChange={onChangeEmail}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={[password]}
                onChange={onChangePassword}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox color="primary" />}
                label="I want to be added to the mailing list to be updated for future news."
                onChange={onChangeOnMailingList}
                checked={onMailingList}
                style={{color: '#000000'}}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link to={"/login"} variant="body2">
                <Typography  style={{color: '#000000'}}>Already have an account? Sign in</Typography>
              </Link>
            </Grid>
          </Grid>
        </Form>
      </div>

    </Container>
        </div>
    )
};

export default Register;