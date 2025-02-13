import React from 'react';
import { Button } from '@mui/material';
import authStore from '../stores/AuthStore';

function LogoutButton() {
 

  return (
    <Button color="primary" onClick={() => authStore.logout()}>Logout</Button>
  );
}

export default LogoutButton;
