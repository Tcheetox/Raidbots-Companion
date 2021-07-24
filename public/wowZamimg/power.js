if (!window.WH) {
	window.WH = { PageMeta: {}, staticUrl: `${window.location.origin}/wowZamimg`, wowheadRemote: true }
}
WH.isTouch = function () {
	if (!WH.wowheadRemote && typeof Platform !== 'undefined') {
		WH.isTouch = function () {
			return Platform.isTouch()
		}
	} else {
		var e = navigator.userAgent || navigator.vendor || window.opera
		var t = { isMobile: false, isTablet: false }
		if (
			/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
				e
			) ||
			/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
				e.substr(0, 4)
			)
		) {
			t.isMobile = true
		}
		if (!t.isMobile && /(android|ipad|playbook|silk)/i.test(e)) {
			t.isTablet = true
		}
		WH.isTouch = function (e) {
			return e.isMobile || e.isTablet
		}.bind(null, t)
		WH.isMobile = function (e) {
			return e
		}.bind(null, t.isMobile)
		WH.isTablet = function (e) {
			return e
		}.bind(null, t.isTablet)
	}
	return WH.isTouch()
}
if (!window.$WowheadPower) {
	window.$WowheadPower = new (function () {
		if (!WH.Types) {
			WH.Types = new (function () {
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
				this.PET_ABILITY = 200
				this.SCREENSHOT = 91
				this.GUIDE_IMAGE = 98
				this.GUIDE = 100
				this.TRANSMOG_SET = 101
				this.OUTFIT = 110
				this.GEAR_SET = 111
				this.LISTVIEW = 158
			})()
		}
		const e = WH.Types
		const t = { garrisonability: 'mission-ability', itemset: 'item-set', petability: 'pet-ability' }
		const a = -1
		const i = 0
		const o = 1
		const n = {}
		n['-1000'] = { name: 'Mount', path: 'mount', mobile: true, data: {}, maxId: 5e4 }
		n['-1001'] = { name: 'Recipe', path: 'recipe', mobile: true, data: {}, maxId: 5e5 }
		n['-1002'] = { name: 'Battle Pet', path: 'battle-pet', mobile: true, data: {}, maxId: 5e4 }
		n[WH.Types.NPC] = { name: 'NPC', path: 'npc', mobile: false, data: {}, maxId: 5e5 }
		n[WH.Types.OBJECT] = { name: 'Object', path: 'object', mobile: false, data: {}, maxId: 75e4 }
		n[WH.Types.ITEM] = { name: 'Item', path: 'item', mobile: true, data: {}, maxId: 5e5 }
		n[WH.Types.ITEM_SET] = { name: 'Item Set', path: 'item-set', mobile: true, data: {}, maxId: 1e4, minId: -5e3 }
		n[WH.Types.QUEST] = { name: 'Quest', path: 'quest', mobile: false, data: {}, maxId: 1e5 }
		n[WH.Types.SPELL] = { name: 'Spell', path: 'spell', mobile: true, data: {}, maxId: 5e5 }
		n[WH.Types.ZONE] = { name: 'Zone', path: 'zone', mobile: false, data: {}, maxId: 5e4 }
		n[WH.Types.ACHIEVEMENT] = { name: 'Achievement', path: 'achievement', mobile: true, data: {}, maxId: 5e4 }
		n[WH.Types.EVENT] = { name: 'Event', path: 'event', mobile: false, data: {}, maxId: 1e4 }
		n[WH.Types.CURRENCY] = { name: 'Currency', path: 'currency', mobile: false, data: {}, maxId: 1e4 }
		n[WH.Types.BUILDING] = { name: 'Building', path: 'building', mobile: false, data: {}, maxId: 1e3 }
		n[WH.Types.FOLLOWER] = { name: 'Follower', path: 'follower', mobile: true, data: {}, maxId: 1e4 }
		n[WH.Types.MISSION_ABILITY] = { name: 'Mission Ability', path: 'mission-ability', mobile: true, data: {}, maxId: 1e4 }
		n[WH.Types.MISSION] = { name: 'Mission', path: 'mission', mobile: true, data: {}, maxId: 1e4 }
		n[WH.Types.SHIP] = { name: 'Ship', path: 'ship', mobile: true, data: {}, maxId: 1e4 }
		n[WH.Types.THREAT] = { name: 'Threat', path: 'threat', mobile: false, data: {}, maxId: 1e3 }
		n[WH.Types.RESOURCE] = { name: 'Resource', path: 'resource', mobile: true, data: {}, maxId: 100, minId: 0 }
		n[WH.Types.CHAMPION] = { name: 'Champion', path: 'champion', mobile: true, data: {}, maxId: 1e4 }
		n[WH.Types.ORDER_ADVANCEMENT] = { name: 'Order Advancement', path: 'order-advancement', mobile: true, data: {}, maxId: 5e3 }
		n[WH.Types.BFA_CHAMPION] = { name: 'BFA Champion', path: 'bfa-champion', mobile: true, data: {}, maxId: 1e4 }
		n[WH.Types.AFFIX] = { name: 'Affix', path: 'affix', mobile: true, data: {}, maxId: 1e3 }
		n[WH.Types.AZERITE_ESSENCE_POWER] = { name: 'Azerite Essence Power', path: 'azerite-essence-power', mobile: true, data: {}, maxId: 1e3 }
		n[WH.Types.AZERITE_ESSENCE] = { name: 'Azerite Essence', path: 'azerite-essence', mobile: false, data: {}, maxId: 100 }
		n[WH.Types.STORYLINE] = { name: 'Storyline', path: 'storyline', mobile: false, data: {}, maxId: 1e4 }
		n[WH.Types.ADVENTURE_COMBATANT_ABILITY] = {
			name: 'Adventure Combatant Ability',
			path: 'adventure-combatant-ability',
			mobile: true,
			data: {},
			maxId: 1e4,
		}
		n[WH.Types.GUIDE] = { name: 'Guide', path: 'guide', mobile: false, data: {} }
		n[WH.Types.TRANSMOG_SET] = { name: 'Transmog Set', path: 'transmog-set', mobile: true, data: {}, maxId: 5e4 }
		n[WH.Types.OUTFIT] = { name: 'Outfit', path: 'outfit', mobile: true, data: {} }
		n[WH.Types.PET_ABILITY] = { name: 'Battle Pet Ability', path: 'pet-ability', mobile: true, data: {}, maxId: 1e4 }
		const s = WH.wowheadRemote
		const r = WH.TERMS || {
			genericequip_tip:
				'<span class="q2">Equip: Increases your $1 by \x3c!--rtg$2--\x3e$3&nbsp;<small>(\x3c!--rtg%$2--\x3e0&nbsp;@&nbsp;L\x3c!--lvl--\x3e0)</small>.</span><br />',
			reforged_format: 'Reforged ($1 $2 &rarr; $1 $3)',
		}
		var l = s
		var c = false
		var d = { applyto: 3 },
			p = document.getElementsByTagName('head')[0],
			u,
			f = { attach: 3, attachToIcon: 1, attachWithoutScreenshot: 4, float: 0, floatWithoutIcon: 5, screen: 2 },
			m = 550,
			h = { colorLinks: 'colorlinks', iconizeLinks: 'iconizelinks', renameLinks: 'renamelinks' },
			g,
			w,
			b,
			v,
			H,
			T,
			W,
			y,
			E = f['float'],
			I = false,
			S = null,
			P = 1,
			A = 1,
			k = 0,
			R = 1,
			x = 2,
			M = 3,
			C = 4,
			_ = 5,
			N = 1,
			O = 2,
			L = 3,
			D = 4,
			F = 5,
			$ = 6,
			q = 7,
			z = 10,
			B = 12,
			j = 13,
			U = 17,
			G = 20,
			Y = 21,
			V = 22,
			Z = 23,
			K = 25,
			J = 26,
			X = 27,
			Q = 28,
			ee = 30,
			te = 38,
			ae = 40,
			ie = 42,
			oe = 43,
			ne = 44,
			se = 46
		;(TYPE_GUIDE = 100),
			(TYPE_TRANSMOGSET = 101),
			(TYPE_OUTFIT = 110),
			(TYPE_PETABILITY = 200),
			(ICONIZE_TYPES = [z, oe, ie, L, $]),
			(CURSOR_HSPACE = 15),
			(CURSOR_VSPACE = 15),
			(_LANG = {
				0: {
					achievementComplete: 'Achievement earned by $1 on $2/$3/$4',
					loading: 'Loadingâ€¦',
					noResponse: 'No response from server :(',
					notFound: '%s Not Found',
				},
				1: {
					achievementComplete: '$1ì´(ê°€) $2/$3/$4ì— ì—…ì ì„ ë‹¬ì„±í•¨',
					loading: 'ë¡œë”© ì¤‘â€¦',
					noResponse: 'ì„œë²„ê°€ ì‘ë‹µí•˜ì§€ ì•ŠìŠµë‹ˆë‹¤ :(',
					notFound: '%s ì„(ë¥¼) ì°¾ì„ ìˆ˜ ì—†ìŒ',
				},
				2: {
					achievementComplete: 'Haut-fait reÃ§u par $1 le $2/$3/$4',
					loading: 'Chargementâ€¦',
					noResponse: 'Pas de rÃ©ponse du serveur :(',
					notFound: '%s non trouvÃ©',
				},
				3: {
					achievementComplete: 'Erfolg wurde von $1 am $3.$2.$4 errungen',
					loading: 'LÃ¤dtâ€¦',
					noResponse: 'Keine Antwort vom Server :(',
					notFound: '%s nicht gefunden',
				},
				4: {
					achievementComplete: '$1åœ¨$2/$3/$4ä¸ŠèŽ·å¾—æˆå°±',
					loading: 'æ­£åœ¨è½½å…¥â€¦',
					noResponse: 'æœåŠ¡å™¨æ²¡æœ‰å“åº” :(',
					notFound: '%sæœªæ‰¾åˆ°',
				},
				6: {
					achievementComplete: 'Logro conseguido por $1 el $2/$3/$4',
					loading: 'Cargandoâ€¦',
					noResponse: 'No hay respuesta del servidor :(',
					notFound: '%s no encontrado/a',
				},
				7: {
					achievementComplete: '$1 Ð¿Ð¾Ð»ÑƒÑ‡Ð¸Ð»(Ð°) ÑÑ‚Ð¾ Ð´Ð¾ÑÑ‚Ð¸Ð¶ÐµÐ½Ð¸Ðµ $2/$3/$4',
					loading: 'Ð—Ð°Ð³Ñ€ÑƒÐ·ÐºÐ°â€¦',
					noResponse: 'ÐÐµÑ‚ Ð¾Ñ‚Ð²ÐµÑ‚Ð° Ð¾Ñ‚ ÑÐµÑ€Ð²ÐµÑ€Ð° :(',
					notFound: '%s Ð½Ðµ Ð½Ð°Ð¹Ð´ÐµÐ½Ð¾',
				},
				8: {
					achievementComplete: 'Conquista conseguida por $1 em $3/$2/$4',
					loading: 'Carregandoâ€¦',
					noResponse: 'Sem resposta do servidor :(',
					notFound: '%s nÃ£o encontrado(a)',
				},
				9: {
					achievementComplete: 'Impresa compiuta da $1 su $2/$3/$4',
					loading: 'Caricamentoâ€¦',
					noResponse: 'Nessuna risposta dal server :(',
					notFound: '%s Non Trovato',
				},
			}),
			(STEALTH_TYPES = [TYPE_GUIDE])
		var re = new (function () {
			const e = this
			var t = {}
			var a = {}
			var i = {}
			var o = {}
			this.fetch = function (e, i) {
				if (!o.hasOwnProperty(e) || o[e].hasOwnProperty(i)) {
					return
				}
				o[e][i] = R
				t[e][i] = []
				let n = WH.dataEnvKey[i]
				switch (i) {
					case WH.dataEnv.BETA:
						n = WH.BETA_DOMAIN || n
						break
					case WH.dataEnv.MAIN:
						n = 'www'
						break
				}
				let r
				if (s) {
					r = _e(n) + a[e]
				} else {
					r = WH.Url.getDataPageUrl(a[e].replace('/data/', ''))
				}
				r += '&json'
				WH.xhrJsonRequest(
					r,
					function (e, t, a) {
						if (!a) {
							WH.error('Wowhead tooltips failed to load entity scaling data.', he(e))
							return
						}
						re.setData(e, t, a)
					}.bind(null, e, i)
				)
			}
			this.getSpellsBySpec = function (e, t) {
				var a = b || WH.getDataEnv()
				this.registerCallback(j, a, function () {
					var o = i[j][a]
					var n = []
					if (o.specMap.hasOwnProperty(e)) {
						n = o['class'][o.specMap[e]].concat(o.spec[e] || [])
					}
					t(n)
				})
			}
			this.isLoaded = function (e, t) {
				if (!o.hasOwnProperty(e)) {
					return true
				}
				if (o[e][t] === C) {
					r()
					return true
				}
				return false
			}
			this.registerCallback = function (a, i, o) {
				if (e.isLoaded(a, i)) {
					window.requestAnimationFrame(o)
					return
				}
				if (!t[a].hasOwnProperty(i)) {
					e.fetch(a, i)
				}
				t[a][i].push(o)
			}
			this.setData = function (e, a, n) {
				o[e][a] = C
				t[e][a] = t[e][a] || []
				i[e][a] = n
				r()
				let s = t[e][a]
				while (s.length) {
					s.shift()()
				}
			}
			function n() {
				a[L] = '/data/item-scaling'
				a[$] = '/data/spell-scaling'
				a[j] = '/data/spec-spells'
				for (var e in a) {
					if (!a.hasOwnProperty(e)) {
						continue
					}
					o[e] = {}
					t[e] = {}
					i[e] = {}
				}
			}
			function r() {
				var e = b || WH.getDataEnv()
				var t
				if ((t = i[L][e])) {
					WH.staminaFactor = t.staminaByIlvl
					WH.convertRatingToPercent.RB = t.combatRatingsBase
					WH.convertRatingToPercent.LH = t.ratingsToPercentLH
					WH.convertRatingToPercent.RM = t.ratingsToPercentRM
					WH.convertRatingToPercent.LT = t.ratingsToPercentLT
					WH.convertScalingFactor.SV = t.itemScalingValue
					WH.convertScalingFactor.SD = t.scalingFactors
					WH.curvePoints = t.curvePoints
					WH.applyStatModifications.ScalingData = t.scalingData
					WH.Tooltip.ARTIFACT_KNOWLEDGE_MULTIPLIERS = t.artifactKnowledgeMultiplier
					WH.Tooltip.BONUS_ITEM_EFFECTS = t.bonusEffects.bonus
					WH.Tooltip.ITEM_EFFECT_NAMES = t.bonusEffects.effectSpellName
					WH.Tooltip.ITEM_EFFECT_TOOLTIP_HTML = t.bonusEffects.effect
					WH.contentTuningLevels = t.contentTuningLevels
				}
				if ((t = i[$][e])) {
					WH.convertScalingSpell.SV = t.scalingValue
					WH.convertScalingSpell.SpellInformation = t.spellInformation
					WH.convertScalingSpell.RandPropPoints = t.randPropPoints
				}
			}
			n()
		})()
		this.onScalesAvailable = re.registerCallback
		this.setScales = re.setData
		var le = { 0: 'enus', 1: 'kokr', 2: 'frfr', 3: 'dede', 4: 'zhcn', 6: 'eses', 7: 'ruru', 8: 'ptbr', 9: 'itit' }
		var ce = {
			getId: function () {
				return 0
			},
			getName: function () {
				return 'enus'
			},
		}
		if (typeof de === 'undefined') {
			var de = {
				traits: {
					agi: ['Agility', 'Agi', 'Agi'],
					arcres: ['Arcane resistance', 'Arcane Resist', 'ArcR'],
					arcsplpwr: ['Arcane spell power', 'Arcane Power', 'ArcP'],
					armor: ['Armor', 'Armor', 'Armor'],
					armorbonus: ['Additional armor', 'Bonus Armor', 'AddAr'],
					armorpenrtng: ['Armor penetration rating', 'Armor Pen', 'Pen'],
					atkpwr: ['Attack power', 'AP', 'AP'],
					block: ['Block value', 'Block Value', 'BkVal'],
					blockrtng: ['Block rating', 'Block', 'Block'],
					critstrkrtng: ['Critical strike rating', 'Crit', 'Crit'],
					defrtng: ['Defense rating', 'Defense', 'Def'],
					dmg: ['Weapon damage', 'Damage', 'Dmg'],
					dmgmax1: ['Maximum damage', 'Max Damage', 'Max'],
					dmgmin1: ['Minimum damage', 'Min Damage', 'Min'],
					dodgertng: ['Dodge rating', 'Dodge', 'Dodge'],
					dps: ['Damage per second', 'DPS', 'DPS'],
					exprtng: ['Expertise rating', 'Expertise', 'Exp'],
					firres: ['Fire resistance', 'Fire Resist', 'FirR'],
					firsplpwr: ['Fire spell power', 'Fire Power', 'FireP'],
					frores: ['Frost resistance', 'Frost Resist', 'FroR'],
					frosplpwr: ['Frost spell power', 'Frost Power', 'FroP'],
					hastertng: ['Haste rating', 'Haste', 'Haste'],
					health: ['Health', 'Health', 'Hlth'],
					healthrgn: ['Health regeneration', 'HP5', 'HP5'],
					hitrtng: ['Hit rating', 'Hit', 'Hit'],
					holres: ['Holy resistance', 'Holy Resist', 'HolR'],
					holsplpwr: ['Holy spell power', 'Holy Power', 'HolP'],
					int: ['Intellect', 'Int', 'Int'],
					level: ['Level', 'Level', 'Lvl'],
					mana: ['Mana', 'Mana', 'Mana'],
					manargn: ['Mana regeneration', 'MP5', 'MP5'],
					mastrtng: ['Mastery rating', 'Mastery', 'Mastery'],
					mleatkpwr: ['Melee attack power', 'Melee AP', 'AP'],
					mlecritstrkrtng: ['Melee critical strike rating', 'Melee Crit', 'Crit'],
					mledmgmax: ['Melee maximum damage', 'Melee Max Damage', 'Max'],
					mledmgmin: ['Melee minimum damage', 'Melee Min Damage', 'Min'],
					mledps: ['Melee DPS', 'Melee DPS', 'DPS'],
					mlehastertng: ['Melee haste rating', 'Melee Haste', 'Haste'],
					mlehitrtng: ['Melee hit rating', 'Melee Hit', 'Hit'],
					mlespeed: ['Melee speed', 'Melee Speed', 'Speed'],
					natres: ['Nature resistance', 'Nature Resist', 'NatR'],
					natsplpwr: ['Nature spell power', 'Nature Power', 'NatP'],
					nsockets: ['Number of sockets', 'Sockets', 'Sockt'],
					parryrtng: ['Parry rating', 'Parry', 'Parry'],
					reqarenartng: ['Required personal and team arena rating', 'Req Rating', 'Rating'],
					reqlevel: ['Required level', 'Req Level', 'Level'],
					resirtng: ['PvP Resilience rating', 'PvP Resilience', 'Resil'],
					rgdatkpwr: ['Ranged attack power', 'Ranged AP', 'RAP'],
					rgdcritstrkrtng: ['Ranged critical strike rating', 'Ranged Crit', 'Crit'],
					rgddmgmax: ['Ranged maximum damage', 'Ranged Max Damage', 'Max'],
					rgddmgmin: ['Ranged minimum damage', 'Ranged Min Damage', 'Min'],
					rgddps: ['Ranged DPS', 'Ranged DPS', 'DPS'],
					rgdhastertng: ['Ranged haste rating', 'Ranged Haste', 'Haste'],
					rgdhitrtng: ['Ranged hit rating', 'Ranged Hit', 'Hit'],
					rgdspeed: ['Ranged speed', 'Ranged Speed', 'Speed'],
					sepbasestats: 'Base stats',
					sepdefensivestats: 'Defensive stats',
					sepindividualstats: 'Individual stats',
					sepoffensivestats: 'Offensive stats',
					sepresistances: 'Resistances',
					sepweaponstats: 'Weapon stats',
					shares: ['Shadow resistance', 'Shadow Resist', 'ShaR'],
					shasplpwr: ['Shadow spell power', 'Shadow Power', 'ShaP'],
					speed: ['Speed', 'Speed', 'Speed'],
					spi: ['Spirit', 'Spi', 'Spi'],
					splcritstrkrtng: ['Spell critical strike rating', 'Spell Crit', 'Crit'],
					spldmg: ['Damage done by spells', 'Spell Damage', 'Dmg'],
					splheal: ['Healing done by spells', 'Healing', 'Heal'],
					splpwr: ['Spell power', 'Spell Power', 'SP'],
					splhastertng: ['Spell haste rating', 'Spell Haste', 'Haste'],
					splhitrtng: ['Spell hit rating', 'Spell Hit', 'Hit'],
					splpen: ['Spell penetration', 'Spell Pen', 'Pen'],
					sta: ['Stamina', 'Sta', 'Sta'],
					str: ['Strength', 'Str', 'Str'],
					pvppower: ['PvP Power', 'PvPPower', 'PvPPower'],
				},
			}
		}
		function pe() {
			if (WH.Tooltip) {
				WH.wowheadRemotePreload = true
			}
			if (s) {
				if (!WH.wowheadRemotePreload) {
					let e = ['basic.js?41']
					if (be('iconSize')) {
						e.push('global/WH/Icon.js?3')
					}
					for (let t = 0, a; (a = e[t]); t++) {
						let e = document.createElement('script')
						e.src = WH.staticUrl + '/js/' + a
						p.appendChild(e)
					}
				}
			} else {
				Te()
				We(function () {
					ce = window.Locale
					re.fetch(L, WH.getDataEnv())
					re.fetch($, WH.getDataEnv())
				})
			}
		}
		function ue() {
			var e = be('hide')
			if (!e) {
				return
			}
			if (typeof u !== 'undefined') {
				return
			}
			if (!document.styleSheets) {
				return
			}
			var t = document.createElement('style')
			t.type = 'text/css'
			p.appendChild(t)
			if (!window.createPopup) {
				p.appendChild(document.createTextNode(''))
			}
			u = document.styleSheets[document.styleSheets.length - 1]
			for (var a in e) {
				if (!e.hasOwnProperty(a) || !e[a]) {
					continue
				}
				if (u.insertRule) {
					u.insertRule('.wowhead-tooltip .whtt-' + a + '{display: none}', u.cssRules.length)
				} else if (u.addRule) {
					u.addRule('.wowhead-tooltip .whtt-' + a, 'display: none', -1)
				}
			}
		}
		this.getEntity = function (e, t, a, i) {
			if (i === undefined) {
				i = ce.getId()
			}
			if (!a) {
				a = WH.getDataEnv()
			}
			var o = fe(e)
			o[t] = o[t] || {}
			o[t][a] = o[t][a] || {}
			o[t][a][i] = o[t][a][i] || { status: k, callbacks: [], data: {} }
			return o[t][a][i]
		}
		function fe(e) {
			if (typeof n[e] !== 'object') {
				throw new Error('Wowhead tooltips could not find config for entity type [' + e + '].')
			}
			return n[e].data
		}
		function me(e) {
			if (typeof n[e] !== 'object') {
				WH.error('Wowhead tooltips could not find config for entity type.', e)
				return undefined
			}
			if (!WH.wowheadRemote || !n[e].hasOwnProperty('maxId')) {
				return undefined
			}
			return { min: n[e].hasOwnProperty('minId') ? n[e].minId : 1, max: n[e].maxId }
		}
		function he(e) {
			if (typeof n[e] !== 'object') {
				WH.error('Wowhead tooltips could not find config for entity type.', e)
				return 'Entity'
			}
			return n[e].name
		}
		function ge(e) {
			if (typeof n[e] !== 'object') {
				WH.error('Wowhead tooltips could not find config for entity type.', e)
				return 'unknown'
			}
			return n[e].path
		}
		function we(e, t) {
			var a = _LANG[e] || _LANG[0]
			return a[t] || ''
		}
		function be(e) {
			var t = ve()
			if (!t) {
				return null
			}
			if (!t.hasOwnProperty(e)) {
				if (h[e] && t.hasOwnProperty(h[e])) {
					return t[h[e]]
				}
				return null
			}
			return t[e]
		}
		function ve() {
			if (typeof whTooltips === 'object') {
				return whTooltips
			}
			if (typeof wowhead_tooltips === 'object') {
				return wowhead_tooltips
			}
			return null
		}
		function He(e) {
			if (typeof n[e] !== 'object') {
				WH.error('Wowhead tooltips could not find config for entity type.', e)
				return false
			}
			return n[e].mobile
		}
		function Te() {
			if (I) {
				return
			}
			I = true
			WH.aE(document, 'keydown', function (e) {
				switch (e.keyCode) {
					case 27:
						$WowheadPower.clearTouchTooltip()
						WH.Tooltip.hide()
						break
				}
			})
			if (WH.isTouch()) {
				Ee()
			} else {
				WH.aE(document, 'mouseover', Re)
			}
		}
		this.attachTouchTooltips = function (e) {
			if (!WH.isTouch()) {
				return
			}
			if (e && e.nodeType === 1) {
				Ee(e)
			}
		}
		function We(e) {
			if (document.readyState === 'loading') {
				document.addEventListener('DOMContentLoaded', e)
			} else {
				e()
			}
		}
		function ye(e) {
			if (!e.dataset || e.dataset.hasWhTouchEvent === 'true') {
				return
			}
			if (e.onclick == null) {
				e.onclick = xe
			} else {
				WH.aE(e, 'click', xe)
			}
			e.dataset.hasWhTouchEvent = 'true'
		}
		function Ee(e) {
			if (!WH.isTouch()) {
				return
			}
			We(function () {
				e = e || document.body
				var t = WH.gE(e, 'a')
				for (var a = 0, i = t.length; a < i; a++) {
					ye(t[a])
				}
			})
		}
		this.init = function () {
			if (be('iconSize') && typeof Icon === 'undefined') {
				setTimeout($WowheadPower.init, 10)
				return
			}
			if (s) {
				if (!WH.wowheadRemotePreload) {
					WH.ae(p, WH.ce('link', { type: 'text/css', href: WH.staticUrl + '/css/basic.css?16', rel: 'stylesheet' }))
					if (be('iconSize')) {
						WH.ae(p, WH.ce('link', { type: 'text/css', href: WH.staticUrl + '/css/global/icon.css', rel: 'stylesheet' }))
					}
				}
			}
			Te()
			We(function () {
				if (be('renameLinks') || be('colorLinks') || be('iconizeLinks') || be('iconSize')) {
					let e = Pe()
					for (let t = 0; t < e.length; t++) {
						Ae(e[t])
					}
					ue()
				} else if (document.querySelectorAll) {
					let e = document.querySelectorAll('a[href*="wowhead.com/talent-calc/embed/"]')
					for (let t = 0; t < e.length; t++) {
						Ae(e[t])
					}
					e = document.querySelectorAll('a[href*="wowhead.com/soulbind-calc/embed/"]')
					for (let t = 0; t < e.length; t++) {
						Ae(e[t])
					}
				}
			})
		}
		function Ie(e) {
			let t = WH.getCursorPos(e)
			W = t.x
			y = t.y
		}
		function Se(e, t) {
			if (e.classList) {
				for (let a = 0, i = t.length; a < i; a++) {
					e.classList.add(t[a])
				}
			} else {
				for (var a = 0; a < t.length; a++) {
					let i = (e.getAttribute && e.getAttribute('class')) || ''
					if ((' ' + i + ' ').indexOf(' ' + t[a] + ' ') < 0) {
						e.setAttribute('class', (i ? i + ' ' : '') + t[a])
					}
				}
			}
		}
		function Pe() {
			let e = []
			for (let t = 0; t < document.links.length; t++) {
				e.push(document.links[t])
			}
			return e
		}
		function Ae(e, t, n) {
			if (t && e.dataset && e.dataset.simpleTooltip) {
				if (!WH.isTouch() && !e.onmouseout) {
					if (e.dataset.tooltipMode !== 'attach') {
						e.onmousemove = Me
					}
					e.onmouseout = Ce
				}
				WH.Tooltip.show(
					e,
					e.dataset.simpleTooltip.length < 30 ? '<div class="no-wrap">' + e.dataset.simpleTooltip + '</div>' : e.dataset.simpleTooltip
				)
				return o
			}
			if (e.nodeName !== 'A' && e.nodeName !== 'AREA') {
				return a
			}
			var r = e.rel
			try {
				if (e.dataset && e.dataset.hasOwnProperty('wowhead')) {
					r = e.dataset.wowhead
				} else if (e.getAttribute && e.getAttribute('data-wowhead')) {
					r = e.getAttribute('data-wowhead')
				}
			} catch (e) {
				void 0
			}
			if (
				(!e.href.length && !r) ||
				(r && /^np\b/.test(r)) ||
				e.getAttribute('data-disable-wowhead-tooltip') === 'true' ||
				(WH.isTouch() && e.getAttribute('data-disable-wowhead-touch-tooltip') === 'true')
			) {
				return i
			}
			let l = /^https?:\/\/(?:[^/]+\.)?(classic|tbc|wotlk)\.(?:[^/]+\.)?wowhead\.com\/talent-calc\/embed\/[^#]+/
			let p = e.href.match(l)
			if (s && p) {
				let t = 513
				let a = 750
				if (p[1] === 'tbc') {
					t += 120
				} else if (p[1] === 'wotlk') {
					t += 240
				}
				let i = (t / a) * 100 + '%'
				e.parentNode.replaceChild(
					WH.ce(
						'div',
						{
							style: { margin: '10px auto', maxHeight: t + 'px', maxWidth: a + 'px' },
							className: 'wowhead-embed wowhead-embed-talent-calc',
						},
						WH.ce(
							'div',
							{ style: { height: 0, paddingTop: i, position: 'relative', width: '100%' } },
							WH.ce('iframe', {
								src: p[0],
								width: '100%',
								height: '100%',
								style: { border: 0, left: 0, position: 'absolute', top: 0, borderRadius: '6px' },
								sandbox: 'allow-scripts allow-top-navigation',
							})
						)
					),
					e
				)
				return o
			}
			let u = /^https?:\/\/(?:[^/]+\.)?wowhead\.com\/soulbind-calc\/embed\/.+/
			let h = e.href.match(u)
			if (s && h) {
				e.parentNode.replaceChild(
					WH.ce(
						'div',
						{
							style: { maxWidth: '734px', maxHeight: '1060px', margin: '10px auto' },
							className: 'wowhead-embed wowhead-embed-soulbind-calc',
						},
						WH.ce(
							'div',
							{ style: { position: 'relative', width: '100%', height: 0, paddingTop: '144.5%' } },
							WH.ce('iframe', {
								src: h[0],
								width: '100%',
								height: '100%',
								style: { border: 0, left: 0, position: 'absolute', top: 0, borderRadius: '6px' },
								sandbox: 'allow-scripts allow-top-navigation',
							})
						)
					),
					e
				)
				return o
			}
			let g = {}
			H = g
			var w = function (e, t, a) {
				switch (t) {
					case 'buff':
					case 'map':
					case 'noimage':
					case 'nomajor':
					case 'notip':
					case 'premium':
					case 'pvp':
					case 'sock':
					case 'text':
					case 'twcata':
					case 'twmists':
					case 'twtbc':
					case 'twwotlk':
						g[t] = true
						break
					case 'artk':
					case 'c':
					case 'class':
					case 'dd':
					case 'ddsize':
					case 'diff':
					case 'diffnew':
					case 'ench':
					case 'gem1lvl':
					case 'gem2lvl':
					case 'gem3lvl':
					case 'ilvl':
					case 'level':
					case 'lvl':
					case 'nlc':
					case 'pwr':
					case 'q':
					case 'rand':
					case 'rank':
					case 'spec':
					case 'tink':
					case 'upgd':
						g[t] = parseInt(a)
						break
					case 'abil':
					case 'azerite-essence-powers':
					case 'azerite-powers':
					case 'bonus':
					case 'crafted-stats':
					case 'cri':
					case 'forg':
					case 'gem1bonus':
					case 'gem2bonus':
					case 'gem3bonus':
					case 'gems':
					case 'know':
					case 'pcs':
					case 'rewards':
						g[t] = a.split(':')
						break
					case 'build':
					case 'domain':
					case 'who':
						g[t] = a
						break
					case 'image':
						if (a === 'premium') {
							g[a] = true
						} else {
							g[t] = a ? '_' + a : ''
						}
						break
					case 'transmog':
						if (a === 'hidden') {
							g[t] = a
						} else {
							g[t] = parseInt(a)
						}
						break
					case 'when':
						g[t] = new Date(parseInt(a))
						break
				}
			}
			let b
			let v
			let W
			let y
			if (d.applyto & 1) {
				if (e.href.indexOf('http://') === 0 || e.href.indexOf('https://') === 0) {
					let t = e.href.match(
						/^https?:\/\/(.+?)?\.?(?:wowhead)\.com(?:\:\d+)?\/\??(item|quest|spell|zone|achievement|event|itemset|item-set|transmog-set|outfit|guide|statistic|currency|npc|object|pet-ability|petability|building|follower|champion|bfa-champion|garrisonability|mission-ability|mission|ship|threat|resource|order-advancement|affix|azerite-essence|azerite-essence-power|storyline|adventure-combatant-ability|mount|recipe|battle-pet)[=/](?:[^/?&#]+-)?(-?\d+(?:\.\d+)?)/
					)
					if (!t) {
						t = e.href.match(/^https?:\/\/(.+?)?\.?(?:wowhead)\.com(?:\:\d+)?\/(guide)s\/([^\?&#]+)/)
					}
					if (t) {
						b = t[1]
						v = t[2]
						W = t[3]
						y = e.href
					}
					A = 0
				} else {
					let t = e.href.match(
						/\/\??(item|quest|spell|zone|achievement|event|itemset|item-set|transmog-set|outfit|statistic|currency|npc|object|pet-ability|petability|building|follower|champion|bfa-champion|garrisonability|mission-ability|mission|ship|threat|resource|order-advancement|affix|azerite-essence|azerite-essence-power|storyline|adventure-combatant-ability|guide|mount|recipe|battle-pet)[=/](?:[^/?&#]+-)?(-?\d+(?:\.\d+)?)/
					)
					if (!t) {
						t = e.href.match(/\/(guide)s\/([^\?&#]+)/)
					}
					if (t) {
						v = t[1]
						W = t[2]
						y = e.href
					}
					A = 1
				}
			}
			if (!v && r && d.applyto & 2) {
				let e = r.match(
					/(item|quest|spell|zone|achievement|event|itemset|item-set|transmog-set|outfit|statistic|currency|npc|object|pet-ability|petability|building|follower|champion|bfa-champion|garrisonability|mission-ability|mission|ship|threat|resource|order-advancement|affix|azerite-essence|azerite-essence-power|storyline|adventure-combatant-ability|guide|mount|recipe|battle-pet).?(-?\d+(?:\.\d+)?)/
				)
				if (e) {
					v = e[1]
					W = e[2]
				}
				A = 1
			}
			if (!v) {
				return i
			}
			let I = WH.getTypeIdFromTypeString(v)
			if (WH.isTouch() && !n && !He(I)) {
				return i
			}
			e.href.replace(/([a-zA-Z0-9-]+)=?([^&?#]*)/g, w)
			if (r) {
				r.replace(/([a-zA-Z0-9-]+)=?([^&?#]*)/g, w)
			}
			if (g.gems && g.gems.length > 0) {
				var S
				for (S = Math.min(3, g.gems.length - 1); S >= 0; --S) {
					if (parseInt(g.gems[S])) {
						break
					}
				}
				++S
				if (S == 0) {
					delete g.gems
				} else if (S < g.gems.length) {
					g.gems = g.gems.slice(0, S)
				}
			}
			var P = ['bonus', 'gem1bonus', 'gem2bonus', 'gem3bonus']
			for (var x = 0, M; (M = P[x]); x++) {
				if (g[M] && g[M].length > 0) {
					for (S = Math.min(16, g[M].length - 1); S >= 0; --S) {
						if (parseInt(g[M][S])) {
							break
						}
					}
					++S
					if (S == 0) {
						delete g[M]
					} else if (S < g[M].length) {
						g[M] = g[M].slice(0, S)
					}
				}
			}
			if (g['crafted-stats'] && g['crafted-stats'].length > 0) {
				let e = []
				for (let t = 0; t < Math.min(2, g['crafted-stats'].length); t++) {
					let a = parseInt(g['crafted-stats'][t])
					if (!isNaN(a)) {
						e.push(a)
					}
				}
				if (e.length == 0) {
					delete g['crafted-stats']
				} else {
					g['crafted-stats'] = e
				}
			}
			if (g.abil && g.abil.length > 0) {
				var S,
					N = [],
					O
				for (S = 0; S < Math.min(8, g.abil.length); S++) {
					if ((O = parseInt(g.abil[S]))) {
						N.push(O)
					}
				}
				if (N.length == 0) {
					delete g.abil
				} else {
					g.abil = N
				}
			}
			if (g.rewards && g.rewards.length > 0) {
				var S
				for (S = Math.min(3, g.rewards.length - 1); S >= 0; --S) {
					if (/^\d+.\d+$/.test(g.rewards[S])) {
						break
					}
				}
				++S
				if (S == 0) {
					delete g.rewards
				} else if (S < g.rewards.length) {
					g.rewards = g.rewards.slice(0, S)
				}
			}
			T = e
			{
				var D = null
				var F = ce.getId()
				var $ = WH.getDataEnv()
				if (g.domain) {
					D = g.domain.toLowerCase()
				} else if (b) {
					D = b.toLowerCase().replace(/(?:^|\.)(staging|dev)$/, '')
				}
				if (D !== null) {
					$ = WH.dataEnv.MAIN
					F = WH.getLocaleFromDomain(D)
					if (new RegExp('\\b' + WH.BETA_DOMAIN + '\\b').test(D)) {
						$ = WH.dataEnv.BETA
					} else if (/^sl|shadow$/.test(D)) {
						$ = WH.dataEnv.BETA
					} else {
						for (var q in WH.dataEnv) {
							if (!WH.dataEnv.hasOwnProperty(q) || !WH.dataEnvKey.hasOwnProperty(WH.dataEnv[q])) {
								continue
							}
							if (new RegExp('\\b(' + WH.dataEnvTerm[WH.dataEnv[q]] + '|' + WH.dataEnvKey[WH.dataEnv[q]] + ')\\b').test(D)) {
								$ = WH.dataEnv[q]
								break
							}
						}
					}
				}
				if ($ === WH.dataEnv.PTR && !WH.isPtrActive()) {
					$ = WH.dataEnv.MAIN
				}
				if ($ === WH.dataEnv.BETA && !WH.isBetaActive()) {
					$ = WH.dataEnv.MAIN
				}
				if ([WH.dataEnv.BETA, WH.dataEnv.PTR].indexOf($) >= 0) {
					F = 0
				}
			}
			if (e.href.indexOf('#') !== -1 && document.location.href.indexOf(v + '=' + W) !== -1) {
				return i
			}
			E = f['float']
			if (WH.isTouch() && document.documentElement.offsetWidth < m) {
				E = f.screen
			} else if (
				(((e.parentNode.getAttribute && e.parentNode.getAttribute('class')) || '').indexOf('icon') === 0 &&
					e.parentNode.nodeName === 'DIV') ||
				e.dataset.whattach === 'icon' ||
				e.dataset.tooltipMode === 'icon'
			) {
				E = f.attachToIcon
			} else {
				if (WH.isTouch() || e.dataset.whattach === 'true' || e.dataset.tooltipMode === 'attach') {
					E = f.attach
				} else if (!s) {
					var z = e.parentNode
					var B = 0
					while (z) {
						if (((z.getAttribute && z.getAttribute('class')) || '').indexOf('menu-inner') === 0) {
							E = f.attachWithoutScreenshot
							break
						}
						B++
						if (B > 9) {
							break
						}
						z = z.parentNode
					}
				}
			}
			if (!WH.isTouch() && !e.onmouseout) {
				if (E === f['float']) {
					e.onmousemove = Me
				}
				e.onmouseout = Ce
			}
			if (E === f['float'] && e.dataset.whtticon === 'false') {
				E = f.floatWithoutIcon
			}
			if (!s && !e.whContextMenuAttached) {
				e.whContextMenuAttached = true
				WH.aE(e, 'contextmenu', $e.bind(e, $, F, I, v, W, g, y))
			}
			if (t) {
				c = true
				Ie(t)
				WH.Tooltip.showingTooltip = true
				if (typeof e.overrideTooltip == 'object') {
					var j = e.overrideTooltip.html
					var U = e.overrideTooltip.html2
					if (typeof e.overrideTooltip.htmlGenerator == 'function') {
						j = e.overrideTooltip.htmlGenerator(e.overrideTooltip)
					}
					if (typeof e.overrideTooltip.html2Generator == 'function') {
						U = e.overrideTooltip.html2Generator(e.overrideTooltip)
					}
					if (e.overrideTooltip.spanClass) {
						j = '<span class="' + e.overrideTooltip.spanClass + '">' + j + '</span>'
						if (U) {
							U = '<span class="' + e.overrideTooltip.spanClass + '">' + U + '</span>'
						}
					}
					ze(
						F,
						j,
						e.overrideTooltip.icon,
						e.overrideTooltip.map,
						e.overrideTooltip.spellData,
						U,
						e.overrideTooltip.image,
						e.overrideTooltip.imageClass
					)
				} else {
					Fe(I, W, $, F, g)
				}
			}
			if (t || !ve()) {
				return o
			}
			var G = $WowheadPower.getEntity(I, Ye(I, W, g), $, F)
			var Y = []
			if ((be('renameLinks') && e.getAttribute('data-wh-rename-link') !== 'false') || e.getAttribute('data-wh-rename-link') === 'true') {
				Y.push(function () {
					delete e.dataset.whIconAdded
					e.innerHTML = '<span>' + G.data.name + '</span>'
				})
			}
			var V = e.getAttribute('data-wh-icon-size')
			if ((V || be('iconizeLinks')) && ICONIZE_TYPES.indexOf(I) !== -1) {
				if (!V) {
					V = be('iconSize')
				}
				Y.push(function () {
					if (G.data.icon && e.dataset.whIconAdded !== 'true') {
						ke(e, G.data, V)
					}
				})
			}
			if (be('colorLinks') && I === L) {
				Y.push(function () {
					Se(e, ['q' + G.data.quality])
				})
			}
			if (Y.length) {
				if (G.status === k || G.status === R) {
					G.callbacks = G.callbacks.concat(Y)
					if (G.status === k) {
						qe(I, W, $, F, true, g)
					}
				} else if (G.status === C || G.status === _) {
					while (Y.length) {
						Y.shift()()
					}
				}
			}
			return o
		}
		function ke(e, t, a) {
			if (!a || typeof WH.Icon === 'undefined' || !WH.Icon.isValidSize(a)) {
				a = 'tiny'
			}
			var i = t.icon.toLocaleLowerCase()
			if (a === 'tiny') {
				Se(e, ['icontinyl'])
				if (e.style.setProperty) {
					e.style.setProperty('padding-left', '18px', 'important')
				} else {
					e.style.paddingLeft = '18px'
				}
				e.style.verticalAlign = 'center'
				e.style.background = 'url(https://wow.zamimg.com/images/wow/icons/tiny/' + i + '.gif) left center no-repeat'
			} else {
				if (e.getAttribute('data-wh-icon-added') === 'true') {
					return
				}
				WH.aef(e, WH.Icon.create(i, a, null, { span: true }))
			}
			e.setAttribute('data-wh-icon-added', 'true')
		}
		function Re(e) {
			let t = e.target
			let i = 0
			while (t && i < 5 && Ae(t, e) === a) {
				t = t.parentNode
				i++
			}
		}
		function xe(e) {
			let t = this
			if (t.hasWHTouchTooltip === true) {
				return
			}
			let i = 0
			let n
			while (t && i < 5 && (n = Ae(t, e)) === a) {
				t = t.parentNode
				i++
			}
			if (n === o) {
				if (S !== null) {
					S.removeAttribute('data-showing-touch-tooltip')
					S.hasWHTouchTooltip = false
				}
				S = t
				S.hasWHTouchTooltip = true
				if (e.stopPropagation) {
					e.stopPropagation()
				}
				if (e.preventDefault) {
					e.preventDefault()
				}
				return false
			}
		}
		function Me(e) {
			Ie(e)
			WH.Tooltip.move(W, y, 0, 0, CURSOR_HSPACE, CURSOR_VSPACE)
		}
		function Ce() {
			g = null
			T = null
			WH.Tooltip.hide()
		}
		function _e(e) {
			if (!WH.isDev()) {
				return 'https://' + e + '.wowhead.com'
			}
			var t = document.location.hostname.split('.')
			t = t[t.length - 3]
			if (e === 'www') {
				e = t
			} else {
				e = e + '.' + t
			}
			var a = 'https://' + e + '.wowhead.com'
			if (document.location.port !== '') {
				a += (document.location.port.indexOf(':') < 0 ? ':' : '') + document.location.port
			}
			if (document.location.protocol !== 'https:') {
				a = a.replace(/^https:/, 'http:')
			}
			return a
		}
		function Ne(e) {
			var t = 'tooltip'
			if (H && H.buff) t = 'buff'
			if (H && H.text) t = 'text'
			if (H && H.premium) t = 'tooltip_premium'
			return t + (e || '')
		}
		function Oe() {
			return H && H.text ? 'text_icon' : 'icon'
		}
		function Le() {
			return (H && H.buff ? 'buff' : '') + 'spells'
		}
		function De(e) {
			if (typeof e === 'undefined') {
				return 'image_NONE'
			}
			return 'image' + e
		}
		function Fe(e, t, a, i, o) {
			if (!o) {
				o = {}
			}
			var n = Ye(e, t, o)
			g = e
			w = n
			b = a
			v = i
			H = o
			re.isLoaded(e, a)
			var s = $WowheadPower.getEntity(e, n, a, i)
			if (s.status === C || s.status === M) {
				Be()
			} else if (s.status === R || s.status === _) {
				if (WH.inArray(STEALTH_TYPES, e) == -1) {
					ze(i, we(i, 'loading'))
				}
			} else {
				qe(e, t, a, i, WH.inArray(STEALTH_TYPES, e) != -1, o)
			}
		}
		function $e(e, a, i, o, n, s, r, l) {
			if (!l.ctrlKey || l.button !== 2) {
				return
			}
			l.preventDefault()
			l.stopPropagation()
			let c = []
			let d = $WowheadPower.getEntity(i, Ye(i, n, s), e, a)
			if (d.data.name) {
				c.push(
					Menu.createItem({ label: WH.term('copy_format', WH.TERMS.name), url: WH.copyToClipboard.bind(undefined, d.data.name, true) })
				)
			}
			c.push(Menu.createItem({ label: WH.term('copy_format', WH.TERMS.id), url: WH.copyToClipboard.bind(undefined, n, true) }))
			let p = r
			if (!p && WH.Types.existsInDataEnv(i)) {
				p = WH.Url.generate(WH.Entity.getPath(i, n), { dataEnv: e, locale: a })
			}
			if (p) {
				c.push(Menu.createItem({ label: WH.term('copy_format', WH.TERMS.url), url: WH.copyToClipboard.bind(undefined, r, true) }))
			}
			let u = t[o] || o
			if (WH.markup.tags[u]) {
				c.push(
					Menu.createItem({
						label: WH.term('copy_format', WH.TERMS.wowheadMarkupTag),
						url: WH.copyToClipboard.bind(undefined, '[' + u + '=' + n + ']', true),
					})
				)
			}
			Menu.add(this, c, { noEvents: true, showAtElement: true, showImmediately: true }, l)
		}
		function qe(e, t, a, i, o, n) {
			var s = Ye(e, t, n)
			var r = $WowheadPower.getEntity(e, s, a, i)
			if (r.status !== k && r.status !== x) {
				return
			}
			r.status = R
			var l = me(e)
			if (l && (parseInt(t, 10) < l.min || parseInt(t, 10) > l.max)) {
				$WowheadPower.register(e, t, a, i, { error: 'ID is out of range' })
				return
			}
			if (!o) {
				r.timer = setTimeout(Ue.bind(this, e, s, a, i), 333)
			}
			var c = []
			for (var d in n) {
				switch (d) {
					case 'spec':
						if (e === $ || e === ie) {
							break
						}
					case 'abil':
					case 'artk':
					case 'azerite-essence-powers':
					case 'azerite-powers':
					case 'bonus':
					case 'build':
					case 'class':
					case 'crafted-stats':
					case 'dd':
					case 'ddsize':
					case 'diff':
					case 'diffnew':
					case 'ench':
					case 'gem1bonus':
					case 'gem1lvl':
					case 'gem2bonus':
					case 'gem2lvl':
					case 'gem3bonus':
					case 'gem3lvl':
					case 'gems':
					case 'ilvl':
					case 'level':
					case 'lvl':
					case 'nlc':
					case 'nomajor':
					case 'pvp':
					case 'q':
					case 'rand':
					case 'rank':
					case 'rewards':
					case 'sock':
					case 'tink':
					case 'transmog':
					case 'twcata':
					case 'twmists':
					case 'twtbc':
					case 'twwotlk':
					case 'upgd':
						if (typeof n[d] === 'object') {
							c.push(d + '=' + n[d].join(':'))
						} else if (n[d] === true) {
							c.push(d)
						} else {
							c.push(d + '=' + n[d])
						}
						break
				}
			}
			var p = WH.getDomainFromLocale(i)
			switch (a) {
				case WH.dataEnv.MAIN:
					break
				case WH.dataEnv.BETA:
					if (WH.BETA_DOMAIN) {
						p += (p ? '.' : '') + WH.BETA_DOMAIN
						break
					}
				default:
					p += (p ? '.' : '') + WH.dataEnvKey[a]
			}
			if (!p) {
				p = 'www'
			}
			var u = _e(p)
			if (a === WH.dataEnv.PTR || a === WH.dataEnv.BETA) {
				if (WH.getDataBuild(a) !== '0') {
					c.push(WH.getDataBuild(a))
				}
			}
			if (!re.isLoaded(e, a)) {
				re.fetch(e, a)
			}
			if (e == L && n && n.hasOwnProperty('lvl') && !re.isLoaded($, a)) {
				re.fetch($, a)
			}
			var f = c.length ? '?' + c.join('&') : ''
			var m = u + '/tooltip/' + ge(e) + '/' + t + f
			WH.xhrJsonRequest(
				m,
				function (e, t, a, i, o, n) {
					if (!n) {
						WH.error('Wowhead tooltips failed to load entity data.', he(e) + ' #' + t)
						return
					} else if (n.error) {
						WH.error('Wowhead tooltip request responded with an error.', n.error, he(e) + ' #' + t)
					}
					$WowheadPower.register(e, a, i, o, n)
				}.bind(null, e, t, s, a, i)
			)
		}
		function ze(e, t, a, i, o, n, d, p) {
			ue()
			if (!c) return
			if (T) {
				if (T._fixTooltip) {
					t = T._fixTooltip(t, g, w, T)
				}
				if (T._fixTooltip2) {
					n = T._fixTooltip2(n, g, w, T)
				}
			}
			var u = false
			if (!t) {
				t = we(e, 'notFound').replace('%s', he(g))
				a = 'inv_misc_questionmark'
				u = true
			} else if (H != null) {
				if (WH.reforgeStats && H.forg && WH.reforgeStats[H.forg]) {
					var m = WH.reforgeStats[H.forg]
					var h = [m.i1]
					for (var I in WH.individualToGlobalStat) {
						if (WH.individualToGlobalStat[I] == h[0]) {
							h.push(I)
						}
					}
					var S
					if (
						(S = t.match(new RegExp('(\x3c!--(stat|rtg)(' + h.join('|') + ')--\x3e)[+-]?([0-9]+)'))) &&
						!t.match(new RegExp('\x3c!--(stat|rtg)' + m.i2 + '--\x3e[+-]?[0-9]+'))
					) {
						var P = Math.floor(S[4] * m.v),
							k = de.traits[m.s2][0]
						if (m.i2 == 6) {
							t = t.replace('\x3c!--rs--\x3e', '<br />+' + P + ' ' + k)
						} else {
							t = t.replace('\x3c!--rr--\x3e', WH.sprintfGlobal(r.genericequip_tip, k.toLowerCase(), m.i2, P))
						}
						t = t.replace(S[0], S[1] + (S[4] - P))
						t = t.replace(
							'\x3c!--rf--\x3e',
							'<span class="q2">' + WH.sprintfGlobal(r.reforged_format, P, de.traits[m.s1][2], de.traits[m.s2][2]) + '</span><br />'
						)
					}
				}
				if (H.pcs && H.pcs.length) {
					var R = 0
					for (var I = 0, x = H.pcs.length; I < x; ++I) {
						var S
						var M = new RegExp('<span>\x3c!--si([0-9]+:)*' + H.pcs[I] + '(:[0-9]+)*--\x3e' + '<a href="/??item=(\\d+)">(.+?)</a></span>')
						if ((S = t.match(M))) {
							var C = !isNaN(parseInt(v)) ? le[v] : 'enus'
							var _ = WH.isSet('g_items') && g_items[H.pcs[I]] ? g_items[H.pcs[I]]['name_' + C] : S[4]
							var N = '<a href="/item=' + S[3] + '">' + _ + '</a>'
							var O = '<span class="q13">\x3c!--si' + H.pcs[I] + '--\x3e' + N + '</span>'
							t = t.replace(S[0], O)
							++R
						}
					}
					if (R > 0) {
						t = t.replace('(0/', '(' + R + '/')
						t = t.replace(new RegExp('<span>\\(([0-' + R + '])\\)', 'g'), '<span class="q2">($1)')
					}
				}
				if (H.know && H.know.length) {
					t = WH.setTooltipSpells(t, H.know, o)
				}
				if (H.lvl && !H.ilvl) {
					t = WH.setTooltipLevel(t, H.lvl ? H.lvl : WH.maxLevel, H.buff)
				}
				if (H.who && H.when) {
					t = t.replace(
						'<table><tr><td><br />',
						'<table><tr><td><br /><span class="q2">' +
							WH.sprintf(we(e, 'achievementComplete'), H.who, H.when.getMonth() + 1, H.when.getDate(), H.when.getFullYear()) +
							'</span><br /><br />'
					)
					t = t.replace(/class="q0"/g, 'class="r3"')
				}
				if (H.notip && d) {
					t = ''
					a = null
				}
				if (g == TYPE_PETABILITY && H.pwr) {
					t = t.replace(/<!--sca-->(\d+)<!--sca-->/g, function (e, t) {
						return Math.floor(parseInt(t) * (1 + 0.05 * H.pwr))
					})
				}
				if (g == z && H.cri) {
					for (var I = 0; I < H.cri.length; I++) {
						t = t.replace(new RegExp('\x3c!--cr' + parseInt(H.cri[I]) + ':[^<]+', 'g'), '<span class="q2">$&</span>')
					}
				}
			}
			if (
				!l &&
				WH.isSet('g_user') &&
				((WH.isRetailTree(b) && 'lists' in g_user && WH.isSet('g_completion')) ||
					(!WH.isRetailTree(b) && g_user.characterProfiles && g_user.characterProfiles.length))
			) {
				var L = ''
				var $ = WH.isRetailTree(b) && g in g_types && g_types[g] in g_completion ? g_completion[g_types[g]] : false
				var q = $WowheadPower.getEntity(g, w, b, v)
				if ($ && g == F) {
					if (
						u ||
						t === we(e, 'loading') ||
						(q.hasOwnProperty('worldquesttype') && q.worldquesttype != 0) ||
						(q.hasOwnProperty('daily') && q.daily != 0) ||
						(q.hasOwnProperty('weekly') && q.weekly != 0)
					) {
						$ = false
					}
				}
				var B = !($ && g in g_completion_categories && WH.inArray(g_completion_categories[g], q.completion_category) === -1)
				var j = /^-?\d+(?:\.\d+)?/.exec(w)
				j = j && j.length ? j[0] : w
				if ($) {
					for (var U in g_user.lists) {
						var G = g_user.lists[U]
						if (!(G.id in $)) {
							continue
						}
						var Y = WH.inArray($[G.id], j) != -1
						if (!Y && !B) {
							continue
						}
						L += '<br><span class="progress-icon ' + (Y ? 'progress-8' : 'progress-0') + '"></span> '
						L += G.character + ' - ' + G.realm + ' ' + G.region
					}
				}
				if (!WH.isRetailTree(b) && g === F) {
					for (var V, I = 0; (V = g_user.characterProfiles[I]); I++) {
						var Y = WH.inArray(V.quests, j) != -1
						if (!Y && !B) {
							continue
						}
						L += '<br><span class="progress-icon ' + (Y ? 'progress-8' : 'progress-0')
						L += '"></span> ' + V.name + ' - ' + V.realm
					}
				}
				if (WH.isRetailTree(b) && g === TYPE_TRANSMOGSET && g_completion.wardrobe) {
					;(g_user.lists || []).forEach(function (e) {
						let t = WH.Wow.TransmogSet.getCompletionAmount(q.data.completionData || {}, e.id)
						if (t > 0) {
							L += '<br><span class="progress-icon progress-' + Math.max(1, Math.floor(t * 8)) + '"></span> '
							L += e.character + ' - ' + e.realm + ' ' + e.region
						}
					})
				}
				if (L != '') {
					t += '<br><span class="q">' + WH.TERMS.completion + ':</span>' + L
				}
			}
			if (!s && [TYPE_TRANSMOGSET, D].includes(g) && typeof WH.getPreferredTransmogRace !== 'undefined') {
				let e = WH.getPreferredTransmogRace()
				let a = e.race
				let i = e.gender - 1
				let o = WH.ce('div', { innerHTML: t })
				let n = WH.qs('picture', o)
				if (n) {
					if (n.dataset.requiredRace && !T.dataset.tooltipIgnoreRequiredRace) {
						a = n.dataset.requiredRace
					}
					let e = g === D ? WH.Wow.ItemSet : WH.Wow.TransmogSet
					n.parentNode.replaceChild(
						WH.ce('img', { src: e.getThumbUrl(w, a, i, b), width: 260, height: 440, style: { display: 'block', margin: '0 auto' } }),
						n
					)
					t = o.innerHTML
				}
			}
			if (!s && t && (H.diff || H.diffnew || H.noimage)) {
				d = ''
				p = ''
			}
			t = t.replace('http://', 'https://')
			if (H.map && i && i.getMap) {
				n = i.getMap()
			}
			var Z = function (e, t) {
				if (g !== e.type || w !== e.id || b !== e.dataEnv || v !== e.locale || H !== e.params) {
					return
				}
				switch (E) {
					case f.screen:
						WH.Tooltip.showInScreen(T, t, null, n, d, p, a)
						break
					case f.attachToIcon:
					case f.attach:
						var i = WH.isElementFixedPosition(T)
						WH.Tooltip.setIcon(E === f.attachToIcon ? null : a, i)
						WH.Tooltip.show(T, t, null, null, null, n, d, p, i)
						break
					case f.attachWithoutScreenshot:
						var i = WH.isElementFixedPosition(T)
						WH.Tooltip.setIcon(a, i)
						WH.Tooltip.show(T, t, null, null, null, n, null, null, i)
						break
					case f.floatWithoutIcon:
						var i = WH.isElementFixedPosition(T)
						WH.Tooltip.setIcon(null, i)
						WH.Tooltip.showAtXY(t, W, y, CURSOR_HSPACE, CURSOR_VSPACE, n, d, p, i)
						break
					case f['float']:
					default:
						var i = WH.isElementFixedPosition(T)
						WH.Tooltip.setIcon(a, i)
						WH.Tooltip.showAtXY(t, W, y, CURSOR_HSPACE, CURSOR_VSPACE, n, d, p, i)
				}
				if (s && WH.Tooltip.logo) {
					WH.Tooltip.logo.style.display = A ? 'block' : 'none'
				}
			}
			var K = { type: g, id: w, dataEnv: b, locale: v, params: H }
			je(t, o, Z.bind(this, K), K)
		}
		function Be() {
			let e = $WowheadPower.getEntity(g, w, b, v)
			let t = e.data[De(H['image'])]
			let a = e.data['image' + H['image'] + '_class']
			let i = Ve(g, w, b)
			if (i) {
				t = i[0]
				a = i[1]
			}
			ze(v, e.data[Ne()], e.data[Oe()], e.data.map, e.data[Le()], e.data[Ne(2)], t, a)
		}
		function je(e, t, a, i) {
			switch (i.type) {
				case ie:
					var o = $WowheadPower.getEntity(i.type, i.id, i.dataEnv, i.locale)
					if (i.params.spec && !(i.params.know && i.params.know.length)) {
						re.getSpellsBySpec(i.params.spec, function (t) {
							e = e.replace(/<!--embed:([^>]+)-->/g, function (e, a) {
								return WH.setTooltipSpells(o.data.embeds[a].tooltip, t, o.data.embeds[a].spells)
							})
							a(e)
						})
						break
					} else {
						e = e.replace(/<!--embed:([^>]+)-->/g, function (e, t) {
							return WH.setTooltipSpells(o.data.embeds[t].tooltip, i.params.know, o.data.embeds[t].spells)
						})
					}
					window.requestAnimationFrame(a.bind(null, e))
					break
				case $:
					if (i.params.spec && !(i.params.know && i.params.know.length)) {
						re.getSpellsBySpec(i.params.spec, function (i) {
							e = WH.setTooltipSpells(e, i, t)
							a(e)
						})
						break
					}
					window.requestAnimationFrame(a.bind(null, e))
					break
				default:
					window.requestAnimationFrame(a.bind(null, e))
			}
		}
		function Ue(e, t, a, i) {
			if (g == e && w == t && b == a && v == i) {
				ze(i, we(i, 'loading'))
				var o = $WowheadPower.getEntity(e, t, a, i)
				o.timer = setTimeout(Ge.bind(this, e, t, a, i), 3850)
			}
		}
		function Ge(e, t, a, i) {
			var o = $WowheadPower.getEntity(e, t, a, i)
			o.status = x
			if (g == e && w == t && b == a && v == i) {
				ze(i, we(i, 'noResponse'))
			}
		}
		function Ye(e, t, a) {
			if (a.build) {
				return t + 'build' + a.build
			}
			return (
				t +
				(a.rand ? 'r' + a.rand : '') +
				(a.ench ? 'e' + a.ench : '') +
				(a.gems ? 'g' + a.gems.join(',') : '') +
				(a.sock ? 's' : '') +
				(a.upgd ? 'u' + a.upgd : '') +
				(a.twtbc ? 'twtbc' : '') +
				(a.twwotlk ? 'twwotlk' : '') +
				(a.twcata ? 'twcata' : '') +
				(a.twmists ? 'twmists' : '') +
				(a.ilvl ? 'ilvl' + a.ilvl : '') +
				(a.lvl ? 'lvl' + a.lvl : '') +
				(a.gem1lvl ? 'g1lvl' + a.gem1lvl : '') +
				(a.gem2lvl ? 'g2lvl' + a.gem2lvl : '') +
				(a.gem3lvl ? 'g3lvl' + a.gem3lvl : '') +
				(a.artk ? 'ak' + a.artk : '') +
				(a.nlc ? 'nlc' + a.nlc : '') +
				(a.transmog ? 'transmog' + a.transmog : '') +
				(a.tink ? 'tink' + a.tink : '') +
				(a.pvp ? 'pvp' : '') +
				(a.bonus ? 'b' + a.bonus.join(',') : '') +
				(a.gem1bonus ? 'g1b' + a.gem1bonus.join(',') : '') +
				(a.gem2bonus ? 'g2b' + a.gem2bonus.join(',') : '') +
				(a.gem3bonus ? 'g3b' + a.gem3bonus.join(',') : '') +
				(a['crafted-stats'] ? 'craftedStats' + a['crafted-stats'].join(',') : '') +
				(a.q ? 'q' + a.q : '') +
				(a.level ? 'level' + a.level : '') +
				(a.abil ? 'abil' + a.abil.join(',') : '') +
				(a.dd ? 'dd' + a.dd : '') +
				(a.ddsize ? 'ddsize' + a.ddsize : '') +
				(a.diff == $ ? 'diff' + a.diff : '') +
				(a.rank ? 'rank' + a.rank : '') +
				(a['class'] ? 'class' + a['class'] : '') +
				(e !== $ && a.spec ? 'spec' + a.spec : '') +
				(a.rewards ? 'rewards' + a.rewards.join(':') : '') +
				(a['azerite-powers'] ? 'azPowers' + a['azerite-powers'] : '') +
				(a['azerite-essence-powers'] ? 'aePowers' + a['azerite-essence-powers'] : '') +
				(a.nomajor ? 'nomajor' : '')
			)
		}
		this.clearTouchTooltip = function (e) {
			if (S) {
				if (e !== true) {
					S.removeAttribute('data-showing-touch-tooltip')
				}
				S.hasWHTouchTooltip = false
			}
			S = null
			if (e !== true) {
				WH.qsa('[data-showing-touch-tooltip]').forEach(function (e) {
					delete e.dataset.showingTouchTooltip
				})
			}
			if (WH.Tooltip.screen) {
				WH.Tooltip.screenInnerWrapper.scrollTop = 0
				WH.Tooltip.screenInnerWrapper.scrollLeft = 0
				WH.Tooltip.screen.style.display = 'none'
				WH.Tooltip.mobileTooltipShown = false
			}
			let t = e === true ? WH.Tooltip.showingTooltip : false
			WH.Tooltip.hide()
			WH.Tooltip.showingTooltip = t
			$WowheadPower.setParent()
		}
		function Ve(t, a, i) {
			if (s) {
				return false
			}
			if (!WH.User.isPremium()) {
				return false
			}
			if (WH.Tooltip.hideScreenshots) {
				return false
			}
			let o = WH.Gatherer.get(t, a, i, true)
			if (o) {
				if (o.screenshot && o.screenshot.id) {
					return [WH.getScreenshotUrl(o.screenshot.id, 'small', { imageType: o.screenshot.imageType }), 'screenshot']
				} else if (!WH.wowheadRemote && t === e.ITEM && o.jsonequip && o.jsonequip.displayid) {
					let e = o.jsonequip.displayid
					let t = o.reqrace || o.jsonequip.races
					let a = WH.Wow.Models.getRaceIdFromMask(t)
					if (
						(o.classs && o.classs !== WH.Wow.Item.CLASS_ARMOR) ||
						(o.jsonequip.slotbak && !WH.Wow.Item.isArmorInvType(o.jsonequip.slotbak))
					) {
						a = undefined
					}
					let i = Listview.funcBox.getCurrentItemBonuses.call(this, o)
					let n = g_items.getAppearance(o.id, i)
					if (n && n[0]) {
						e = n[0]
					}
					if (e) {
						return [WH.Wow.Item.getThumbUrl(e, a), 'screenshot']
					}
				}
			}
			return false
		}
		this.register = function (e, t, a, i, o) {
			var n = this.getEntity(e, t, a, i)
			if (o.hasOwnProperty('additionalIds')) {
				var s = o.additionalIds
				delete o.additionalIds
				if (s.length) {
					for (var r = 0; r < s.length; r++) {
						this.register(e, s[r], a, i, o)
					}
				}
			}
			{
				if (!re.isLoaded(e, a)) {
					n.status = _
					re.registerCallback(e, a, this.register.bind(this, e, t, a, i, o))
					return
				}
				if (typeof t === 'string' && (t.indexOf('lvl') === 0 || t.match(/[^i]lvl/)) && !re.isLoaded($, a)) {
					n.status = _
					re.registerCallback($, a, this.register.bind(this, e, t, a, i, o))
					return
				}
			}
			if (n.timer) {
				clearTimeout(n.timer)
				delete n.timer
			}
			if (!WH.wowheadRemote && o.map) {
				if (n.data.map == null) {
					n.data.map = new Mapper({ parent: WH.ce('div'), zoom: 3, zoomable: false, buttons: false })
				}
				n.data.map.update(o.map)
				delete o.map
			}
			for (var l in o) {
				if (!o.hasOwnProperty(l)) {
					continue
				}
				n.data[l] = o[l]
			}
			switch (n.status) {
				case R:
				case _:
				case k:
					if (n.data[Ne()]) {
						n.status = C
					} else {
						n.status = M
					}
			}
			if (WH.Tooltip.showingTooltip && g == e && w == t && b == a && v == i) {
				Be()
			}
			while (n.callbacks.length) {
				n.callbacks.shift()()
			}
		}
		this.request = function (e, t, a, i, o) {
			if (!o) {
				o = {}
			}
			if (i === undefined) {
				i = ce.getId()
			}
			if (!a) {
				a = WH.getDataEnv()
			}
			var n = Ye(e, t, o)
			this.getEntity(e, n, a, i)
			qe(e, t, a, i, true, o)
		}
		this.triggerTooltip = function (e, t) {
			Ae(e, t || { target: e }, true)
		}
		this.refreshLinks = function (e) {
			if (e === true || be('renameLinks') || be('colorLinks') || be('iconizeLinks')) {
				var t = WH.isTouch()
				let e = Pe()
				for (let o, n = 0; (o = e[n]); n++) {
					var a = o.parentNode
					var i = false
					while (a != null) {
						let e = (a.getAttribute && a.getAttribute('class')) || ''
						if ((' ' + e + ' ').replace(/[\n\t]/g, ' ').indexOf(' wowhead-tooltip ') > -1) {
							i = true
							break
						}
						a = a.parentNode
					}
					if (!i) {
						Ae(o)
						if (t) {
							ye(o)
						}
					}
				}
			}
			this.hideTooltip()
		}
		this.setParent = function (e) {
			WH.Tooltip.reset()
			WH.Tooltip.prepare(e, WH.isElementFixedPosition(e))
		}
		this.replaceWithTooltip = function (e, t, a, i, o, n, s) {
			if (!n) {
				n = {}
			}
			if (o === undefined) {
				o = ce.getId()
			}
			if (!i) {
				i = WH.getDataEnv()
			}
			if (typeof e == 'string') {
				e = document.getElementById(e)
			}
			if (!e) {
				return false
			}
			var r = Ye(t, a, n)
			var l = this.getEntity(t, r, i, o)
			switch (l.status) {
				case C:
					if (!e.parentNode) {
						return true
					}
					while (e.hasChildNodes()) {
						e.removeChild(e.firstChild)
					}
					var c = ['wowhead-tooltip-inline']
					if (l.data.icon) {
						c.push('wowhead-tooltip-inline-icon')
					}
					Se(e, c)
					var d = l.data[Ne()]
					var p = function (t) {
						if (typeof s === 'function') {
							t = s(t)
						}
						WH.Tooltip.append(e, t, true, l.data.icon)
					}
					je(d, l.data[Le()], p, { type: t, id: a, dataEnv: i, locale: o, params: n })
					return true
				case R:
				case k:
					l.callbacks.push(this.replaceWithTooltip.bind(this, e, t, a, i, o, n, s))
					this.request(t, a, i, o, n)
					return true
			}
			return false
		}
		if (s) {
			this.set = function (e) {
				WH.cO(d, e)
			}
			this.showTooltip = function (e, t, a) {
				Ie(e)
				ze(0, t, a)
			}
			this.hideTooltip = function () {
				if (typeof WH === 'undefined' || typeof WH.Tooltip === 'undefined' || typeof WH.Tooltip.hide !== 'function') {
					return
				}
				WH.Tooltip.hide()
			}
			this.moveTooltip = function (e) {
				Me(e)
			}
		} else {
			this.disableCompletion = function () {
				l = true
			}
		}
		pe()
	})()
}
