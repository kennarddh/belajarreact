import React, { useContext } from 'react'

// context
import { CountContext } from '../../Context/CountContext'

// component

// styling
import './Context.css'

const Context = () => {
	const { Count, SetCount } = useContext(CountContext)

    return (
        <>
            <div className='context-page'>
                <p>Count: {Count}</p>
                <button onClick={() => SetCount(Count + 1)}>Add</button>
                <button onClick={() => SetCount(Count - 1)}>Minus</button>
            </div>
        </>
    )
}

export default Context
