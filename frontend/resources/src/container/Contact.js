import React from "react";
import Menu from "./menu/Menu";
import MenuBottom from "./menu/MenuBottom";
import InfoContent from "../statefull/InfoContent";



function Contact () {
        return(
                <section>
                        <Menu title={'Contact'} />
                        <InfoContent title={'Contact'} />
                        <MenuBottom />
                </section>
        );
};

export default Contact;