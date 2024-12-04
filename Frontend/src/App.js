import './App.css';
import {SearchBar} from './Components/Search Bar/SearchBar.js';
import { WeatherDetails } from './Components/Weather Details/WeatherDetails.js';
import {AirDetails} from './Components/Air Details/AirDetails.js'

import {Routes} from 'react-router-dom';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SearchBar/>}/>
        <Route path="/weather-details" element={<WeatherDetails/>}/>
        <Route path="/airdetails"element={<AirDetails />} />
      </Routes>
    </div>
  );
}

export default App;
