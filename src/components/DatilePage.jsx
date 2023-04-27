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
        <img src={uniqueName.flag} alt={uniqueName.name} />
        <h2 className="name">
          Name:
          {uniqueName.name}
        </h2>
        <h2 className="capital">
          Capital:
          {uniqueName.capital}
        </h2>
        <h2 className="continent">
          Continent:
          {uniqueName.continent}
        </h2>
        <h2 className="population">
          Population:
          {uniqueName.population}
        </h2>
        <h2 className="area">
          Area:
          {uniqueName.area}
          km²
        </h2>
        <h2 className="map"><a href={uniqueName.map}>Map</a></h2>
      </div>
    </>
  );
};

export default DatilePage;
