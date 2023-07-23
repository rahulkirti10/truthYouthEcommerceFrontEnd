import React from "react";

function HeaderSearch({ data }) {
  return (
    <div className="SearchSugMenu">
      {data.map((d) => (
        <label className="Res">{d.title}</label>
      ))}
    </div>
  );
}

export default HeaderSearch;
