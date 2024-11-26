import React, { useEffect, useRef, useState } from "react";
import L from "leaflet";
import GetMapData from "../../Services/getMapData";
import 'bootstrap/dist/css/bootstrap.min.css';

const WeatherMap = () => {
  const mapRef = useRef(null);
  const layerRefs = useRef({}); // Lưu trữ các lớp thời tiết
  const [weatherLayers, setWeatherLayers] = useState([
    { name: "clouds_new", visible: false, blob: null },
    { name: "precipitation_new", visible: false, blob: null },
    { name: "pressure_new", visible: false, blob: null },
    { name: "wind_new", visible: false, blob: null },
    { name: "temp_new", visible: false, blob: null },
    { name: "snow", visible: false, blob: null },
  ]);

  useEffect(() => {
    // Khởi tạo bản đồ
    mapRef.current = L.map("map").setView([48.8566, 2.3522], 15); 

    // Thêm lớp nền OSM
    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OSM France</a>',
    }).addTo(mapRef.current);

    // mapRef.current.on("dragend", () => {
    //   mapRef.current.fitBounds([
    //     [85.0511, -180], // Góc trên trái
    //     [-85.0511, 180], // Góc dưới phải
    //   ]);
    // });

    return () => {
      // Cleanup bản đồ khi component bị gỡ bỏ
      mapRef.current.remove();
    };
  }, []);

  const toggleLayer = async (index) => {
    const updatedLayers = [...weatherLayers];
    const layer = updatedLayers[index];

    if (!layer.blob) {
      try {
        // Gửi yêu cầu lấy dữ liệu nếu chưa có blob
        const data = await GetMapData(layer.name);
        layer.blob = data.blob;
      } catch (error) {
        console.error(`Error loading layer ${layer.name}:`, error);
        return;
      }
    }

    if (layer.visible) {
      // Ẩn lớp nếu đang hiển thị
      mapRef.current.removeLayer(layerRefs.current[layer.name]);
      layer.visible = false;
    } else {
      // Hiển thị lớp nếu đang ẩn
      if (!layerRefs.current[layer.name]) {
        // Tạo lớp mới nếu chưa tồn tại
        const imageUrl = URL.createObjectURL(layer.blob);
        const bounds = [
          [85.0511, -180], // Góc trên trái
          [-85.0511, 180], // Góc dưới phải
        ];

        layerRefs.current[layer.name] = L.imageOverlay(imageUrl, bounds, { opacity: 0.7 });
      }

      layerRefs.current[layer.name].addTo(mapRef.current);
      layer.visible = true;
    }

    setWeatherLayers(updatedLayers);
  };

  return (
    <div style={{ height: "50%", width: "100%", position: "relative" }}>
      {/* Vùng hiển thị bản đồ */}
      <div id="map" style={{ height: "100%", width: "100%" }}></div>

       {/* Control Panel */}
       <div
          className="control-panel position-fixed top-0 start-0 p-2 d-flex flex-column"
          style={{
            zIndex: 1000,
        }}
      >
        {weatherLayers.map((layer, index) => (
          <button
            key={index}
            onClick={() => toggleLayer(index)}
            className="btn btn-light rounded-circle mb-2 shadow"
            style={{
              width: "40px",
              height: "40px",
              padding: "0",
              fontSize: "12px",
              transition: "transform 0.2s ease, box-shadow 0.2s ease",
            }}
            onMouseOver={(e) => {
              e.target.style.transform = "scale(1.1)";
              e.target.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.2)";
            }}
            onMouseOut={(e) => {
              e.target.style.transform = "scale(1)";
              e.target.style.boxShadow = "none";
            }}
          >
            {layer.visible ? "Hide" : "Show"}
          </button>
        ))}
      </div>
    </div>
  );
};

export default WeatherMap;
