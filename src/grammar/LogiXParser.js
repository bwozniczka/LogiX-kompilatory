// Generated from LogiX.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import LogiXListener from './LogiXListener.js';
import LogiXVisitor from './LogiXVisitor.js';

const serializedATN = [4,1,51,298,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,2,27,
7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,33,7,33,2,34,7,
34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,1,0,3,0,80,8,0,1,0,4,0,83,8,0,
11,0,12,0,84,1,0,3,0,88,8,0,1,0,1,0,1,1,4,1,93,8,1,11,1,12,1,94,1,1,3,1,
98,8,1,1,1,1,1,1,1,3,1,103,8,1,1,1,3,1,106,8,1,1,2,1,2,1,2,1,2,1,2,1,2,1,
2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,3,2,127,8,2,1,3,1,3,5,
3,131,8,3,10,3,12,3,134,9,3,1,4,1,4,1,4,5,4,139,8,4,10,4,12,4,142,9,4,1,
4,3,4,145,8,4,1,4,3,4,148,8,4,1,4,4,4,151,8,4,11,4,12,4,152,1,4,1,4,1,5,
1,5,1,5,1,5,5,5,161,8,5,10,5,12,5,164,9,5,1,6,1,6,1,7,1,7,1,7,1,7,1,8,1,
8,4,8,174,8,8,11,8,12,8,175,1,8,1,8,1,9,1,9,1,9,1,9,1,10,1,10,1,10,1,10,
1,11,1,11,1,12,1,12,1,12,3,12,193,8,12,1,13,1,13,1,13,5,13,198,8,13,10,13,
12,13,201,9,13,1,13,1,13,1,14,1,14,1,15,1,15,1,15,3,15,210,8,15,1,16,5,16,
213,8,16,10,16,12,16,216,9,16,1,16,1,16,1,16,3,16,221,8,16,1,17,1,17,1,17,
5,17,226,8,17,10,17,12,17,229,9,17,1,18,1,18,1,18,5,18,234,8,18,10,18,12,
18,237,9,18,1,19,1,19,1,19,1,20,1,20,1,20,1,21,1,21,1,21,1,22,1,22,1,22,
1,23,1,23,1,23,1,24,1,24,1,25,1,25,1,26,1,26,1,27,1,27,1,28,1,28,1,29,1,
29,1,30,1,30,1,30,1,31,1,31,1,31,1,31,1,32,1,32,1,32,1,33,1,33,1,33,1,33,
1,33,1,33,1,33,1,33,1,33,1,34,1,34,1,34,1,35,1,35,1,35,1,36,1,36,1,36,1,
37,1,37,1,38,1,38,1,38,0,0,39,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,
32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,0,13,
1,0,10,14,1,0,8,8,1,0,16,17,1,0,18,19,1,0,20,21,1,0,22,23,1,0,24,25,1,0,
26,27,1,0,28,30,1,0,31,32,1,0,33,34,1,0,35,36,1,0,37,38,302,0,82,1,0,0,0,
2,105,1,0,0,0,4,126,1,0,0,0,6,128,1,0,0,0,8,135,1,0,0,0,10,156,1,0,0,0,12,
165,1,0,0,0,14,167,1,0,0,0,16,171,1,0,0,0,18,179,1,0,0,0,20,183,1,0,0,0,
22,187,1,0,0,0,24,189,1,0,0,0,26,194,1,0,0,0,28,204,1,0,0,0,30,209,1,0,0,
0,32,214,1,0,0,0,34,222,1,0,0,0,36,230,1,0,0,0,38,238,1,0,0,0,40,241,1,0,
0,0,42,244,1,0,0,0,44,247,1,0,0,0,46,250,1,0,0,0,48,253,1,0,0,0,50,255,1,
0,0,0,52,257,1,0,0,0,54,259,1,0,0,0,56,261,1,0,0,0,58,263,1,0,0,0,60,265,
1,0,0,0,62,268,1,0,0,0,64,272,1,0,0,0,66,275,1,0,0,0,68,284,1,0,0,0,70,287,
1,0,0,0,72,290,1,0,0,0,74,293,1,0,0,0,76,295,1,0,0,0,78,80,3,2,1,0,79,78,
1,0,0,0,79,80,1,0,0,0,80,81,1,0,0,0,81,83,5,50,0,0,82,79,1,0,0,0,83,84,1,
0,0,0,84,82,1,0,0,0,84,85,1,0,0,0,85,87,1,0,0,0,86,88,3,2,1,0,87,86,1,0,
0,0,87,88,1,0,0,0,88,89,1,0,0,0,89,90,5,0,0,1,90,1,1,0,0,0,91,93,3,4,2,0,
92,91,1,0,0,0,93,94,1,0,0,0,94,92,1,0,0,0,94,95,1,0,0,0,95,97,1,0,0,0,96,
98,3,76,38,0,97,96,1,0,0,0,97,98,1,0,0,0,98,106,1,0,0,0,99,106,3,76,38,0,
100,102,3,24,12,0,101,103,3,76,38,0,102,101,1,0,0,0,102,103,1,0,0,0,103,
106,1,0,0,0,104,106,3,8,4,0,105,92,1,0,0,0,105,99,1,0,0,0,105,100,1,0,0,
0,105,104,1,0,0,0,106,3,1,0,0,0,107,127,3,14,7,0,108,127,3,40,20,0,109,127,
3,42,21,0,110,127,3,44,22,0,111,127,3,46,23,0,112,127,3,48,24,0,113,127,
3,50,25,0,114,127,3,52,26,0,115,127,3,54,27,0,116,127,3,56,28,0,117,127,
3,58,29,0,118,127,3,60,30,0,119,127,3,62,31,0,120,127,3,6,3,0,121,127,3,
18,9,0,122,127,3,66,33,0,123,127,3,68,34,0,124,127,3,70,35,0,125,127,3,72,
36,0,126,107,1,0,0,0,126,108,1,0,0,0,126,109,1,0,0,0,126,110,1,0,0,0,126,
111,1,0,0,0,126,112,1,0,0,0,126,113,1,0,0,0,126,114,1,0,0,0,126,115,1,0,
0,0,126,116,1,0,0,0,126,117,1,0,0,0,126,118,1,0,0,0,126,119,1,0,0,0,126,
120,1,0,0,0,126,121,1,0,0,0,126,122,1,0,0,0,126,123,1,0,0,0,126,124,1,0,
0,0,126,125,1,0,0,0,127,5,1,0,0,0,128,132,3,28,14,0,129,131,3,36,18,0,130,
129,1,0,0,0,131,134,1,0,0,0,132,130,1,0,0,0,132,133,1,0,0,0,133,7,1,0,0,
0,134,132,1,0,0,0,135,136,5,1,0,0,136,140,3,28,14,0,137,139,3,10,5,0,138,
137,1,0,0,0,139,142,1,0,0,0,140,138,1,0,0,0,140,141,1,0,0,0,141,144,1,0,
0,0,142,140,1,0,0,0,143,145,5,50,0,0,144,143,1,0,0,0,144,145,1,0,0,0,145,
150,1,0,0,0,146,148,3,2,1,0,147,146,1,0,0,0,147,148,1,0,0,0,148,149,1,0,
0,0,149,151,5,50,0,0,150,147,1,0,0,0,151,152,1,0,0,0,152,150,1,0,0,0,152,
153,1,0,0,0,153,154,1,0,0,0,154,155,5,2,0,0,155,9,1,0,0,0,156,157,5,3,0,
0,157,162,3,28,14,0,158,159,5,4,0,0,159,161,3,10,5,0,160,158,1,0,0,0,161,
164,1,0,0,0,162,160,1,0,0,0,162,163,1,0,0,0,163,11,1,0,0,0,164,162,1,0,0,
0,165,166,5,5,0,0,166,13,1,0,0,0,167,168,5,6,0,0,168,169,3,74,37,0,169,170,
3,16,8,0,170,15,1,0,0,0,171,173,5,7,0,0,172,174,3,4,2,0,173,172,1,0,0,0,
174,175,1,0,0,0,175,173,1,0,0,0,175,176,1,0,0,0,176,177,1,0,0,0,177,178,
5,8,0,0,178,17,1,0,0,0,179,180,5,9,0,0,180,181,3,20,10,0,181,182,3,16,8,
0,182,19,1,0,0,0,183,184,3,36,18,0,184,185,3,22,11,0,185,186,3,36,18,0,186,
21,1,0,0,0,187,188,7,0,0,0,188,23,1,0,0,0,189,192,5,15,0,0,190,193,3,30,
15,0,191,193,3,26,13,0,192,190,1,0,0,0,192,191,1,0,0,0,193,25,1,0,0,0,194,
199,5,7,0,0,195,198,3,26,13,0,196,198,8,1,0,0,197,195,1,0,0,0,197,196,1,
0,0,0,198,201,1,0,0,0,199,197,1,0,0,0,199,200,1,0,0,0,200,202,1,0,0,0,201,
199,1,0,0,0,202,203,5,8,0,0,203,27,1,0,0,0,204,205,5,47,0,0,205,29,1,0,0,
0,206,210,5,46,0,0,207,210,3,36,18,0,208,210,3,38,19,0,209,206,1,0,0,0,209,
207,1,0,0,0,209,208,1,0,0,0,210,31,1,0,0,0,211,213,7,2,0,0,212,211,1,0,0,
0,213,216,1,0,0,0,214,212,1,0,0,0,214,215,1,0,0,0,215,220,1,0,0,0,216,214,
1,0,0,0,217,221,3,74,37,0,218,221,3,38,19,0,219,221,3,12,6,0,220,217,1,0,
0,0,220,218,1,0,0,0,220,219,1,0,0,0,221,33,1,0,0,0,222,227,3,32,16,0,223,
224,7,3,0,0,224,226,3,32,16,0,225,223,1,0,0,0,226,229,1,0,0,0,227,225,1,
0,0,0,227,228,1,0,0,0,228,35,1,0,0,0,229,227,1,0,0,0,230,235,3,34,17,0,231,
232,7,2,0,0,232,234,3,34,17,0,233,231,1,0,0,0,234,237,1,0,0,0,235,233,1,
0,0,0,235,236,1,0,0,0,236,37,1,0,0,0,237,235,1,0,0,0,238,239,5,3,0,0,239,
240,3,28,14,0,240,39,1,0,0,0,241,242,7,4,0,0,242,243,3,36,18,0,243,41,1,
0,0,0,244,245,7,5,0,0,245,246,3,36,18,0,246,43,1,0,0,0,247,248,7,6,0,0,248,
249,3,36,18,0,249,45,1,0,0,0,250,251,7,7,0,0,251,252,3,36,18,0,252,47,1,
0,0,0,253,254,7,8,0,0,254,49,1,0,0,0,255,256,7,9,0,0,256,51,1,0,0,0,257,
258,7,10,0,0,258,53,1,0,0,0,259,260,7,11,0,0,260,55,1,0,0,0,261,262,7,12,
0,0,262,57,1,0,0,0,263,264,5,39,0,0,264,59,1,0,0,0,265,266,5,40,0,0,266,
267,5,46,0,0,267,61,1,0,0,0,268,269,5,41,0,0,269,270,3,36,18,0,270,271,3,
36,18,0,271,63,1,0,0,0,272,273,5,5,0,0,273,274,3,36,18,0,274,65,1,0,0,0,
275,276,5,42,0,0,276,277,5,7,0,0,277,278,3,28,14,0,278,279,3,36,18,0,279,
280,3,36,18,0,280,281,3,36,18,0,281,282,5,8,0,0,282,283,3,16,8,0,283,67,
1,0,0,0,284,285,5,43,0,0,285,286,3,36,18,0,286,69,1,0,0,0,287,288,5,44,0,
0,288,289,3,36,18,0,289,71,1,0,0,0,290,291,5,45,0,0,291,292,3,36,18,0,292,
73,1,0,0,0,293,294,5,48,0,0,294,75,1,0,0,0,295,296,5,49,0,0,296,77,1,0,0,
0,23,79,84,87,94,97,102,105,126,132,140,144,147,152,162,175,192,197,199,
209,214,220,227,235];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class LogiXParser extends antlr4.Parser {

    static grammarFileName = "LogiX.g4";
    static literalNames = [ null, "'to'", "'end'", "':'", "','", "'losowo'", 
                            "'powtorz'", "'['", "']'", "'jesli'", "'<'", 
                            "'>'", "'='", "'<='", "'>='", "'wypisz'", "'+'", 
                            "'-'", "'*'", "'/'", "'np'", "'naprzod'", "'ws'", 
                            "'wstecz'", "'pw'", "'prawo'", "'lw'", "'lewo'", 
                            "'wy'", "'wyczysc'", "'wyczyscekran'", "'pb'", 
                            "'podniesbobra'", "'ob'", "'opuscbobra'", "'sb'", 
                            "'schowajbobra'", "'ub'", "'ukazbobra'", "'dom'", 
                            "'napis'", "'ustaw'", "'dla'", "'kwadrat'", 
                            "'trojkat'", "'kolo'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, "LITERAL_WYRAZU", 
                             "LANCUCH", "CYFRA", "KOMENTARZ", "EOL", "BIALY_ZNAK" ];
    static ruleNames = [ "prog", "linia", "polecenia", "wywolanieProcedury", 
                         "deklaracjaProcedury", "deklaracjeParametrow", 
                         "func_", "powtorz", "blok", "jesli", "porownanie", 
                         "operatorPorownania", "wypisz_", "lancuchZnakowy", 
                         "nazwa", "wartosc", "wyrazenieZnaku", "wielokrotneWyrazenie", 
                         "wyrazenie", "odwolanie", "np", "ws", "pw", "lw", 
                         "wy", "pb", "ob", "sb", "ub", "dom", "napis", "ustaw", 
                         "losowo", "dla", "kwadrat", "trojkat", "kolo", 
                         "liczba", "komentarz" ];

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
	        this.state = 82; 
	        this._errHandler.sync(this);
	        var _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 79;
	        		this._errHandler.sync(this);
	        		_la = this._input.LA(1);
	        		if((((_la) & ~0x1f) === 0 && ((1 << _la) & 4293952066) !== 0) || ((((_la - 32)) & ~0x1f) === 0 && ((1 << (_la - 32)) & 180223) !== 0)) {
	        		    this.state = 78;
	        		    this.linia();
	        		}

	        		this.state = 81;
	        		this.match(LogiXParser.EOL);
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 84; 
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,1, this._ctx);
	        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
	        this.state = 87;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 4293952066) !== 0) || ((((_la - 32)) & ~0x1f) === 0 && ((1 << (_la - 32)) & 180223) !== 0)) {
	            this.state = 86;
	            this.linia();
	        }

	        this.state = 89;
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
	        this.state = 105;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 6:
	        case 9:
	        case 20:
	        case 21:
	        case 22:
	        case 23:
	        case 24:
	        case 25:
	        case 26:
	        case 27:
	        case 28:
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
	        case 47:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 92; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 91;
	                this.polecenia();
	                this.state = 94; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 4293919296) !== 0) || ((((_la - 32)) & ~0x1f) === 0 && ((1 << (_la - 32)) & 49151) !== 0));
	            this.state = 97;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===49) {
	                this.state = 96;
	                this.komentarz();
	            }

	            break;
	        case 49:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 99;
	            this.komentarz();
	            break;
	        case 15:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 100;
	            this.wypisz_();
	            this.state = 102;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===49) {
	                this.state = 101;
	                this.komentarz();
	            }

	            break;
	        case 1:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 104;
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
	        this.state = 126;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 6:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 107;
	            this.powtorz();
	            break;
	        case 20:
	        case 21:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 108;
	            this.np();
	            break;
	        case 22:
	        case 23:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 109;
	            this.ws();
	            break;
	        case 24:
	        case 25:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 110;
	            this.pw();
	            break;
	        case 26:
	        case 27:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 111;
	            this.lw();
	            break;
	        case 28:
	        case 29:
	        case 30:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 112;
	            this.wy();
	            break;
	        case 31:
	        case 32:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 113;
	            this.pb();
	            break;
	        case 33:
	        case 34:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 114;
	            this.ob();
	            break;
	        case 35:
	        case 36:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 115;
	            this.sb();
	            break;
	        case 37:
	        case 38:
	            this.enterOuterAlt(localctx, 10);
	            this.state = 116;
	            this.ub();
	            break;
	        case 39:
	            this.enterOuterAlt(localctx, 11);
	            this.state = 117;
	            this.dom();
	            break;
	        case 40:
	            this.enterOuterAlt(localctx, 12);
	            this.state = 118;
	            this.napis();
	            break;
	        case 41:
	            this.enterOuterAlt(localctx, 13);
	            this.state = 119;
	            this.ustaw();
	            break;
	        case 47:
	            this.enterOuterAlt(localctx, 14);
	            this.state = 120;
	            this.wywolanieProcedury();
	            break;
	        case 9:
	            this.enterOuterAlt(localctx, 15);
	            this.state = 121;
	            this.jesli();
	            break;
	        case 42:
	            this.enterOuterAlt(localctx, 16);
	            this.state = 122;
	            this.dla();
	            break;
	        case 43:
	            this.enterOuterAlt(localctx, 17);
	            this.state = 123;
	            this.kwadrat();
	            break;
	        case 44:
	            this.enterOuterAlt(localctx, 18);
	            this.state = 124;
	            this.trojkat();
	            break;
	        case 45:
	            this.enterOuterAlt(localctx, 19);
	            this.state = 125;
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
	        this.state = 128;
	        this.nazwa();
	        this.state = 132;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 196648) !== 0) || _la===48) {
	            this.state = 129;
	            this.wyrazenie();
	            this.state = 134;
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
	        this.state = 135;
	        this.match(LogiXParser.T__0);
	        this.state = 136;
	        this.nazwa();
	        this.state = 140;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===3) {
	            this.state = 137;
	            this.deklaracjeParametrow();
	            this.state = 142;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 144;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,10,this._ctx);
	        if(la_===1) {
	            this.state = 143;
	            this.match(LogiXParser.EOL);

	        }
	        this.state = 150; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 147;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if((((_la) & ~0x1f) === 0 && ((1 << _la) & 4293952066) !== 0) || ((((_la - 32)) & ~0x1f) === 0 && ((1 << (_la - 32)) & 180223) !== 0)) {
	                this.state = 146;
	                this.linia();
	            }

	            this.state = 149;
	            this.match(LogiXParser.EOL);
	            this.state = 152; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 4293952066) !== 0) || ((((_la - 32)) & ~0x1f) === 0 && ((1 << (_la - 32)) & 442367) !== 0));
	        this.state = 154;
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
	        this.state = 156;
	        this.match(LogiXParser.T__2);
	        this.state = 157;
	        this.nazwa();
	        this.state = 162;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,13,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 158;
	                this.match(LogiXParser.T__3);
	                this.state = 159;
	                this.deklaracjeParametrow(); 
	            }
	            this.state = 164;
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
	        this.state = 165;
	        this.match(LogiXParser.T__4);
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
	        this.state = 167;
	        this.match(LogiXParser.T__5);
	        this.state = 168;
	        this.liczba();
	        this.state = 169;
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
	        this.state = 171;
	        this.match(LogiXParser.T__6);
	        this.state = 173; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 172;
	            this.polecenia();
	            this.state = 175; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 4293919296) !== 0) || ((((_la - 32)) & ~0x1f) === 0 && ((1 << (_la - 32)) & 49151) !== 0));
	        this.state = 177;
	        this.match(LogiXParser.T__7);
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
	        this.state = 179;
	        this.match(LogiXParser.T__8);
	        this.state = 180;
	        this.porownanie();
	        this.state = 181;
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
	        this.state = 183;
	        this.wyrazenie();
	        this.state = 184;
	        this.operatorPorownania();
	        this.state = 185;
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
	        this.state = 187;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 31744) !== 0))) {
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
	        this.state = 189;
	        this.match(LogiXParser.T__14);
	        this.state = 192;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 3:
	        case 5:
	        case 16:
	        case 17:
	        case 46:
	        case 48:
	            this.state = 190;
	            this.wartosc();
	            break;
	        case 7:
	            this.state = 191;
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



	lancuchZnakowy() {
	    let localctx = new LancuchZnakowyContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, LogiXParser.RULE_lancuchZnakowy);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 194;
	        this.match(LogiXParser.T__6);
	        this.state = 199;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 4294967038) !== 0) || ((((_la - 32)) & ~0x1f) === 0 && ((1 << (_la - 32)) & 1048575) !== 0)) {
	            this.state = 197;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,16,this._ctx);
	            switch(la_) {
	            case 1:
	                this.state = 195;
	                this.lancuchZnakowy();
	                break;

	            case 2:
	                this.state = 196;
	                _la = this._input.LA(1);
	                if(_la<=0 || _la===8) {
	                this._errHandler.recoverInline(this);
	                }
	                else {
	                	this._errHandler.reportMatch(this);
	                    this.consume();
	                }
	                break;

	            }
	            this.state = 201;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 202;
	        this.match(LogiXParser.T__7);
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
	    this.enterRule(localctx, 28, LogiXParser.RULE_nazwa);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 204;
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
	    this.enterRule(localctx, 30, LogiXParser.RULE_wartosc);
	    try {
	        this.state = 209;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,18,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 206;
	            this.match(LogiXParser.LITERAL_WYRAZU);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 207;
	            this.wyrazenie();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 208;
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
	    this.enterRule(localctx, 32, LogiXParser.RULE_wyrazenieZnaku);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 214;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===16 || _la===17) {
	            this.state = 211;
	            _la = this._input.LA(1);
	            if(!(_la===16 || _la===17)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 216;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 220;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 48:
	            this.state = 217;
	            this.liczba();
	            break;
	        case 3:
	            this.state = 218;
	            this.odwolanie();
	            break;
	        case 5:
	            this.state = 219;
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
	    this.enterRule(localctx, 34, LogiXParser.RULE_wielokrotneWyrazenie);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 222;
	        this.wyrazenieZnaku();
	        this.state = 227;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===18 || _la===19) {
	            this.state = 223;
	            _la = this._input.LA(1);
	            if(!(_la===18 || _la===19)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 224;
	            this.wyrazenieZnaku();
	            this.state = 229;
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



	wyrazenie() {
	    let localctx = new WyrazenieContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 36, LogiXParser.RULE_wyrazenie);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 230;
	        this.wielokrotneWyrazenie();
	        this.state = 235;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,22,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 231;
	                _la = this._input.LA(1);
	                if(!(_la===16 || _la===17)) {
	                this._errHandler.recoverInline(this);
	                }
	                else {
	                	this._errHandler.reportMatch(this);
	                    this.consume();
	                }
	                this.state = 232;
	                this.wielokrotneWyrazenie(); 
	            }
	            this.state = 237;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,22,this._ctx);
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
	    this.enterRule(localctx, 38, LogiXParser.RULE_odwolanie);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 238;
	        this.match(LogiXParser.T__2);
	        this.state = 239;
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
	    this.enterRule(localctx, 40, LogiXParser.RULE_np);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 241;
	        _la = this._input.LA(1);
	        if(!(_la===20 || _la===21)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 242;
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
	    this.enterRule(localctx, 42, LogiXParser.RULE_ws);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 244;
	        _la = this._input.LA(1);
	        if(!(_la===22 || _la===23)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 245;
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
	    this.enterRule(localctx, 44, LogiXParser.RULE_pw);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 247;
	        _la = this._input.LA(1);
	        if(!(_la===24 || _la===25)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 248;
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
	    this.enterRule(localctx, 46, LogiXParser.RULE_lw);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 250;
	        _la = this._input.LA(1);
	        if(!(_la===26 || _la===27)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 251;
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
	    this.enterRule(localctx, 48, LogiXParser.RULE_wy);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 253;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 1879048192) !== 0))) {
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
	    this.enterRule(localctx, 50, LogiXParser.RULE_pb);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 255;
	        _la = this._input.LA(1);
	        if(!(_la===31 || _la===32)) {
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
	    this.enterRule(localctx, 52, LogiXParser.RULE_ob);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 257;
	        _la = this._input.LA(1);
	        if(!(_la===33 || _la===34)) {
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
	    this.enterRule(localctx, 54, LogiXParser.RULE_sb);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 259;
	        _la = this._input.LA(1);
	        if(!(_la===35 || _la===36)) {
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
	    this.enterRule(localctx, 56, LogiXParser.RULE_ub);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 261;
	        _la = this._input.LA(1);
	        if(!(_la===37 || _la===38)) {
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
	    this.enterRule(localctx, 58, LogiXParser.RULE_dom);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 263;
	        this.match(LogiXParser.T__38);
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
	    this.enterRule(localctx, 60, LogiXParser.RULE_napis);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 265;
	        this.match(LogiXParser.T__39);
	        this.state = 266;
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
	    this.enterRule(localctx, 62, LogiXParser.RULE_ustaw);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 268;
	        this.match(LogiXParser.T__40);
	        this.state = 269;
	        this.wyrazenie();
	        this.state = 270;
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
	    this.enterRule(localctx, 64, LogiXParser.RULE_losowo);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 272;
	        this.match(LogiXParser.T__4);
	        this.state = 273;
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
	    this.enterRule(localctx, 66, LogiXParser.RULE_dla);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 275;
	        this.match(LogiXParser.T__41);
	        this.state = 276;
	        this.match(LogiXParser.T__6);
	        this.state = 277;
	        this.nazwa();
	        this.state = 278;
	        this.wyrazenie();
	        this.state = 279;
	        this.wyrazenie();
	        this.state = 280;
	        this.wyrazenie();
	        this.state = 281;
	        this.match(LogiXParser.T__7);
	        this.state = 282;
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
	    this.enterRule(localctx, 68, LogiXParser.RULE_kwadrat);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 284;
	        this.match(LogiXParser.T__42);
	        this.state = 285;
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
	    this.enterRule(localctx, 70, LogiXParser.RULE_trojkat);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 287;
	        this.match(LogiXParser.T__43);
	        this.state = 288;
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
	    this.enterRule(localctx, 72, LogiXParser.RULE_kolo);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 290;
	        this.match(LogiXParser.T__44);
	        this.state = 291;
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
	    this.enterRule(localctx, 74, LogiXParser.RULE_liczba);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 293;
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
	    this.enterRule(localctx, 76, LogiXParser.RULE_komentarz);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 295;
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
LogiXParser.LITERAL_WYRAZU = 46;
LogiXParser.LANCUCH = 47;
LogiXParser.CYFRA = 48;
LogiXParser.KOMENTARZ = 49;
LogiXParser.EOL = 50;
LogiXParser.BIALY_ZNAK = 51;

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
LogiXParser.RULE_lancuchZnakowy = 13;
LogiXParser.RULE_nazwa = 14;
LogiXParser.RULE_wartosc = 15;
LogiXParser.RULE_wyrazenieZnaku = 16;
LogiXParser.RULE_wielokrotneWyrazenie = 17;
LogiXParser.RULE_wyrazenie = 18;
LogiXParser.RULE_odwolanie = 19;
LogiXParser.RULE_np = 20;
LogiXParser.RULE_ws = 21;
LogiXParser.RULE_pw = 22;
LogiXParser.RULE_lw = 23;
LogiXParser.RULE_wy = 24;
LogiXParser.RULE_pb = 25;
LogiXParser.RULE_ob = 26;
LogiXParser.RULE_sb = 27;
LogiXParser.RULE_ub = 28;
LogiXParser.RULE_dom = 29;
LogiXParser.RULE_napis = 30;
LogiXParser.RULE_ustaw = 31;
LogiXParser.RULE_losowo = 32;
LogiXParser.RULE_dla = 33;
LogiXParser.RULE_kwadrat = 34;
LogiXParser.RULE_trojkat = 35;
LogiXParser.RULE_kolo = 36;
LogiXParser.RULE_liczba = 37;
LogiXParser.RULE_komentarz = 38;

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
