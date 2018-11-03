import React from "react";
import Textbox from "./Textbox";
import Picture from "./Picture";
import catagoriesovertime from "../images/sdds.png";
const Info2 = () => {
  return (
    <div className="info2">
      <Textbox
        header={"Catagories Over Time"}
        body={
          "For nearly ten years, people pledged for money mostly on Film & Video and Technology. While many category fundings were declining linearly after 2015, the funding of Film & Video Making area still kept at about the same level. In fact, the platform raised the most amount of funding at the year of 2015."
        }
      />
      <Picture source={catagoriesovertime} alt="Catagories Over TIme" />
    </div>
  );
};
export default Info2;
