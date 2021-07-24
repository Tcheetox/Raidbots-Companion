import React, { useState, useCallback, useEffect, useMemo } from 'react'

import InfiniteScroll from 'react-infinite-scroll-component'
import Loader from '../Loader'
import Item from './Item'
import { useInjection } from '../../hooks/'
import { useContextState, useContextUpdater } from '../../AppData'

export default function Gallery() {
	const { results, filters, searchText, hasData } = useContextState()
	const { setContext } = useContextUpdater()

	const updateRawItem = useCallback(
		item => {
			setContext(d => {
				const updatedRaw = [...d.raw]
				updatedRaw[d.raw.findIndex(i => i.id === item.id)] = item
				return { ...d, raw: updatedRaw }
			})
		},
		[setContext]
	)

	const { handleInjection } = useInjection(updateRawItem)

	const itemsPerPage = 10
	const [page, setPage] = useState(1)

	// Restart pagination if filters or search change
	useEffect(() => setPage(1), [filters, searchText])

	const items = useMemo(() => results.slice(0, results.length >= (page + 1) * itemsPerPage ? (page + 1) * itemsPerPage : results.length), [
		results,
		page,
	])

	return (
		<div className='results'>
			<InfiniteScroll
				dataLength={items.length}
				next={() => setPage(p => p + 1)}
				hasMore={page < Math.ceil(results.length / itemsPerPage)}
				loader={<Loader />}>
				{items.length > 0 ? (
					items.map((i, ii) => <Item item={i} key={ii} updateItem={updateRawItem} handleInjection={handleInjection} />)
				) : (
					<Loader hasData={hasData} />
				)}
			</InfiniteScroll>
		</div>
	)
}
