import LogiXVisitor from "./grammar/LogiXVisitor";
import { moveBeaver } from "./logoController";

class ProceduresDict {
  constructor() {
    this.dict = {};
    this.paramsCache = {}
    this.select = document.getElementById("user-procedures");
    this.select.addEventListener("change", (e) => {
      if (e.target.value != "") {
        let proc = this.dict[e.target.value]
        document.getElementById("logo-code").value = proc.procedure[0].start.getInputStream().strdata;
      }
    })
  }

  add(key, value, params) {
    this.dict[key] = { procedure: value, params: params };
    let opt = document.createElement('option');
    opt.value = key;
    opt.innerText = key + "(" + params.join(", ") + ")";
    console.log(this.select.options);
    for (let i = 0; i < this.select.options.length; i++) {
      if (this.select.options[i].value == key) {
        this.select.options[i].remove();
      }
    }
    this.select.appendChild(opt);
  }

  updateCache(name, values) {
    this.paramsCache = {}
    this.dict[name].params.forEach((p, index) => {
      this.paramsCache[p] = values[index];
    })
  }

  getCachedParam(name) {
    return this.paramsCache[name];
  }
}

export class DrawVisitor extends LogiXVisitor {
  constructor(context, beaver) {
    super();
    this.context = context; //kontekst pola do rysowania - dzielony dla całej apki żeby wszystko się działo w jednym
    this.currentDegree = 270; //0 - prawo ; 90 - dół ; 180 - lewo ; 270 - góra
    this.currentX = context.canvas.width / 2; //obecna pozycja
    this.currentY = context.canvas.height / 2; //obecna pozycja
    this.beaver = beaver; //obrazek bobra
    this.penLifted = false;
    this.beaverHidden = false;
    this.context.save();
    this.procedures = new ProceduresDict();
    document.getElementById("clear-code").addEventListener("click", () => {
      document.getElementById("logo-code").value = "";
    })
    document.getElementById("clear-canvas").addEventListener("click", () => {
      this.clear()
      this.context.save()
      this.currentX = context.canvas.width / 2;
      this.currentY = context.canvas.height / 2;
      this.currentDegree = 270;
      this.beaverHidden = false;
      moveBeaver(
        this.beaver,
        this.context,
        this.currentX,
        this.currentY,
        this.currentDegree,
        this.beaverHidden
      );
    })
  }

  getParam(ctx) {
    let paramText = ctx.getText();
    if (paramText[0] == ":") {
      let text = paramText.substring(1);
      Object.keys(this.procedures.paramsCache).sort((a, b) => (b.length - a.length)).forEach(param => {
        text = text.replace(param, this.procedures.getCachedParam(param));
      })
      return eval(text);
    } else {
      try {
        return eval(paramText);
      } catch (e) {
        return paramText;
      }
    }
  }

  clear() {
    this.context.setTransform(1, 0, 0, 1, 0, 0); // Reset macierzy transformacji żeby bóbr nie zrobił brejkdensa po rerenderze
    this.context.clearRect(
      0,
      0,
      this.context.canvas.width,
      this.context.canvas.height
    ); // Czyszczenie pola roboczego
  }

  prepareForDrawing() {
    this.clear();
    this.context.restore();
  }

  saveNewDrawing() {
    this.context.stroke();
    this.context.save();
  }

  visitNp(ctx) {
    this.clear();

    this.context.restore(); // Wczytanie wszystkiego co było przed bobrem (ścieżki)

    let distance = this.getParam(ctx.wyrazenie(0)); // Pobranie danych z polecenia
    let [x, y] = [
      Math.cos(degreesToRadians(this.currentDegree)) * distance,
      Math.sin(degreesToRadians(this.currentDegree)) * distance,
    ]; // Policzenie dx dy z kąta i dystansu
    this.context.moveTo(this.currentX, this.currentY); // Ustawienie pozycji startowej dla rysowania linii
    if (!this.penLifted) {
      this.context.lineTo(this.currentX + x, this.currentY + y); //Narysowanie linii
    }

    this.context.stroke(); //Załadowanie zmian na element HTML
    this.context.save();
    moveBeaver(
      this.beaver,
      this.context,
      this.currentX + x,
      this.currentY + y,
      this.currentDegree,
      this.beaverHidden
    );
    this.currentX += x; //Aktualizacja pozycji
    this.currentY += y; //Aktualizacja pozycji
  }

  visitPw(ctx) {
    let deg = this.getParam(ctx.wyrazenie(0)) //Pobranie danych z polecenia
    this.currentDegree = (this.currentDegree + deg) % 360; //Update aktualnego kąta
    this.clear();
    this.context.restore();
    this.context.stroke();
    moveBeaver(
      this.beaver,
      this.context,
      this.currentX,
      this.currentY,
      this.currentDegree,
      this.beaverHidden
    );
  }

  visitLw(ctx) {
    let deg = this.getParam(ctx.wyrazenie(0));
    this.currentDegree = (this.currentDegree - deg + 360) % 360;
    this.clear();
    this.context.restore();
    this.context.stroke();
    moveBeaver(
      this.beaver,
      this.context,
      this.currentX,
      this.currentY,
      this.currentDegree,
      this.beaverHidden
    );
  }

