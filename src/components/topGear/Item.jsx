import React, { useRef } from 'react'

import Slider from './Slider'
import { linkTab } from '../../customs.js'
import StarBorder from '@material-ui/icons/StarBorder'
import StarFull from '@material-ui/icons/Star'
import cx from 'classnames'
import ItemContextMenu from './ItemContextMenu'

function Item({ updateItem, handleInjection, item }) {
	const itemRef = useRef()

	const onFavouriteChange = () => {
		const favIndex = item.favourites.indexOf(item.iLvl)
		const newFavourites = [...item.favourites]
		if (favIndex !== -1) newFavourites.splice(favIndex, 1)
		else newFavourites.push(item.iLvl)
		updateItem({ ...item, favourites: newFavourites })
	}

	// Gems (context menu only available for help, neck, belt, ring, wrist)
	return (
		<div ref={itemRef} className={cx('item', { selected: item.selected.includes(item.iLvl) })} onDoubleClick={() => handleInjection(item)}>
			{[11, 9, 2, 1, 6].includes(item.type) ? (
				<ItemContextMenu parentRef={itemRef} handleInjection={gem => handleInjection(item, gem)} />
			) : null}
			<a
				onClick={linkTab}
				href={`//www.wowhead.com/item=${item.id}?bonus=${item.bonus[item.iLvls.indexOf(item.iLvl)]}&ilvl=${item.iLvl}`}
				target='_blank'
				rel='noreferrer'>
				<img
					alt=''
					src={`https://www.raidbots.com/static/images/icons/36/${item.icon}.png`}
					className={`item-icon q${item.iLvls.length > 1 && item.iLvl > 171 ? item.maxQuality : item.minQuality}`}
				/>
			</a>
			<div className='item-info'>
				<div className='item-info-row' title={`${item.name} (${item.iLvl})`}>
					<span className='item-name'>{item.name}</span>
					<span className='item-ilevel'>({item.iLvl})</span>
				</div>
				<div className='item-info-ilevels'>
					{item.iLvls.length > 2 ? (
						<div className='iLvl slider'>
							<span>{item.miniLvl}</span>
							<Slider item={item} setIlvl={x => updateItem({ ...item, iLvl: x })} />
							<span>{item.maxiLvl}</span>
						</div>
					) : (
						item.iLvls.map((x, i) => (
							<button
								key={i}
								onClick={() => updateItem({ ...item, iLvl: x })}
								className={cx('iLvl', { selected: x === item.iLvl && item.iLvls.length > 1 })}>
								{x}
							</button>
						))
					)}
				</div>
			</div>
			{item.favourites.includes(item.iLvl) ? (
				<StarFull className='star' onClick={onFavouriteChange} />
			) : (
				<StarBorder className='star' onClick={onFavouriteChange} />
			)}
		</div>
	)
}
export default React.memo(Item)
