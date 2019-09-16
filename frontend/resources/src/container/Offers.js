import React from "react";
import SelectContainer from "./offers/SelectContainer";
import OffersContainer from "./offers/OffersContainer";
import Header from "./offers/Header";
import Menu from "./menu/Menu";
import MenuBottom from "./menu/MenuBottom";
import Empty from "./offers/Empty";


function Offers () {
        return(
                <div>
                        <Menu title={'Offers'} />
                        <Empty />
                        <Header />
                        <SelectContainer />
                        <OffersContainer />
                        <MenuBottom />
                </div>
        );
};

export default Offers;