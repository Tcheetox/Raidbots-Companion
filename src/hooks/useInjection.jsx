import { useCallback } from 'react'

import { tryHandleInjection } from '../customs'

export default function useInjection(updateItem) {
	const handleInjection = useCallback(
		(item, gem = null) => {
			const add = !item.selected.includes(item.iLvl)

			// Add extra gem
			let gemString = ''
			switch (gem) {
				case 'haste':
					gemString = ',gem_id=173128'
					break
				case 'mastery':
					gemString = ',gem_id=173130'
					break
				case 'critical':
					gemString = ',gem_id=173127'
					break
				case 'versatility':
					gemString = ',gem_id=173129'
					break
				default:
					break
			}

			// Override gemString with REGEX pattern if remove (i.e. will remove any gem)
			gemString = add ? gemString : '(.*)'
			tryHandleInjection(
				`# ${item.slot}=,id=${item.id},bonus_id=${
					item.bonus.length > 0 && item.bonus[item.iLvls.indexOf(item.iLvl)]
						? item.bonus[item.iLvls.indexOf(item.iLvl)].replaceAll(':', '/')
						: ''
				},ilevel=${item.iLvl}${gemString} # ADDED BY EXTENSION`,
				r => {
					const newSelection = [...item.selected]
					if (item.selected.includes(item.iLvl) && r) newSelection.splice(item.selected.indexOf(item.iLvl), 1)
					else if (!item.selected.includes(item.iLvl) && r) newSelection.push(item.iLvl)
					updateItem({ ...item, selected: newSelection })
				},
				add
			)
		},
		[updateItem]
	)
	return { handleInjection: handleInjection }
}
