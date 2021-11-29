import React, { useState, createContext } from 'react'

export const CountContext = createContext()

const CountContextProvider = props => {
	const [Count, SetCount] = useState(0)

	return (
		<CountContext.Provider value={{
			Count: Count,
			SetCount: SetCount
		}}>
			{props.children}
		</CountContext.Provider>
	)
}

export default CountContextProvider
