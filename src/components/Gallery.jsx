import React, { useState, useEffect } from 'react'

import InfiniteScroll from 'react-infinite-scroll-component'
import Loader from './Loader'
import Item from './Item'

export default function Gallery({ displayData, onItemChange }) {
	const itemsPerPage = 20
	const [items, setItems] = useState([])
	const [page, setPage] = useState(1)

	// Initial display and show more when page is updated
	useEffect(
		() =>
			setItems(
				displayData.slice(
					0,
					displayData.length >= (page + 1) * itemsPerPage ? (page + 1) * itemsPerPage : displayData.length
				)
			),
		[displayData, page]
	)

	// Restart pagination if data change
	useEffect(() => setPage(1), [displayData])

	return (
		<InfiniteScroll
			dataLength={items.length}
			next={() => setPage(p => p + 1)}
			hasMore={page < Math.ceil(displayData.length / itemsPerPage)}
			loader={<Loader />}>
			{items ? (
				items.map((i, ii) => <Item item={i} key={ii} onItemChange={p => onItemChange(p)} />)
			) : (
				<Loader />
			)}
		</InfiniteScroll>
	)
}
