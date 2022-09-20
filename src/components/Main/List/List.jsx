import React, { Component } from 'react'
import { v4 as uuidv4 } from 'uuid';

import TaskItem from './TaskItem'
import data from './tasks.json'
import Button from '@mui/material/Button';

export class List extends Component {

  constructor(props) {
    super(props)

    
    this.state = {
      tasks: data, 
   
    }
   

  }

  
  paintTasks = () => this.state.tasks.map((task, i) => <TaskItem data={task} key={uuidv4()} delete={() => this.deleteTask(i)} />)

  deleteTasks = () => this.setState({ tasks: [] });
  resetTasks = () => this.setState({ tasks: data }); //recarga inicial

  deleteTask = (i) => {
    //filter
    const remainingTasks = this.state.tasks.filter((task, j) => i !== j);
    this.setState({ tasks: remainingTasks });
  }

  addTask = (event) => {
    event.preventDefault();
    // const name = prompt("Introduce nombre");
    // const info = prompt("Introduce info del producto");
    // const price = prompt("Introduce precio");

    const name = event.target.name.value;
    const date = event.target.date.value; 

   

    const newTask = { name, date };
    this.setState({ tasks: [...this.state.tasks, newTask] });
  }

  

  render() {

    // const products = [
    //   {name:"Tigre de Bengala",info:"botella Moet con Bengala",price:20},
    //   {name:"Corona party",info:"Cubo de 5 coronitas",price:10},
    //   {info:"Botella de absenta con agua",price:40}
    // ]
    return (
      <section className="task-list">
        <h1>Añadir tarea</h1>
        <form onSubmit={this.addTask}>
          <label htmlFor="name">Tarea:</label>
          <input type="text" id="name" name="name" />
          <label htmlFor="date">Fecha:</label>
          <input type="text" id="date" name="date" />
          <Button variant="contained" type="submit" value="Añadir" >Añadir</Button>
        </form>

        <h1>To do:</h1>
        {this.paintTasks()}

        {this.state.tasks.length ?
          <Button variant="contained" onClick={this.deleteTasks}>Borrar tareas</Button>
          : ""}

        <Button variant="contained" onClick={this.addTask}>Añadir tarea</Button>
        <Button variant="contained" onClick={this.resetTasks}>Recargar tareas</Button>

        {/* {products.map(product=><ProductItem data={product}/>)} */}

        {/* <ProductItem data={products[0]}/>
            <ProductItem data={products[1]}/>
            <ProductItem data={products[2]}/> */}

        {/* <ProductItem name={"Tigre de Bengala"} info={"botella Moet con Bengala"} price={20}/>
            <ProductItem name={"Corona party"} info={"Cubo de 5 coronitas"} price={10}/>
            <ProductItem info={"Botella de absenta con agua"} price={40}/> */}
       
      </section>
    )
  }
}

export default List