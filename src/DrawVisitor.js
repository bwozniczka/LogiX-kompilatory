import LogiXVisitor from "./grammar/LogiXVisitor";
import { moveBeaver } from "./logoController";

export class DrawVisitor extends LogiXVisitor {
  constructor(context, beaver) {
    super();
    this.context = context; //kontekst pola do rysowania - dzielony dla całej apki żeby wszystko się działo w jednym
    this.currentDegree = 270; //0 - prawo ; 90 - dół ; 180 - lewo ; 270 - góra
    this.currentX = context.canvas.width / 2; //obecna pozycja
    this.currentY = context.canvas.height / 2; //obecna pozycja
    this.history = [
      {
        type: "move",
        x: context.canvas.width / 2,
        y: context.canvas.height / 2,
      },
    ]; //historia przejść
    this.beaver = beaver; //obrazek bobra
    this.penLifted = false;
    this.beaverHidden = false;
    this.saveRestoreHistory = [];
    this.saveContext("constructor");
  }

  saveContext(cmd) {
    this.context.save();
    this.saveRestoreHistory.push({ p: cmd, o: "save" });
  }

  restoreContext(cmd) {
    this.context.restore();
    this.saveRestoreHistory.push({ p: cmd, o: "restore" });
    //console.log(this.saveRestoreHistory);
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

  visitNp(ctx) {
    this.clear();

    this.restoreContext("np"); // Wczytanie wszystkiego co było przed bobrem (ścieżki)

    let distance = parseInt(ctx.wyrazenie(0).getText()); // Pobranie danych z polecenia
    let [x, y] = [
      Math.cos(degreesToRadians(this.currentDegree)) * distance,
      Math.sin(degreesToRadians(this.currentDegree)) * distance,
    ]; // Policzenie dx dy z kąta i dystansu
    this.context.moveTo(this.currentX, this.currentY); // Ustawienie pozycji startowej dla rysowania linii
    if (!this.penLifted) {
      this.context.lineTo(this.currentX + x, this.currentY + y); //Narysowanie linii
    }

    this.context.stroke(); //Załadowanie zmian na element HTML
    this.saveContext("np");
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
    this.history.push({ type: "line", x: this.currentX, y: this.currentY }); //update historii
  }

  visitPw(ctx) {
    let deg = parseInt(ctx.wyrazenie(0).getText()); //Pobranie danych z polecenia
    this.currentDegree = (this.currentDegree + deg) % 360; //Update aktualnego kąta
    this.clear();
    this.restoreContext("pw");
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
    let deg = parseInt(ctx.wyrazenie(0).getText());
    this.currentDegree = (this.currentDegree - deg + 360) % 360;
    this.clear();
    this.restoreContext("lw");
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
    this.restoreContext("ws");

    let distance = parseInt(ctx.wyrazenie(0).getText()); // Pobranie danych z polecenia
    let [x, y] = [
      Math.cos(degreesToRadians(this.currentDegree)) * distance,
      Math.sin(degreesToRadians(this.currentDegree)) * distance,
    ]; // Policzenie dx dy z kąta i dystansu
    this.context.moveTo(this.currentX, this.currentY); // Ustawienie pozycji startowej dla rysowania linii
    if (!this.penLifted) {
      this.context.lineTo(this.currentX - x, this.currentY - y); //Narysowanie linii
    }

    this.context.stroke(); //Załadowanie zmian na element HTML

    this.saveContext("ws");
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
    this.history.push({ type: "line", x: this.currentX, y: this.currentY }); //update historii
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
    this.restoreContext("sb");
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
    this.restoreContext("dom");
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
    let bok = parseInt(ctx.wyrazenie(0).getText());
    this.clear();
    this.restoreContext("kwadrat");
    this.context.moveTo(this.currentX, this.currentY);
    this.context.rect(this.currentX, this.currentY, bok, bok);
    this.context.stroke();
    this.saveContext("kwadrat");
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
    let bok = parseInt(ctx.wyrazenie(0).getText());
    this.restoreContext("trojkat");
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
    this.saveContext("trojkat");
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
    let promien = parseInt(ctx.wyrazenie(0).getText());
    this.clear();
    this.restoreContext("kolo");
    this.context.arc(this.currentX, this.currentY, promien, 0, 2 * Math.PI);
    this.context.stroke();
    this.saveContext("kolo");
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
    let x = parseInt(ctx.wyrazenie(0).getText());
    let y = parseInt(ctx.wyrazenie(1).getText());

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
    this.saveContext("ustaw");
    moveBeaver(
      this.beaver,
      this.context,
      this.currentX,
      this.currentY,
      this.currentDegree,
      this.beaverHidden
    );
  }

  visitPowtorz(ctx) {
    let count = parseInt(ctx.liczba(0).getText());
    let blok = ctx.blok(0).polecenia()
    console.log(count, blok)
    for (let i = 0; i < count; i++) {
      this.visit(blok)
    }
  }
}

const degreesToRadians = (d) => {
  return d * (Math.PI / 180);
};
