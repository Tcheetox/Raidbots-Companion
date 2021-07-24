import { useMemo } from 'react'

import { search } from 'ss-search'

export default function useSearch({ raw, searchText, filters }) {
	//	Search and apply filters, then sort the results
	return useMemo(() => {
		const dataLegendaryFiltered = !filters.legendaries ? [...raw].filter(item => item.minQuality < 5) : [...raw]
		const dataFiltered = search(dataLegendaryFiltered, ['name', 'id'], searchText).filter(
			item =>
				(filters.material.id === 0 || filters.material.id === item.material) &&
				(filters.stats.length === 0 || item.stats.sort().join(';').includes(filters.stats.sort().join(';'))) &&
				(filters.type.id === 0 || filters.type.id === item.type)
		)
		// Sort
		const sorter = bo => (bo ? 1 : -1)
		switch (filters.orderBy) {
			case 'Name':
				dataFiltered.sort((x, y) => sorter(x.name > y.name))
				break
			case 'Favourites':
				dataFiltered.sort((x, y) => sorter(x.favourites.length < y.favourites.length))
				break
			case 'Selected':
				dataFiltered.sort((x, y) => sorter(x.selected.length < y.selected.length))
				break
			case 'Max iLevel':
				dataFiltered.sort((x, y) => sorter(x.maxiLvl < y.maxiLvl))
				break
			case 'Min iLevel':
				dataFiltered.sort((x, y) => sorter(x.maxiLvl > y.maxiLvl))
				break
			case 'Best quality':
				dataFiltered.sort((x, y) => sorter(x.maxQuality < y.maxQuality))
				break
			case 'Low quality':
				dataFiltered.sort((x, y) => sorter(x.maxQuality > y.maxQuality))
				break
			default:
				break
		}
		return dataFiltered
	}, [raw, filters, searchText])
}
