import React from "react";

function Countries({ countries }) {
  return (
    <>
      {countries.map((country) => (
        <div
          className={
            "col-lg-3 hover-effect ms-4 p-3 border border-danger text-center"
          }
          key={country.name.common}
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
        </div>
      ))}
    </>
  );
}

export default Countries;
