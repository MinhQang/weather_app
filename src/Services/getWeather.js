const getWeather = async (city, country) => {
    const Api_Key = process.env.REACT_APP_API_KEY;

    if (!city || !country) {
        return { error: "Vui lòng nhập đủ thông tin..." };
    }

    try {
        const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${Api_Key}&units=metric&lang=vi`);
        const response = await api_call.json();
        return response;
    } catch (error) {
        return { error: "Lỗi kết nối. Vui lòng thử lại sau." };
    }
};

export default getWeather;
