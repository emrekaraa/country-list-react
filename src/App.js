import React, { useEffect, useState } from "react";
import axios from "axios";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ShowCountries from "./components/ShowCountries";
import SearchCountries from "./components/SearchCountries";
import FilterCountries from "./components/FilterCountries";
import Loading from "./components/Loading";
import HeaderTitle from "./components/HeaderTitle";

function App() {
  //! useStates
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [inputValue, setInputValue] = useState("");

  //! useEffects
  useEffect(() => {
    getCountriesByName(inputValue);
  }, [inputValue]);

  //! filterCountry
  const getCountries = async (region) => {
    try {
      setLoading(true);
      await axios
        .get(`https://restcountries.com/v3.1/${region}`)
        .then((res) => setCountries(res.data));
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  //! searchCountry
  const getCountriesByName = async (regionName) => {
    try {
      setLoading(true);
      await axios
        .get(
          `${
            regionName
              ? `https://restcountries.com/v3.1/name/${regionName}`
              : `https://restcountries.com/v3.1/all`
          }`
        )
        .then((res) => setCountries(res.data));
    } catch (error) {
      console.log("veri yok");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <HeaderTitle countries={countries} />

      <FilterCountries
        getCountries={getCountries}
        setCountries={setCountries}
      />

      <SearchCountries inputValue={inputValue} setInputValue={setInputValue} />

      {loading ? <Loading /> : <ShowCountries countries={countries} />}
    </>
  );
}

export default App;
