// Generated from LogiX.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import LogiXListener from './LogiXListener.js';
import LogiXVisitor from './LogiXVisitor.js';

const serializedATN = [4,1,61,388,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,2,27,
7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,33,7,33,2,34,7,
34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,2,39,7,39,2,40,7,40,2,41,7,41,
2,42,7,42,2,43,7,43,2,44,7,44,2,45,7,45,2,46,7,46,2,47,7,47,2,48,7,48,2,
49,7,49,1,0,3,0,102,8,0,1,0,4,0,105,8,0,11,0,12,0,106,1,0,3,0,110,8,0,1,
0,1,0,1,1,4,1,115,8,1,11,1,12,1,116,1,1,3,1,120,8,1,1,1,1,1,1,1,3,1,125,
8,1,1,1,3,1,128,8,1,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,
1,2,1,2,1,2,1,2,1,2,1,2,3,2,149,8,2,1,3,1,3,5,3,153,8,3,10,3,12,3,156,9,
3,1,4,1,4,1,4,5,4,161,8,4,10,4,12,4,164,9,4,1,4,3,4,167,8,4,1,4,3,4,170,
8,4,1,4,4,4,173,8,4,11,4,12,4,174,1,4,1,4,1,5,1,5,1,5,1,5,5,5,183,8,5,10,
5,12,5,186,9,5,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,3,6,198,8,6,1,7,1,
7,1,7,1,7,1,8,1,8,4,8,206,8,8,11,8,12,8,207,1,8,1,8,1,9,1,9,1,9,1,9,1,10,
1,10,1,10,1,10,1,11,1,11,1,12,1,12,1,12,3,12,225,8,12,1,13,1,13,1,13,1,14,
1,14,1,14,1,15,1,15,1,15,1,16,1,16,1,16,1,17,1,17,1,17,1,17,1,18,1,18,1,
18,1,18,1,19,1,19,1,19,1,20,1,20,1,20,1,20,1,21,1,21,1,21,1,22,1,22,1,22,
1,22,5,22,261,8,22,10,22,12,22,264,9,22,1,22,1,22,1,23,1,23,1,23,3,23,271,
8,23,1,23,1,23,1,23,3,23,276,8,23,5,23,278,8,23,10,23,12,23,281,9,23,1,23,
1,23,1,24,1,24,1,24,5,24,288,8,24,10,24,12,24,291,9,24,1,24,1,24,1,25,1,
25,1,26,1,26,1,26,3,26,300,8,26,1,27,5,27,303,8,27,10,27,12,27,306,9,27,
1,27,1,27,1,27,3,27,311,8,27,1,28,1,28,1,28,5,28,316,8,28,10,28,12,28,319,
9,28,1,29,1,29,1,29,5,29,324,8,29,10,29,12,29,327,9,29,1,30,1,30,1,30,1,
31,1,31,1,31,1,32,1,32,1,32,1,33,1,33,1,33,1,34,1,34,1,34,1,35,1,35,1,36,
1,36,1,37,1,37,1,38,1,38,1,39,1,39,1,40,1,40,1,41,1,41,1,41,1,42,1,42,1,
42,1,42,1,43,1,43,1,43,1,44,1,44,1,44,1,44,1,44,1,44,1,44,1,44,1,44,1,45,
1,45,1,45,1,46,1,46,1,46,1,47,1,47,1,47,1,48,1,48,1,49,1,49,1,49,0,0,50,
0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,
52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,98,
0,14,1,0,9,13,2,0,4,4,24,24,1,0,7,7,1,0,25,26,1,0,27,28,1,0,29,30,1,0,31,
32,1,0,33,34,1,0,35,36,1,0,37,39,1,0,40,41,1,0,42,43,1,0,44,45,1,0,46,47,
394,0,104,1,0,0,0,2,127,1,0,0,0,4,148,1,0,0,0,6,150,1,0,0,0,8,157,1,0,0,
0,10,178,1,0,0,0,12,197,1,0,0,0,14,199,1,0,0,0,16,203,1,0,0,0,18,211,1,0,
0,0,20,215,1,0,0,0,22,219,1,0,0,0,24,221,1,0,0,0,26,226,1,0,0,0,28,229,1,
0,0,0,30,232,1,0,0,0,32,235,1,0,0,0,34,238,1,0,0,0,36,242,1,0,0,0,38,246,
1,0,0,0,40,249,1,0,0,0,42,253,1,0,0,0,44,256,1,0,0,0,46,267,1,0,0,0,48,284,
1,0,0,0,50,294,1,0,0,0,52,299,1,0,0,0,54,304,1,0,0,0,56,312,1,0,0,0,58,320,
1,0,0,0,60,328,1,0,0,0,62,331,1,0,0,0,64,334,1,0,0,0,66,337,1,0,0,0,68,340,
1,0,0,0,70,343,1,0,0,0,72,345,1,0,0,0,74,347,1,0,0,0,76,349,1,0,0,0,78,351,
1,0,0,0,80,353,1,0,0,0,82,355,1,0,0,0,84,358,1,0,0,0,86,362,1,0,0,0,88,365,
1,0,0,0,90,374,1,0,0,0,92,377,1,0,0,0,94,380,1,0,0,0,96,383,1,0,0,0,98,385,
1,0,0,0,100,102,3,2,1,0,101,100,1,0,0,0,101,102,1,0,0,0,102,103,1,0,0,0,
103,105,5,60,0,0,104,101,1,0,0,0,105,106,1,0,0,0,106,104,1,0,0,0,106,107,
1,0,0,0,107,109,1,0,0,0,108,110,3,2,1,0,109,108,1,0,0,0,109,110,1,0,0,0,
110,111,1,0,0,0,111,112,5,0,0,1,112,1,1,0,0,0,113,115,3,4,2,0,114,113,1,
0,0,0,115,116,1,0,0,0,116,114,1,0,0,0,116,117,1,0,0,0,117,119,1,0,0,0,118,
120,3,98,49,0,119,118,1,0,0,0,119,120,1,0,0,0,120,128,1,0,0,0,121,128,3,
98,49,0,122,124,3,24,12,0,123,125,3,98,49,0,124,123,1,0,0,0,124,125,1,0,
0,0,125,128,1,0,0,0,126,128,3,8,4,0,127,114,1,0,0,0,127,121,1,0,0,0,127,
122,1,0,0,0,127,126,1,0,0,0,128,3,1,0,0,0,129,149,3,14,7,0,130,149,3,62,
31,0,131,149,3,64,32,0,132,149,3,66,33,0,133,149,3,68,34,0,134,149,3,70,
35,0,135,149,3,72,36,0,136,149,3,74,37,0,137,149,3,76,38,0,138,149,3,78,
39,0,139,149,3,80,40,0,140,149,3,82,41,0,141,149,3,84,42,0,142,149,3,6,3,
0,143,149,3,18,9,0,144,149,3,88,44,0,145,149,3,90,45,0,146,149,3,92,46,0,
147,149,3,94,47,0,148,129,1,0,0,0,148,130,1,0,0,0,148,131,1,0,0,0,148,132,
1,0,0,0,148,133,1,0,0,0,148,134,1,0,0,0,148,135,1,0,0,0,148,136,1,0,0,0,
148,137,1,0,0,0,148,138,1,0,0,0,148,139,1,0,0,0,148,140,1,0,0,0,148,141,
1,0,0,0,148,142,1,0,0,0,148,143,1,0,0,0,148,144,1,0,0,0,148,145,1,0,0,0,
148,146,1,0,0,0,148,147,1,0,0,0,149,5,1,0,0,0,150,154,3,50,25,0,151,153,
3,58,29,0,152,151,1,0,0,0,153,156,1,0,0,0,154,152,1,0,0,0,154,155,1,0,0,
0,155,7,1,0,0,0,156,154,1,0,0,0,157,158,5,1,0,0,158,162,3,50,25,0,159,161,
3,10,5,0,160,159,1,0,0,0,161,164,1,0,0,0,162,160,1,0,0,0,162,163,1,0,0,0,
163,166,1,0,0,0,164,162,1,0,0,0,165,167,5,60,0,0,166,165,1,0,0,0,166,167,
1,0,0,0,167,172,1,0,0,0,168,170,3,2,1,0,169,168,1,0,0,0,169,170,1,0,0,0,
170,171,1,0,0,0,171,173,5,60,0,0,172,169,1,0,0,0,173,174,1,0,0,0,174,172,
1,0,0,0,174,175,1,0,0,0,175,176,1,0,0,0,176,177,5,2,0,0,177,9,1,0,0,0,178,
179,5,3,0,0,179,184,3,50,25,0,180,181,5,4,0,0,181,183,3,10,5,0,182,180,1,
0,0,0,183,186,1,0,0,0,184,182,1,0,0,0,184,185,1,0,0,0,185,11,1,0,0,0,186,
184,1,0,0,0,187,198,3,86,43,0,188,198,3,26,13,0,189,198,3,28,14,0,190,198,
3,30,15,0,191,198,3,32,16,0,192,198,3,34,17,0,193,198,3,36,18,0,194,198,
3,38,19,0,195,198,3,40,20,0,196,198,3,42,21,0,197,187,1,0,0,0,197,188,1,
0,0,0,197,189,1,0,0,0,197,190,1,0,0,0,197,191,1,0,0,0,197,192,1,0,0,0,197,
193,1,0,0,0,197,194,1,0,0,0,197,195,1,0,0,0,197,196,1,0,0,0,198,13,1,0,0,
0,199,200,5,5,0,0,200,201,3,96,48,0,201,202,3,16,8,0,202,15,1,0,0,0,203,
205,5,6,0,0,204,206,3,4,2,0,205,204,1,0,0,0,206,207,1,0,0,0,207,205,1,0,
0,0,207,208,1,0,0,0,208,209,1,0,0,0,209,210,5,7,0,0,210,17,1,0,0,0,211,212,
5,8,0,0,212,213,3,20,10,0,213,214,3,16,8,0,214,19,1,0,0,0,215,216,3,58,29,
0,216,217,3,22,11,0,217,218,3,58,29,0,218,21,1,0,0,0,219,220,7,0,0,0,220,
23,1,0,0,0,221,224,5,14,0,0,222,225,3,52,26,0,223,225,3,48,24,0,224,222,
1,0,0,0,224,223,1,0,0,0,225,25,1,0,0,0,226,227,5,15,0,0,227,228,3,44,22,
0,228,27,1,0,0,0,229,230,5,16,0,0,230,231,3,44,22,0,231,29,1,0,0,0,232,233,
5,17,0,0,233,234,3,44,22,0,234,31,1,0,0,0,235,236,5,18,0,0,236,237,3,44,
22,0,237,33,1,0,0,0,238,239,5,19,0,0,239,240,3,96,48,0,240,241,3,44,22,0,
241,35,1,0,0,0,242,243,5,20,0,0,243,244,3,44,22,0,244,245,3,46,23,0,245,
37,1,0,0,0,246,247,5,21,0,0,247,248,3,44,22,0,248,39,1,0,0,0,249,250,5,22,
0,0,250,251,3,52,26,0,251,252,3,44,22,0,252,41,1,0,0,0,253,254,5,23,0,0,
254,255,3,44,22,0,255,43,1,0,0,0,256,257,5,6,0,0,257,262,3,52,26,0,258,259,
7,1,0,0,259,261,3,52,26,0,260,258,1,0,0,0,261,264,1,0,0,0,262,260,1,0,0,
0,262,263,1,0,0,0,263,265,1,0,0,0,264,262,1,0,0,0,265,266,5,7,0,0,266,45,
1,0,0,0,267,270,5,6,0,0,268,271,3,46,23,0,269,271,3,44,22,0,270,268,1,0,
0,0,270,269,1,0,0,0,271,279,1,0,0,0,272,275,7,1,0,0,273,276,3,46,23,0,274,
276,3,44,22,0,275,273,1,0,0,0,275,274,1,0,0,0,276,278,1,0,0,0,277,272,1,
0,0,0,278,281,1,0,0,0,279,277,1,0,0,0,279,280,1,0,0,0,280,282,1,0,0,0,281,
279,1,0,0,0,282,283,5,7,0,0,283,47,1,0,0,0,284,289,5,6,0,0,285,288,3,48,
24,0,286,288,8,2,0,0,287,285,1,0,0,0,287,286,1,0,0,0,288,291,1,0,0,0,289,
287,1,0,0,0,289,290,1,0,0,0,290,292,1,0,0,0,291,289,1,0,0,0,292,293,5,7,
0,0,293,49,1,0,0,0,294,295,5,57,0,0,295,51,1,0,0,0,296,300,5,56,0,0,297,
300,3,58,29,0,298,300,3,60,30,0,299,296,1,0,0,0,299,297,1,0,0,0,299,298,
1,0,0,0,300,53,1,0,0,0,301,303,7,3,0,0,302,301,1,0,0,0,303,306,1,0,0,0,304,
302,1,0,0,0,304,305,1,0,0,0,305,310,1,0,0,0,306,304,1,0,0,0,307,311,3,96,
48,0,308,311,3,60,30,0,309,311,3,12,6,0,310,307,1,0,0,0,310,308,1,0,0,0,
310,309,1,0,0,0,311,55,1,0,0,0,312,317,3,54,27,0,313,314,7,4,0,0,314,316,
3,54,27,0,315,313,1,0,0,0,316,319,1,0,0,0,317,315,1,0,0,0,317,318,1,0,0,
0,318,57,1,0,0,0,319,317,1,0,0,0,320,325,3,56,28,0,321,322,7,3,0,0,322,324,
3,56,28,0,323,321,1,0,0,0,324,327,1,0,0,0,325,323,1,0,0,0,325,326,1,0,0,
0,326,59,1,0,0,0,327,325,1,0,0,0,328,329,5,3,0,0,329,330,3,50,25,0,330,61,
1,0,0,0,331,332,7,5,0,0,332,333,3,58,29,0,333,63,1,0,0,0,334,335,7,6,0,0,
335,336,3,58,29,0,336,65,1,0,0,0,337,338,7,7,0,0,338,339,3,58,29,0,339,67,
1,0,0,0,340,341,7,8,0,0,341,342,3,58,29,0,342,69,1,0,0,0,343,344,7,9,0,0,
344,71,1,0,0,0,345,346,7,10,0,0,346,73,1,0,0,0,347,348,7,11,0,0,348,75,1,
0,0,0,349,350,7,12,0,0,350,77,1,0,0,0,351,352,7,13,0,0,352,79,1,0,0,0,353,
354,5,48,0,0,354,81,1,0,0,0,355,356,5,49,0,0,356,357,5,56,0,0,357,83,1,0,
0,0,358,359,5,50,0,0,359,360,3,58,29,0,360,361,3,58,29,0,361,85,1,0,0,0,
362,363,5,51,0,0,363,364,3,58,29,0,364,87,1,0,0,0,365,366,5,52,0,0,366,367,
5,6,0,0,367,368,3,50,25,0,368,369,3,58,29,0,369,370,3,58,29,0,370,371,3,
58,29,0,371,372,5,7,0,0,372,373,3,16,8,0,373,89,1,0,0,0,374,375,5,53,0,0,
375,376,3,58,29,0,376,91,1,0,0,0,377,378,5,54,0,0,378,379,3,58,29,0,379,
93,1,0,0,0,380,381,5,55,0,0,381,382,3,58,29,0,382,95,1,0,0,0,383,384,5,58,
0,0,384,97,1,0,0,0,385,386,5,59,0,0,386,99,1,0,0,0,28,101,106,109,116,119,
124,127,148,154,162,166,169,174,184,197,207,224,262,270,275,279,287,289,
299,304,310,317,325];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class LogiXParser extends antlr4.Parser {

    static grammarFileName = "LogiX.g4";
    static literalNames = [ null, "'to'", "'end'", "':'", "','", "'powtorz'", 
                            "'['", "']'", "'jesli'", "'<'", "'>'", "'='", 
                            "'<='", "'>='", "'wypisz'", "'pierwszy'", "'glowa'", 
                            "'ogon'", "'ostatni'", "'element'", "'elementww'", 
                            "'wybierz'", "'usun'", "'unikalna'", "', '", 
                            "'+'", "'-'", "'*'", "'/'", "'np'", "'naprzod'", 
                            "'ws'", "'wstecz'", "'pw'", "'prawo'", "'lw'", 
                            "'lewo'", "'wy'", "'wyczysc'", "'wyczyscekran'", 
                            "'pb'", "'podniesbobra'", "'ob'", "'opuscbobra'", 
                            "'sb'", "'schowajbobra'", "'ub'", "'ukazbobra'", 
                            "'dom'", "'napis'", "'ustaw'", "'losowo'", "'dla'", 
                            "'kwadrat'", "'trojkat'", "'kolo'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             "LITERAL_WYRAZU", "LANCUCH", "CYFRA", "KOMENTARZ", 
                             "EOL", "BIALY_ZNAK" ];
    static ruleNames = [ "prog", "linia", "polecenia", "wywolanieProcedury", 
                         "deklaracjaProcedury", "deklaracjeParametrow", 
                         "func_", "powtorz", "blok", "jesli", "porownanie", 
                         "operatorPorownania", "wypisz_", "pierwszy", "glowa", 
                         "ogon", "ostatni", "element", "elementWielowymiaru", 
                         "wybierz", "usun", "unikalna", "lista", "mdlista", 
                         "lancuchZnakowy", "nazwa", "wartosc", "wyrazenieZnaku", 
                         "wielokrotneWyrazenie", "wyrazenie", "odwolanie", 
                         "np", "ws", "pw", "lw", "wy", "pb", "ob", "sb", 
                         "ub", "dom", "napis", "ustaw", "losowo", "dla", 
                         "kwadrat", "trojkat", "kolo", "liczba", "komentarz" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = LogiXParser.ruleNames;
        this.literalNames = LogiXParser.literalNames;
        this.symbolicNames = LogiXParser.symbolicNames;
    }



	prog() {
	    let localctx = new ProgContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, LogiXParser.RULE_prog);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 104; 
	        this._errHandler.sync(this);
	        var _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 101;
	        		this._errHandler.sync(this);
	        		_la = this._input.LA(1);
	        		if((((_la) & ~0x1f) === 0 && ((1 << _la) & 3758113058) !== 0) || ((((_la - 32)) & ~0x1f) === 0 && ((1 << (_la - 32)) & 184025087) !== 0)) {
	        		    this.state = 100;
	        		    this.linia();
	        		}

	        		this.state = 103;
	        		this.match(LogiXParser.EOL);
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 106; 
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,1, this._ctx);
	        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
	        this.state = 109;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 3758113058) !== 0) || ((((_la - 32)) & ~0x1f) === 0 && ((1 << (_la - 32)) & 184025087) !== 0)) {
	            this.state = 108;
	            this.linia();
	        }

	        this.state = 111;
	        this.match(LogiXParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	linia() {
	    let localctx = new LiniaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, LogiXParser.RULE_linia);
	    var _la = 0;
	    try {
	        this.state = 127;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 5:
	        case 8:
	        case 29:
	        case 30:
	        case 31:
	        case 32:
	        case 33:
	        case 34:
	        case 35:
	        case 36:
	        case 37:
	        case 38:
	        case 39:
	        case 40:
	        case 41:
	        case 42:
	        case 43:
	        case 44:
	        case 45:
	        case 46:
	        case 47:
	        case 48:
	        case 49:
	        case 50:
	        case 52:
	        case 53:
	        case 54:
	        case 55:
	        case 57:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 114; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 113;
	                this.polecenia();
	                this.state = 116; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 3758096672) !== 0) || ((((_la - 32)) & ~0x1f) === 0 && ((1 << (_la - 32)) & 49807359) !== 0));
	            this.state = 119;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===59) {
	                this.state = 118;
	                this.komentarz();
	            }

	            break;
	        case 59:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 121;
	            this.komentarz();
	            break;
	        case 14:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 122;
	            this.wypisz_();
	            this.state = 124;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===59) {
	                this.state = 123;
	                this.komentarz();
	            }

	            break;
	        case 1:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 126;
	            this.deklaracjaProcedury();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	polecenia() {
	    let localctx = new PoleceniaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, LogiXParser.RULE_polecenia);
	    try {
	        this.state = 148;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 5:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 129;
	            this.powtorz();
	            break;
	        case 29:
	        case 30:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 130;
	            this.np();
	            break;
	        case 31:
	        case 32:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 131;
	            this.ws();
	            break;
	        case 33:
	        case 34:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 132;
	            this.pw();
	            break;
	        case 35:
	        case 36:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 133;
	            this.lw();
	            break;
	        case 37:
	        case 38:
	        case 39:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 134;
	            this.wy();
	            break;
	        case 40:
	        case 41:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 135;
	            this.pb();
	            break;
	        case 42:
	        case 43:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 136;
	            this.ob();
	            break;
	        case 44:
	        case 45:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 137;
	            this.sb();
	            break;
	        case 46:
	        case 47:
	            this.enterOuterAlt(localctx, 10);
	            this.state = 138;
	            this.ub();
	            break;
	        case 48:
	            this.enterOuterAlt(localctx, 11);
	            this.state = 139;
	            this.dom();
	            break;
	        case 49:
	            this.enterOuterAlt(localctx, 12);
	            this.state = 140;
	            this.napis();
	            break;
	        case 50:
	            this.enterOuterAlt(localctx, 13);
	            this.state = 141;
	            this.ustaw();
	            break;
	        case 57:
	            this.enterOuterAlt(localctx, 14);
	            this.state = 142;
	            this.wywolanieProcedury();
	            break;
	        case 8:
	            this.enterOuterAlt(localctx, 15);
	            this.state = 143;
	            this.jesli();
	            break;
	        case 52:
	            this.enterOuterAlt(localctx, 16);
	            this.state = 144;
	            this.dla();
	            break;
	        case 53:
	            this.enterOuterAlt(localctx, 17);
	            this.state = 145;
	            this.kwadrat();
	            break;
	        case 54:
	            this.enterOuterAlt(localctx, 18);
	            this.state = 146;
	            this.trojkat();
	            break;
	        case 55:
	            this.enterOuterAlt(localctx, 19);
	            this.state = 147;
	            this.kolo();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	wywolanieProcedury() {
	    let localctx = new WywolanieProceduryContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, LogiXParser.RULE_wywolanieProcedury);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 150;
	        this.nazwa();
	        this.state = 154;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 117407752) !== 0) || _la===51 || _la===58) {
	            this.state = 151;
	            this.wyrazenie();
	            this.state = 156;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	deklaracjaProcedury() {
	    let localctx = new DeklaracjaProceduryContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, LogiXParser.RULE_deklaracjaProcedury);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 157;
	        this.match(LogiXParser.T__0);
	        this.state = 158;
	        this.nazwa();
	        this.state = 162;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===3) {
	            this.state = 159;
	            this.deklaracjeParametrow();
	            this.state = 164;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 166;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,10,this._ctx);
	        if(la_===1) {
	            this.state = 165;
	            this.match(LogiXParser.EOL);

	        }
	        this.state = 172; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 169;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if((((_la) & ~0x1f) === 0 && ((1 << _la) & 3758113058) !== 0) || ((((_la - 32)) & ~0x1f) === 0 && ((1 << (_la - 32)) & 184025087) !== 0)) {
	                this.state = 168;
	                this.linia();
	            }

	            this.state = 171;
	            this.match(LogiXParser.EOL);
	            this.state = 174; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 3758113058) !== 0) || ((((_la - 32)) & ~0x1f) === 0 && ((1 << (_la - 32)) & 452460543) !== 0));
	        this.state = 176;
	        this.match(LogiXParser.T__1);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	deklaracjeParametrow() {
	    let localctx = new DeklaracjeParametrowContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, LogiXParser.RULE_deklaracjeParametrow);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 178;
	        this.match(LogiXParser.T__2);
	        this.state = 179;
	        this.nazwa();
	        this.state = 184;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,13,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 180;
	                this.match(LogiXParser.T__3);
	                this.state = 181;
	                this.deklaracjeParametrow(); 
	            }
	            this.state = 186;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,13,this._ctx);
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	func_() {
	    let localctx = new Func_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, LogiXParser.RULE_func_);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 197;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 51:
	            this.state = 187;
	            this.losowo();
	            break;
	        case 15:
	            this.state = 188;
	            this.pierwszy();
	            break;
	        case 16:
	            this.state = 189;
	            this.glowa();
	            break;
	        case 17:
	            this.state = 190;
	            this.ogon();
	            break;
	        case 18:
	            this.state = 191;
	            this.ostatni();
	            break;
	        case 19:
	            this.state = 192;
	            this.element();
	            break;
	        case 20:
	            this.state = 193;
	            this.elementWielowymiaru();
	            break;
	        case 21:
	            this.state = 194;
	            this.wybierz();
	            break;
	        case 22:
	            this.state = 195;
	            this.usun();
	            break;
	        case 23:
	            this.state = 196;
	            this.unikalna();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	powtorz() {
	    let localctx = new PowtorzContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, LogiXParser.RULE_powtorz);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 199;
	        this.match(LogiXParser.T__4);
	        this.state = 200;
	        this.liczba();
	        this.state = 201;
	        this.blok();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	blok() {
	    let localctx = new BlokContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, LogiXParser.RULE_blok);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 203;
	        this.match(LogiXParser.T__5);
	        this.state = 205; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 204;
	            this.polecenia();
	            this.state = 207; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 3758096672) !== 0) || ((((_la - 32)) & ~0x1f) === 0 && ((1 << (_la - 32)) & 49807359) !== 0));
	        this.state = 209;
	        this.match(LogiXParser.T__6);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	jesli() {
	    let localctx = new JesliContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, LogiXParser.RULE_jesli);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 211;
	        this.match(LogiXParser.T__7);
	        this.state = 212;
	        this.porownanie();
	        this.state = 213;
	        this.blok();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	porownanie() {
	    let localctx = new PorownanieContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, LogiXParser.RULE_porownanie);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 215;
	        this.wyrazenie();
	        this.state = 216;
	        this.operatorPorownania();
	        this.state = 217;
	        this.wyrazenie();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	operatorPorownania() {
	    let localctx = new OperatorPorownaniaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, LogiXParser.RULE_operatorPorownania);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 219;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 15872) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	wypisz_() {
	    let localctx = new Wypisz_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, LogiXParser.RULE_wypisz_);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 221;
	        this.match(LogiXParser.T__13);
	        this.state = 224;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 3:
	        case 15:
	        case 16:
	        case 17:
	        case 18:
	        case 19:
	        case 20:
	        case 21:
	        case 22:
	        case 23:
	        case 25:
	        case 26:
	        case 51:
	        case 56:
	        case 58:
	            this.state = 222;
	            this.wartosc();
	            break;
	        case 6:
	            this.state = 223;
	            this.lancuchZnakowy();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	pierwszy() {
	    let localctx = new PierwszyContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, LogiXParser.RULE_pierwszy);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 226;
	        this.match(LogiXParser.T__14);
	        this.state = 227;
	        this.lista();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	glowa() {
	    let localctx = new GlowaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, LogiXParser.RULE_glowa);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 229;
	        this.match(LogiXParser.T__15);
	        this.state = 230;
	        this.lista();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	ogon() {
	    let localctx = new OgonContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, LogiXParser.RULE_ogon);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 232;
	        this.match(LogiXParser.T__16);
	        this.state = 233;
	        this.lista();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	ostatni() {
	    let localctx = new OstatniContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, LogiXParser.RULE_ostatni);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 235;
	        this.match(LogiXParser.T__17);
	        this.state = 236;
	        this.lista();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	element() {
	    let localctx = new ElementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, LogiXParser.RULE_element);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 238;
	        this.match(LogiXParser.T__18);
	        this.state = 239;
	        this.liczba();
	        this.state = 240;
	        this.lista();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	elementWielowymiaru() {
	    let localctx = new ElementWielowymiaruContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 36, LogiXParser.RULE_elementWielowymiaru);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 242;
	        this.match(LogiXParser.T__19);
	        this.state = 243;
	        this.lista();
	        this.state = 244;
	        this.mdlista();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	wybierz() {
	    let localctx = new WybierzContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 38, LogiXParser.RULE_wybierz);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 246;
	        this.match(LogiXParser.T__20);
	        this.state = 247;
	        this.lista();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	usun() {
	    let localctx = new UsunContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 40, LogiXParser.RULE_usun);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 249;
	        this.match(LogiXParser.T__21);
	        this.state = 250;
	        this.wartosc();
	        this.state = 251;
	        this.lista();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	unikalna() {
	    let localctx = new UnikalnaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 42, LogiXParser.RULE_unikalna);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 253;
	        this.match(LogiXParser.T__22);
	        this.state = 254;
	        this.lista();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	lista() {
	    let localctx = new ListaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 44, LogiXParser.RULE_lista);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 256;
	        this.match(LogiXParser.T__5);
	        this.state = 257;
	        this.wartosc();
	        this.state = 262;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===4 || _la===24) {
	            this.state = 258;
	            _la = this._input.LA(1);
	            if(!(_la===4 || _la===24)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 259;
	            this.wartosc();
	            this.state = 264;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 265;
	        this.match(LogiXParser.T__6);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	mdlista() {
	    let localctx = new MdlistaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 46, LogiXParser.RULE_mdlista);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 267;
	        this.match(LogiXParser.T__5);
	        this.state = 270;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,18,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 268;
	            this.mdlista();
	            break;

	        case 2:
	            this.state = 269;
	            this.lista();
	            break;

	        }
	        this.state = 279;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===4 || _la===24) {
	            this.state = 272;
	            _la = this._input.LA(1);
	            if(!(_la===4 || _la===24)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 275;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,19,this._ctx);
	            switch(la_) {
	            case 1:
	                this.state = 273;
	                this.mdlista();
	                break;

	            case 2:
	                this.state = 274;
	                this.lista();
	                break;

	            }
	            this.state = 281;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 282;
	        this.match(LogiXParser.T__6);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	lancuchZnakowy() {
	    let localctx = new LancuchZnakowyContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 48, LogiXParser.RULE_lancuchZnakowy);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 284;
	        this.match(LogiXParser.T__5);
	        this.state = 289;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 4294967166) !== 0) || ((((_la - 32)) & ~0x1f) === 0 && ((1 << (_la - 32)) & 1073741823) !== 0)) {
	            this.state = 287;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,21,this._ctx);
	            switch(la_) {
	            case 1:
	                this.state = 285;
	                this.lancuchZnakowy();
	                break;

	            case 2:
	                this.state = 286;
	                _la = this._input.LA(1);
	                if(_la<=0 || _la===7) {
	                this._errHandler.recoverInline(this);
	                }
	                else {
	                	this._errHandler.reportMatch(this);
	                    this.consume();
	                }
	                break;

	            }
	            this.state = 291;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 292;
	        this.match(LogiXParser.T__6);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	nazwa() {
	    let localctx = new NazwaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 50, LogiXParser.RULE_nazwa);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 294;
	        this.match(LogiXParser.LANCUCH);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	wartosc() {
	    let localctx = new WartoscContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 52, LogiXParser.RULE_wartosc);
	    try {
	        this.state = 299;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,23,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 296;
	            this.match(LogiXParser.LITERAL_WYRAZU);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 297;
	            this.wyrazenie();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 298;
	            this.odwolanie();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	wyrazenieZnaku() {
	    let localctx = new WyrazenieZnakuContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 54, LogiXParser.RULE_wyrazenieZnaku);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 304;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===25 || _la===26) {
	            this.state = 301;
	            _la = this._input.LA(1);
	            if(!(_la===25 || _la===26)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 306;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 310;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 58:
	            this.state = 307;
	            this.liczba();
	            break;
	        case 3:
	            this.state = 308;
	            this.odwolanie();
	            break;
	        case 15:
	        case 16:
	        case 17:
	        case 18:
	        case 19:
	        case 20:
	        case 21:
	        case 22:
	        case 23:
	        case 51:
	            this.state = 309;
	            this.func_();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	wielokrotneWyrazenie() {
	    let localctx = new WielokrotneWyrazenieContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 56, LogiXParser.RULE_wielokrotneWyrazenie);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 312;
	        this.wyrazenieZnaku();
	        this.state = 317;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,26,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 313;
	                _la = this._input.LA(1);
	                if(!(_la===27 || _la===28)) {
	                this._errHandler.recoverInline(this);
	                }
	                else {
	                	this._errHandler.reportMatch(this);
	                    this.consume();
	                }
	                this.state = 314;
	                this.wyrazenieZnaku(); 
	            }
	            this.state = 319;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,26,this._ctx);
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	wyrazenie() {
	    let localctx = new WyrazenieContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 58, LogiXParser.RULE_wyrazenie);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 320;
	        this.wielokrotneWyrazenie();
	        this.state = 325;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,27,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 321;
	                _la = this._input.LA(1);
	                if(!(_la===25 || _la===26)) {
	                this._errHandler.recoverInline(this);
	                }
	                else {
	                	this._errHandler.reportMatch(this);
	                    this.consume();
	                }
	                this.state = 322;
	                this.wielokrotneWyrazenie(); 
	            }
	            this.state = 327;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,27,this._ctx);
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	odwolanie() {
	    let localctx = new OdwolanieContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 60, LogiXParser.RULE_odwolanie);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 328;
	        this.match(LogiXParser.T__2);
	        this.state = 329;
	        this.nazwa();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	np() {
	    let localctx = new NpContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 62, LogiXParser.RULE_np);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 331;
	        _la = this._input.LA(1);
	        if(!(_la===29 || _la===30)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 332;
	        this.wyrazenie();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	ws() {
	    let localctx = new WsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 64, LogiXParser.RULE_ws);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 334;
	        _la = this._input.LA(1);
	        if(!(_la===31 || _la===32)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 335;
	        this.wyrazenie();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	pw() {
	    let localctx = new PwContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 66, LogiXParser.RULE_pw);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 337;
	        _la = this._input.LA(1);
	        if(!(_la===33 || _la===34)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 338;
	        this.wyrazenie();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	lw() {
	    let localctx = new LwContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 68, LogiXParser.RULE_lw);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 340;
	        _la = this._input.LA(1);
	        if(!(_la===35 || _la===36)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 341;
	        this.wyrazenie();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	wy() {
	    let localctx = new WyContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 70, LogiXParser.RULE_wy);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 343;
	        _la = this._input.LA(1);
	        if(!(((((_la - 37)) & ~0x1f) === 0 && ((1 << (_la - 37)) & 7) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	pb() {
	    let localctx = new PbContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 72, LogiXParser.RULE_pb);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 345;
	        _la = this._input.LA(1);
	        if(!(_la===40 || _la===41)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	ob() {
	    let localctx = new ObContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 74, LogiXParser.RULE_ob);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 347;
	        _la = this._input.LA(1);
	        if(!(_la===42 || _la===43)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	sb() {
	    let localctx = new SbContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 76, LogiXParser.RULE_sb);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 349;
	        _la = this._input.LA(1);
	        if(!(_la===44 || _la===45)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	ub() {
	    let localctx = new UbContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 78, LogiXParser.RULE_ub);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 351;
	        _la = this._input.LA(1);
	        if(!(_la===46 || _la===47)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	dom() {
	    let localctx = new DomContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 80, LogiXParser.RULE_dom);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 353;
	        this.match(LogiXParser.T__47);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	napis() {
	    let localctx = new NapisContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 82, LogiXParser.RULE_napis);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 355;
	        this.match(LogiXParser.T__48);
	        this.state = 356;
	        this.match(LogiXParser.LITERAL_WYRAZU);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	ustaw() {
	    let localctx = new UstawContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 84, LogiXParser.RULE_ustaw);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 358;
	        this.match(LogiXParser.T__49);
	        this.state = 359;
	        this.wyrazenie();
	        this.state = 360;
	        this.wyrazenie();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	losowo() {
	    let localctx = new LosowoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 86, LogiXParser.RULE_losowo);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 362;
	        this.match(LogiXParser.T__50);
	        this.state = 363;
	        this.wyrazenie();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	dla() {
	    let localctx = new DlaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 88, LogiXParser.RULE_dla);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 365;
	        this.match(LogiXParser.T__51);
	        this.state = 366;
	        this.match(LogiXParser.T__5);
	        this.state = 367;
	        this.nazwa();
	        this.state = 368;
	        this.wyrazenie();
	        this.state = 369;
	        this.wyrazenie();
	        this.state = 370;
	        this.wyrazenie();
	        this.state = 371;
	        this.match(LogiXParser.T__6);
	        this.state = 372;
	        this.blok();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	kwadrat() {
	    let localctx = new KwadratContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 90, LogiXParser.RULE_kwadrat);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 374;
	        this.match(LogiXParser.T__52);
	        this.state = 375;
	        this.wyrazenie();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	trojkat() {
	    let localctx = new TrojkatContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 92, LogiXParser.RULE_trojkat);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 377;
	        this.match(LogiXParser.T__53);
	        this.state = 378;
	        this.wyrazenie();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	kolo() {
	    let localctx = new KoloContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 94, LogiXParser.RULE_kolo);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 380;
	        this.match(LogiXParser.T__54);
	        this.state = 381;
	        this.wyrazenie();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	liczba() {
	    let localctx = new LiczbaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 96, LogiXParser.RULE_liczba);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 383;
	        this.match(LogiXParser.CYFRA);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	komentarz() {
	    let localctx = new KomentarzContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 98, LogiXParser.RULE_komentarz);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 385;
	        this.match(LogiXParser.KOMENTARZ);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

LogiXParser.EOF = antlr4.Token.EOF;
LogiXParser.T__0 = 1;
LogiXParser.T__1 = 2;
LogiXParser.T__2 = 3;
LogiXParser.T__3 = 4;
LogiXParser.T__4 = 5;
LogiXParser.T__5 = 6;
LogiXParser.T__6 = 7;
LogiXParser.T__7 = 8;
LogiXParser.T__8 = 9;
LogiXParser.T__9 = 10;
LogiXParser.T__10 = 11;
LogiXParser.T__11 = 12;
LogiXParser.T__12 = 13;
LogiXParser.T__13 = 14;
LogiXParser.T__14 = 15;
LogiXParser.T__15 = 16;
LogiXParser.T__16 = 17;
LogiXParser.T__17 = 18;
LogiXParser.T__18 = 19;
LogiXParser.T__19 = 20;
LogiXParser.T__20 = 21;
LogiXParser.T__21 = 22;
LogiXParser.T__22 = 23;
LogiXParser.T__23 = 24;
LogiXParser.T__24 = 25;
LogiXParser.T__25 = 26;
LogiXParser.T__26 = 27;
LogiXParser.T__27 = 28;
LogiXParser.T__28 = 29;
LogiXParser.T__29 = 30;
LogiXParser.T__30 = 31;
LogiXParser.T__31 = 32;
LogiXParser.T__32 = 33;
LogiXParser.T__33 = 34;
LogiXParser.T__34 = 35;
LogiXParser.T__35 = 36;
LogiXParser.T__36 = 37;
LogiXParser.T__37 = 38;
LogiXParser.T__38 = 39;
LogiXParser.T__39 = 40;
LogiXParser.T__40 = 41;
LogiXParser.T__41 = 42;
LogiXParser.T__42 = 43;
LogiXParser.T__43 = 44;
LogiXParser.T__44 = 45;
LogiXParser.T__45 = 46;
LogiXParser.T__46 = 47;
LogiXParser.T__47 = 48;
LogiXParser.T__48 = 49;
LogiXParser.T__49 = 50;
LogiXParser.T__50 = 51;
LogiXParser.T__51 = 52;
LogiXParser.T__52 = 53;
LogiXParser.T__53 = 54;
LogiXParser.T__54 = 55;
LogiXParser.LITERAL_WYRAZU = 56;
LogiXParser.LANCUCH = 57;
LogiXParser.CYFRA = 58;
LogiXParser.KOMENTARZ = 59;
LogiXParser.EOL = 60;
LogiXParser.BIALY_ZNAK = 61;

LogiXParser.RULE_prog = 0;
LogiXParser.RULE_linia = 1;
LogiXParser.RULE_polecenia = 2;
LogiXParser.RULE_wywolanieProcedury = 3;
LogiXParser.RULE_deklaracjaProcedury = 4;
LogiXParser.RULE_deklaracjeParametrow = 5;
LogiXParser.RULE_func_ = 6;
LogiXParser.RULE_powtorz = 7;
LogiXParser.RULE_blok = 8;
LogiXParser.RULE_jesli = 9;
LogiXParser.RULE_porownanie = 10;
LogiXParser.RULE_operatorPorownania = 11;
LogiXParser.RULE_wypisz_ = 12;
LogiXParser.RULE_pierwszy = 13;
LogiXParser.RULE_glowa = 14;
LogiXParser.RULE_ogon = 15;
LogiXParser.RULE_ostatni = 16;
LogiXParser.RULE_element = 17;
LogiXParser.RULE_elementWielowymiaru = 18;
LogiXParser.RULE_wybierz = 19;
LogiXParser.RULE_usun = 20;
LogiXParser.RULE_unikalna = 21;
LogiXParser.RULE_lista = 22;
LogiXParser.RULE_mdlista = 23;
LogiXParser.RULE_lancuchZnakowy = 24;
LogiXParser.RULE_nazwa = 25;
LogiXParser.RULE_wartosc = 26;
LogiXParser.RULE_wyrazenieZnaku = 27;
LogiXParser.RULE_wielokrotneWyrazenie = 28;
LogiXParser.RULE_wyrazenie = 29;
LogiXParser.RULE_odwolanie = 30;
LogiXParser.RULE_np = 31;
LogiXParser.RULE_ws = 32;
LogiXParser.RULE_pw = 33;
LogiXParser.RULE_lw = 34;
LogiXParser.RULE_wy = 35;
LogiXParser.RULE_pb = 36;
LogiXParser.RULE_ob = 37;
LogiXParser.RULE_sb = 38;
LogiXParser.RULE_ub = 39;
LogiXParser.RULE_dom = 40;
LogiXParser.RULE_napis = 41;
LogiXParser.RULE_ustaw = 42;
LogiXParser.RULE_losowo = 43;
LogiXParser.RULE_dla = 44;
LogiXParser.RULE_kwadrat = 45;
LogiXParser.RULE_trojkat = 46;
LogiXParser.RULE_kolo = 47;
LogiXParser.RULE_liczba = 48;
LogiXParser.RULE_komentarz = 49;

class ProgContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LogiXParser.RULE_prog;
    }

	EOF() {
	    return this.getToken(LogiXParser.EOF, 0);
	};

	EOL = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(LogiXParser.EOL);
	    } else {
	        return this.getToken(LogiXParser.EOL, i);
	    }
	};


	linia = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(LiniaContext);
	    } else {
	        return this.getTypedRuleContext(LiniaContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof LogiXListener ) {
	        listener.enterProg(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LogiXListener ) {
	        listener.exitProg(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LogiXVisitor ) {
	        return visitor.visitProg(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class LiniaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LogiXParser.RULE_linia;
    }

	polecenia = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(PoleceniaContext);
	    } else {
	        return this.getTypedRuleContext(PoleceniaContext,i);
	    }
	};

	komentarz() {
	    return this.getTypedRuleContext(KomentarzContext,0);
	};

	wypisz_() {
	    return this.getTypedRuleContext(Wypisz_Context,0);
	};

	deklaracjaProcedury() {
	    return this.getTypedRuleContext(DeklaracjaProceduryContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LogiXListener ) {
	        listener.enterLinia(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LogiXListener ) {
	        listener.exitLinia(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LogiXVisitor ) {
	        return visitor.visitLinia(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class PoleceniaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LogiXParser.RULE_polecenia;
    }

	powtorz() {
	    return this.getTypedRuleContext(PowtorzContext,0);
	};

	np() {
	    return this.getTypedRuleContext(NpContext,0);
	};

	ws() {
	    return this.getTypedRuleContext(WsContext,0);
	};

	pw() {
	    return this.getTypedRuleContext(PwContext,0);
	};

	lw() {
	    return this.getTypedRuleContext(LwContext,0);
	};

	wy() {
	    return this.getTypedRuleContext(WyContext,0);
	};

	pb() {
	    return this.getTypedRuleContext(PbContext,0);
	};

	ob() {
	    return this.getTypedRuleContext(ObContext,0);
	};

	sb() {
	    return this.getTypedRuleContext(SbContext,0);
	};

	ub() {
	    return this.getTypedRuleContext(UbContext,0);
	};

	dom() {
	    return this.getTypedRuleContext(DomContext,0);
	};

	napis() {
	    return this.getTypedRuleContext(NapisContext,0);
	};

	ustaw() {
	    return this.getTypedRuleContext(UstawContext,0);
	};

	wywolanieProcedury() {
	    return this.getTypedRuleContext(WywolanieProceduryContext,0);
	};

	jesli() {
	    return this.getTypedRuleContext(JesliContext,0);
	};

	dla() {
	    return this.getTypedRuleContext(DlaContext,0);
	};

	kwadrat() {
	    return this.getTypedRuleContext(KwadratContext,0);
	};

	trojkat() {
	    return this.getTypedRuleContext(TrojkatContext,0);
	};

	kolo() {
	    return this.getTypedRuleContext(KoloContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LogiXListener ) {
	        listener.enterPolecenia(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LogiXListener ) {
	        listener.exitPolecenia(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LogiXVisitor ) {
	        return visitor.visitPolecenia(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class WywolanieProceduryContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LogiXParser.RULE_wywolanieProcedury;
    }

	nazwa() {
	    return this.getTypedRuleContext(NazwaContext,0);
	};

	wyrazenie = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(WyrazenieContext);
	    } else {
	        return this.getTypedRuleContext(WyrazenieContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof LogiXListener ) {
	        listener.enterWywolanieProcedury(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LogiXListener ) {
	        listener.exitWywolanieProcedury(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LogiXVisitor ) {
	        return visitor.visitWywolanieProcedury(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class DeklaracjaProceduryContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LogiXParser.RULE_deklaracjaProcedury;
    }

	nazwa() {
	    return this.getTypedRuleContext(NazwaContext,0);
	};

	deklaracjeParametrow = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(DeklaracjeParametrowContext);
	    } else {
	        return this.getTypedRuleContext(DeklaracjeParametrowContext,i);
	    }
	};

	EOL = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(LogiXParser.EOL);
	    } else {
	        return this.getToken(LogiXParser.EOL, i);
	    }
	};


	linia = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(LiniaContext);
	    } else {
	        return this.getTypedRuleContext(LiniaContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof LogiXListener ) {
	        listener.enterDeklaracjaProcedury(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LogiXListener ) {
	        listener.exitDeklaracjaProcedury(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LogiXVisitor ) {
	        return visitor.visitDeklaracjaProcedury(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class DeklaracjeParametrowContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LogiXParser.RULE_deklaracjeParametrow;
    }

	nazwa() {
	    return this.getTypedRuleContext(NazwaContext,0);
	};

	deklaracjeParametrow = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(DeklaracjeParametrowContext);
	    } else {
	        return this.getTypedRuleContext(DeklaracjeParametrowContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof LogiXListener ) {
	        listener.enterDeklaracjeParametrow(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LogiXListener ) {
	        listener.exitDeklaracjeParametrow(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LogiXVisitor ) {
	        return visitor.visitDeklaracjeParametrow(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Func_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LogiXParser.RULE_func_;
    }

	losowo() {
	    return this.getTypedRuleContext(LosowoContext,0);
	};

	pierwszy() {
	    return this.getTypedRuleContext(PierwszyContext,0);
	};

	glowa() {
	    return this.getTypedRuleContext(GlowaContext,0);
	};

	ogon() {
	    return this.getTypedRuleContext(OgonContext,0);
	};

	ostatni() {
	    return this.getTypedRuleContext(OstatniContext,0);
	};

	element() {
	    return this.getTypedRuleContext(ElementContext,0);
	};

	elementWielowymiaru() {
	    return this.getTypedRuleContext(ElementWielowymiaruContext,0);
	};

	wybierz() {
	    return this.getTypedRuleContext(WybierzContext,0);
	};

	usun() {
	    return this.getTypedRuleContext(UsunContext,0);
	};

	unikalna() {
	    return this.getTypedRuleContext(UnikalnaContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LogiXListener ) {
	        listener.enterFunc_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LogiXListener ) {
	        listener.exitFunc_(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LogiXVisitor ) {
	        return visitor.visitFunc_(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class PowtorzContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LogiXParser.RULE_powtorz;
    }

	liczba() {
	    return this.getTypedRuleContext(LiczbaContext,0);
	};

	blok() {
	    return this.getTypedRuleContext(BlokContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LogiXListener ) {
	        listener.enterPowtorz(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LogiXListener ) {
	        listener.exitPowtorz(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LogiXVisitor ) {
	        return visitor.visitPowtorz(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class BlokContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LogiXParser.RULE_blok;
    }

	polecenia = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(PoleceniaContext);
	    } else {
	        return this.getTypedRuleContext(PoleceniaContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof LogiXListener ) {
	        listener.enterBlok(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LogiXListener ) {
	        listener.exitBlok(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LogiXVisitor ) {
	        return visitor.visitBlok(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class JesliContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LogiXParser.RULE_jesli;
    }

	porownanie() {
	    return this.getTypedRuleContext(PorownanieContext,0);
	};

	blok() {
	    return this.getTypedRuleContext(BlokContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LogiXListener ) {
	        listener.enterJesli(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LogiXListener ) {
	        listener.exitJesli(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LogiXVisitor ) {
	        return visitor.visitJesli(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class PorownanieContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LogiXParser.RULE_porownanie;
    }

	wyrazenie = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(WyrazenieContext);
	    } else {
	        return this.getTypedRuleContext(WyrazenieContext,i);
	    }
	};

	operatorPorownania() {
	    return this.getTypedRuleContext(OperatorPorownaniaContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LogiXListener ) {
	        listener.enterPorownanie(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LogiXListener ) {
	        listener.exitPorownanie(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LogiXVisitor ) {
	        return visitor.visitPorownanie(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class OperatorPorownaniaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LogiXParser.RULE_operatorPorownania;
    }


	enterRule(listener) {
	    if(listener instanceof LogiXListener ) {
	        listener.enterOperatorPorownania(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LogiXListener ) {
	        listener.exitOperatorPorownania(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LogiXVisitor ) {
	        return visitor.visitOperatorPorownania(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Wypisz_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LogiXParser.RULE_wypisz_;
    }

	wartosc() {
	    return this.getTypedRuleContext(WartoscContext,0);
	};

	lancuchZnakowy() {
	    return this.getTypedRuleContext(LancuchZnakowyContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LogiXListener ) {
	        listener.enterWypisz_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LogiXListener ) {
	        listener.exitWypisz_(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LogiXVisitor ) {
	        return visitor.visitWypisz_(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class PierwszyContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LogiXParser.RULE_pierwszy;
    }

	lista() {
	    return this.getTypedRuleContext(ListaContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LogiXListener ) {
	        listener.enterPierwszy(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LogiXListener ) {
	        listener.exitPierwszy(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LogiXVisitor ) {
	        return visitor.visitPierwszy(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class GlowaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LogiXParser.RULE_glowa;
    }

	lista() {
	    return this.getTypedRuleContext(ListaContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LogiXListener ) {
	        listener.enterGlowa(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LogiXListener ) {
	        listener.exitGlowa(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LogiXVisitor ) {
	        return visitor.visitGlowa(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class OgonContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LogiXParser.RULE_ogon;
    }

	lista() {
	    return this.getTypedRuleContext(ListaContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LogiXListener ) {
	        listener.enterOgon(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LogiXListener ) {
	        listener.exitOgon(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LogiXVisitor ) {
	        return visitor.visitOgon(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class OstatniContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LogiXParser.RULE_ostatni;
    }

	lista() {
	    return this.getTypedRuleContext(ListaContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LogiXListener ) {
	        listener.enterOstatni(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LogiXListener ) {
	        listener.exitOstatni(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LogiXVisitor ) {
	        return visitor.visitOstatni(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ElementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LogiXParser.RULE_element;
    }

	liczba() {
	    return this.getTypedRuleContext(LiczbaContext,0);
	};

	lista() {
	    return this.getTypedRuleContext(ListaContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LogiXListener ) {
	        listener.enterElement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LogiXListener ) {
	        listener.exitElement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LogiXVisitor ) {
	        return visitor.visitElement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ElementWielowymiaruContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LogiXParser.RULE_elementWielowymiaru;
    }

	lista() {
	    return this.getTypedRuleContext(ListaContext,0);
	};

	mdlista() {
	    return this.getTypedRuleContext(MdlistaContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LogiXListener ) {
	        listener.enterElementWielowymiaru(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LogiXListener ) {
	        listener.exitElementWielowymiaru(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LogiXVisitor ) {
	        return visitor.visitElementWielowymiaru(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class WybierzContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LogiXParser.RULE_wybierz;
    }

	lista() {
	    return this.getTypedRuleContext(ListaContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LogiXListener ) {
	        listener.enterWybierz(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LogiXListener ) {
	        listener.exitWybierz(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LogiXVisitor ) {
	        return visitor.visitWybierz(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class UsunContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LogiXParser.RULE_usun;
    }

	wartosc() {
	    return this.getTypedRuleContext(WartoscContext,0);
	};

	lista() {
	    return this.getTypedRuleContext(ListaContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LogiXListener ) {
	        listener.enterUsun(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LogiXListener ) {
	        listener.exitUsun(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LogiXVisitor ) {
	        return visitor.visitUsun(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class UnikalnaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LogiXParser.RULE_unikalna;
    }

	lista() {
	    return this.getTypedRuleContext(ListaContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LogiXListener ) {
	        listener.enterUnikalna(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LogiXListener ) {
	        listener.exitUnikalna(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LogiXVisitor ) {
	        return visitor.visitUnikalna(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ListaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LogiXParser.RULE_lista;
    }

	wartosc = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(WartoscContext);
	    } else {
	        return this.getTypedRuleContext(WartoscContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof LogiXListener ) {
	        listener.enterLista(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LogiXListener ) {
	        listener.exitLista(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LogiXVisitor ) {
	        return visitor.visitLista(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class MdlistaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LogiXParser.RULE_mdlista;
    }

	mdlista = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(MdlistaContext);
	    } else {
	        return this.getTypedRuleContext(MdlistaContext,i);
	    }
	};

	lista = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ListaContext);
	    } else {
	        return this.getTypedRuleContext(ListaContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof LogiXListener ) {
	        listener.enterMdlista(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LogiXListener ) {
	        listener.exitMdlista(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LogiXVisitor ) {
	        return visitor.visitMdlista(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class LancuchZnakowyContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LogiXParser.RULE_lancuchZnakowy;
    }

	lancuchZnakowy = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(LancuchZnakowyContext);
	    } else {
	        return this.getTypedRuleContext(LancuchZnakowyContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof LogiXListener ) {
	        listener.enterLancuchZnakowy(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LogiXListener ) {
	        listener.exitLancuchZnakowy(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LogiXVisitor ) {
	        return visitor.visitLancuchZnakowy(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class NazwaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LogiXParser.RULE_nazwa;
    }

	LANCUCH() {
	    return this.getToken(LogiXParser.LANCUCH, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LogiXListener ) {
	        listener.enterNazwa(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LogiXListener ) {
	        listener.exitNazwa(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LogiXVisitor ) {
	        return visitor.visitNazwa(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class WartoscContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LogiXParser.RULE_wartosc;
    }

	LITERAL_WYRAZU() {
	    return this.getToken(LogiXParser.LITERAL_WYRAZU, 0);
	};

	wyrazenie() {
	    return this.getTypedRuleContext(WyrazenieContext,0);
	};

	odwolanie() {
	    return this.getTypedRuleContext(OdwolanieContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LogiXListener ) {
	        listener.enterWartosc(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LogiXListener ) {
	        listener.exitWartosc(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LogiXVisitor ) {
	        return visitor.visitWartosc(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class WyrazenieZnakuContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LogiXParser.RULE_wyrazenieZnaku;
    }

	liczba() {
	    return this.getTypedRuleContext(LiczbaContext,0);
	};

	odwolanie() {
	    return this.getTypedRuleContext(OdwolanieContext,0);
	};

	func_() {
	    return this.getTypedRuleContext(Func_Context,0);
	};

	enterRule(listener) {
	    if(listener instanceof LogiXListener ) {
	        listener.enterWyrazenieZnaku(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LogiXListener ) {
	        listener.exitWyrazenieZnaku(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LogiXVisitor ) {
	        return visitor.visitWyrazenieZnaku(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class WielokrotneWyrazenieContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LogiXParser.RULE_wielokrotneWyrazenie;
    }

	wyrazenieZnaku = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(WyrazenieZnakuContext);
	    } else {
	        return this.getTypedRuleContext(WyrazenieZnakuContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof LogiXListener ) {
	        listener.enterWielokrotneWyrazenie(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LogiXListener ) {
	        listener.exitWielokrotneWyrazenie(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LogiXVisitor ) {
	        return visitor.visitWielokrotneWyrazenie(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class WyrazenieContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LogiXParser.RULE_wyrazenie;
    }

	wielokrotneWyrazenie = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(WielokrotneWyrazenieContext);
	    } else {
	        return this.getTypedRuleContext(WielokrotneWyrazenieContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof LogiXListener ) {
	        listener.enterWyrazenie(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LogiXListener ) {
	        listener.exitWyrazenie(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LogiXVisitor ) {
	        return visitor.visitWyrazenie(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class OdwolanieContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LogiXParser.RULE_odwolanie;
    }

	nazwa() {
	    return this.getTypedRuleContext(NazwaContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LogiXListener ) {
	        listener.enterOdwolanie(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LogiXListener ) {
	        listener.exitOdwolanie(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LogiXVisitor ) {
	        return visitor.visitOdwolanie(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class NpContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LogiXParser.RULE_np;
    }

	wyrazenie() {
	    return this.getTypedRuleContext(WyrazenieContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LogiXListener ) {
	        listener.enterNp(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LogiXListener ) {
	        listener.exitNp(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LogiXVisitor ) {
	        return visitor.visitNp(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class WsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LogiXParser.RULE_ws;
    }

	wyrazenie() {
	    return this.getTypedRuleContext(WyrazenieContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LogiXListener ) {
	        listener.enterWs(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LogiXListener ) {
	        listener.exitWs(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LogiXVisitor ) {
	        return visitor.visitWs(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class PwContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LogiXParser.RULE_pw;
    }

	wyrazenie() {
	    return this.getTypedRuleContext(WyrazenieContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LogiXListener ) {
	        listener.enterPw(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LogiXListener ) {
	        listener.exitPw(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LogiXVisitor ) {
	        return visitor.visitPw(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class LwContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LogiXParser.RULE_lw;
    }

	wyrazenie() {
	    return this.getTypedRuleContext(WyrazenieContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LogiXListener ) {
	        listener.enterLw(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LogiXListener ) {
	        listener.exitLw(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LogiXVisitor ) {
	        return visitor.visitLw(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class WyContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LogiXParser.RULE_wy;
    }


	enterRule(listener) {
	    if(listener instanceof LogiXListener ) {
	        listener.enterWy(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LogiXListener ) {
	        listener.exitWy(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LogiXVisitor ) {
	        return visitor.visitWy(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class PbContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LogiXParser.RULE_pb;
    }


	enterRule(listener) {
	    if(listener instanceof LogiXListener ) {
	        listener.enterPb(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LogiXListener ) {
	        listener.exitPb(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LogiXVisitor ) {
	        return visitor.visitPb(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ObContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LogiXParser.RULE_ob;
    }


	enterRule(listener) {
	    if(listener instanceof LogiXListener ) {
	        listener.enterOb(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LogiXListener ) {
	        listener.exitOb(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LogiXVisitor ) {
	        return visitor.visitOb(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SbContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LogiXParser.RULE_sb;
    }


	enterRule(listener) {
	    if(listener instanceof LogiXListener ) {
	        listener.enterSb(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LogiXListener ) {
	        listener.exitSb(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LogiXVisitor ) {
	        return visitor.visitSb(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class UbContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LogiXParser.RULE_ub;
    }


	enterRule(listener) {
	    if(listener instanceof LogiXListener ) {
	        listener.enterUb(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LogiXListener ) {
	        listener.exitUb(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LogiXVisitor ) {
	        return visitor.visitUb(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class DomContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LogiXParser.RULE_dom;
    }


	enterRule(listener) {
	    if(listener instanceof LogiXListener ) {
	        listener.enterDom(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LogiXListener ) {
	        listener.exitDom(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LogiXVisitor ) {
	        return visitor.visitDom(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class NapisContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LogiXParser.RULE_napis;
    }

	LITERAL_WYRAZU() {
	    return this.getToken(LogiXParser.LITERAL_WYRAZU, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LogiXListener ) {
	        listener.enterNapis(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LogiXListener ) {
	        listener.exitNapis(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LogiXVisitor ) {
	        return visitor.visitNapis(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class UstawContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LogiXParser.RULE_ustaw;
    }

	wyrazenie = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(WyrazenieContext);
	    } else {
	        return this.getTypedRuleContext(WyrazenieContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof LogiXListener ) {
	        listener.enterUstaw(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LogiXListener ) {
	        listener.exitUstaw(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LogiXVisitor ) {
	        return visitor.visitUstaw(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class LosowoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LogiXParser.RULE_losowo;
    }

	wyrazenie() {
	    return this.getTypedRuleContext(WyrazenieContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LogiXListener ) {
	        listener.enterLosowo(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LogiXListener ) {
	        listener.exitLosowo(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LogiXVisitor ) {
	        return visitor.visitLosowo(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class DlaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LogiXParser.RULE_dla;
    }

	nazwa() {
	    return this.getTypedRuleContext(NazwaContext,0);
	};

	wyrazenie = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(WyrazenieContext);
	    } else {
	        return this.getTypedRuleContext(WyrazenieContext,i);
	    }
	};

	blok() {
	    return this.getTypedRuleContext(BlokContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LogiXListener ) {
	        listener.enterDla(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LogiXListener ) {
	        listener.exitDla(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LogiXVisitor ) {
	        return visitor.visitDla(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class KwadratContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LogiXParser.RULE_kwadrat;
    }

	wyrazenie() {
	    return this.getTypedRuleContext(WyrazenieContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LogiXListener ) {
	        listener.enterKwadrat(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LogiXListener ) {
	        listener.exitKwadrat(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LogiXVisitor ) {
	        return visitor.visitKwadrat(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class TrojkatContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LogiXParser.RULE_trojkat;
    }

	wyrazenie() {
	    return this.getTypedRuleContext(WyrazenieContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LogiXListener ) {
	        listener.enterTrojkat(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LogiXListener ) {
	        listener.exitTrojkat(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LogiXVisitor ) {
	        return visitor.visitTrojkat(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class KoloContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LogiXParser.RULE_kolo;
    }

	wyrazenie() {
	    return this.getTypedRuleContext(WyrazenieContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LogiXListener ) {
	        listener.enterKolo(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LogiXListener ) {
	        listener.exitKolo(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LogiXVisitor ) {
	        return visitor.visitKolo(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class LiczbaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LogiXParser.RULE_liczba;
    }

	CYFRA() {
	    return this.getToken(LogiXParser.CYFRA, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LogiXListener ) {
	        listener.enterLiczba(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LogiXListener ) {
	        listener.exitLiczba(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LogiXVisitor ) {
	        return visitor.visitLiczba(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class KomentarzContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LogiXParser.RULE_komentarz;
    }

	KOMENTARZ() {
	    return this.getToken(LogiXParser.KOMENTARZ, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LogiXListener ) {
	        listener.enterKomentarz(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LogiXListener ) {
	        listener.exitKomentarz(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LogiXVisitor ) {
	        return visitor.visitKomentarz(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




LogiXParser.ProgContext = ProgContext; 
LogiXParser.LiniaContext = LiniaContext; 
LogiXParser.PoleceniaContext = PoleceniaContext; 
LogiXParser.WywolanieProceduryContext = WywolanieProceduryContext; 
LogiXParser.DeklaracjaProceduryContext = DeklaracjaProceduryContext; 
LogiXParser.DeklaracjeParametrowContext = DeklaracjeParametrowContext; 
LogiXParser.Func_Context = Func_Context; 
LogiXParser.PowtorzContext = PowtorzContext; 
LogiXParser.BlokContext = BlokContext; 
LogiXParser.JesliContext = JesliContext; 
LogiXParser.PorownanieContext = PorownanieContext; 
LogiXParser.OperatorPorownaniaContext = OperatorPorownaniaContext; 
LogiXParser.Wypisz_Context = Wypisz_Context; 
LogiXParser.PierwszyContext = PierwszyContext; 
LogiXParser.GlowaContext = GlowaContext; 
LogiXParser.OgonContext = OgonContext; 
LogiXParser.OstatniContext = OstatniContext; 
LogiXParser.ElementContext = ElementContext; 
LogiXParser.ElementWielowymiaruContext = ElementWielowymiaruContext; 
LogiXParser.WybierzContext = WybierzContext; 
LogiXParser.UsunContext = UsunContext; 
LogiXParser.UnikalnaContext = UnikalnaContext; 
LogiXParser.ListaContext = ListaContext; 
LogiXParser.MdlistaContext = MdlistaContext; 
LogiXParser.LancuchZnakowyContext = LancuchZnakowyContext; 
LogiXParser.NazwaContext = NazwaContext; 
LogiXParser.WartoscContext = WartoscContext; 
LogiXParser.WyrazenieZnakuContext = WyrazenieZnakuContext; 
LogiXParser.WielokrotneWyrazenieContext = WielokrotneWyrazenieContext; 
LogiXParser.WyrazenieContext = WyrazenieContext; 
LogiXParser.OdwolanieContext = OdwolanieContext; 
LogiXParser.NpContext = NpContext; 
LogiXParser.WsContext = WsContext; 
LogiXParser.PwContext = PwContext; 
LogiXParser.LwContext = LwContext; 
LogiXParser.WyContext = WyContext; 
LogiXParser.PbContext = PbContext; 
LogiXParser.ObContext = ObContext; 
LogiXParser.SbContext = SbContext; 
LogiXParser.UbContext = UbContext; 
LogiXParser.DomContext = DomContext; 
LogiXParser.NapisContext = NapisContext; 
LogiXParser.UstawContext = UstawContext; 
LogiXParser.LosowoContext = LosowoContext; 
LogiXParser.DlaContext = DlaContext; 
LogiXParser.KwadratContext = KwadratContext; 
LogiXParser.TrojkatContext = TrojkatContext; 
LogiXParser.KoloContext = KoloContext; 
LogiXParser.LiczbaContext = LiczbaContext; 
LogiXParser.KomentarzContext = KomentarzContext; 
