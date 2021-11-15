import React from 'react'

// component

//styling
import './BackButton.css'

const BackButton = (props) => {
	return (
		<>
			<a href='/gamelist' className='back-button'>
				<img
					src='/asset/icon/angle-left.svg'
					alt='angle-left'
					className='angle-left'
					style={
						!props.DarkMode
							? {
                                filter: 'invert(23%) sepia(95%) saturate(407%) hue-rotate(137deg) brightness(96%) contrast(92%)',
                            }
							: {
                                filter: 'invert(100%) sepia(25%) saturate(6427%) hue-rotate(295deg) brightness(132%) contrast(107%)',
                            }
					}
				/>
				<p>Kembali ke Game List</p>
			</a>
		</>
	)
}

export default BackButton
