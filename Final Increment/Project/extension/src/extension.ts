// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { HelloWorldPanel } from './HelloWorldPanel';
import { SidebarProvider } from './SidebarProvider';


// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	const sidebarProvider = new SidebarProvider(context.extensionUri);
	context.subscriptions.push(
		vscode.window.registerWebviewViewProvider("testrunner-sidebar",sidebarProvider)
	);
	context.subscriptions.push(vscode.commands.registerCommand('testrunner.helloWorld', () => {
		HelloWorldPanel.createOrShow(context.extensionUri);
	}));
}

// This method is called when your extension is deactivated
export function deactivate() {}
