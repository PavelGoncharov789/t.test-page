import React from "react";

import "./style.css"; 
import { CirceyaSVG } from "../../svg/CirceyaSVG";

export const Header = () => {
    return <header>
        <div className="header_content">
                <CirceyaSVG />
            <span className="header_text">+7 (495) 495-49-54</span>
        </div>
    </header>
}