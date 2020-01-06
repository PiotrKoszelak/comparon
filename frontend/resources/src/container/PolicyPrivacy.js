import React from "react";
import Menu from "./menu/Menu";
import MenuBottom from "./menu/MenuBottom";
import InfoContent from "../statefull/InfoContent";



function PolicyPrivacy () {
        return(
                <section>
                        <Menu />
                        <InfoContent title={'PolicyPrivacy'} />
                        <MenuBottom title={'PolicyPrivacy'} />
                </section>
        );
};

export default PolicyPrivacy;