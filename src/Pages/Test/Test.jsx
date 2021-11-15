import React, { useState } from "react";

import './Test.css'

const Test = () => {
    // false = light mode

    const [Mode, SetMode] = useState(false)

    return (
        <>
            <div className={`test-container ${Mode && 'dark-mode'}`}>
                <button onClick={(event) => {SetMode(!Mode)}}>{Mode ? 'Dark mode' : 'Light mode'}</button>
            </div>
        </>
    )
}

export default Test