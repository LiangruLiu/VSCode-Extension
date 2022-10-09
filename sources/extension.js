// 20221010
"use strict"
const vscode = require ("vscode")  // 请忽略提示，千万不要点击自动修复
const fs = require ("fs")


exports.activate = function (context) {
	// const getCfg = (cfgName) =>
	// 	vscode.workspace .getConfiguration("CustomizeToolbar") .get(cfgName)
	// context.subscriptions.push( vscode.workspace.onDidChangeConfiguration( (event) => {
	// 	if (event.affectsConfiguration ("CustomizeToolbar.buttonConfig")) refresh()
	// }))

	const copy = () => {
		const panel = vscode.window.createWebviewPanel
			("", "Panel", vscode.ViewColumn.Beside, {enableScripts:true})
		panel.webview.html = fs.readFileSync (__dirname+"/panel.html") .toString()
		// let a = vscode.commands.executeCommand
		// 	("editor.action.clipboardCopyWithSyntaxHighlightingAction")
		// 	.then((str) => console.log(str) )
		// vscode.env.clipboard.readText()
		// 	.then((str) => console.log(str) )
	}
	context.subscriptions.push( vscode.commands.registerCommand(
		"line-number.lncopy", () => copy()
	))
}


exports.deactivate = function () {
}
// 希望实现复制带格式文本并自动加行号
