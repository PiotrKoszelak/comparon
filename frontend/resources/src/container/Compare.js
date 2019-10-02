import React from "react";
import Menu from "./menu/Menu";
import MenuBottom from "./menu/MenuBottom";
import CompareContainer from "./compare/CompareContainer";



function Compare () {
        return(
                <section>
                        <Menu title={'Compare'} />
                        <CompareContainer />
                        <MenuBottom />
                </section>
        );
};

export default Compare;