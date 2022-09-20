import React, { Component } from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

class Predictions extends Component {
  render() {
    const {main,weather,wind,dt_txt} = this.props.data
    let imageSrc;
    if(weather[0].main==="Clouds"){
      imageSrc = "https://live.staticflickr.com/4874/32454203077_02ba1a4699_b.jpg"
   }else if(weather[0].main==="Rain"){
    imageSrc = "https://massago.ca/wp-content/uploads/2018/06/blog-post_rain.jpg"
   }else if(weather[0].main==="Clear"){
    imageSrc = "https://imengine.public.prod.cmg.infomaker.io/?uuid=c1d3deeb-6e98-5e7e-a0c2-a3d30517b8e7&function=cropresize&type=preview&source=false&q=75&crop_w=0.99999&crop_h=0.99999&width=1200&height=675&x=1.0E-5&y=1.0E-5"
   }
    return(
    
      <Card sx={{ width: 300, margin: 5 }} className="task-item" >
       <CardMedia
             component="img"
             alt="green iguana"
             height="100"
             width="20"
             image={imageSrc}
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
