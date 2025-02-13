// src/components/Login.js
import React, { useState } from 'react';
import { Box, TextField, Button, Typography, MenuItem, Select, FormControl, InputLabel, Checkbox, FormControlLabel, Link } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import authStore from '../stores/AuthStore';


const Background = styled(Box)({
  width: '100%',
  height: '100vh',
  backgroundImage: 'url("../../assets/login.jpg")',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
});

const LoginBox = styled(Box)({
  width: 400,
  maxWidth: '90%',
  backgroundColor: 'rgba(255, 255, 255, 0.9)',
  padding: '40px',
  borderRadius: 4,
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)'
});

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [language, setLanguage] = useState('English (US)');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (authStore.login(username, password)) {
      navigate('/dashboard');
    } else {
      alert("Authentication failed");
    }
  };

  return (
    <Background>
      <LoginBox>
        <Typography variant="h5" component="h1" marginBottom={2}>
          Welcome to Goldman.com. Sign in to continue.
        </Typography>
        <FormControl fullWidth margin="normal">
          <InputLabel id="language-select-label">Language</InputLabel>
          <Select
            labelId="language-select-label"
            id="language-select"
            value={language}
            label="Language"
            onChange={e => setLanguage(e.target.value)}
          >
            <MenuItem value="English (US)">English (US)</MenuItem>
            <MenuItem value="Spanish">Spanish</MenuItem>
          </Select>
        </FormControl>
        <TextField
          margin="normal"
          required
          fullWidth
          label="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          autoComplete="username"
        />
        <TextField
          margin="normal"
          required
          fullWidth
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
        />
        <FormControlLabel
          control={<Checkbox name="remember" color="primary" />}
          label="Remember username"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 2, mb: 2 }}
          onClick={handleLogin}
        >
          Sign In
        </Button>
        <Typography variant="body2" color="text.secondary" align="center">
          <Link href="#" underline="hover">
            Forgot password?
          </Link>
          {' | '}
          <Link href="#" underline="hover">
            Contact Technical Support
          </Link>
        </Typography>
      </LoginBox>
    </Background>
  );
};

export default Login;

