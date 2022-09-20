import React, { Component } from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

class Predictions extends Component {
  render() {
    const {main,weather,wind,dt_txt} = this.props.data
    return(
    
      <Card sx={{ width: 300, margin: 5 }} className="task-item" >
       <CardMedia 
       />
       <CardContent>
         <Typography gutterBottom variant="h5" component="div">
           {dt_txt}
         </Typography>
         <Typography variant="body2" color="text.secondary">
           <p>{main.temp}</p>
           <p>{weather[0].main}</p>
           <p>{wind.speed}</p>
         </Typography>
       </CardContent>
     </Card>
     )
     
    
    
  }
}

export default Predictions;
