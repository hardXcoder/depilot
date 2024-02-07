const vscode = require('vscode');

function activate(context) {
    let activeEditor = vscode.window.activeTextEditor;

    if (activeEditor) {
        // Initial code reading
        processCode(activeEditor.document.getText());

        // Listen for text document changes
        let disposable = vscode.workspace.onDidChangeTextDocument((event) => {
            processCode(event.document.getText());
        });

        context.subscriptions.push(disposable);
    }
}

function processCode(code) {
    // Process and analyze the code here
    console.log(code);
}

module.exports = {
    activate
};
