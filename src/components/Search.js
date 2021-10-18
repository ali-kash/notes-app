import React from 'react'
import { BiSearchAlt } from 'react-icons/bi'

const Search = ({ handleSearchNote }) => {
	return (
		<div className='search'>
			<div className='search__bar'>
				<BiSearchAlt size='1.3rem' />
				<input
					onChange={(event) => handleSearchNote(event.target.value)}
					type='text'
					placeholder='type to search...'
				/>
			</div>
		</div>
	)
}

export default Search
