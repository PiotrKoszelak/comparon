import React from "react";
import Menu from "./menu/Menu";
import MenuBottom from "./menu/MenuBottom";
import InfoContent from "../statefull/InfoContent";



function PolicyPrivacy () {
        return(
                <section>
                        <Menu title={'PolicyPrivacy'} />
                        <InfoContent title={'PolicyPrivacy'} />
                        <MenuBottom />
                </section>
        );
};

export default PolicyPrivacy;