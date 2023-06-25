import React from "react";
import Announcement from "./Announcement";
import Brands from "./Brands";
import Collections from "./Collections";
import ExtraSection from "./ExtraSection";
import NewArrivals from "./NewArrivals";
import SeeMore from "./SeeMore";

function HomePage() {
  return (
    <>
      <Announcement />
      <SeeMore />
      <NewArrivals />
      <Collections />
      <Brands />
      <ExtraSection />
    </>
  );
}

export default HomePage;
