import React from 'react'

import { Form } from 'react-bootstrap/'

export default function Slider({ item, setIlvl }) {
	return (
		<Form.Control
			type='range'
			defaultValue={item.iLvl}
			step='1'
			onChange={e =>
				setIlvl(item.iLvls.reduce((p, c) => (Math.abs(c - e.currentTarget.value) < Math.abs(p - e.currentTarget.value) ? c : p)))
			}
			min={item.miniLvl}
			max={item.maxiLvl}
			custom
		/>
	)
}
