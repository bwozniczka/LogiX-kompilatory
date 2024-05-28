/**
 * This file will automatically be loaded by vite and run in the "renderer" context.
 * To learn more about the differences between the "main" and the "renderer" context in
 * Electron, visit:
 *
 * https://electronjs.org/docs/tutorial/application-architecture#main-and-renderer-processes
 *
 * By default, Node.js integration in this file is disabled. When enabling Node.js integration
 * in a renderer process, please be aware of potential security implications. You can read
 * more about security risks here:
 *
 * https://electronjs.org/docs/tutorial/security
 *
 * To enable Node.js integration in this file, open up `main.js` and enable the `nodeIntegration`
 * flag:
 *
 * ```
 *  // Create the browser window.
 *  mainWindow = new BrowserWindow({
 *    width: 800,
 *    height: 600,
 *    webPreferences: {
 *      nodeIntegration: true
 *    }
 *  });
 * ```
 */

import "./terminal.css";
import { initiateBeaver, loadInstructions, parseLogo } from "./logoController";
import { DrawVisitorTerminal } from "./DrawVisitorTerminal";
import loadBeaver from "./loadBeaver";
import { saveCanvasAsImage } from "./logoController";

console.log(
    '👋 This message is being logged by "tutorial_renderer.js", included via Vite'
);

(async () => {
    const beaver = await loadBeaver(); // asynchroniczne wczytanie zdjęcia
    const textEditor = document.getElementById("logo-code"); // Pobranie elementów z GUI
    const runButton = document.getElementById("logo-executor");
    const terminalForm = document.getElementById("terminal-logo")
    const canvas = document.getElementById("logo-main-screen-2");
    const saveButton = document.getElementById("logo-save-img");
    const tutorialButton = document.getElementById("logo-tut");
    const historyDiv = document.getElementById("history");
    console.log(canvas);
    const canvasCtx = canvas.getContext("2d"); //Pobranie kontekstu 2d
    initiateBeaver(canvasCtx, beaver); //Inicjacja bobra w pozycji zerowej
    const visitor = new DrawVisitorTerminal(canvasCtx, beaver); //Stworzenie instancji customowego visitora
    // runButton.addEventListener("click", () => {
    //     //Co ma się stać po zatwierdzeniu kodu
    //     parseLogo(textEditor.value, visitor);
    // });

    terminalForm.addEventListener("submit", (e) => {
        e.preventDefault();
        let command = document.getElementById("logo-input").value
        parseLogo(command, visitor);
        historyDiv.innerText += (command + "\n")
        historyDiv.scrollTop = historyDiv.scrollHeight
        document.getElementById("logo-input").value = "";
    })

    saveButton.addEventListener("click", () => {
        saveCanvasAsImage(canvas);
    });

    tutorialButton.addEventListener("click", () => {
        window.location.href = "tutorial.html";
    });
})();
