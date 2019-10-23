import React from "react";
import Menu from "./menu/Menu";
import MenuBottom from "./menu/MenuBottom";
import InfoContent from "../statefull/InfoContent";



function TermsOfUse () {
        return(
                <section>
                        <Menu title={'TermsOfUse'} />
                        <InfoContent title={'TermsOfUse'} />
                        <MenuBottom />
                </section>
        );
};

export default TermsOfUse;