import React, { useState, useEffect } from 'react'

import Slider from './Slider'
import { linkTab, tryHandleInjection } from '../customs.js'
import StarBorder from '@material-ui/icons/StarBorder'
import StarFull from '@material-ui/icons/Star'

// TODO: learn about React.memo and callback to enhance this crap!
// NOTE: we could possibly cleanup Panel.jsx (-> useEffect) and easily avoid useless Item.jsx re-rendering

export default function Item({ onItemChange, item }) {
	const [iLvl, setIlvl] = useState()
	const [selected, setSelected] = useState([])
	const [favorites, setFavorites] = useState([])

	useEffect(() => {
		setIlvl(item.iLvl)
		setSelected(item.selected)
		setFavorites(item.favorites)
	}, [item])

	const handleDoubleClick = () =>
		tryHandleInjection(
			`# ${item.slot}=,id=${item.id},bonus_id=${
				item.bonus.length > 0 ? item.bonus[item.iLvls.indexOf(iLvl)].replaceAll(':', '/') : ''
			},ilevel=${iLvl} # ADDED BY EXTENSION`,
			r => {
				const selectedCopy = [...selected]
				if (selected.includes(iLvl) && r) {
					selectedCopy.splice(selected.indexOf(iLvl), 1)
					setSelected(selectedCopy)
				} else if (!selected.includes(iLvl) && r) {
					selectedCopy.push(iLvl)
					setSelected(selectedCopy)
				}
				onItemChange({ ...item, iLvl: iLvl, selected: selectedCopy, favorites: favorites })
			},
			!selected.includes(iLvl)
		)

	const handleILvlChange = il => {
		onItemChange({ ...item, iLvl: il, selected: selected, favorites: favorites })
		setIlvl(il)
	}

	const handleFavoritesChange = () => {
		const favIndex = favorites.indexOf(iLvl)
		const newFavorites = [...favorites]
		if (favIndex !== -1) newFavorites.splice(favIndex, 1)
		else newFavorites.push(iLvl)
		setFavorites(newFavorites)
		onItemChange({ ...item, iLvl: iLvl, selected: selected, favorites: newFavorites })
	}

	return (
		<div className={`item ${selected.includes(iLvl) ? 'selected' : ''}`} onDoubleClick={handleDoubleClick}>
			<a
				onClick={linkTab}
				href={`//www.wowhead.com/item=${item.id}?bonus=${item.bonus[item.iLvls.indexOf(iLvl)]}&ilvl=${iLvl}`}
				target='_blank'
				rel='noreferrer'>
				<img
					alt={item.icon}
					src={`https://www.raidbots.com/static/images/icons/36/${item.icon}.png`}
					className={`item-icon q${item.iLvls.length > 1 && iLvl > 171 ? item.maxQuality : item.minQuality}`}
				/>
			</a>
			<div className='item-info'>
				<div className='item-info-row' title={`${item.name} (${iLvl})`}>
					<span className='item-name'>{item.name}</span>
					<span className='item-ilevel'>({iLvl})</span>
				</div>
				<div className='item-info-ilevels'>
					{item.iLvls.length > 6 ? (
						<div className='iLvl slider'>
							<span>{item.miniLvl}</span>
							<Slider item={item} setIlvl={handleILvlChange} />
							<span>{item.maxiLvl}</span>
						</div>
					) : (
						item.iLvls.map((x, i) => (
							<button
								key={i}
								onClick={() => handleILvlChange(x)}
								className={`iLvl ${x === iLvl && item.iLvls.length > 1 ? 'selected' : ''}`}>
								{x}
							</button>
						))
					)}
				</div>
			</div>
			{favorites.includes(iLvl) ? (
				<StarFull className='star' onClick={() => handleFavoritesChange()} />
			) : (
				<StarBorder className='star' onClick={() => handleFavoritesChange()} />
			)}
		</div>
	)
}
