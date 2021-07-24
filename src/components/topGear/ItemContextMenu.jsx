import React, { useState, useEffect } from 'react'

import { Versatility, Critical, Haste, Mastery } from '../../media/gems'

export default function ItemContextMenu({ parentRef, handleInjection }) {
	const [position, setPosition] = useState(null)

	useEffect(() => {
		let parent = null
		const triggerMenu = e => {
			e.preventDefault()
			setPosition({ x: e.clientX, y: e.clientY })
		}
		if (parentRef && parentRef.current) {
			parent = parentRef.current
			parent.addEventListener('contextmenu', triggerMenu)
		}
		return () => parent.removeEventListener('contextmenu', triggerMenu)
	}, [parentRef])

	const inject = gem => {
		setPosition(null)
		handleInjection(gem)
	}

	if (!position) return null
	else
		return (
			<div className='context-menu' style={{ top: position.y - 6, left: position.x - 6 }} onMouseLeave={() => setPosition(null)}>
				<button className='option' onClick={() => inject('mastery')}>
					<img alt='' src={Mastery} />
					<span>+ 16 Mastery</span>
				</button>
				<button className='option' onClick={() => inject('haste')}>
					<img alt='' src={Haste} />
					<span>+ 16 Haste</span>
				</button>
				<button className='option' onClick={() => inject('critical')}>
					<img alt='' src={Critical} />
					<span>+ 16 Critical strike</span>
				</button>
				<button className='option' onClick={() => inject('versatility')}>
					<img alt='' src={Versatility} />
					<span>+ 16 Versatility</span>
				</button>
			</div>
		)
}
