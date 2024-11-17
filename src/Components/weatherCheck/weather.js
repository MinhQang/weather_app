import React from "react";

class Weather extends React.Component {

    render() {

        return(

            <div className="card p-3 my-3">
                <div className="card-body">
                    <h5 className="card-title text-center mb-4">Kết quả thời tiết</h5>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            {
                                this.props.country && this.props.city && <p className="weather__key">Vị trí: 
                                <span className="weather__value"> {this.props.city}, {this.props.country}</span>
                                </p>
                            }
                        </li>
                        <li className="list-group-item">
                            {
                                this.props.temperature && <p className="weather__key">Nhiệt Độ: 
                                <span className="weather__value">  {this.props.temperature}°C</span>
                                </p>
                            }
                        </li>
                        <li className="list-group-item">
                            {
                                this.props.humidity && <p className="weather__key">Độ Ẩm: 
                                <span className="weather__value">  {this.props.humidity}</span>
                                </p>
                            }
                        </li>
                        <li className="list-group-item">
                            {
                                this.props.description && <p className="weather__key">Tình Trạng Thời Tiết:  
                                <span className="weather__value">  {this.props.description}</span>
                                </p>
                            }
                        </li>
                            {
                                this.props.error && <p className="weather__error">{this.props.error}</p>
                            }
                    </ul>
                </div>
            </div>
        )
    }
}

export default Weather;