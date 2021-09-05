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
    height: '100%',
      backgroundPosition: 'center', 
        backgroundSize: 'cover', 
        backgroundRepeat: 'no-repeat',
  },
    paper: {
      // marginTop: theme.spacing(8),
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
      padding: theme.spacing(6)
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));

const Login = () => {
    const classes = useStyles();
    const form = useRef();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [successful, setSuccessful] = useState(false);

    const onChangeEmail = (e) => {
        const email = e.target.value;
        setEmail(email);
    };
    const onChangePassword = (e) => {
        const password = e.target.value;
        setPassword(password);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSuccessful(false);
        form.current.validateAll();

        UserService.login(email, password)
            .then((res) => {
                console.log(res, 'res in component');
                if (res.data.error) {
                    console.log('there is an error');
                    return Swal.fire({
                        title: 'Error!',
                        // text: res.data.error,
                        text: 'Email or password are incorrect'
                      })
                }
                console.log('done');
                setSuccessful(true);
                localStorage.setItem('userToken', res.data.session.sessionToken);
                return Swal.fire({
                    title: 'Logged in!',
                    text: 'You will now be redirected to the homepage',
                    // imageUrl: 'https://unsplash.it/400/200',
                    // imageWidth: 400,
                    // imageHeight: 200,
                    // imageAlt: 'Custom image',
                  })
                  .then(() => {
                    window.location = "/";
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
          Log In
        </Typography>
        <Form className={classes.form} noValidate onSubmit={handleSubmit} ref={form}>
          <Grid container spacing={2}>

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
           
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Log In
          </Button>
          {/* <Grid container justifyContent="flex-end">
            <Grid item>
              <Link to={"/login"} variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid> */}
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link to={"/register"} variant="body2">
                Dont have an account yet? Register here
              </Link>
            </Grid>
          </Grid>
        </Form>
      </div>

    </Container>
        </div>
    );
};

export default Login;