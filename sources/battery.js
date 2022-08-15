// 20220814
"use strict"
const vscode = require("vscode")
const sysInfo = require("systeminformation")  // npm install systeminformation
const utils = require("./utils")

class Battery {
	constructor(context) {
		this.context = context
		this.#draw()
		this.#listenConfigChange()
	}
	#draw() {
		this.getCfg = utils.newCfgGetter("battery")
		if (!this.getCfg("active")) return
		// utils.debugLog ("Battery.draw")
		const { "Alignment": alignment, "Priority": priority } = this.getCfg("position")
		this.item = vscode.window.createStatusBarItem
			(vscode.StatusBarAlignment[alignment], priority)
		const { "Indicator Type": indType, "Icon Sequence": iconSeq_emptible, "Text Sequence": textSeq_emptible,
			"Low Battery Threshold": threshold } = this.getCfg("format")
		const iconSeq = iconSeq_emptible ? iconSeq_emptible : ",,,",
			textSeq = textSeq_emptible ? textSeq_emptible : ",,,"
		// const icons = iconSeq .split(",") .map(icon=>`$(${icon})`), texts = textSeq .split(",")
		const icons = iconSeq .split(",") .map(icon => (icon ? "$("+icon+") " : "")),
			texts = textSeq .split(",") .map(text => (text ? text+" " : ""))
		const inds = indType == "Icon" ? icons : texts
		const hoverTxts = ["Not Found", "Low Battery", "Normal", "Charging"]
		const dynamicPart = ()=> {
			sysInfo.battery().then((data) => {
				const status = !data.hasBattery ? 0 : data.acConnected ? 3 : data.percent < threshold ? 1 : 2
				const ind = inds[status], level = data.percent, hoverTxt = hoverTxts[status]
				// this.item.text = `${ind} ${level}%`
				this.item.text = ind + level + "%"
				this.item.tooltip = `Battery Status:  ${hoverTxt}`
			})
		}
		dynamicPart()
		const interval = this.getCfg("updateInterval")
		this.interval = setInterval (dynamicPart, interval)
		this.item.show()
	}
	dispose() {
		if (!this.getCfg("active")) return
		// utils.debugLog ("Battery.dispose")
		clearInterval (this.interval)
		this.item.dispose()
	}
	#listenConfigChange() {
		const disposable = vscode.workspace.onDidChangeConfiguration( (event)=>{
			if (! event.affectsConfiguration ("ClockAndBattery.battery")) return
			this.dispose()
			this.#draw()
		})
		this.context.subscriptions.push(disposable)
	}
}
exports.Battery = Battery
