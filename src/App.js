import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Homepage from './components/HomePage';
import { countryItems } from './Redux/country/countrySlice';
import DatilePage from './components/DatilePage';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(countryItems());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/countries/:fName" element={<DatilePage />} />
      </Routes>

    </>
  );
}

export default App;
