import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function HeaderSearch({ data }) {
  const apiUrl = process.env.REACT_APP_API_URL;
  const navigate = useNavigate();

  const handleClilckKeyword = (e) => {
    const keyword = e;
    navigate(`/products/${keyword}`)
    // axios
    //   .get(`${apiUrl}/api/v1/product/getProductByKeyword?keyword=${keyword}&pageNo=0`)
    //   .then((response) => {
    //     // Handle the response data here if needed
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
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
