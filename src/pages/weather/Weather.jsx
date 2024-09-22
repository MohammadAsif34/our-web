import React, { useState } from "react";
import "./Weather.css";
import icon from "../../assets/react.svg";
const Weather = () => {
  const [cityName, setCityName] = useState("");
  const [weather, setWeather] = useState("");
  const apiURL = `http://api.weatherapi.com/v1/current.json?key=1a8e28697433417eb2c182933242209&q=${cityName}`;
  const fetchdata = () => {
    fetch(apiURL)
      .then((res) => res.json())
      .then((data) =>
        setWeather({
          name: data.location.name + ", " + data.location.region,
          icon: data.current.condition.icon,
          day: "day",
          date: "date",
          temprature: data.current.temp_c,
          condition: data.current.condition.text,
          windSpeed: data.current.wind_kph,
          chanceOfRain: "0",
          pressure: data.current.pressure_in,
          humidity: data.current.humidity,
        })
      );
  };
  const handleSearch = (e) => {
    e.preventDefault();
    fetchdata();
    setCityName(" ");
  };
  // fetchdata();

  return (
    <>
      <div className="main ">
        <div className=" searchBox w-2/5 h-14 m-auto mt-16 border p-1 rounded-xl backdrop:blur-lg  ">
          <form
            action=""
            className="h-full w-full flex text-2xl"
            onSubmit={handleSearch}
          >
            <input
              type="text"
              name=""
              id=""
              placeholder="region..."
              className="h-full px-4 flex-1 outline-none bg-transparent"
              onChange={(e) => setCityName(e.target.value)}
            />
            <button
              type="sub,it"
              className="h-full px-6 text-white rounded-lg capitalize bg-teal-600"
            >
              search
            </button>
          </form>
        </div>

        <div className="flex justify-center my-6">
          <div className="box w-2/5  p-4 rounded-xl  border border-gray-300 shadow-xl ">
            <div className="p-4  flex-1 flex flex-col items-center">
              <h2 className="text-2xl  capitalize">
                {!weather == "" ? weather.name : "----"}
              </h2>
              <div className="w-28 h-28 mt-8 flex justify-center items-center ">
                <img
                  src={!weather == "" ? weather.icon : icon}
                  className="w-full h-full"
                />
              </div>
              <p className="my-4 text-xl capitalize ">{weather.name}</p>
              <h1 className="text-6xl font-semibold">
                {!weather == "" ? weather.temprature : "--"} &deg;
                <span>c</span>
              </h1>
              <p className="my-4 text-xl capitalize">
                {!weather == "" ? weather.condition : "----"}
              </p>
            </div>
            {/* sec-2  */}
            <div className="box2 p-4  flex flex-col">
              <div className="childBox p-2 my-1 border border-gray-300 shadow-xl rounded-xl flex">
                <div className="w-16 h-16  flex justify-center items-center">
                  <i class="text-3xl bi bi-arrow-up-left-circle"></i>
                </div>
                <div className="">
                  <p className="text-lg">
                    {!weather == "" ? weather.windSpeed : " -- "}{" "}
                    <span> mph</span>
                  </p>
                  <p className="text-xl capitalize font-semibold">wind speed</p>
                </div>
              </div>
              <div className="childBox p-2 my-1 border border-gray-300 shadow-xl rounded-xl flex">
                <div className="w-16 h-16  flex justify-center items-center">
                  <i class="text-3xl bi bi-cloud-drizzle"></i>
                </div>
                <div className="">
                  <p className="text-lg">
                    {!weather == "" ? weather.name : " -- "}
                  </p>
                  <p className="text-xl capitalize font-semibold">
                    chance of rain
                  </p>
                </div>
              </div>
              <div className="childBox p-2 my-1 border border-gray-300 shadow-xl rounded-xl flex">
                <div className="w-16 h-16  flex justify-center items-center">
                  <i class="text-3xl bi bi-thermometer-half"></i>
                </div>
                <div className="">
                  <p className="text-lg">
                    {!weather == "" ? weather.pressure : " -- "}{" "}
                    <span> in</span>
                  </p>
                  <p className="text-xl capitalize font-semibold">pressure</p>
                </div>
              </div>
              <div className="childBox p-2 my-1 border border-gray-300 shadow-xl rounded-xl flex">
                <div className="w-16 h-16  flex justify-center items-center">
                  <i class="text-3xl bi bi-droplet"></i>
                </div>
                <div className="">
                  <p className="text-lg">
                    {!weather == "" ? weather.humidity : " -- "} <span> %</span>
                  </p>
                  <p className="text-xl capitalize font-semibold">humidity</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Weather;
