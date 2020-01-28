import React from "react";
import Menu from "./menu/Menu";
import MenuBottom from "./menu/MenuBottom";
import InfoContent from "../statefull/InfoContent";



function TermsOfUse () {
        return(
                <section>
                        <Menu />
                        <InfoContent title={'TermsOfUse'} />
                        <MenuBottom title={'TermsOfUse'} />
                </section>
        );
};

export default TermsOfUse;