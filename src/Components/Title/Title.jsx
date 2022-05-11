import React from "react"

// component

//styling
import "./Title.css"

const Title = (props) => {
    return (
        <>
            <section className="header">
                <h1>{props.title}</h1>
            </section>
        </>
    )
}

export default Title