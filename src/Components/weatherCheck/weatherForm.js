import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Form from '../header/form';
import Weather from './weather';
import getWeather from '../../Services/getWeather.js';

class WeatherForm extends React.Component {
    state = {
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: undefined
    };

    handleGetWeather = async (e) => {
        const city = e.target.elements.city.value;
        const country = e.target.elements.country.value;
        e.preventDefault();

        if (!city || !country) {
            this.setState({ error: "Vui lòng nhập đủ thông tin..." });
            return;
        }

        try {
            const response = await getWeather(city, country);

            if (response.cod === 200) {
                this.setState({
                    temperature: response.main.temp,
                    city: response.name,
                    country: response.sys.country,
                    humidity: response.main.humidity,
                    description: response.weather[0].description,
                    error: ""
                });
            } else {
                this.setState({ error: "Không thể tìm thấy thành phố bạn tìm kiếm..." });
            }
        } catch (error) {
            this.setState({
                temperature: undefined,
                city: undefined,
                country: undefined,
                humidity: undefined,
                description: undefined,
                error: "Lỗi kết nối. Vui lòng thử lại sau."
            });
        }
    };


    render(){

        return(

            <div className="container mt-4">                 
                    <Form loadWeather={this.handleGetWeather}/>
                    <Weather
                        temperature={this.state.temperature}
                        city={this.state.city}
                        country={this.state.country}
                        humidity={this.state.humidity}
                        description={this.state.description}
                        error={this.state.error}
                    />
            </div>
        )
    }
}

export default WeatherForm;