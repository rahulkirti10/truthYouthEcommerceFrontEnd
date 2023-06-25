import React from "react";
import "../../Css files/Products.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import AddIcon from "@mui/icons-material/Add";
import ProductCard from "./ProductCard";

function ProductMenu({ category }) {
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
            <ProductCard
              image="../Images/Tshirt1.png"
              name="HRX by Hrithik Roshan"
              subtitle="Running Bio-Wash T-shirt"
              price="Rs. 454"
            />
            <ProductCard
              image="../Images/Tshirt2.png"
              name="Park Avenue"
              subtitle="Men Polo Collar Slim Fit T-shirt"
              price="Rs. 674"
            />
            <ProductCard
              image="../Images/Tshirt3.png"
              name="HRX by Hrithik Roshan"
              subtitle="Men Navy Blue Printed Sweatshirt"
              price="Rs. 599"
            />

            <ProductCard
              image="../Images/Tshirt4.png"
              name="Roadster"
              subtitle="Shadow Check Casual Shirt"
              price="Rs. 779"
            />
            <ProductCard
              image="../Images/Tshirt2.png"
              name="Park Avenue"
              subtitle="Men Polo Collar Slim Fit T-shirt"
              price="Rs. 674"
            />
            <ProductCard
              image="../Images/Tshirt3.png"
              name="HRX by Hrithik Roshan"
              subtitle="Men Navy Blue Printed Sweatshirt"
              price="Rs. 599"
            />

            <ProductCard
              image="../Images/Tshirt4.png"
              name="Roadster"
              subtitle="Shadow Check Casual Shirt"
              price="Rs. 779"
            />
            <ProductCard
              image="../Images/Tshirt2.png"
              name="Park Avenue"
              subtitle="Men Polo Collar Slim Fit T-shirt"
              price="Rs. 674"
            />
            <ProductCard
              image="../Images/Tshirt3.png"
              name="HRX by Hrithik Roshan"
              subtitle="Men Navy Blue Printed Sweatshirt"
              price="Rs. 599"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductMenu;
