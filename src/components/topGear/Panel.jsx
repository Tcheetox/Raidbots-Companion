import React from 'react'

import Gallery from './Gallery'
import Filters from './Filters'
import Search from './Search'
import Links from '../Links'
import { AppDataProvider } from '../../AppData'

export default function Panel({ data, metadata }) {
	if (Object.keys(metadata).length === 0) return null
	else
		return (
			<div className='panel'>
				<AppDataProvider data={data} metadata={metadata}>
					<Links />
					<Search />
					<Filters metadata={metadata} />
					<Gallery />
				</AppDataProvider>
			</div>
		)
}
