import { Typography, Container, TextField, Modal, Backdrop, Fade, Button, Card, CardContent } from '@material-ui/core';
import React, { useState ,useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Form from 'react-validation/build/form';
import EmailService from '../Services/email.service';
import SimpleModal from './EmailModal';
import background from '../Images/background.png';
import NewBackground from '../Images/new-background.jpeg';
import Languages from './Languages';
const Swal = require('sweetalert2');

const useStyles = makeStyles((theme) => ({
  all: {
    backgroundImage: 'url('+ NewBackground+')',
    backgroundPosition: 'center center', 
      backgroundSize: 'cover', 
      backgroundRepeat: 'no-repeat',
      width: '100%'
      // borderRadius: 8,
      // height: '100%'
},
root: {
  padding:25,
  // backgroundColor: '#000000',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  opacity: '40%'
},
brand:{
  color:'#fd7070',
  fontWeight:500,
},
    heroContent: {
        padding: theme.spacing(3, 0, 6),
        // fontFamily: 'sans-serif'
    },
    paper: {
        marginTop: theme.spacing(0),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      },
      avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
      },
      form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(2),
        // backgroundColor: '#2E3B55'
      },
      submit: {
        margin: theme.spacing(3, 0, 2),
      },
      labelRoot: {
        fontSize: 30,
        color: "red",
        "&$labelFocused": {
          color: "purple"
        }
      },
      labelFocused: {},
      modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      modalPaper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
      },
      button: {
        backgroundColor: '#fff',
        margin: theme.spacing(2, 26),
      },
      padding:{
        marginTop: theme.spacing(-3),
        padding:27,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      },
}));




const Home = () => {
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [senderEmail, setSenderEmail] = useState('');
    const [successful, setSuccessful] = useState(false);
    const [modal, setModal] = useState(false);
    const [open, setOpen] = useState(false);
    const classes = useStyles();
    const form = useRef();

    const onChangeSubject = (e) => {
        const subject = e.target.value;
        setSubject(subject)
    };

    const onChangeMessage = (e) => {
        const message = e.target.value;
        setMessage(message);
    }

    const onChangeSenderEmail = (e) => {
        const senderEmail = e.target.value;
        setSenderEmail(senderEmail)
    }

    const handleSubmit = (e) => {
      console.log('handle submit calleddddd');
        e.preventDefault();
        setSuccessful(false);
        form.current.validateAll();

        EmailService.postEmail(subject, message, senderEmail)
            .then((res) => {
              console.log(res, 'res in component');
                // console.log('done');
                // setSuccessful(true)
                // setModal(true);
                if (res.data.error) {
                  console.log('there is an error');
                  return Swal.fire({
                      title: 'Error!',
                      // text: res.data.error,
                      text: 'Email or password are incorrect'
                    })
              }
              console.log('done');
              setSuccessful(true)
              return Swal.fire({
                title: 'Email sent!',
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

    const refreshForm = () => {
        setTimeout(() => {
            window.location.reload(false)
        }, 200);
        console.log('Page to reload');
    }


    const handleClose = () => {
        setOpen(false);
      };
      // console.log(modal, 'modal');
    return (
        <div className={classes.all}>

        <Typography className={classes.heroContent} component="h4" variant="h5" align="center" color="textPrimary" gutterBottom style={{color: '#F2EFEF', fontFamily: 'sans-serif' }}>
            Hi everyone, thanks for visiting my portfolio site.
            <br></br>
            <br></br>
            My name is Daniel Beaumont and I am a full stack MERN developer.
            <br></br>
            <br></br>
            Please look around my site and if you would like to get in contact please fill in the fields below
        </Typography>

        <Container maxWidth="sm" component="main" >

        <div className={classes.paper}>
        <Form className={classes.form} noValidate onSubmit={handleSubmit} ref={form} >

                <TextField
                   id="subject"
                   margin="normal"
                   variant="outlined"
                   label="Subject"
                   type="text"
                   name="subject"
                   fullWidth
                   value={[subject]}
                   onChange={onChangeSubject}
                   style={{background : '#ffffff'}}
                //    autoFocus
                   InputLabelProps={{
                    style: { color: '#000000' },
                  }}
                />

                <TextField
                    id="message"
                    margin="normal"
                    variant="outlined"
                    label="Message"
                    type="text"
                    name="message"
                    fullWidth
                    value={[message]}
                    onChange={onChangeMessage}
                    style={{background : '#ffffff'}}
                    // autoFocus
                    InputLabelProps={{
                        style: { color: '#000000' },
                      }}
                />

                <TextField
                    id="senderEmail"
                    margin="normal"
                    variant="outlined"
                    label="Your Email"
                    type="text"
                    name="senderEmail"
                    fullWidth
                    value={[senderEmail]}
                    onChange={onChangeSenderEmail}
                    style={{background : '#ffffff'}}
                    // autoFocus
                    InputLabelProps={{
                        style: { color: '#000000' },
                      }}
                />
                  <Button type="submit" className={classes.button}>Send Email</Button>


        </Form>
        </div>
        </Container>

        <div className={classes.padding}>
               <Languages />
         </div>
        </div>
    )
};

export default Home;