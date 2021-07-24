import React from 'react'

import { Spinner } from 'react-bootstrap/'

export default function Loader({ hasData }) {
	if (!hasData)
		return (
			<div className='loader-wrapper'>
				<Spinner animation='border' role='status' />
			</div>
		)
	else return <div className='no-results'>No items found</div>
}
