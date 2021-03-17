import React, { useState, useEffect, useRef } from 'react'

import { search } from 'ss-search'
import Form from 'react-bootstrap/Form'
import Gallery from './Gallery'
import Filters from './Filters'

export default function Panel({ fetchedData, textArea }) {
	const [searchText, setSearchText] = useState('')
	const [data, setData] = useState([])
	const [metaData, setMetaData] = useState({
		materials: [],
		stats: [],
		types: [],
	})
	const [results, setResults] = useState([])
	const [filters, setFilters] = useState({})
	const [orderBy, setOrderBy] = useState('')
	const [raidBotsMemory, setRaidBotsMemory] = useState([])
	const [memoryAdded, setMemoryAdded] = useState(false)

	const dataRef = useRef()
	dataRef.current = data

	// Read local favorites only once
	const [localFavorites, setLocalFavorites] = useState([])
	useEffect(() => {
		const savedFavorites = localStorage.getItem('raidbots-extension-favorites')
		if (savedFavorites) setLocalFavorites(JSON.parse(savedFavorites))
	}, [])
	useEffect(() => localStorage.setItem('raidbots-extension-favorites', JSON.stringify(localFavorites)), [
		localFavorites,
	])

	// Initial data enhancement
	useEffect(() => {
		if ('items' in fetchedData && 'metaData' in fetchedData) {
			setData(() =>
				fetchedData.items.map(x => {
					// Restore item memory from Raidbots textarea
					const filteredMemory = raidBotsMemory
						.filter(
							item =>
								item.id === x.id &&
								(item.bonus.length === 0 || item.bonus === x.bonus[x.iLvls.indexOf(item.iLvl)])
						)
						.map(y => y.iLvl)
					// Restore item favorites
					const favoriteMemory = localFavorites.find(
						item => item.id === x.id && arrayEquals(item.bonus, x.bonus)
					)
					// Trigger items filtering before actual display
					if (filteredMemory.length > 0) setMemoryAdded(true)
					return {
						...x,
						// iLvl is set as the highest iLvl from favorite or highest from raidbots memory or default from input file
						iLvl:
							favoriteMemory !== undefined
								? Math.max(...favoriteMemory.favorites)
								: filteredMemory.length > 0
								? Math.max(...filteredMemory)
								: x.iLvl,
						miniLvl: Math.min(...x.iLvls),
						maxiLvl: Math.max(...x.iLvls),
						selected: filteredMemory.length > 0 ? filteredMemory : [],
						favorites: favoriteMemory !== undefined ? favoriteMemory.favorites : [],
					}
				})
			)
			setMetaData(fetchedData.metaData)
		}
	}, [fetchedData, raidBotsMemory, localFavorites])

	// Treat initial data from RaidBots and save it to state
	useEffect(() => {
		if (textArea !== '') {
			const existingItems = []
			textArea
				.split('\n')
				.forEach(l =>
					l.includes('# ADDED BY EXTENSION')
						? existingItems.push(l.replace(' # ADDED BY EXTENSION', '').split(','))
						: null
				)
			setRaidBotsMemory(() =>
				existingItems.map(item => ({
					id: Number(item[1].replace('id=', '')),
					bonus: item[2].replace('bonus_id=', '').replaceAll('/', ':'),
					iLvl: Number(item[3].replace('ilevel=', '')),
				}))
			)
		}
	}, [textArea])

	// Implement item selection memory
	async function onItemChange(i) {
		// Check whether favorites must be adapted
		const favoritesIndex = localFavorites.findIndex(
			item => item.id === i.id && arrayEquals(item.bonus, i.bonus)
		)

		if (favoritesIndex !== -1 || i.favorites.length > 0) {
			const localFavoritesCopy = [...localFavorites]
			if (favoritesIndex === -1 && i.favorites.length > 0) localFavoritesCopy.push(i)
			else if (
				favoritesIndex !== -1 &&
				!arrayEquals(i.favorites, localFavorites[favoritesIndex].favorites) &&
				i.favorites.length > 0
			)
				localFavoritesCopy[favoritesIndex].favorites = i.favorites
			else if (favoritesIndex !== -1 && i.favorites.length === 0) localFavoritesCopy.splice(favoritesIndex, 1)
			setLocalFavorites(localFavoritesCopy)
		}

		// Adjust item in memory
		const dataCopy = [...data]
		dataCopy[data.findIndex(e => e.id === i.id)] = i
		setData(dataCopy)
	}

	// Compare array of primtives
	function arrayEquals(a, b) {
		return (
			Array.isArray(a) &&
			Array.isArray(b) &&
			a.length === b.length &&
			a.every((val, index) => val === b[index])
		)
	}

	// Search and apply filters, then sort the results
	useEffect(() => {
		const dataLegFiltered = !filters.legendaries
			? [...dataRef.current].filter(item => item.minQuality < 5)
			: [...dataRef.current]
		const dataCopy =
			searchText === ''
				? dataLegFiltered
				: !isNaN(searchText) && Number.isInteger(parseFloat(searchText))
				? search(dataLegFiltered, ['id'], searchText)
				: search(dataLegFiltered, ['name'], searchText)
		const newResults = []
		dataCopy.forEach(item => {
			if (
				(filters.material.id === undefined ||
					filters.material.id === 0 ||
					(filters.material.id !== 0 && Number(filters.material.id) === Number(item.material))) && // Filter on material
				(filters.stats.length === 0 ||
					item.stats.sort().join(';').includes(filters.stats.sort().join(';'))) && // Filter on secondary stats
				(filters.type.id === undefined ||
					filters.type.id === 0 ||
					(filters.type.id !== 0 && Number(filters.type.id) === Number(item.type)))
			)
				// Filter on item type
				newResults.push(item)
		})
		// Sort
		switch (orderBy) {
			case 'Name':
				newResults.sort((x, y) => (x.name > y.name ? 1 : -1))
				break
			case 'Favorites':
				newResults.sort((x, y) => (x.favorites.length > y.favorites.length ? -1 : 1))
				break
			case 'Selected':
				newResults.sort((x, y) => (x.selected.length > y.selected.length ? -1 : 1))
				break
			case 'Max iLevel':
				newResults.sort((x, y) => (x.maxiLvl < y.maxiLvl ? 1 : -1))
				break
			case 'Min iLevel':
				newResults.sort((x, y) => (x.maxiLvl < y.maxiLvl ? -1 : 1))
				break
			case 'Best quality':
				newResults.sort((x, y) => (x.maxQuality < y.maxQuality ? 1 : -1))
				break
			case 'Low quality':
				newResults.sort((x, y) => (x.maxQuality < y.maxQuality ? -1 : 1))
				break
			default:
				break
		}
		setResults(newResults)
	}, [data.length, filters, searchText, orderBy, memoryAdded])

	return (
		<div className='panel'>
			<Form.Group className='search-area'>
				<Form.Control
					type='text'
					placeholder='Search item(s)'
					name='searchText'
					value={searchText}
					onChange={e => setSearchText(e.currentTarget.value)}
					className='search-box'
				/>
			</Form.Group>
			<Filters metaData={metaData} setFilters={setFilters} setOrder={setOrderBy} />
			<div className='results'>
				<Gallery displayData={results} onItemChange={i => onItemChange(i)} />
			</div>
		</div>
	)
}