  visitWs(ctx) {
    this.clear();
    this.context.restore();

    let distance = this.getParam(ctx.wyrazenie(0)); // Pobranie danych z polecenia
    let [x, y] = [
      Math.cos(degreesToRadians(this.currentDegree)) * distance,
      Math.sin(degreesToRadians(this.currentDegree)) * distance,
    ]; // Policzenie dx dy z kąta i dystansu
    this.context.moveTo(this.currentX, this.currentY); // Ustawienie pozycji startowej dla rysowania linii
    if (!this.penLifted) {
      this.context.lineTo(this.currentX - x, this.currentY - y); //Narysowanie linii
    }

    this.context.stroke(); //Załadowanie zmian na element HTML

    this.context.save();
    moveBeaver(
      this.beaver,
      this.context,
      this.currentX - x,
      this.currentY - y,
      this.currentDegree,
      this.beaverHidden
    );

    this.currentX -= x; //Aktualizacja pozycji
    this.currentY -= y; //Aktualizacja pozycji
  }

  visitWy(ctx) {
    this.context.reset();
    moveBeaver(
      this.beaver,
      this.context,
      this.currentX,
      this.currentY,
      this.currentDegree,
      this.beaverHidden
    );
  }

  visitPb(ctx) {
    this.penLifted = true;
  }

  visitOb(ctx) {
    this.penLifted = false;
  }

  visitSb(ctx) {
    this.beaverHidden = true;
    this.clear();
    this.context.restore();
    this.context.stroke();
    moveBeaver(
      this.beaver,
      this.context,
      this.currentX,
      this.currentY,
      this.currentDegree,
      this.beaverHidden
    );
  }

  visitUb(ctx) {
    this.beaverHidden = false;
    moveBeaver(
      this.beaver,
      this.context,
      this.currentX,
      this.currentY,
      this.currentDegree,
      this.beaverHidden
    );
  }

  visitDom(ctx) {
    this.clear();
    this.context.restore();
    this.context.stroke();
    this.currentDegree = 270;
    this.currentX = this.context.canvas.width / 2;
    this.currentY = this.context.canvas.width / 2;
    moveBeaver(
      this.beaver,
      this.context,
      this.currentX,
      this.currentY,
      this.currentDegree,
      this.beaverHidden
    );
  }

  visitKwadrat(ctx) {
    let bok = this.getParam(ctx.wyrazenie(0));
    this.clear();
    this.context.restore();
    this.context.moveTo(this.currentX, this.currentY);
    this.context.rect(this.currentX, this.currentY, bok, bok);
    this.context.stroke();
    this.context.save();
    moveBeaver(
      this.beaver,
      this.context,
      this.currentX,
      this.currentY,
      this.currentDegree,
      this.beaverHidden
    );
  }

  visitTrojkat(ctx) {
    let bok = this.getParam(ctx.wyrazenie(0));
    this.context.restore();
    const x1 = this.currentX;
    const y1 = this.currentY;
    const x2 = this.currentX + bok;
    const y2 = this.currentY;
    const x3 = this.currentX + bok / 2;
    const y3 = this.currentY - Math.sin(Math.PI / 3) * bok;

    this.context.beginPath();
    this.context.moveTo(x1, y1);
    this.context.lineTo(x2, y2);
    this.context.lineTo(x3, y3);
    this.context.closePath();

    this.context.stroke();
    this.context.save();
    moveBeaver(
      this.beaver,
      this.context,
      this.currentX,
      this.currentY,
      this.currentDegree,
      this.beaverHidden
    );
  }
  visitKolo(ctx) {
    let promien = this.getParam(ctx.wyrazenie(0));
    this.clear();
    this.context.restore();
    this.context.arc(this.currentX, this.currentY, promien, 0, 2 * Math.PI);
    this.context.stroke();
    this.context.save();
    moveBeaver(
      this.beaver,
      this.context,
      this.currentX,
      this.currentY,
      this.currentDegree,
      this.beaverHidden
    );
  }
  visitUstaw(ctx) {
    let x = this.getParam(ctx.wyrazenie(0));
    let y = -this.getParam(ctx.wyrazenie(1));

    x += this.context.canvas.width / 2;
    y += this.context.canvas.height / 2;

    this.context.clearRect(
      0,
      0,
      this.context.canvas.width,
      this.context.canvas.height
    );
    this.currentX = x;
    this.currentY = y;
    this.context.stroke();
    this.context.save();
    moveBeaver(
      this.beaver,
      this.context,
      this.currentX,
      this.currentY,
      this.currentDegree,
      this.beaverHidden
    );
  }

  visitNapis(ctx) {
    let napis = ctx.LITERAL_WYRAZU().getText().replace(/"/g, "");
    this.context.font = "25px Arial";
    this.context.fillText(napis, this.currentX, this.currentY);
    this.context.save();
  }

  visitPowtorz(ctx) {
    let count = this.getParam(ctx.liczba(0));
    let blok = ctx.blok(0).polecenia();
    for (let i = 0; i < count; i++) {
      this.visit(blok);
    }
  }

  visitDeklaracjaProcedury(ctx) {
    console.log(ctx);
    let nazwa = ctx.nazwa().getText();
    let polecenia = ctx.linia();
    let params = ctx.deklaracjeParametrow().map(el => (el.nazwa().getText()))
    this.procedures.add(nazwa, polecenia, params);
  }

  visitWywolanieProcedury(ctx) {
    let nazwa = ctx.nazwa().getText();
    let polecenia = this.procedures.dict[nazwa].procedure;
    let args = ctx.wyrazenie().map(el => parseInt(el.getText()))
    this.procedures.updateCache(nazwa, args);
    this.visit(polecenia);
  }
}

const degreesToRadians = (d) => {
  return d * (Math.PI / 180);
};
