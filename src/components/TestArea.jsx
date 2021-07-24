import React, { useState, useEffect } from 'react'

import { Form } from 'react-bootstrap'

export default function TestArea() {
	const [test, setTest] = useState('')

	useEffect(
		() =>
			setTimeout(() => {
				const testInput =
					'# other=,id=183896,bonus_id=4800,ilevel=233 # ADDED BY EXTENSION\n' +
					'# Tcheez - Marksmanship - 2021-07-21 00:47 - EU/Ragnaros \n' +
					'# SimC Addon 9.1.0-01 \n' +
					'# Requires SimulationCraft 910-01 or newer \n' +
					'hunter="Tcheez" \n' +
					'level=60 \n' +
					'race=troll \n' +
					'region=eu \n' +
					'server=ragnaros \n' +
					'role=attack \n' +
					'professions=alchemy=175/engineering=100 \n' +
					'talents=1332233 \n' +
					'spec=marksmanship \n' +
					'covenant=night_fae \n' +
					'soulbind=niya:1,322721/140:6:0/342270/175:6:0/320668/170:6:0/192:7:0/320660/188:7:0/352501 \n' +
					'# soulbind=dreamweaver:2, \n' +
					'# soulbind=korayn:6,325066/140:6:0/325067/175:6:0/325072/170:6:0/157:6:0/325069/199:7:0/352806 \n' +
					'# conduits_available=140:6/183:9/185:7/188:7/189:7/192:7/199:7/223:8/224:7/226:7/251:7/252:7/253:7/175:6/178:6/181:7/282:6/157:6/166:6/170:6/173:5/283:5 \n' +
					'renown=48 \n' +
					'head=,id=178816,bonus_id=7588/7359/6652/7575/1550/6646 \n' +
					'neck=,id=173147,gem_id=173127,bonus_id=7461/6649,drop_level=60,crafted_stats=49  \n' +
					'shoulder=,id=178821,bonus_id=7603/7359/6652/1550/6646 \n' +
					'back=,id=178755,enchant_id=6203,bonus_id=7617/7359/6652/1550/6646  \n' +
					'chest=,id=178794,enchant_id=6230,bonus_id=7359/6652/7590/1556/6646 \n' +
					'shirt=,id=2576 \n' +
					'wrist=,id=186302,enchant_id=6222,bonus_id=7188/6652/7575/1485/6646  \n' +
					'hands=,id=178841,bonus_id=7375/7359/6652/1540/6646 \n' +
					'waist=,id=186301,gem_id=187291,bonus_id=7188/41/1485/6646  \n' +
					'legs=,id=186344,bonus_id=7188/6652/1485/6646 \n' +
					'feet=,id=178830,enchant_id=6211,bonus_id=7214/6652/1501/5884/6646  \n' +
					'finger1=,id=179355,enchant_id=6164,bonus_id=7622/7359/41/7575/1566/6646 \n' +
					'finger2=,id=178926,enchant_id=6164,gem_id=173127,bonus_id=7013/7450/6647/6648/1546/6935  \n' +
					'trinket1=,id=181457,bonus_id=6652/1472/5891/6646  \n' +
					'trinket2=,id=178742,bonus_id=7603/7359/6652/1550/6646 \n' +
					'main_hand=,id=178735,enchant_id=6196,bonus_id=7645/7359/6652/1550/6646  \n' +
					'### Gear from Bags \n' +
					'# Helm of Insatiable Appetite (226) \n' +
					'# head=,id=183001,gem_id=173127,bonus_id=7187/6652/1498/6646/6935  \n' +
					'# Shoulderpads of the Serpentstalker (235) \n' +
					'# shoulder=,id=172327,bonus_id=7013/6647/6648/6758/1532 \n' +
					'# Mantle of Ephemeral Visages (226) \n' +
					'# shoulder=,id=178821,bonus_id=7375/7359/6652/1540/6646 '
				setTest(testInput)
			}, [1000]),
		[setTest]
	)

	return (
		<div className='test-area'>
			<Form.Control as='textarea' name='optimizeInput' rows={31} value={test} onChange={e => setTest(e.currentTarget.value)} />
		</div>
	)
}
