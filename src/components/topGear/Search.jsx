import React, { useState } from 'react'

import { Form } from 'react-bootstrap/'
import { useContextUpdater } from '../../AppData'

export default function Search() {
	const [searchText, setSearchText] = useState('')
	const { setContext } = useContextUpdater()

	return (
		<Form.Group className='search-area'>
			<Form.Control
				type='text'
				placeholder='Search item(s)'
				name='searchText'
				value={searchText}
				onChange={e => {
					const text = e.currentTarget.value
					setSearchText(text)
					setContext(c => ({ ...c, searchText: text }))
				}}
				className='search-box'
			/>
		</Form.Group>
	)
}
