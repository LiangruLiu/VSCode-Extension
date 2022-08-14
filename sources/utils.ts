// This file is useless.

import * as vscode from "vscode"  // npm install @types/vscode
// https://code.visualstudio.com/updates/v1_36#_splitting-vscode-package-into-typesvscode-and-vscodetest

export function debugLog(...vars: any[]) {
	// return
	vscode.window.showInformationMessage(
		vars.map((val) => JSON.stringify(val)).join(" | ")
	)
}

export function regCmd(
		context: { subscriptions: vscode.Disposable[] },
		cmdName: string,
		callback: (...args: any[]) => any) {
	context.subscriptions.push
		(vscode.commands.registerCommand(cmdName, callback))
}

export function promptToReload() {
	const message = "Changed. Please restart VSCode to apply."
	const action = ["Reload", "Not Now"]
	vscode.window.showInformationMessage(message, ...action).then((selectedAction) => {
		if (selectedAction === "Reload")
			vscode.commands.executeCommand("workbench.action.reloadWindow")
	})
}
