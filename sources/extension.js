// 20220708
"use strict"
const vscode = require ("vscode")  // 请忽略提示，千万不要点击自动修复
const feature = require ("./feature.js")


exports.activate = function (context) {
	// 用下面这句只会读一次，只有写成函数才能每次读到最新的
	// let getCfg = vscode.workspace.getConfiguration("CustomizeToolbar").get
	// 当用的不是function而是箭头函数，而且函数体只有一句还未加花括号时，不需要显式写出返回语句
	const getCfg = (cfgName) =>
		vscode.workspace .getConfiguration("CustomizeToolbar") .get(cfgName)
	const refresh = () => {  // 或 "const refresh = function () {" 或 "function refresh () {"
		feature.updateButtonConfig (context, getCfg ("buttonConfig"))
		feature.promptToReload ()
	}
	context.subscriptions.push( vscode.workspace.onDidChangeConfiguration( (event) => {
		if (event.affectsConfiguration ("CustomizeToolbar.buttonConfig")) refresh()
	}))
	context.subscriptions.push( vscode.commands.registerCommand(
		"customize-toolbar.refresh", () => refresh()
	))
	feature.registerCommands (context, getCfg ("buttonConfig"))
}


exports.deactivate = function () {
}
