const isChrome = navigator.userAgent.indexOf('Chrome') !== -1
const isFirefox = navigator.userAgent.indexOf('Firefox') !== -1

let browser = null
try {
	if (isChrome) browser = window.chrome
	else if (isFirefox) browser = window.browser
	if (browser && !(['tabs'] in browser)) {
		browser = null
		console.log('> BROWSER IS UNDEFINED')
	}
} catch (err) {
	console.log('> EXTENSION NOT RUNNING IN A VALID BROWSER')
	console.log(err.message)
}

const navigate = (e, currentTab) => {
	if (browser) {
		const t = e.currentTarget ? e.currentTarget.href : e.target
		const targetUrl = t.toString().replace('chrome-extension', 'https').replace('moz-extension', 'https').toString()
		if (!currentTab)
			browser.tabs.create({
				url: targetUrl,
			})
		else
			browser.tabs.query({ active: true, currentWindow: true }, tabs => {
				browser.tabs.update(tabs[0].id, {
					url: targetUrl,
				})
			})
		e.preventDefault()
	}
}

export const isArrayEquals = (a, b) =>
	Array.isArray(a) && Array.isArray(b) && a.length === b.length && a.every((val, index) => val === b[index])

export const linkTab = e => navigate(e, false)
export const linkPage = e => navigate(e, true)

// HOLY GRAAL! https://stackoverflow.com/questions/23892547/what-is-the-best-way-to-trigger-onchange-event-in-react-js/46012210#46012210
const executeScriptProxy = (method, callBack, args = []) => {
	if (browser)
		browser.tabs.query({ active: true, currentWindow: true }, tabs => {
			if (isChrome) {
				browser.scripting.executeScript(
					{
						target: { tabId: tabs[0].id },
						func: method,
						args: args,
					},
					r => callBack(r[0].result ?? '')
				)
			} else {
				const code =
					args.length === 2
						? `var inject = () => {\nvar e=${args[0]};\nvar t='${args[1]}'\n${method.toString().replace('function(e,t){', '')}\ninject()`
						: `var inject = () => {${method.toString().replace('function(){', '')}\ninject()`
				browser.tabs.executeScript(
					tabs[0].id,
					{
						code: code,
					},
					r => callBack(r && Array.isArray(r) && r.length > 0 ? r[0] : '')
				)
			}
		})
}

export const tryHandleInjection = (raidbotString, callBack, add) => {
	const injectedMethod = (_add, _raidbotString) => {
		var box = document.querySelector('textarea')
		if (box) {
			var nativeInputValueSetter = Object.getOwnPropertyDescriptor(window.HTMLTextAreaElement.prototype, 'value').set
			nativeInputValueSetter.call(
				box,
				_add ? `${_raidbotString}\n${box.value}` : box.value.replace(new RegExp(_raidbotString + '\n', 'g'), '')
			)
			box.dispatchEvent(new Event('input', { bubbles: true }))
			return true
		}
		return false
	}

	if (process.env.REACT_APP_DEBUG === 'true') callBack(injectedMethod())
	else executeScriptProxy(injectedMethod, callBack, [add, raidbotString])
}

export const tabUrl = callBack => {
	if (browser)
		browser.tabs.query({ active: true, lastFocusedWindow: true }, tabs =>
			callBack(tabs.length > 0 && ['url'] in tabs[0] ? tabs[0].url : '')
		)
}

export const boxValue = callBack => {
	const injectedMethod = () => document.querySelector('textarea').value
	if (process.env.REACT_APP_DEBUG === 'true') callBack(injectedMethod())
	else executeScriptProxy(injectedMethod, callBack)
}
