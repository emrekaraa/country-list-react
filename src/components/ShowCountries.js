import React from "react";
import { Link } from "react-router-dom";

function ShowCountries({ countries }) {
  return (
    <>
      <div className="container">
        <div className="row gy-3 d-flex justify-content-center p-3">
          {countries.map((country) => (
            <div
              key={country.name.common}
              className={
                "col-lg-3 hover-effect ms-lg-4 p-3 border border-danger text-center"
              }
            >
              <h4 className="text-info">{country.name.common}</h4>
              <img
                width="130"
                height="80"
                src={country.flags.png}
                alt={country.flags.png}
              />
              <h5 className="mt-2">
                <span className="text-danger">Başkent:</span> {country.capital}
              </h5>
              <h5 className="mt-2">
                <span className="text-danger">Kıta:</span> {country.region}
              </h5>
              <Link to={`/${country.ccn3}`} className="btn btn-outline-success">
                Country Detail
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ShowCountries;
