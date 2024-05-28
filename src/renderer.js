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

import "./index.css";
import { initiateBeaver, loadInstructions, parseLogo } from "./logoController";
import { DrawVisitor } from "./DrawVisitor";
import loadBeaver from "./loadBeaver";
import { saveCanvasAsImage } from "./logoController";

console.log(
  '👋 This message is being logged by "renderer.js", included via Vite'
);

(async () => {
  const beaver = await loadBeaver(); // asynchroniczne wczytanie zdjęcia
  const textEditor = document.getElementById("logo-code"); // Pobranie elementów z GUI
  const starterButton = document.getElementById("logo-executor");
  const canvas = document.getElementById("logo-main-screen");
  const select = document.getElementById("sample-codes");
  const saveButton = document.getElementById("logo-save-img");
  const tutorialButton = document.getElementById("logo-tut");
  const canvasCtx = canvas.getContext("2d"); //Pobranie kontekstu 2d
  initiateBeaver(canvasCtx, beaver); //Inicjacja bobra w pozycji zerowej
  const visitor = new DrawVisitor(canvasCtx, beaver); //Stworzenie instancji customowego visitora
  starterButton.addEventListener("click", () => {
    //Co ma się stać po zatwierdzeniu kodu
    parseLogo(textEditor.value, visitor);
  });

  select.addEventListener("change", (e) => {
    if (e.target.value != "") {
      loadInstructions(e.target.value, textEditor);
    }
  });

  saveButton.addEventListener("click", () => {
    saveCanvasAsImage(canvas);
  });

  tutorialButton.addEventListener("click", () => {
    window.location.href = "src/tutorial.html";
  });
})();
