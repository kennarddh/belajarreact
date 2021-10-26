import React from "react";

// component

//styling
import './BackButton.css'


const BackButton = () => {
    return (
        <>
            <a href="/gamelist" className="back-button">
                <img src="/asset/icon/angle-left.svg" alt="angle-left" />
                <p>Kembali ke Game List</p>
            </a>
        </>
    )
}

export default BackButton