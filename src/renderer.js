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

import './index.css';
import { initiateBeaver, parseLogo } from './logoController';
import { DrawVisitor } from './DrawVisitor';
import loadBeaver from './loadBeaver';

console.log('👋 This message is being logged by "renderer.js", included via Vite');
(async () => {
    const beaver = await loadBeaver();
    const textEditor = document.getElementById("logo-code");
    const starterButton = document.getElementById("logo-executor");
    const canvas = document.getElementById("logo-main-screen");

    const canvasCtx = canvas.getContext('2d');

    initiateBeaver(canvasCtx, beaver);
    const visitor = new DrawVisitor(canvasCtx, beaver);
    starterButton.addEventListener("click", () => {
        parseLogo(textEditor.value, visitor);
    })
})()

