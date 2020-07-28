import React from "react";
import Form from "./Form";
import Weather from "./Weather";

const API_KEY = "fa341e59c446174bcdd587b58fcd7414";

class Home extends React.Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }
  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
    
    const data = await api_call.json();
    console.log(data);

    if (city && country) {
      if (data.cod == 404) {
        this.setState({
          temperature: undefined,
          city: undefined,
          country: undefined,
          humidity: undefined,
          description: undefined,
          error: data.message
        });
      }
      else {
        this.setState({
          temperature: data.main.temp,
          city: data.name,
          country: data.sys.country,
          humidity: data.main.humidity,
          description: data.weather[0].description,
          error: ""
        });
      }
    } else {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: "Please enter correct values."
      });
    }
  }

  render() {
    return (  
        <div className="container">
            <div className="row">
                <div className="col-12 form-container">
                    <Form getWeather={this.getWeather} />
                    <Weather
                      temperature={this.state.temperature}
                      humidity={this.state.humidity}
                      city={this.state.city}
                      country={this.state.country}
                      description={this.state.description}
                      error={this.state.error}
                    />
                </div>
            </div>
        </div> 
    );
  }
};

export default Home;