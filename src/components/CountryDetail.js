import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

function CountryDetail() {
  const { countryCode } = useParams();
  const [country, setCountry] = useState([]);

  const getCountry = async () => {
    return await axios.get(
      `https://restcountries.com/v3.1/alpha?codes=${countryCode}`
    );
  };

  useEffect(() => {
    getCountry().then((res) => {
      setCountry(res.data);
    });
  }, []);

  return (
    <>
      <div className="container">
        <div className="row ">
          <h1 className="text-center mt-4">Country Detail Page</h1>

          <div className="col-lg-4 mt-5 border-2 border-danger py-4 border mx-auto">
            {country.map((c, i) => (
              <div
                className="d-flex flex-column justify-content-center align-items-center"
                key={i}
              >
                <img src={c.flags.png} alt={c.flags.png} />
                <h2>
                  {c.name.common} ( {c.cca3} )
                </h2>

                <h4>Kıta: {c.continents}</h4>
                <h5>Başkent: {c.capital[0]}</h5>
                <p>Nüfus: {c.population}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="row">
          <Link to={"/"} className="mt-5 mx-auto col-4 btn btn-warning fw-bold">
            Back To Home Page
          </Link>
        </div>
      </div>
    </>
  );
}

export default CountryDetail;
