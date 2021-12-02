import React from "react";

function FilterCountries({ getCountries }) {
  return (
    <div className="search-buttons flex-wrap d-flex justify-content-center mb-3">
      <button onClick={() => getCountries("all")}>Tüm Kıtalar</button>
      <button onClick={() => getCountries("region/europe")}>Avrupa</button>
      <button onClick={() => getCountries("region/asia")}>Asya</button>
      <button onClick={() => getCountries("region/america")}>America</button>
      <button onClick={() => getCountries("region/africa")}>Afrika</button>
      <button onClick={() => getCountries("region/america")}>Okyanusya</button>
      <button onClick={() => getCountries("region/antarctic")}>
        Antarktika
      </button>
    </div>
  );
}

export default FilterCountries;
