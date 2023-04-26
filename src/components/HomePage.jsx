import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';
import './Style/Style.css';
import { useState } from 'react';




const Homepage = () => {
 const { countryData } = useSelector((store) => store.country)

 const [searchCountry, setSearchCountry] = useState('');

 const handleCountry = (event) => {
  setSearchCountry(event.target.value)
 }

 const filteredData = countryData.filter((item) =>
 item.name.toLowerCase().includes(searchCountry.toLowerCase())
);

return (
  <>
    <NavBar />
 <div className='search-cont'>
  <input type='text' value={searchCountry} onChange={handleCountry} placeholder='&#x1F50D; Search Country Here' className='search-input'></input>
  </div>
  <div className='container'>
    {filteredData.map((item) => (
 <Link to={`/countries/${item.name}`} key={item.name}>
 <img src={item.flag} alt={item.name} className='flat-img' />
</Link>

    
    ))}

  </div>
  </>
  )
}

export default Homepage;