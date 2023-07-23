import React from "react";

function HeaderSearch({ data }) {
  return (
    <div className="SearchSugMenu">
    { data.length === 0 ? (
      <label className="Res">No data found</label>
      ) : null}
 
      {data.map((d) => (
        <label className="Res">{d.title}</label>
      ))}

    </div>
  );
}

export default HeaderSearch;
