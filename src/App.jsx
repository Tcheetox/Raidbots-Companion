import React, { useState, useEffect } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Logo from './media/logo64.png'
import { linkTab } from './customs.js'
import TestArea from './components/TestArea'
import Panel from './components/topGear/Panel'
import cx from 'classnames'

export default function App() {
	const [data, setData] = useState({})
	const [metadata, setMetadata] = useState({})

	// Initial data gathering, cached or fecthed
	useEffect(() => {
		;(async () => {
			try {
				const urlPrefix = 'https://thekecha.com/krenier/library/raidbots-extension/'
				const fetchedMetaData = await (await fetch(`${urlPrefix}metadata.json`)).json()
				const dataStore = JSON.parse(localStorage.getItem('raidbots-extension-data'))
				setMetadata(fetchedMetaData)
				if (dataStore && dataStore.timestamp === fetchedMetaData.timestamp) {
					setData(dataStore)
					console.log('> DATABASE ACQUIRED FROM LOCAL STORAGE')
				} else {
					const fetchedData = await (await fetch(`${urlPrefix}data.json`)).json()
					setData(fetchedData)
					localStorage.setItem('raidbots-extension-data', JSON.stringify(fetchedData))
					console.log('> NEW DATABASE FETCHED FROM THEKECHA.COM')
				}
			} catch (err) {
				console.log("! Couldn't retrieve data from any storage...")
				console.log(err.message)
			}
		})()
	}, [])

	return (
		<div className={cx('main', { debug: process.env.REACT_APP_DEBUG === 'true' })}>
			{process.env.REACT_APP_DEBUG === 'true' ? <TestArea /> : null}
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
				<div className='logo-overlay'>
					<img className='logo' alt='logo' src={Logo} />
				</div>
				<Panel data={data} metadata={metadata} />
			</div>
		</div>
	)
}
