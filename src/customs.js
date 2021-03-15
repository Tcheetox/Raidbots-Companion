const isChrome = () => {
	try {
		return !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime)
	} catch (error) {
		return false
	}
}
const isFirefox = () => {
	try {
		return typeof InstallTrigger !== 'undefined'
	} catch (error) {
		return false
	}
}

let browser = null
try {
	if (isChrome()) browser = window.chrome
	else if (isFirefox) browser = window.browser
} catch (error) {
	console.log('> APPLICATION NOT RUNNING AS EXTENSION')
}

function navigate(e, currentTab) {
	if (browser && ['tabs'] in browser) {
		const t = e.currentTarget === null ? e.target : e.currentTarget.href
		const targetUrl = t.toString().replace('chrome-extension', 'https').replace('moz-extension', 'https')
		if (!currentTab) {
			browser.tabs.create({
				url: targetUrl,
			})
		} else {
			browser.tabs.query({ active: true, currentWindow: true }, function (tabs) {
				browser.tabs.update(tabs[0].id, {
					url: targetUrl,
				})
			})
		}
		e.preventDefault()
	}
}

export const linkTab = e => navigate(e, false)
export const linkPage = e => navigate(e, true)

// HOLY FUCK! https://stackoverflow.com/questions/23892547/what-is-the-best-way-to-trigger-onchange-event-in-react-js/46012210#46012210
export const tryHandleInjection = (raidbotString, callBack, add) => {
	if (browser && ['tabs'] in browser) {
		browser.tabs.query({ active: true, currentWindow: true }, function (tabs) {
			const stringScript = `var callMeBack = () => {
            try{
              var box = document.querySelector('textarea')
              if (box && box.name === 'optimizeInput') {
                var nativeInputValueSetter = Object.getOwnPropertyDescriptor(
                  window.HTMLTextAreaElement.prototype,
                  'value').set
                nativeInputValueSetter.call(box, 
                ${add ? `(box.value += '\\n${raidbotString}')` : `box.value.replace('${raidbotString}','')`})
                var ev2 = new Event('input', { bubbles: true })
                box.dispatchEvent(ev2)
                return true
              }
              return false
            } catch (err) {
              return false
            }
          } 
        callMeBack()`
			browser.tabs.executeScript(
				tabs[0].id,
				{
					code: stringScript,
				},
				r => callBack(r === undefined || r[0] === undefined ? false : r[0])
			)
		})
	} else {
		console.log(raidbotString)
		callBack(true)
	}
}

export const tabUrl = callBack => {
	if (browser && ['tabs'] in browser) {
		browser.tabs.query({ active: true, lastFocusedWindow: true }, tabs =>
			callBack(tabs.length > 0 && ['url'] in tabs[0] ? tabs[0].url : '')
		)
	}
}

export const boxValue = callBack => {
	if (browser && ['tabs'] in browser) {
		browser.tabs.query({ active: true, currentWindow: true }, function (tabs) {
			const stringScript = `var callMeBack = () => {
            try{
              var box = document.querySelector('textarea')
              if (box && box.name === 'optimizeInput') {
                return box.value
              }
              return ''
            } catch (err) {
              return ''
            }
          } 
        callMeBack()`
			browser.tabs.executeScript(
				tabs[0].id,
				{
					code: stringScript,
				},
				r => callBack(r === undefined || r[0] === undefined ? '' : r[0])
			)
		})
	} else callBack('')
}
