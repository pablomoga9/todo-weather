import React, { Component } from 'react'
import './TaskItem.css'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export class TaskItem extends Component {
  //rconst
  constructor(props) {
    super(props)

    this.state = {
      name: this.props.data.name || "Producto Medias Query"
    }
  }

  render() {
    const { date } = this.props.data;
    

    return (
      <Card sx={{ width: 300, margin: 5 }} className="task-item" >
        <CardMedia 
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {this.state.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <p>{date}</p>
          </Typography>
        </CardContent>
        <CardActions>
          <Button sx={{ backgroundColor: 'green' }} variant="contained" size="small" onClick={this.props.delete}>Borrar</Button>
        </CardActions>
      </Card>


      /*      <article>
             <h2>{this.state.name}</h2>
             <img src={url_img} alt={this.state.name} className="image_item" />
             <h3>{info}</h3>
             <p>Price: {price} €</p>
             <Button variant="contained" onClick={this.props.delete}>Borrar</Button>
           </article> */
    )
  }
}

export default TaskItem