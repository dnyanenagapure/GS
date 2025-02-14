import React from 'react';
import { observer } from 'mobx-react';
import { Container, Typography, Paper, Grid, Box } from '@mui/material';
import assetStore from '../stores/AssetStore';
import AssetAllocationChart from './AssetAllocationChart';
import LogoutButton from './LogoutButton';
<<<<<<< HEAD
import Headers from './Headers';
=======
import MarketChart from './MarketChart'

>>>>>>> 6d2f4404378176d4356ed0552b809de19a8e4f21

const Dashboard = observer(() => {
  const cash = assetStore.assets.find(asset => asset.name === 'Cash, Deposits & Money Market Funds')?.value || 0;
  const fixedIncome = assetStore.assets.find(asset => asset.name === 'Fixed Income')?.value || 0;
  const publicEquity = assetStore.assets.find(asset => asset.name === 'Public Equity')?.value || 0;

  return (
<<<<<<< HEAD
    <>
      <Headers/>
      <Container maxWidth="md" style={{ marginTop: '2rem' }}>
        <Typography variant="h4" component="h1" gutterBottom align="center">
          Asset Allocation
        </Typography>
        <Box display="flex" justifyContent="center" mb={8}>
          <AssetAllocationChart />
        </Box>
        <Paper elevation={3} style={{ padding: '20px' }}>
          <Grid container spacing={3} justifyContent="center">
            <Grid item xs={12} sm={8} md={4}>
              <Typography variant="h6" gutterBottom>Cash</Typography>
              <Typography>{cash.toLocaleString()}</Typography>
            </Grid>
            <Grid item xs={12} sm={8}  md={4}>
              <Typography variant="h6" gutterBottom>Fixed Income</Typography>
              <Typography>{fixedIncome.toLocaleString()}</Typography>
            </Grid>
            <Grid item xs={12} sm={8}  md={4}>
              <Typography variant="h6" gutterBottom>Public Equity</Typography>
              <Typography>{publicEquity.toLocaleString()}</Typography>
            </Grid>
          </Grid>
        </Paper>
        <Box display="flex" justifyContent="center" mt={2}>
          <LogoutButton />
        </Box>
      </Container>
    </>
=======
    <Container maxWidth="md" style={{ marginTop: '2rem' }}>
      
      <Typography variant="h4" component="h1" gutterBottom align="center">
        Asset Allocation
      </Typography>
      <Box display="flex" justifyContent="center" mb={8}>
        <AssetAllocationChart />
      </Box>
      <Paper elevation={3} style={{ padding: '20px' }}>
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} sm={8} md={4}>
            <Typography variant="h6" gutterBottom>Cash</Typography>
            <Typography>{cash.toLocaleString()}</Typography>
          </Grid>
          <Grid item xs={12} sm={8}  md={4}>
            <Typography variant="h6" gutterBottom>Fixed Income</Typography>
            <Typography>{fixedIncome.toLocaleString()}</Typography>
          </Grid>
          <Grid item xs={12} sm={8}  md={4}>
            <Typography variant="h6" gutterBottom>Public Equity</Typography>
            <Typography>{publicEquity.toLocaleString()}</Typography>
          </Grid>
        </Grid>
      </Paper>
      <Box display="flex" justifyContent="center" mt={2}>
        <LogoutButton />
      </Box>
     <Box>
      <MarketChart/>
     </Box>
    </Container>
>>>>>>> 6d2f4404378176d4356ed0552b809de19a8e4f21
  );
});

export default Dashboard;
