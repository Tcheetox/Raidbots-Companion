import React, { useState, useEffect, useCallback } from 'react'

import { linkPage, tabUrl, boxValue } from '../customs.js'
import { useContextUpdater } from '../AppData'
import cx from 'classnames'

export default function Links() {
	const [tab, setTab] = useState('')
	const [textArea, setTextArea] = useState('')
	const { setContext } = useContextUpdater()

	// Propagate textArea to context
	useEffect(() => {
		if (textArea !== '') {
			setContext(ctx => ({ ...ctx, textArea: textArea }))
			console.log('> NEW RECORDS EXTRACTED FROM RAIDBOTS.COM')
		}
	}, [textArea, setContext])

	const testBoxValue = useCallback(() => {
		setTab('topgear')
		if (textArea === '') setTextArea(document.querySelector('textarea').value)
	}, [textArea])

	const handleTab = useCallback(i => {
		if (!i || !i.toLowerCase().includes('simbot/topgear')) setTab('')
		else {
			setTab('topgear')
			boxValue(r => setTextArea(r))
		}
	}, [])

	// Start monitoring URL on load
	useEffect(() => {
		const urlMonitoring = setInterval(() => (process.env.REACT_APP_DEBUG === 'true' ? testBoxValue() : tabUrl(handleTab)), [250])
		return () => clearInterval(urlMonitoring)
	}, [setContext, textArea, testBoxValue, handleTab])

	return (
		<div className={cx('raidbots-links', { active: tab === 'topgear' })}>
			<a onClick={linkPage} href='https://www.raidbots.com/simbot/topgear'>
				<div className={cx('link', { active: tab === 'topgear' })}>Top gear</div>
			</a>
		</div>
	)
}
