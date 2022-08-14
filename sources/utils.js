// 20220803
"use strict"
const vscode = require("vscode")  // 请忽略提示，千万不要点击自动修复

// let cfgCache
// exports.getCfg = (cfgName, allowCache = true) =>
// 	(cfgCache && allowCache ? cfgCache : cfgCache =
// 		vscode.workspace .getConfiguration("ClockAndBattery"))
// 	.get(cfgName)

exports.newCfgGetter = (section = "") =>
	vscode.workspace.getConfiguration (
		"ClockAndBattery" + (section ? "."+section : "")
	) .get

exports.promptToReload = function () {
	const message = "Changed. Please restart VSCode to apply."
	const action = ["Reload", "Not Now"]
	vscode.window.showInformationMessage (message, ...action) .then( (selectedAction) => {
		if (selectedAction === "Reload")
			vscode.commands.executeCommand ("workbench.action.reloadWindow")
	})
}

exports.debugLog = function (...vars) {
	vscode.window.showInformationMessage (
		vars.map ((val) => JSON.stringify(val)) .join(" | ")
	)
}
exports.debugLog = function () {}
