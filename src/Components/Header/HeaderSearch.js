import React from "react";
import { useNavigate } from "react-router-dom";

function HeaderSearch({ data }) {
  const navigate = useNavigate();

  const handleClilckKeyword = (e) => {
    const keyword = e;
    navigate(`/products/${keyword}`)
  };

  return (
    <div className="SearchSugMenu">
      {data.length === 0 ? (
        <label className="Res">No result found</label>
      ) : null}
 
      {data.map((d) => (
        <label className="Res" onClick={() => handleClilckKeyword(d.keywords)}>{d.keywords}</label>
      ))}
    </div>
  );
}

export default HeaderSearch;
