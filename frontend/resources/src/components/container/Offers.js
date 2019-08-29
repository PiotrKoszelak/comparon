import React from "react";
import SelectContainer from "./offers/SelectContainer";
import OffersContainer from "./offers/OffersContainer";
import Header from "./offers/Header";
import Menu from "./menu/Menu";


function Offers () {
        return(
                <div>
                        <Menu />
                        <Header />
                        <SelectContainer />
                        <OffersContainer />
                </div>
        );
};

export default Offers;