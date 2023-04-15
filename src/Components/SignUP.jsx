import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';


import { initializeApp } from "firebase/app";
import {  onValue,getDatabase, ref, set } from "firebase/database";



function Copyright(props) {













  return (
    <Typography variant="body2" sx={{color :"wheat"}} align="center" {...props}>
      {'Copyright © '}
      <Link sx={{color :"wheat"}} href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography> 
  );
}

const theme = createTheme();

export default function SignUP() {
	const styling={
		bgcolor:"#aaaa5",
		color:"white",
		
		borderRadius:"1rem", 
	display:"flex",
	width:"fit-content",
	height:"fit-content",
  
  flexDirection: 'column',
  float:"right",
  alignItems: 'center',
	
}








  




  const dataset=[]


  // const adddata=( email, password)=>{
  //   dataset.push({Email: email,Password: password});
  // }
  const databaseName='userDataRecord/'+crypto.randomUUID()
  function writeUserData( email, password) {
    // adddata(name,email)
    const db = getDatabase();
    set(ref(db, databaseName), 
    {Email: email,Password: password}
    );
  } 
  const firebaseConfig = {
    apiKey: process.env.apiKey,
    authDomain: "fitness-1f021.firebaseapp.com",
    projectId: "fitness-1f021",
    storageBucket: "fitness-1f021.appspot.com",
    messagingSenderId: "117072976518",
    appId: process.env.appId,
    databaseURL: "https://fitness-1f021-default-rtdb.firebaseio.com/",
  }; 
  
  
  
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  
  
  // Initialize Realtime Database and get a reference to the service
  const database = getDatabase(app);
  
  // writeUserData("Apple","Apple@gmail.com")
  // writeUserData("bannana","Banan@gmail.com")
  // writeUserData("Kiwai","kawai@gmail.com")
  
  
  const showdata=async()=>{
      onValue(ref(database,'Blogs' ),(snapshot)=>{
          const data=snapshot.val()
          // console.log(data);
          data.map(({email,username})=>{
            console.log("Username: ",username," ","E-mail: ",email);
          }) 
      })
  }
// showdata()

const handleSubmit = (event) => {
  event.preventDefault();
  
  const data = new FormData(event.currentTarget);
  if(data.get('email')&&data.get('password'))
  writeUserData(data.get('email'),data.get('password'))

  console.log({
    email: data.get('email'),
    password: data.get('password'),
  });
  
};





  return (
    <ThemeProvider theme={theme}>
					<Box m={2}  >
      <Container component="main"  sx={styling} maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sizes='large' sx={{ m: 1, bgcolor: 'warning.main', width: 70, height: 70  }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              color='warning'
              sx={{ input: { color: 'white' },label:{color:"wheat"} }}
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
            sx={{ input: { color: 'white' } ,label:{color:"wheat"}}}
              color='warning'
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="outlined"
              color='warning'
              sx={{  mt: 3, mb: 2 ,mr:3 ,width:"fit-content"}}
            >
              Sign In
            </Button>
            <FormControlLabel
              sx={{color :"wheat"}}
              control={<Checkbox value="remember" color="warning" />}
              label="Remember me"
            />
            <Grid container sx>
              <Grid item xs>
                <Link sx={{color :"wheat"}} href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link sx={{color :"wheat"}} href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4}} />
      </Container>
						</Box>
    </ThemeProvider> 
  );
}