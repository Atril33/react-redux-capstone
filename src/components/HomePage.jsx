import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import NavBar from './NavBar';
import './Style/Style.css';
import countryMap from './images/background.png';
import bannarImage from './images/banar-img.jpg';

const Homepage = () => {
  const { countryData } = useSelector((store) => store.country);

  const [searchCountry, setSearchCountry] = useState('');

  const handleCountry = (event) => {
    setSearchCountry(event.target.value);
  };

  const filteredData = countryData.filter((item) => (
    item.name.toLowerCase().includes(searchCountry.toLowerCase())
  ));

  return (
    <>
      <NavBar />
      <div className="search-cont">
        <img src={bannarImage} alt="World Map" className="world-img" />
      </div>
      <input type="text" value={searchCountry} onChange={handleCountry} placeholder="&#x1F50D; Search Country Here" className="search-input" />
      <div className="status-bar"><h2 className="country-status">Stats by Country</h2></div>
      <div className="container">
        {filteredData.map((item) => (
          <Link to={`/countries/${item.name}`} key={item.name} className="small-container">
            <img src={countryMap} alt={item.name} className="country-map" />
            <div className="country-info">
              <h2 className="country-name">{item.name}</h2>
              <h2 className="country-population">{item.population}</h2>
            </div>
          </Link>

        ))}

      </div>
    </>
  );
};

export default Homepage;
