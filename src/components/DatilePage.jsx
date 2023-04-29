import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import NavBar from './NavBar';

const DatilePage = () => {
  const { fName } = useParams();

  const { countryData } = useSelector((store) => store.country);
  const uniqueName = countryData.find((item) => item.name === fName);

  return (
    <>
      <NavBar />
      <div className="datile-container">
        <div className="image-containter">
          <h1 className="heading-text">{uniqueName.name ? uniqueName.name : 'none'}</h1>
          <img src={uniqueName.flag} alt={uniqueName.name} className="flag-img" />
        </div>
        <div className="status-bar"><h2 className="country-status">City/Town BreakDown - 2023</h2></div>
        <h2 className="item-info">
          <span>Name:</span>
          {uniqueName.name ? uniqueName.name : 'none'}
        </h2>
        <h2 className="item-info">
          <span>Capital:</span>
          {uniqueName.capital ? uniqueName.capital : 'none'}
        </h2>
        <h2 className="item-info">
          <span>Continent:</span>
          {uniqueName.continent ? uniqueName.continent : 'none'}
        </h2>
        <h2 className="item-info">
          <span>Population:</span>
          {uniqueName.population ? uniqueName.population : 'none'}
        </h2>
        <h2 className="item-info">
          <span>Area:</span>
          {uniqueName.area ? uniqueName.area : 'none'}
          km²
        </h2>
        <h2 className="item-info"><a href={uniqueName.map ? uniqueName.map : 'none'}>Map</a></h2>
      </div>
    </>
  );
};

export default DatilePage;
