import React from "react";

function ShortDesc({ desc }) {
  const descriptionWords = desc.split(" ").slice(0, 4);
  const shortenedDescription = descriptionWords.join(" ");
  return <p dangerouslySetInnerHTML={{ __html: shortenedDescription }} />;
}

export default ShortDesc;
