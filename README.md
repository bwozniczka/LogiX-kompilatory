# LogiX

An interpreter for a modified version of the [Logo programming language](https://el.media.mit.edu/logo-foundation/what_is_logo/logo_programming.html), featuring a graphical interface built with ElectronJS. All commands have been translated into Polish.

  - [Grammar](https://github.com/bwozniczka/LogiX-kompilatory/blob/main/src/grammar/LogiX.g4)
  - [Tokens](https://github.com/bwozniczka/LogiX-kompilatory/blob/main/src/grammar/LogiXLexer.tokens)

## Information about the scanner/parser generators and external packages used:
  - Parser generator: ANTLR
  - Implementation language: JavaScript
  - Type of translator: Interpreter

### Implemented Commands

| Command                | Description                                                       |
|------------------------|-------------------------------------------------------------------|
| **np :number**          | Move the marker forward by a specified number of units            |
| **pw :number**          | Rotate the marker right by a specified number of degrees          |
| **lw :number**          | Rotate the marker left by a specified number of degrees           |
| **ws :number**          | Move the marker backward by a specified number of units           |
| **pb**                  | Lift the pen                                                     |
| **ob**                  | Lower the pen                                                    |
| **dom**                 | Return the marker to the origin (0, 0)                           |
| **sb**                  | Hide the marker                                                  |
| **ub**                  | Show the marker                                                  |
| **wy**                  | Clear the workspace                                              |
| **kwadrat :number**     | Draw a square with the specified side length                     |
| **trojkat :number**     | Draw an equilateral triangle with the specified side length       |
| **kolo :number**        | Draw a circle with the specified radius                          |
| **ustaw :number :number** | Set the marker at specified coordinates (X, Y)                  |
| **napis :TEXT_LITERAL** | Draw the specified text on the screen                            |
| **powtorz: 'repeat' number block** | Repeat the given expression a specified number of times|
| **procedure: 'to' name paramDeclarations* EOL? (line? EOL)+ 'end'** | Declare a custom procedure |
| **Jesli: 'if' condition block** | Conditional function                                        |
| **wypisz: 'print' value** | Print a numerical or text value, or return from a function        |
| **losowo: 'random' number** | Return a random number between 0 and the specified value        |
| **pierwszy: 'first' list** | Return the first element of a list                               |
| **glowa: 'head' list** | Return all elements of a list except the last                     |
| **ogon: 'tail' list** | Return all elements of a list except the first                     |
| **ostatni: 'last' list** | Return the last element of a list                                 |
| **element: 'element' index list** | Return the element from a list at the given index          |
| **elementWielowymiaru: 'elementww' list multiDimensionalList** | Return an element from a multidimensional list|
| **wybierz: 'choose' list** | Randomly select an element from a list                          |
| **usun: 'remove' element list** | Return a list without the specified element                  |
| **unikalna: 'unique' list** | Return the list without duplicates    

***

### Our application includes pre-built command sequences ready to paste, along with the option to save your finished drawing.

***

### Preview

![mock1](views/mock-nowy1.jpg)
![mock2](views/mock-nowy2.jpg)
![mock3](views/mock-nowy3.jpg)

***
### How to Run

```sh
npm i
npm start
```
If you encounter any errors, you may need to delete `package-lock.json` and `node_modules`, then reinstall the packages.


***
### Have fun! :D


