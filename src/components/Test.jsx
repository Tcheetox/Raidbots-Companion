import React, { useState } from 'react'

import { areaInjection, areaTrigger, fieldTrigger } from './test.js'

export default function Test() {
	const [textArea, setTextArea] = useState('')
	const [inputField, setInputField] = useState('')

	const readContent = () => {
		const val = document.getElementById('TestTextArea')
		val.value.split('\n').forEach(element => {
			if (element.includes('# ADDED BY EXTENSION')) {
				const splitted = element.replace('# ADDED BY EXTENSION', '').split(',')
				console.log(splitted)
			}
		})
	}

	return (
		<div className='test-area'>
			<div id='FLEXER'>
				<div>HELLO 1</div>
				<div>HELLO 2</div>
				<div>HELLO 3</div>
				<div>HELLO 4</div>
			</div>
			<br />
			<br />
			INPUT FIELD STATE: {inputField}
			<br />
			<input
				type='text'
				id='TestInputField'
				value={inputField}
				onChange={e => setInputField(e.currentTarget.value)}
			/>
			<br />
			AREA STATE: {textArea}
			<br />
			<textarea id='TestTextArea' value={textArea} onChange={e => setTextArea(e.currentTarget.value)} />
			<br />
			<button onClick={areaInjection}>INJECT</button>
			<br />
			<button onClick={areaTrigger}>TRIGGER</button>
			<br />
			<button onClick={fieldTrigger}>TRIGGER INPUT FIELD</button>
			<br />
			<button onClick={readContent}>READ TO CONSOLE</button>
		</div>
	)
}
