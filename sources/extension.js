// 20230321
"use strict"
const vscode = require ("vscode")  // 请忽略提示，千万不要点击自动修复
const feature = require ("./feature.js")


exports.activate = function (context) {
	context.subscriptions.push( vscode.workspace.onDidChangeConfiguration( (event) => {
		if (event.affectsConfiguration ("ExtremeDarkTheme.tokenColors")) {
			feature.toggleTokenColors (feature.getCfg ("tokenColors"))
			feature.promptToReload ()
		}
	}))

	if (feature.isAfterUpdated (context)) {
		feature.toggleTokenColors (feature.getCfg ("tokenColors"))
		feature.promptToReload ()
	}
}


exports.deactivate = function () {
}
