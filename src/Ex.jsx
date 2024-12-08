

// const WeatherApp = () => {
//   const [location, setLocation] = useState('');
//   const [weatherData, setWeatherData] = useState(null);
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [delayTimer, setDelayTimer] = useState(null);

//   const API_KEY = '03b5eb016fbff7d6e19e5f381ce45777'; // Replace with your actual API key

//   const handleLocationChange = (e) => {
//     setLocation(e.target.value);
//     clearTimeout(delayTimer);
//     setDelayTimer(
//       setTimeout(() => {
//         fetchWeatherData(e.target.value);
//       }, 2000)
//     );
//   };

//   const fetchWeatherData = async (location) => {
//     try {
//       setLoading(true);
//       const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`);
//       setWeatherData(response.data);
//       setError(null);
//       setLoading(false);
//     } catch (error) {
//       setError('Error fetching weather data. Please try again.');
//       setWeatherData(null);
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="container-fluid h-100 d-flex flex-column">
//       <div className="row bg-primary text-white py-3">
//         <div className="col-md-12 text-center">
//           <div className="form-group">
//             <input
//               type="text"
//               className="form-control w-50 border rounded-5"
//               value={location}
//               onChange={handleLocationChange}
//               placeholder="Enter location"
//             />
//           </div>
//         </div>
//       </div>
//       <div className="row flex-grow-1 d-flex justify-content-center align-items-center">
//         <div className="col-md-8 col-lg-6">
//           {loading && (
//             <div className="d-flex justify-content-center my-4">
//               <div className="spinner-border" role="status">
//                 <span className="visually-hidden">Loading...</span>
//               </div>
//               <span className="ms-2">Loading...</span>
//             </div>
//           )}
//           {weatherData && (
//             <div className="row">
//               <div className="col-md-6">
//                 <h2>{weatherData.name}</h2>
//                 <p>Temperature: {weatherData.main.temp}°C</p>
//               </div>
//               <div className="col-md-6">
//                 <p>Description: {weatherData.weather[0].description}</p>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//       <div className="row bg-light py-3 mt-5 mt-md-5">
//         <div className="col-md-4">
//           <p>Feels Like: {weatherData?.main.feels_like}°C</p>
//         </div>
//         <div className="col-md-4">
//           <p>Humidity: {weatherData?.main.humidity}%</p>
//         </div>
//         <div className="col-md-4">
//           <p>Wind Speed: {weatherData?.wind.speed} m/s</p>
//         </div>
//       </div>
//       {error && <div className="alert alert-danger mt-4">{error}</div>}
//     </div>
// //   );
// };

// const App = () => {
//   return <WeatherApp />;
// };

// export default App;