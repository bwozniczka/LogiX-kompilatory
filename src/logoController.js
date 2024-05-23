import beaver from './images/beaver-icon.jpg';
import LogiXLexer from './grammar/LogiXLexer.js';
import LogiXParser from './grammar/LogiXParser.js';
import LogiXVisitor from './grammar/LogiXVisitor.js';
import antlr4 from 'antlr4';

export const initiateBeaver = (logoScreen, beaver) => {
    logoScreen.canvas.width = 400;
    logoScreen.canvas.height = 400;
    logoScreen.save();
    logoScreen.translate(logoScreen.canvas.width / 2, logoScreen.canvas.height / 2);
    logoScreen.rotate(270 * Math.PI / 180);
    logoScreen.drawImage(beaver, -15, -15, 30, 30);
    logoScreen.restore();
}

export const moveBeaver = (beaver, ctx, x, y, deg) => {
    ctx.save(); //Zapisanie stanu sprzed narysowania bobra i transformacji
    ctx.translate(x, y); //Przeniesienie bobra w dobre miejsce
    ctx.rotate(deg * Math.PI / 180); //Rotacja o określony kąt
    ctx.drawImage(beaver, -15, -15, 30, 30); //Narysowanie bobra
    ctx.restore(); //Odzyskanie linii przejścia na obrazku
}

export const parseLogo = (input, visitor) => {
    const chars = new antlr4.InputStream(input);
    const lexer = new LogiXLexer(chars);
    const tokens = new antlr4.CommonTokenStream(lexer);
    const parser = new LogiXParser(tokens);

    parser.buildParseTrees = true;  // Ensure parse trees are built

    const tree = parser.prog();  // Assuming 'prog' is the start rule in your grammar
    console.log(tree.toStringTree(parser.ruleNames, parser));
    visitor.visit(tree);
};