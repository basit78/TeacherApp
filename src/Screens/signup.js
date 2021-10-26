import React,{useState} from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import { Link } from "react-router-dom"
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { FormControl,FormControlLabel,RadioGroup,Radio,FormLabel } from '@mui/material';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {setDoc,createUserWithEmailAndPassword,db,auth,doc} from "../config/firebase"

const theme = createTheme();
export default function SignUppSide() {
  const [username,setusername]= useState('');
  const [email,setemail]= useState('');
  const [password,setpassword]= useState('');
  const [role,setrole]= useState('');
  const [ErrMsg,setErrMsg]=useState('');

  const handleSubmit =async() => {
    try {
      // console.log({ email, userRole })
      let { user } = await createUserWithEmailAndPassword(auth, email, password);
      let dataRef = doc(db, 'Signup Users', user.uid)
      await setDoc(dataRef, {
        UserName : username,
          email: user.email,
          uid: user.uid,
          userRole: role
      });

  } catch (err) {
      setErrMsg(err.message);
      setTimeout(() => {
          setErrMsg('');
      }, 5000)
  }


  }

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://source.unsplash.com/random)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign Up
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                label="User Name"
                autoComplete="email"
                autoFocus
                onChange={(event)=>{setusername(event.target.value)}}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                label="Email Address"
                autoComplete="email"
                autoFocus
                onChange={(event)=>{setemail(event.target.value)}}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                label="Password"
                type="password"
                autoComplete="current-password"
                onChange={(event)=>{setpassword(event.target.value)}}
              />
              <FormControl component="fieldset">
                <FormLabel component="legend">User Role</FormLabel>
                <RadioGroup>
                  <FormControlLabel value="Trainer" control={<Radio />} label="Trainer" onChange={()=>{setrole("Trainer")}}/>
                  <FormControlLabel value="Student" control={<Radio />} label="Student" onChange={()=>{setrole("Student")}}/>
                </RadioGroup>
              </FormControl>

              <Button
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={handleSubmit}
              >
                Sign Up
              </Button>
              <Grid container>
                <Grid item xs>
                </Grid>
                <Grid item>
                  <Link to="/sign-in" variant="body2">
                    {"Signin Here"}
                  </Link>
                </Grid>
                <p>{ErrMsg ? <p>{ErrMsg}</p> : null }</p>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}