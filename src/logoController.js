import LogiXLexer from "./grammar/LogiXLexer.js";
import LogiXParser from "./grammar/LogiXParser.js";
import LogiXVisitor from "./grammar/LogiXVisitor.js";
import antlr4 from "antlr4";
import testCodes from "./assets/test_codes.json";
import { LogiXErrorListener } from "./LogiXErrorListener.js";


export const initiateBeaver = (logoScreen, beaver) => {
  logoScreen.save();
  logoScreen.translate(
    logoScreen.canvas.width / 2,
    logoScreen.canvas.height / 2
  );
  logoScreen.rotate((270 * Math.PI) / 180);
  logoScreen.drawImage(beaver, -15, -15, 30, 30);
  logoScreen.restore();
};

export const moveBeaver = (beaver, ctx, x, y, deg, hidden) => {
  ctx.save(); //Zapisanie stanu sprzed narysowania bobra i transformacji
  ctx.translate(x, y); //Przeniesienie bobra w dobre miejsce
  ctx.rotate((deg * Math.PI) / 180); //Rotacja o określony kąt
  if (!hidden) {
    ctx.drawImage(beaver, -15, -15, 30, 30); //Narysowanie bobra
  }
  ctx.restore(); //Odzyskanie linii przejścia na obrazku
};

export const parseLogo = (input, visitor) => {
  const chars = new antlr4.InputStream(input.innerText + "\n");
  const lexer = new LogiXLexer(chars);
  const tokens = new antlr4.CommonTokenStream(lexer);
  const parser = new LogiXParser(tokens);

  parser.buildParseTrees = true;

  const errorListener = new LogiXErrorListener(input);
  parser.removeErrorListeners(); // Usuń domyślnego listenera
  parser.addErrorListener(errorListener);
  console.log(parser.ruleNames)

  const tree = parser.prog();
  console.log(tree);
  console.log(tree.toStringTree(parser.ruleNames, parser));
  visitor.visit(tree);
  errorListener.applyChanges()
};

// export const getParserTree = (input) => {
//   const chars = new antlr4.InputStream(input);
//   const lexer = new LogiXLexer(chars);
//   console.log(lexer);
//   const tokens = new antlr4.CommonTokenStream(lexer);
//   console.log(tokens);
//   const parser = new LogiXParser(tokens);

//   parser.buildParseTrees = true;

//   const tree = parser.prog();
//   console.log(parser.ruleNames)
//   console.log(tree.toStringTree(parser.ruleNames, parser));
//   let results2 = {}
//   parser.ruleNames.forEach(rule => {
//     results2[rule] = []
//   })
//   let results = {};
//   console.log(tree.children.map(el => {
//     try {
//       return el
//     } catch (e) {
//       return null
//     }
//   }));
//   stringTreeParser(tree, results)
//   console.log(results)
// }

export const loadInstructions = (name, target) => {
  target.value = testCodes[name];
};

export function saveCanvasAsImage(canvas) {
  const url = canvas.toDataURL("image/png");
  const link = document.createElement("a");
  link.href = url;
  link.download = "logo.png";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// const stringTreeParser = (tree, results) => {
//   tree.children.forEach(element => {
//     try {
//       // if (element.getChildCount() > 0) {
//       if (!results[element.parentCtx.constructor.name]) {
//         results[element.parentCtx.constructor.name] = []
//       }
//       results[element.parentCtx.constructor.name].push(element.getText());
//       stringTreeParser(element, results)
//       // } else {
//       //   if (!results[element.parentCtx.constructor.name]) {
//       //     results[element.parentCtx.constructor.name] = [];
//       //   } else {
//       //     results[element.parentCtx.constructor.name].push(element);
//       //   }
//       // }
//     } catch (e) {

//     }
//   });
// }

const getNode = (obj, path) => {
  return path.reduce((p, c) => p && p[c] || null, obj);
}
