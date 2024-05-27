// Generated from LogiX.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import LogiXListener from './LogiXListener.js';
import LogiXVisitor from './LogiXVisitor.js';

const serializedATN = [4,1,51,310,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,2,27,
7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,33,7,33,2,34,7,
34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,2,39,7,39,2,40,7,40,1,0,3,0,84,
8,0,1,0,4,0,87,8,0,11,0,12,0,88,1,0,3,0,92,8,0,1,0,1,0,1,1,4,1,97,8,1,11,
1,12,1,98,1,1,3,1,102,8,1,1,1,1,1,1,1,3,1,107,8,1,1,1,3,1,110,8,1,1,2,1,
2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,
2,1,2,3,2,133,8,2,1,3,1,3,5,3,137,8,3,10,3,12,3,140,9,3,1,4,1,4,1,4,5,4,
145,8,4,10,4,12,4,148,9,4,1,4,3,4,151,8,4,1,4,3,4,154,8,4,1,4,4,4,157,8,
4,11,4,12,4,158,1,4,1,4,1,5,1,5,1,5,1,5,5,5,167,8,5,10,5,12,5,170,9,5,1,
6,1,6,1,7,1,7,1,7,1,7,1,8,1,8,4,8,180,8,8,11,8,12,8,181,1,8,1,8,1,9,1,9,
1,9,1,9,1,10,1,10,1,10,1,10,1,11,1,11,1,12,1,12,1,12,1,12,1,13,1,13,1,13,
3,13,203,8,13,1,14,1,14,1,14,5,14,208,8,14,10,14,12,14,211,9,14,1,14,1,14,
1,15,1,15,1,16,1,16,1,16,3,16,220,8,16,1,17,5,17,223,8,17,10,17,12,17,226,
9,17,1,17,1,17,1,17,3,17,231,8,17,1,18,1,18,1,18,5,18,236,8,18,10,18,12,
18,239,9,18,1,19,1,19,1,19,5,19,244,8,19,10,19,12,19,247,9,19,1,20,1,20,
1,20,1,21,1,21,1,21,1,22,1,22,1,22,1,23,1,23,1,23,1,24,1,24,1,24,1,25,1,
25,1,26,1,26,1,27,1,27,1,28,1,28,1,29,1,29,1,30,1,30,1,31,1,31,1,32,1,32,
1,32,1,33,1,33,1,33,1,33,1,34,1,34,1,34,1,35,1,35,1,35,1,35,1,35,1,35,1,
35,1,35,1,35,1,36,1,36,1,36,1,37,1,37,1,37,1,38,1,38,1,38,1,39,1,39,1,40,
1,40,1,40,0,0,41,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,
40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,0,13,1,0,
10,12,1,0,8,8,1,0,15,16,1,0,17,18,1,0,19,20,1,0,21,22,1,0,23,24,1,0,25,26,
1,0,27,29,1,0,30,31,1,0,32,33,1,0,34,35,1,0,36,37,314,0,86,1,0,0,0,2,109,
1,0,0,0,4,132,1,0,0,0,6,134,1,0,0,0,8,141,1,0,0,0,10,162,1,0,0,0,12,171,
1,0,0,0,14,173,1,0,0,0,16,177,1,0,0,0,18,185,1,0,0,0,20,189,1,0,0,0,22,193,
1,0,0,0,24,195,1,0,0,0,26,199,1,0,0,0,28,204,1,0,0,0,30,214,1,0,0,0,32,219,
1,0,0,0,34,224,1,0,0,0,36,232,1,0,0,0,38,240,1,0,0,0,40,248,1,0,0,0,42,251,
1,0,0,0,44,254,1,0,0,0,46,257,1,0,0,0,48,260,1,0,0,0,50,263,1,0,0,0,52,265,
1,0,0,0,54,267,1,0,0,0,56,269,1,0,0,0,58,271,1,0,0,0,60,273,1,0,0,0,62,275,
1,0,0,0,64,277,1,0,0,0,66,280,1,0,0,0,68,284,1,0,0,0,70,287,1,0,0,0,72,296,
1,0,0,0,74,299,1,0,0,0,76,302,1,0,0,0,78,305,1,0,0,0,80,307,1,0,0,0,82,84,
3,2,1,0,83,82,1,0,0,0,83,84,1,0,0,0,84,85,1,0,0,0,85,87,5,50,0,0,86,83,1,
0,0,0,87,88,1,0,0,0,88,86,1,0,0,0,88,89,1,0,0,0,89,91,1,0,0,0,90,92,3,2,
1,0,91,90,1,0,0,0,91,92,1,0,0,0,92,93,1,0,0,0,93,94,5,0,0,1,94,1,1,0,0,0,
95,97,3,4,2,0,96,95,1,0,0,0,97,98,1,0,0,0,98,96,1,0,0,0,98,99,1,0,0,0,99,
101,1,0,0,0,100,102,3,80,40,0,101,100,1,0,0,0,101,102,1,0,0,0,102,110,1,
0,0,0,103,110,3,80,40,0,104,106,3,26,13,0,105,107,3,80,40,0,106,105,1,0,
0,0,106,107,1,0,0,0,107,110,1,0,0,0,108,110,3,8,4,0,109,96,1,0,0,0,109,103,
1,0,0,0,109,104,1,0,0,0,109,108,1,0,0,0,110,3,1,0,0,0,111,133,3,14,7,0,112,
133,3,42,21,0,113,133,3,44,22,0,114,133,3,46,23,0,115,133,3,48,24,0,116,
133,3,50,25,0,117,133,3,52,26,0,118,133,3,54,27,0,119,133,3,56,28,0,120,
133,3,58,29,0,121,133,3,60,30,0,122,133,3,64,32,0,123,133,3,66,33,0,124,
133,3,24,12,0,125,133,3,6,3,0,126,133,3,18,9,0,127,133,3,62,31,0,128,133,
3,70,35,0,129,133,3,72,36,0,130,133,3,74,37,0,131,133,3,76,38,0,132,111,
1,0,0,0,132,112,1,0,0,0,132,113,1,0,0,0,132,114,1,0,0,0,132,115,1,0,0,0,
132,116,1,0,0,0,132,117,1,0,0,0,132,118,1,0,0,0,132,119,1,0,0,0,132,120,
1,0,0,0,132,121,1,0,0,0,132,122,1,0,0,0,132,123,1,0,0,0,132,124,1,0,0,0,
132,125,1,0,0,0,132,126,1,0,0,0,132,127,1,0,0,0,132,128,1,0,0,0,132,129,
1,0,0,0,132,130,1,0,0,0,132,131,1,0,0,0,133,5,1,0,0,0,134,138,3,30,15,0,
135,137,3,38,19,0,136,135,1,0,0,0,137,140,1,0,0,0,138,136,1,0,0,0,138,139,
1,0,0,0,139,7,1,0,0,0,140,138,1,0,0,0,141,142,5,1,0,0,142,146,3,30,15,0,
143,145,3,10,5,0,144,143,1,0,0,0,145,148,1,0,0,0,146,144,1,0,0,0,146,147,
1,0,0,0,147,150,1,0,0,0,148,146,1,0,0,0,149,151,5,50,0,0,150,149,1,0,0,0,
150,151,1,0,0,0,151,156,1,0,0,0,152,154,3,2,1,0,153,152,1,0,0,0,153,154,
1,0,0,0,154,155,1,0,0,0,155,157,5,50,0,0,156,153,1,0,0,0,157,158,1,0,0,0,
158,156,1,0,0,0,158,159,1,0,0,0,159,160,1,0,0,0,160,161,5,2,0,0,161,9,1,
0,0,0,162,163,5,3,0,0,163,168,3,30,15,0,164,165,5,4,0,0,165,167,3,10,5,0,
166,164,1,0,0,0,167,170,1,0,0,0,168,166,1,0,0,0,168,169,1,0,0,0,169,11,1,
0,0,0,170,168,1,0,0,0,171,172,5,5,0,0,172,13,1,0,0,0,173,174,5,6,0,0,174,
175,3,78,39,0,175,176,3,16,8,0,176,15,1,0,0,0,177,179,5,7,0,0,178,180,3,
4,2,0,179,178,1,0,0,0,180,181,1,0,0,0,181,179,1,0,0,0,181,182,1,0,0,0,182,
183,1,0,0,0,183,184,5,8,0,0,184,17,1,0,0,0,185,186,5,9,0,0,186,187,3,20,
10,0,187,188,3,16,8,0,188,19,1,0,0,0,189,190,3,38,19,0,190,191,3,22,11,0,
191,192,3,38,19,0,192,21,1,0,0,0,193,194,7,0,0,0,194,23,1,0,0,0,195,196,
5,13,0,0,196,197,5,46,0,0,197,198,3,32,16,0,198,25,1,0,0,0,199,202,5,14,
0,0,200,203,3,32,16,0,201,203,3,28,14,0,202,200,1,0,0,0,202,201,1,0,0,0,
203,27,1,0,0,0,204,209,5,7,0,0,205,208,3,28,14,0,206,208,8,1,0,0,207,205,
1,0,0,0,207,206,1,0,0,0,208,211,1,0,0,0,209,207,1,0,0,0,209,210,1,0,0,0,
210,212,1,0,0,0,211,209,1,0,0,0,212,213,5,8,0,0,213,29,1,0,0,0,214,215,5,
47,0,0,215,31,1,0,0,0,216,220,5,46,0,0,217,220,3,38,19,0,218,220,3,40,20,
0,219,216,1,0,0,0,219,217,1,0,0,0,219,218,1,0,0,0,220,33,1,0,0,0,221,223,
7,2,0,0,222,221,1,0,0,0,223,226,1,0,0,0,224,222,1,0,0,0,224,225,1,0,0,0,
225,230,1,0,0,0,226,224,1,0,0,0,227,231,3,78,39,0,228,231,3,40,20,0,229,
231,3,12,6,0,230,227,1,0,0,0,230,228,1,0,0,0,230,229,1,0,0,0,231,35,1,0,
0,0,232,237,3,34,17,0,233,234,7,3,0,0,234,236,3,34,17,0,235,233,1,0,0,0,
236,239,1,0,0,0,237,235,1,0,0,0,237,238,1,0,0,0,238,37,1,0,0,0,239,237,1,
0,0,0,240,245,3,36,18,0,241,242,7,2,0,0,242,244,3,36,18,0,243,241,1,0,0,
0,244,247,1,0,0,0,245,243,1,0,0,0,245,246,1,0,0,0,246,39,1,0,0,0,247,245,
1,0,0,0,248,249,5,3,0,0,249,250,3,30,15,0,250,41,1,0,0,0,251,252,7,4,0,0,
252,253,3,38,19,0,253,43,1,0,0,0,254,255,7,5,0,0,255,256,3,38,19,0,256,45,
1,0,0,0,257,258,7,6,0,0,258,259,3,38,19,0,259,47,1,0,0,0,260,261,7,7,0,0,
261,262,3,38,19,0,262,49,1,0,0,0,263,264,7,8,0,0,264,51,1,0,0,0,265,266,
7,9,0,0,266,53,1,0,0,0,267,268,7,10,0,0,268,55,1,0,0,0,269,270,7,11,0,0,
270,57,1,0,0,0,271,272,7,12,0,0,272,59,1,0,0,0,273,274,5,38,0,0,274,61,1,
0,0,0,275,276,5,39,0,0,276,63,1,0,0,0,277,278,5,40,0,0,278,279,5,46,0,0,
279,65,1,0,0,0,280,281,5,41,0,0,281,282,3,38,19,0,282,283,3,38,19,0,283,
67,1,0,0,0,284,285,5,5,0,0,285,286,3,38,19,0,286,69,1,0,0,0,287,288,5,42,
0,0,288,289,5,7,0,0,289,290,3,30,15,0,290,291,3,38,19,0,291,292,3,38,19,
0,292,293,3,38,19,0,293,294,5,8,0,0,294,295,3,16,8,0,295,71,1,0,0,0,296,
297,5,43,0,0,297,298,3,38,19,0,298,73,1,0,0,0,299,300,5,44,0,0,300,301,3,
38,19,0,301,75,1,0,0,0,302,303,5,45,0,0,303,304,3,38,19,0,304,77,1,0,0,0,
305,306,5,48,0,0,306,79,1,0,0,0,307,308,5,49,0,0,308,81,1,0,0,0,23,83,88,
91,98,101,106,109,132,138,146,150,153,158,168,181,202,207,209,219,224,230,
237,245];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class LogiXParser extends antlr4.Parser {

    static grammarFileName = "LogiX.g4";
    static literalNames = [ null, "'to'", "'end'", "':'", "','", "'losowo'", 
                            "'powtorz'", "'['", "']'", "'jesli'", "'<'", 
                            "'>'", "'='", "'zrob'", "'wypisz'", "'+'", "'-'", 
                            "'*'", "'/'", "'np'", "'naprzod'", "'ws'", "'wstecz'", 
                            "'pw'", "'prawo'", "'lw'", "'lewo'", "'wy'", 
                            "'wyczysc'", "'wyczyscekran'", "'pb'", "'podniesbobra'", 
                            "'ob'", "'opuscbobra'", "'sb'", "'schowajbobra'", 
                            "'ub'", "'ukazbobra'", "'dom'", "'ubop'", "'napis'", 
                            "'ustaw'", "'for'", "'kwadrat'", "'trojkat'", 
                            "'kolo'" ];
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
                         "operatorPorownania", "zrob", "wypisz_", "lancuchZnakowy", 
                         "nazwa", "wartosc", "wyrazenieZnaku", "wielokrotneWyrazenie", 
                         "wyrazenie", "odwolanie", "np", "ws", "pw", "lw", 
                         "wy", "pb", "ob", "sb", "ub", "dom", "ubop", "napis", 
                         "ustaw", "losowo", "dla", "kwadrat", "trojkat", 
                         "kolo", "liczba", "komentarz" ];

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
	        this.state = 86; 
	        this._errHandler.sync(this);
	        var _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 83;
	        		this._errHandler.sync(this);
	        		_la = this._input.LA(1);
	        		if((((_la) & ~0x1f) === 0 && ((1 << _la) & 4294468162) !== 0) || ((((_la - 32)) & ~0x1f) === 0 && ((1 << (_la - 32)) & 180223) !== 0)) {
	        		    this.state = 82;
	        		    this.linia();
	        		}

	        		this.state = 85;
	        		this.match(LogiXParser.EOL);
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 88; 
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,1, this._ctx);
	        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
	        this.state = 91;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 4294468162) !== 0) || ((((_la - 32)) & ~0x1f) === 0 && ((1 << (_la - 32)) & 180223) !== 0)) {
	            this.state = 90;
	            this.linia();
	        }

	        this.state = 93;
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
	        this.state = 109;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 6:
	        case 9:
	        case 13:
	        case 19:
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
	            this.state = 96; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 95;
	                this.polecenia();
	                this.state = 98; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 4294451776) !== 0) || ((((_la - 32)) & ~0x1f) === 0 && ((1 << (_la - 32)) & 49151) !== 0));
	            this.state = 101;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===49) {
	                this.state = 100;
	                this.komentarz();
	            }

	            break;
	        case 49:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 103;
	            this.komentarz();
	            break;
	        case 14:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 104;
	            this.wypisz_();
	            this.state = 106;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===49) {
	                this.state = 105;
	                this.komentarz();
	            }

	            break;
	        case 1:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 108;
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
	        this.state = 132;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 6:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 111;
	            this.powtorz();
	            break;
	        case 19:
	        case 20:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 112;
	            this.np();
	            break;
	        case 21:
	        case 22:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 113;
	            this.ws();
	            break;
	        case 23:
	        case 24:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 114;
	            this.pw();
	            break;
	        case 25:
	        case 26:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 115;
	            this.lw();
	            break;
	        case 27:
	        case 28:
	        case 29:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 116;
	            this.wy();
	            break;
	        case 30:
	        case 31:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 117;
	            this.pb();
	            break;
	        case 32:
	        case 33:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 118;
	            this.ob();
	            break;
	        case 34:
	        case 35:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 119;
	            this.sb();
	            break;
	        case 36:
	        case 37:
	            this.enterOuterAlt(localctx, 10);
	            this.state = 120;
	            this.ub();
	            break;
	        case 38:
	            this.enterOuterAlt(localctx, 11);
	            this.state = 121;
	            this.dom();
	            break;
	        case 40:
	            this.enterOuterAlt(localctx, 12);
	            this.state = 122;
	            this.napis();
	            break;
	        case 41:
	            this.enterOuterAlt(localctx, 13);
	            this.state = 123;
	            this.ustaw();
	            break;
	        case 13:
	            this.enterOuterAlt(localctx, 14);
	            this.state = 124;
	            this.zrob();
	            break;
	        case 47:
	            this.enterOuterAlt(localctx, 15);
	            this.state = 125;
	            this.wywolanieProcedury();
	            break;
	        case 9:
	            this.enterOuterAlt(localctx, 16);
	            this.state = 126;
	            this.jesli();
	            break;
	        case 39:
	            this.enterOuterAlt(localctx, 17);
	            this.state = 127;
	            this.ubop();
	            break;
	        case 42:
	            this.enterOuterAlt(localctx, 18);
	            this.state = 128;
	            this.dla();
	            break;
	        case 43:
	            this.enterOuterAlt(localctx, 19);
	            this.state = 129;
	            this.kwadrat();
	            break;
	        case 44:
	            this.enterOuterAlt(localctx, 20);
	            this.state = 130;
	            this.trojkat();
	            break;
	        case 45:
	            this.enterOuterAlt(localctx, 21);
	            this.state = 131;
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
	        this.state = 134;
	        this.nazwa();
	        this.state = 138;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 98344) !== 0) || _la===48) {
	            this.state = 135;
	            this.wyrazenie();
	            this.state = 140;
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
	        this.state = 141;
	        this.match(LogiXParser.T__0);
	        this.state = 142;
	        this.nazwa();
	        this.state = 146;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===3) {
	            this.state = 143;
	            this.deklaracjeParametrow();
	            this.state = 148;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 150;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,10,this._ctx);
	        if(la_===1) {
	            this.state = 149;
	            this.match(LogiXParser.EOL);

	        }
	        this.state = 156; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 153;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if((((_la) & ~0x1f) === 0 && ((1 << _la) & 4294468162) !== 0) || ((((_la - 32)) & ~0x1f) === 0 && ((1 << (_la - 32)) & 180223) !== 0)) {
	                this.state = 152;
	                this.linia();
	            }

	            this.state = 155;
	            this.match(LogiXParser.EOL);
	            this.state = 158; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 4294468162) !== 0) || ((((_la - 32)) & ~0x1f) === 0 && ((1 << (_la - 32)) & 442367) !== 0));
	        this.state = 160;
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
	        this.state = 162;
	        this.match(LogiXParser.T__2);
	        this.state = 163;
	        this.nazwa();
	        this.state = 168;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,13,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 164;
	                this.match(LogiXParser.T__3);
	                this.state = 165;
	                this.deklaracjeParametrow(); 
	            }
	            this.state = 170;
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
	        this.state = 171;
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
	        this.state = 173;
	        this.match(LogiXParser.T__5);
	        this.state = 174;
	        this.liczba();
	        this.state = 175;
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
	        this.state = 177;
	        this.match(LogiXParser.T__6);
	        this.state = 179; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 178;
	            this.polecenia();
	            this.state = 181; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 4294451776) !== 0) || ((((_la - 32)) & ~0x1f) === 0 && ((1 << (_la - 32)) & 49151) !== 0));
	        this.state = 183;
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
	        this.state = 185;
	        this.match(LogiXParser.T__8);
	        this.state = 186;
	        this.porownanie();
	        this.state = 187;
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
	        this.state = 189;
	        this.wyrazenie();
	        this.state = 190;
	        this.operatorPorownania();
	        this.state = 191;
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
	        this.state = 193;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 7168) !== 0))) {
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



	zrob() {
	    let localctx = new ZrobContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, LogiXParser.RULE_zrob);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 195;
	        this.match(LogiXParser.T__12);
	        this.state = 196;
	        this.match(LogiXParser.LITERAL_WYRAZU);
	        this.state = 197;
	        this.wartosc();
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
	    this.enterRule(localctx, 26, LogiXParser.RULE_wypisz_);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 199;
	        this.match(LogiXParser.T__13);
	        this.state = 202;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 3:
	        case 5:
	        case 15:
	        case 16:
	        case 46:
	        case 48:
	            this.state = 200;
	            this.wartosc();
	            break;
	        case 7:
	            this.state = 201;
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
	    this.enterRule(localctx, 28, LogiXParser.RULE_lancuchZnakowy);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 204;
	        this.match(LogiXParser.T__6);
	        this.state = 209;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 4294967038) !== 0) || ((((_la - 32)) & ~0x1f) === 0 && ((1 << (_la - 32)) & 1048575) !== 0)) {
	            this.state = 207;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,16,this._ctx);
	            switch(la_) {
	            case 1:
	                this.state = 205;
	                this.lancuchZnakowy();
	                break;

	            case 2:
	                this.state = 206;
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
	            this.state = 211;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 212;
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
	    this.enterRule(localctx, 30, LogiXParser.RULE_nazwa);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 214;
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
	    this.enterRule(localctx, 32, LogiXParser.RULE_wartosc);
	    try {
	        this.state = 219;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,18,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 216;
	            this.match(LogiXParser.LITERAL_WYRAZU);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 217;
	            this.wyrazenie();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 218;
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
	    this.enterRule(localctx, 34, LogiXParser.RULE_wyrazenieZnaku);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 224;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===15 || _la===16) {
	            this.state = 221;
	            _la = this._input.LA(1);
	            if(!(_la===15 || _la===16)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 226;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 230;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 48:
	            this.state = 227;
	            this.liczba();
	            break;
	        case 3:
	            this.state = 228;
	            this.odwolanie();
	            break;
	        case 5:
	            this.state = 229;
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
	    this.enterRule(localctx, 36, LogiXParser.RULE_wielokrotneWyrazenie);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 232;
	        this.wyrazenieZnaku();
	        this.state = 237;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===17 || _la===18) {
	            this.state = 233;
	            _la = this._input.LA(1);
	            if(!(_la===17 || _la===18)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 234;
	            this.wyrazenieZnaku();
	            this.state = 239;
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
	    this.enterRule(localctx, 38, LogiXParser.RULE_wyrazenie);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 240;
	        this.wielokrotneWyrazenie();
	        this.state = 245;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,22,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 241;
	                _la = this._input.LA(1);
	                if(!(_la===15 || _la===16)) {
	                this._errHandler.recoverInline(this);
	                }
	                else {
	                	this._errHandler.reportMatch(this);
	                    this.consume();
	                }
	                this.state = 242;
	                this.wielokrotneWyrazenie(); 
	            }
	            this.state = 247;
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
	    this.enterRule(localctx, 40, LogiXParser.RULE_odwolanie);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 248;
	        this.match(LogiXParser.T__2);
	        this.state = 249;
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
	    this.enterRule(localctx, 42, LogiXParser.RULE_np);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 251;
	        _la = this._input.LA(1);
	        if(!(_la===19 || _la===20)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 252;
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
	    this.enterRule(localctx, 44, LogiXParser.RULE_ws);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 254;
	        _la = this._input.LA(1);
	        if(!(_la===21 || _la===22)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 255;
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
	    this.enterRule(localctx, 46, LogiXParser.RULE_pw);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 257;
	        _la = this._input.LA(1);
	        if(!(_la===23 || _la===24)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 258;
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
	    this.enterRule(localctx, 48, LogiXParser.RULE_lw);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 260;
	        _la = this._input.LA(1);
	        if(!(_la===25 || _la===26)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 261;
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
	    this.enterRule(localctx, 50, LogiXParser.RULE_wy);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 263;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 939524096) !== 0))) {
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
	    this.enterRule(localctx, 52, LogiXParser.RULE_pb);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 265;
	        _la = this._input.LA(1);
	        if(!(_la===30 || _la===31)) {
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
	    this.enterRule(localctx, 54, LogiXParser.RULE_ob);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 267;
	        _la = this._input.LA(1);
	        if(!(_la===32 || _la===33)) {
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
	    this.enterRule(localctx, 56, LogiXParser.RULE_sb);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 269;
	        _la = this._input.LA(1);
	        if(!(_la===34 || _la===35)) {
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
	    this.enterRule(localctx, 58, LogiXParser.RULE_ub);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 271;
	        _la = this._input.LA(1);
	        if(!(_la===36 || _la===37)) {
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
	    this.enterRule(localctx, 60, LogiXParser.RULE_dom);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 273;
	        this.match(LogiXParser.T__37);
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



	ubop() {
	    let localctx = new UbopContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 62, LogiXParser.RULE_ubop);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 275;
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
	    this.enterRule(localctx, 64, LogiXParser.RULE_napis);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 277;
	        this.match(LogiXParser.T__39);
	        this.state = 278;
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
	    this.enterRule(localctx, 66, LogiXParser.RULE_ustaw);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 280;
	        this.match(LogiXParser.T__40);
	        this.state = 281;
	        this.wyrazenie();
	        this.state = 282;
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
	    this.enterRule(localctx, 68, LogiXParser.RULE_losowo);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 284;
	        this.match(LogiXParser.T__4);
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



	dla() {
	    let localctx = new DlaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 70, LogiXParser.RULE_dla);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 287;
	        this.match(LogiXParser.T__41);
	        this.state = 288;
	        this.match(LogiXParser.T__6);
	        this.state = 289;
	        this.nazwa();
	        this.state = 290;
	        this.wyrazenie();
	        this.state = 291;
	        this.wyrazenie();
	        this.state = 292;
	        this.wyrazenie();
	        this.state = 293;
	        this.match(LogiXParser.T__7);
	        this.state = 294;
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
	    this.enterRule(localctx, 72, LogiXParser.RULE_kwadrat);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 296;
	        this.match(LogiXParser.T__42);
	        this.state = 297;
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
	    this.enterRule(localctx, 74, LogiXParser.RULE_trojkat);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 299;
	        this.match(LogiXParser.T__43);
	        this.state = 300;
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
	    this.enterRule(localctx, 76, LogiXParser.RULE_kolo);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 302;
	        this.match(LogiXParser.T__44);
	        this.state = 303;
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
	    this.enterRule(localctx, 78, LogiXParser.RULE_liczba);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 305;
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
	    this.enterRule(localctx, 80, LogiXParser.RULE_komentarz);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 307;
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
LogiXParser.RULE_zrob = 12;
LogiXParser.RULE_wypisz_ = 13;
LogiXParser.RULE_lancuchZnakowy = 14;
LogiXParser.RULE_nazwa = 15;
LogiXParser.RULE_wartosc = 16;
LogiXParser.RULE_wyrazenieZnaku = 17;
LogiXParser.RULE_wielokrotneWyrazenie = 18;
LogiXParser.RULE_wyrazenie = 19;
LogiXParser.RULE_odwolanie = 20;
LogiXParser.RULE_np = 21;
LogiXParser.RULE_ws = 22;
LogiXParser.RULE_pw = 23;
LogiXParser.RULE_lw = 24;
LogiXParser.RULE_wy = 25;
LogiXParser.RULE_pb = 26;
LogiXParser.RULE_ob = 27;
LogiXParser.RULE_sb = 28;
LogiXParser.RULE_ub = 29;
LogiXParser.RULE_dom = 30;
LogiXParser.RULE_ubop = 31;
LogiXParser.RULE_napis = 32;
LogiXParser.RULE_ustaw = 33;
LogiXParser.RULE_losowo = 34;
LogiXParser.RULE_dla = 35;
LogiXParser.RULE_kwadrat = 36;
LogiXParser.RULE_trojkat = 37;
LogiXParser.RULE_kolo = 38;
LogiXParser.RULE_liczba = 39;
LogiXParser.RULE_komentarz = 40;

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

	zrob() {
	    return this.getTypedRuleContext(ZrobContext,0);
	};

	wywolanieProcedury() {
	    return this.getTypedRuleContext(WywolanieProceduryContext,0);
	};

	jesli() {
	    return this.getTypedRuleContext(JesliContext,0);
	};

	ubop() {
	    return this.getTypedRuleContext(UbopContext,0);
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



class ZrobContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LogiXParser.RULE_zrob;
    }

	LITERAL_WYRAZU() {
	    return this.getToken(LogiXParser.LITERAL_WYRAZU, 0);
	};

	wartosc() {
	    return this.getTypedRuleContext(WartoscContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LogiXListener ) {
	        listener.enterZrob(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LogiXListener ) {
	        listener.exitZrob(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LogiXVisitor ) {
	        return visitor.visitZrob(this);
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



class UbopContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LogiXParser.RULE_ubop;
    }


	enterRule(listener) {
	    if(listener instanceof LogiXListener ) {
	        listener.enterUbop(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LogiXListener ) {
	        listener.exitUbop(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LogiXVisitor ) {
	        return visitor.visitUbop(this);
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
LogiXParser.ZrobContext = ZrobContext; 
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
LogiXParser.UbopContext = UbopContext; 
LogiXParser.NapisContext = NapisContext; 
LogiXParser.UstawContext = UstawContext; 
LogiXParser.LosowoContext = LosowoContext; 
LogiXParser.DlaContext = DlaContext; 
LogiXParser.KwadratContext = KwadratContext; 
LogiXParser.TrojkatContext = TrojkatContext; 
LogiXParser.KoloContext = KoloContext; 
LogiXParser.LiczbaContext = LiczbaContext; 
LogiXParser.KomentarzContext = KomentarzContext; 
