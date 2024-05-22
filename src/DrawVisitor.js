import LogiXVisitor from "./grammar/LogiXVisitor";
import { moveBeaver } from "./logoController";

export class DrawVisitor extends LogiXVisitor {
    constructor(context, beaver) {
        super();
        this.context = context;
        this.move = 0;
        this.currentDegree = 270; //0 - prawo ; 90 - dół ; 180 - lewo ; 270 - góra
        this.currentX = context.canvas.width / 2;
        this.currentY = context.canvas.height / 2;
        this.history = [{ type: "move", x: context.canvas.width / 2, y: context.canvas.height / 2 }]
        this.beaver = beaver
    }

    visitNp(ctx) {
        this.context.setTransform(1, 0, 0, 1, 0, 0); // Reset transformation matrix
        this.context.clearRect(0, 0, this.context.canvas.width, this.context.canvas.height);
        this.context.restore();

        let distance = parseInt(ctx.wyrazenie(0).getText());
        let [x, y] = [Math.cos(degreesToRadians(this.currentDegree)) * distance, Math.sin(degreesToRadians(this.currentDegree)) * distance];
        this.context.moveTo(this.currentX, this.currentY);
        this.context.lineTo(this.currentX + x, this.currentY + y);
        this.context.stroke();

        moveBeaver(this.beaver, this.context, this.currentX + x, this.currentY + y, this.currentDegree);

        this.currentX += x;
        this.currentY += y;
        this.history.push({ type: "line", x: this.currentX, y: this.currentY });
    }

    visitPw(ctx) {
        // this.context.setTransform(1, 0, 0, 1, 0, 0); // Reset transformation matrix
        // this.context.clearRect(0, 0, this.context.canvas.width, this.context.canvas.height);
        // this.context.restore();
        // this.context.stroke();
        let deg = parseInt(ctx.wyrazenie(0).getText());
        this.currentDegree = (this.currentDegree + deg) % 360;
        moveBeaver(this.beaver, this.context, this.currentX, this.currentY, this.currentDegree);
    }

    visitLw(ctx) {
        // this.context.setTransform(1, 0, 0, 1, 0, 0); // Reset transformation matrix
        // this.context.clearRect(0, 0, this.context.canvas.width, this.context.canvas.height);
        // this.context.restore();
        // this.context.stroke();
        let deg = parseInt(ctx.wyrazenie(0).getText());
        this.currentDegree = (this.currentDegree - deg + 360) % 360;
        moveBeaver(this.beaver, this.context, this.currentX, this.currentY, this.currentDegree);
    }
}

const degreesToRadians = (d) => {
    return d * (Math.PI / 180);
}