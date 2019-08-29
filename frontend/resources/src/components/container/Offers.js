import React from "react";
import SelectContainer from "./offers/SelectContainer";
import OffersContainer from "./offers/OffersContainer";
import Header from "./offers/Header";
import Menu from "./menu/Menu";


function Offers () {
        return(
                <section>
                        <Menu title={'Offers'} />
                        <Header />
                        <SelectContainer />
                        <OffersContainer />
                </section>
        );
};

export default Offers;