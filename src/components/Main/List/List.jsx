import React, { Component } from "react";
import {v4 as uuidv4} from 'uuid';

import Card from './Card'
import data from './tasks.json'
class List extends Component {
  constructor(props){
    super(props)

    this.state={
      tasks:data
    }
  }
  paintData = ()=>this.state.tasks.map((task,i)=><Card data={task} key={uuidv4()} delete={()=>this.deleteTask(i)}/>)
  deleteTasks = ()=>this.setState({tasks:[]});
  resetTasks = ()=>this.setState({tasks:data});

  deleteTask = (i) =>{
    const remainingTasks = this.state.tasks.filter((task,j)=>i!==j);
    this.setState({tasks:remainingTasks})
  }

  addTask = (event)=>{
    event.preventDefault();
    const task = event.target.task.value;
    const accomplishDate = event.target.date.value;

    const newTask = {task, accomplishDate};
    this.setState({tasks:[...this.state.tasks,newTask]})
  }
  
  render() {
    return(
      <section>
      <form onSubmit={this.addTask}>
        <label htmlFor="task">Tarea:</label>
        <input type="text" name="task" id="task" /><br />
        <label htmlFor="date">Tarea:</label>
        <input type="date" name="date" id="date" />
        <input type="submit" value="Add"/>
      </form>
      <h1>Tareas:</h1>
     {this.paintData()}
     {this.state.tasks.length ?
      <button onClick={this.deleteTasks}>Borrar tareas</button>:"" 
    }
    <button onClick={this.addTask}>Añadir tarea</button>
    <button onClick={this.resetTasks}>Recargar tareas</button>
     </section>
    )
  }
}

export default List;
