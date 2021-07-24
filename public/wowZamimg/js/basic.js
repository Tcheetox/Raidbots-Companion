if (!window.WH) {
	window.WH = { PageMeta: {}, staticUrl: `${window.location.origin}/wowZamimg` }
}
WH.dataEnv = { MAIN: 1, PTR: 2, BETA: 3, CLASSIC: 4, TBC: 5 }
WH.dataEnvKey = { 1: 'live', 2: 'ptr', 3: 'beta', 4: 'classic', 5: 'tbc' }
WH.dataEnvTerm = { 1: 'live', 2: 'ptr', 3: 'beta', 4: 'classic', 5: 'burningCrusade' }
WH.dataTree = { RETAIL: 1, CLASSIC: 4, TBC: 5 }
WH.dataTreeTerm = { 1: 'retail', 4: 'classic', 5: 'burningCrusade' }
WH.dataEnvToTree = {}
WH.dataEnvToTree[WH.dataEnv.MAIN] = WH.dataTree.RETAIL
WH.dataEnvToTree[WH.dataEnv.PTR] = WH.dataTree.RETAIL
WH.dataEnvToTree[WH.dataEnv.BETA] = WH.dataTree.RETAIL
WH.dataEnvToTree[WH.dataEnv.CLASSIC] = WH.dataTree.CLASSIC
WH.dataEnvToTree[WH.dataEnv.TBC] = WH.dataTree.TBC
WH.dataTreeToRoot = {}
WH.dataTreeToRoot[WH.dataTree.RETAIL] = WH.dataEnv.MAIN
WH.dataTreeToRoot[WH.dataTree.CLASSIC] = WH.dataEnv.CLASSIC
WH.dataTreeToRoot[WH.dataTree.TBC] = WH.dataEnv.TBC
WH.BETA_DOMAIN = 'shadowlands'
WH.EFFECT_SCALING_CLASS_1 = -1
WH.EFFECT_SCALING_CLASS_2 = -2
WH.EFFECT_SCALING_CLASS_3 = -3
WH.EFFECT_SCALING_CLASS_4 = -4
WH.EFFECT_SCALING_CLASS_5 = -5
WH.EFFECT_SCALING_CLASS_6 = -6
WH.EFFECT_SCALING_CLASS_7 = -7
WH.EFFECT_SCALING_CLASS_8 = -8
WH.EFFECT_SCALING_CLASS_9 = -9
WH.Types = new (function () {
	const e = this
	this.NPC = 1
	this.OBJECT = 2
	this.ITEM = 3
	this.ITEM_SET = 4
	this.QUEST = 5
	this.SPELL = 6
	this.ZONE = 7
	this.FACTION = 8
	this.PET = 9
	this.ACHIEVEMENT = 10
	this.TITLE = 11
	this.EVENT = 12
	this.CLASS = 13
	this.RACE = 14
	this.SKILL = 15
	this.CURRENCY = 17
	this.PROJECT = 18
	this.SOUND = 19
	this.BUILDING = 20
	this.FOLLOWER = 21
	this.MISSION_ABILITY = 22
	this.MISSION = 23
	this.SHIP = 25
	this.THREAT = 26
	this.RESOURCE = 27
	this.CHAMPION = 28
	this.ICON = 29
	this.ORDER_ADVANCEMENT = 30
	this.FOLLOWER_A = 31
	this.FOLLOWER_H = 32
	this.SHIP_A = 33
	this.SHIP_H = 34
	this.CHAMPION_A = 35
	this.CHAMPION_H = 36
	this.TRANSMOG_ITEM = 37
	this.BFA_CHAMPION = 38
	this.BFA_CHAMPION_A = 39
	this.AFFIX = 40
	this.BFA_CHAMPION_H = 41
	this.AZERITE_ESSENCE_POWER = 42
	this.AZERITE_ESSENCE = 43
	this.STORYLINE = 44
	this.ADVENTURE_COMBATANT_ABILITY = 46
	this.ENCOUNTER = 47
	this.COVENANT = 48
	this.SOULBIND = 49
	this.PET_ABILITY = 200
	this.SCREENSHOT = 91
	this.GUIDE_IMAGE = 98
	this.GUIDE = 100
	this.TRANSMOG_SET = 101
	this.OUTFIT = 110
	this.GEAR_SET = 111
	this.LISTVIEW = 158
	this.SURVEY_COVENANTS = 161
	this.NEWS_POST = 162
	const t = [
		this.NPC,
		this.OBJECT,
		this.ITEM,
		this.ITEM_SET,
		this.QUEST,
		this.SPELL,
		this.ZONE,
		this.FACTION,
		this.PET,
		this.ACHIEVEMENT,
		this.TITLE,
		this.EVENT,
		this.CLASS,
		this.RACE,
		this.SKILL,
		this.CURRENCY,
		this.SOUND,
		this.BUILDING,
		this.FOLLOWER,
		this.MISSION_ABILITY,
		this.MISSION,
		this.SHIP,
		this.THREAT,
		this.RESOURCE,
		this.CHAMPION,
		this.ICON,
		this.ORDER_ADVANCEMENT,
		this.BFA_CHAMPION,
		this.AFFIX,
		this.AZERITE_ESSENCE_POWER,
		this.AZERITE_ESSENCE,
		this.STORYLINE,
		this.ADVENTURE_COMBATANT_ABILITY,
		this.PET_ABILITY,
	]
	const a = (function () {
		let t = {}
		t[WH.dataTree.RETAIL] = [
			e.ACHIEVEMENT,
			e.ADVENTURE_COMBATANT_ABILITY,
			e.AFFIX,
			e.AZERITE_ESSENCE,
			e.AZERITE_ESSENCE_POWER,
			e.BFA_CHAMPION,
			e.BUILDING,
			e.CHAMPION,
			e.CLASS,
			e.CURRENCY,
			e.EVENT,
			e.FACTION,
			e.FOLLOWER,
			e.GUIDE,
			e.GUIDE_IMAGE,
			e.ICON,
			e.ITEM,
			e.ITEM_SET,
			e.LISTVIEW,
			e.MISSION,
			e.MISSION_ABILITY,
			e.NPC,
			e.OBJECT,
			e.ORDER_ADVANCEMENT,
			e.OUTFIT,
			e.PET,
			e.PET_ABILITY,
			e.QUEST,
			e.RACE,
			e.RESOURCE,
			e.SCREENSHOT,
			e.SHIP,
			e.SKILL,
			e.SOUND,
			e.SPELL,
			e.STORYLINE,
			e.THREAT,
			e.TITLE,
			e.TRANSMOG_SET,
			e.ZONE,
		]
		t[WH.dataTree.CLASSIC] = [
			e.CLASS,
			e.FACTION,
			e.GEAR_SET,
			e.GUIDE,
			e.GUIDE_IMAGE,
			e.ICON,
			e.ITEM,
			e.ITEM_SET,
			e.LISTVIEW,
			e.NPC,
			e.OBJECT,
			e.OUTFIT,
			e.PET,
			e.QUEST,
			e.RACE,
			e.RESOURCE,
			e.SCREENSHOT,
			e.SKILL,
			e.SOUND,
			e.SPELL,
			e.ZONE,
		]
		t[WH.dataTree.TBC] = [
			e.CLASS,
			e.FACTION,
			e.GUIDE,
			e.GUIDE_IMAGE,
			e.ICON,
			e.ITEM,
			e.ITEM_SET,
			e.LISTVIEW,
			e.NPC,
			e.OBJECT,
			e.OUTFIT,
			e.PET,
			e.QUEST,
			e.RACE,
			e.RESOURCE,
			e.SCREENSHOT,
			e.SKILL,
			e.SOUND,
			e.SPELL,
			e.ZONE,
		]
		return t
	})()
	const i = 0
	const n = 1
	const r = 2
	const o = 3
	const s = { typeNames: undefined }
	this.existsInDataEnv = function (e) {
		return a[WH.getDataTree()].includes(e)
	}
	this.getGameEntityTypes = function () {
		return t.slice()
	}
	this.getRequiredTrees = function (e) {
		let t = []
		let i = false
		for (let n in a) {
			if (!a.hasOwnProperty(n)) {
				continue
			}
			if (a[n].includes(e)) {
				t.push(parseInt(n))
			} else {
				i = true
			}
		}
		return i ? t : null
	}
	this.hasName = function (e) {
		return s.typeNames.hasOwnProperty(e)
	}
	this.getLowerPlural = function (e) {
		return l(e)[o]
	}
	this.getLowerSingular = function (e) {
		return l(e)[n]
	}
	this.getUpperPlural = function (e) {
		return l(e)[r]
	}
	this.getUpperSingular = function (e) {
		return l(e)[i]
	}
	function l(e) {
		if (s.typeNames === undefined) {
			s.typeNames = WH.getPageData('types.names') || {}
		}
		return s.typeNames[e] || Array(4).fill(WH.term('unknownType_format', e), 0, 4)
	}
})()
if (!String.prototype.ltrim) {
	String.prototype.ltrim = function () {
		return this.replace(/^\s*/, '')
	}
}
if (!String.prototype.rtrim) {
	String.prototype.rtrim = function () {
		return this.replace(/\s*$/, '')
	}
}
WH.error = function (e) {
	console.error.apply(console.error, Array.prototype.slice.call(arguments))
	if (!e) {
		console.error('The error message was empty, and thus will not be logged.')
		return
	}
	if (WH.Track) {
		WH.Track.nonInteractiveEvent.apply(WH.Track, ['Error'].concat(Array.prototype.slice.call(arguments)))
	}
}
WH.info = function (e) {
	console.info.apply(console.info, Array.prototype.slice.call(arguments))
}
WH.log = function (e) {
	console.log.apply(console.log, Array.prototype.slice.call(arguments))
}
WH.warn = function (e) {
	console.warn.apply(console.warn, Array.prototype.slice.call(arguments))
}
;(function () {
	const e = {}
	WH.getPageData = function (t) {
		if (WH.wowheadRemote) {
			return undefined
		}
		if (e.hasOwnProperty(t)) {
			return e[t]
		}
		let a = document.querySelector(('script#data.' + t).replace(/\./g, '\\.'))
		if (a) {
			return JSON.parse(a.innerHTML)
		}
		return undefined
	}
	WH.setPageData = function (t, a) {
		if (e.hasOwnProperty(t)) {
			WH.warn('Duplicate data key', t)
		}
		e[t] = a
	}
})()
Object.assign(WH.PageMeta, WH.getPageData('pageMeta') || {})
WH.PageMeta.serverTime = WH.PageMeta.serverTime ? new Date(WH.PageMeta.serverTime) : new Date()
if (WH.PageMeta.staticUrl !== undefined) {
	WH.staticUrl = WH.PageMeta.staticUrl
}
WH.stringCompare = function (e, t) {
	if (e == t) return 0
	if (e == null) return -1
	if (t == null) return 1
	var a = parseFloat(e)
	var i = parseFloat(t)
	if (!isNaN(a) && !isNaN(i) && a != i) {
		return a < i ? -1 : 1
	}
	if (typeof e == 'string' && typeof t == 'string') {
		return e.localeCompare(t, undefined, { numeric: true })
	}
	return e < t ? -1 : 1
}
WH.trim = function (e) {
	return e.replace(/(^\s*|\s*$)/g, '')
}
WH.rtrim = function (e, t) {
	var a = e.length
	while (--a > 0 && e.charAt(a) == t) {}
	e = e.substring(0, a + 1)
	if (e == t) {
		e = ''
	}
	return e
}
WH.sprintf = function (e) {
	if (typeof e !== 'string') {
		WH.error('No format passed to WH.sprintf.', e)
		return ''
	}
	for (var t = 1, a = arguments.length; t < a; ++t) {
		e = e.replace('$' + t, arguments[t])
	}
	return e
}
WH.sprintfGlobal = function (e) {
	for (var t = 1, a = arguments.length; t < a; ++t) {
		e = e.replace(new RegExp('\\$' + t, 'g'), arguments[t])
	}
	return e
}
WH.stringReplace = function (e, t, a) {
	while (e.indexOf(t) != -1) {
		e = e.replace(t, a)
	}
	return e
}
WH.term = function (e) {
	if (!WH.TERMS) {
		return e
	}
	let t = [WH.TERMS[e]].concat(Array.prototype.slice.call(arguments, 1))
	return WH.Strings.sprintf.apply(null, t)
}
WH.wowTerm = function (e) {
	if (!WH.GlobalStrings) {
		return e
	}
	let t = [WH.GlobalStrings[e]].concat(Array.prototype.slice.call(arguments, 1))
	return WH.Strings.sprintf.apply(null, t)
}
WH.htmlEntities = function (e) {
	return e.replace(/[\u00A0-\u9999<>\&]/gim, function (e) {
		return '&#' + e.charCodeAt(0) + ';'
	})
}
WH.stub = function (e) {
	let t = e.split('.')
	let a = WH
	for (let e = 0, i; (i = t[e]); e++) {
		if (!a[i]) {
			a[i] = {}
		}
		a = a[i]
	}
}
WH.urlEncode = function (e) {
	e = encodeURIComponent(e)
	e = WH.stringReplace(e, '+', '%2B')
	return e
}
WH.urlEncodeHref = function (e) {
	e = encodeURIComponent(e)
	e = WH.stringReplace(e, '%20', '+')
	e = WH.stringReplace(e, '%3D', '=')
	return e
}
WH.numberFormat = function (e) {
	var t = ('' + parseFloat(e)).split('.')
	e = t[0]
	var a = t.length > 1 ? '.' + t[1] : ''
	if (e.length <= 3) {
		return e + a
	}
	return WH.numberFormat(e.substr(0, e.length - 3)) + ',' + e.substr(e.length - 3) + a
}
WH.numberLocaleFormat = function (e, t) {
	var a = ''
	if (typeof t == 'number') {
		a = Locale.locales[t].name
	} else {
		if (typeof t == 'string') {
			a = t
		} else {
			a = Locale.getName()
		}
	}
	if (a.length == 4) {
		a = a.substr(0, 2).toLowerCase() + '-' + a.substr(2).toUpperCase()
	}
	var i = '' + e
	try {
		i = e.toLocaleString(a)
	} catch (t) {
		i = e.toLocaleString()
	}
	return i
}
WH.inArray = function (e, t, a, i) {
	if (e == null) {
		return -1
	}
	if (!Array.isArray(e)) {
		WH.error('Tried looking for a value in a haystack which is not an array.', arguments)
		return -1
	}
	var n
	if (a) {
		n = e.length
		for (var r = i || 0; r < n; ++r) {
			if (a(e[r]) == t) {
				return r
			}
		}
		return -1
	}
	n = e.indexOf(t, i)
	if (n >= 0) {
		return n
	}
	n = e.length
	for (var o = i || 0; o < n; ++o) {
		if (e[o] == t) {
			return o
		}
	}
	return -1
}
WH.isSet = function (e) {
	return typeof window[e] !== 'undefined'
}
if (!WH.isSet('console')) {
	var console = { log: function () {} }
}
WH.arrayWalk = function (e, t, a) {
	for (var i = 0, n = e.length; i < n; ++i) {
		var r = t(e[i], a, e, i)
		if (r != null) {
			e[i] = r
		}
	}
}
WH.arrayApply = function (e, t, a) {
	for (var i = 0, n = e.length; i < n; ++i) {
		t(e[i], a, e, i)
	}
}
WH.arrayFilter = function (e, t) {
	var a = []
	for (var i = 0, n = e.length; i < n; ++i) {
		if (t(e[i])) {
			a.push(e[i])
		}
	}
	return a
}
WH.arrayUnique = function (e) {
	var t = {}
	for (var a = e.length - 1; a >= 0; --a) {
		t[e[a]] = 1
	}
	var i = []
	for (var n in t) {
		i.push(n)
	}
	return i
}
WH.closest = function (e, t) {
	while (e && e.nodeType === Node.ELEMENT_NODE) {
		if (e.matches(t)) {
			return e
		}
		e = e.parentNode
	}
	return undefined
}
WH.ge = function (e) {
	if (typeof e != 'string') {
		return e
	}
	return document.getElementById(e)
}
WH.gE = function (e, t) {
	return e.getElementsByTagName(t)
}
WH.qs = function (e, t) {
	return (t || document).querySelector(e)
}
WH.qsa = function (e, t) {
	return (t || document).querySelectorAll(e)
}
WH.ce = function (e, t, a) {}
WH.ce = (function (e) {
	return function (t, a, i) {
		var n = e(t)
		if (a) {
			WH.cOr(n, a)
		}
		if (i) {
			WH.ae(n, i)
		}
		if (n.tagName === 'INPUT' && n.type === 'range' && !WH.isRemote() && WH.DOM) {
			WH.DOM.styleRangeElement(n)
		}
		return n
	}
})(
	typeof document.createElementOriginal === 'function'
		? document.createElementOriginal.bind(document)
		: document.createElement.bind(document)
)
WH.de = function (e, t) {
	if (typeof e === 'string') {
		e = (t || document).querySelector(e)
	}
	if (e && e.parentNode) {
		e.parentNode.removeChild(e)
	}
}
WH.ae = function (e, t) {
	if (Array.isArray(t)) {
		WH.arrayApply(t, e.appendChild.bind(e))
		return t
	} else {
		return e.appendChild(t)
	}
}
WH.aef = function (e, t) {
	return e.insertBefore(t, e.firstChild)
}
WH.ee = function (e, t) {
	if (!t) {
		t = 0
	}
	while (e.childNodes[t]) {
		e.removeChild(e.childNodes[t])
	}
}
WH.ct = function (e) {
	return document.createTextNode(e)
}
WH.st = function (e, t) {
	if (e.firstChild && e.firstChild.nodeType == 3) {
		e.firstChild.nodeValue = t
	} else {
		WH.aef(e, WH.ct(t))
	}
}
WH.noWrap = function (e) {
	e.style.whiteSpace = 'nowrap'
}
WH.rf = function () {
	return false
}
WH.rfWithoutControlKey = function (e) {
	if (e.ctrlKey || e.shiftKey || e.altKey || e.metaKey) {
		return
	}
	return false
}
WH.aE = function (e, t, a, i) {
	if (!e) {
		return
	}
	if (typeof e === 'string') {
		e = document.querySelectorAll(e)
	} else if (e instanceof EventTarget) {
		e = [e]
	} else if (Array.isArray(e) || e instanceof NodeList) {
	} else {
		WH.warn('Unrecognized elements parameter', e)
		e = [e]
	}
	t = typeof t === 'string' ? [t] : t
	for (let n = 0; n < e.length; n++) {
		for (let r of t) {
			e[n].addEventListener(r, a, i || false)
		}
	}
}
WH.dE = function (e, t, a, i) {
	if (!e) {
		return
	}
	if (typeof e === 'string') {
		e = document.querySelectorAll(e)
	} else if (e instanceof EventTarget) {
		e = [e]
	} else if (Array.isArray(e) || e instanceof NodeList) {
	} else {
		WH.warn('Unrecognized elements parameter', e)
		e = [e]
	}
	for (let n = 0; n < e.length; n++) {
		e[n].removeEventListener(t, a, i || false)
	}
}
WH.preventSelectStart = function (e) {
	e.dataset.preventSelectStart = 'true'
}
WH.sp = function (e) {
	if (!e) {
		e = window.event
	}
	e.stopPropagation()
}
WH.setCookie = function (e, t, a, i, n, r) {
	var o = new Date()
	var s = e + '=' + encodeURI(a) + '; '
	o.setDate(o.getDate() + t)
	s += 'expires=' + o.toUTCString() + '; '
	if (i) {
		s += 'path=' + i + '; '
	}
	if (n) {
		s += 'domain=' + n + '; '
	}
	if (r === true) {
		s += 'secure;'
	}
	document.cookie = s
	WH.getCookies(e)
	WH.getCookies.C[e] = a
}
WH.deleteCookie = function (e, t, a, i) {
	WH.setCookie(e, -1, '', t, a, i)
	WH.getCookies.C[e] = null
}
WH.getCookies = function (e) {
	if (WH.getCookies.I == null) {
		var t = decodeURI(document.cookie).split('; ')
		WH.getCookies.C = {}
		for (var a = 0, i = t.length; a < i; ++a) {
			var n = t[a].indexOf('='),
				r,
				o
			if (n != -1) {
				r = t[a].substr(0, n)
				o = t[a].substr(n + 1)
			} else {
				r = t[a]
				o = ''
			}
			WH.getCookies.C[r] = o
		}
		WH.getCookies.I = 1
	}
	if (!e) {
		return WH.getCookies.C
	} else {
		return WH.getCookies.C[e]
	}
}
WH.dO = function (e) {
	return WH.cO({}, e)
}
WH.cO = function (e, t) {
	for (var a in t) {
		if (t[a] !== null && typeof t[a] == 'object' && t[a].length) {
			e[a] = t[a].slice(0)
		} else {
			e[a] = t[a]
		}
	}
	return e
}
WH.cOr = function (e, t, a) {
	for (var i in t) {
		if (a && i.substr(0, a.length) == a) {
			continue
		}
		if (t[i] !== null && typeof t[i] == 'object') {
			if (Array.isArray(t[i])) {
				e[i] = t[i].slice(0)
			} else {
				if (!e[i]) {
					e[i] = {}
				}
				WH.cOr(e[i], t[i], a)
			}
		} else {
			e[i] = t[i]
		}
	}
	return e
}
WH.fround = function (e) {
	if (Math.fround) {
		return Math.fround(e)
	} else if (typeof Float32Array != 'undefined' && Float32Array) {
		var t = new Float32Array(1)
		t[0] = +e
		return t[0]
	} else {
		return e
	}
}
WH.displayBlock = function (e, t) {
	if (typeof e === 'string') {
		e = (t || document).querySelector(e)
		if (!e) {
			return
		}
	}
	e.style.display = 'block'
}
WH.displayDefault = function (e, t) {
	if (typeof e === 'string') {
		e = (t || document).querySelector(e)
		if (!e) {
			return
		}
	}
	e.style.removeProperty('display')
}
WH.displayInline = function (e, t) {
	if (typeof e === 'string') {
		e = (t || document).querySelector(e)
		if (!e) {
			return
		}
	}
	e.style.display = 'inline'
}
WH.displayNone = function (e, t) {
	if (typeof e === 'string') {
		e = (t || document).querySelector(e)
		if (!e) {
			return
		}
	}
	e.style.display = 'none'
}
WH.setData = function (e, t, a, i) {
	let n
	if (typeof e === 'string') {
		n = (i || document).querySelectorAll(e)
	} else if (e) {
		if (e.dataset) {
			n = [e]
		} else if (e.length) {
			n = e
		} else {
			WH.error('Element not supported by WH.setData().', t, a, e, i)
			return
		}
	} else {
		WH.error('No element passed to WH.setData().', t, a, e, i)
		return
	}
	if (a == null) {
		for (let e = 0, a; (a = n[e]); e++) {
			delete a.dataset[t]
		}
	} else {
		for (let e = 0, i; (i = n[e]); e++) {
			i.dataset[t] = a
		}
	}
}
WH.getWindowSize = function () {
	return { w: window.innerWidth, h: window.innerHeight }
}
WH.getScroll = function () {
	return { x: window.scrollX, y: window.scrollY }
}
WH.getCursorPos = function (e) {
	return { x: e.pageX, y: e.pageY }
}
WH.ac = function (e, t) {
	let a = 0
	let i = 0
	while (e) {
		let t
		if (e.style.transform && (t = e.style.transform.match(/scale\(([\d.]+)\)/i))) {
			a *= parseFloat(t[1])
			i *= parseFloat(t[1])
		}
		a += e.offsetLeft
		i += e.offsetTop
		let n = e.parentNode
		while (n && n !== e.offsetParent && n.offsetParent) {
			if (n.scrollLeft || n.scrollTop) {
				a -= n.scrollLeft | 0
				i -= n.scrollTop | 0
				break
			}
			n = n.parentNode
		}
		e = e.offsetParent
	}
	if (window.Lightbox && Lightbox.isVisible()) {
		t = true
	}
	if (t) {
		let e = WH.getScroll()
		a += e.x
		i += e.y
	}
	let n = [a, i]
	n.x = a
	n.y = i
	return n
}
WH.getOffset = function (e, t) {
	let a = e.getBoundingClientRect()
	let i = { left: a.left, top: a.top }
	if (t !== true) {
		let e = WH.getScroll()
		i.left += e.x
		i.top += e.y
	}
	return i
}
WH.scrollTo = function (e, t) {
	t = t || {}
	if (typeof e === 'string') {
		let t = document.querySelector(e)
		if (!t) {
			WH.error('Could not select element to scroll to.', e)
			return
		}
		e = t
	}
	if (!e || e.nodeType !== Node.ELEMENT_NODE) {
		WH.error('Invalid target to scroll to.', e)
		return
	}
	if (t.asNeeded) {
		let a = e.getBoundingClientRect()
		let i = t.position === 'center' ? 10 : 0
		if (a.top >= i && a.top + a.height + i < window.innerHeight && a.left >= i && a.left + a.width + i < window.innerWidth) {
			return
		}
	}
	e.scrollIntoView({ behavior: t.animated === false ? 'auto' : 'smooth', block: t.position || 'start' })
}
WH.isElementFixedPosition = function (e) {
	while (e && e.nodeType === Node.ELEMENT_NODE) {
		if (getComputedStyle(e).getPropertyValue('position') === 'fixed') {
			return true
		}
		e = e.parentNode
	}
	return false
}
WH.createReverseLookupJson = function (e) {
	var t = {}
	for (var a in e) {
		t[e[a]] = a
	}
	return t
}
WH.getLocaleFromDomain = function (e) {
	var t = WH.getLocaleFromDomain.L
	if (e && typeof e == 'string') {
		var a = e.split('.')
		return t[a[0]] || 0
	}
	return 0
}
WH.getLocaleFromDomain.L = { ko: 1, fr: 2, de: 3, cn: 4, es: 6, ru: 7, pt: 8, it: 9 }
WH.getDomainFromLocale = function (e) {
	var t
	if (WH.getDomainFromLocale.L) {
		t = WH.getDomainFromLocale.L
	} else {
		t = WH.getDomainFromLocale.L = WH.createReverseLookupJson(WH.getLocaleFromDomain.L)
	}
	return t[e] ? t[e] : ''
}
WH.getTypeIdFromTypeString = function (e) {
	if (!WH.getTypeIdFromTypeString.lookup[e]) {
		WH.error('No type ID found for type string [' + e + '].')
		return -1
	}
	return WH.getTypeIdFromTypeString.lookup[e]
}
WH.getTypeIdFromTypeString.lookup = {
	mount: -1e3,
	recipe: -1001,
	'battle-pet': -1002,
	npc: 1,
	object: 2,
	item: 3,
	itemset: 4,
	'item-set': 4,
	quest: 5,
	spell: 6,
	zone: 7,
	faction: 8,
	pet: 9,
	achievement: 10,
	title: 11,
	event: 12,
	statistic: 16,
	currency: 17,
	building: 20,
	follower: 21,
	garrisonability: 22,
	missionability: 22,
	'mission-ability': 22,
	mission: 23,
	ship: 25,
	threat: 26,
	resource: 27,
	champion: 28,
	icon: 29,
	'order-advancement': 30,
	'bfa-champion': 38,
	affix: 40,
	'azerite-essence': 43,
	'azerite-essence-power': 42,
	storyline: WH.Types.STORYLINE,
	'adventure-combatant-ability': WH.Types.ADVENTURE_COMBATANT_ABILITY,
	guide: 100,
	'transmog-set': 101,
	outfit: 110,
	petability: 200,
	'pet-ability': 200,
}
WH.fetch = (function () {
	let e = function (e) {
		let t = []
		for (let a in e) {
			if (e.hasOwnProperty(a)) {
				t.push(encodeURIComponent(a) + '=' + encodeURIComponent(e[a]))
			}
		}
		return t.join('&')
	}
	let t = function (e) {
		if (e.contentType) {
			return e.contentType
		}
		if (typeof e.form === 'object') {
			return 'application/x-www-form-urlencoded'
		}
		if (e.hasOwnProperty('json')) {
			return 'application/json'
		}
		if (typeof e.body === 'string') {
			return 'application/octet-stream'
		}
		return undefined
	}
	if (typeof window.fetch !== 'function') {
		let a = function (e, t, a) {
			let i = this
			let n = i.responseText
			let r = (i.getResponseHeader('content-type') || '').indexOf('application/json') === 0
			let o = null
			if (i.status < 200 || i.status > 399) {
				o = 'Legacy WH.fetch call got a bad response code.'
			} else if (r) {
				try {
					n = JSON.parse(n)
				} catch (e) {
					n = undefined
					o = 'Could not process Legacy WH.fetch JSON response. ' + e.message
				}
			}
			if (o) {
				WH.error(o, e, i.status, i.responseText, i)
				if (t.error) {
					t.error(n, i.status)
				}
			} else {
				if (t.success) {
					t.success(n, i.status)
				}
			}
			if (t.complete) {
				t.complete(n, i.status)
			}
		}
		let i = function (e, t, a) {
			let i = this
			let n = 'Legacy WH.fetch call could not complete.'
			let r = i.responseText || undefined
			WH.error(n, e, i.status, i.responseText, i)
			if (t.error) {
				t.error(r, i.status)
			}
			if (t.complete) {
				t.complete(r, i.status)
			}
		}
		return function (n, r) {
			r = r || {}
			if (r.query) {
				n += (n.indexOf('?') > -1 ? '&' : '?') + WH.Url.buildQuery(r.query)
			}
			let o = r.method || 'GET'
			if (r.hasOwnProperty('data') || typeof r.body === 'string') {
				o = r.method || 'POST'
			}
			let s = new XMLHttpRequest()
			WH.aE(s, 'load', a.bind(s, n, r))
			WH.aE(s, 'error', i.bind(s, n, r))
			s.overrideMimeType('text/plain')
			s.open(o, n, true)
			let l = t(r)
			if (l) {
				s.setRequestHeader('Content-Type', l)
			}
			if (typeof r.form === 'object') {
				s.send(e(r.form))
			} else if (r.hasOwnProperty('json')) {
				s.send(JSON.stringify(r.json))
			} else if (typeof r.body === 'string') {
				s.send(r.body)
			} else {
				s.send()
			}
		}
	}
	let a = function (e, t, a, i) {
		if (!a.ok) {
			WH.error('WH.fetch call got a bad response code.', e, a.status, i, a)
			if (t.error) {
				t.error(i, a.status)
			}
		} else {
			if (t.success) {
				t.success(i, a.status)
			}
		}
		if (t.complete) {
			t.complete(i, a.status)
		}
	}
	let i = function (e, t, a, i) {
		let n = 'Could not process WH.fetch response. ' + i.message
		WH.error(n, e, a.status, '', a)
		if (t.error) {
			t.error(undefined, a.status)
		}
		if (t.complete) {
			t.complete(undefined, a.status)
		}
	}
	let n = function (e, t, n) {
		let r = (n.headers.get('content-type') || '').indexOf('application/json') === 0
		;(r ? n.json() : n.text()).then(a.bind(null, e, t, n))['catch'](i.bind(null, e, t, n))
	}
	let r = function (e, t, a) {
		let i = 'WH.fetch call could not complete. ' + a.message
		WH.error(i, e, 0, '', a)
		if (t.error) {
			t.error(undefined, 0, a.message)
		}
		if (t.complete) {
			t.complete(undefined, 0, a.message)
		}
	}
	return function (a, i) {
		i = i || {}
		if (i.query) {
			a += (a.indexOf('?') > -1 ? '&' : '?') + WH.Url.buildQuery(i.query)
		}
		let o = typeof i.cookies === 'boolean' ? i.cookies : true
		let s = { credentials: o ? 'same-origin' : 'omit', headers: new Headers(), method: i.method || 'GET', mode: i.mode || 'same-origin' }
		let l = t(i)
		if (l) {
			s.headers.set('Content-Type', l)
		}
		if (typeof i.form === 'object') {
			s.method = i.method || 'POST'
			s.body = e(i.form)
		} else if (i.hasOwnProperty('json')) {
			s.method = i.method || 'POST'
			s.body = JSON.stringify(i.json)
		} else if (typeof i.body === 'string') {
			s.method = i.method || 'POST'
			s.body = i.body
		}
		fetch(a, s).then(n.bind(null, a, i))['catch'](r.bind(null, a, i))
	}
})()
WH.ajaxIshRequest = function (e, t) {
	var a = document.getElementsByTagName('head')[0]
	if (e.substr(0, 5) === 'http:' && location.protocol === 'https:') {
		WH.error('Refused to AJAX-ish load URL.', e)
		return undefined
	}
	if (t) {
		var i = WH.ce('script', { type: 'text/javascript', src: e })
		WH.ae(a, i)
		return i
	}
	var n = WH.getGets()
	if (n.refresh != null) {
		if (n.refresh.length) {
			e += '&refresh=' + n.refresh
		} else {
			e += '&refresh'
		}
	}
	if (n.locale != null) {
		e += '&locale=' + n.locale
	}
	if (n.ptr != null) {
		e += '&ptr'
	}
	var i = WH.ce('script', { type: 'text/javascript', src: e, charset: 'utf8' })
	WH.ae(a, i)
	return i
}
WH.xhrJsonRequest = function (e, t) {
	var a = new XMLHttpRequest()
	a.onload = function (e) {
		var a = e.target.response
		switch (e.target.responseType) {
			case 'json':
				break
			case '':
			case 'text':
				try {
					a = JSON.parse(a)
				} catch (a) {
					WH.error('Could not parse expected JSON response', e.target)
					return t()
				}
				break
			default:
				WH.error('Unexpected response type from JSON request', e.target)
				return t()
		}
		return t(a)
	}
	a.onerror = function () {
		return t()
	}
	a.open('GET', e, true)
	a.responseType = 'json'
	a.send()
}
WH.getGets = function () {
	if (WH.getGets.C != null) {
		return WH.getGets.C
	}
	var e = WH.getQueryString()
	var t = WH.parseQueryString(e)
	WH.getGets.C = t
	return t
}
WH.visitUrlWithPostData = function (e, t) {
	var a = WH.ce('form')
	a.action = e
	a.method = 'post'
	for (var i in t) {
		if (t.hasOwnProperty(i)) {
			var n = WH.ce('input')
			n.type = 'hidden'
			n.name = i
			n.value = t[i]
			WH.ae(a, n)
		}
	}
	WH.ae(document.body, a)
	a.submit()
}
WH.getQueryString = function () {
	var e = ''
	if (location.pathname) {
		e += location.pathname.substr(1)
	}
	if (location.search) {
		if (location.pathname) {
			e += '&'
		}
		e += location.search.substr(1)
	}
	return e
}
WH.parseQueryString = function (e) {
	e = decodeURIComponent(e).replace(/^\?+/, '')
	var t = e.split('&')
	var a = {}
	for (var i = 0, n = t.length; i < n; ++i) {
		WH.splitQueryParam(t[i], a)
	}
	return a
}
WH.splitQueryParam = function (e, t) {
	if (e === '') {
		return
	}
	var a = e.indexOf('=')
	var i
	var n
	if (a != -1) {
		i = e.substr(0, a)
		n = e.substr(a + 1)
	} else {
		i = e
		n = ''
	}
	t[i] = n
}
WH.createRect = function (e, t, a, i) {
	return { l: e, t: t, r: e + a, b: t + i }
}
WH.intersectRect = function (e, t) {
	return !(e.l >= t.r || t.l >= e.r || e.t >= t.b || t.t >= e.b)
}
WH.getViewport = function () {
	var e = $(window)
	return new Rectangle(e.scrollLeft(), e.scrollTop(), e.width(), e.height())
}
WH.keyPressIsAlphaNumeric = function (e) {
	var t = document.all ? e.keycode : e.which
	return (t > 47 && t < 58) || (t > 64 && t < 91) || (t > 95 && t < 112) || t == 222 || t == 0
}
WH.isRemote = function () {
	return !WH.PageMeta.wowhead
}
WH.isDev = function () {
	return !!WH.PageMeta.dev
}
WH.getDataEnv = function () {
	return WH.PageMeta.hasOwnProperty('dataEnv') ? WH.PageMeta.dataEnv.env : WH.dataEnv.MAIN
}
WH.getDataEnvFromKey = function (e) {
	for (let t in WH.dataEnvKey) {
		if (WH.dataEnvKey[t] === e) {
			return parseInt(t)
		}
	}
	return undefined
}
WH.getDataEnvKey = function (e) {
	return WH.dataEnvKey[e || WH.getDataEnv()]
}
WH.getDataEnvSeoName = function (e) {
	e = e || WH.getDataEnv()
	return WH.TERMS[e === WH.dataEnv.TBC ? 'tbcClassic' : WH.getDataEnvTerm(e)]
}
WH.getDataEnvTerm = function (e) {
	return WH.dataEnvTerm[e || WH.getDataEnv()]
}
WH.getDataTree = function (e) {
	if (e !== undefined) {
		return WH.dataEnvToTree[e]
	}
	return WH.PageMeta.hasOwnProperty('dataEnv') ? WH.PageMeta.dataEnv.tree : WH.dataTree.RETAIL
}
WH.getDataTreeKey = function (e) {
	return WH.getDataEnvKey(WH.dataTreeToRoot[e || WH.getDataTree()])
}
WH.getDataTreeTerm = function (e) {
	return WH.dataTreeTerm[e || WH.getDataTree()]
}
WH.getRootEnv = function (e) {
	return WH.dataTreeToRoot[WH.getDataTree(e || WH.getDataEnv())]
}
WH.getServerTime = function () {
	return WH.PageMeta.serverTime
}
WH.getDataBuild = function (e) {
	return (WH.PageMeta.dataBuild && WH.PageMeta.dataBuild[e || WH.getDataEnv()]) || '0'
}
WH.isBeta = function () {
	return WH.getDataEnv() === WH.dataEnv.BETA
}
WH.isBetaActive = function () {
	if (WH.PageMeta.hasOwnProperty('dataEnv')) {
		return WH.PageMeta.dataEnv.active.beta
	}
	return !!WH.wowheadRemote
}
WH.isClassicTree = function (e) {
	return WH.getDataTree(e) === WH.dataTree.CLASSIC
}
WH.isPtr = function () {
	return WH.getDataEnv() === WH.dataEnv.PTR
}
WH.isPtrActive = function () {
	if (WH.PageMeta.hasOwnProperty('dataEnv')) {
		return WH.PageMeta.dataEnv.active.ptr
	}
	return !!WH.wowheadRemote
}
WH.isRetailTree = function (e) {
	return WH.getDataTree(e) === WH.dataTree.RETAIL
}
WH.isTbcTree = function (e) {
	return WH.getDataTree(e) === WH.dataTree.TBC
}
WH.suppressExternalDebug = function () {
	return !!WH.PageMeta.suppressExternalDebug
}
WH.setupFooterMenus = function () {
	var e = { 'footer-help-menu': mn_footer_help, 'footer-tools-menu': mn_footer_tools, 'footer-about-menu': mn_footer_about }
	for (var t in e) {
		if (!e.hasOwnProperty(t)) continue
		var a = $('#' + t)
		if (a.length) {
			a.addClass('hassubmenu')
			Menu.add(a.get(0), e[t])
		}
	}
}
WH.getScreenshotUrl = function (e, t, a) {
	if (!t) {
		t = 'normal'
	}
	a = a || {}
	var i = t == 'normal' && typeof a.description == 'string' && a.description ? '-' + WH.Strings.slug(a.description, true) : ''
	var n = { 2: '.jpg', 3: '.png', 18: '.webp' }
	var r = n[a.imageType || 2] || n[2]
	return WH.staticUrl + '/uploads/screenshots/' + t + '/' + e + i + r
}
WH.maxLevel = WH.maxLevel || 60
WH.maxSkill = WH.maxSkill || 900
WH.convertRatingToPercent = function (e, t, a, i) {
	const n = WH.Wow.PlayerClass
	const r = WH.Wow.Item.Stat
	t = parseInt(t)
	var o = WH.convertRatingToPercent.RB,
		s = WH.convertRatingToPercent.LH,
		l = WH.convertRatingToPercent.LT
	if (!o || o[t] == null) {
		return 0
	}
	if (e < 0) {
		e = 1
	} else if (e > WH.maxLevel) {
		e = WH.maxLevel
	}
	if ([r.ID_DEFENSE_SKILL_RATING, r.ID_DODGE_RATING, r.ID_PARRY_RATING, r.ID_BLOCK_RATING].includes(t) && e < 34) {
		e = 34
	}
	let c = o[t]
	if ([r.ID_HASTE_MELEE_RATING, r.ID_HASTE_RATING].includes(t) && [n.PALADIN, n.DEATH_KNIGHT, n.SHAMAN, n.DRUID].includes(i)) {
		c /= 1.3
	}
	if (a < 0) {
		a = 0
	}
	if (l && l[t] && e >= 80 && e - 80 < l[t].length) {
		return a / l[t][e - 80]
	}
	let f
	if (e > 80) {
		f = s[e]
	} else if (e > 70) {
		f = (82 / 52) * Math.pow(131 / 63, (e - 70) / 10)
	} else if (e > 60) {
		f = 82 / (262 - 3 * e)
	} else if (e > 10) {
		f = (e - 8) / 52
	} else {
		f = 2 / 52
	}
	return a / c / f
}
WH.statToRating = {
	11: 0,
	12: 1,
	13: 2,
	14: 3,
	15: 4,
	16: 5,
	17: 6,
	18: 7,
	19: 8,
	20: 9,
	21: 10,
	25: 15,
	26: 15,
	27: 15,
	28: 17,
	29: 18,
	30: 19,
	31: 5,
	32: 8,
	34: 15,
	35: 15,
	36: 17,
	37: 23,
	44: 24,
	49: 25,
	57: 26,
	59: 11,
	60: 12,
	61: 13,
	62: 16,
	63: 20,
	64: 21,
	40: 29,
}
WH.statToJson = {
	0: 'mana',
	1: 'health',
	3: 'agi',
	4: 'str',
	5: 'int',
	6: 'spi',
	7: 'sta',
	8: 'energy',
	9: 'rage',
	10: 'focus',
	13: 'dodgertng',
	14: 'parryrtng',
	15: 'blockrtng',
	16: 'mlehitrtng',
	17: 'rgdhitrtng',
	18: 'splhitrtng',
	19: 'mlecritstrkrtng',
	20: 'rgdcritstrkrtng',
	21: 'splcritstrkrtng',
	22: 'corruption',
	23: 'corruptionres',
	24: '_splhitrtng',
	25: '_mlecritstrkrtng',
	26: '_rgdcritstrkrtng',
	27: '_splcritstrkrtng',
	28: 'mlehastertng',
	29: 'rgdhastertng',
	30: 'splhastertng',
	31: 'hitrtng',
	32: 'critstrkrtng',
	33: '_hitrtng',
	34: '_critstrkrtng',
	35: 'resirtng',
	36: 'hastertng',
	37: 'exprtng',
	38: 'atkpwr',
	39: 'rgdatkpwr',
	40: 'versatility',
	41: 'splheal',
	42: 'spldmg',
	43: 'manargn',
	44: 'armorpenrtng',
	45: 'splpwr',
	46: 'healthrgn',
	47: 'splpen',
	49: 'mastrtng',
	50: 'armorbonus',
	51: 'firres',
	52: 'frores',
	53: 'holres',
	54: 'shares',
	55: 'natres',
	56: 'arcres',
	57: 'pvppower',
	58: 'amplify',
	59: 'multistrike',
	60: 'readiness',
	61: 'speedbonus',
	62: 'lifesteal',
	63: 'avoidance',
	64: 'sturdiness',
	66: 'cleave',
	71: 'agistrint',
	72: 'agistr',
	73: 'agiint',
	74: 'strint',
}
WH.jsonToStat = {}
for (var i in WH.statToJson) {
	WH.jsonToStat[WH.statToJson[i]] = i
}
WH.individualToGlobalStat = { 16: 31, 17: 31, 18: 31, 19: 32, 20: 32, 21: 32, 24: 33, 25: 34, 26: 34, 27: 34, 28: 36, 29: 36, 30: 36 }
WH.convertScalingFactor = function (e, t, a, i, n) {
	var r = WH.convertScalingFactor.SV
	var o = WH.convertScalingFactor.SD
	if (!r || !r[e]) {
		if (g_user.roles & U_GROUP_ADMIN) {
			alert('There are no item scaling values for level ' + e)
		}
		return n ? {} : 0
	}
	var s = {},
		l = r[e],
		c = o[a]
	if (!c || !(i >= 0 && i <= 9)) {
		s.v = l[t]
	} else {
		s.n = WH.statToJson[c[i]]
		s.s = c[i]
		s.v = Math.floor((l[t] * c[i + 10]) / 1e4)
	}
	return n ? s : s.v
}
g_itemScalingCallbacks = []
WH.getSpellScalingIndexFromScalingClass = function (e, t) {
	switch (e) {
		case WH.EFFECT_SCALING_CLASS_2:
			if (t == 463) {
				return 13
			}
			break
		case WH.EFFECT_SCALING_CLASS_7:
			return 13
		case WH.EFFECT_SCALING_CLASS_8:
		case WH.EFFECT_SCALING_CLASS_9:
			return 19
	}
	if (e < 0) {
		return Math.abs(e) + 12
	}
	return e
}
WH.effectAverage = function (e, t, a, i) {
	var n = WH.convertScalingSpell.RandPropPoints
	var r = e['scalingClass']
	if (e['effectScalingClass'] && e['effectScalingClass'][i] != 0) {
		r = e['effectScalingClass'][i]
	}
	var o = e['coefficient'][i]
	var s = 1
	var l = 0
	if (o != 0 && r != 0) {
		if (e['scalesWithItemLevel']) {
			if (r == WH.EFFECT_SCALING_CLASS_8) {
				l = n[a][0]
			} else if (r == WH.EFFECT_SCALING_CLASS_9) {
				l = n[a][2]
			} else {
				l = n[a][1]
			}
		} else {
			let e = WH.getSpellScalingIndexFromScalingClass(r)
			l = WH.convertScalingSpell.SV[t][e - 1]
		}
		if (r == WH.EFFECT_SCALING_CLASS_7 && e['aura'] && e['aura'][i] == 4) {
			s = WH.getCombatRatingMult(a, 12)
		}
		return o * l * s
	}
	return e['effectBasePoints'][i]
}
WH.convertScalingSpell = function (e, t, a, i, n, r) {
	var o = WH.convertScalingSpell.SpellInformation
	if (!o || !o[t]) {
		return e
	}
	a = a - 1
	if (e.effects == undefined) e.effects = {}
	if (!e.effects.hasOwnProperty(a + 1)) {
		e.effects[a + 1] = {}
	}
	var s = o[t]
	var l = 0
	var c = WH.effectAverage(s, n, r, a)
	if (s['deltaCoefficient'][a] != 0) {
		var f = s['deltaCoefficient'][a]
		var u = Math.ceil(c - (c * f) / 2)
		var p = Math.floor(c + (c * f) / 2)
		if (i == 0) {
			l = (u + p) / 2
		} else if (i == 1) {
			l = u
		} else if (i == 2) {
			l = p
		}
	} else if (s['coefficient'][a] != 0) {
		l = c
	} else {
		l = s['effectBasePoints'][a]
	}
	l = Math.abs(l)
	var d = 'avg'
	switch (parseInt(i)) {
		case 0:
		case 3:
			d = 'avg'
			break
		case 1:
			d = 'min'
			break
		case 2:
			d = 'max'
			break
		case 4:
			d = 'pts'
			break
		default:
			d = 'avg'
	}
	var W = 5
	var H = W
	if (window.g_pageInfo && window.g_pageInfo.type == WH.Types.AZERITE_ESSENCE_POWER) {
		H = WH.Wow.Item.INVENTORY_TYPE_NECK
	}
	if (s.scalesWithItemLevel && s.appliesRatingAura && s.appliesRatingAura[a]) {
		l *= WH.getCombatRatingMult(r, H)
	}
	e.effects[a + 1][d] = l
	return e
}
WH.getDataSource = function () {
	if (WH.isSet('g_pageInfo')) {
		switch (g_pageInfo.type) {
			case WH.Types.ITEM:
				if (WH.isSet('g_items')) {
					return g_items
				}
				break
			case WH.Types.SPELL:
				if (WH.isSet('g_spells')) {
					return g_spells
				}
				break
			case WH.Types.AZERITE_ESSENCE_POWER:
				if (WH.isSet('g_azeriteEssencePowers')) {
					return g_azeriteEssencePowers
				}
				break
			case WH.Types.PET_ABILITY:
				if (WH.isSet('g_petabilities')) {
					return g_petabilities
				}
				break
		}
	}
	return []
}
WH.setJsonItemLevel = function (e, t, a) {
	if (a && a.scalingcategory - 11 > 0) {
		var i = a.maxlvlscaling ? Math.min(t, a.maxlvlscaling) : t
		var n = WH.getSpellScalingValue(a.scalingcategory, i)
		for (var r = 1; r < 3; ++r) {
			var o = a['itemenchspell' + r]
			var s = a['itemenchtype' + r]
			var l = WH.statToJson[o]
			if (s == 5 && e[l]) {
				var c = a['damage' + r]
				if (c) {
					e[l] = Math.round(n * c)
				}
			}
		}
		if (a.allstats) {
			for (var f in e) {
				e[f] = Math.round(n * a['damage1'])
			}
		}
	}
	if (!e.scadist || !e.scaflags) {
		return
	}
	e.bonuses = e.bonuses || {}
	var u = e.scaflags & 255,
		p = (e.scaflags >> 8) & 255,
		d = (e.scaflags & (1 << 16)) != 0,
		W = (e.scaflags & (1 << 17)) != 0,
		H = (e.scaflags & (1 << 18)) != 0,
		g
	switch (u) {
		case 5:
		case 1:
		case 7:
		case 17:
			g = 7
			break
		case 3:
		case 12:
			g = 8
			break
		case 16:
		case 11:
		case 14:
			g = 9
			break
		case 15:
			g = 10
			break
		case 23:
		case 21:
		case 22:
		case 13:
			g = 11
			break
		default:
			g = -1
	}
	if (g >= 0) {
		for (var r = 0; r < 10; ++r) {
			var h = WH.convertScalingFactor(t, g, e.scadist, r, 1)
			if (h.n) {
				e[h.n] = h.v
			}
			e.bonuses[h.s] = h.v
		}
	}
	if (H) {
		e.splpwr = e.bonuses[45] = WH.convertScalingFactor(t, 6)
	}
	if (d) {
		switch (u) {
			case 3:
				e.armor = WH.convertScalingFactor(t, 11 + p)
				break
			case 5:
				e.armor = WH.convertScalingFactor(t, 15 + p)
				break
			case 1:
				e.armor = WH.convertScalingFactor(t, 19 + p)
				break
			case 7:
				e.armor = WH.convertScalingFactor(t, 23 + p)
				break
			case 16:
				e.armor = WH.convertScalingFactor(t, 28)
				break
			case 14:
				e.armor = WH.convertScalingFactor(t, 29)
				break
			default:
				e.armor = 0
		}
	}
	if (W) {
		var m = e.mledps ? 'mle' : 'rgd',
			v
		switch (u) {
			case 23:
			case 21:
			case 22:
			case 13:
				e.dps = e[m + 'dps'] = WH.convertScalingFactor(t, H ? 2 : 0)
				v = 0.3
				break
			case 17:
				e.dps = e[m + 'dps'] = WH.convertScalingFactor(t, H ? 3 : 1)
				v = 0.2
				break
			case 15:
				e.dps = e[m + 'dps'] = WH.convertScalingFactor(t, p == 19 ? 5 : 4)
				v = 0.3
				break
			default:
				e.dps = e[m + 'dps'] = 0
				v = 0
		}
		e.dmgmin = e[m + 'dmgmin'] = Math.floor(e.dps * e.speed * (1 - v))
		e.dmgmax = e[m + 'dmgmax'] = Math.floor(e.dps * e.speed * (1 + v))
	}
}
WH.scaleItemEnchantment = function (e, t) {
	var a = e.enchantment
	if (e.scalinginfo && e.scalinginfo.scalingcategory - 11 > 0) {
		var i = a.match(/\d+/g)
		if (i) {
			var n = parseInt(e.scalinginfo.maxlvlscaling) ? Math.min(t, parseInt(e.scalinginfo.maxlvlscaling)) : t
			var r = WH.getSpellScalingValue(e.scalinginfo.scalingcategory, n)
			for (var o = 0; o < i.length; ++o) {
				var s = e.scalinginfo['damage' + (o + 1)]
				if (s) {
					a = a.replace(i[o], Math.round(r * s))
				}
			}
		}
	}
	return a
}
WH.getItemRandPropPointsType = function (e) {
	var t = e.slotbak ? e.slotbak : e.slot
	switch (t) {
		case 1:
		case 4:
		case 5:
		case 7:
		case 15:
		case 17:
		case 20:
		case 25:
			return 0
		case 2:
		case 9:
		case 11:
		case 16:
			return 2
		case 3:
		case 6:
		case 8:
		case 10:
		case 12:
			return 1
		case 13:
		case 14:
		case 21:
		case 22:
		case 23:
			return 3
		case 26:
			if (e.subclass == 19) {
				return 3
			}
			return 0
		case 28:
			return 4
			break
		default:
			return -1
	}
}
WH.scaleItemLevel = function (e, t) {
	let a = e.level
	let i = WH.curvePoints
	if (!i) {
		return a
	}
	let n = null
	let r = null
	let o = null
	if (e.scadist) {
		let t = WH.convertScalingFactor.SD
		let a = t ? t[e.scadist] : null
		if (a && a[22] && a[22] > 0) {
			r = a[20]
			o = a[21]
			n = a[22]
		}
	} else {
		if (e.contenttuning) {
			let t = WH.contentTuningLevels[e.contenttuning]
			if (t) {
				r = t[0]
				o = t[1]
			}
		}
		n = e.playercurve
	}
	if (n) {
		let e = t ? t : WH.maxLevel
		if (r && e < r) {
			e = r
		}
		if (o && e > o) {
			e = o
		}
		let s = i[n]
		if (s && s.length > 0) {
			let t = -1
			for (let a in s) {
				let i = s[a]
				if (i[1] >= e) {
					t = a
					break
				}
			}
			let i = s[t != -1 ? t : s.length - 1]
			let n = null
			let r = 0
			if (t > 0) {
				n = s[t - 1]
				let a = i[1] - n[1]
				if (a > 0) {
					let t = e - n[1]
					let o = t / a
					let s = i[2] - n[2]
					let l = o * s
					r = n[2] + l
				}
			} else {
				r = i[2]
			}
			if (r > 0) {
				a = Math.round(r)
			}
		}
	}
	return a
}
WH.applyStatModifications = function (e, t, a, i, n, r, o, s) {
	var l = {}
	if (e.hasOwnProperty('level')) {
		l = WH.dO(e)
	} else {
		WH.cOr(l, e, '__')
	}
	if (n && n.length) {
		var c = false
		for (var f = 0; f < n.length; ++f) {
			var u = n[f]
			if (u > 0 && WH.isSet('g_itembonuses') && g_itembonuses[u]) {
				var p = g_itembonuses[u]
				for (var d = 0; d < p.length; ++d) {
					var W = p[d]
					switch (W[0]) {
						case 11:
						case 13:
							if (c === false || W[2] < c) {
								l.scadist = W[1]
								l.scadistbonus = u
								l.scadistbonustype = W[0]
								l.contenttuning = W[3]
								l.playercurve = W[4]
								c = W[2]
							}
							break
						default:
							break
					}
				}
			}
		}
	}
	l.level = WH.scaleItemLevel(l, r)
	if (a == 'pvp' && e.pvpUpgrade) {
		l.level += e.pvpUpgrade
	}
	if (l.subitems && l.subitems[t]) {
		for (var H in l.subitems[t].jsonequip) {
			if (!l.hasOwnProperty(H)) {
				l[H] = 0
			}
			l[H] += l.subitems[t].jsonequip[H]
		}
	}
	if (n && n.length) {
		if (e.statsInfo) {
			l.statsInfo = {}
			for (var f in e.statsInfo) {
				l.statsInfo[f] = { alloc: parseInt(e.statsInfo[f].alloc), qty: e.statsInfo[f].qty, socketMult: e.statsInfo[f].socketMult }
			}
		}
		var g = [0, 0, 0, 0, 2147483647, 2147483647, 2147483647, 2147483647]
		l.extraStats = []
		var h = l.scadistbonus ? false : 0
		let t = [24, 25]
		let a = 0
		for (var f = 0; f < n.length; ++f) {
			var u = n[f]
			if (u > 0 && WH.isSet('g_itembonuses') && g_itembonuses[u]) {
				var p = g_itembonuses[u]
				for (var d = 0; d < p.length; ++d) {
					var W = p[d]
					if (W[0] == 25) {
						W[0] = 2
						let e = l.statsInfo[t[a]]
						if (e && e.alloc) {
							W[2] = e.alloc
						} else {
							W[2] = 0
						}
						a = Math.min(a + 1, t.length - 1)
					}
					switch (W[0]) {
						case 1:
							if (!l.scadistbonus) {
								l.level += W[1]
								h = false
							}
							break
						case 2:
							if (l.statsInfo) {
								if (l.statsInfo.hasOwnProperty(W[1])) {
									l.statsInfo[W[1]].alloc += W[2]
								} else {
									l.extraStats.push(W[1])
									l.statsInfo[W[1]] = { alloc: parseInt(W[2]), qty: 0, socketMult: 0 }
								}
							}
							break
						case 3:
							l.quality = parseInt(W[1])
							break
						case 4:
							var m = W[1]
							var v = W[2]
							var T = 4
							var _ = 4
							do {
								if (v <= g[T]) {
									var b = m
									m = g[T - 4]
									g[T - 4] = b
									var S = v
									v = g[T]
									g[T] = S
								}
								++T
								--_
							} while (_)
							break
						case 5:
							l.nameSuffix = WH.Wow.Item.getNameDescription(W[1]) || l.nameSuffix
							break
						case 6:
							var y = l.nsockets ? l.nsockets : 0
							l.nsockets = y + W[1]
							for (var E = y; E < y + W[1]; ++E) {
								l['socket' + (E + 1)] = W[2]
							}
							break
						case 7:
							break
						case 8:
							l.reqlevel += W[1]
							break
						case 14:
							if (h !== false) {
								h = l.level
							}
							break
						case 16:
							l.bond = parseInt(W[1])
							break
						case 35:
							l.limitcategory = parseInt(W[1])
						default:
							break
					}
				}
			}
		}
		if (h) {
			l.level = h
			l.previewLevel = h
		}
		l.namedesc = l.namedesc ? l.namedesc : ''
		for (var d = 0; d < 4; ++d) {
			let e = WH.Wow.Item.getNameDescription(g[d])
			if (e) {
				l.namedesc += (!l.namedesc ? '' : ' ') + e
				if (!d) {
					l.namedesccolor = WH.Wow.Item.getNameDescriptionColor(g[d])
				}
			}
		}
	}
	;(function () {
		if (!s || !s.length || !l.statsInfo) {
			return
		}
		for (let t, a = 0; (t = WH.Wow.Item.Stat.CRAFTING_STAT_FROM[a]); a++) {
			let i = s[a]
			if (!i) {
				continue
			}
			if (!l.statsInfo[t]) {
				continue
			}
			if (l.statsInfo[i]) {
				l.statsInfo[i].alloc += e.statsInfo[t].alloc
			} else {
				l.statsInfo[i] = l.statsInfo[t]
				l.extraStats.push(i)
			}
			delete l.statsInfo[t]
		}
	})()
	if (e.statsInfo && e.level && WH.applyStatModifications.ScalingData) {
		var I = WH.applyStatModifications.ScalingData.AV,
			M = WH.applyStatModifications.ScalingData.SV,
			w = WH.applyStatModifications.ScalingData.AL
		l.level = i ? i : a && e.upgrades && e.upgrades[a - 1] ? l.level + e.upgrades[a - 1] : l.level
		var L = l.level - e.level
		var x = Math.pow(1.15, L / 15)
		var N = WH.getItemRandPropPointsType(l)
		var k = []
		for (var C = l.level; C >= 0; C--) {
			if (M.hasOwnProperty(C)) {
				k = M[C]
				break
			}
		}
		var A = 0
		if (N != -1) {
			var O = 0
			switch (l.quality) {
				case 5:
				case 4:
					O = 0
					break
				case 7:
				case 3:
					O = 1
					break
				case 2:
					O = 2
					break
				default:
					break
			}
			var R = O * 5 + N
			A = k[R] ? k[R] : 0
		}
		var B = k[15]
		for (var f in WH.statToJson) {
			var P = WH.statToJson[f]
			if (l[P] || (l.statsInfo && l.statsInfo[f])) {
				var D = 0
				var F = 0
				if (l.statsInfo.hasOwnProperty(f)) {
					D = parseFloat(l.statsInfo[f].socketMult)
					F = parseInt(l.statsInfo[f].alloc)
				}
				var U = Math.round(D * B)
				if (F && (A > 0 || l.contenttuning > 0)) {
					l[P] = F * 1e-4 * A - U
				} else {
					l[P] = (l[P] + U) * x - U
				}
				if (P == 'sta') {
					l[P] = l[P] * WH.getStaminaRatingMult(l.level, l.slot || g_items[l.id].slot)
				} else if (o && WH.inArray(WH.applyStatModifications.BASE_STATS, f) < 0) {
					l[P] = l[P] * WH.getCombatRatingMult(l.level, l.slot || g_items[l.id].slot)
				} else if (P === 'corruption' || P === 'corruptionres') {
					l[P] = F
				}
				switch (P) {
					case 'agistrint':
						l['agi'] = l['str'] = l['int'] = l[P]
						break
					case 'agistr':
						l['agi'] = l['str'] = l[P]
						break
					case 'agiint':
						l['agi'] = l['int'] = l[P]
						break
					case 'strint':
						l['str'] = l['int'] = l[P]
						break
					default:
						break
				}
			}
		}
		if (l['armor'] && I[l.level]) {
			var G = l.quality == 7 ? 3 : l.quality
			var q = l.subclass == -6 ? 1 : l.subclass
			if (WH.inArray([1, 2, 3, 4], q) != -1) {
				var $ = I[l.level][11 + G]
				var V = I[l.level][q - 1]
				var j = w[l.slot][q - 1]
				l['armor'] = Math.floor(V * $ * j + 0.5)
			}
			if (l.subclass == 6) {
				l['armor'] = I[l.level][4 + G]
			}
		}
		if (l['dps']) {
			var J = ['dps', 'mledps', 'rgddps']
			var K = ['dmgmin1', 'mledmgmin', 'rgddmgmin', 'dmgmax1', 'mledmgmax', 'rgddmgmax']
			var z = WH.getEffectiveWeaponDamage(l, false)
			var Q = WH.getEffectiveWeaponDamage(l, true)
			z = Math.floor(Math.max(1, z))
			Q = Math.max(1, Q)
			if (!WH.isRetailTree()) {
				z = l.damagemin || l.dmgmin1 || z
				Q = l.damagemax || l.dmgmax1 || Q
			}
			var Y = (z + Q) / 2 / l.speed
			var Z = Y >= 1e3 ? 0 : WH.isRetailTree() ? 1 : 2
			Y = parseFloat(Y.toFixed(Z))
			for (var f in J) {
				if (l[J[f]]) {
					l[J[f]] = Y
				}
			}
			for (var f in K) {
				if (l[K[f]]) {
					if (K[f].indexOf('max') != -1) {
						l[K[f]] = Q
					} else {
						l[K[f]] = z
					}
				}
			}
		}
	}
	return l
}
WH.applyStatModifications.BASE_STATS = [4, 3, 5, 71, 72, 73, 74, 7, 1, 0, 8, 9, 2, 10]
WH.applyStatModifications.ITEM_TIMEWALKINGMODE_TBC_LEVEL = 67
WH.applyStatModifications.ITEM_TIMEWALKINGMODE_WOTLK_LEVEL = 92
WH.applyStatModifications.ITEM_TIMEWALKINGMODE_CATA_LEVEL = 104
WH.applyStatModifications.ITEM_TIMEWALKINGMODE_MISTS_LEVEL = 116
WH.getItemDamageValue = function (e, t, a) {
	var i = WH.applyStatModifications.ScalingData.DV
	var n = 7 * a + t
	if (i && i[e] && i[e][n]) {
		return i[e][n]
	}
	return 0
}
WH.getEffectiveWeaponDamage = function (e, t) {
	var a = e.level
	var i = e.subclass
	var n = e.quality
	var r = e.slotbak ? e.slotbak : e.slot
	var o = 0
	var s = false
	var l = e.flags2 & 512
	if (e.classs != 2) {
		return 0
	}
	if (n > 7) {
		return 0
	}
	if (n == 7) {
		n = 3
	}
	if (r > 22) {
		if (r == 24) {
			o = 0
			s = true
		}
		if (!s && (r <= 24 || r > 26)) {
			s = true
		}
	} else {
		if (r == 21 || r == 22 || r == 13) {
			if (!l) {
				o = WH.getItemDamageValue(a, n, 0)
			} else {
				o = WH.getItemDamageValue(a, n, 1)
			}
			s = true
		}
		if (!s && r != 15) {
			if (r != 17) {
				s = true
			} else {
				if (!l) {
					o = WH.getItemDamageValue(a, n, 2)
				} else {
					o = WH.getItemDamageValue(a, n, 3)
				}
				s = true
			}
		}
	}
	if (!s && i >= 2) {
		if (i == 2 || i == 3 || i == 18) {
			if (!l) {
				o = WH.getItemDamageValue(a, n, 2)
			} else {
				o = WH.getItemDamageValue(a, n, 3)
			}
			s = true
		}
		if (!s && i == 19) {
			o = WH.getItemDamageValue(a, n, 1)
		}
	}
	if (o > 0) {
		var c = e.dmgrange || 0
		if (!t) {
			return o * e.speed * (1 - c / 2)
		} else {
			return Math.floor(o * e.speed * (1 + c / 2) + 0.5)
		}
	}
	return 0
}
WH.getJsonReforge = function (e, t) {
	if (!t) {
		if (!WH.reforgeStats) {
			return []
		}
		e.__reforge = {}
		e.__reforge.all = []
		for (var t in WH.reforgeStats) {
			var a = WH.getJsonReforge(e, t)
			if (a.amount) {
				e.__reforge.all.push(a)
			}
		}
		return e.__reforge.all
	}
	if (!WH.reforgeStats || !WH.reforgeStats[t]) {
		return {}
	}
	e.__statidx = {}
	for (var i in e) {
		if (WH.individualToGlobalStat[WH.jsonToStat[i]]) {
			e.__statidx[WH.individualToGlobalStat[WH.jsonToStat[i]]] = e[i]
		} else {
			e.__statidx[WH.jsonToStat[i]] = e[i]
		}
	}
	if (!e.__reforge) {
		e.__reforge = {}
	}
	var a = (e.__reforge[t] = WH.dO(WH.reforgeStats[t]))
	e.__reforge[t].amount = Math.floor(a.v * (e.__statidx[a.i1] && !e.__statidx[a.i2] ? e.__statidx[a.i1] : 0))
	return e.__reforge[t]
}
WH.getJsonItemEnchantMask = function (e) {
	if (e.classs == 2 && e.subclass == 19) {
		return 1 << (21 - 1)
	}
	return 1 << (e.slot - 1)
}
WH.getArtifactKnowledgeMultiplier = function (e) {
	let t = 1
	for (let a = 0, i; (i = WH.Tooltip.ARTIFACT_KNOWLEDGE_MULTIPLIERS[a]); a++) {
		if (a > e) {
			break
		}
		t = i
	}
	return t
}
WH.getCurveValue = function (e, t) {
	var a
	if (!WH.curvePoints || !(a = WH.curvePoints[e])) {
		return undefined
	}
	var i = a[0][1]
	var n = a[0][2]
	if (i > t) {
		return n
	}
	for (var r = 0, o; (o = a[r]); r++) {
		if (t == o[1]) {
			return o[2]
		}
		if (t < o[1]) {
			return ((o[2] - n) / (o[1] - i)) * (t - i) + n
		}
		i = o[1]
		n = o[2]
	}
	return n
}
WH.setItemModifications = function (e, t, a, i, n, r, o) {
	if (!WH.isSet('g_items') || !g_items[t] || !g_items[t].jsonequip) {
		return e
	}
	if (!n) {
		n = WH.maxLevel
	}
	a = a ? a.split(':') : null
	var s = g_items[t].bonusesData
	var l = 0
	var c = a ? a.indexOf('u') : -1
	if (s && c != -1) {
		l = a[c + 1]
		a.splice(c, 1)
	}
	if (!r) {
		r = 0
		switch (i) {
			case 'twtbc':
				r = WH.applyStatModifications.ITEM_TIMEWALKINGMODE_TBC_LEVEL
				break
			case 'twwotlk':
				r = WH.applyStatModifications.ITEM_TIMEWALKINGMODE_WOTLK_LEVEL
				break
			case 'twcata':
				r = WH.applyStatModifications.ITEM_TIMEWALKINGMODE_CATA_LEVEL
				break
			case 'twmists':
				r = WH.applyStatModifications.ITEM_TIMEWALKINGMODE_MISTS_LEVEL
				break
		}
	}
	i = !r ? i : null
	var f = WH.applyStatModifications(g_items[t].jsonequip, 0, i, r, a, n, undefined, o)
	if (!f.name && g_items[t].hasOwnProperty('name_' + Locale.getName())) {
		f.name = g_items[t]['name_' + Locale.getName()]
		f.quality = g_items[t].quality
	}
	if (l) {
		var u = WH.bonusesBtnGetContextBonusId(a)
		var p = s[u].sub[l].sub
		for (var d in p) {
			var W = WH.applyStatModifications(g_items[t].jsonequip, 0, i, r, [u, d])
			for (var H in W.statsInfo) {
				var g = W[WH.statToJson[H]]
				if (f.statsInfo[H]) {
					if (typeof f[WH.statToJson[H]] == 'number' || !f[WH.statToJson[H]]) {
						var h = f[WH.statToJson[H]] ? f[WH.statToJson[H]] : g
						f[WH.statToJson[H]] = {}
						f[WH.statToJson[H]]['min'] = h
						f[WH.statToJson[H]]['max'] = h
					}
					var m = f[WH.statToJson[H]]['min']
					var v = f[WH.statToJson[H]]['max']
					if (g < m) {
						f[WH.statToJson[H]]['min'] = g
					} else if (g > v) {
						f[WH.statToJson[H]]['max'] = g
					}
				}
			}
		}
	}
	e = e.replace(/(<!--ilvl-->)\d+\+?/, function (e, t) {
		return t + f.level + (f.previewLevel ? '+' : '')
	})
	let T = false
	let b = 1
	let S = WH.maxLevel
	if (f.scadist) {
		let e = WH.convertScalingFactor.SD
		let t = e ? e[f.scadist] : null
		if (t && t[21]) {
			T = true
			b = t[20] ? t[20] : 1
			S = t[21]
		}
	} else if (f.contenttuning) {
		let e = WH.contentTuningLevels[f.contenttuning]
		if (e) {
			T = true
			b = e[0]
			S = e[1]
		}
	} else if (f.scadistbonus && f.scadistbonustype === 13 && f.playercurve) {
		let e = WH.curvePoints[f.playercurve]
		b = e[0][1]
		S = e[e.length - 1][1]
		T = true
	}
	if (T) {
		n = n && n <= S ? n : S
		e = e.replace(/(<!--lvl-->)\d+/g, function (e, t) {
			return t + (n && n <= S ? n : S)
		})
		e = e.replace(/(<!--minlvl-->)\d+/, function (e, t) {
			return t + b
		})
		e = e.replace(/(<!--maxlvl-->)\d+/, function (e, t) {
			return t + S
		})
		let a = false
		e = e.replace(/<!--i\?(\d+):(\d+):(\d+):(\d+)(?::(\d+):(\d+))?/, function (e, t, i, r, o, s, l) {
			a = true
			return '\x3c!--i?' + t + ':' + b + ':' + S + ':' + n + ':' + (f.scadist || f.contenttuning) + ':' + (l || 0)
		})
		if (!a) {
			e += '\x3c!--i?' + t + ':' + b + ':' + S + ':' + n + ':' + (f.scadist || f.contenttuning) + ':0--\x3e'
		}
		e = e.replace(/(<!--huindex-->)\d+/, function (e, t) {
			let a = 0
			if (f.scadistbonus && f.heirloombonuses) {
				for (let e = 0, t; (t = f.heirloombonuses[e]); e++) {
					if (parseInt(f.scadistbonus) === t) {
						a = e + 1
						break
					}
				}
			}
			return t + a
		})
	} else {
		e = e.replace(/<!--i\?(\d+):(\d+):(\d+):(\d+)(?::(\d+):(\d+))?/, function (e, t, a, i, r, o, s) {
			return '\x3c!--i?' + t + ':' + a + ':' + i + ':' + (n ? n : i)
		})
	}
	var y
	if ((y = WH.ge('sl' + t))) {
		y.style.display = T ? '' : 'none'
	}
	e = e.replace(/(<!--pvpilvl-->)\d+/, function (e, t) {
		return t + (f.level + (i != 'pvp' ? f.pvpUpgrade : 0))
	})
	e = e.replace(/(<!--ilvldelta-->)\d+/, function (e, t) {
		var a = 1718
		var i = Math.floor(WH.getCurveValue(a, f.level) || 2)
		return t + i
	})
	e = e.replace(/(<!--rlvl-->)\d+/, function (e, t) {
		return t + f.reqlevel
	})
	e = e.replace(/(<!--uindex-->)\d+/, function (e, t) {
		return i && i != 'pvp' ? t + i : e
	})
	var E = typeof f.dmgrange != 'undefined' && f.dmgrange
	var I = new RegExp('(\x3c!--dmg--\x3e)[\\d,]+' + (E ? '(\\D*?)[\\d,]+' : '') + '')
	e = e.replace(I, function (e, t, a) {
		return t + WH.numberFormat(f.dmgmin1) + (E ? a + WH.numberFormat(f.dmgmax1) : '')
	})
	e = e.replace(/(<!--dps-->\D*?)([\d,]+(?:\.\d+)?)/, function (e, t) {
		var a = f.dps >= 1e3 ? 0 : WH.isRetailTree() ? 1 : 2
		return t + (f.dps ? WH.numberFormat(f.dps.toFixed(a)) : '0')
	})
	e = e.replace(/(<!--amr-->)\d+/, function (e, t) {
		return t + f.armor
	})
	var M = WH.getCombatRatingMult(f.level, g_items[t].slot)
	e = (function (e) {
		let t = WH.ce('div', { innerHTML: e })
		WH.qsa('span', t).forEach(function (e) {
			let t
			let a
			let i
			let n
			e.childNodes.forEach(function (e) {
				if (e.nodeType === Node.COMMENT_NODE) {
					let r
					if ((r = (e.nodeValue || '').match(/^stat(\d+)$/))) {
						t = parseInt(r[1])
						i = e
					}
					if ((r = (e.nodeValue || '').match(/^rtg(\d+)$/))) {
						a = parseInt(r[1])
						n = e
					}
				}
			})
			if (t === undefined && a === undefined) {
				return
			}
			let r = false
			if (a) {
				let e = f[WH.statToJson[a]] ? f[WH.statToJson[a]] : 0
				let t = e < 0 ? '-' : '+'
				if (e) {
					let t = Math.round((l && e.min ? e.min : e) * M)
					let a = Math.round((l && e.max ? e.max : e) * M)
					e = WH.numberLocaleFormat(t != a ? t + '-' + a : t)
				} else {
					r = true
					e = 0
				}
				let i = n.previousSibling
				if (i && i.nodeType === Node.TEXT_NODE) {
					i.nodeValue = i.nodeValue.replace(/[-+]$/, t)
				}
				let o = n.nextSibling
				if (o && o.nodeType === Node.TEXT_NODE) {
					o.nodeValue = o.nodeValue.replace(/[-\d\.,]+/, e)
				}
			} else {
				let e = f[WH.statToJson[t]] ? f[WH.statToJson[t]] : 0
				if (e) {
					let t = Math.round(l && e.min ? e.min : e)
					let a = Math.round(l && e.max ? e.max : e)
					e = (t > 0 ? '+' : '-') + WH.numberLocaleFormat(t != a ? t + '-' + a : t)
				} else {
					r = true
					e = '+0'
				}
				let a = i.nextSibling
				if (a && a.nodeType === Node.TEXT_NODE) {
					a.nodeValue = a.nodeValue.replace(/[-+][-\d\.,]+/, e)
				}
			}
			if (r) {
				WH.displayNone(e)
				let t = e.nextSibling
				while (t) {
					if (t.nodeType === Node.ELEMENT_NODE) {
						if (t.nodeName.toLowerCase() === 'br') {
							t.parentNode.replaceChild(document.createComment('br'), t)
						}
						break
					}
					t = t.nextSibling
				}
			} else {
				WH.displayDefault(e)
			}
		})
		return t.innerHTML
	})(e)
	if (f.extraStats && f.extraStats.length) {
		e = e.replace(/<!--re--><span[^<]*?<\/span>(<br \/>)?/, '')
		var w = WH.applyStatModifications.BASE_STATS
		e = e.replace(/<!--ebstats-->/, function (e) {
			var t = ''
			for (var a = 0; a < f.extraStats.length; ++a) {
				var i = f.extraStats[a]
				if (w.indexOf(i) == -1) {
					continue
				}
				var n =
					'$1$2 ' + (WH.statToJson && WH.statToJson[i] && LANG.traits[WH.statToJson[i]] ? LANG.traits[WH.statToJson[i]][1] : 'Unknown')
				var r = WH.statToJson && WH.statToJson[i] ? f[WH.statToJson[i]] : 0
				var o = Math.round((l && r.min ? r.min : r) * M)
				var s = Math.round((l && r.max ? r.max : r) * M)
				var c = WH.numberLocaleFormat(o != s ? o + '-' + s : o)
				t += '<br /><span>\x3c!--stat' + i + '--\x3e' + WH.sprintf(n, o < 0 ? '-' : '+', c) + '</span>'
			}
			return t + e
		})
		e = e.replace(/<!--egstats-->/, function (e) {
			var t = ''
			for (var a = 0; a < f.extraStats.length; ++a) {
				var i = f.extraStats[a]
				if (w.indexOf(i) != -1) {
					continue
				}
				var n = M
				var r = 'q2'
				switch (WH.statToJson[i]) {
					case 'corruption':
						r = 'stat-corruption'
						n = 1
						break
					case 'corruptionres':
						r = 'q6'
						n = 1
						break
				}
				var o =
					'$1$2 ' + (WH.statToJson && WH.statToJson[i] && LANG.traits[WH.statToJson[i]] ? LANG.traits[WH.statToJson[i]][1] : 'Unknown')
				var s = WH.statToJson && WH.statToJson[i] ? f[WH.statToJson[i]] : 0
				var c = Math.round((l && s.min ? s.min : s) * n)
				var u = Math.round((l && s.max ? s.max : s) * n)
				var p = WH.numberLocaleFormat(c != u ? c + '-' + u : c)
				var d = WH.sprintf('\x3c!--rtg$1--\x3e$2', i, p)
				var W = ''
				if (WH.statToRating && WH.statToRating[i]) {
					W = WH.sprintf('&nbsp;<small>(\x3c!--rtg%$1--\x3e0&nbsp;@&nbsp;L$2' + WH.maxLevel + ')</small>', i, l ? '' : '\x3c!--lvl--\x3e')
				}
				var H = ''
				if (i == 50) {
					H = '\x3c!--stat%d--\x3e'
				}
				if (i == 64) {
					o = o.substr(5)
					W = ''
				}
				t += '<br /><span class="' + r + '">' + H + WH.sprintf(o, c >= 0 ? '+' : '-', d) + W + '</span>'
			}
			return t + e
		})
	}
	e = e.replace(/(<!--nstart-->)(.*)(<!--nend-->)/, function (e, t, a, i) {
		var n = f.quality
		var r = f.name
		var o = f.nameSuffix ? ' ' + f.nameSuffix : ''
		return t + WH.sprintf('<b class="q$1">$2</b>', n, r + o) + i
	})
	e = e.replace(/(<!--ndstart-->)(.*)(<!--ndend-->)/, function (e, t, a, i) {
		if (!f.namedesc) {
			return t + i
		}
		if (!f.namedesccolor) {
			return e
		}
		var n = parseInt(f.namedesccolor).toString(16)
		while (n.length < 6) {
			n = '0' + n
		}
		return t + WH.sprintf('<br /><span style="color: $1">$2</span>', '#' + n, f.namedesc) + i
	})
	var L = g_items[t].jsonequip.nsockets | 0
	if ((!L && f.nsockets) || (L && f.nsockets > L)) {
		e = e.replace(/<!--ps-->(<br(?: \/)?>)?/, function (e, t) {
			var a = ''
			for (var i = L; i < f.nsockets; ++i) {
				if (!f['socket' + (i + 1)]) {
					continue
				}
				var n = f['socket' + (i + 1)]
				var r = 'socket-unknown'
				var o = 81
				var s = n
				switch (n) {
					case 1:
						r = 'socket-meta'
						o = 81
						s = 1
						break
					case 2:
						r = 'socket-red'
						o = 81
						s = 2
						break
					case 3:
						r = 'socket-yellow'
						o = 81
						s = 3
						break
					case 4:
						r = 'socket-blue'
						o = 81
						s = 4
						break
					case 5:
						r = 'socket-hydraulic'
						o = 81
						s = 5
						break
					case 6:
						r = 'socket-cogwheel'
						o = 81
						s = 6
						break
					case 7:
						r = 'socket-prismatic'
						o = 81
						s = 9
						break
					case 8:
						r = 'socket-relic-iron'
						o = 225
						s = 64
						break
					case 9:
						r = 'socket-relic-blood'
						o = 225
						s = 128
						break
					case 10:
						r = 'socket-relic-shadow'
						o = 225
						s = 256
						break
					case 11:
						r = 'socket-relic-fel'
						o = 225
						s = 512
						break
					case 12:
						r = 'socket-relic-arcane'
						o = 225
						s = 1024
						break
					case 13:
						r = 'socket-relic-frost'
						o = 225
						s = 2048
						break
					case 14:
						r = 'socket-relic-fire'
						o = 225
						s = 4096
						break
					case 15:
						r = 'socket-relic-water'
						o = 225
						s = 8192
						break
					case 16:
						r = 'socket-relic-life'
						o = 225
						s = 16384
						break
					case 17:
						r = 'socket-relic-storm'
						o = 225
						s = 32768
						break
					case 18:
						r = 'socket-relic-holy'
						o = 225
						s = 65536
						break
					case 19:
						r = 'socket-red'
						o = 81
						s = 10
						break
					case 20:
						r = 'socket-yellow'
						o = 81
						s = 11
						break
					case 21:
						r = 'socket-blue'
						o = 81
						s = 12
						break
					case 22:
						r = 'socket-domination'
						o = 81
						s = 13
						break
					default:
						break
				}
				var l = WH.sprintf('<a href="/items/gems?filter=$1;$2;0" class="$3 q0">', o, s, r)
				l += g_socket_names[n]
					? g_socket_names[n]
					: g_gem_types[n]
					? WH.sprintf(WH.TERMS.emptyrelicslot_format.replace('%s', '$1'), g_gem_types[n])
					: 'Unknown Socket'
				l += '</a>'
				a += '<br>' + l
			}
			return (L == 0 ? '<br>' : '') + a + '<br><br>'
		})
	}
	if (a && WH.Tooltip.BONUS_ITEM_EFFECTS) {
		e = e.replace(/<!--itemEffects:(\d)-->/, function (e, t) {
			let i = f.extraStats && f.extraStats.indexOf(parseInt(WH.jsonToStat.corruption)) >= 0
			let n = ''
			for (let e, t = 0; (e = a[t]); t++) {
				let t = WH.Tooltip.BONUS_ITEM_EFFECTS[e] || []
				for (let e, a = 0; (e = t[a]); a++) {
					let t = WH.Tooltip.ITEM_EFFECT_TOOLTIP_HTML[e]
					if (t) {
						if (i) {
							t = t.replace(/\b(class=")q2\b/g, '$1stat-corruption')
						}
						n += (n ? '<br>' : '') + t
					}
				}
			}
			return n + (n && t ? '<br>' : '') + e
		})
	}
	if (WH.applyStatModifications && WH.convertScalingSpell.SpellInformation) {
		var x
		var N = { effects: {} }
		var k = /(<!--pts(\d):(\d):(\d+(?:\.\d+)?):(\d+)(:\d+(?:\.\d+)?)?(:crm)?-->(?:<!--rtg\d+-->)?)(\d+(?:\.\d+)?)(<!---->(%?))?/g
		while ((x = k.exec(e)) !== null) {
			var C = x[2]
			var A = x[3]
			var O = x[5]
			if (O <= 0) {
				continue
			}
			N[O] = N[O] || {}
			let e = f.scadistbonus && f.scadistbonustype === 13 ? g_items[t].level : f.level
			WH.cO(N[O], WH.convertScalingSpell(N[O], O, C, A, n, e))
		}
		e = WH.adjustSpellPoints(e, N, f.level, g_items[t].jsonequip.slot)
	}
	var R = 0
	switch (r) {
		case WH.applyStatModifications.ITEM_TIMEWALKINGMODE_TBC_LEVEL:
			R = 70
			break
		case WH.applyStatModifications.ITEM_TIMEWALKINGMODE_WOTLK_LEVEL:
			R = 80
			break
		case WH.applyStatModifications.ITEM_TIMEWALKINGMODE_CATA_LEVEL:
			R = 85
			break
		case WH.applyStatModifications.ITEM_TIMEWALKINGMODE_MISTS_LEVEL:
			R = 90
			break
		default:
			break
	}
	if (R) {
		e = e.replace(/<!--ee(\d+):(\d+):(\d+):(\d+):(\d+):(\d+)-->([^<]*)<\/span>/gi, function (e, t, a, i, n, r, o, s) {
			var l = {
				enchantment: s,
				scalinginfo: { scalingcategory: t, minlvlscaling: a, maxlvlscaling: i, damage1: n / 1e3, damage2: r / 1e3, damage3: o / 1e3 },
			}
			var c = WH.scaleItemEnchantment(l, R)
			return '\x3c!--ee--\x3e' + c + '</span>'
		})
	}
	e = e.replace(/(<!--rtg%(\d+)-->)([\.,0-9]+)%?/g, function (t, a, i, r) {
		_ = e.match(new RegExp('\x3c!--rtg' + i + '--\x3e([\\d\\.,]+)(-[\\d\\.,]+)?'))
		if (!_) {
			return t
		}
		if (_[2]) {
			_[2] = _[2].replace(/\D/, '')
		}
		_[1] = _[1].replace(/\D/, '')
		var o = _[2] ? (Math.abs(parseInt(_[2])) + parseInt(_[1])) / 2 : _[1]
		return a + (_[2] ? '~' : '') + Math.round(WH.convertRatingToPercent(n ? n : WH.maxLevel, i, o) * 100) / 100 + (i != 49 ? '%' : '')
	})
	e = e.replace(/<!--bo-->(<br(?: \/)?>)?/, function (e, t) {
		let a = ''
		if (f.bond) {
			switch (f.bond) {
				case 1:
					a = WH.GlobalStrings.ITEM_BIND_ON_PICKUP
					break
				case 2:
					a = WH.GlobalStrings.ITEM_BIND_ON_EQUIP
					break
				case 3:
					a = WH.GlobalStrings.ITEM_BIND_ON_USE
					break
				case 4:
				case 5:
					a = WH.GlobalStrings.ITEM_BIND_QUEST
					break
				default:
					a = WH.TERMS.unknownBindType_stc
					break
			}
		}
		if (a != '') {
			a = '<br />' + a
		}
		return '\x3c!--bo--\x3e' + a + t
	})
	e = e.replace(/<!--ue-->[^<]*<?/, function () {
		let e = (WH.getPageData('wow.item.bonusLimitCategoryNames') || {})[f.limitcategory]
		if (!e) {
			return '\x3c!--ue--\x3e<'
		}
		let t = e.uniqueEquipped ? WH.GlobalStrings.ITEM_UNIQUE_EQUIPPABLE : WH.GlobalStrings.ITEM_UNIQUE
		return '\x3c!--ue--\x3e' + t + ': ' + e.name + ' (' + e.maxCount + ')' + '<'
	})
	;(function () {
		var a = WH.ce('div')
		a.innerHTML = e
		a.querySelectorAll('a[href*="/spell="]').forEach(function (e) {
			var t = e.dataset.wowhead || ''
			t = t.replace(/(^|&)i?lvl=\d+/g, '')
			if (n) {
				t += (t ? '&' : '') + 'lvl=' + n
			}
			if (f.level) {
				t += (t ? '&' : '') + 'ilvl=' + f.level
			}
			e.dataset.wowhead = t
		})
		let i = WH.getPageData('item.sellprice.' + t)
		let r = a.querySelector('.whtt-sellprice')
		if (i && r) {
			let e = r.firstChild
			WH.ee(r)
			WH.ae(r, e)
			let t = i.itemLevel
			let a = t[f.level] || t[Math.max.apply(null, Object.keys(t))]
			let n = i.quality[f.quality] || 0
			let o = Math.floor(i.base * a * n)
			WH.ae(r, WH.Wow.buildMoney({ copper: o }))
		}
		e = a.innerHTML
	})()
	return e
}
WH.setTooltipLevel = function (e, t, a) {
	var i = typeof e
	if (i == 'number') {
		var n = WH.getDataSource()
		if (n[e] && n[e][(a ? 'buff_' : 'tooltip_') + Locale.getName()]) {
			e = n[e][(a ? 'buff_' : 'tooltip_') + Locale.getName()]
		} else {
			return e
		}
	} else if (i != 'string') {
		return e
	}
	e = e.replace(/<!--(gem|ee)(\d+):(\d+):(\d+):(\d+):(\d+):(\d+)-->([^<]*)<\/span>/gi, function (e, a, i, n, r, o, s, l, c) {
		var f = {
			enchantment: c,
			scalinginfo: { scalingcategory: i, minlvlscaling: n, maxlvlscaling: r, damage1: o / 1e3, damage2: s / 1e3, damage3: l / 1e3 },
		}
		var u = WH.scaleItemEnchantment(f, t)
		return '\x3c!--' + a + '--\x3e' + u + '</span>'
	})
	var r = e.match(/<!--i?\?([0-9-:]*)-->/)
	var o
	var s
	if (r) {
		o = r[1].split(':').map(Number)
		t = Math.min(o[2], Math.max(o[1], t))
		s = o[4] || 0
	}
	if (s) {
		if (!e.match(/<!--pts\d:\d:\d+(?:\.\d+)?:\d+-->/g) && !(s < 0) && !a) {
			e = WH.setItemModifications(e, o[0], null, null, t)
			WH.updateItemStringLink.call(this)
		} else {
			if (s > 0) {
				if (
					!o[7] &&
					WH.isSet('g_pageInfo') &&
					g_pageInfo.type == 3 &&
					g_items[g_pageInfo.typeId] &&
					g_items[g_pageInfo.typeId].quality != 7
				) {
					t = Math.min(g_items[g_pageInfo.typeId].reqlevel, t)
				}
				var l = { scadist: s }
				e = e.replace(/<!--cast-->\d+\.\d+/, '\x3c!--cast--\x3e' + l.cast)
				var c = /<!--pts([0-9-:]*)-->/g
				var f = c.exec(e)
				l.effects = true
				while (f != null) {
					var u = f[1].split(':').map(Number)
					var p = u[0]
					var d = u[1]
					var W = u[3]
					if (W > 0) {
						if (l[W] == undefined) {
							l[W] = {}
							l[W].effects = {}
						}
						WH.cO(l[W], WH.convertScalingSpell(l[W], W, p, d, t, t))
					}
					f = c.exec(e)
				}
				if (l.effects) {
					var H = 5
					var g = H
					if (window.g_pageInfo && window.g_pageInfo.type == WH.Types.AZERITE_ESSENCE_POWER) {
						g = WH.Wow.Item.INVENTORY_TYPE_NECK
					}
					e = WH.adjustSpellPoints(e, l, t, g)
					if (this.modified) {
						for (var h in this.modified[1]) {
							var m = this.modified[1][h]
							for (var v = 0; v < m.length; ++v) {
								m[v][0] = WH.adjustSpellPoints(m[v][0], l, t, g)
								m[v][1] = WH.adjustSpellPoints(m[v][1], l, t, g)
							}
						}
					}
				}
			} else {
				var T = -s
				var b = WH.getSpellScalingValue(T, t)
				for (var S = 0; S < 3; ++S) {
					var y = o[5 + S] / 1e3
					e = e.replace(new RegExp('\x3c!--gem' + (S + 1) + '--\x3e(.+?)<'), '\x3c!--gem' + (S + 1) + '--\x3e' + Math.round(b * y) + '<')
				}
			}
		}
	}
	e = e.replace(/<!--ppl(\d+):(\d+):(\d+):(\d+):(\d+)(?::(1))?-->\s*\d+/gi, function (e, a, i, n, r, o, s) {
		var l = s ? Math.ceil : Math.floor
		return (
			'\x3c!--ppl' + a + ':' + i + ':' + n + ':' + r + ':' + o + '--\x3e' + l(parseInt(r) + ((Math.min(Math.max(t, i), n) - i) * o) / 100)
		)
	})
	e = e.replace(/(<!--rtg%(\d+)-->)([\.0-9]+)%?/g, function (a, i, n, r) {
		_ = e.match(new RegExp('\x3c!--rtg' + n + '--\x3e(\\d+)'))
		if (!_) {
			return a
		}
		return i + Math.round(WH.convertRatingToPercent(t, n, _[1]) * 100) / 100 + (n != 49 ? '%' : '')
	})
	e = e.replace(/(<!--i?\?\d+:\d+:\d+:)\d+/g, '$1' + t)
	e = e.replace(/<!--lvl-->\d+/g, '\x3c!--lvl--\x3e' + t)
	return e
}
WH.getSpellScalingValue = function (e, t) {
	var a = WH.convertScalingSpell ? WH.convertScalingSpell.SV : null
	if (!a) {
		return 0
	}
	return a[t][e - 1]
}
WH.adjustSpellPoints = function (e, t, a, i) {
	var n = 1
	if (a && i) {
		n = WH.getCombatRatingMult(a, i)
	}
	for (var r = 1; r <= 20; ++r) {
		e = e.replace(
			new RegExp('\x3c!--pts' + r + ':0:0:(\\d+)(:\\d+(?:\\.\\d+)?)?(:crm)?--\x3e(\x3c!--rtg\\d+--\x3e)?(.+?)<', 'g'),
			function (e, a, i, o, s) {
				var l = t[a] && t[a].hasOwnProperty('effects') ? t[a].effects[r] : t.effects[r]
				if (!l) {
					return e
				}
				var c = Math.round(l.avg * (o ? n : 1))
				return '\x3c!--pts' + r + ':0:0:' + a + (i || '') + (o || '') + '--\x3e' + (s ? s : '') + c + '<'
			}
		)
		e = e.replace(
			new RegExp('\x3c!--pts' + r + ':1:0:(\\d+)(:\\d+(?:\\.\\d+)?)?(:crm)?--\x3e(\x3c!--rtg\\d+--\x3e)?(.+?)<', 'g'),
			function (e, a, i, o, s) {
				var l = t[a] && t[a].hasOwnProperty('effects') ? t[a].effects[r] : t.effects[r]
				if (!l) {
					return e
				}
				var c = Math.round(l.min * (o ? n : 1))
				return '\x3c!--pts' + r + ':1:0:' + a + (i || '') + (o || '') + '--\x3e' + (s ? s : '') + c + '<'
			}
		)
		e = e.replace(
			new RegExp('\x3c!--pts' + r + ':2:0:(\\d+)(:\\d+(?:\\.\\d+)?)?(:crm)?--\x3e(\x3c!--rtg\\d+--\x3e)?(.+?)<', 'g'),
			function (e, a, i, o, s) {
				var l = t[a] && t[a].hasOwnProperty('effects') ? t[a].effects[r] : t.effects[r]
				if (!l) {
					return e
				}
				var c = Math.round(l.max * (o ? n : 1))
				return '\x3c!--pts' + r + ':2:0:' + a + (i || '') + (o || '') + '--\x3e' + (s ? s : '') + c + '<'
			}
		)
		e = e.replace(
			new RegExp('\x3c!--pts' + r + ':3:(\\d+(?:\\.\\d+)?):(\\d+)(:\\d+(?:\\.\\d+)?)?(:crm)?--\x3e(\x3c!--rtg\\d+--\x3e)?(.+?)<', 'g'),
			function (e, a, i, o, s, l) {
				var c = t[i] && t[i].hasOwnProperty('effects') ? t[i].effects[r] : t.effects[r]
				if (!c) {
					return e
				}
				var f = Math.round(c.avg * a * (s ? n : 1))
				return '\x3c!--pts' + r + ':3:' + a + ':' + i + (o || '') + (s || '') + '--\x3e' + (l ? l : '') + f + '<'
			}
		)
		e = e.replace(
			new RegExp('\x3c!--pts' + r + ':4:0:(\\d+)(:\\d+(?:\\.\\d+)?)?(:crm)?--\x3e(\x3c!--rtg\\d+--\x3e)?(.+?)<', 'g'),
			function (e, a, i, o, s) {
				var l = t[a] && t[a].hasOwnProperty('effects') ? t[a].effects[r] : t.effects[r]
				if (!l) {
					return e
				}
				var c = Math.round(l.pts * (o ? n : 1))
				return '\x3c!--pts' + r + ':4:0:' + a + (i || '') + (o || '') + '--\x3e' + (s ? s : '') + c + '<'
			}
		)
	}
	return e
}
WH.getStaminaRatingMult = function (e, t) {
	let a = 0
	switch (t) {
		case 2:
		case 11:
			a = 3
			break
		case 12:
			a = 2
			break
		case 13:
		case 14:
		case 15:
		case 17:
		case 21:
		case 22:
		case 23:
		case 25:
		case 26:
			a = 1
			break
	}
	return (WH.staminaFactor && WH.staminaFactor[e] && WH.staminaFactor[e][a]) || 1
}
WH.getCombatRatingMult = function (e, t) {
	var a = 0
	switch (t) {
		case 2:
		case 11:
			a = 3
			break
		case 12:
			a = 2
			break
		case 13:
		case 14:
		case 15:
		case 17:
		case 21:
		case 22:
		case 23:
		case 25:
		case 26:
			a = 1
			break
	}
	var i =
		WH.convertRatingToPercent.hasOwnProperty('RM') && WH.convertRatingToPercent.RM.hasOwnProperty(e)
			? WH.convertRatingToPercent.RM[e][a]
			: 1
	if (typeof i == 'undefined') {
		i = 1
	}
	return i
}
WH.roundArtifactPower = function (e) {
	var t = 1
	if (e > 50) {
		t = 5
	}
	if (e > 1e3) {
		t = 25
	}
	if (e > 5e3) {
		t = 50
	}
	return WH.roundHalfEven(e / t) * t
}
WH.roundHalfEven = function (e) {
	if (Math.floor(e * 1e5) % 1e5 == 5e4) {
		var t = Math.floor(e)
		return t + (t % 2)
	}
	return Math.round(e)
}
WH.setTooltipSpells = function (e, t, a, i) {
	t = t || []
	a = a || {}
	if (!t.length) {
		t = [0]
	} else {
		let e = window.g_pageInfo ? g_pageInfo['typeId'] : null
		if (e) {
			let a = t.indexOf(parseInt(e))
			if (a !== -1) {
				t[a] = 0
			}
		}
	}
	if (i === undefined) {
		var n = function (e) {
			var t = []
			if (e.hasOwnProperty('data')) {
				t.push(e.data)
			}
			for (var a = 0; a < e.children.length; a++) {
				t = t.concat(n(e.children[a]))
			}
			return t
		}
		for (let e in a) {
			if (!a.hasOwnProperty(e)) {
				continue
			}
			if (a[e].length < 2) {
				continue
			}
			for (var r = 0; r < a[e].length; r++) {
				a[e][r] = { data: a[e][r], children: [] }
				var o = 0
				for (var s = 0; s <= 1; s++) {
					var l = -1
					while ((l = a[e][r].data[s].indexOf('\x3c!--sp' + e + '--\x3e', l + 1)) >= 0) {
						o++
					}
				}
				var c = r - o
				if (c < 0) {
					continue
				}
				while (o-- > 0) {
					var f = a[e].splice(c, 1)
					r--
					a[e][r].children.push(f[0])
				}
			}
			a[e] = n({ children: a[e] })
		}
	}
	i = i || {}
	var u = function (e) {
		i[e] = (i[e] || 0) + 1
		if (i[e] >= (a[e] || []).length) {
			i[e] = 0
		}
	}
	var p = []
	var d = /<!--sp([0-9]+):[01]-->/g
	var W
	while ((W = d.exec(e))) {
		var H = W[0]
		var g = W.index + H.length
		var h = '\x3c!--sp' + W[1] + '--\x3e'
		var m = e.indexOf(h, g)
		if (m < 0) {
			WH.warn('Could not find closing end tag for tooltip spell.', h, e)
			return e
		}
		var v = new RegExp('\x3c!--sp' + W[1] + ':[01]--\x3e', 'g')
		v.lastIndex = g
		var T = v.exec(e)
		while (T && T.index < m) {
			m = e.indexOf(h, m + h.length)
			if (m < 0) {
				WH.warn('Could not find nested closing end tag for tooltip spell.', h, e)
				return e
			}
			T = v.exec(e)
		}
		p.push(e.substring(W.index, m + h.length))
		d.lastIndex = m + h.length
	}
	var _ = 0
	var b = /^(<!--sp([0-9]+):[01]-->).*(<!--sp\2-->)$/
	for (var S = 0; S < p.length; ++S) {
		var y = p[S].match(b)[2]
		var E = WH.inArray(t, parseInt(y)) >= 0 ? 1 : 0
		if (a[y] == null) {
			continue
		}
		if (i[y] == null) {
			i[y] = 0
		}
		var I = a[y][i[y]]
		if (I == null || I[E] == null) {
			continue
		}
		u(y)
		if (E && (W = I[2].match(/^(!?)(\d+)$/))) {
			if (W[1]) {
				if (WH.inArray(t, parseInt(W[2])) >= 0) {
					E = 0
				}
			} else {
				t.push(parseInt(W[2]))
			}
		}
		var M = I[E]
		M = WH.setTooltipSpells(M, t, a, i)
		var w = '\x3c!--sp' + y + ':' + E + '--\x3e' + M + '\x3c!--sp' + y + '--\x3e'
		e = e.substr(0, _) + e.substr(_).replace(p[S], w)
		_ = e.indexOf(w, _) + w.length
		if (E) {
			for (var L = S + 1; L < p.length; L++) {
				if (e.indexOf(p[L], _) !== _) {
					break
				}
				W = p[L].match(b)
				w = W[1] + W[3]
				e = e.substr(0, _) + e.substr(_).replace(p[L], w)
				u(W[2])
				_ += w.length
				S++
			}
		}
	}
	e = WH.Tooltip.evalFormulas(e)
	return e
}
WH.enhanceTooltip = function (e, t, a, i, n, r, o, s, l, c, f, u, p, d) {
	if ((!WH.applyStatModifications || !WH.applyStatModifications.ScalingData) && (d || s)) {
		g_itemScalingCallbacks.push(
			(function (W) {
				return function () {
					var H = WH.enhanceTooltip.call(W, e, t, a, i, n, r, o, s, l, c, f, u, p, d)
					WH.updateTooltip.call(W, H)
				}
			})(this)
		)
		return WH.TERMS.loading_ellipsis
	}
	var W = typeof e,
		H,
		g
	var h = WH.getDataSource()
	var m = WH.isSet('g_pageInfo') ? g_pageInfo.type : null
	g = WH.isSet('g_pageInfo') ? g_pageInfo.typeId : null
	this._knownSpells = r
	if (W == 'number') {
		g = e
		var v = 'tooltip_'
		if (n) v = 'buff_'
		if (u) v = 'tooltip_premium_'
		if (p) v = 'text_'
		if (h[g] && h[g][v + Locale.getName()]) {
			e = h[g][v + Locale.getName()]
			H = h[g][(n ? 'buff' : '') + 'spells_' + Locale.getName()]
			this._rppmModList = h[g]['rppmmod']
			if (H) {
				e = WH.setTooltipSpells(e, r, H)
			}
		} else {
			return e
		}
	} else if (W != 'string') {
		return e
	}
	var T
	if (a) {
		var _ = WH.getGets()
		if (_.lvl) {
			e = WH.setTooltipLevel(e, _.lvl, n)
		}
		T = _.ilvl
	}
	let b = function () {
		let e = WH.parseQueryString(WH.getQueryString())
		if (!e['crafted-stats']) {
			return []
		}
		return e['crafted-stats']
			.split(':')
			.map(function (e) {
				return parseInt(e)
			})
			.filter(function (e) {
				return WH.Wow.Item.Stat.CRAFTING_STAT_TO.includes(e)
			})
	}
	let S = b()
	if ((d || s || S.length) && g) {
		e = WH.setItemModifications(e, g, d, s, this._selectedLevel ? this._selectedLevel : null, T, S)
	}
	if (t) {
		e = e.replace(/\(([^\)]*?<!--lvl-->[^\(]*?)\)/gi, function (e, t) {
			return (
				'(<a href="javascript:" onmousedown="return false" class="tip" style="color: white; cursor: pointer" onclick="WH.staticTooltipLevelClick(this, null, 0)" onmouseover="WH.Tooltip.showAtCursor(event, \'<span class=\\\'q2\\\'>\' + WH.TERMS.clicktochangelevel_stc + \'</span>\')" onmousemove="WH.Tooltip.cursorUpdate(event)" onmouseout="WH.Tooltip.hide()">' +
				t +
				'</a>)'
			)
		})
		if (e.indexOf('\x3c!--artpow:') > 0) {
			if (!this.hasOwnProperty('_knowledgeLevel')) {
				var y = /(&|\?)artk=(\d+)/.exec(location.href)
				if (y && parseInt(y[2]) <= g_artifact_knowledge_max_level) {
					this._knowledgeLevel = parseInt(y[2])
				}
			}
			var E = this._knowledgeLevel ? parseInt(this._knowledgeLevel) : 0
			e = e.replace(/(<!--ndstart-->)?<!--ndend-->/i, function (e, t) {
				return (
					(t ? t + '<br />' : ' ') +
					'<a href="javascript:" onmousedown="return false" class="tip" style="color: white; cursor: pointer" onclick="WH.staticTooltipKnowledgeLevelClick(this, null, ' +
					g +
					')" onmouseover="WH.Tooltip.showAtCursor(event, \'<span class=\\\'q2\\\'>\' + WH.TERMS.clicktochangelevel_stc + \'</span>\')" onmousemove="WH.Tooltip.cursorUpdate(event)" onmouseout="WH.Tooltip.hide()">' +
					WH.sprintf(WH.TERMS.knowledge_format.replace('%d', '$1'), E) +
					'</a>'
				)
			})
			e = e.replace(/(<!--artpow:(\d+)-->)[\d\.\,]+/, function (e, t, a) {
				return t + WH.numberLocaleFormat(WH.roundArtifactPower(parseInt(a) * WH.getArtifactKnowledgeMultiplier(E)))
			})
		}
	}
	if (i && Slider) {
		var I = WH.groupSizeScalingShouldShow(g)
		if (n) {
			n.bufftip = this
			if (I && WH.isSet('g_difficulties') && g_difficulties[I]) {
				e = WH.groupSizeScalingOnChange.call(n, this, g_difficulties[I].maxplayers, 1, true)
			}
		} else {
			var M = new RegExp('\x3c!--' + (m && m == 3 ? 'i' : '') + '\\?(\\d+):(\\d+):(\\d+):(\\d+)')
			var w = e.match(M)
			if (typeof w == 'undefined' && m == 3) {
				M = new RegExp('\x3c!--\\?(\\d+):(\\d+):(\\d+):(\\d+)')
				w = e.match(M)
			}
			if (!w && !WH.isRetailTree()) {
				M = new RegExp('\x3c!--ppl(\\d+):(\\d+):(\\d+):(\\d+):(\\d+)')
				var L = e.match(M)
				if (L) {
					w = [null, null, L[2], WH.maxLevel, WH.maxLevel]
				}
			}
			if (I && WH.isSet('g_difficulties') && g_difficulties[I]) {
				var x = WH.ce('label')
				x.innerHTML = WH.TERMS.difficulty + ': '
				this._difficultyBtn = WH.ce('a')
				this._difficultyBtn.ttId = g
				WH.difficultyBtnBuildMenu.call(this, g)
				Menu.add(this._difficultyBtn, this._difficultyBtn.menu)
				$('#dd' + g)
					.append(x)
					.append(this._difficultyBtn)
				WH.difficultyBtnOnChange.call(this, h[g].initial_dd || I, h[g].initial_ddSize)
				e = WH.groupSizeScalingOnChange.call(this, this, g_difficulties[I].maxplayers, 0, true)
			} else if (w) {
				if (w[2] != w[3]) {
					this.slider = Slider.init(i, {
						maxValue: parseInt(w[3]),
						minValue: Math.max(parseInt(w[2]), 1),
						onMove: WH.tooltipSliderMove.bind(this),
						title: WH.GlobalStrings.LEVEL,
					})
					Slider.setValue(this.slider, parseInt(w[4]))
					this.slider.onmouseover = function (e) {
						WH.Tooltip.showAtCursor(e, WH.TERMS.dragtochangelevel_stc, 0, 0, 'q2')
					}
					this.slider.onmousemove = WH.Tooltip.cursorUpdate
					this.slider.onmouseout = WH.Tooltip.hide
					WH.Tooltip.simple(Slider.getInput(this.slider), WH.TERMS.clicktochangelevel_stc, 'q2')
				}
			}
		}
	}
	if (o) {
		if (n && n.modified) {
			n.bufftip = this
		} else {
			var N = 0
			for (var k in H) {
				if (H.hasOwnProperty(k) && g_spells.hasOwnProperty(k) && WH.inArray(r, k) == -1) {
					N++
				}
			}
			var C
			for (var k in H) {
				if (!g_spells[k] || WH.inArray(r, k) != -1) {
					continue
				}
				if (N < 4) {
					var A = WH.ce('label')
					var O = WH.ce('input', { type: 'checkbox', dataset: { spellId: k } })
					WH.ae(A, O)
					WH.aE(O, 'click', WH.tooltipSpellsChange.bind(this))
					WH.ae(
						A,
						WH.ce(
							'a',
							{ dataset: { wowhead: 'spell=' + k + '&know=' + k } },
							WH.ct(g_spells[k]['name_' + Locale.getName()] + (g_spells[k]['rank_' + Locale.getName()] || ''))
						)
					)
					A.setAttribute('unselectable', '')
					WH.ae(o, A)
					WH.ae(o, WH.ce('br'))
				} else {
					if (!C) {
						C = WH.ce('select')
						C.multiple = true
						C.size = 6
						WH.ae(o, C)
						WH.aE(C, 'change', WH.tooltipSpellsChange.bind(this))
					}
					WH.ae(
						C,
						WH.ce('option', { value: k }, WH.ct(g_spells[k]['name_' + Locale.getName()] + (g_spells[k]['rank_' + Locale.getName()] || '')))
					)
				}
			}
		}
		this.modified = [o, H, r]
		$(o).toggle(!$(o).is(':empty'))
	}
	if (f) {
		var L = e.match(/<!--rppm-->(\d+(?:\.\d+)?)<!--rppm-->/)
		if (L) {
			var R = $('#rppm' + g)
			if (this._rppmModList.hasOwnProperty(4)) {
				this._rppmModBase = parseFloat(L[1])
				if (R.is(':empty')) {
					this._rppmSpecModList = this._rppmModList[4]
					this._rppmSpecModList.splice(0, 0, { spec: -1, modifiervalue: 0, filename: '' })
					R.append(WH.getMajorHeading(WH.TERMS.realppmmodifiers, 2, 3))
					for (var k in this._rppmSpecModList) {
						var B = Icon.create(this._rppmSpecModList[k]['filename'], 0, null)
						B.style.display = 'inline-block'
						B.style.verticalAlign = 'middle'
						var P = $('<input name="rppmmod" type="radio" id="rppm-' + k + '" />')
						P.get(0).checked = this._rppmSpecModList[k]['spec'] == -1
						R.append(P)
							.append(this._rppmSpecModList[k]['spec'] == -1 ? '' : B)
							.append(
								'<label for="rppm-' +
									k +
									'"> <a>' +
									(this._rppmSpecModList[k]['spec'] == -1
										? WH.TERMS.none
										: WH.Wow.PlayerClass.Specialization.getName(this._rppmSpecModList[k]['spec'])) +
									'</a></label>'
							)
							.append('<br />')
						var D = this
						$('#rppm-' + k).change(function () {
							WH.tooltipRPPMChange.call(this, D)
						})
					}
				} else {
					var F = this._rppmModBase
					var U = this._rppmSpecModList
					e = e.replace(/<!--rppm-->(\[?)(\d+(?:\.\d+)?)([^<]*)<!--rppm-->/, function (e, t, a, i) {
						return (
							'\x3c!--rppm--\x3e' +
							t +
							(F * (1 + parseFloat(U[$('input[name="rppmmod"]:checked', R).attr('id').match(/\d+$/)[0]].modifiervalue))).toFixed(2) +
							i +
							'\x3c!--rppm--\x3e'
						)
					})
				}
			}
			R.toggle(!R.is(':empty'))
			var G = ''
			if (this._rppmModList.hasOwnProperty(1)) {
				G += ' + ' + LANG.traits.hastertng[2]
			} else if (this._rppmModList.hasOwnProperty(2)) {
				G += ' + ' + LANG.traits.critstrkrtng[2]
			}
			if (g_pageInfo.type == 6 && this._rppmModList.hasOwnProperty(6)) {
				G += ' + ' + 'Budget'
			}
			if (G.length > 0) {
				e = e.replace(/<!--rppm-->\[?(\d+(?:\.\d+)?)([^<]*)<!--rppm-->/, function (e, t, a) {
					return '\x3c!--rppm--\x3e[' + t + G + ']' + a + '\x3c!--rppm--\x3e'
				})
			}
		}
	}
	if (c) {
		for (k = 1; k <= l; ++k) {
			$(c)
				.append('<input type="checkbox" id="item-upgrade-' + k + '" />')
				.append('<label for="item-upgrade-' + k + '"><a>' + WH.term('itemUpgrade_format', k) + '</a></label>')
				.append('<br />')
			$('#item-upgrade-' + k).change(WH.upgradeItemTooltip.bind(this, c, k))
		}
		if (h[g] && h[g].hasOwnProperty('tooltip_' + Locale.getName() + '_pvp')) {
			$(c)
				.append('<input type="checkbox" id="item-upgrade-pvp" />')
				.append('<label for="item-upgrade-pvp"><a>' + WH.TERMS.pvpmode + '</a></label>')
				.append('<br />')
			$('#item-upgrade-pvp').change(WH.upgradeItemTooltip.bind(this, c, 'pvp'))
		}
		if (h[g] && h[g].hasOwnProperty('tooltip_' + Locale.getName() + '_twtbc')) {
			$(c)
				.append('<input type="checkbox" id="item-upgrade-twtbc" />')
				.append('<label for="item-upgrade-twtbc"><a>' + g_difficulty_names[24] + ' ' + WH.TERMS.theburningcrusade_short + '</a></label>')
				.append('<br />')
			$('#item-upgrade-twtbc').change(WH.upgradeItemTooltip.bind(this, c, 'twtbc'))
		}
		if (h[g] && h[g].hasOwnProperty('tooltip_' + Locale.getName() + '_twwotlk')) {
			$(c)
				.append('<input type="checkbox" id="item-upgrade-twwotlk" />')
				.append(
					'<label for="item-upgrade-twwotlk"><a>' + g_difficulty_names[24] + ' ' + WH.TERMS.wrathofthelichking_abbrev + '</a></label>'
				)
				.append('<br />')
			$('#item-upgrade-twwotlk').change(WH.upgradeItemTooltip.bind(this, c, 'twwotlk'))
		}
		if (h[g] && h[g].hasOwnProperty('tooltip_' + Locale.getName() + '_twcata')) {
			$(c)
				.append('<input type="checkbox" id="item-upgrade-twcata" />')
				.append('<label for="item-upgrade-twcata"><a>' + g_difficulty_names[24] + ' ' + WH.TERMS.cataclysm_abbrev + '</a></label>')
				.append('<br />')
			$('#item-upgrade-twcata').change(WH.upgradeItemTooltip.bind(this, c, 'twcata'))
		}
		if (h[g] && h[g].hasOwnProperty('tooltip_' + Locale.getName() + '_twmists')) {
			$(c)
				.append('<input type="checkbox" id="item-upgrade-twmists" />')
				.append('<label for="item-upgrade-twmists"><a>' + g_difficulty_names[24] + ' ' + WH.TERMS.mistsofpandaria_abbrev + '</a></label>')
				.append('<br />')
			$('#item-upgrade-twmists').change(WH.upgradeItemTooltip.bind(this, c, 'twmists'))
		}
		$(c).toggle(!$(c).is(':empty'))
	}
	if (m == 3) {
		var q = $('#cs' + g)
		if (q && WH.Wow.Item.tooltipHasSpecStats(e)) {
			if (!this._classSpecBtn) {
				var V = WH.ce('label')
				V.innerHTML = WH.TERMS.showingtooltipfor_stc + ' '
				this._classSpecBtn = WH.ce('a')
				this._classSpecBtn.ttId = g
				WH.classSpecBtnBuildMenu.call(this, h[g].hasOwnProperty('validMenuSpecs') ? h[g].validMenuSpecs : false)
				Menu.add(this._classSpecBtn, this._classSpecBtn.menu)
				q.append(V).append(this._classSpecBtn).show()
			}
			var j = WH.LocalStorage.get('tooltips_class:spec')
			j = j ? j.split(':') : null
			var J = /(&|\?)class=(\d+)/.exec(location.href)
			if (J) {
				j = [J[2], 0]
			}
			var K = /(&|\?)spec=(\d+)/.exec(location.href)
			var z, Q
			if (K) {
				z = K[2]
				Q = WH.Wow.PlayerClass.getBySpec(z)
				if (Q) {
					j = [Q, z]
				}
			}
			if (j && j.length == 2) {
				e = WH.classSpecBtnOnChange.call(this, j[0], j[1], e, true)
			} else {
				$(this._classSpecBtn).text(WH.isRetailTree() ? WH.TERMS.chooseaspec_stc : WH.TERMS.chooseAClass_stc)
			}
		}
	}
	if (h[g] && WH.bonusesBtnShouldShow(h[g].bonusesData)) {
		var Y = $('#bs' + g)
		if (Y && !this._bonusesBtn) {
			var Z = WH.ce('label')
			Z.innerHTML = WH.TERMS.itembonuses + ': '
			this._bonusesBtn = WH.ce('a')
			this._bonusesBtn.ttId = g
			this._bonusesBtn.menu = WH.bonusesBtnBuildMenu.call(this, h[g])
			Menu.add(this._bonusesBtn, this._bonusesBtn.menu)
			$(this._bonusesBtn).text(WH.TERMS.selectbonus_stc)
			Y.append(Z).append(this._bonusesBtn).show()
			if (d !== '') {
				WH.bonusesBtnOnChange.call(this, d, true)
			}
		}
	}
	;(function () {
		let e = WH.ge('craftedStatsSelector' + g)
		if (!h[g] || !e || e.dataset.initialized) {
			return
		}
		const t = this
		let a = 0
		let i
		let n = function (e) {
			let t = b()
			let i = t.indexOf(e)
			if (i >= 0) {
				t.splice(i, 1)
			} else {
				t.push(e)
				t = t.slice(-1 * a)
			}
			WH.Url.replacePageQuery(function (e) {
				if (t.length) {
					e['crafted-stats'] = t.join(':')
				} else {
					delete e['crafted-stats']
				}
			})
			r()
			if (h[g]['tooltip_' + Locale.getName()]) {
				let e = this._bonusesBtn && this._bonusesBtn.selectedBonus ? this._bonusesBtn.selectedBonus : null
				let t = WH.enhanceTooltip.call(
					this,
					g,
					true,
					true,
					false,
					null,
					this._knownSpells,
					WH.ge('ks' + g),
					s,
					null,
					null,
					true,
					null,
					null,
					e
				)
				WH.updateTooltip.call(this, t)
			}
		}
		let r = function () {
			let e = ''
			let t = b()
			if (!t.length) {
				e = WH.TERMS.none
			} else {
				t.forEach(function (t) {
					e += (e ? ' + ' : '') + LANG.traits[WH.statToJson[t]][0]
				})
			}
			WH.st(i, e)
		}
		e.dataset.initialized = 1
		let o = (h[g].jsonequip && h[g].jsonequip.statsInfo) || {}
		WH.Wow.Item.Stat.CRAFTING_STAT_FROM.forEach(function (e) {
			if (o.hasOwnProperty(e)) {
				a++
			}
		})
		if (!a) {
			return
		}
		WH.displayDefault(e)
		WH.ae(e, WH.ce('label', {}, WH.ct(WH.TERMS.optionalReagentStats + WH.TERMS.colon_punct)))
		i = WH.ce('a', {}, WH.ct(WH.TERMS.none))
		WH.ae(e, i)
		let l = []
		WH.Wow.Item.Stat.CRAFTING_STAT_TO.forEach(function (e) {
			l.push(
				Menu.createItem({
					crumb: e,
					label: LANG.traits[WH.statToJson[e]][0],
					url: n.bind(t, e),
					options: {
						checkedFunc: function (e) {
							return b().includes(parseInt(e[Menu.ITEM_CRUMB]))
						},
					},
				})
			)
		})
		l.sort(function (e, t) {
			return e[Menu.ITEM_LABEL].localeCompare(t[Menu.ITEM_LABEL])
		})
		Menu.add(i, l)
		r()
	}.call(this))
	let X = this.slider ? this.slider._max : WH.maxLevel
	let ee = this._selectedLevel || X
	let te = j ? j[0] : WH.Wow.PlayerClass.WARRIOR
	e = WH.addRatingPercent(e, ee, X, te)
	if (m === WH.Types.ITEM) {
		WH.updateItemStringLink.call(this)
	}
	return e
}
WH.addRatingPercent = function (e, t, a, i) {
	let n = WH.ce('div', { innerHTML: e })
	WH.qsa('span', n).forEach(function (e) {
		let n
		let r
		e.childNodes.forEach(function (e) {
			if (e.nodeType === Node.COMMENT_NODE) {
				let t = (e.nodeValue || '').match(/^rtg(\d+)$/)
				if (t) {
					n = parseInt(t[1])
					r = e
				}
			}
		})
		if (n === undefined) {
			return
		}
		let o = r.nextSibling.nodeValue.match(/(\d+)(.*)$/)
		if (!o) {
			return
		}
		let s = WH.qs('small.rating-percent')
		if (s) {
			WH.de(s)
		}
		let l = parseInt(o[0])
		let c = o[2]
		let f = WH.convertRatingToPercent(t, n, l, i)
		let u = WH.TERMS ? WH.term('valueAtLevel_format', f.toFixed(2), t) : ' (' + f.toFixed(2) + '% @ L' + t + ')'
		let p = r.nextSibling
		let d = WH.ce('small', { className: 'rating-percent' }, WH.ct(u))
		if (c === '.') {
			p.parentNode.insertBefore(WH.ct(l), p)
			p.parentNode.insertBefore(d, p)
			p.parentNode.insertBefore(WH.ct('.'), p)
		} else {
			p.parentNode.insertBefore(WH.ce('span', null, WH.ct(l + c)), p)
			p.parentNode.insertBefore(d, p)
		}
		p.parentNode.removeChild(p)
		d.setAttribute('onclick', 'WH.tooltipLevelPrompt(' + t + ', ' + a + ');')
	})
	return n.innerHTML
}
WH.tooltipLevelPrompt = function (e, t) {
	let a = 1
	let i = prompt(WH.sprintf(WH.TERMS.ratinglevel_format, a, t), e.toString())
	if (i === null) {
		return
	}
	i = parseInt(i)
	if (i < a || i > t) {
		alert('Invalid value; must be between ' + a + ' and ' + t + '.')
		return
	}
	let n = WH.qs('.wowhead-tooltip')
	if (n.slider) {
		Slider.setValue(n.slider, i)
	}
	WH.staticTooltipLevelClick(n, i, 1)
}
WH.groupSizeScalingShouldShow = function (e) {
	if (
		WH.isSet('g_difficulties') &&
		WH.isSet('g_spells') &&
		g_spells[e] &&
		g_spells[e].difficulties &&
		g_spells[e].difficulties.length > 0
	) {
		return g_spells[e].difficulties[0]
	}
	return false
}
WH.groupSizeScalingSliderMove = function (e, t, a) {
	var i = WH.getDataSource()
	var n = WH.isSet('g_pageInfo') ? g_pageInfo['typeId'] : null
	if (!i[n]) {
		return
	}
	let r = this._difficultyBtn.selectedDD
	let o = a.value
	WH.Url.replacePageQuery(function (e) {
		if (r != WH.groupSizeScalingShouldShow(n) || o != g_difficulties[WH.groupSizeScalingShouldShow(n)].maxplayers) {
			e.dd = r
			e.ddsize = o
		} else {
			delete e.dd
			delete e.ddsize
		}
	})
	WH.groupSizeScalingOnChange.call(this, this, a.value, 0)
	if (this.bufftip) {
		WH.groupSizeScalingOnChange.call(this, this.bufftip, a.value, 1)
	}
	WH.Tooltip.hide()
}
WH.groupSizeScalingOnChange = function (e, t, a, i) {
	const n = this
	while (e.className.indexOf('tooltip') == -1) {
		e = e.parentNode
	}
	t = parseInt(t)
	if (isNaN(t)) {
		return
	}
	var r = WH.getDataSource()
	var o = WH.isSet('g_pageInfo') ? g_pageInfo['typeId'] : null
	if (!r[o]) {
		return
	}
	var s = this._difficultyBtn.selectedDD
	var l = Locale.getName()
	var c = 'server_' + (a ? 'buff_' : 'tooltip_') + l
	var f = 'dd' + s + 'ddsize' + t
	WH.groupSizeScalingOnChange.lastCall = f
	if (!r[o][c]) {
		r[o]['server_tooltip_' + l] = {}
		r[o]['server_buff_' + l] = {}
		var u = 'dd' + r[o].initial_dd + 'ddsize' + r[o].initial_ddSize
		r[o]['server_tooltip_' + l][u] = r[o]['tooltip_' + l]
		r[o]['server_buff_' + l][u] = r[o]['buff_' + l]
	}
	if (r[o][c][f]) {
		var p = r[o][c][f]
		if (i) {
			return p
		}
		WH.updateTooltip.call(e, p)
		return
	}
	if (i) {
		return r[o][c.substr(7)]
	}
	if (a) {
		return
	}
	if (r[o][c].hasOwnProperty(f)) {
		return
	}
	r[o][c][f] = ''
	var d = '/spell=' + o + '&dd=' + s + '&ddsize=' + t
	if (WH.isBeta() || WH.isPtr()) {
		d += '&' + WH.getDataBuild()
	}
	WH.xhrJsonRequest(d, function (a) {
		if (!a) {
			return
		}
		r[o]['server_tooltip_' + l][f] = a['tooltip']
		r[o]['server_buff_' + l][f] = a['buff']
		if (WH.groupSizeScalingOnChange.lastCall === f) {
			WH.groupSizeScalingOnChange.call(n, e, t)
			if (n.bufftip) {
				WH.groupSizeScalingOnChange.call(n, n.bufftip, t, true)
			}
		}
	})
}
WH.difficultyBtnBuildMenu = function (e) {
	var t = []
	var a = g_spells[e]
	for (var i = 0; i < a.difficulties.length; ++i) {
		var n = a.difficulties[i]
		var r = [n, g_difficulty_names[n], WH.difficultyBtnOnChange.bind(this, n, false)]
		t.push(r)
	}
	this._difficultyBtn.menu = t
}
WH.difficultyBtnOnChange = function (e, t) {
	this._difficultyBtn.selectedDD = e
	$(this._difficultyBtn).text('')
	WH.arrayWalk(this._difficultyBtn.menu, function (e) {
		e.checked = false
	})
	var a = Menu.findItem(this._difficultyBtn.menu, [e])
	a.checked = true
	$(this._difficultyBtn).text(a[Menu.ITEM_LABEL])
	var i = this._difficultyBtn.selectedPlayers || t
	var n = g_difficulties[e].minplayers,
		r = g_difficulties[e].maxplayers,
		o = g_difficulties[e].maxplayers
	if (i) {
		if (i > r) {
			o = r
		} else if (i < n) {
			o = n
		} else {
			o = i
		}
	}
	n = r
	var s = $('#sl' + this._difficultyBtn.ttId)
	s.html('').hide()
	this.slider = null
	if (n != r) {
		s.show()
		this.slider = Slider.init(s.get(0), {
			maxValue: parseInt(r),
			minValue: parseInt(n),
			onMove: WH.groupSizeScalingSliderMove.bind(this),
			title: WH.TERMS.players,
		})
		Slider.setValue(this.slider, parseInt(o))
		this.slider.onmouseover = function (e) {
			WH.Tooltip.showAtCursor(e, WH.TERMS.dragtochangeplayers_stc, 0, 0, 'q2')
		}
		this.slider.onmousemove = WH.Tooltip.cursorUpdate
		this.slider.onmouseout = WH.Tooltip.hide
		WH.Tooltip.simple(Slider.getInput(this.slider), WH.TERMS.clicktochangeplayers_stc, 'q2')
	}
	WH.groupSizeScalingSliderMove.call(this, null, null, { value: o })
}
WH.classSpecBtnOnChange = function (e, t, a, i) {
	e = parseInt(e)
	t = t ? parseInt(t) : null
	WH.ee(this._classSpecBtn)
	this._classSpecBtn.selectedSpec = t
	let n = Menu.findItem(this._classSpecBtn.menu, [e, t])
	if (n && n[Menu.ITEM_OPTIONS] && n[Menu.ITEM_OPTIONS].tinyIcon) {
		let e = n[Menu.ITEM_OPTIONS].tinyIcon
		let t = WH.Icon.create(e, WH.Icon.SMALL, 'javascript:')
		t.style.display = 'inline-block'
		t.style.verticalAlign = 'middle'
		WH.ae(this._classSpecBtn, t)
	}
	let r = WH.Wow.PlayerClass.Specialization.getName(t)
	WH.ae(
		this._classSpecBtn,
		WH.ce(
			'span',
			undefined,
			WH.ct(
				' ' +
					(!WH.isRetailTree() || !r
						? WH.Wow.PlayerClass.getName(e)
						: WH.Strings.sprintf(WH.TERMS.specclass_format, r, WH.Wow.PlayerClass.getName(e)))
			)
		)
	)
	if (!i) {
		WH.LocalStorage.set('tooltips_class:spec', e + ':' + t)
	}
	var o = a ? a : this.innerHTML
	o = o.replace(/<!--scstart(\d+):(\d+)--><span class="q(\d+)">(<!--asc\d+-->)?(.*?)<\/span><!--scend-->/i, function (t, a, i, n, r, o) {
		n = 1
		var s = a == 2 && (!g_classes_allowed_weapon[e] || WH.inArray(g_classes_allowed_weapon[e], i) == -1)
		var l = a == 4 && (!g_classes_allowed_armor[e] || WH.inArray(g_classes_allowed_armor[e], i) == -1)
		if (s || l) {
			n = 10
		}
		return '\x3c!--scstart' + a + ':' + i + '--\x3e<span class="q' + n + '">' + (r ? r : '') + o + '</span>\x3c!--scend--\x3e'
	})
	if (WH.isRetailTree()) {
		o = o.replace(/<span[^>]*?><!--stat(\d+)-->([-+][\d\.,]+(?:-[\d\.,]+)?)(\D*?)<\/span>/gi, function (a, i, n, r) {
			let o = WH.ce('div', { innerHTML: a })
			let s = WH.qs('span', o)
			s.classList.remove('q0', 'q2')
			i = parseInt(i)
			if (i === 50) {
				s.classList.add('q2')
			}
			if (g_grayedOutStats[i] && g_grayedOutStats[i].indexOf(t) != -1) {
				s.classList.remove('q2')
				s.classList.add('q0')
			}
			let l = t ? WH.getStatForSpec(i, t) : WH.getStatForClass(i, e)
			if (l !== i && WH.statToJson[l]) {
				var c = LANG.traits[WH.statToJson[l]]
				if (c) {
					r = ' ' + c[1]
				}
			}
			s.innerHTML = '\x3c!--stat' + i + '--\x3e'
			WH.ae(s, WH.ct(n + r))
			return s.outerHTML
		})
		o = o.replace(/(<!--traitspecstart:(\d+)(?::(\d+))?-->)[\w\W]*?(<!--traitspecend-->)/g, function (e, a, i, n, r) {
			var o = ''
			if (
				WH.isSet('g_pageInfo') &&
				g_pageInfo.hasOwnProperty('typeId') &&
				g_pageInfo.type == 3 &&
				g_items.hasOwnProperty(g_pageInfo.typeId) &&
				g_items[g_pageInfo.typeId].hasOwnProperty('affectsArtifactPowerTypesData') &&
				g_items[g_pageInfo.typeId].affectsArtifactPowerTypesData.hasOwnProperty(i) &&
				g_items[g_pageInfo.typeId].affectsArtifactPowerTypesData[i].hasOwnProperty(t)
			) {
				o = g_items[g_pageInfo.typeId].affectsArtifactPowerTypesData[i][t]
			} else if (n) {
				o =
					'<span style="color: #00FF00">' +
					WH.sprintf(LANG['tooltip_relicrank' + (n > 1 ? 's' : '') + 'increase'].replace('%d', '$1'), n) +
					': </span>' +
					WH.TERMS.relic_minortrait
			}
			return a + o + r
		})
	}
	WH.Url.replacePageQuery(function (a) {
		if (e) {
			a['class'] = e
		} else {
			delete a['class']
		}
		if (WH.isRetailTree() && t) {
			a.spec = t
		} else {
			delete a.spec
		}
	})
	if (!a) {
		this.innerHTML = WH.Tooltip.evalFormulas(o)
	}
	return o
}
WH.classSpecBtnBuildMenu = function (e) {
	var t = []
	if (!WH.isRetailTree()) {
		t.push([, WH.TERMS.chooseAClass_stc])
		var a = Menu.findItem(mn_spells, [7])
		t = t.concat($.extend(true, [], Menu.getSubmenu(a)))
	} else {
		t.push([, WH.TERMS.chooseaspec_stc])
		var i = Menu.findItem(mn_spells, [-12])
		t = t.concat($.extend(true, [], Menu.getSubmenu(i)))
	}
	for (var n in g_chr_specs_by_class) {
		var r = g_chr_specs_by_class[n]
		for (var o in t) {
			var s = t[o]
			if (s[Menu.ITEM_CRUMB] == n) {
				if (!WH.isRetailTree()) {
					s[Menu.ITEM_URL] = WH.classSpecBtnOnChange.bind(this, n, 0, false)
				} else {
					if (s[Menu.ITEM_URL]) {
						s[Menu.ITEM_URL] = null
					}
					for (var l = 0, c = r.length; l < c; l++) {
						var f = Menu.getSubmenu(t[o])
						for (var u = 0, p = f.length; u < p; u++) {
							var d = f[u]
							if (d[Menu.ITEM_CRUMB] == r[l]) {
								if (e && WH.inArray(e, r[l]) < 0) {
									delete d[Menu.ITEM_OPTIONS].tinyIcon
									d[Menu.ITEM_OPTIONS].className = 'q0'
									d[Menu.ITEM_URL] = 'javascript:'
								} else {
									d[Menu.ITEM_URL] = WH.classSpecBtnOnChange.bind(this, n, r[l], false)
								}
								break
							}
						}
					}
				}
				break
			}
		}
	}
	this._classSpecBtn.menu = t
}
WH.getStatForClass = function (e, t) {
	let a = undefined
	let i = WH.Wow.PlayerClass.Specialization.getByClass(t) || []
	for (let t = 0, n; (n = i[t]); t++) {
		let t = WH.getStatForSpec(e, n)
		if (a === undefined) {
			a = t
		} else if (a !== t) {
			a = null
			break
		}
	}
	return a
}
WH.getStatForSpec = function (e, t) {
	var a = 3
	var i = 4
	var n = 5
	var r = 71
	var o = 72
	var s = 73
	var l = 74
	var c
	var f
	var u = g_specPrimaryStatOrders[t]
	var p = g_specPrimaryStatOrders[t].length
	if (e === r) {
		f = 0
		if (!p) {
			return n
		}
		while (1) {
			c = u[f]
			if (c >= a && c <= n) {
				break
			}
			f++
			if (f >= p) {
				return n
			}
		}
	} else {
		if (e !== o) {
			if (e !== s) {
				if (e !== l) {
					return e
				}
				f = 0
				if (p) {
					while (1) {
						c = u[f]
						if (c >= i && c <= n) {
							break
						}
						f++
						if (f >= p) {
							return n
						}
					}
					return c
				}
				return n
			}
			f = 0
			if (p) {
				while (1) {
					c = u[f]
					if (u[f] === a) {
						break
					}
					if (u[f] === n) {
						break
					}
					f++
					if (f >= p) {
						return n
					}
				}
				return c
			}
			return n
		}
		f = 0
		if (!p) {
			return a
		}
		while (1) {
			c = u[f]
			if (c >= a && c <= i) {
				break
			}
			f++
			if (f >= p) {
				return a
			}
		}
	}
	return c
}
WH.bonusesBtnShouldShow = function (e) {
	for (var t in e) {
		if (e.hasOwnProperty(t)) {
			return true
		}
	}
	return false
}
WH.bonusesBtnBuildMenu = function (e) {
	let t = []
	let a = e.bonusesData
	if (a) {
		for (let i in a) {
			if (!a.hasOwnProperty(i)) {
				continue
			}
			let n = a[i].groupedUpgrade
			let r = WH.getItemBonusName.call(this, i, e)
			let o = Menu.createItem({ crumb: i, label: r, url: WH.bonusesBtnOnChange.bind(this, (n ? 'u:' : '') + i, false) })
			if (typeof n == 'undefined') {
				for (let t in a[i].sub) {
					if (!a[i].sub.hasOwnProperty(t)) {
						continue
					}
					n = a[i].sub[t].groupedUpgrade
					r = WH.getItemBonusName.call(this, t, e, i)
					if (r === '???') {
						continue
					}
					let s = Menu.createItem({ crumb: t, label: r, url: WH.bonusesBtnOnChange.bind(this, i + ':' + (n ? 'u:' : '') + t, false, true) })
					Menu.addToSubmenu(o, s)
				}
			}
			let s = Menu.getSubmenu(o)
			if (s) {
				s.sort(function (e, t) {
					let a = WH.getItemBonusChanceType(e[Menu.ITEM_CRUMB])
					let i = WH.getItemBonusChanceType(t[Menu.ITEM_CRUMB])
					return WH.stringCompare(a, i) || WH.stringCompare(e[Menu.ITEM_LABEL], t[Menu.ITEM_LABEL])
				})
				let e = []
				let t = 0
				for (let n = 0; n < s.length; ++n) {
					let r = s[n][Menu.ITEM_CRUMB]
					if (r && a[i].sub[r].type !== t) {
						t = a[i].sub[r].type
						let o = WH.TERMS.unknown
						switch (t) {
							case 1:
								o = WH.TERMS.upgrades
								break
							case 2:
								o = WH.TERMS.stats
								break
							case 4:
								o = WH.TERMS.sockets
								break
							default:
								break
						}
						e.push({ index: n, name: o })
					}
				}
				for (let t = 0; t < e.length; ++t) {
					let a = e[t].index + t
					let i = Menu.createHeading({ label: e[t].name })
					s.splice(a, 0, i)
				}
			}
			t.push(o)
		}
		let i = {}
		for (let e = 0, a; (a = t[e]); e++) {
			if (i.hasOwnProperty(a[Menu.ITEM_LABEL])) {
				let e = ++i[a[Menu.ITEM_LABEL]]
				a[Menu.ITEM_LABEL] = WH.term('parens_format', a[Menu.ITEM_LABEL], e)
			} else {
				i[a[Menu.ITEM_LABEL]] = 1
			}
		}
		t.sort(function (e, t) {
			return WH.stringCompare(e[Menu.ITEM_LABEL].innerText || e[Menu.ITEM_LABEL], t[Menu.ITEM_LABEL].innerText || t[Menu.ITEM_LABEL])
		})
	}
	let i = [Menu.createHeading({ label: WH.TERMS.selectbonus_stc })]
	if (t.length > 0) {
		i = i.concat(t)
	}
	return i
}
WH.getItemBonusChanceType = function (e) {
	var t = 0
	if (e > 0 && WH.isSet('g_itembonuses') && g_itembonuses && g_itembonuses[e]) {
		var a = g_itembonuses[e]
		for (var i = 0; i < a.length; ++i) {
			var n = a[i]
			var r = 0
			switch (n[0]) {
				case 1:
				case 3:
				case 4:
				case 5:
				case 11:
					r = 1
					break
				case 2:
					r = 2
					break
				case 6:
					r = 4
					break
				default:
					break
			}
			if (r && (!t || r < t)) {
				t = r
			}
		}
	}
	return t
}
WH.getItemBonusUpgradeType = function (e) {
	if (e > 0 && WH.isSet('g_itembonuses') && g_itembonuses && g_itembonuses[e]) {
		var t = g_itembonuses[e]
		for (var a = 0; a < t.length; ++a) {
			var i = t[a]
			switch (i[0]) {
				case 3:
				case 4:
				case 5:
				case 11:
					return 1 << i[0]
				default:
					break
			}
		}
	}
	return 0
}
WH.getItemBonusName = function (e, t, a) {
	var i = ''
	var n = t.level
	let r = false
	if (a && WH.isSet('g_itembonuses') && a > 0 && g_itembonuses[a]) {
		for (var o = 0; o < g_itembonuses[a].length; ++o) {
			var s = g_itembonuses[a][o]
			if (s[0] == 1) {
				n += s[1]
			}
		}
	}
	if (WH.isSet('g_itembonuses') && e > 0 && g_itembonuses[e]) {
		var l = g_itembonuses[e].slice()
		l.sort(function (e, t) {
			return e[0] - t[0]
		})
		var c = ''
		var f = ''
		let a = ''
		let H = ''
		let g = ''
		for (var o = 0; o < l.length; ++o) {
			var s = l[o]
			switch (s[0]) {
				case 1:
					c = WH.TERMS.itemlevel + ' ' + (n + s[1])
					break
				case 2:
					i +=
						(i ? ' / ' : '') +
						(WH.statToJson[s[1]] && LANG.traits[WH.statToJson[s[1]]] ? LANG.traits[WH.statToJson[s[1]]][1] : 'Unknown stat')
					if (s[1] == 23) {
						i += ' ' + s[2]
						r = true
					}
					break
				case 3:
					f = s[1]
					break
				case 4:
					a = WH.Wow.Item.getNameDescription(s[1]) || a
					break
				case 5:
					H = WH.Wow.Item.getNameDescription(s[1]) || H
					break
				case 6:
					var u = s[2]
					i +=
						(i ? ' / ' : '') +
						s[1] +
						' ' +
						(g_socket_names[u] ||
							(g_gem_types[u] ? WH.sprintf(WH.TERMS.emptyrelicslot_format.replace('%s', '$1'), g_gem_types[u]) : 'Unknown Socket'))
					break
				case 8:
					i += (i ? ' / ' : '') + WH.sprintf(WH.TERMS.requireslevel_format.replace('%s', '$1'), t.reqlevel + s[1])
					break
				case 11:
					if (t.heirloombonuses) {
						var p = '?'
						for (var d = 0, W; (W = t.heirloombonuses[d]); d++) {
							if (parseInt(e) === W) {
								p = d + 1
								break
							}
						}
						i += (i ? ' / ' : '') + WH.sprintf(WH.TERMS.heirloomupgradejs_format, p)
					}
					break
				case 13:
					c = WH.TERMS.scaleswithlevel_stc
					break
				case 14:
					if (t.actualBonusLevels && t.actualBonusLevels[e]) {
						c = WH.TERMS.itemlevel + ' ' + t.actualBonusLevels[e] + '+'
					} else {
						c = WH.TERMS.itemlevel + ' ' + n + '+'
					}
					break
				case 23:
					if (s[1] > 0) {
						g = WH.Tooltip.ITEM_EFFECT_NAMES[s[1]] || ''
					}
					break
				default:
					break
			}
		}
		if (r && !c && n) {
			c = WH.TERMS.itemlevel + WH.TERMS.wordspace_punct + n
		}
		if (c) {
			i = i ? c + ' / ' + i : c
		}
		a += H ? WH.TERMS.wordspace_punct + H : ''
		i += a ? ' / ' + a : ''
		if (g && !r) {
			i = g + (i ? ' / ' + i : '')
		}
		i += f && t.quality != f ? ' / ' + WH.Wow.Item.getQualityName(f) : ''
		if (i.substr(0, 3) == ' / ') {
			i = i.substr(3)
		}
	} else if (e == '0') {
		i = WH.TERMS.normal
	}
	return i ? i : a ? WH.TERMS.openparenthesis_punct + e + WH.TERMS.closedparenthesis_punct : WH.TERMS.normal
}
WH.bonusesBtnGetContextBonusId = function (e) {
	let t = 0
	let a = WH.getPageData('wow.item.bonuses.listGroup')
	if (e && e.length) {
		for (let i = 0; i < e.length; ++i) {
			let n = parseInt(e[i])
			if ((window.g_itembonuses && g_itembonuses['-1'] && g_itembonuses['-1'].includes(n)) || (a !== null && a.includes(n))) {
				t = e[i]
				break
			}
		}
	}
	return t
}
WH.bonusesBtnIsComboValid = function (e, t, a) {
	if (!e[t] || !e[t].sub) {
		return false
	}
	var i = e[t].sub
	var n = 32768
	var r = 32768
	for (var o in a) {
		var s = a[o]
		if (s != t) {
			if (i[s]) {
				if ((n & i[s].type) == 1) {
				} else if (n & i[s].type) {
					n = false
					break
				} else {
					n |= i[s].type
				}
				if (r & i[s].upgradeType) {
					r = false
					break
				} else {
					r |= i[s].upgradeType
				}
			} else {
				n = false
				break
			}
		}
	}
	return n && r
}
WH.bonusesGetItem = function () {
	var e = WH.getDataSource()
	var t = this._bonusesBtn.ttId
	return e[t]
}
WH.bonusesGetDefaultAdjustmentBonus = function (e) {
	var t = WH.bonusesGetItem.call(this)
	var a = WH.bonusesBtnGetContextBonusId(e)
	if (t.defaultAdjustmentBonuses[a]) {
		return t.defaultAdjustmentBonuses[a].toString()
	}
	return null
}
WH.bonusesBtnOnChange = function (e, t, a) {
	var i = WH.getDataSource()
	var n = this._bonusesBtn.ttId
	var r = i[n].bonusesData
	if (a === true) {
		var o = e.split(':')
		var s = 0
		var l = o.indexOf('u')
		if (l != -1) {
			s = o[l + 1]
			o.splice(l, 1)
		}
		var c = o[0]
		var f = !Menu.findItem(this._bonusesBtn.menu, o).checked
		var u = 0
		var p = []
		WH.arrayWalk(this._bonusesBtn.menu, function (e) {
			if (e.checked) {
				u = e[Menu.ITEM_CRUMB]
				var t = Menu.getSubmenu(e)
				if (t) {
					WH.arrayWalk(t, function (e) {
						if (e[Menu.ITEM_CRUMB] && e.checked) {
							p.push(e[Menu.ITEM_CRUMB])
							if (u == c && r[u].sub[e[Menu.ITEM_CRUMB]].groupedUpgrade && !s) {
								s = e[Menu.ITEM_CRUMB]
							}
						}
					})
				}
			}
		})
		var d
		if (u == c) {
			if (f) {
				d = p.concat(o)
			} else {
				p.splice(p.indexOf(o[1]), 1)
				d = p.concat([c])
			}
		} else {
			d = o
		}
		d.sort(function (e, t) {
			return e - t
		})
		if (!WH.bonusesBtnIsComboValid(r, c, d)) {
			d = o
			var W = r[c].sub[o[1]].type
			var H = r[c].sub[o[1]].upgradeType
			for (var g = 0; g < p.length; ++g) {
				if (W != r[c].sub[p[g]].type) {
					d.push(p[g])
				} else if (H != r[c].sub[p[g]].upgradeType) {
					d.push(p[g])
				}
			}
			d.sort(function (e, t) {
				return e - t
			})
		}
		if (s) {
			var h = d.indexOf(s)
			if (h != -1) {
				d.splice(d.indexOf(s), 0, 'u')
			}
		}
		e = d.join(':').replace(/^0:/, '')
	}
	this._bonusesBtn.selectedBonus = e
	var m = this._bonusesBtn.selectedBonus.split(':')
	var v = WH.bonusesGetDefaultAdjustmentBonus.call(this, m)
	if (v != null) {
		var T = false
		for (var g in m) {
			var _ = m[g]
			if (1372 <= _ && _ <= 1672) {
				T = true
			}
		}
		if (!T) {
			m.push(v)
			this._bonusesBtn.selectedBonus = m.join(':')
		}
	}
	var l = m.indexOf('u')
	if (l != -1) {
		m.splice(l, 1)
	}
	var b = []
	for (var g = 0; g < this._bonusesBtn.menu.length; g++) {
		let e = this._bonusesBtn.menu[g][Menu.ITEM_CRUMB]
		if (e && b.indexOf(e) < 0) {
			b.push(e)
		}
	}
	m.sort(function (e, t) {
		return (b.indexOf(e) < 0 ? 1 : -1) - (b.indexOf(t) < 0 ? 1 : -1)
	})
	$(this._bonusesBtn).html('')
	var S = WH.bonusesBtnGetContextBonusId(m)
	WH.arrayWalk(this._bonusesBtn.menu, function (e) {
		e.checked = e[Menu.ITEM_CRUMB] == S
		var t = Menu.getSubmenu(e)
		if (t) {
			WH.arrayWalk(t, function (t) {
				if (t[Menu.ITEM_CRUMB]) {
					t.checked = e.checked && m.indexOf(t[Menu.ITEM_CRUMB]) != -1
					if (t.$a) {
						t[Menu.ITEM_OPTIONS] = null
						Menu.updateItem(t)
					}
				}
			})
		}
	})
	var y = Menu.findItem(this._bonusesBtn.menu, [S])
	if (y) {
		var E = Menu.getSubmenu(y)
		if (E) {
			WH.arrayWalk(E, function (e) {
				if (e[Menu.ITEM_CRUMB]) {
					var t = m
					if (m.indexOf(e[Menu.ITEM_CRUMB]) == -1) {
						t = t.concat([e[Menu.ITEM_CRUMB]])
					}
					t.sort(function (e, t) {
						return e - t
					})
					if (!WH.bonusesBtnIsComboValid(r, S, t) && m.indexOf(v) == -1) {
						e[Menu.ITEM_OPTIONS] = { class: 'q0' }
					} else {
						e[Menu.ITEM_OPTIONS] = {}
					}
					Menu.updateItem(e)
				}
			})
		}
	}
	let I = (y && y[Menu.ITEM_LABEL]) || WH.getItemBonusName.call(this, S, i[n])
	for (var g = 0; g < m.length; ++g) {
		if (m[g] != S && m[g] != v) {
			I += ' + ' + WH.getItemBonusName.call(this, m[g], i[n], S)
		}
	}
	$(this._bonusesBtn).append(I)
	var M = 0
	if (WH.isSet('g_itembonuses') && g_items && g_items[n]) {
		for (var g in m) {
			var w = m[g]
			if (g_itembonuses[w]) {
				for (var L = 0; L < g_itembonuses[w].length; ++L) {
					var x = g_itembonuses[w][L]
					if (x[0] == 7 && g_items[n].appearances && g_items[n].appearances[x[1]]) {
						M = g_items[n].appearances[x[1]][0]
						break
					}
				}
			}
		}
	}
	var N = $('#e8c7e052e3e0')
	if (N.length > 0) {
		var k = N.get(0).attributes.onclick.value
		var C = new RegExp('\\(this, ' + n + ', \\[[^\\]]*?],')
		if (C.test(k)) {
			var A = []
			for (var O in m) {
				var R = m[O]
				if (R == 0) {
					A.push(R)
					continue
				}
				var B = WH.isSet('g_itembonuses') && g_itembonuses[R] ? g_itembonuses[R] : []
				for (var P in B) {
					if (!B.hasOwnProperty(P)) {
						continue
					}
					var D = B[P][0]
					var F = B[P][1]
					if (WH.inArray([1, 2, 6, 14], D) != -1) {
						if (D == 2 && WH.inArray([61, 62, 63, 64, 66], F) != -1) {
							continue
						}
						A.push(R)
					}
				}
			}
			N.get(0).attributes.onclick.value = k.replace(C, '(this, ' + n + ', [' + A.join(',') + '],')
		}
	}
	var U = $('#ic' + n)
	if (U.length > 0 && g_items) {
		var G = g_items.getIcon(n, m)
		if (G) {
			U[0].removeChild(U[0].firstChild)
			U[0].appendChild(Icon.create(G, 2))
		}
	}
	var q = $('#wh-mv-view-in-3d-button')[0]
	if (q) {
		if (!q.dataset.mvDisplayIdOrig && q.dataset.mvDisplayId) {
			q.dataset.mvDisplayIdOrig = q.dataset.mvDisplayId
		}
		if (!M && q.dataset.mvDisplayIdOrig) {
			M = q.dataset.mvDisplayIdOrig
		}
		if (M) {
			let e = WH.Gatherer.get(parseInt(q.dataset.mvType), parseInt(q.dataset.mvTypeId))
			let t = e && e.jsonequip && e.jsonequip.races
			let a = WH.Wow.Models.getRaceIdFromMask(t)
			if (e.classs !== WH.Wow.Item.CLASS_ARMOR) {
				a = undefined
			}
			q.attributes.onclick.value = q.attributes.onclick.value.replace(/"displayId":\d+/, '"displayId":' + M)
			q.dataset.mvDisplayId = M
			let i = WH.ge('sticky-screenshot-model-substitute')
			if (i) {
				i.src = WH.Wow.Item.getThumbUrl(parseInt(M), a)
			}
		}
	}
	let V = this._bonusesBtn.selectedBonus.replace(/u:/, '')
	WH.Url.replacePageQuery(function (e) {
		if (V) {
			e.bonus = V
		} else {
			delete e.bonus
		}
	})
	WH.updateItemStringLink.call(this)
	if (!t && i[n]['tooltip_' + Locale.getName()]) {
		var j = WH.ge('sl' + n)
		j.innerHTML = ''
		this.slider = null
		var J = WH.enhanceTooltip.call(
			this,
			n,
			true,
			true,
			j,
			null,
			this._knownSpells,
			WH.ge('ks' + n),
			this._selectedUpgrade,
			null,
			null,
			true,
			null,
			null,
			this._bonusesBtn.selectedBonus
		)
		WH.updateTooltip.call(this, J)
	}
}
WH.updateItemStringLink = function () {
	var e = WH.getDataSource()
	var t = WH.isSet('g_pageInfo') ? g_pageInfo['typeId'] : null
	if (e[t]) {
		var a = ''
		var i = []
		if (this._bonusesBtn && this._bonusesBtn.selectedBonus) {
			a = this._bonusesBtn.selectedBonus.replace(/u:/, '')
			i = a.split(':')
		}
		var n = typeof this._selectedUpgrade == 'number' ? this._selectedUpgrade : 0
		var r = e[t].upgradeData.length > 0 ? e[t].upgradeData[n].id : ''
		var o = this._selectedLevel ? this._selectedLevel : WH.maxLevel
		var s = this._knowledgeLevel ? this._knowledgeLevel : 0
		var l = this._classSpecBtn && this._classSpecBtn.selectedSpec ? this._classSpecBtn.selectedSpec : ''
		var c = 0
		var f = ''
		if (r) {
			c |= 4
			f = (f ? ':' : '') + r
		} else if (i.length && g_itembonuses) {
			e: for (var u = 0, p; (p = i[u]); u++) {
				if (!g_itembonuses[p]) {
					continue
				}
				for (var d = 0, W; (W = g_itembonuses[p][d]); d++) {
					if (W[0] == 11 || W[0] == 13) {
						c |= 512
						f = (f ? ':' : '') + o
						break e
					}
				}
			}
		}
		if (s) {
			c |= 8388608
			f = (f ? ':' : '') + (s + 1)
		}
		var H = '' + (c ? c : '') + '::' + (i.length ? i.length + ':' : '') + a + ':' + f
		var g = WH.ge('open-links-button')
		if (g) {
			var h = {
				type: 3,
				typeId: t,
				linkColor: 'ff' + WH.Wow.Item.getQualityColor(e[t].quality, true).replace(/^#/, ''),
				linkId: 'item:' + t + '::::::::' + o + ':' + l + ':' + H,
				linkName: e[t]['name_' + Locale.getName()],
				bonuses: i,
				slot: e[t].slot,
			}
			if (o != WH.maxLevel) {
				h.lvl = o
			}
			if (l) {
				h.spec = l
			}
			if ((sliderControl = WH.ge('sl' + t))) {
				h.dropLevel = $(sliderControl).find('input').val()
			}
			g.onclick = WH.Links.show.bind(WH.Links, g, h)
		}
	}
}
WH.upgradeItemTooltip = function (e, t) {
	var a = WH.getDataSource()
	var i = g_pageInfo['typeId']
	if (a[i]) {
		var n = $('#' + e.id + ' > input')
		var r = null
		if (typeof t != 'number') {
			n.each(function (e, a) {
				if (a.id.indexOf(t) != -1) {
					r = a
					return false
				}
			})
		} else {
			r = n.get(t - 1)
		}
		var o = r.checked
		n.each(function (e, t) {
			t.checked = false
		})
		r.checked = o
		if (!o) {
			t = null
		}
		this._selectedUpgrade = t
		WH.updateItemStringLink.call(this)
		if (a[i]['tooltip_' + Locale.getName()]) {
			var s = this._bonusesBtn && this._bonusesBtn.selectedBonus ? this._bonusesBtn.selectedBonus : null
			var l = WH.enhanceTooltip.call(
				this,
				i,
				true,
				true,
				false,
				null,
				this._knownSpells,
				WH.ge('ks' + i),
				t,
				null,
				null,
				true,
				null,
				null,
				s
			)
			WH.updateTooltip.call(this, l)
		}
	}
}
WH.updateTooltip = function (e) {
	if (this.classList.contains('partial-sub-tooltip')) {
		this.innerHTML = WH.Tooltip.evalFormulas(e)
		return
	}
	this.innerHTML =
		'<table><tr><td>' +
		WH.Tooltip.evalFormulas(e) +
		'</td><th style="background-position: top right"></th></tr><tr><th style="background-position: bottom left"></th><th style="background-position: bottom right"></th></tr></table>'
	WH.Tooltip.fixSafe(this, 1, 1)
}
WH.staticTooltipLevelClick = function (e, t, a, i) {
	while (e.className.indexOf('tooltip') == -1) {
		e = e.parentNode
	}
	var n = e.innerHTML
	var r = n.match(/<!--i?\?(\d+):(\d+):(\d+):(\d+)/)
	if (!r && !WH.isRetailTree()) {
		r = n.match(/<!--ppl(\d+):(\d+):(\d+):(\d+):(\d+)/)
		if (r) {
			r = [null, r[1], r[2], WH.maxLevel, 0]
		}
	}
	if (!r) {
		return
	}
	var o = parseInt(r[1]),
		s = parseInt(r[2]),
		l = parseInt(r[3]),
		c = parseInt(r[4])
	if (s >= l) {
		return
	}
	if (isNaN(t)) {
		t = prompt(WH.sprintf(WH.TERMS.ratinglevel_format, s, l), c)
	}
	t = parseInt(t)
	if (isNaN(t)) {
		return
	}
	if (t == c || t < s || t > l) {
		return
	}
	e._selectedLevel = t
	var f = WH.getDataSource()
	r = WH.setTooltipLevel.bind(e, f[o][(i ? 'buff_' : 'tooltip_') + Locale.getName()], t, i)()
	var u = e._bonusesBtn && e._bonusesBtn.selectedBonus ? e._bonusesBtn.selectedBonus : null
	var p = e._selectedUpgrade ? e._selectedUpgrade : 0
	r = WH.enhanceTooltip.call(e, r, true, null, null, null, null, null, p, null, null, null, null, null, u)
	WH.updateTooltip.call(e, r)
	if (e.slider && !a) {
		Slider.setValue(e.slider, t)
	}
	if (!i) {
		WH.tooltipSpellsChange.bind(e)()
	}
}
WH.staticTooltipKnowledgeLevelClick = function (e, t, a) {
	while (e.className.indexOf('tooltip') == -1) {
		e = e.parentNode
	}
	var i = e.innerHTML
	if (isNaN(t)) {
		WH.Tooltip.hide()
		t = prompt(WH.sprintf(WH.TERMS.ratinglevel_format, 0, g_artifact_knowledge_max_level), e._knowledgeLevel ? e._knowledgeLevel : 0)
	}
	t = parseInt(t)
	if (isNaN(t)) {
		return
	}
	if (t < 0 || t > g_artifact_knowledge_max_level) {
		return
	}
	e._knowledgeLevel = t
	WH.Url.replacePageQuery(function (e) {
		if (t) {
			e.artk = t
		} else {
			delete e.artk
		}
	})
	var n = WH.getDataSource()
	i = WH.setTooltipLevel.bind(e, n[a]['tooltip_' + Locale.getName()], e._selectedLevel, null)()
	var r = e._bonusesBtn && e._bonusesBtn.selectedBonus ? e._bonusesBtn.selectedBonus : null
	var o = e._selectedUpgrade ? e._selectedUpgrade : 0
	i = WH.enhanceTooltip.call(e, i, true, null, null, null, null, null, o, null, null, null, null, null, r)
	WH.updateTooltip.call(e, i)
}
WH.tooltipSliderMove = function (e, t, a) {
	WH.staticTooltipLevelClick(this, a.value, 1)
	if (this.bufftip) {
		WH.staticTooltipLevelClick(this.bufftip, a.value, 1, 1)
	}
	WH.Tooltip.hide()
}
WH.tooltipSpellsChange = function () {
	if (!this.modified) {
		return
	}
	var e = this.modified[0],
		t = this.modified[1],
		a = []
	$.each($('input:checked', e), function (e, t) {
		a.push(parseInt(t.dataset.spellId))
	})
	$.each($('select option', e), function (e, t) {
		if (t.selected) {
			a.push(parseInt(t.value))
		}
	})
	this.modified[2] = a
	this.innerHTML = WH.setTooltipSpells(this.innerHTML, a, t)
	if (this.bufftip) {
		WH.tooltipSpellsChange.bind(this.bufftip)()
	}
}
WH.tooltipRPPMChange = function (e) {
	var t = $(this).attr('id').match(/\d+$/)[0]
	e.innerHTML = WH.Tooltip.evalFormulas(
		e.innerHTML.replace(/<!--rppm-->(\[?)(\d+(?:\.\d+)?)([^<]*)<!--rppm-->/, function (a, i, n, r) {
			return (
				'\x3c!--rppm--\x3e' +
				i +
				(e._rppmModBase * (1 + parseFloat(e._rppmSpecModList[t].modifiervalue))).toFixed(2) +
				r +
				'\x3c!--rppm--\x3e'
			)
		})
	)
}
WH.validateBpet = function (e, t) {
	var a = 1,
		i = 25,
		n = 25,
		r = 0,
		o = 4,
		s = 3,
		l = (1 << 10) - 1,
		c = 3,
		f = $.extend({}, t)
	if (e.minlevel) {
		a = e.minlevel
	}
	if (e.maxlevel) {
		i = e.maxlevel
	}
	if (e.companion) {
		i = a
	}
	if (!f.level) {
		f.level = n
	}
	f.level = Math.min(Math.max(f.level, a), i)
	if (e.minquality) {
		r = e.minquality
		if (e.untameable) {
			o = r
		}
	}
	if (e.maxquality) {
		o = e.maxquality
	}
	if (f.quality == null) {
		f.quality = s
	}
	f.quality = Math.min(Math.max(f.quality, r), o)
	if (e.companion) {
		delete f.quality
	}
	if (e.breeds > 0) {
		l = e.breeds & l
	}
	if (!(l & (1 << (c - 3)))) {
		c = Math.floor(3 + Math.log(l) / Math.LN2)
	}
	if (f.breed && f.breed >= 13) {
		f.breed -= 10
	}
	if (!f.breed || !(l & (1 << (f.breed - 3)))) {
		f.breed = c
	}
	return f
}
WH.calcBattlePetStats = function (e, t, a, i, n) {
	if (!WH.battlePetBreedStats[t]) {
		t = 3
	}
	var r = e.health
	if (isNaN(r)) {
		r = 0
	}
	var o = e.power
	if (isNaN(o)) {
		o = 0
	}
	var s = e.speed
	if (isNaN(s)) {
		s = 0
	}
	if (isNaN(a)) {
		a = 1
	}
	a = Math.min(Math.max(0, a), 5)
	if (isNaN(i)) {
		i = 1
	}
	i = Math.min(Math.max(1, i), 25)
	var l = WH.battlePetBreedStats[t]
	var c = 1 + a / 10
	r = (r + l[0]) * 5 * i * c + 100
	o = (o + l[1]) * i * c
	s = (s + l[2]) * i * c
	if (n) {
		r = (r * 5) / 6
		o = (o * 4) / 5
	}
	return { health: Math.round(r), power: Math.round(o), speed: Math.round(s) }
}
WH.battlePetBreedStats = {
	3: [0.5, 0.5, 0.5],
	4: [0, 2, 0],
	5: [0, 0, 2],
	6: [2, 0, 0],
	7: [0.9, 0.9, 0],
	8: [0, 0.9, 0.9],
	9: [0.9, 0, 0.9],
	10: [0.4, 0.9, 0.4],
	11: [0.4, 0.4, 0.9],
	12: [0.9, 0.4, 0.4],
}
WH.battlePetAbilityLevels = [1, 2, 4, 10, 15, 20]
WH.Tooltip = {
	ARTIFACT_KNOWLEDGE_MULTIPLIERS: undefined,
	BONUS_ITEM_EFFECTS: undefined,
	ITEM_EFFECT_NAMES: undefined,
	ITEM_EFFECT_TOOLTIP_HTML: undefined,
	showingTooltip: false,
	create: function (e, t) {
		var a = WH.ce('div'),
			i = WH.ce('table'),
			n = WH.ce('tbody'),
			r = WH.ce('tr'),
			o = WH.ce('tr'),
			s = WH.ce('td'),
			l = WH.ce('th'),
			c = WH.ce('th'),
			f = WH.ce('th')
		a.className = 'wowhead-tooltip'
		l.style.backgroundPosition = 'top right'
		c.style.backgroundPosition = 'bottom left'
		f.style.backgroundPosition = 'bottom right'
		if (e) {
			s.innerHTML = WH.Tooltip.evalFormulas(e)
		}
		WH.ae(r, s)
		WH.ae(r, l)
		WH.ae(n, r)
		WH.ae(o, c)
		WH.ae(o, f)
		WH.ae(n, o)
		WH.ae(i, n)
		if (!t) {
			WH.Tooltip.icon = WH.ce('p')
			WH.Tooltip.icon.style.visibility = 'hidden'
			WH.ae(WH.Tooltip.icon, WH.ce('div'))
			WH.ae(a, WH.Tooltip.icon)
		}
		WH.ae(a, i)
		if (!t) {
			var u = WH.ce('div')
			u.className = 'wowhead-tooltip-powered'
			WH.ae(a, u)
			WH.Tooltip.logo = u
		}
		return a
	},
	getMultiPartHtml: function (e, t) {
		return '<table><tr><td>' + e + '</td></tr></table><table><tr><td>' + t + '</td></tr></table>'
	},
	evalFormulas: function (e) {
		if (typeof e !== 'string') {
			return e
		}
		let t = /<span class="wh-tooltip-formula" style="display:none">(\[[\w\W]*?\])<\/span>(?:\d+(?:\.\d+)?)?/g
		e = e.replace(t, '$1')
		var a = 0
		var i = 0
		var n = ''
		var r = 0
		for (var o = 0; o < e.length; o++) {
			var s = e.substr(o, 1)
			switch (s) {
				case '[':
					a++
					i = 0
					n = ''
					break
				case ']':
					a--
					if (a < 0) {
						a = 0
					}
					i = 0
					n = ''
					break
				case '(':
					if (a > 0) {
						break
					}
					n += s
					i++
					break
				case ')':
					if (a > 0) {
						break
					}
					if (i > 0) {
						n += s
						i--
					}
					break
				default:
					if (a == 0 && i > 0) {
						n += s
					}
			}
			if (a == 0 && i == 0 && n) {
				r = o - n.length + 1
				if (/[^ ()0-9\+\*\/\.-]/.test(n.replace(/<!--[\w\W]*?-->/g, '').replace(/\b(floor|ceil|abs)\b/gi, ''))) {
					n = ''
					continue
				}
				if (/^\([0-9\.]*\)$/.test(n)) {
					n = ''
					continue
				}
				if (!/<!--[\w\W]*?-->/g.test(n)) {
					n = ''
					continue
				}
				e = e.substr(0, r) + '[' + e.substring(r, o + 1) + ']' + e.substr(o + 1)
				o += 2
				n = ''
			}
		}
		e = e.replace(/\[([^\]]+)\]/g, function (e, t) {
			var a
			t = t.replace(/<!--[\w\W]*?-->/g, '')
			t = t.replace(/\b(floor|ceil|abs)\b/gi, 'Math.$1')
			try {
				a = Function('"use strict";return (' + t + ')')()
			} catch (e) {
				a = undefined
			}
			if (typeof a === 'undefined') {
				return e
			}
			return (
				'<span class="wh-tooltip-formula" style="display:none">' +
				e +
				'</span>' +
				Math.abs(a).toFixed(3).replace(/0+$/, '').replace(/\.$/, '')
			)
		})
		return e
	},
	fix: function (e, t, a) {
		var i = WH.gE(e, 'table')[0],
			n = WH.gE(i, 'td')[0],
			r = n.childNodes
		e.className = WH.trim(e.className.replace('tooltip-slider', ''))
		if (r.length >= 2 && r[0].nodeName == 'TABLE' && r[1].nodeName == 'TABLE') {
			r[0].style.whiteSpace = 'nowrap'
			var o = parseInt(e.style.width)
			if (!e.slider || !o) {
				if (r[1].offsetWidth == 0) {
					o = 320
				} else if (r[1].offsetWidth > 300) {
					o = Math.max(300, r[0].offsetWidth) + 20
				} else {
					o = Math.max(r[0].offsetWidth, r[1].offsetWidth) + 20
				}
			}
			for (var s = 2; s < r.length; s++) {
				if (r[s].nodeName == 'BLOCKQUOTE') {
					o = Math.max(o, r[s].offsetWidth + 20)
				}
			}
			o = Math.min(320, o)
			if (o > 20) {
				if (e.slider) {
					Slider.setSize(e.slider, o - 6)
					e.className += ' tooltip-slider'
				}
				e.className += ' wowhead-tooltip-width-restriction wowhead-tooltip-width-' + o
				e.style.width = o + 'px'
				r[0].style.width = r[1].style.width = '100%'
				if (!t && e.offsetHeight > document.documentElement.offsetHeight) {
					i.className = 'shrink'
				}
			}
		} else if (r.length >= 1 && e.slider) {
			var l = r[0].nodeName == 'TABLE'
			if (l) {
				r[0].style.whiteSpace = 'nowrap'
			}
			var o = parseInt(e.style.width)
			if (!o && l) {
				o = r[0].offsetWidth + 20
			} else {
				o = i.offsetWidth + 20
			}
			o = Math.min(320, o)
			if (o > 20) {
				e.style.width = o + 'px'
				if (l) {
					r[0].style.width = '100%'
				}
				if (e.slider) {
					Slider.setSize(e.slider, o - 6)
					e.className += ' tooltip-slider'
				}
				if (!t && e.offsetHeight > document.documentElement.offsetHeight) {
					i.className = 'shrink'
				}
			}
		}
		if (a) {
			WH.Tooltip.setTooltipVisibility(e, true)
		}
	},
	fixSafe: function (e, t, a) {
		WH.Tooltip.fix(e, t, a)
	},
	attachImage: function (e, t, a, i) {
		if (typeof i == 'undefined') i = ''
		if (typeof jQuery != 'undefined') {
			jQuery(e.parentNode)
				.children('.image' + i)
				.remove()
		} else {
			var n = new RegExp('\\bimage' + i + '\\b')
			for (var r = 0; r < e.parentNode.childNodes.length; r++) {
				if (n.test(e.parentNode.childNodes[r].className)) {
					e.parentNode.removeChild(e.parentNode.childNodes[r])
					r--
				}
			}
		}
		var o = typeof t
		if (o == 'number') {
			var s = WH.getDataSource(),
				l = t
			if (s[l] && s[l]['image_' + Locale.getName() + i]) {
				t = s[l]['image_' + Locale.getName() + i]
			} else {
				return
			}
		} else if (o != 'string' || !t) {
			return
		}
		var c = WH.ce('div')
		c.className = 'image' + i + (a ? ' ' + a : '')
		c.style.backgroundImage = 'url(' + t + ')'
		if (typeof jQuery != 'undefined') {
			jQuery(e).after(c)
		} else {
			e.parentNode.insertBefore(c, e.nextSibling)
		}
	},
	append: function (e, t, a, i) {
		var e = WH.ge(e)
		var n = WH.Tooltip.create(t, a)
		if (i) {
			var r = WH.ce('p')
			r.style.backgroundImage = 'url(https://wow.zamimg.com/images/wow/icons/medium/' + i.toLowerCase() + '.jpg)'
			WH.ae(r, WH.ce('div'))
			WH.ae(n, r)
		}
		WH.ae(e, n)
		WH.Tooltip.fixSafe(n, 1, 1)
	},
	reset: function () {
		if (WH.Tooltip.tooltip) {
			WH.Tooltip.tooltip.parentNode.removeChild(WH.Tooltip.tooltip)
			WH.Tooltip.tooltip = null
		}
		if (WH.Tooltip.tooltip2) {
			WH.Tooltip.tooltip2.parentNode.removeChild(WH.Tooltip.tooltip2)
			WH.Tooltip.tooltip2 = null
		}
	},
	prepare: function (e, t) {
		var a = t === true ? 'fixed' : 'absolute'
		if (WH.Tooltip.tooltip) {
			WH.Tooltip.tooltip.style.position = a
			WH.Tooltip.tooltip2.style.position = a
			return
		}
		var i = typeof e != 'undefined' ? e : document.body
		var n = WH.Tooltip.create()
		n.style.position = a
		n.style.left = n.style.top = '-2323px'
		WH.ae(i, n)
		WH.Tooltip.tooltip = n
		WH.Tooltip.tooltipTable = WH.gE(n, 'table')[0]
		WH.Tooltip.tooltipTd = WH.gE(n, 'td')[0]
		var n = WH.Tooltip.create(null, true)
		n.style.position = a
		n.style.left = n.style.top = '-2323px'
		WH.ae(i, n)
		WH.Tooltip.tooltip2 = n
		WH.Tooltip.tooltipTable2 = WH.gE(n, 'table')[0]
		WH.Tooltip.tooltipTd2 = WH.gE(n, 'td')[0]
	},
	prepareScreen: function () {
		if (WH.Tooltip.screen) {
			WH.Tooltip.screen.style.display = 'block'
		} else {
			WH.Tooltip.screen = WH.ce('div', { id: 'wowhead-tooltip-screen', className: 'wowhead-tooltip-screen' })
			WH.Tooltip.screenCloser = WH.ce('a', {
				id: 'wowhead-tooltip-screen-close',
				className: 'wowhead-tooltip-screen-close',
				onclick: $WowheadPower.clearTouchTooltip,
			})
			WH.Tooltip.screenInnerWrapper = WH.ce('div', {
				id: 'wowhead-tooltip-screen-inner-wrapper',
				className: 'wowhead-tooltip-screen-inner-wrapper',
			})
			WH.Tooltip.screenInner = WH.ce('div', { id: 'wowhead-tooltip-screen-inner', className: 'wowhead-tooltip-screen-inner' })
			WH.Tooltip.screenInnerBox = WH.ce('div', { id: 'wowhead-tooltip-screen-inner-box', className: 'wowhead-tooltip-screen-inner-box' })
			WH.Tooltip.screenCaption = WH.ce('div', { id: 'wowhead-tooltip-screen-caption', className: 'wowhead-tooltip-screen-caption' })
			WH.ae(WH.Tooltip.screen, WH.Tooltip.screenCloser)
			WH.ae(WH.Tooltip.screenInner, WH.Tooltip.screenInnerBox)
			WH.ae(WH.Tooltip.screenInnerWrapper, WH.Tooltip.screenInner)
			WH.ae(WH.Tooltip.screen, WH.Tooltip.screenInnerWrapper)
			WH.ae(WH.Tooltip.screen, WH.Tooltip.screenCaption)
			WH.ae(document.body, WH.Tooltip.screen)
		}
		WH.Tooltip.mobileTooltipShown = true
		WH.Tooltip.setupIScroll()
	},
	destroyIScroll: function () {
		if (WH.Tooltip.iScroll) {
			WH.Tooltip.iScroll.destroy()
			WH.Tooltip.iScroll = null
		}
	},
	setupIScroll: function () {
		if (!WH.Tooltip.mobileScrollSetUp) {
			var e = function (e) {
				if (WH.Tooltip.mobileTooltipShown) {
					if (!document.getElementById('wowhead-tooltip-screen-inner').contains(e.target)) {
						e.preventDefault()
					}
				}
			}
			WH.aE(document.body, 'touchmove', e)
			WH.aE(document.body, 'mousewheel', e)
			WH.Tooltip.mobileScrollSetUp = true
		}
		if (typeof IScroll != 'function') {
			return
		}
		setTimeout(function () {
			WH.Tooltip.destroyIScroll()
			WH.Tooltip.iScroll = new IScroll(WH.Tooltip.screenInnerWrapper, { mouseWheel: true, tap: true })
		}, 1)
	},
	setTooltipVisibility: function (e, t) {
		if (t) {
			e.setAttribute('data-visible', 'yes')
			e.style.visibility = 'visible'
		} else {
			e.setAttribute('data-visible', 'no')
			e.style.visibility = 'hidden'
		}
	},
	set: function (e, t, a, i) {
		WH.Tooltip.tooltip.style.width = '550px'
		WH.Tooltip.tooltip.style.left = '-2323px'
		WH.Tooltip.tooltip.style.top = '-2323px'
		WH.Tooltip.tooltip.className = 'wowhead-tooltip'
		if (e.nodeName) {
			WH.ee(WH.Tooltip.tooltipTd)
			WH.ae(WH.Tooltip.tooltipTd, e)
		} else {
			WH.Tooltip.tooltipTd.innerHTML = WH.Tooltip.evalFormulas(e)
		}
		WH.Tooltip.tooltip.style.display = ''
		WH.Tooltip.setTooltipVisibility(WH.Tooltip.tooltip, true)
		WH.Tooltip.fix(WH.Tooltip.tooltip, 0, 0)
		if (t) {
			WH.Tooltip.showSecondary = true
			WH.Tooltip.tooltip2.style.width = '550px'
			WH.Tooltip.tooltip2.style.left = '-2323px'
			WH.Tooltip.tooltip2.style.top = '-2323px'
			if (t.nodeName) {
				WH.ee(WH.Tooltip.tooltipTd2)
				WH.ae(WH.Tooltip.tooltipTd2, t)
			} else {
				WH.Tooltip.tooltipTd2.innerHTML = WH.Tooltip.evalFormulas(t)
			}
			WH.Tooltip.tooltip2.style.display = ''
			WH.Tooltip.fix(WH.Tooltip.tooltip2, 0, 0)
		} else {
			WH.Tooltip.showSecondary = false
		}
		if ((window.Platform && Platform.isTouch()) || (window.WH && WH.isTouch())) {
			let e = WH.Tooltip.showSecondary ? WH.Tooltip.tooltipTd2 : WH.Tooltip.tooltipTd
			let t = WH.ce('a')
			t.href = 'javascript:'
			t.className = 'wowhead-touch-tooltip-closer'
			t.onclick = $WowheadPower.clearTouchTooltip
			WH.ae(e, t)
		}
		WH.Tooltip.tooltipTable.style.display = e == '' ? 'none' : ''
		WH.Tooltip.attachImage(WH.Tooltip.tooltipTable, a, i)
		WH.Tooltip.generateEvent('show')
	},
	moveTests: [
		[null, null],
		[null, false],
		[false, null],
		[false, false],
	],
	move: function (e, t, a, i, n, r) {
		if (!WH.Tooltip.tooltipTable) return
		var o = WH.Tooltip.tooltip,
			s = WH.Tooltip.tooltipTable.offsetWidth,
			l = WH.Tooltip.tooltipTable.offsetHeight,
			c = WH.Tooltip.tooltip2,
			f = WH.Tooltip.showSecondary ? WH.Tooltip.tooltipTable2.offsetWidth : 0,
			u = WH.Tooltip.showSecondary ? WH.Tooltip.tooltipTable2.offsetHeight : 0,
			p
		o.style.width = s == 0 ? 'auto' : s + 'px'
		c.style.width = f + 'px'
		var d, W
		for (var H = 0, g = WH.Tooltip.moveTests.length; H < g; ++H) {
			p = WH.Tooltip.moveTests[H]
			d = WH.Tooltip.moveTest(e, t, a, i, n, r, p[0], p[1])
			if (WH.WAS && !WH.WAS.intersect(d)) {
				W = true
				break
			} else if (!WH.WAS) {
				break
			}
		}
		if (WH.WAS && !W) {
			WH.WAS.intersect(d, true)
		}
		o.style.left = d.l + 'px'
		o.style.top = d.t + 'px'
		WH.Tooltip.setTooltipVisibility(o, true)
		if (WH.Tooltip.showSecondary) {
			c.style.left = d.l + s + 'px'
			c.style.top = d.t + 'px'
			WH.Tooltip.setTooltipVisibility(c, true)
		}
		WH.Tooltip.generateEvent('move')
	},
	moveTest: function (e, t, a, i, n, r, o, s) {
		var l = e,
			c = t,
			f = WH.Tooltip.tooltip,
			u = WH.Tooltip.tooltipTable.offsetWidth,
			p = WH.Tooltip.tooltipTable.offsetHeight,
			d = WH.Tooltip.tooltip2,
			W = WH.Tooltip.showSecondary ? WH.Tooltip.tooltipTable2.offsetWidth : 0,
			H = WH.Tooltip.showSecondary ? WH.Tooltip.tooltipTable2.offsetHeight : 0,
			g = WH.getWindowSize(),
			h = WH.getScroll(),
			m = h.x,
			v = h.y,
			T = h.x + g.w,
			_ = h.y + g.h
		if (f.style.position === 'fixed') {
			e -= h.x
			t -= h.y
			l -= e
			c -= t
			h = { x: 0, y: 0 }
			m = v = 0
			T = g.w
			_ = g.h
		}
		if (o == null) {
			o = e + a + u + W <= T
		}
		if (s == null) {
			s = t - Math.max(p, H) >= v
		}
		if (o) {
			e += a + n
		} else {
			e = Math.max(e - (u + W), m) - n
		}
		if (s) {
			t -= Math.max(p, H) + r
		} else {
			t += i + r
		}
		if (e < m) {
			e = m
		} else if (e + u + W > T) {
			e = T - (u + W)
		}
		if (t < v) {
			t = v
		} else if (t + Math.max(p, H) > _) {
			t = Math.max(h.y, _ - Math.max(p, H))
		}
		if (WH.Tooltip.iconVisible) {
			if (l >= e - 48 && l <= e && c >= t - 4 && c <= t + 48) {
				t -= 48 - (c - t)
			}
		}
		return WH.createRect(e, t, u, p)
	},
	show: function (e, t, a, i, n, r, o, s, l) {
		if (t == null || WH.Tooltip.disabled) {
			return
		}
		if (!a || a < 1) a = 1
		if (!i || i < 1) i = 1
		if (n) {
			t = '<span class="' + n + '">' + t + '</span>'
		}
		let c = WH.getOffset(e)
		WH.Tooltip.prepare(undefined, l)
		WH.Tooltip.set(t, r, o, s)
		WH.Tooltip.move(c.left, c.top, e.offsetWidth, e.offsetHeight, a, i)
	},
	showAtCursor: function (e, t, a, i, n, r, o, s) {
		if (t == null || WH.Tooltip.disabled) {
			return
		}
		if (!a || a < 10) a = 10
		if (!i || i < 10) i = 10
		if (n) {
			t = '<span class="' + n + '">' + t + '</span>'
			if (r) {
				r = '<span class="' + n + '">' + r + '</span>'
			}
		}
		WH.Tooltip.prepare(undefined, e.target ? WH.isElementFixedPosition(e.target) : false)
		WH.Tooltip.set(t, r, o, s)
		WH.Tooltip.move(e.pageX, e.pageY, 0, 0, a, i)
	},
	showAtXY: function (e, t, a, i, n, r, o, s, l) {
		if (e == null || WH.Tooltip.disabled) {
			return
		}
		WH.Tooltip.prepare(undefined, l)
		WH.Tooltip.set(e, r, o, s)
		WH.Tooltip.move(t, a, 0, 0, i, n)
	},
	showFadingTooltipAtCursor: function (e, t, a, i, n) {
		n = n || window.event
		e = WH.Tooltip.prepareTooltipHtml(e, a, i, n)
		WH.Tooltip.showAtCursor(n, e, undefined, undefined, t)
		requestAnimationFrame(function () {
			WH.Tooltip.tooltip.classList.add('fade-out')
		})
	},
	showInScreen: function (e, t, a, i, n, r, o) {
		$WowheadPower.clearTouchTooltip(true)
		if (t == null || WH.Tooltip.disabled) {
			return
		}
		if (a) {
			t = '<span class="' + a + '">' + t + '</span>'
		}
		WH.Tooltip.prepareScreen()
		WH.ee(WH.Tooltip.screenCaption)
		var s = WH.ce('a', {
			innerHTML: WH.isRemote() ? 'Tap Link' : WH.TERMS.taplink,
			onclick: function (e, t) {
				e.setAttribute('data-disable-wowhead-tooltip', 'true')
				if (e.fireEvent) {
					e.fireEvent('on' + t)
				} else if (typeof MouseEvent == 'function') {
					e.dispatchEvent(new MouseEvent(t, { bubbles: true, cancelable: true }))
				} else {
					var a = document.createEvent('Events')
					a.initEvent(t, true, true)
					e.dispatchEvent(a)
				}
				if (e) {
					e.removeAttribute('data-disable-wowhead-tooltip')
				}
				$WowheadPower.clearTouchTooltip()
			}.bind(null, e, 'click'),
		})
		var l = WH.ce('i', { className: 'fa fa-hand-o-up' })
		WH.aef(s, l)
		WH.ae(WH.Tooltip.screenCaption, s)
		$WowheadPower.setParent(WH.Tooltip.screenInnerBox)
		WH.Tooltip.setIcon(o)
		WH.Tooltip.set(t, i, n, r)
		WH.Tooltip.move()
	},
	cursorUpdate: function (e, t, a) {
		if (WH.Tooltip.disabled || !WH.Tooltip.tooltip) {
			return
		}
		if (!t || t < 10) t = 10
		if (!a || a < 10) a = 10
		var i = WH.getCursorPos(e)
		WH.Tooltip.move(i.x, i.y, 0, 0, t, a)
	},
	hide: function () {
		if (WH.Tooltip.tooltip) {
			WH.Tooltip.showingTooltip = false
			WH.Tooltip.tooltip.style.display = 'none'
			WH.Tooltip.setTooltipVisibility(WH.Tooltip.tooltip, false)
			WH.Tooltip.tooltipTable.className = ''
			WH.Tooltip.setIcon(null)
			if (WH.WAS) {
				WH.WAS.restoreHidden()
			}
			WH.Tooltip.generateEvent('hide')
		}
		if (WH.Tooltip.tooltip2) {
			WH.Tooltip.tooltip2.style.display = 'none'
			WH.Tooltip.setTooltipVisibility(WH.Tooltip.tooltip2, false)
			WH.Tooltip.tooltipTable2.className = ''
		}
	},
	setIcon: function (e, t) {
		WH.Tooltip.prepare(undefined, t)
		if (e) {
			WH.Tooltip.icon.style.backgroundImage = 'url(https://wow.zamimg.com/images/wow/icons/medium/' + e.toLowerCase() + '.jpg)'
			WH.Tooltip.icon.style.visibility = 'visible'
		} else {
			WH.Tooltip.icon.style.backgroundImage = 'none'
			WH.Tooltip.icon.style.visibility = 'hidden'
		}
		WH.Tooltip.iconVisible = e ? 1 : 0
	},
	generateEvent: function (e) {
		if (!WH.Tooltip.tooltip) {
			return
		}
		try {
			WH.Tooltip.tooltip.dispatchEvent(new Event(e))
		} catch (a) {
			try {
				var t = document.createEvent('Event')
				t.initEvent(e, true, true)
				WH.Tooltip.tooltip.dispatchEvent(t)
			} catch (e) {
				void 0
			}
		}
	},
	addTooltipText: function (e, t, a) {
		if (!e) {
			WH.error('Tooltip text addition element not found!', e, t, a)
			return
		}
		e._fixTooltip = function (e, t, a, i) {
			var n = /<\/table>\s*$/
			var r = typeof a === 'function' ? a() : a
			var o = a ? ' class="' + r + '"' : ''
			var s = typeof t === 'function' ? t() : t
			if (n.test(i)) {
				return i.replace(n, '<tr><td colspan="2"><div' + o + ' style="margin-top:10px">' + s + '</div></td></tr></table>')
			} else {
				return i + '<div' + o + ' style="margin-top:10px">' + s + '</div>'
			}
		}.bind(null, e, t, a)
	},
	prepareTooltipHtml: function (e, t, a, i) {
		e = typeof e === 'function' ? e.call(i.target, i) : e
		if (typeof e === 'string') {
			if (t === undefined && e.length < 30) {
				t = true
			}
			let i = []
			if (t) {
				i.push(' class="no-wrap"')
			}
			if (a && !isNaN(a)) {
				i.push(' style="max-width:' + a + 'px"')
			}
			if (i.length) {
				e = '<div' + i.join('') + '>' + e + '</div>'
			}
		}
		return e
	},
	simple: function (e, t, a, i, n, r, o) {
		if (e instanceof jQuery) {
			for (let s = 0, l; (l = e[s]); s++) {
				WH.Tooltip.simple(l, t, a, i, n, r, o)
			}
			return
		}
		if (i) {
			if (n) {
				e.onmouseover = function (i) {
					let n = WH.Tooltip.prepareTooltipHtml(t, r, o, i)
					WH.Tooltip.show(e, n, false, false, a)
					i.stopPropagation()
				}
			} else {
				e.onmouseover = function (i) {
					let n = WH.Tooltip.prepareTooltipHtml(t, r, o, i)
					WH.Tooltip.show(e, n, false, false, a)
				}
			}
		} else {
			if (n) {
				e.onmouseover = function (e) {
					let i = WH.Tooltip.prepareTooltipHtml(t, r, o, e)
					WH.Tooltip.showAtCursor(e, i, false, false, a)
					e.stopPropagation()
				}
			} else {
				e.onmouseover = function (e) {
					let i = WH.Tooltip.prepareTooltipHtml(t, r, o, e)
					WH.Tooltip.showAtCursor(e, i, false, false, a)
				}
			}
			e.onmousemove = WH.Tooltip.cursorUpdate
		}
		e.onmouseout = WH.Tooltip.hide
	},
	simpleNonTouch: function (e, t, a, i, n) {
		if (!Platform.isTouch()) {
			WH.Tooltip.simple(e, t, a, i, false, n)
		}
	},
	simpleOverride: function (e, t, a, i, n, r, o, s, l, c, f) {
		e.overrideTooltip = {
			html: t,
			htmlGenerator: a,
			spanClass: i,
			icon: n,
			html2: r,
			html2Generator: o,
			image: s,
			imageClass: l,
			map: c,
			spellData: f,
		}
	},
}
WH.createButton = function (e, t, a) {
	var i = 'btn btn-site'
	var n = ''
	var r = ''
	var o = ''
	var s = ''
	var l = []
	var c = []
	if (!a) {
		a = {}
	}
	if (!a['no-margin']) {
		c.push('margin-left:5px')
	}
	if (typeof t != 'string' || t === '') {
		t = 'javascript:'
	}
	if (a['new-window']) {
		n = ' target="_blank"'
	}
	if (typeof a['id'] == 'string') {
		r = ' id="' + a['id'] + '"'
	}
	if (typeof a['size'] != 'undefined') {
		switch (a['size']) {
			case 'small':
			case 'large':
				l.push('btn-' + a['size'])
				break
		}
	} else {
		l.push('btn-small')
	}
	if (typeof a['class'] == 'string') {
		l.push(a['class'])
	}
	if (typeof a['type'] == 'string') {
		switch (a['type']) {
			case 'default':
			case 'gray':
				i = 'btn'
				break
			default:
				i = 'btn btn-' + a['type']
		}
	}
	if (a['disabled']) {
		l.push('btn-disabled')
		t = 'javascript:'
	}
	if (l.length) {
		i += ' ' + l.join(' ')
	}
	if (i) {
		i = ' class="' + i + '"'
	}
	if (!(typeof a['float'] != 'undefined' && !a['float'])) {
		c.push('float:right')
	}
	if (typeof a['style'] == 'string') {
		c.push(a['style'])
	}
	if (c.length) {
		o = ' style="' + c.join(';') + '"'
	}
	var f = '<a href="' + t + '"' + n + r + i + o + '>' + (e || '') + '</a>'
	var u = WH.ce('div')
	u.innerHTML = f
	var p = u.childNodes[0]
	if (typeof a['click'] == 'function' && !a['disabled']) {
		p.onclick = a['click']
	}
	if (typeof a['tooltip'] != 'undefined') {
		if (a['tooltip'] !== false) {
			p.setAttribute('data-whattach', 'true')
		}
		if (a['tooltip'] === false) {
			p.rel = 'np'
		} else if (typeof a['tooltip'] == 'string') {
			WH.Tooltip.simple(p, a['tooltip'], null, true)
		} else if (typeof a['tooltip'] == 'object' && a['tooltip']['text']) {
			WH.Tooltip.simple(p, a['tooltip']['text'], a['tooltip']['class'], true)
		}
	}
	return p
}
if (WH.isSet('$WowheadPower')) {
	$WowheadPower.init()
}
