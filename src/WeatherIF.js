import React, { Component } from "react";
import axios from "axios";

export default class WeatherIF extends Component {
  constructor() {
    super();
    this.state = {
      weather: "Not yet gotten!",
    };
  }

  // handleButtonclick = () => {
  //   axios.get("/getWeatherIF").then((response) => {
      
  //     this.setState({
  //         weather: response.data.temp_v
  //     }); 
     
  //   });
  // };
  handleButtonclick = () => {
    axios.get("http://api.openweathermap.org/data/2.5/weather?q=Ivano-Frankivsk&metric=true&APPID=586674f3866974c6cdd5801216c19af7").then((response) => {
    //   if (!error && response.statusCode ==200){
        var responseBody = response.data.weather[0].description;
        console.log(responseBody);
    //     // console.log(parsedBody['weather'][0].main);
    //     var temp_v = parsedBody['weather'][0].main;
    //     // response.send({ temp_v });
    //     // return temp_v;
    // }
    // console.log(response);
      this.setState({
        
          weather: responseBody
      }); 
     
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleButtonclick}>Get Weather in IF</button>
        <h1>The Weather in Ivano-Frankivsk is: {this.state.weather} </h1>
      </div>
    );
  }
}

