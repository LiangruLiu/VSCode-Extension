// 20220709
"use strict"
const vscode = require ("vscode")  // 请忽略提示，千万不要点击自动修复
const feature = require ("./feature.js")


exports.activate = function (context) {
	context.subscriptions.push( vscode.commands.registerCommand( "extension.hi-llr", function () {
		vscode.window.showInformationMessage ("Hello, LLR!")
	}))

	context.subscriptions.push( vscode.workspace.onDidChangeConfiguration( (event) => {
		const getCfg = (cfgName) =>
			vscode.workspace .getConfiguration("ExtremeDarkTheme") .get(cfgName)
		if (event.affectsConfiguration ("ExtremeDarkTheme.tokenColors")) {
			feature.toggleTokenColors (getCfg("tokenColors"))
			feature.promptToReload ()
		}
	}))
}


exports.deactivate = function () {
}
