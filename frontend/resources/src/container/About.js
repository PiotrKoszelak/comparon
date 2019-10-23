import React from "react";
import Menu from "./menu/Menu";
import MenuBottom from "./menu/MenuBottom";
import InfoContent from "../statefull/InfoContent";



function About () {
        return(
                <section>
                        <Menu title={'About'} />
                        <InfoContent title={'About'} />
                        <MenuBottom />
                </section>
        );
};

export default About;