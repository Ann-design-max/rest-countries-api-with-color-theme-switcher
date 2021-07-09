import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import  Grid  from '@material-ui/core/Grid/Grid';
import Search from '../components/Search';
import SelectFilter from '../components/Select';
import Country from '../components/Cards';
export default function Home() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Grid container direction="row" justify="space-between" alignItems="center">
          <Grid item xl={3} lg={3} md={3} sm={4} xs={12} >
            <Search/>
          </Grid>
          <Grid item xl={3} lg={3} md={3} sm={4} xs={12} justifyContent='flex-end'>
            <SelectFilter/>
          </Grid>
      </Grid>
      <Country/>
    </React.Fragment>
  );
}
