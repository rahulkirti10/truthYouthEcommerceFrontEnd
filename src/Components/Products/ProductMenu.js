import React from "react";
import "../../Css files/Products.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import AddIcon from "@mui/icons-material/Add";
import ProductCard from "./ProductCard";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function ProductMenu({ category }) {
  const apiUrl = process.env.REACT_APP_API_URL;
  const { keyword } = useParams();
  const [products, setProducts] = useState("");

  useEffect(() => {
    if (typeof keyword === "undefined") {
      axios
        .get(
          `${apiUrl}/api/v1/product/getProductByKeyword?keyword=all&pageNo=0`
        )
        .then((response) => {
          setProducts(response.data.data);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      axios
        .get(
          `${apiUrl}/api/v1/product/getProductByKeyword?keyword=${keyword}&pageNo=0`
        )
        .then((response) => {
          setProducts(response.data.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, []);

  const accordionStyle = {
    width: 285,
    borderBottom: "1px solid #E0E0E0",
    "& .MuiAccordionSummary-root": {
      fontWeight: 600,
      fontSize: 18,
    },
    "& .MuiAccordionDetails-root": {
      backgroundColor: "#F1F1F1",
      display: "flex",
      flexDirection: "column",
      fontWeight: 600,
      fontSize: 15,
    },
    "& .MuiAccordionSummary-expandIconWrapper": {
      color: "black",
    },
    "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
      transform: "rotate(120deg)",
    },
  };

  return (
    <div className="ProductMenu">
      <div className="ProductTitle">
        <label className="One">{category}</label>
      </div>

      <div className="ProductSection">
        <div className="ProductFilter">
          <Accordion sx={accordionStyle} elevation={0} disableGutters>
            <AccordionSummary expandIcon={<AddIcon />}>Size</AccordionSummary>
            <AccordionDetails>
              <label>Small</label>
              <label>Medium</label>
              <label>Large</label>
              <label>X Large</label>
            </AccordionDetails>
          </Accordion>

          <Accordion sx={accordionStyle} elevation={0} disableGutters>
            <AccordionSummary expandIcon={<AddIcon />}>Color</AccordionSummary>
            <AccordionDetails>
              <label>Crimson Red</label>
              <label>Seinna Pink</label>
              <label>Teal</label>
              <label>Aquamarine</label>
            </AccordionDetails>
          </Accordion>

          <Accordion sx={accordionStyle} elevation={0} disableGutters>
            <AccordionSummary expandIcon={<AddIcon />}>Brand</AccordionSummary>
            <AccordionDetails>
              <label>Small</label>
              <label>Medium</label>
              <label>Large</label>
              <label>X Large</label>
            </AccordionDetails>
          </Accordion>

          <Accordion sx={accordionStyle} elevation={0} disableGutters>
            <AccordionSummary expandIcon={<AddIcon />}>
              Price Range
            </AccordionSummary>
            <AccordionDetails>
              <label>Small</label>
              <label>Medium</label>
              <label>Large</label>
              <label>X Large</label>
            </AccordionDetails>
          </Accordion>

          <Accordion sx={accordionStyle} elevation={0} disableGutters>
            <AccordionSummary expandIcon={<AddIcon />}>
              Discount
            </AccordionSummary>
            <AccordionDetails>
              <label>Small</label>
              <label>Medium</label>
              <label>Large</label>
              <label>X Large</label>
            </AccordionDetails>
          </Accordion>

          <Accordion sx={accordionStyle} elevation={0} disableGutters>
            <AccordionSummary expandIcon={<AddIcon />}>
              Availability
            </AccordionSummary>
            <AccordionDetails>
              <label>Small</label>
              <label>Medium</label>
              <label>Large</label>
              <label>X Large</label>
            </AccordionDetails>
          </Accordion>
        </div>
        <div className="ProductList">
          <div className="ProductListPage">Sorting.....</div>
          <div className="ProductListCard">
            {products.length !== 0
              ? products.map((d, index) => (
                  <ProductCard
                    image={d.frontImageUrl}
                    name={d.name}
                    subtitle={d.description}
                    original={d.originalPrice}
                    discount={d.discountedPrice}
                    id={d.id}
                    key={index}
                  />
                ))
              : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductMenu;
