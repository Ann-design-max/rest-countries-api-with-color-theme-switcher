import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import  Grid  from '@material-ui/core/Grid/Grid';
import axios from 'axios';

const useStyles = makeStyles({
  root: {
    maxWidth: 400,
  },
  media: {
    height: 160,
  },
});

export default function Country() {
  const classes = useStyles();
  const [countries, setCountries] = useState([])

  useEffect(() =>{
    axios.get('https://restcountries.eu/rest/v2/all')
    .then (res =>{
        console.log(res)
        setCountries(res.data)
    })
    .catch(err =>{
        console.log(err)
    })
  }, [])

  return (
    <Grid container direction="row" justify="space-between" alignItems="start" spacing={8}>
        {countries.map(country =>(
             <Grid item xl={3} lg={3} md={4} sm={6} xs={12} key={country.id}>
            <Card className={classes.root} elevation={5}>
            <CardActionArea>
                <CardMedia
                className={classes.media}
                image={country.flag}
                title={country.name}
                />
                <CardContent className='mx-3 mb-3 '>
                <Typography gutterBottom variant="h6" component="h6">
                    {country.name}
                </Typography>
                <Grid container direction="row" justify="flex-start" align="center" className='my-1 align-text-center'>
                    <Grid item align='center' className='mr-1 align-text-center'>
                        <Typography variant="body1" component="p">
                           Population:      
                        </Typography>
                    </Grid>
                    <Grid item align='center' className='mr-1 align-text-center'>
                        <Typography variant="body2" color='textSecondary' component="p">
                             {(country.population).toLocaleString()}
                        </Typography>
                    </Grid>
                </Grid>

                <Grid container direction="row" justify="flex-start" align="center" className='my-1'>
                    <Grid item align='center' className='mr-1'>
                        <Typography variant="body1"  component="p">
                           Region:     
                        </Typography>
                    </Grid>
                    <Grid item align='center'>
                        <Typography variant="body2" color='textSecondary' component="p">
                             {country.region}
                        </Typography>
                    </Grid>
                </Grid>

                <Grid container direction="row" justify="flex-start" align="center" className='my-1'>
                    <Grid item align='center' className='mr-1'>
                        <Typography variant="body1"  component="p">
                           Capital:     
                        </Typography>
                    </Grid>
                    <Grid item align='center'>
                        <Typography variant="body2" color='textSecondary' component="p">
                             {country.capital}
                        </Typography>
                    </Grid>
                </Grid>
                
                </CardContent>
            </CardActionArea>
            </Card>
        </Grid>
        ))}
       
    </Grid>
  );
}
