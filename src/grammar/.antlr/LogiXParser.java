// Generated from c:/Users/wiech/Studia/kompilatory/LogiX-javascript/src/grammar/LogiX.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast", "CheckReturnValue"})
public class LogiXParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.13.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		T__0=1, T__1=2, T__2=3, T__3=4, T__4=5, T__5=6, T__6=7, T__7=8, T__8=9, 
		T__9=10, T__10=11, T__11=12, T__12=13, T__13=14, T__14=15, T__15=16, T__16=17, 
		T__17=18, T__18=19, T__19=20, T__20=21, T__21=22, T__22=23, T__23=24, 
		T__24=25, T__25=26, T__26=27, T__27=28, T__28=29, T__29=30, T__30=31, 
		T__31=32, T__32=33, T__33=34, T__34=35, T__35=36, T__36=37, T__37=38, 
		T__38=39, T__39=40, T__40=41, T__41=42, T__42=43, T__43=44, T__44=45, 
		T__45=46, T__46=47, T__47=48, T__48=49, T__49=50, T__50=51, T__51=52, 
		T__52=53, T__53=54, T__54=55, LITERAL_WYRAZU=56, LANCUCH=57, CYFRA=58, 
		KOMENTARZ=59, EOL=60, BIALY_ZNAK=61;
	public static final int
		RULE_prog = 0, RULE_linia = 1, RULE_polecenia = 2, RULE_wywolanieProcedury = 3, 
		RULE_deklaracjaProcedury = 4, RULE_deklaracjeParametrow = 5, RULE_func_ = 6, 
		RULE_powtorz = 7, RULE_blok = 8, RULE_jesli = 9, RULE_porownanie = 10, 
		RULE_operatorPorownania = 11, RULE_wypisz_ = 12, RULE_pierwszy = 13, RULE_glowa = 14, 
		RULE_ogon = 15, RULE_ostatni = 16, RULE_element = 17, RULE_elementWielowymiaru = 18, 
		RULE_wybierz = 19, RULE_usun = 20, RULE_unikalna = 21, RULE_lista = 22, 
		RULE_mdlista = 23, RULE_lancuchZnakowy = 24, RULE_nazwa = 25, RULE_wartosc = 26, 
		RULE_wyrazenieZnaku = 27, RULE_wielokrotneWyrazenie = 28, RULE_wyrazenie = 29, 
		RULE_odwolanie = 30, RULE_np = 31, RULE_ws = 32, RULE_pw = 33, RULE_lw = 34, 
		RULE_wy = 35, RULE_pb = 36, RULE_ob = 37, RULE_sb = 38, RULE_ub = 39, 
		RULE_dom = 40, RULE_napis = 41, RULE_ustaw = 42, RULE_losowo = 43, RULE_dla = 44, 
		RULE_kwadrat = 45, RULE_trojkat = 46, RULE_kolo = 47, RULE_liczba = 48, 
		RULE_komentarz = 49;
	private static String[] makeRuleNames() {
		return new String[] {
			"prog", "linia", "polecenia", "wywolanieProcedury", "deklaracjaProcedury", 
			"deklaracjeParametrow", "func_", "powtorz", "blok", "jesli", "porownanie", 
			"operatorPorownania", "wypisz_", "pierwszy", "glowa", "ogon", "ostatni", 
			"element", "elementWielowymiaru", "wybierz", "usun", "unikalna", "lista", 
			"mdlista", "lancuchZnakowy", "nazwa", "wartosc", "wyrazenieZnaku", "wielokrotneWyrazenie", 
			"wyrazenie", "odwolanie", "np", "ws", "pw", "lw", "wy", "pb", "ob", "sb", 
			"ub", "dom", "napis", "ustaw", "losowo", "dla", "kwadrat", "trojkat", 
			"kolo", "liczba", "komentarz"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'to'", "'end'", "':'", "','", "'powtorz'", "'['", "']'", "'jesli'", 
			"'<'", "'>'", "'='", "'<='", "'>='", "'wypisz'", "'pierwszy'", "'glowa'", 
			"'ogon'", "'ostatni'", "'element'", "'elementww'", "'wybierz'", "'usun'", 
			"'unikalna'", "', '", "'+'", "'-'", "'*'", "'/'", "'np'", "'naprzod'", 
			"'ws'", "'wstecz'", "'pw'", "'prawo'", "'lw'", "'lewo'", "'wy'", "'wyczysc'", 
			"'wyczyscekran'", "'pb'", "'podniesbobra'", "'ob'", "'opuscbobra'", "'sb'", 
			"'schowajbobra'", "'ub'", "'ukazbobra'", "'dom'", "'napis'", "'ustaw'", 
			"'losowo'", "'dla'", "'kwadrat'", "'trojkat'", "'kolo'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, null, null, null, "LITERAL_WYRAZU", "LANCUCH", 
			"CYFRA", "KOMENTARZ", "EOL", "BIALY_ZNAK"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}

	@Override
	public String getGrammarFileName() { return "LogiX.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public LogiXParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ProgContext extends ParserRuleContext {
		public TerminalNode EOF() { return getToken(LogiXParser.EOF, 0); }
		public List<TerminalNode> EOL() { return getTokens(LogiXParser.EOL); }
		public TerminalNode EOL(int i) {
			return getToken(LogiXParser.EOL, i);
		}
		public List<LiniaContext> linia() {
			return getRuleContexts(LiniaContext.class);
		}
		public LiniaContext linia(int i) {
			return getRuleContext(LiniaContext.class,i);
		}
		public ProgContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_prog; }
	}

	public final ProgContext prog() throws RecognitionException {
		ProgContext _localctx = new ProgContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_prog);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(104); 
			_errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					setState(101);
					_errHandler.sync(this);
					_la = _input.LA(1);
					if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 790381734066667810L) != 0)) {
						{
						setState(100);
						linia();
						}
					}

					setState(103);
					match(EOL);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				setState(106); 
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,1,_ctx);
			} while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER );
			setState(109);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 790381734066667810L) != 0)) {
				{
				setState(108);
				linia();
				}
			}

			setState(111);
			match(EOF);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class LiniaContext extends ParserRuleContext {
		public List<PoleceniaContext> polecenia() {
			return getRuleContexts(PoleceniaContext.class);
		}
		public PoleceniaContext polecenia(int i) {
			return getRuleContext(PoleceniaContext.class,i);
		}
		public KomentarzContext komentarz() {
			return getRuleContext(KomentarzContext.class,0);
		}
		public Wypisz_Context wypisz_() {
			return getRuleContext(Wypisz_Context.class,0);
		}
		public DeklaracjaProceduryContext deklaracjaProcedury() {
			return getRuleContext(DeklaracjaProceduryContext.class,0);
		}
		public LiniaContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_linia; }
	}

	public final LiniaContext linia() throws RecognitionException {
		LiniaContext _localctx = new LiniaContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_linia);
		int _la;
		try {
			setState(127);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__4:
			case T__7:
			case T__28:
			case T__29:
			case T__30:
			case T__31:
			case T__32:
			case T__33:
			case T__34:
			case T__35:
			case T__36:
			case T__37:
			case T__38:
			case T__39:
			case T__40:
			case T__41:
			case T__42:
			case T__43:
			case T__44:
			case T__45:
			case T__46:
			case T__47:
			case T__48:
			case T__49:
			case T__51:
			case T__52:
			case T__53:
			case T__54:
			case LANCUCH:
				enterOuterAlt(_localctx, 1);
				{
				setState(114); 
				_errHandler.sync(this);
				_la = _input.LA(1);
				do {
					{
					{
					setState(113);
					polecenia();
					}
					}
					setState(116); 
					_errHandler.sync(this);
					_la = _input.LA(1);
				} while ( (((_la) & ~0x3f) == 0 && ((1L << _la) & 213920981763227936L) != 0) );
				setState(119);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==KOMENTARZ) {
					{
					setState(118);
					komentarz();
					}
				}

				}
				break;
			case KOMENTARZ:
				enterOuterAlt(_localctx, 2);
				{
				setState(121);
				komentarz();
				}
				break;
			case T__13:
				enterOuterAlt(_localctx, 3);
				{
				setState(122);
				wypisz_();
				setState(124);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==KOMENTARZ) {
					{
					setState(123);
					komentarz();
					}
				}

				}
				break;
			case T__0:
				enterOuterAlt(_localctx, 4);
				{
				setState(126);
				deklaracjaProcedury();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class PoleceniaContext extends ParserRuleContext {
		public PowtorzContext powtorz() {
			return getRuleContext(PowtorzContext.class,0);
		}
		public NpContext np() {
			return getRuleContext(NpContext.class,0);
		}
		public WsContext ws() {
			return getRuleContext(WsContext.class,0);
		}
		public PwContext pw() {
			return getRuleContext(PwContext.class,0);
		}
		public LwContext lw() {
			return getRuleContext(LwContext.class,0);
		}
		public WyContext wy() {
			return getRuleContext(WyContext.class,0);
		}
		public PbContext pb() {
			return getRuleContext(PbContext.class,0);
		}
		public ObContext ob() {
			return getRuleContext(ObContext.class,0);
		}
		public SbContext sb() {
			return getRuleContext(SbContext.class,0);
		}
		public UbContext ub() {
			return getRuleContext(UbContext.class,0);
		}
		public DomContext dom() {
			return getRuleContext(DomContext.class,0);
		}
		public NapisContext napis() {
			return getRuleContext(NapisContext.class,0);
		}
		public UstawContext ustaw() {
			return getRuleContext(UstawContext.class,0);
		}
		public WywolanieProceduryContext wywolanieProcedury() {
			return getRuleContext(WywolanieProceduryContext.class,0);
		}
		public JesliContext jesli() {
			return getRuleContext(JesliContext.class,0);
		}
		public DlaContext dla() {
			return getRuleContext(DlaContext.class,0);
		}
		public KwadratContext kwadrat() {
			return getRuleContext(KwadratContext.class,0);
		}
		public TrojkatContext trojkat() {
			return getRuleContext(TrojkatContext.class,0);
		}
		public KoloContext kolo() {
			return getRuleContext(KoloContext.class,0);
		}
		public PoleceniaContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_polecenia; }
	}

	public final PoleceniaContext polecenia() throws RecognitionException {
		PoleceniaContext _localctx = new PoleceniaContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_polecenia);
		try {
			setState(148);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__4:
				enterOuterAlt(_localctx, 1);
				{
				setState(129);
				powtorz();
				}
				break;
			case T__28:
			case T__29:
				enterOuterAlt(_localctx, 2);
				{
				setState(130);
				np();
				}
				break;
			case T__30:
			case T__31:
				enterOuterAlt(_localctx, 3);
				{
				setState(131);
				ws();
				}
				break;
			case T__32:
			case T__33:
				enterOuterAlt(_localctx, 4);
				{
				setState(132);
				pw();
				}
				break;
			case T__34:
			case T__35:
				enterOuterAlt(_localctx, 5);
				{
				setState(133);
				lw();
				}
				break;
			case T__36:
			case T__37:
			case T__38:
				enterOuterAlt(_localctx, 6);
				{
				setState(134);
				wy();
				}
				break;
			case T__39:
			case T__40:
				enterOuterAlt(_localctx, 7);
				{
				setState(135);
				pb();
				}
				break;
			case T__41:
			case T__42:
				enterOuterAlt(_localctx, 8);
				{
				setState(136);
				ob();
				}
				break;
			case T__43:
			case T__44:
				enterOuterAlt(_localctx, 9);
				{
				setState(137);
				sb();
				}
				break;
			case T__45:
			case T__46:
				enterOuterAlt(_localctx, 10);
				{
				setState(138);
				ub();
				}
				break;
			case T__47:
				enterOuterAlt(_localctx, 11);
				{
				setState(139);
				dom();
				}
				break;
			case T__48:
				enterOuterAlt(_localctx, 12);
				{
				setState(140);
				napis();
				}
				break;
			case T__49:
				enterOuterAlt(_localctx, 13);
				{
				setState(141);
				ustaw();
				}
				break;
			case LANCUCH:
				enterOuterAlt(_localctx, 14);
				{
				setState(142);
				wywolanieProcedury();
				}
				break;
			case T__7:
				enterOuterAlt(_localctx, 15);
				{
				setState(143);
				jesli();
				}
				break;
			case T__51:
				enterOuterAlt(_localctx, 16);
				{
				setState(144);
				dla();
				}
				break;
			case T__52:
				enterOuterAlt(_localctx, 17);
				{
				setState(145);
				kwadrat();
				}
				break;
			case T__53:
				enterOuterAlt(_localctx, 18);
				{
				setState(146);
				trojkat();
				}
				break;
			case T__54:
				enterOuterAlt(_localctx, 19);
				{
				setState(147);
				kolo();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class WywolanieProceduryContext extends ParserRuleContext {
		public NazwaContext nazwa() {
			return getRuleContext(NazwaContext.class,0);
		}
		public List<WyrazenieContext> wyrazenie() {
			return getRuleContexts(WyrazenieContext.class);
		}
		public WyrazenieContext wyrazenie(int i) {
			return getRuleContext(WyrazenieContext.class,i);
		}
		public WywolanieProceduryContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_wywolanieProcedury; }
	}

	public final WywolanieProceduryContext wywolanieProcedury() throws RecognitionException {
		WywolanieProceduryContext _localctx = new WywolanieProceduryContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_wywolanieProcedury);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(150);
			nazwa();
			setState(154);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 290482176082804744L) != 0)) {
				{
				{
				setState(151);
				wyrazenie();
				}
				}
				setState(156);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class DeklaracjaProceduryContext extends ParserRuleContext {
		public NazwaContext nazwa() {
			return getRuleContext(NazwaContext.class,0);
		}
		public List<DeklaracjeParametrowContext> deklaracjeParametrow() {
			return getRuleContexts(DeklaracjeParametrowContext.class);
		}
		public DeklaracjeParametrowContext deklaracjeParametrow(int i) {
			return getRuleContext(DeklaracjeParametrowContext.class,i);
		}
		public List<TerminalNode> EOL() { return getTokens(LogiXParser.EOL); }
		public TerminalNode EOL(int i) {
			return getToken(LogiXParser.EOL, i);
		}
		public List<LiniaContext> linia() {
			return getRuleContexts(LiniaContext.class);
		}
		public LiniaContext linia(int i) {
			return getRuleContext(LiniaContext.class,i);
		}
		public DeklaracjaProceduryContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_deklaracjaProcedury; }
	}

	public final DeklaracjaProceduryContext deklaracjaProcedury() throws RecognitionException {
		DeklaracjaProceduryContext _localctx = new DeklaracjaProceduryContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_deklaracjaProcedury);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(157);
			match(T__0);
			setState(158);
			nazwa();
			setState(162);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__2) {
				{
				{
				setState(159);
				deklaracjeParametrow();
				}
				}
				setState(164);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(166);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,10,_ctx) ) {
			case 1:
				{
				setState(165);
				match(EOL);
				}
				break;
			}
			setState(172); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(169);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 790381734066667810L) != 0)) {
					{
					setState(168);
					linia();
					}
				}

				setState(171);
				match(EOL);
				}
				}
				setState(174); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( (((_la) & ~0x3f) == 0 && ((1L << _la) & 1943303238673514786L) != 0) );
			setState(176);
			match(T__1);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class DeklaracjeParametrowContext extends ParserRuleContext {
		public NazwaContext nazwa() {
			return getRuleContext(NazwaContext.class,0);
		}
		public List<DeklaracjeParametrowContext> deklaracjeParametrow() {
			return getRuleContexts(DeklaracjeParametrowContext.class);
		}
		public DeklaracjeParametrowContext deklaracjeParametrow(int i) {
			return getRuleContext(DeklaracjeParametrowContext.class,i);
		}
		public DeklaracjeParametrowContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_deklaracjeParametrow; }
	}

	public final DeklaracjeParametrowContext deklaracjeParametrow() throws RecognitionException {
		DeklaracjeParametrowContext _localctx = new DeklaracjeParametrowContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_deklaracjeParametrow);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(178);
			match(T__2);
			setState(179);
			nazwa();
			setState(184);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,13,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(180);
					match(T__3);
					setState(181);
					deklaracjeParametrow();
					}
					} 
				}
				setState(186);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,13,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Func_Context extends ParserRuleContext {
		public LosowoContext losowo() {
			return getRuleContext(LosowoContext.class,0);
		}
		public PierwszyContext pierwszy() {
			return getRuleContext(PierwszyContext.class,0);
		}
		public GlowaContext glowa() {
			return getRuleContext(GlowaContext.class,0);
		}
		public OgonContext ogon() {
			return getRuleContext(OgonContext.class,0);
		}
		public OstatniContext ostatni() {
			return getRuleContext(OstatniContext.class,0);
		}
		public ElementContext element() {
			return getRuleContext(ElementContext.class,0);
		}
		public ElementWielowymiaruContext elementWielowymiaru() {
			return getRuleContext(ElementWielowymiaruContext.class,0);
		}
		public WybierzContext wybierz() {
			return getRuleContext(WybierzContext.class,0);
		}
		public UsunContext usun() {
			return getRuleContext(UsunContext.class,0);
		}
		public UnikalnaContext unikalna() {
			return getRuleContext(UnikalnaContext.class,0);
		}
		public Func_Context(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_func_; }
	}

	public final Func_Context func_() throws RecognitionException {
		Func_Context _localctx = new Func_Context(_ctx, getState());
		enterRule(_localctx, 12, RULE_func_);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(197);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__50:
				{
				setState(187);
				losowo();
				}
				break;
			case T__14:
				{
				setState(188);
				pierwszy();
				}
				break;
			case T__15:
				{
				setState(189);
				glowa();
				}
				break;
			case T__16:
				{
				setState(190);
				ogon();
				}
				break;
			case T__17:
				{
				setState(191);
				ostatni();
				}
				break;
			case T__18:
				{
				setState(192);
				element();
				}
				break;
			case T__19:
				{
				setState(193);
				elementWielowymiaru();
				}
				break;
			case T__20:
				{
				setState(194);
				wybierz();
				}
				break;
			case T__21:
				{
				setState(195);
				usun();
				}
				break;
			case T__22:
				{
				setState(196);
				unikalna();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class PowtorzContext extends ParserRuleContext {
		public LiczbaContext liczba() {
			return getRuleContext(LiczbaContext.class,0);
		}
		public BlokContext blok() {
			return getRuleContext(BlokContext.class,0);
		}
		public PowtorzContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_powtorz; }
	}

	public final PowtorzContext powtorz() throws RecognitionException {
		PowtorzContext _localctx = new PowtorzContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_powtorz);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(199);
			match(T__4);
			setState(200);
			liczba();
			setState(201);
			blok();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class BlokContext extends ParserRuleContext {
		public List<PoleceniaContext> polecenia() {
			return getRuleContexts(PoleceniaContext.class);
		}
		public PoleceniaContext polecenia(int i) {
			return getRuleContext(PoleceniaContext.class,i);
		}
		public BlokContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_blok; }
	}

	public final BlokContext blok() throws RecognitionException {
		BlokContext _localctx = new BlokContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_blok);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(203);
			match(T__5);
			setState(205); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(204);
				polecenia();
				}
				}
				setState(207); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( (((_la) & ~0x3f) == 0 && ((1L << _la) & 213920981763227936L) != 0) );
			setState(209);
			match(T__6);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class JesliContext extends ParserRuleContext {
		public PorownanieContext porownanie() {
			return getRuleContext(PorownanieContext.class,0);
		}
		public BlokContext blok() {
			return getRuleContext(BlokContext.class,0);
		}
		public JesliContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_jesli; }
	}

	public final JesliContext jesli() throws RecognitionException {
		JesliContext _localctx = new JesliContext(_ctx, getState());
		enterRule(_localctx, 18, RULE_jesli);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(211);
			match(T__7);
			setState(212);
			porownanie();
			setState(213);
			blok();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class PorownanieContext extends ParserRuleContext {
		public List<WyrazenieContext> wyrazenie() {
			return getRuleContexts(WyrazenieContext.class);
		}
		public WyrazenieContext wyrazenie(int i) {
			return getRuleContext(WyrazenieContext.class,i);
		}
		public OperatorPorownaniaContext operatorPorownania() {
			return getRuleContext(OperatorPorownaniaContext.class,0);
		}
		public PorownanieContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_porownanie; }
	}

	public final PorownanieContext porownanie() throws RecognitionException {
		PorownanieContext _localctx = new PorownanieContext(_ctx, getState());
		enterRule(_localctx, 20, RULE_porownanie);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(215);
			wyrazenie();
			setState(216);
			operatorPorownania();
			setState(217);
			wyrazenie();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class OperatorPorownaniaContext extends ParserRuleContext {
		public OperatorPorownaniaContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_operatorPorownania; }
	}

	public final OperatorPorownaniaContext operatorPorownania() throws RecognitionException {
		OperatorPorownaniaContext _localctx = new OperatorPorownaniaContext(_ctx, getState());
		enterRule(_localctx, 22, RULE_operatorPorownania);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(219);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 15872L) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Wypisz_Context extends ParserRuleContext {
		public WartoscContext wartosc() {
			return getRuleContext(WartoscContext.class,0);
		}
		public LancuchZnakowyContext lancuchZnakowy() {
			return getRuleContext(LancuchZnakowyContext.class,0);
		}
		public Wypisz_Context(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_wypisz_; }
	}

	public final Wypisz_Context wypisz_() throws RecognitionException {
		Wypisz_Context _localctx = new Wypisz_Context(_ctx, getState());
		enterRule(_localctx, 24, RULE_wypisz_);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(221);
			match(T__13);
			setState(224);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__2:
			case T__14:
			case T__15:
			case T__16:
			case T__17:
			case T__18:
			case T__19:
			case T__20:
			case T__21:
			case T__22:
			case T__24:
			case T__25:
			case T__50:
			case LITERAL_WYRAZU:
			case CYFRA:
				{
				setState(222);
				wartosc();
				}
				break;
			case T__5:
				{
				setState(223);
				lancuchZnakowy();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class PierwszyContext extends ParserRuleContext {
		public ListaContext lista() {
			return getRuleContext(ListaContext.class,0);
		}
		public PierwszyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_pierwszy; }
	}

	public final PierwszyContext pierwszy() throws RecognitionException {
		PierwszyContext _localctx = new PierwszyContext(_ctx, getState());
		enterRule(_localctx, 26, RULE_pierwszy);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(226);
			match(T__14);
			setState(227);
			lista();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class GlowaContext extends ParserRuleContext {
		public ListaContext lista() {
			return getRuleContext(ListaContext.class,0);
		}
		public GlowaContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_glowa; }
	}

	public final GlowaContext glowa() throws RecognitionException {
		GlowaContext _localctx = new GlowaContext(_ctx, getState());
		enterRule(_localctx, 28, RULE_glowa);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(229);
			match(T__15);
			setState(230);
			lista();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class OgonContext extends ParserRuleContext {
		public ListaContext lista() {
			return getRuleContext(ListaContext.class,0);
		}
		public OgonContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_ogon; }
	}

	public final OgonContext ogon() throws RecognitionException {
		OgonContext _localctx = new OgonContext(_ctx, getState());
		enterRule(_localctx, 30, RULE_ogon);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(232);
			match(T__16);
			setState(233);
			lista();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class OstatniContext extends ParserRuleContext {
		public ListaContext lista() {
			return getRuleContext(ListaContext.class,0);
		}
		public OstatniContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_ostatni; }
	}

	public final OstatniContext ostatni() throws RecognitionException {
		OstatniContext _localctx = new OstatniContext(_ctx, getState());
		enterRule(_localctx, 32, RULE_ostatni);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(235);
			match(T__17);
			setState(236);
			lista();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ElementContext extends ParserRuleContext {
		public LiczbaContext liczba() {
			return getRuleContext(LiczbaContext.class,0);
		}
		public ListaContext lista() {
			return getRuleContext(ListaContext.class,0);
		}
		public ElementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_element; }
	}

	public final ElementContext element() throws RecognitionException {
		ElementContext _localctx = new ElementContext(_ctx, getState());
		enterRule(_localctx, 34, RULE_element);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(238);
			match(T__18);
			setState(239);
			liczba();
			setState(240);
			lista();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ElementWielowymiaruContext extends ParserRuleContext {
		public ListaContext lista() {
			return getRuleContext(ListaContext.class,0);
		}
		public MdlistaContext mdlista() {
			return getRuleContext(MdlistaContext.class,0);
		}
		public ElementWielowymiaruContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_elementWielowymiaru; }
	}

	public final ElementWielowymiaruContext elementWielowymiaru() throws RecognitionException {
		ElementWielowymiaruContext _localctx = new ElementWielowymiaruContext(_ctx, getState());
		enterRule(_localctx, 36, RULE_elementWielowymiaru);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(242);
			match(T__19);
			setState(243);
			lista();
			setState(244);
			mdlista();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class WybierzContext extends ParserRuleContext {
		public ListaContext lista() {
			return getRuleContext(ListaContext.class,0);
		}
		public WybierzContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_wybierz; }
	}

	public final WybierzContext wybierz() throws RecognitionException {
		WybierzContext _localctx = new WybierzContext(_ctx, getState());
		enterRule(_localctx, 38, RULE_wybierz);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(246);
			match(T__20);
			setState(247);
			lista();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class UsunContext extends ParserRuleContext {
		public WartoscContext wartosc() {
			return getRuleContext(WartoscContext.class,0);
		}
		public ListaContext lista() {
			return getRuleContext(ListaContext.class,0);
		}
		public UsunContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_usun; }
	}

	public final UsunContext usun() throws RecognitionException {
		UsunContext _localctx = new UsunContext(_ctx, getState());
		enterRule(_localctx, 40, RULE_usun);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(249);
			match(T__21);
			setState(250);
			wartosc();
			setState(251);
			lista();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class UnikalnaContext extends ParserRuleContext {
		public ListaContext lista() {
			return getRuleContext(ListaContext.class,0);
		}
		public UnikalnaContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_unikalna; }
	}

	public final UnikalnaContext unikalna() throws RecognitionException {
		UnikalnaContext _localctx = new UnikalnaContext(_ctx, getState());
		enterRule(_localctx, 42, RULE_unikalna);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(253);
			match(T__22);
			setState(254);
			lista();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ListaContext extends ParserRuleContext {
		public List<WartoscContext> wartosc() {
			return getRuleContexts(WartoscContext.class);
		}
		public WartoscContext wartosc(int i) {
			return getRuleContext(WartoscContext.class,i);
		}
		public ListaContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_lista; }
	}

	public final ListaContext lista() throws RecognitionException {
		ListaContext _localctx = new ListaContext(_ctx, getState());
		enterRule(_localctx, 44, RULE_lista);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(256);
			match(T__5);
			setState(257);
			wartosc();
			setState(262);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__3) {
				{
				{
				setState(258);
				match(T__3);
				setState(259);
				wartosc();
				}
				}
				setState(264);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(265);
			match(T__6);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class MdlistaContext extends ParserRuleContext {
		public List<MdlistaContext> mdlista() {
			return getRuleContexts(MdlistaContext.class);
		}
		public MdlistaContext mdlista(int i) {
			return getRuleContext(MdlistaContext.class,i);
		}
		public List<ListaContext> lista() {
			return getRuleContexts(ListaContext.class);
		}
		public ListaContext lista(int i) {
			return getRuleContext(ListaContext.class,i);
		}
		public MdlistaContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_mdlista; }
	}

	public final MdlistaContext mdlista() throws RecognitionException {
		MdlistaContext _localctx = new MdlistaContext(_ctx, getState());
		enterRule(_localctx, 46, RULE_mdlista);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(267);
			match(T__5);
			setState(270);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,18,_ctx) ) {
			case 1:
				{
				setState(268);
				mdlista();
				}
				break;
			case 2:
				{
				setState(269);
				lista();
				}
				break;
			}
			setState(272);
			match(T__23);
			setState(277);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__5) {
				{
				setState(275);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,19,_ctx) ) {
				case 1:
					{
					setState(273);
					mdlista();
					}
					break;
				case 2:
					{
					setState(274);
					lista();
					}
					break;
				}
				}
				setState(279);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(280);
			match(T__6);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class LancuchZnakowyContext extends ParserRuleContext {
		public List<LancuchZnakowyContext> lancuchZnakowy() {
			return getRuleContexts(LancuchZnakowyContext.class);
		}
		public LancuchZnakowyContext lancuchZnakowy(int i) {
			return getRuleContext(LancuchZnakowyContext.class,i);
		}
		public LancuchZnakowyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_lancuchZnakowy; }
	}

	public final LancuchZnakowyContext lancuchZnakowy() throws RecognitionException {
		LancuchZnakowyContext _localctx = new LancuchZnakowyContext(_ctx, getState());
		enterRule(_localctx, 48, RULE_lancuchZnakowy);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(282);
			match(T__5);
			setState(287);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 4611686018427387774L) != 0)) {
				{
				setState(285);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,21,_ctx) ) {
				case 1:
					{
					setState(283);
					lancuchZnakowy();
					}
					break;
				case 2:
					{
					setState(284);
					_la = _input.LA(1);
					if ( _la <= 0 || (_la==T__6) ) {
					_errHandler.recoverInline(this);
					}
					else {
						if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
						_errHandler.reportMatch(this);
						consume();
					}
					}
					break;
				}
				}
				setState(289);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(290);
			match(T__6);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class NazwaContext extends ParserRuleContext {
		public TerminalNode LANCUCH() { return getToken(LogiXParser.LANCUCH, 0); }
		public NazwaContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_nazwa; }
	}

	public final NazwaContext nazwa() throws RecognitionException {
		NazwaContext _localctx = new NazwaContext(_ctx, getState());
		enterRule(_localctx, 50, RULE_nazwa);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(292);
			match(LANCUCH);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class WartoscContext extends ParserRuleContext {
		public TerminalNode LITERAL_WYRAZU() { return getToken(LogiXParser.LITERAL_WYRAZU, 0); }
		public WyrazenieContext wyrazenie() {
			return getRuleContext(WyrazenieContext.class,0);
		}
		public OdwolanieContext odwolanie() {
			return getRuleContext(OdwolanieContext.class,0);
		}
		public WartoscContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_wartosc; }
	}

	public final WartoscContext wartosc() throws RecognitionException {
		WartoscContext _localctx = new WartoscContext(_ctx, getState());
		enterRule(_localctx, 52, RULE_wartosc);
		try {
			setState(297);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,23,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(294);
				match(LITERAL_WYRAZU);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(295);
				wyrazenie();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(296);
				odwolanie();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class WyrazenieZnakuContext extends ParserRuleContext {
		public LiczbaContext liczba() {
			return getRuleContext(LiczbaContext.class,0);
		}
		public OdwolanieContext odwolanie() {
			return getRuleContext(OdwolanieContext.class,0);
		}
		public Func_Context func_() {
			return getRuleContext(Func_Context.class,0);
		}
		public WyrazenieZnakuContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_wyrazenieZnaku; }
	}

	public final WyrazenieZnakuContext wyrazenieZnaku() throws RecognitionException {
		WyrazenieZnakuContext _localctx = new WyrazenieZnakuContext(_ctx, getState());
		enterRule(_localctx, 54, RULE_wyrazenieZnaku);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(302);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__24 || _la==T__25) {
				{
				{
				setState(299);
				_la = _input.LA(1);
				if ( !(_la==T__24 || _la==T__25) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				}
				}
				setState(304);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(308);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case CYFRA:
				{
				setState(305);
				liczba();
				}
				break;
			case T__2:
				{
				setState(306);
				odwolanie();
				}
				break;
			case T__14:
			case T__15:
			case T__16:
			case T__17:
			case T__18:
			case T__19:
			case T__20:
			case T__21:
			case T__22:
			case T__50:
				{
				setState(307);
				func_();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class WielokrotneWyrazenieContext extends ParserRuleContext {
		public List<WyrazenieZnakuContext> wyrazenieZnaku() {
			return getRuleContexts(WyrazenieZnakuContext.class);
		}
		public WyrazenieZnakuContext wyrazenieZnaku(int i) {
			return getRuleContext(WyrazenieZnakuContext.class,i);
		}
		public WielokrotneWyrazenieContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_wielokrotneWyrazenie; }
	}

	public final WielokrotneWyrazenieContext wielokrotneWyrazenie() throws RecognitionException {
		WielokrotneWyrazenieContext _localctx = new WielokrotneWyrazenieContext(_ctx, getState());
		enterRule(_localctx, 56, RULE_wielokrotneWyrazenie);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(310);
			wyrazenieZnaku();
			setState(315);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,26,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(311);
					_la = _input.LA(1);
					if ( !(_la==T__26 || _la==T__27) ) {
					_errHandler.recoverInline(this);
					}
					else {
						if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
						_errHandler.reportMatch(this);
						consume();
					}
					setState(312);
					wyrazenieZnaku();
					}
					} 
				}
				setState(317);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,26,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class WyrazenieContext extends ParserRuleContext {
		public List<WielokrotneWyrazenieContext> wielokrotneWyrazenie() {
			return getRuleContexts(WielokrotneWyrazenieContext.class);
		}
		public WielokrotneWyrazenieContext wielokrotneWyrazenie(int i) {
			return getRuleContext(WielokrotneWyrazenieContext.class,i);
		}
		public WyrazenieContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_wyrazenie; }
	}

	public final WyrazenieContext wyrazenie() throws RecognitionException {
		WyrazenieContext _localctx = new WyrazenieContext(_ctx, getState());
		enterRule(_localctx, 58, RULE_wyrazenie);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(318);
			wielokrotneWyrazenie();
			setState(323);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,27,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(319);
					_la = _input.LA(1);
					if ( !(_la==T__24 || _la==T__25) ) {
					_errHandler.recoverInline(this);
					}
					else {
						if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
						_errHandler.reportMatch(this);
						consume();
					}
					setState(320);
					wielokrotneWyrazenie();
					}
					} 
				}
				setState(325);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,27,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class OdwolanieContext extends ParserRuleContext {
		public NazwaContext nazwa() {
			return getRuleContext(NazwaContext.class,0);
		}
		public OdwolanieContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_odwolanie; }
	}

	public final OdwolanieContext odwolanie() throws RecognitionException {
		OdwolanieContext _localctx = new OdwolanieContext(_ctx, getState());
		enterRule(_localctx, 60, RULE_odwolanie);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(326);
			match(T__2);
			setState(327);
			nazwa();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class NpContext extends ParserRuleContext {
		public WyrazenieContext wyrazenie() {
			return getRuleContext(WyrazenieContext.class,0);
		}
		public NpContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_np; }
	}

	public final NpContext np() throws RecognitionException {
		NpContext _localctx = new NpContext(_ctx, getState());
		enterRule(_localctx, 62, RULE_np);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(329);
			_la = _input.LA(1);
			if ( !(_la==T__28 || _la==T__29) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			setState(330);
			wyrazenie();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class WsContext extends ParserRuleContext {
		public WyrazenieContext wyrazenie() {
			return getRuleContext(WyrazenieContext.class,0);
		}
		public WsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_ws; }
	}

	public final WsContext ws() throws RecognitionException {
		WsContext _localctx = new WsContext(_ctx, getState());
		enterRule(_localctx, 64, RULE_ws);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(332);
			_la = _input.LA(1);
			if ( !(_la==T__30 || _la==T__31) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			setState(333);
			wyrazenie();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class PwContext extends ParserRuleContext {
		public WyrazenieContext wyrazenie() {
			return getRuleContext(WyrazenieContext.class,0);
		}
		public PwContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_pw; }
	}

	public final PwContext pw() throws RecognitionException {
		PwContext _localctx = new PwContext(_ctx, getState());
		enterRule(_localctx, 66, RULE_pw);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(335);
			_la = _input.LA(1);
			if ( !(_la==T__32 || _la==T__33) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			setState(336);
			wyrazenie();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class LwContext extends ParserRuleContext {
		public WyrazenieContext wyrazenie() {
			return getRuleContext(WyrazenieContext.class,0);
		}
		public LwContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_lw; }
	}

	public final LwContext lw() throws RecognitionException {
		LwContext _localctx = new LwContext(_ctx, getState());
		enterRule(_localctx, 68, RULE_lw);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(338);
			_la = _input.LA(1);
			if ( !(_la==T__34 || _la==T__35) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			setState(339);
			wyrazenie();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class WyContext extends ParserRuleContext {
		public WyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_wy; }
	}

	public final WyContext wy() throws RecognitionException {
		WyContext _localctx = new WyContext(_ctx, getState());
		enterRule(_localctx, 70, RULE_wy);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(341);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 962072674304L) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class PbContext extends ParserRuleContext {
		public PbContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_pb; }
	}

	public final PbContext pb() throws RecognitionException {
		PbContext _localctx = new PbContext(_ctx, getState());
		enterRule(_localctx, 72, RULE_pb);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(343);
			_la = _input.LA(1);
			if ( !(_la==T__39 || _la==T__40) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ObContext extends ParserRuleContext {
		public ObContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_ob; }
	}

	public final ObContext ob() throws RecognitionException {
		ObContext _localctx = new ObContext(_ctx, getState());
		enterRule(_localctx, 74, RULE_ob);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(345);
			_la = _input.LA(1);
			if ( !(_la==T__41 || _la==T__42) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class SbContext extends ParserRuleContext {
		public SbContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_sb; }
	}

	public final SbContext sb() throws RecognitionException {
		SbContext _localctx = new SbContext(_ctx, getState());
		enterRule(_localctx, 76, RULE_sb);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(347);
			_la = _input.LA(1);
			if ( !(_la==T__43 || _la==T__44) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class UbContext extends ParserRuleContext {
		public UbContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_ub; }
	}

	public final UbContext ub() throws RecognitionException {
		UbContext _localctx = new UbContext(_ctx, getState());
		enterRule(_localctx, 78, RULE_ub);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(349);
			_la = _input.LA(1);
			if ( !(_la==T__45 || _la==T__46) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class DomContext extends ParserRuleContext {
		public DomContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_dom; }
	}

	public final DomContext dom() throws RecognitionException {
		DomContext _localctx = new DomContext(_ctx, getState());
		enterRule(_localctx, 80, RULE_dom);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(351);
			match(T__47);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class NapisContext extends ParserRuleContext {
		public TerminalNode LITERAL_WYRAZU() { return getToken(LogiXParser.LITERAL_WYRAZU, 0); }
		public NapisContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_napis; }
	}

	public final NapisContext napis() throws RecognitionException {
		NapisContext _localctx = new NapisContext(_ctx, getState());
		enterRule(_localctx, 82, RULE_napis);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(353);
			match(T__48);
			setState(354);
			match(LITERAL_WYRAZU);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class UstawContext extends ParserRuleContext {
		public List<WyrazenieContext> wyrazenie() {
			return getRuleContexts(WyrazenieContext.class);
		}
		public WyrazenieContext wyrazenie(int i) {
			return getRuleContext(WyrazenieContext.class,i);
		}
		public UstawContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_ustaw; }
	}

	public final UstawContext ustaw() throws RecognitionException {
		UstawContext _localctx = new UstawContext(_ctx, getState());
		enterRule(_localctx, 84, RULE_ustaw);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(356);
			match(T__49);
			setState(357);
			wyrazenie();
			setState(358);
			wyrazenie();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class LosowoContext extends ParserRuleContext {
		public WyrazenieContext wyrazenie() {
			return getRuleContext(WyrazenieContext.class,0);
		}
		public LosowoContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_losowo; }
	}

	public final LosowoContext losowo() throws RecognitionException {
		LosowoContext _localctx = new LosowoContext(_ctx, getState());
		enterRule(_localctx, 86, RULE_losowo);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(360);
			match(T__50);
			setState(361);
			wyrazenie();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class DlaContext extends ParserRuleContext {
		public NazwaContext nazwa() {
			return getRuleContext(NazwaContext.class,0);
		}
		public List<WyrazenieContext> wyrazenie() {
			return getRuleContexts(WyrazenieContext.class);
		}
		public WyrazenieContext wyrazenie(int i) {
			return getRuleContext(WyrazenieContext.class,i);
		}
		public BlokContext blok() {
			return getRuleContext(BlokContext.class,0);
		}
		public DlaContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_dla; }
	}

	public final DlaContext dla() throws RecognitionException {
		DlaContext _localctx = new DlaContext(_ctx, getState());
		enterRule(_localctx, 88, RULE_dla);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(363);
			match(T__51);
			setState(364);
			match(T__5);
			setState(365);
			nazwa();
			setState(366);
			wyrazenie();
			setState(367);
			wyrazenie();
			setState(368);
			wyrazenie();
			setState(369);
			match(T__6);
			setState(370);
			blok();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class KwadratContext extends ParserRuleContext {
		public WyrazenieContext wyrazenie() {
			return getRuleContext(WyrazenieContext.class,0);
		}
		public KwadratContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_kwadrat; }
	}

	public final KwadratContext kwadrat() throws RecognitionException {
		KwadratContext _localctx = new KwadratContext(_ctx, getState());
		enterRule(_localctx, 90, RULE_kwadrat);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(372);
			match(T__52);
			setState(373);
			wyrazenie();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class TrojkatContext extends ParserRuleContext {
		public WyrazenieContext wyrazenie() {
			return getRuleContext(WyrazenieContext.class,0);
		}
		public TrojkatContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_trojkat; }
	}

	public final TrojkatContext trojkat() throws RecognitionException {
		TrojkatContext _localctx = new TrojkatContext(_ctx, getState());
		enterRule(_localctx, 92, RULE_trojkat);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(375);
			match(T__53);
			setState(376);
			wyrazenie();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class KoloContext extends ParserRuleContext {
		public WyrazenieContext wyrazenie() {
			return getRuleContext(WyrazenieContext.class,0);
		}
		public KoloContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_kolo; }
	}

	public final KoloContext kolo() throws RecognitionException {
		KoloContext _localctx = new KoloContext(_ctx, getState());
		enterRule(_localctx, 94, RULE_kolo);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(378);
			match(T__54);
			setState(379);
			wyrazenie();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class LiczbaContext extends ParserRuleContext {
		public TerminalNode CYFRA() { return getToken(LogiXParser.CYFRA, 0); }
		public LiczbaContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_liczba; }
	}

	public final LiczbaContext liczba() throws RecognitionException {
		LiczbaContext _localctx = new LiczbaContext(_ctx, getState());
		enterRule(_localctx, 96, RULE_liczba);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(381);
			match(CYFRA);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class KomentarzContext extends ParserRuleContext {
		public TerminalNode KOMENTARZ() { return getToken(LogiXParser.KOMENTARZ, 0); }
		public KomentarzContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_komentarz; }
	}

	public final KomentarzContext komentarz() throws RecognitionException {
		KomentarzContext _localctx = new KomentarzContext(_ctx, getState());
		enterRule(_localctx, 98, RULE_komentarz);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(383);
			match(KOMENTARZ);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static final String _serializedATN =
		"\u0004\u0001=\u0182\u0002\u0000\u0007\u0000\u0002\u0001\u0007\u0001\u0002"+
		"\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004\u0007\u0004\u0002"+
		"\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002\u0007\u0007\u0007\u0002"+
		"\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002\u000b\u0007\u000b\u0002"+
		"\f\u0007\f\u0002\r\u0007\r\u0002\u000e\u0007\u000e\u0002\u000f\u0007\u000f"+
		"\u0002\u0010\u0007\u0010\u0002\u0011\u0007\u0011\u0002\u0012\u0007\u0012"+
		"\u0002\u0013\u0007\u0013\u0002\u0014\u0007\u0014\u0002\u0015\u0007\u0015"+
		"\u0002\u0016\u0007\u0016\u0002\u0017\u0007\u0017\u0002\u0018\u0007\u0018"+
		"\u0002\u0019\u0007\u0019\u0002\u001a\u0007\u001a\u0002\u001b\u0007\u001b"+
		"\u0002\u001c\u0007\u001c\u0002\u001d\u0007\u001d\u0002\u001e\u0007\u001e"+
		"\u0002\u001f\u0007\u001f\u0002 \u0007 \u0002!\u0007!\u0002\"\u0007\"\u0002"+
		"#\u0007#\u0002$\u0007$\u0002%\u0007%\u0002&\u0007&\u0002\'\u0007\'\u0002"+
		"(\u0007(\u0002)\u0007)\u0002*\u0007*\u0002+\u0007+\u0002,\u0007,\u0002"+
		"-\u0007-\u0002.\u0007.\u0002/\u0007/\u00020\u00070\u00021\u00071\u0001"+
		"\u0000\u0003\u0000f\b\u0000\u0001\u0000\u0004\u0000i\b\u0000\u000b\u0000"+
		"\f\u0000j\u0001\u0000\u0003\u0000n\b\u0000\u0001\u0000\u0001\u0000\u0001"+
		"\u0001\u0004\u0001s\b\u0001\u000b\u0001\f\u0001t\u0001\u0001\u0003\u0001"+
		"x\b\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0003\u0001}\b\u0001\u0001"+
		"\u0001\u0003\u0001\u0080\b\u0001\u0001\u0002\u0001\u0002\u0001\u0002\u0001"+
		"\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001"+
		"\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001"+
		"\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0003\u0002\u0095\b\u0002\u0001"+
		"\u0003\u0001\u0003\u0005\u0003\u0099\b\u0003\n\u0003\f\u0003\u009c\t\u0003"+
		"\u0001\u0004\u0001\u0004\u0001\u0004\u0005\u0004\u00a1\b\u0004\n\u0004"+
		"\f\u0004\u00a4\t\u0004\u0001\u0004\u0003\u0004\u00a7\b\u0004\u0001\u0004"+
		"\u0003\u0004\u00aa\b\u0004\u0001\u0004\u0004\u0004\u00ad\b\u0004\u000b"+
		"\u0004\f\u0004\u00ae\u0001\u0004\u0001\u0004\u0001\u0005\u0001\u0005\u0001"+
		"\u0005\u0001\u0005\u0005\u0005\u00b7\b\u0005\n\u0005\f\u0005\u00ba\t\u0005"+
		"\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006"+
		"\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0003\u0006\u00c6\b\u0006"+
		"\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001\b\u0001\b\u0004"+
		"\b\u00ce\b\b\u000b\b\f\b\u00cf\u0001\b\u0001\b\u0001\t\u0001\t\u0001\t"+
		"\u0001\t\u0001\n\u0001\n\u0001\n\u0001\n\u0001\u000b\u0001\u000b\u0001"+
		"\f\u0001\f\u0001\f\u0003\f\u00e1\b\f\u0001\r\u0001\r\u0001\r\u0001\u000e"+
		"\u0001\u000e\u0001\u000e\u0001\u000f\u0001\u000f\u0001\u000f\u0001\u0010"+
		"\u0001\u0010\u0001\u0010\u0001\u0011\u0001\u0011\u0001\u0011\u0001\u0011"+
		"\u0001\u0012\u0001\u0012\u0001\u0012\u0001\u0012\u0001\u0013\u0001\u0013"+
		"\u0001\u0013\u0001\u0014\u0001\u0014\u0001\u0014\u0001\u0014\u0001\u0015"+
		"\u0001\u0015\u0001\u0015\u0001\u0016\u0001\u0016\u0001\u0016\u0001\u0016"+
		"\u0005\u0016\u0105\b\u0016\n\u0016\f\u0016\u0108\t\u0016\u0001\u0016\u0001"+
		"\u0016\u0001\u0017\u0001\u0017\u0001\u0017\u0003\u0017\u010f\b\u0017\u0001"+
		"\u0017\u0001\u0017\u0001\u0017\u0005\u0017\u0114\b\u0017\n\u0017\f\u0017"+
		"\u0117\t\u0017\u0001\u0017\u0001\u0017\u0001\u0018\u0001\u0018\u0001\u0018"+
		"\u0005\u0018\u011e\b\u0018\n\u0018\f\u0018\u0121\t\u0018\u0001\u0018\u0001"+
		"\u0018\u0001\u0019\u0001\u0019\u0001\u001a\u0001\u001a\u0001\u001a\u0003"+
		"\u001a\u012a\b\u001a\u0001\u001b\u0005\u001b\u012d\b\u001b\n\u001b\f\u001b"+
		"\u0130\t\u001b\u0001\u001b\u0001\u001b\u0001\u001b\u0003\u001b\u0135\b"+
		"\u001b\u0001\u001c\u0001\u001c\u0001\u001c\u0005\u001c\u013a\b\u001c\n"+
		"\u001c\f\u001c\u013d\t\u001c\u0001\u001d\u0001\u001d\u0001\u001d\u0005"+
		"\u001d\u0142\b\u001d\n\u001d\f\u001d\u0145\t\u001d\u0001\u001e\u0001\u001e"+
		"\u0001\u001e\u0001\u001f\u0001\u001f\u0001\u001f\u0001 \u0001 \u0001 "+
		"\u0001!\u0001!\u0001!\u0001\"\u0001\"\u0001\"\u0001#\u0001#\u0001$\u0001"+
		"$\u0001%\u0001%\u0001&\u0001&\u0001\'\u0001\'\u0001(\u0001(\u0001)\u0001"+
		")\u0001)\u0001*\u0001*\u0001*\u0001*\u0001+\u0001+\u0001+\u0001,\u0001"+
		",\u0001,\u0001,\u0001,\u0001,\u0001,\u0001,\u0001,\u0001-\u0001-\u0001"+
		"-\u0001.\u0001.\u0001.\u0001/\u0001/\u0001/\u00010\u00010\u00011\u0001"+
		"1\u00011\u0000\u00002\u0000\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012"+
		"\u0014\u0016\u0018\u001a\u001c\u001e \"$&(*,.02468:<>@BDFHJLNPRTVXZ\\"+
		"^`b\u0000\r\u0001\u0000\t\r\u0001\u0000\u0007\u0007\u0001\u0000\u0019"+
		"\u001a\u0001\u0000\u001b\u001c\u0001\u0000\u001d\u001e\u0001\u0000\u001f"+
		" \u0001\u0000!\"\u0001\u0000#$\u0001\u0000%\'\u0001\u0000()\u0001\u0000"+
		"*+\u0001\u0000,-\u0001\u0000./\u0188\u0000h\u0001\u0000\u0000\u0000\u0002"+
		"\u007f\u0001\u0000\u0000\u0000\u0004\u0094\u0001\u0000\u0000\u0000\u0006"+
		"\u0096\u0001\u0000\u0000\u0000\b\u009d\u0001\u0000\u0000\u0000\n\u00b2"+
		"\u0001\u0000\u0000\u0000\f\u00c5\u0001\u0000\u0000\u0000\u000e\u00c7\u0001"+
		"\u0000\u0000\u0000\u0010\u00cb\u0001\u0000\u0000\u0000\u0012\u00d3\u0001"+
		"\u0000\u0000\u0000\u0014\u00d7\u0001\u0000\u0000\u0000\u0016\u00db\u0001"+
		"\u0000\u0000\u0000\u0018\u00dd\u0001\u0000\u0000\u0000\u001a\u00e2\u0001"+
		"\u0000\u0000\u0000\u001c\u00e5\u0001\u0000\u0000\u0000\u001e\u00e8\u0001"+
		"\u0000\u0000\u0000 \u00eb\u0001\u0000\u0000\u0000\"\u00ee\u0001\u0000"+
		"\u0000\u0000$\u00f2\u0001\u0000\u0000\u0000&\u00f6\u0001\u0000\u0000\u0000"+
		"(\u00f9\u0001\u0000\u0000\u0000*\u00fd\u0001\u0000\u0000\u0000,\u0100"+
		"\u0001\u0000\u0000\u0000.\u010b\u0001\u0000\u0000\u00000\u011a\u0001\u0000"+
		"\u0000\u00002\u0124\u0001\u0000\u0000\u00004\u0129\u0001\u0000\u0000\u0000"+
		"6\u012e\u0001\u0000\u0000\u00008\u0136\u0001\u0000\u0000\u0000:\u013e"+
		"\u0001\u0000\u0000\u0000<\u0146\u0001\u0000\u0000\u0000>\u0149\u0001\u0000"+
		"\u0000\u0000@\u014c\u0001\u0000\u0000\u0000B\u014f\u0001\u0000\u0000\u0000"+
		"D\u0152\u0001\u0000\u0000\u0000F\u0155\u0001\u0000\u0000\u0000H\u0157"+
		"\u0001\u0000\u0000\u0000J\u0159\u0001\u0000\u0000\u0000L\u015b\u0001\u0000"+
		"\u0000\u0000N\u015d\u0001\u0000\u0000\u0000P\u015f\u0001\u0000\u0000\u0000"+
		"R\u0161\u0001\u0000\u0000\u0000T\u0164\u0001\u0000\u0000\u0000V\u0168"+
		"\u0001\u0000\u0000\u0000X\u016b\u0001\u0000\u0000\u0000Z\u0174\u0001\u0000"+
		"\u0000\u0000\\\u0177\u0001\u0000\u0000\u0000^\u017a\u0001\u0000\u0000"+
		"\u0000`\u017d\u0001\u0000\u0000\u0000b\u017f\u0001\u0000\u0000\u0000d"+
		"f\u0003\u0002\u0001\u0000ed\u0001\u0000\u0000\u0000ef\u0001\u0000\u0000"+
		"\u0000fg\u0001\u0000\u0000\u0000gi\u0005<\u0000\u0000he\u0001\u0000\u0000"+
		"\u0000ij\u0001\u0000\u0000\u0000jh\u0001\u0000\u0000\u0000jk\u0001\u0000"+
		"\u0000\u0000km\u0001\u0000\u0000\u0000ln\u0003\u0002\u0001\u0000ml\u0001"+
		"\u0000\u0000\u0000mn\u0001\u0000\u0000\u0000no\u0001\u0000\u0000\u0000"+
		"op\u0005\u0000\u0000\u0001p\u0001\u0001\u0000\u0000\u0000qs\u0003\u0004"+
		"\u0002\u0000rq\u0001\u0000\u0000\u0000st\u0001\u0000\u0000\u0000tr\u0001"+
		"\u0000\u0000\u0000tu\u0001\u0000\u0000\u0000uw\u0001\u0000\u0000\u0000"+
		"vx\u0003b1\u0000wv\u0001\u0000\u0000\u0000wx\u0001\u0000\u0000\u0000x"+
		"\u0080\u0001\u0000\u0000\u0000y\u0080\u0003b1\u0000z|\u0003\u0018\f\u0000"+
		"{}\u0003b1\u0000|{\u0001\u0000\u0000\u0000|}\u0001\u0000\u0000\u0000}"+
		"\u0080\u0001\u0000\u0000\u0000~\u0080\u0003\b\u0004\u0000\u007fr\u0001"+
		"\u0000\u0000\u0000\u007fy\u0001\u0000\u0000\u0000\u007fz\u0001\u0000\u0000"+
		"\u0000\u007f~\u0001\u0000\u0000\u0000\u0080\u0003\u0001\u0000\u0000\u0000"+
		"\u0081\u0095\u0003\u000e\u0007\u0000\u0082\u0095\u0003>\u001f\u0000\u0083"+
		"\u0095\u0003@ \u0000\u0084\u0095\u0003B!\u0000\u0085\u0095\u0003D\"\u0000"+
		"\u0086\u0095\u0003F#\u0000\u0087\u0095\u0003H$\u0000\u0088\u0095\u0003"+
		"J%\u0000\u0089\u0095\u0003L&\u0000\u008a\u0095\u0003N\'\u0000\u008b\u0095"+
		"\u0003P(\u0000\u008c\u0095\u0003R)\u0000\u008d\u0095\u0003T*\u0000\u008e"+
		"\u0095\u0003\u0006\u0003\u0000\u008f\u0095\u0003\u0012\t\u0000\u0090\u0095"+
		"\u0003X,\u0000\u0091\u0095\u0003Z-\u0000\u0092\u0095\u0003\\.\u0000\u0093"+
		"\u0095\u0003^/\u0000\u0094\u0081\u0001\u0000\u0000\u0000\u0094\u0082\u0001"+
		"\u0000\u0000\u0000\u0094\u0083\u0001\u0000\u0000\u0000\u0094\u0084\u0001"+
		"\u0000\u0000\u0000\u0094\u0085\u0001\u0000\u0000\u0000\u0094\u0086\u0001"+
		"\u0000\u0000\u0000\u0094\u0087\u0001\u0000\u0000\u0000\u0094\u0088\u0001"+
		"\u0000\u0000\u0000\u0094\u0089\u0001\u0000\u0000\u0000\u0094\u008a\u0001"+
		"\u0000\u0000\u0000\u0094\u008b\u0001\u0000\u0000\u0000\u0094\u008c\u0001"+
		"\u0000\u0000\u0000\u0094\u008d\u0001\u0000\u0000\u0000\u0094\u008e\u0001"+
		"\u0000\u0000\u0000\u0094\u008f\u0001\u0000\u0000\u0000\u0094\u0090\u0001"+
		"\u0000\u0000\u0000\u0094\u0091\u0001\u0000\u0000\u0000\u0094\u0092\u0001"+
		"\u0000\u0000\u0000\u0094\u0093\u0001\u0000\u0000\u0000\u0095\u0005\u0001"+
		"\u0000\u0000\u0000\u0096\u009a\u00032\u0019\u0000\u0097\u0099\u0003:\u001d"+
		"\u0000\u0098\u0097\u0001\u0000\u0000\u0000\u0099\u009c\u0001\u0000\u0000"+
		"\u0000\u009a\u0098\u0001\u0000\u0000\u0000\u009a\u009b\u0001\u0000\u0000"+
		"\u0000\u009b\u0007\u0001\u0000\u0000\u0000\u009c\u009a\u0001\u0000\u0000"+
		"\u0000\u009d\u009e\u0005\u0001\u0000\u0000\u009e\u00a2\u00032\u0019\u0000"+
		"\u009f\u00a1\u0003\n\u0005\u0000\u00a0\u009f\u0001\u0000\u0000\u0000\u00a1"+
		"\u00a4\u0001\u0000\u0000\u0000\u00a2\u00a0\u0001\u0000\u0000\u0000\u00a2"+
		"\u00a3\u0001\u0000\u0000\u0000\u00a3\u00a6\u0001\u0000\u0000\u0000\u00a4"+
		"\u00a2\u0001\u0000\u0000\u0000\u00a5\u00a7\u0005<\u0000\u0000\u00a6\u00a5"+
		"\u0001\u0000\u0000\u0000\u00a6\u00a7\u0001\u0000\u0000\u0000\u00a7\u00ac"+
		"\u0001\u0000\u0000\u0000\u00a8\u00aa\u0003\u0002\u0001\u0000\u00a9\u00a8"+
		"\u0001\u0000\u0000\u0000\u00a9\u00aa\u0001\u0000\u0000\u0000\u00aa\u00ab"+
		"\u0001\u0000\u0000\u0000\u00ab\u00ad\u0005<\u0000\u0000\u00ac\u00a9\u0001"+
		"\u0000\u0000\u0000\u00ad\u00ae\u0001\u0000\u0000\u0000\u00ae\u00ac\u0001"+
		"\u0000\u0000\u0000\u00ae\u00af\u0001\u0000\u0000\u0000\u00af\u00b0\u0001"+
		"\u0000\u0000\u0000\u00b0\u00b1\u0005\u0002\u0000\u0000\u00b1\t\u0001\u0000"+
		"\u0000\u0000\u00b2\u00b3\u0005\u0003\u0000\u0000\u00b3\u00b8\u00032\u0019"+
		"\u0000\u00b4\u00b5\u0005\u0004\u0000\u0000\u00b5\u00b7\u0003\n\u0005\u0000"+
		"\u00b6\u00b4\u0001\u0000\u0000\u0000\u00b7\u00ba\u0001\u0000\u0000\u0000"+
		"\u00b8\u00b6\u0001\u0000\u0000\u0000\u00b8\u00b9\u0001\u0000\u0000\u0000"+
		"\u00b9\u000b\u0001\u0000\u0000\u0000\u00ba\u00b8\u0001\u0000\u0000\u0000"+
		"\u00bb\u00c6\u0003V+\u0000\u00bc\u00c6\u0003\u001a\r\u0000\u00bd\u00c6"+
		"\u0003\u001c\u000e\u0000\u00be\u00c6\u0003\u001e\u000f\u0000\u00bf\u00c6"+
		"\u0003 \u0010\u0000\u00c0\u00c6\u0003\"\u0011\u0000\u00c1\u00c6\u0003"+
		"$\u0012\u0000\u00c2\u00c6\u0003&\u0013\u0000\u00c3\u00c6\u0003(\u0014"+
		"\u0000\u00c4\u00c6\u0003*\u0015\u0000\u00c5\u00bb\u0001\u0000\u0000\u0000"+
		"\u00c5\u00bc\u0001\u0000\u0000\u0000\u00c5\u00bd\u0001\u0000\u0000\u0000"+
		"\u00c5\u00be\u0001\u0000\u0000\u0000\u00c5\u00bf\u0001\u0000\u0000\u0000"+
		"\u00c5\u00c0\u0001\u0000\u0000\u0000\u00c5\u00c1\u0001\u0000\u0000\u0000"+
		"\u00c5\u00c2\u0001\u0000\u0000\u0000\u00c5\u00c3\u0001\u0000\u0000\u0000"+
		"\u00c5\u00c4\u0001\u0000\u0000\u0000\u00c6\r\u0001\u0000\u0000\u0000\u00c7"+
		"\u00c8\u0005\u0005\u0000\u0000\u00c8\u00c9\u0003`0\u0000\u00c9\u00ca\u0003"+
		"\u0010\b\u0000\u00ca\u000f\u0001\u0000\u0000\u0000\u00cb\u00cd\u0005\u0006"+
		"\u0000\u0000\u00cc\u00ce\u0003\u0004\u0002\u0000\u00cd\u00cc\u0001\u0000"+
		"\u0000\u0000\u00ce\u00cf\u0001\u0000\u0000\u0000\u00cf\u00cd\u0001\u0000"+
		"\u0000\u0000\u00cf\u00d0\u0001\u0000\u0000\u0000\u00d0\u00d1\u0001\u0000"+
		"\u0000\u0000\u00d1\u00d2\u0005\u0007\u0000\u0000\u00d2\u0011\u0001\u0000"+
		"\u0000\u0000\u00d3\u00d4\u0005\b\u0000\u0000\u00d4\u00d5\u0003\u0014\n"+
		"\u0000\u00d5\u00d6\u0003\u0010\b\u0000\u00d6\u0013\u0001\u0000\u0000\u0000"+
		"\u00d7\u00d8\u0003:\u001d\u0000\u00d8\u00d9\u0003\u0016\u000b\u0000\u00d9"+
		"\u00da\u0003:\u001d\u0000\u00da\u0015\u0001\u0000\u0000\u0000\u00db\u00dc"+
		"\u0007\u0000\u0000\u0000\u00dc\u0017\u0001\u0000\u0000\u0000\u00dd\u00e0"+
		"\u0005\u000e\u0000\u0000\u00de\u00e1\u00034\u001a\u0000\u00df\u00e1\u0003"+
		"0\u0018\u0000\u00e0\u00de\u0001\u0000\u0000\u0000\u00e0\u00df\u0001\u0000"+
		"\u0000\u0000\u00e1\u0019\u0001\u0000\u0000\u0000\u00e2\u00e3\u0005\u000f"+
		"\u0000\u0000\u00e3\u00e4\u0003,\u0016\u0000\u00e4\u001b\u0001\u0000\u0000"+
		"\u0000\u00e5\u00e6\u0005\u0010\u0000\u0000\u00e6\u00e7\u0003,\u0016\u0000"+
		"\u00e7\u001d\u0001\u0000\u0000\u0000\u00e8\u00e9\u0005\u0011\u0000\u0000"+
		"\u00e9\u00ea\u0003,\u0016\u0000\u00ea\u001f\u0001\u0000\u0000\u0000\u00eb"+
		"\u00ec\u0005\u0012\u0000\u0000\u00ec\u00ed\u0003,\u0016\u0000\u00ed!\u0001"+
		"\u0000\u0000\u0000\u00ee\u00ef\u0005\u0013\u0000\u0000\u00ef\u00f0\u0003"+
		"`0\u0000\u00f0\u00f1\u0003,\u0016\u0000\u00f1#\u0001\u0000\u0000\u0000"+
		"\u00f2\u00f3\u0005\u0014\u0000\u0000\u00f3\u00f4\u0003,\u0016\u0000\u00f4"+
		"\u00f5\u0003.\u0017\u0000\u00f5%\u0001\u0000\u0000\u0000\u00f6\u00f7\u0005"+
		"\u0015\u0000\u0000\u00f7\u00f8\u0003,\u0016\u0000\u00f8\'\u0001\u0000"+
		"\u0000\u0000\u00f9\u00fa\u0005\u0016\u0000\u0000\u00fa\u00fb\u00034\u001a"+
		"\u0000\u00fb\u00fc\u0003,\u0016\u0000\u00fc)\u0001\u0000\u0000\u0000\u00fd"+
		"\u00fe\u0005\u0017\u0000\u0000\u00fe\u00ff\u0003,\u0016\u0000\u00ff+\u0001"+
		"\u0000\u0000\u0000\u0100\u0101\u0005\u0006\u0000\u0000\u0101\u0106\u0003"+
		"4\u001a\u0000\u0102\u0103\u0005\u0004\u0000\u0000\u0103\u0105\u00034\u001a"+
		"\u0000\u0104\u0102\u0001\u0000\u0000\u0000\u0105\u0108\u0001\u0000\u0000"+
		"\u0000\u0106\u0104\u0001\u0000\u0000\u0000\u0106\u0107\u0001\u0000\u0000"+
		"\u0000\u0107\u0109\u0001\u0000\u0000\u0000\u0108\u0106\u0001\u0000\u0000"+
		"\u0000\u0109\u010a\u0005\u0007\u0000\u0000\u010a-\u0001\u0000\u0000\u0000"+
		"\u010b\u010e\u0005\u0006\u0000\u0000\u010c\u010f\u0003.\u0017\u0000\u010d"+
		"\u010f\u0003,\u0016\u0000\u010e\u010c\u0001\u0000\u0000\u0000\u010e\u010d"+
		"\u0001\u0000\u0000\u0000\u010f\u0110\u0001\u0000\u0000\u0000\u0110\u0115"+
		"\u0005\u0018\u0000\u0000\u0111\u0114\u0003.\u0017\u0000\u0112\u0114\u0003"+
		",\u0016\u0000\u0113\u0111\u0001\u0000\u0000\u0000\u0113\u0112\u0001\u0000"+
		"\u0000\u0000\u0114\u0117\u0001\u0000\u0000\u0000\u0115\u0113\u0001\u0000"+
		"\u0000\u0000\u0115\u0116\u0001\u0000\u0000\u0000\u0116\u0118\u0001\u0000"+
		"\u0000\u0000\u0117\u0115\u0001\u0000\u0000\u0000\u0118\u0119\u0005\u0007"+
		"\u0000\u0000\u0119/\u0001\u0000\u0000\u0000\u011a\u011f\u0005\u0006\u0000"+
		"\u0000\u011b\u011e\u00030\u0018\u0000\u011c\u011e\b\u0001\u0000\u0000"+
		"\u011d\u011b\u0001\u0000\u0000\u0000\u011d\u011c\u0001\u0000\u0000\u0000"+
		"\u011e\u0121\u0001\u0000\u0000\u0000\u011f\u011d\u0001\u0000\u0000\u0000"+
		"\u011f\u0120\u0001\u0000\u0000\u0000\u0120\u0122\u0001\u0000\u0000\u0000"+
		"\u0121\u011f\u0001\u0000\u0000\u0000\u0122\u0123\u0005\u0007\u0000\u0000"+
		"\u01231\u0001\u0000\u0000\u0000\u0124\u0125\u00059\u0000\u0000\u01253"+
		"\u0001\u0000\u0000\u0000\u0126\u012a\u00058\u0000\u0000\u0127\u012a\u0003"+
		":\u001d\u0000\u0128\u012a\u0003<\u001e\u0000\u0129\u0126\u0001\u0000\u0000"+
		"\u0000\u0129\u0127\u0001\u0000\u0000\u0000\u0129\u0128\u0001\u0000\u0000"+
		"\u0000\u012a5\u0001\u0000\u0000\u0000\u012b\u012d\u0007\u0002\u0000\u0000"+
		"\u012c\u012b\u0001\u0000\u0000\u0000\u012d\u0130\u0001\u0000\u0000\u0000"+
		"\u012e\u012c\u0001\u0000\u0000\u0000\u012e\u012f\u0001\u0000\u0000\u0000"+
		"\u012f\u0134\u0001\u0000\u0000\u0000\u0130\u012e\u0001\u0000\u0000\u0000"+
		"\u0131\u0135\u0003`0\u0000\u0132\u0135\u0003<\u001e\u0000\u0133\u0135"+
		"\u0003\f\u0006\u0000\u0134\u0131\u0001\u0000\u0000\u0000\u0134\u0132\u0001"+
		"\u0000\u0000\u0000\u0134\u0133\u0001\u0000\u0000\u0000\u01357\u0001\u0000"+
		"\u0000\u0000\u0136\u013b\u00036\u001b\u0000\u0137\u0138\u0007\u0003\u0000"+
		"\u0000\u0138\u013a\u00036\u001b\u0000\u0139\u0137\u0001\u0000\u0000\u0000"+
		"\u013a\u013d\u0001\u0000\u0000\u0000\u013b\u0139\u0001\u0000\u0000\u0000"+
		"\u013b\u013c\u0001\u0000\u0000\u0000\u013c9\u0001\u0000\u0000\u0000\u013d"+
		"\u013b\u0001\u0000\u0000\u0000\u013e\u0143\u00038\u001c\u0000\u013f\u0140"+
		"\u0007\u0002\u0000\u0000\u0140\u0142\u00038\u001c\u0000\u0141\u013f\u0001"+
		"\u0000\u0000\u0000\u0142\u0145\u0001\u0000\u0000\u0000\u0143\u0141\u0001"+
		"\u0000\u0000\u0000\u0143\u0144\u0001\u0000\u0000\u0000\u0144;\u0001\u0000"+
		"\u0000\u0000\u0145\u0143\u0001\u0000\u0000\u0000\u0146\u0147\u0005\u0003"+
		"\u0000\u0000\u0147\u0148\u00032\u0019\u0000\u0148=\u0001\u0000\u0000\u0000"+
		"\u0149\u014a\u0007\u0004\u0000\u0000\u014a\u014b\u0003:\u001d\u0000\u014b"+
		"?\u0001\u0000\u0000\u0000\u014c\u014d\u0007\u0005\u0000\u0000\u014d\u014e"+
		"\u0003:\u001d\u0000\u014eA\u0001\u0000\u0000\u0000\u014f\u0150\u0007\u0006"+
		"\u0000\u0000\u0150\u0151\u0003:\u001d\u0000\u0151C\u0001\u0000\u0000\u0000"+
		"\u0152\u0153\u0007\u0007\u0000\u0000\u0153\u0154\u0003:\u001d\u0000\u0154"+
		"E\u0001\u0000\u0000\u0000\u0155\u0156\u0007\b\u0000\u0000\u0156G\u0001"+
		"\u0000\u0000\u0000\u0157\u0158\u0007\t\u0000\u0000\u0158I\u0001\u0000"+
		"\u0000\u0000\u0159\u015a\u0007\n\u0000\u0000\u015aK\u0001\u0000\u0000"+
		"\u0000\u015b\u015c\u0007\u000b\u0000\u0000\u015cM\u0001\u0000\u0000\u0000"+
		"\u015d\u015e\u0007\f\u0000\u0000\u015eO\u0001\u0000\u0000\u0000\u015f"+
		"\u0160\u00050\u0000\u0000\u0160Q\u0001\u0000\u0000\u0000\u0161\u0162\u0005"+
		"1\u0000\u0000\u0162\u0163\u00058\u0000\u0000\u0163S\u0001\u0000\u0000"+
		"\u0000\u0164\u0165\u00052\u0000\u0000\u0165\u0166\u0003:\u001d\u0000\u0166"+
		"\u0167\u0003:\u001d\u0000\u0167U\u0001\u0000\u0000\u0000\u0168\u0169\u0005"+
		"3\u0000\u0000\u0169\u016a\u0003:\u001d\u0000\u016aW\u0001\u0000\u0000"+
		"\u0000\u016b\u016c\u00054\u0000\u0000\u016c\u016d\u0005\u0006\u0000\u0000"+
		"\u016d\u016e\u00032\u0019\u0000\u016e\u016f\u0003:\u001d\u0000\u016f\u0170"+
		"\u0003:\u001d\u0000\u0170\u0171\u0003:\u001d\u0000\u0171\u0172\u0005\u0007"+
		"\u0000\u0000\u0172\u0173\u0003\u0010\b\u0000\u0173Y\u0001\u0000\u0000"+
		"\u0000\u0174\u0175\u00055\u0000\u0000\u0175\u0176\u0003:\u001d\u0000\u0176"+
		"[\u0001\u0000\u0000\u0000\u0177\u0178\u00056\u0000\u0000\u0178\u0179\u0003"+
		":\u001d\u0000\u0179]\u0001\u0000\u0000\u0000\u017a\u017b\u00057\u0000"+
		"\u0000\u017b\u017c\u0003:\u001d\u0000\u017c_\u0001\u0000\u0000\u0000\u017d"+
		"\u017e\u0005:\u0000\u0000\u017ea\u0001\u0000\u0000\u0000\u017f\u0180\u0005"+
		";\u0000\u0000\u0180c\u0001\u0000\u0000\u0000\u001cejmtw|\u007f\u0094\u009a"+
		"\u00a2\u00a6\u00a9\u00ae\u00b8\u00c5\u00cf\u00e0\u0106\u010e\u0113\u0115"+
		"\u011d\u011f\u0129\u012e\u0134\u013b\u0143";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}