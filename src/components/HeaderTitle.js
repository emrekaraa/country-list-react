import React from "react";

function HeaderTitle({ countries }) {
  return <h2 className="mt-3 text-center">Ülkeler ({countries.length})</h2>;
}

export default HeaderTitle;
