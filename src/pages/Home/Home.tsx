import React from 'react';
import { Container, Grid } from '@mui/material';
import AppBar from 'components/appBar/AppBar';
import TableTop from 'components/tableTop/TableTop';
import ActionSideBar from 'components/actionSideBar/ActionSideBar';

const Home = () => {
  return (
    <>
      <AppBar />
      <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 'calc(90vh)' }}>
        <Grid container rowSpacing={4} columnSpacing={1}>
          <Grid item xs={5} display="flex" justifyContent="center">
            <ActionSideBar />
          </Grid>
          <Grid item xs={7}>
            <TableTop />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Home;
