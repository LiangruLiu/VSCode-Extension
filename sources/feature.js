// 20220708
"use strict"
const vscode = require ("vscode")  // 请忽略提示，千万不要点击自动修复
const fs = require ("fs")
const path = require ("path")


// 本函数通过修改package.json来实现功能
exports.updateButtonConfig = function (context, btnCfg) {
	const userIcoDirForCode = path.join (__dirname, "../images/userIcons")
	const userIcoDirForCfg = "./images/userIcons"
	const builtinIcoDirForCfg = "./images/builtinIcons"
	// 创建用户图标文件夹
	if (! fs.existsSync (userIcoDirForCode))
		fs.mkdirSync (userIcoDirForCode)
	// 清空用户图标文件夹
	// 遍历对象键用for-in，获取对象值用Object.values，遍历数组值用for-of
	// for-in和for-of中可以用const
	for (const filename of fs.readdirSync (userIcoDirForCode))
		fs.unlinkSync (path.join (userIcoDirForCode, filename))
	let commands = []
	let keybindings = []
	let buttons = []
	for (let idx = 0; idx < btnCfg.length; idx ++) {
		const icon = btnCfg[idx]["icon"]
		if (typeof icon === "object")
			for (const key in icon)
				if (icon[key].startsWith ("builtin/")) {
					icon[key] = icon[key].replace ("builtin", builtinIcoDirForCfg)
				} else {
					const newName = `btn${idx+1}_${key}.svg`
					fs.copyFileSync (icon[key], path.join (userIcoDirForCode, newName))
					icon[key] = path.join (userIcoDirForCfg, newName)
				}
		const cmdName = `customize-toolbar.command-${idx+1}`
		commands[idx] = {
			"command": cmdName,
			"category": "Customize Toolbar",
			"title": btnCfg[idx]["name"],
			"icon": icon
		}
		// if (idx+1 <= 8)
		// 	keybindings[idx] = {
		// 		"command": cmdName,
		// 		"key": `ctrl+alt+${idx+1}`,
		// 		"mac": `shift+cmd+${idx+1}`
		// 	}
		buttons[idx] = {
			"group": `navigation@${idx+1}`,
			// "when": `config.CustomizeToolbar.buttonConfig.length >= ${idx+1} && resourceFilename =~ ${btnCfg[idx]["when"]}`,
			"when": btnCfg[idx]["when"] === undefined ? undefined :
				`resourceFilename =~ /${btnCfg[idx]["when"]}/`,
			"command": cmdName
		}
	}
	const contribFilePath = path.join (__dirname, "../package.json")  // 用__dirname获取当前模块的目录名
	let data = JSON.parse (fs.readFileSync (contribFilePath))
	commands.unshift ({
		"command": "customize-toolbar.refresh",
		"category": "Customize Toolbar",
		"title": "Refresh"
	})
	data["contributes"]["commands"] = commands
	data["contributes"]["keybindings"] = keybindings
	data["contributes"]["menus"]["editor/title"] = buttons
	fs.writeFileSync (contribFilePath, JSON.stringify (data, null, "\t") + "\n")
}


exports.promptToReload = function () {
	const message = "Changed. Please restart VSCode to apply."
	const action = ["Reload", "Not Now"]
	vscode.window.showInformationMessage (message, ...action) .then( (selectedAction) => {
		if (selectedAction === "Reload")
			vscode.commands.executeCommand ("workbench.action.reloadWindow")
	})
}


exports.registerCommands = function (context, btnCfg) {
	for (let idx = 0; idx < btnCfg.length; idx ++) {
		const cmdName = `customize-toolbar.command-${idx+1}`
		context.subscriptions.push( vscode.commands.registerCommand( cmdName, () => {
			vscode.commands.executeCommand (btnCfg[idx]["command"])
		}))
		// 因为package.json不能写注释，所以就记在这里了
		// 注意buttonConfig中的command不能填名字而要填标识符，具体可以去快捷键列表里找
		// 比如收放终端，要写workbench.action.terminal.toggleTerminal而非view.toggleTerminal
	}
}
