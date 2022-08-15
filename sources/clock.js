// 20220814
"use strict"
const vscode = require("vscode")
const dateFmt = require("dateformat")  // 新版本不能用，只能 npm install dateformat@4.6.3
const utils = require("./utils")

class Clock {
	constructor(context) {
		this.context = context
		this.#draw()
		this.#registerEditorCommand()
		this.#listenConfigChange()
	}
	#draw() {
		this.getCfg = utils.newCfgGetter("clock")
		if (!this.getCfg("active")) return
		// utils.debugLog ("Clock.draw")
		const { "Alignment": alignment, "Priority": priority } = this.getCfg("position")
		this.item = vscode.window.createStatusBarItem
			(vscode.StatusBarAlignment[alignment], priority)
		const { "Icon Sequence": iconSeq_emptible,
			"Display Format": displayFmt, "Insert Format": insertFmt } = this.getCfg("format")
		const iconSeq = iconSeq_emptible ? iconSeq_emptible : "0:00,,0:00,"
		// const [dayTime, dayIcon, nightTime, nightIcon] = iconSeq.split(",")
		const [, dayH_str, dayM_str, dayIcon, nightH_str, nightM_str, nightIcon] =
			/^(\d+):(\d+),(\S*),(\d+):(\d+),(\S*)$/.exec(iconSeq)
		const [dayH, dayM, nightH, nightM] =
			[dayH_str, dayM_str, nightH_str, nightM_str].map(str => parseInt(str))
		// function dynamicPart() {
		const dynamicPart = ()=> {
			const nowTime = new Date(), [nowH, nowM] = [nowTime.getHours(), nowTime.getMinutes()]
			const isUpcoming = (hour,minute) => (nowH<hour || nowH==hour && nowM<minute)
			// 此处默认dayTime比nightTime早。如果想让nightTime在第二天凌晨，则应通过在设置里把nightTime和nightIcon写在前来实现
			const inDay = isUpcoming (dayH,dayM) != isUpcoming (nightH,nightM)
			// utils.debugLog (isUpcoming (dayH,dayM), isUpcoming (nightH,nightM))
			// utils.debugLog (inDay)
			const icon = inDay ? dayIcon : nightIcon
			const displayTxt = dateFmt(displayFmt), insertTxt = dateFmt(insertFmt)
			// this.item.text = `$(${icon}) ${displayTxt}`
			this.item.text = (icon ? "$("+icon+") " : "") + displayTxt
			this.item.tooltip = `Insert:  ${insertTxt}`
			this.insertTxt = insertTxt
		}
		dynamicPart()
		const interval = this.getCfg("updateInterval")
		// https://blog.csdn.net/zhouyingxiong/article/details/120219525
		this.interval = setInterval (dynamicPart, interval)
		this.item.command = "clock-and-battery.insertDateTime"
		this.item.show()
	}
	dispose() {
		if (!this.getCfg("active")) return
		// utils.debugLog ("Clock.dispose")
		clearInterval (this.interval)
		this.item.dispose()
	}
	#listenConfigChange() {
		const disposable = vscode.workspace.onDidChangeConfiguration( (event)=>{
			if (! event.affectsConfiguration ("ClockAndBattery.clock")) return
			this.dispose()
			this.#draw()
		})
		this.context.subscriptions.push(disposable)
	}
	#registerEditorCommand() {
		const disposable = vscode.commands.registerTextEditorCommand(
			"clock-and-battery.insertDateTime",
			(textEditor, edit) => {
				textEditor.selections.forEach( selection => {
					edit.replace (selection, this.insertTxt)
				})
			})
		this.context.subscriptions.push(disposable)
	}
}
exports.Clock = Clock
