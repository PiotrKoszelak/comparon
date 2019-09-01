import React from "react";
import SelectContainer from "./offers/SelectContainer";
import OffersContainer from "./offers/OffersContainer";
import Header from "./offers/Header";
import Menu from "./menu/Menu";
import Empty from "./offers/Empty";


function Offers () {
        return(
                <section>
                        <Menu title={'Offers'} />
                        <Empty />
                        <Header />
                        <SelectContainer />
                        <OffersContainer />
                </section>
        );
};

export default Offers;