// 20220813
"use strict"
const vscode = require("vscode")  // 请忽略提示，千万不要点击自动修复
const Clock = require("./clock").Clock
const Battery = require("./battery").Battery
const IconTest = require("./iconTest").IconTest

exports.activate = function (context) {
	// vscode.window.showInformationMessage ("Hello, LLR!")

	// vscode.window.showInformationMessage( JSON.stringify(
		// vscode.workspace .getConfiguration("ClockAndBattery") .get("clock") ))
	// context.subscriptions.push(vscode.workspace.onDidChangeConfiguration((event) => {
	// 	"ClockAndBattery.clock.active"
	// 	if (event.affectsConfiguration("ClockAndBattery.clock")) {
	// 		vscode.window.showInformationMessage("outif")
	// 	}
	// 	vscode.window.showInformationMessage("out")  // 如果把activationEvents设为*，则每次打开窗口都会执行，不清楚原理
	// }))

	const clockInst = new Clock(context)
	const batteryInst = new Battery(context)
	const iconTestInst = new IconTest(context)
	// https://stackoverflow.com/questions/55554018/purpose-for-subscribing-a-command-in-vscode-extension
	context.subscriptions.push(clockInst)
	context.subscriptions.push(batteryInst)
	context.subscriptions.push(iconTestInst)
}

exports.deactivate = function () {
}
