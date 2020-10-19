// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
var vscode = require("vscode");

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
function activate(context) {
  // Use the console to output diagnostic information (console.log) and errors (console.error)
  //console.log("Congratulations, your extension 'extended-cursormove' is now active!");

  context.subscriptions.push(
    vscode.commands.registerTextEditorCommand("extension.extendedCursorMove.cursorHomeToNonWhitespace", function(editor, edit) {
      vscode.commands.executeCommand("cursorMove", {
        to: "wrappedLineFirstNonWhitespaceCharacter",
        by: "line",
        select: false,
        value: 1,
      });
    })
  );

  context.subscriptions.push(
    vscode.commands.registerTextEditorCommand("extension.extendedCursorMove.cursorHome", function(editor, edit) {
      vscode.commands.executeCommand("cursorMove", {
        to: "wrappedLineStart",
        by: "line",
        select: false,
        value: 1
      });
    })
  );

  context.subscriptions.push(
    vscode.commands.registerTextEditorCommand("extension.extendedCursorMove.cursorHomeSelect", function(editor, edit) {
      vscode.commands.executeCommand("cursorMove", {
        to: "wrappedLineStart",
        by: "line",
        select: true,
        value: 1
      });
    })
  );

  context.subscriptions.push(
    vscode.commands.registerTextEditorCommand("extension.extendedCursorMove.cursorEnd", function(editor, edit) {
      vscode.commands.executeCommand("cursorMove", {
        to: "wrappedLineEnd",
        by: "line",
        select: false,
        value: 1
      });
    })
  );

  context.subscriptions.push(
    vscode.commands.registerTextEditorCommand("extension.extendedCursorMove.cursorEndSelect", function(editor, edit) {
      vscode.commands.executeCommand("cursorMove", {
        to: "wrappedLineEnd",
        by: "line",
        select: true,
        value: 1
      });
    })
  );

  context.subscriptions.push(
    vscode.commands.registerTextEditorCommand("extension.extendedCursorMove.cursorTopLeft", function(editor, edit) {
      vscode.commands.executeCommand("cursorMove", {
        to: "viewPortTop",
        by: "line",
        select: false,
        value: 1
      });
      vscode.commands.executeCommand("extension.extendedCursorMove.cursorHome");
    })
  );

  context.subscriptions.push(
    vscode.commands.registerTextEditorCommand("extension.extendedCursorMove.cursorTopLeftSelect", function(editor, edit) {
      vscode.commands.executeCommand("cursorMove", {
        to: "viewPortTop",
        by: "line",
        select: true,
        value: 1
      });
      vscode.commands.executeCommand("extension.extendedCursorMove.cursorHomeSelect");
    })
  );

  context.subscriptions.push(
    vscode.commands.registerTextEditorCommand("extension.extendedCursorMove.cursorBottomRight", function(editor, edit) {
      vscode.commands.executeCommand("cursorMove", {
        to: "viewPortBottom",
        by: "line",
        select: false,
        value: 1
      });
      vscode.commands.executeCommand("extension.extendedCursorMove.cursorEnd");
    })
  );

  context.subscriptions.push(
    vscode.commands.registerTextEditorCommand("extension.extendedCursorMove.cursorBottomRightSelect", function(editor, edit) {
      vscode.commands.executeCommand("cursorMove", {
        to: "viewPortBottom",
        by: "line",
        select: true,
        value: 1
      });
      vscode.commands.executeCommand("extension.extendedCursorMove.cursorEndSelect");
    })
  );

  context.subscriptions.push(
    vscode.commands.registerTextEditorCommand("extension.extendedCursorMove.centerCursorInView", function(editor, edit) {
      vscode.commands.executeCommand("revealLine", {
        lineNumber: editor.selection.anchor.line,
        at: "center"
      });
    })
  );

  context.subscriptions.push(
    vscode.commands.registerTextEditorCommand("extension.extendedCursorMove.moveCursorToView", function(editor, edit) {
      vscode.commands.executeCommand("cursorMove", {
        to: "viewPortCenter",
        by: "line",
        select: ! editor.selection.isEmpty,
        value: 1
      });
      editor.selection.isEmpty ?
        vscode.commands.executeCommand("extension.extendedCursorMove.cursorHome") :
        vscode.commands.executeCommand("extension.extendedCursorMove.cursorHomeSelect");
    })
  );

}
exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() {
}
exports.deactivate = deactivate;
