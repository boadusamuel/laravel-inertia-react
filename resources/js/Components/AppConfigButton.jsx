import React from "react";

export default function AppConfigButton({ onClick, img, imgAlt }) {
    return <div className="col-3">
        <button className="p-link w-2rem h-2rem" onClick={onClick}>
            <img src={img} className="w-2rem h-2rem"
                 alt={imgAlt}/>
        </button>
    </div>;
}
