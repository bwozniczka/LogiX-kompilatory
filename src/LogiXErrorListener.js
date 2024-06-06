import antlr4 from "antlr4";

export class LogiXErrorListener extends antlr4.error.ErrorListener {
    constructor(codeEditor) {
        super();
        this.codeEditor = codeEditor;
        this.errors = [];
        this.errorBox = document.querySelector(".errors-display");
        document.getElementById("logo-code").addEventListener("input", () => {
            this.hideErrors()
        })
    }

    syntaxError(recognizer, offendingSymbol, line, charPositionInLine, msg, e) {
        console.error(`Błąd składniowy w linii ${line}, kolumna ${charPositionInLine}: ${msg}`);
        let currentValue = this.codeEditor.innerText;
        console.log(currentValue);
        console.log(offendingSymbol.text.length);
        let lines = currentValue.split("\n");
        let mismatched = lines[line - 1].substring(charPositionInLine, charPositionInLine + offendingSymbol.text.length)
        let position = lines.slice(0, line - 1).map(el => el.length).reduce((acc, val) => (acc + val), 0) + (line - 1) + charPositionInLine
        this.errors.push({ value: mismatched, position: position });
        this.appendError(`Błąd składniowy w linii ${line}, kolumna ${charPositionInLine}: ${msg}`);
        console.log(this.errors)
    }

    applyChanges() {
        let currentValue = this.codeEditor.innerText

        let errorsToApply = this.errors.sort((a, b) => (b.position - a.position));
        errorsToApply.forEach(el => {
            let sliced = currentValue.slice(el.position, el.position + el.value.length)
            console.log(sliced, el.position, el.value.length)
            currentValue = currentValue.substring(0, el.position) + "<span class='syntax-error'>" + sliced + "</span>" + currentValue.substring(el.position + el.value.length)
        })
        if (this.errors.length > 0) {
            this.codeEditor.innerHTML = currentValue.replaceAll("\n", "</br>");
            this.showErrors();
        }
    }

    appendError(msg) {
        let newError = document.createElement("div");
        newError.className = "single-error-message";
        newError.innerText = msg;
        this.errorBox.appendChild(newError)
    }

    addCustomUnderline(start, el) {
        console.log(start)
        this.errors.push({ value: el, position: start });
        console.log(this.errors);
    }

    showErrors() {
        this.errorBox.style.display = "flex";
    }

    hideErrors() {
        this.errorBox.style.display = "none";
    }
}