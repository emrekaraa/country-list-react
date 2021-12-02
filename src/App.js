import React, { useEffect, useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import axios from "axios";

//!Components import
import Countries from "./components/Countries";

function App() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCountries("all");
  }, []);

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

  return (
    <>
      <h2 className="mt-3 text-center">Ülkeler ({countries.length})</h2>

      <div className="search-buttons flex-wrap d-flex justify-content-center mb-3">
        <button onClick={() => getCountries("all")}>Tüm Kıtalar</button>
        <button onClick={() => getCountries("region/europe")}>Avrupa</button>
        <button onClick={() => getCountries("region/asia")}>Asya</button>
        <button onClick={() => getCountries("region/america")}>America</button>
        <button onClick={() => getCountries("region/africa")}>Afrika</button>
        <button onClick={() => getCountries("region/america")}>
          Okyanusya
        </button>
        <button onClick={() => getCountries("region/antarctic")}>
          Antarktika
        </button>
      </div>

      {loading ? (
        <div className="lds-ellipsis container d-flex mt-5">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      ) : (
        <div className="container">
          <div className="row gy-3 d-flex justify-content-center">
            <Countries countries={countries} />
          </div>
        </div>
      )}
    </>
  );
}

export default App;
