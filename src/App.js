import React, { Component } from "react";

import fakeWeatherData from "./fakeWeatherData.json";
import storm from "../src/img/weather-icons/storm.svg";
import clear from "../src/img/weather-icons/clear.svg";
import partlycloudy from "../src/img/weather-icons/partlycloudy.svg";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Karim"
    };
  }

  handleInputChange = value => {
    this.setState({ name: value });
  };

  render() {
    return (
      <div className="app">
        <header>
          <form>
            <input type="text" id="city" name="city" value="london"></input>
            <button> Find weather</button>
          </form>
        </header>
        <body>
        <div class="first">
        <img src={partlycloudy} alt="clear"/>
        <p>overcast clouds</p>
        </div>
        <div class="first-text">
          <p> Temperature 10 to 11 C</p>
        </div>
        <div class="second-text">
          <p><b>Humidity</b> 78% <b>Pressure</b> 1008.48</p> 
        </div>
        <div class="children">
         <div class="three">
         <p>03:00</p>
         <img src={partlycloudy} alt="clear"/>
         <p>8 C</p>
         </div>
         <div class="six">
         <p>06:00</p>
         <img src={partlycloudy} alt="clear"/>
         <p>9 C</p>
         </div>
         <div class="nine">
         <p>09:00</p>
         <img src={clear} alt="clear"/>
         <p>14 C</p>
         </div>
         <div class="twelve">
         <p>12:00</p>
         <img src={clear} alt="clear"/>
         <p>17 C</p>
         </div>
         <div class="fifteen">
         <p>15:00</p>
         <img src={clear} alt="clear"/>
         <p>18 C</p>
         </div>
         <div class="eighteen">
         <p>18:00</p>
         <img src={clear} alt="clear"/>
         <p>16 C</p>
         </div>
         <div class="twenty-one">
         <p>21:00</p>
         <img src={partlycloudy} alt="clear"/>
         <p>13 C</p>
         </div>

        </div>        
        </body>
     
      </div>
        

    );
  }
}

export default App;
