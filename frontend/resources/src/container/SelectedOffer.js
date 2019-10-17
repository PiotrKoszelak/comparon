import React from "react";
import Menu from "./menu/Menu";
import MenuBottom from "./menu/MenuBottom";
import SelectedOfferContainer from "./selectedOffer/SelectedOfferContainer";



function SelectedOffer () {
        return(
                <section>
                        <Menu title={'SelectedOffer'} />
                        <SelectedOfferContainer />
                        <MenuBottom />
                </section>
        );
};

export default SelectedOffer;