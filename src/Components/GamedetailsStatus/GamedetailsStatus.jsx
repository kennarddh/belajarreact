import React  from "react";

// component

//styling
import './GamedetailsStatus.css'


const GamedetailsStatus = (props) => {
    return (
        <>
            <div className={`GamedetailsStatus${('played' in props) ? ' played' : ''}`}>
                <p className="item">{('played' in props) ? 'Pernah dimainkan' : 'Belum dimainkan'}</p>
            </div>
        </>
    )
}

export default GamedetailsStatus