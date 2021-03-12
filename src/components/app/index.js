import React, { useState } from "react";
import { ContentWrapper, Logo } from "./styled";
import { Card } from "../card";
import svg from "../../assets/img/sprite.svg";

export const App = () => {
    const [isModalOpen, setModalOpen] = useState(false);

    return (
        <ContentWrapper>
            <div>
                <Logo>
                    <use xlinkHref={svg + "#logo"}></use>
                </Logo>
            </div>
        </ContentWrapper>
    );
};
