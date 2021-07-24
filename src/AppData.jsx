import React, { useState, createContext, useContext, useEffect } from 'react'

import { useSearch, useDataEnhancer } from './hooks/'
export const AppDataGetter = createContext()
export const AppDataSetter = createContext()

export const AppDataProvider = props => {
	const enhanceData = useDataEnhancer()
	const [data, setData] = useState({
		searchText: '',
		filters: {},
		raw: [],
		metadata: {},
		textArea: '',
		hasData: false,
	})

	useEffect(() => {
		if (Object.keys(props.data).length > 0) {
			setData(d => ({ ...d, raw: enhanceData(props.data, data.textArea), metadata: props.metadata, hasData: props.data.items.length > 0 }))
		}
	}, [data.textArea, props, enhanceData])

	const results = useSearch(data)

	useEffect(() => {
		window.onblur = async () =>
			localStorage.setItem('raidbots-extension-data', JSON.stringify({ timestamp: data.metadata.timestamp, items: data.raw }))
	}, [data.raw, data.metadata])

	return (
		<AppDataSetter.Provider value={setData}>
			<AppDataGetter.Provider value={{ results: results, searchText: data.searchText, filters: data.filters, hasData: data.hasData }}>
				{props.children}
			</AppDataGetter.Provider>
		</AppDataSetter.Provider>
	)
}

export const useContextState = () => {
	const contextData = useContext(AppDataGetter)
	if (typeof contextData === 'undefined') {
		throw new Error('useContextState must be used within AppDataProvider')
	}
	return contextData
}

export const useContextUpdater = () => {
	const setContext = useContext(AppDataSetter)
	if (typeof setContext === 'undefined') {
		throw new Error('useContextUpdater must be used within AppDataProvider')
	}
	return { setContext: setContext }
}
