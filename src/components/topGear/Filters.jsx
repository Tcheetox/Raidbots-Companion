import React, { useEffect, useState } from 'react'

import { Form, Dropdown } from 'react-bootstrap'
import { useContextUpdater } from '../../AppData'

function Filters({ metadata }) {
	const { setContext } = useContextUpdater()
	const [show, setShow] = useState({ materials: false, types: false, stats: false, orderBy: false })

	const [filters, setFilters] = useState({
		type: { id: 0, label: 'All' },
		material: { id: 0, label: 'All' },
		stats: [],
		legendaries: false,
		orderBy: 'None',
	})

	const orders = ['None', 'Name', 'Favourites', 'Selected', 'Max iLevel', 'Min iLevel', 'Best quality', 'Low quality']

	const onStatsChange = e => {
		const position = filters.stats.findIndex(el => el === Number(e.currentTarget.value))
		const statsFilter = [...filters.stats]
		if (position !== -1 && !e.currentTarget.checked) statsFilter.splice(position, 1)
		else if (position === -1 && e.currentTarget.checked) statsFilter.push(Number(e.currentTarget.value))
		setFiltersProxy({ ...filters, stats: statsFilter })
	}

	// Use this proxy to avoid re-rendering filters if multiple click on same element
	const setFiltersProxy = f => (JSON.stringify(f) !== JSON.stringify(filters) ? setFilters(f) : null)

	// Propagate local filters to context
	useEffect(() => setContext(c => ({ ...c, filters: filters })), [filters, setContext])

	// Restore filters from browser
	useEffect(() => {
		const savedFilters = localStorage.getItem('raidbots-extension-filters')
		if (savedFilters) setFilters(JSON.parse(savedFilters))
	}, [setFilters])
	// Save filters to browser local storage
	useEffect(() => (async () => localStorage.setItem('raidbots-extension-filters', JSON.stringify(filters)))(), [filters])

	return (
		<div className='filters-area row'>
			<Dropdown
				show={show.materials}
				onMouseEnter={() => setShow(s => ({ ...s, materials: true }))}
				onMouseLeave={() => setShow(s => ({ ...s, materials: false }))}>
				<Dropdown.Toggle id='materials-toggle' className='materials'>
					{filters.material.id === 0 ? 'Materials' : filters.material.label}
				</Dropdown.Toggle>
				<Dropdown.Menu>
					{metadata.materials.map((m, i) => (
						<button className='dropdown-item' key={i} onClick={() => setFiltersProxy({ ...filters, material: m })}>
							{m.label}
						</button>
					))}
				</Dropdown.Menu>
			</Dropdown>

			<Dropdown
				show={show.types}
				onMouseEnter={() => setShow(s => ({ ...s, types: true }))}
				onMouseLeave={() => setShow(s => ({ ...s, types: false }))}>
				<Dropdown.Toggle>{filters.type.id === 0 ? 'Item type' : filters.type.label}</Dropdown.Toggle>
				<Dropdown.Menu>
					{metadata.types.map((t, i) => (
						<button className='dropdown-item' key={i} onClick={() => setFiltersProxy({ ...filters, type: t })}>
							{t.label}
						</button>
					))}
				</Dropdown.Menu>
			</Dropdown>

			<Dropdown
				show={show.stats}
				onMouseEnter={() => setShow(s => ({ ...s, stats: true }))}
				onMouseLeave={() => setShow(s => ({ ...s, stats: false }))}>
				<Dropdown.Toggle>
					{filters.stats.length === 0 || metadata.stats.length === 0
						? 'Secondary stats'
						: filters.stats.map(v => metadata.stats[metadata.stats.findIndex(x => x.id === Number(v))].label).join(', ')}
				</Dropdown.Toggle>
				<Dropdown.Menu>
					{metadata.stats.map((s, i) => (
						<Form.Check key={i} label={s.label} value={s.id} onChange={onStatsChange} checked={filters.stats.includes(s.id)} />
					))}
				</Dropdown.Menu>
			</Dropdown>

			<Dropdown
				show={show.orderBy}
				onMouseEnter={() => setShow(s => ({ ...s, orderBy: true }))}
				onMouseLeave={() => setShow(s => ({ ...s, orderBy: false }))}>
				<Dropdown.Toggle>{filters.orderBy === 'None' ? 'Order by' : filters.orderBy}</Dropdown.Toggle>
				<Dropdown.Menu>
					{orders.map((o, i) => (
						<button className='dropdown-item' key={i} onClick={() => setFiltersProxy({ ...filters, orderBy: o })}>
							{o}
						</button>
					))}
				</Dropdown.Menu>
			</Dropdown>
			<div className='legendary-filter-wrapper'>
				<Form.Check
					id='Legendary'
					className='legendary-filter'
					checked={filters.legendaries}
					onChange={() => setFiltersProxy({ ...filters, legendaries: !filters.legendaries })}
					type='checkbox'
					label='Include legendary items'
				/>
			</div>
		</div>
	)
}
export default React.memo(Filters)
