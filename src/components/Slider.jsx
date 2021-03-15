import React from 'react'

import Form from 'react-bootstrap/Form'

export default function Slider({ item, setIlvl }) {
	const onSlide = e => {
		const closest = item.iLvls.reduce(function (prev, curr) {
			return Math.abs(curr - e.currentTarget.value) < Math.abs(prev - e.currentTarget.value) ? curr : prev
		})
		setIlvl(closest)
	}

	return (
		<Form.Control
			type='range'
			defaultValue={item.iLvl}
			step='1'
			onChange={onSlide}
			min={item.miniLvl}
			max={item.maxiLvl}
			custom
		/>
	)
}
