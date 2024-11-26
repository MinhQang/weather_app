const GetMapData = async (layer) => {
  const Api_Key = process.env.REACT_APP_API_KEY;
  const zoom = 10; // Độ phóng to
  const x = 5;     // Tọa độ x (cột bản đồ)
  const y = 10;    // Tọa độ y (hàng bản đồ)

  const url = `https://tile.openweathermap.org/map/${layer}/${zoom}/${x}/${y}.png?appid=${Api_Key}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error for ${layer}! status: ${response.status}`);
    }
    const blob = await response.blob();
    return { layer, blob };
  } catch (error) {
    console.error(`Error fetching ${layer} layer:`, error);
    return null;
  }
};

export default GetMapData;
