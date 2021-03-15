import React, { useState, useEffect } from 'react'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import { linkPage, linkTab, tabUrl, boxValue } from './customs.js'
import Panel from './components/Panel'

// import Test from './components/Test.jsx'

export default function App() {
	const [data, setData] = useState({})
	const [tab, setTab] = useState('')
	const [textArea, setTextArea] = useState('')

	// Try to get data from browser cache otherwise fetch
	async function retrieveData() {
		try {
			const dataStore = localStorage.getItem('raidbots-extension')
			if (dataStore) {
				const parsedStore = JSON.parse(dataStore)
				// Check if data is younger than 2hrs
				if (Date.now() - parsedStore.timestamp < 7200000) {
					setData(parsedStore.value)
					console.log('> DATABASE ACQUIRED FROM LOCAL STORAGE')
					return
				}
			}
		} catch (err) {
			console.log("! Couldn't retrieve data from browser local storage...")
			console.log(err.message)
		}
		fetchData()
	}

	// Fetch data from the web if not in cache or too old
	async function fetchData() {
		try {
			const content = await (
				await fetch('https://thekecha.com/krenier/library/raidbots-extension/data-full.json')
			).json()
			setData(content)
			console.log('> NEW DATABASE FETCHED FROM THEKECHA.COM')
			// Save fresh data to browser storage
			localStorage.setItem('raidbots-extension', JSON.stringify({ timestamp: Date.now(), value: content }))
		} catch (err) {
			console.log("! Impossible to fetch and store 'data.json' from https://thekecha.com")
			console.log(err.message)
		}
	}

	// Initial data trigger and tab URL monitoring
	useEffect(() => {
		retrieveData() // Use local or fetch
		const urlMonitoring = setInterval(
			() =>
				tabUrl(i => setTab(i !== undefined && i.toLowerCase().includes('simbot/topgear') ? 'topgear' : '')),
			[800]
		)
		return () => clearInterval(urlMonitoring)
	}, [])

	// Gather box content
	useEffect(() => {
		if (tab === 'topgear') {
			console.log('> HISTORICAL RECORDS EXTRACTED FROM RAIDBOTS.COM')
			boxValue(r => setTextArea(r))
		}
	}, [tab])

	return (
		<>
			{/* <div className='raidbots'><Test /></div> */}
			<div className='app'>
				<div className='copyright'>
					Designed by{' '}
					<a onClick={linkTab} href='https://github.com/Tcheetox' target='_blank' rel='noreferrer'>
						Tcheetox
					</a>{' '}
					to enjoy{' '}
					<a onClick={linkTab} href='https://www.raidbots.com' target='_blank' rel='noreferrer'>
						Raidbots.com
					</a>{' '}
					<span className='affiliation'>- Non-affiliated with Raidbots</span>
				</div>
				<div className={`raidbots-links ${tab !== '' ? 'active' : 'inactive'}`}>
					<a onClick={linkPage} href='https://www.raidbots.com/simbot/topgear'>
						<div className={`link ${tab !== '' ? 'active' : 'inactive'}`}>Top gear</div>
					</a>
				</div>
				<Panel fetchedData={data} textArea={textArea} />
			</div>
		</>
	)
}
