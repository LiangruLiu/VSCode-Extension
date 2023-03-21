// 20230321
"use strict"
const vscode = require ("vscode")  // 请忽略提示，千万不要点击自动修复
const fs = require ("fs")
const path = require ("path")


exports.getCfg = function (cfgName) {
	return vscode.workspace .getConfiguration("ExtremeDarkTheme") .get(cfgName)
}


function overtype (filePath, cursorPos, content) {
	let writer = fs.createWriteStream (filePath, {flags: "r+", start: cursorPos})
	// 此函数不能用try-catch，而要用：
	writer.on( "error", function (err) {
		console.log (err)
		writer.end ()
	})
	// 但其实不做错误处理也行，因为VSCode插件系统会忽略错误继续执行
	writer.write (content, "utf8")
	writer.end ()
}

// 本函数通过切换ExtremeDark.json中的注释来实现功能
exports.toggleTokenColors = function (colorSet) {
	const themeFilePath =
		path.join (__dirname, "../themes/ExtremeDark.json")  // 用__dirname获取当前模块的目录名
	const colorSetToCursorPos =
		{ "ExtremeDark": 103, "Original": 151, "OneDarkPro": 196 }
	// 遍历对象键用for-in，获取对象值用Object.values，遍历数组值用for-of
	console.assert (colorSet in colorSetToCursorPos, "Name Error!")
	for (const cursorPos of Object.values (colorSetToCursorPos))
		overtype (themeFilePath, cursorPos, "//")
	overtype (themeFilePath, colorSetToCursorPos [colorSet], "  ")
}


exports.promptToReload = function () {
	const message = "Changed. Please restart VSCode to apply."
	const action = ["Reload", "Not Now"]
	vscode.window.showInformationMessage (message, ...action) .then( (selectedAction) => {
		if (selectedAction === "Reload")
			vscode.commands.executeCommand ("workbench.action.reloadWindow")
	})
}


// 本函数无法利用vscode.extensions.onDidChange实现
exports.isAfterUpdated = function (context) {
	const extId = context.extension.id
	const verKey = `${extId}.version`
	// context.globalState.setKeysForSync ([verKey])
	const prevVer = context.globalState.get (verKey)
	const curVer = context.extension.packageJSON.version
	// vscode.window.showInformationMessage (`${extId} : ${prevVer} -> ${curVer}`)
	context.globalState.update (verKey, curVer)
	return curVer != prevVer
}


// 如果使用TS，需要npm install
// TS语法:
// import * as fs from "fs"
// export function func () {
// 	...
// }
