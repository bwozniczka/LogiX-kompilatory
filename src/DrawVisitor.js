import LogiXVisitor from "./grammar/LogiXVisitor";
import { moveBeaver } from "./logoController";

export class DrawVisitor extends LogiXVisitor {
    constructor(context, beaver) {
        super();
        this.context = context; //kontekst pola do rysowania - dzielony dla całej apki żeby wszystko się działo w jednym
        this.currentDegree = 270; //0 - prawo ; 90 - dół ; 180 - lewo ; 270 - góra
        this.currentX = context.canvas.width / 2; //obecna pozycja
        this.currentY = context.canvas.height / 2; //obecna pozycja
        this.history = [{ type: "move", x: context.canvas.width / 2, y: context.canvas.height / 2 }] //historia przejść
        this.beaver = beaver //obrazek bobra
    }

    visitNp(ctx) {
        this.context.setTransform(1, 0, 0, 1, 0, 0); // Reset macierzy transformacji żeby bóbr nie zrobił brejkdensa po rerenderze
        this.context.clearRect(0, 0, this.context.canvas.width, this.context.canvas.height); // Czyszczenie pola roboczego
        this.context.restore(); // Wczytanie wszystkiego co było przed bobrem (ścieżki)

        let distance = parseInt(ctx.wyrazenie(0).getText()); // Pobranie danych z polecenia
        let [x, y] = [Math.cos(degreesToRadians(this.currentDegree)) * distance, Math.sin(degreesToRadians(this.currentDegree)) * distance]; // Policzenie dx dy z kąta i dystansu
        this.context.moveTo(this.currentX, this.currentY); // Ustawienie pozycji startowej dla rysowania linii
        this.context.lineTo(this.currentX + x, this.currentY + y); //Narysowanie linii
        this.context.stroke(); //Załadowanie zmian na element HTML

        moveBeaver(this.beaver, this.context, this.currentX + x, this.currentY + y, this.currentDegree);

        this.currentX += x; //Aktualizacja pozycji
        this.currentY += y; //Aktualizacja pozycji
        this.history.push({ type: "line", x: this.currentX, y: this.currentY }); //update historii
    }

    visitPw(ctx) {
        let deg = parseInt(ctx.wyrazenie(0).getText()); //Pobranie danych z polecenia
        this.currentDegree = (this.currentDegree + deg) % 360; //Update aktualnego kąta
        moveBeaver(this.beaver, this.context, this.currentX, this.currentY, this.currentDegree);
    }

    visitLw(ctx) {
        let deg = parseInt(ctx.wyrazenie(0).getText());
        this.currentDegree = (this.currentDegree - deg + 360) % 360;
        moveBeaver(this.beaver, this.context, this.currentX, this.currentY, this.currentDegree);
    }
}

const degreesToRadians = (d) => {
    return d * (Math.PI / 180);
}