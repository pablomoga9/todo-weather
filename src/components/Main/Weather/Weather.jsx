import React, { Component } from "react";
import {v4 as uuidv4} from 'uuid';
import Predictions from './Predictions';


class Weather extends Component {
    constructor(props){
      super(props);
      this.state = {
        weatherList:this.props.defaultList
      }
    }

    getWeather = async (event)=>{
      event.preventDefault();
      let latitude,longitude;
      const cityValue = event.target.city.value;
      const city = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${cityValue}&limit=5&appid=${process.env.REACT_APP_APIKEY}`);
      const cityData = await city.json();
      latitude=cityData[0].lat;
      longitude=cityData[0].lon;
      console.log(latitude,longitude);
      const res = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${process.env.REACT_APP_APIKEY}`);
      const data = await res.json();
      this.setState({
        weatherList: data.list
      })
      event.target.city.value = "";
      
    }

    defaultLocation = async()=>{
      const res = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=40.42567179785109&lon=-3.6891496867451092&appid=${process.env.REACT_APP_APIKEY}`);
      const data = await res.json();
      this.setState({
        weatherList:data.list
      })
    }

  render() {
    
    return(
      <section>
        <form onSubmit={this.getWeather}>
          <label htmlFor="city">Ciudad:</label>
          <input type="text" id="city" name="city" />
          <button type="submit" value="search">Buscar</button>
        </form>
        <h1>Weather</h1>
        {/* {this.defaultLocation()}; */}
        {
          this.state.weatherList.map(predic=><Predictions data={predic} key={uuidv4()}/>)
        }
       
        
        
      </section>
    )
  }
}

Weather.defaultProps = {
  defaultList:[]
}

export default Weather;
