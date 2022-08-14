// 20220814
"use strict"
const vscode = require("vscode")
const utils = require("./utils")

class IconTest {
	constructor(context) {
		this.context = context
		this.#draw()
		this.#listenConfigChange()
	}
	#draw() {
		this.getCfg = utils.newCfgGetter("test")  // 获得并使用新的获取器
		if (!this.getCfg("active")) return
		// utils.debugLog ("IconTest.draw")
		const iconSeq = this.getCfg("iconSequence")
		const iconText = iconSeq .split(",") .map(icon=>`$(${icon})`) .join(" ")
		this.item = vscode.window.createStatusBarItem
			(vscode.StatusBarAlignment["left"], 1e6)
		this.item.text = iconText
		this.item.show()
	}
	dispose() {
		if (!this.getCfg("active")) return  // 使用旧的获取器
		// utils.debugLog ("IconTest.dispose")
		this.item.dispose()
	}
	#listenConfigChange() {
		const disposable = vscode.workspace.onDidChangeConfiguration( (event)=>{
			if (! event.affectsConfiguration ("ClockAndBattery.test")) return
			this.dispose()
			this.#draw()
		})
		this.context.subscriptions.push(disposable)
	}
}
exports.IconTest = IconTest
