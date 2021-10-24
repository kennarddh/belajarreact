import React from "react"

// component

//styling
import "./Search.css"

const Search = () => {
    return (
        <>
            <section className="search">
                <div className="wrap">
                    <img src="search.svg" className="image" alt="search" />
                    <input type="text" className="input" placeholder="Search" />
                </div>
            </section>
        </>
    )
}

export default Search