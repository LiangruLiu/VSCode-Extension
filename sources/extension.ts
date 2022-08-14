// This file is useless.

import * as vscode from "vscode"
// import * as utils from "./utils"
// import * as feature from "./feature"

export function activate(context: vscode.ExtensionContext) {
	vscode.window.showInformationMessage("Hello!")
	// utils.debugLog("Hello!")
	// utils.regCmd(context, "octicons-refsrc.refresh", () => {
	// 	feature.runFantasticon()
	// 	feature.modifyJson()
	// 	utils.promptToReload()
	// })
}

export function deactivate() {
}

// 想用Ts写代码，就需要在写完后用package.json中的scripts编译成Js，在package.json中的main项填"./out/extension.js",
// 不过本插件比较特殊，类似于纯主题插件，运行时不需要执行代码，所以没有main和activationEvents
