import React, { useState, useEffect } from 'react'

import Form from 'react-bootstrap/Form'
import Dropdown from 'react-bootstrap/Dropdown'

export default function Filters({ metaData, setFilters, setOrder }) {
	const [statsFilters, setStatsFilters] = useState([])
	const [materialFilter, setMaterialFilter] = useState({})
	const [typeFilter, setTypeFilter] = useState({})
	const [orderBy, setOrderBy] = useState('')
	const [legendariesFilter, setLegendariesFilter] = useState(false)

	const orders = [
		'None',
		'Name',
		'Favorites',
		'Selected',
		'Max iLevel',
		'Min iLevel',
		'Best quality',
		'Low quality',
	]

	const onStatsChange = e => {
		const position = statsFilters.findIndex(el => el === e.currentTarget.value)
		const filtersCopy = [...statsFilters]
		if (position !== -1 && !e.currentTarget.checked) filtersCopy.splice(position, 1)
		else if (position === -1 && e.currentTarget.checked) filtersCopy.push(e.currentTarget.value)
		setStatsFilters(filtersCopy)
	}

	// Restore filters preference
	useEffect(() => {
		const savedPref = localStorage.getItem('raidbots-extension-preferences')
		if (savedPref) {
			const parsedPref = JSON.parse(savedPref)
			setStatsFilters(parsedPref.stats)
			setTypeFilter(parsedPref.type)
			setMaterialFilter(parsedPref.material)
			setLegendariesFilter(parsedPref.legendaries)
			onSort(parsedPref.orderBy)
		}
	}, [])

	// Save preference and trigger callback
	useEffect(() => {
		const filters = {
			material: materialFilter,
			stats: statsFilters,
			type: typeFilter,
			legendaries: legendariesFilter,
		}
		setFilters(filters)
		if (
			Object.keys(materialFilter).length > 0 ||
			statsFilters.length > 0 ||
			Object.keys(typeFilter).length > 0 ||
			orderBy !== '' ||
			legendariesFilter === true
		)
			localStorage.setItem('raidbots-extension-preferences', JSON.stringify({ ...filters, orderBy: orderBy }))
	}, [materialFilter, statsFilters, typeFilter, orderBy, legendariesFilter])

	// Callback to sort
	const onSort = o => {
		setOrderBy(o)
		setOrder(o)
	}

	return (
		<div className='filters-area row'>
			<Dropdown>
				<Dropdown.Toggle>
					{Object.keys(materialFilter).length === 0 || materialFilter.id === 0
						? 'Materials'
						: materialFilter.label}
				</Dropdown.Toggle>
				<Dropdown.Menu>
					{metaData.materials.map((m, i) => (
						<button className='dropdown-item' key={i} value={m.id} onClick={() => setMaterialFilter(m)}>
							{m.label}
						</button>
					))}
				</Dropdown.Menu>
			</Dropdown>

			<Dropdown>
				<Dropdown.Toggle>
					{Object.keys(typeFilter).length === 0 || typeFilter.id === 0 ? 'Item type' : typeFilter.label}
				</Dropdown.Toggle>
				<Dropdown.Menu>
					{metaData.types.map((t, i) => (
						<button className='dropdown-item' key={i} value={t.id} onClick={() => setTypeFilter(t)}>
							{t.label}
						</button>
					))}
				</Dropdown.Menu>
			</Dropdown>

			<Dropdown>
				<Dropdown.Toggle>
					{statsFilters.length === 0 || metaData.stats.length === 0
						? 'Secondary stats'
						: statsFilters
								.map(v => metaData.stats[metaData.stats.findIndex(x => x.id === Number(v))].label)
								.join(', ')}
				</Dropdown.Toggle>
				<Dropdown.Menu>
					{metaData.stats.map((s, i) => (
						<Form.Check
							key={i}
							label={s.label}
							value={s.id}
							onChange={onStatsChange}
							checked={statsFilters.includes(s.id.toString())}
						/>
					))}
				</Dropdown.Menu>
			</Dropdown>

			<Dropdown>
				<Dropdown.Toggle>{orderBy === 'None' || orderBy === '' ? 'Order by' : orderBy}</Dropdown.Toggle>
				<Dropdown.Menu>
					{orders.map((o, i) => (
						<button className='dropdown-item' key={i} onClick={() => onSort(o)}>
							{o}
						</button>
					))}
				</Dropdown.Menu>
			</Dropdown>
			<div className='legendary-filter-wrapper'>
				<Form.Check
					id='Legendary'
					className='legendary-filter'
					checked={legendariesFilter}
					onChange={() => setLegendariesFilter(!legendariesFilter)}
					type='checkbox'
					label='Include legendary items'
					custom
				/>
			</div>
		</div>
	)
}
