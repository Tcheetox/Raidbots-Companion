import { useCallback } from 'react'

export default function useDataEnhancer() {
	return useCallback((data, textArea) => {
		let raidBotsMemory = []
		if (textArea !== '') {
			const existingItems = []
			textArea
				.split('\n')
				.forEach(l => (l.includes('# ADDED BY EXTENSION') ? existingItems.push(l.replace(' # ADDED BY EXTENSION', '').split(',')) : null))
			raidBotsMemory = existingItems.map(item => ({
				id: Number(item[1].replace('id=', '')),
				bonus: item[2].replace('bonus_id=', '').replaceAll('/', ':'),
				iLvl: Number(item[3].replace('ilevel=', '')),
			}))
		}

		return data.items.map(x => {
			// Restore item memory from Raidbots textarea
			const filteredMemory = raidBotsMemory
				.filter(item => item.id === x.id && (item.bonus.length === 0 || item.bonus === x.bonus[x.iLvls.indexOf(item.iLvl)]))
				.map(y => y.iLvl)
			const filteredMemoryMax = filteredMemory.length > 0 ? Math.max(...filteredMemory) : null
			const defaultSelection = 'selected' in x ? x.selected : []
			return {
				...x,
				// iLvl is set as the highest iLvl from favorite or highest from raidbots memory or default from input file
				iLvl: filteredMemoryMax ?? x.iLvl,
				miniLvl: Math.min(...x.iLvls),
				maxiLvl: Math.max(...x.iLvls),
				selected: textArea !== '' ? filteredMemory : defaultSelection,
				favourites: x.favourites ?? [],
			}
		})
	}, [])
}
