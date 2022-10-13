// 20221011
"use strict"
const vscode = require ("vscode")  // 请忽略提示，千万不要点击自动修复
const fs = require ("fs")


exports.activate = function (context) {
	// const getCfg = (cfgName) =>
	// 	vscode.workspace .getConfiguration("CustomizeToolbar") .get(cfgName)
	// context.subscriptions.push( vscode.workspace.onDidChangeConfiguration( (event) => {
	// 	if (event.affectsConfiguration ("CustomizeToolbar.buttonConfig")) refresh()
	// }))

	const openPanel = () => {
		const panel = vscode.window.createWebviewPanel
			("", "Panel", vscode.ViewColumn.Beside,
			{enableScripts:true, retainContextWhenHidden:true})
		panel.webview.html = fs.readFileSync (__dirname+"/panel.html") .toString()
		// https://blog.csdn.net/zhouhangzooo/article/details/89040623
		// https://www.npmjs.com/package/jsdom

		// vscode.commands.executeCommand
		// 	("editor.action.clipboardCopyWithSyntaxHighlightingAction")
		// 	.then((str) => console.log(str) )
		// vscode.env.clipboard.readText()
		// 	.then((str) => console.log(str) )
	}
	context.subscriptions.push( vscode.commands.registerCommand(
		"line-number.open-panel", () => openPanel()
	))
}


exports.deactivate = function () {
}
