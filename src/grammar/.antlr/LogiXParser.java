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
		LITERAL_WYRAZU=46, LANCUCH=47, CYFRA=48, KOMENTARZ=49, EOL=50, BIALY_ZNAK=51;
	public static final int
		RULE_prog = 0, RULE_linia = 1, RULE_polecenia = 2, RULE_wywolanieProcedury = 3, 
		RULE_deklaracjaProcedury = 4, RULE_deklaracjeParametrow = 5, RULE_func_ = 6, 
		RULE_powtorz = 7, RULE_blok = 8, RULE_jesli = 9, RULE_porownanie = 10, 
		RULE_operatorPorownania = 11, RULE_zrob = 12, RULE_wypisz_ = 13, RULE_lancuchZnakowy = 14, 
		RULE_nazwa = 15, RULE_wartosc = 16, RULE_wyrazenieZnaku = 17, RULE_wielokrotneWyrazenie = 18, 
		RULE_wyrazenie = 19, RULE_odwolanie = 20, RULE_np = 21, RULE_ws = 22, 
		RULE_pw = 23, RULE_lw = 24, RULE_wy = 25, RULE_pb = 26, RULE_ob = 27, 
		RULE_sb = 28, RULE_ub = 29, RULE_dom = 30, RULE_ubop = 31, RULE_napis = 32, 
		RULE_ustaw = 33, RULE_losowo = 34, RULE_dla = 35, RULE_kwadrat = 36, RULE_trojkat = 37, 
		RULE_kolo = 38, RULE_liczba = 39, RULE_komentarz = 40;
	private static String[] makeRuleNames() {
		return new String[] {
			"prog", "linia", "polecenia", "wywolanieProcedury", "deklaracjaProcedury", 
			"deklaracjeParametrow", "func_", "powtorz", "blok", "jesli", "porownanie", 
			"operatorPorownania", "zrob", "wypisz_", "lancuchZnakowy", "nazwa", "wartosc", 
			"wyrazenieZnaku", "wielokrotneWyrazenie", "wyrazenie", "odwolanie", "np", 
			"ws", "pw", "lw", "wy", "pb", "ob", "sb", "ub", "dom", "ubop", "napis", 
			"ustaw", "losowo", "dla", "kwadrat", "trojkat", "kolo", "liczba", "komentarz"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'to'", "'end'", "':'", "','", "'losowo'", "'powtorz'", "'['", 
			"']'", "'jesli'", "'<'", "'>'", "'='", "'zrob'", "'wypisz'", "'+'", "'-'", 
			"'*'", "'/'", "'np'", "'naprzod'", "'ws'", "'wstecz'", "'pw'", "'prawo'", 
			"'lw'", "'lewo'", "'wy'", "'wyczysc'", "'wyczyscekran'", "'pb'", "'podniesbobra'", 
			"'ob'", "'opuscbobra'", "'sb'", "'schowajbobra'", "'ub'", "'ukazbobra'", 
			"'dom'", "'ubop'", "'napis'", "'ustaw'", "'for'", "'kwadrat'", "'trojkat'", 
			"'kolo'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, null, null, null, null, null, "LITERAL_WYRAZU", 
			"LANCUCH", "CYFRA", "KOMENTARZ", "EOL", "BIALY_ZNAK"
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
			setState(86); 
			_errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					setState(83);
					_errHandler.sync(this);
					_la = _input.LA(1);
					if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 774056185455170L) != 0)) {
						{
						setState(82);
						linia();
						}
					}

					setState(85);
					match(EOL);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				setState(88); 
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,1,_ctx);
			} while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER );
			setState(91);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 774056185455170L) != 0)) {
				{
				setState(90);
				linia();
				}
			}

			setState(93);
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
			setState(109);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__5:
			case T__8:
			case T__12:
			case T__18:
			case T__19:
			case T__20:
			case T__21:
			case T__22:
			case T__23:
			case T__24:
			case T__25:
			case T__26:
			case T__27:
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
			case LANCUCH:
				enterOuterAlt(_localctx, 1);
				{
				setState(96); 
				_errHandler.sync(this);
				_la = _input.LA(1);
				do {
					{
					{
					setState(95);
					polecenia();
					}
					}
					setState(98); 
					_errHandler.sync(this);
					_la = _input.LA(1);
				} while ( (((_la) & ~0x3f) == 0 && ((1L << _la) & 211106232017472L) != 0) );
				setState(101);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==KOMENTARZ) {
					{
					setState(100);
					komentarz();
					}
				}

				}
				break;
			case KOMENTARZ:
				enterOuterAlt(_localctx, 2);
				{
				setState(103);
				komentarz();
				}
				break;
			case T__13:
				enterOuterAlt(_localctx, 3);
				{
				setState(104);
				wypisz_();
				setState(106);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==KOMENTARZ) {
					{
					setState(105);
					komentarz();
					}
				}

				}
				break;
			case T__0:
				enterOuterAlt(_localctx, 4);
				{
				setState(108);
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
		public ZrobContext zrob() {
			return getRuleContext(ZrobContext.class,0);
		}
		public WywolanieProceduryContext wywolanieProcedury() {
			return getRuleContext(WywolanieProceduryContext.class,0);
		}
		public JesliContext jesli() {
			return getRuleContext(JesliContext.class,0);
		}
		public UbopContext ubop() {
			return getRuleContext(UbopContext.class,0);
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
			setState(132);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__5:
				enterOuterAlt(_localctx, 1);
				{
				setState(111);
				powtorz();
				}
				break;
			case T__18:
			case T__19:
				enterOuterAlt(_localctx, 2);
				{
				setState(112);
				np();
				}
				break;
			case T__20:
			case T__21:
				enterOuterAlt(_localctx, 3);
				{
				setState(113);
				ws();
				}
				break;
			case T__22:
			case T__23:
				enterOuterAlt(_localctx, 4);
				{
				setState(114);
				pw();
				}
				break;
			case T__24:
			case T__25:
				enterOuterAlt(_localctx, 5);
				{
				setState(115);
				lw();
				}
				break;
			case T__26:
			case T__27:
			case T__28:
				enterOuterAlt(_localctx, 6);
				{
				setState(116);
				wy();
				}
				break;
			case T__29:
			case T__30:
				enterOuterAlt(_localctx, 7);
				{
				setState(117);
				pb();
				}
				break;
			case T__31:
			case T__32:
				enterOuterAlt(_localctx, 8);
				{
				setState(118);
				ob();
				}
				break;
			case T__33:
			case T__34:
				enterOuterAlt(_localctx, 9);
				{
				setState(119);
				sb();
				}
				break;
			case T__35:
			case T__36:
				enterOuterAlt(_localctx, 10);
				{
				setState(120);
				ub();
				}
				break;
			case T__37:
				enterOuterAlt(_localctx, 11);
				{
				setState(121);
				dom();
				}
				break;
			case T__39:
				enterOuterAlt(_localctx, 12);
				{
				setState(122);
				napis();
				}
				break;
			case T__40:
				enterOuterAlt(_localctx, 13);
				{
				setState(123);
				ustaw();
				}
				break;
			case T__12:
				enterOuterAlt(_localctx, 14);
				{
				setState(124);
				zrob();
				}
				break;
			case LANCUCH:
				enterOuterAlt(_localctx, 15);
				{
				setState(125);
				wywolanieProcedury();
				}
				break;
			case T__8:
				enterOuterAlt(_localctx, 16);
				{
				setState(126);
				jesli();
				}
				break;
			case T__38:
				enterOuterAlt(_localctx, 17);
				{
				setState(127);
				ubop();
				}
				break;
			case T__41:
				enterOuterAlt(_localctx, 18);
				{
				setState(128);
				dla();
				}
				break;
			case T__42:
				enterOuterAlt(_localctx, 19);
				{
				setState(129);
				kwadrat();
				}
				break;
			case T__43:
				enterOuterAlt(_localctx, 20);
				{
				setState(130);
				trojkat();
				}
				break;
			case T__44:
				enterOuterAlt(_localctx, 21);
				{
				setState(131);
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
			setState(134);
			nazwa();
			setState(138);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 281474976809000L) != 0)) {
				{
				{
				setState(135);
				wyrazenie();
				}
				}
				setState(140);
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
			setState(141);
			match(T__0);
			setState(142);
			nazwa();
			setState(146);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__2) {
				{
				{
				setState(143);
				deklaracjeParametrow();
				}
				}
				setState(148);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(150);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,10,_ctx) ) {
			case 1:
				{
				setState(149);
				match(EOL);
				}
				break;
			}
			setState(156); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(153);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 774056185455170L) != 0)) {
					{
					setState(152);
					linia();
					}
				}

				setState(155);
				match(EOL);
				}
				}
				setState(158); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( (((_la) & ~0x3f) == 0 && ((1L << _la) & 1899956092297794L) != 0) );
			setState(160);
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
			setState(162);
			match(T__2);
			setState(163);
			nazwa();
			setState(168);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,13,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(164);
					match(T__3);
					setState(165);
					deklaracjeParametrow();
					}
					} 
				}
				setState(170);
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
			setState(171);
			match(T__4);
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
			setState(173);
			match(T__5);
			setState(174);
			liczba();
			setState(175);
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
			setState(177);
			match(T__6);
			setState(179); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(178);
				polecenia();
				}
				}
				setState(181); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( (((_la) & ~0x3f) == 0 && ((1L << _la) & 211106232017472L) != 0) );
			setState(183);
			match(T__7);
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
			setState(185);
			match(T__8);
			setState(186);
			porownanie();
			setState(187);
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
			setState(189);
			wyrazenie();
			setState(190);
			operatorPorownania();
			setState(191);
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
			setState(193);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 7168L) != 0)) ) {
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
	public static class ZrobContext extends ParserRuleContext {
		public TerminalNode LITERAL_WYRAZU() { return getToken(LogiXParser.LITERAL_WYRAZU, 0); }
		public WartoscContext wartosc() {
			return getRuleContext(WartoscContext.class,0);
		}
		public ZrobContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_zrob; }
	}

	public final ZrobContext zrob() throws RecognitionException {
		ZrobContext _localctx = new ZrobContext(_ctx, getState());
		enterRule(_localctx, 24, RULE_zrob);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(195);
			match(T__12);
			setState(196);
			match(LITERAL_WYRAZU);
			setState(197);
			wartosc();
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
		enterRule(_localctx, 26, RULE_wypisz_);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(199);
			match(T__13);
			setState(202);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__2:
			case T__4:
			case T__14:
			case T__15:
			case LITERAL_WYRAZU:
			case CYFRA:
				{
				setState(200);
				wartosc();
				}
				break;
			case T__6:
				{
				setState(201);
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
		enterRule(_localctx, 28, RULE_lancuchZnakowy);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(204);
			match(T__6);
			setState(209);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 4503599627370238L) != 0)) {
				{
				setState(207);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,16,_ctx) ) {
				case 1:
					{
					setState(205);
					lancuchZnakowy();
					}
					break;
				case 2:
					{
					setState(206);
					_la = _input.LA(1);
					if ( _la <= 0 || (_la==T__7) ) {
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
				setState(211);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(212);
			match(T__7);
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
		enterRule(_localctx, 30, RULE_nazwa);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(214);
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
		enterRule(_localctx, 32, RULE_wartosc);
		try {
			setState(219);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,18,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(216);
				match(LITERAL_WYRAZU);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(217);
				wyrazenie();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(218);
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
		enterRule(_localctx, 34, RULE_wyrazenieZnaku);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(224);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__14 || _la==T__15) {
				{
				{
				setState(221);
				_la = _input.LA(1);
				if ( !(_la==T__14 || _la==T__15) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				}
				}
				setState(226);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(230);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case CYFRA:
				{
				setState(227);
				liczba();
				}
				break;
			case T__2:
				{
				setState(228);
				odwolanie();
				}
				break;
			case T__4:
				{
				setState(229);
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
		enterRule(_localctx, 36, RULE_wielokrotneWyrazenie);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(232);
			wyrazenieZnaku();
			setState(237);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__16 || _la==T__17) {
				{
				{
				setState(233);
				_la = _input.LA(1);
				if ( !(_la==T__16 || _la==T__17) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(234);
				wyrazenieZnaku();
				}
				}
				setState(239);
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
		enterRule(_localctx, 38, RULE_wyrazenie);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(240);
			wielokrotneWyrazenie();
			setState(245);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,22,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(241);
					_la = _input.LA(1);
					if ( !(_la==T__14 || _la==T__15) ) {
					_errHandler.recoverInline(this);
					}
					else {
						if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
						_errHandler.reportMatch(this);
						consume();
					}
					setState(242);
					wielokrotneWyrazenie();
					}
					} 
				}
				setState(247);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,22,_ctx);
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
		enterRule(_localctx, 40, RULE_odwolanie);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(248);
			match(T__2);
			setState(249);
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
		enterRule(_localctx, 42, RULE_np);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(251);
			_la = _input.LA(1);
			if ( !(_la==T__18 || _la==T__19) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			setState(252);
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
		enterRule(_localctx, 44, RULE_ws);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(254);
			_la = _input.LA(1);
			if ( !(_la==T__20 || _la==T__21) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			setState(255);
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
		enterRule(_localctx, 46, RULE_pw);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(257);
			_la = _input.LA(1);
			if ( !(_la==T__22 || _la==T__23) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			setState(258);
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
		enterRule(_localctx, 48, RULE_lw);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(260);
			_la = _input.LA(1);
			if ( !(_la==T__24 || _la==T__25) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			setState(261);
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
		enterRule(_localctx, 50, RULE_wy);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(263);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 939524096L) != 0)) ) {
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
		enterRule(_localctx, 52, RULE_pb);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(265);
			_la = _input.LA(1);
			if ( !(_la==T__29 || _la==T__30) ) {
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
		enterRule(_localctx, 54, RULE_ob);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(267);
			_la = _input.LA(1);
			if ( !(_la==T__31 || _la==T__32) ) {
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
		enterRule(_localctx, 56, RULE_sb);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(269);
			_la = _input.LA(1);
			if ( !(_la==T__33 || _la==T__34) ) {
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
		enterRule(_localctx, 58, RULE_ub);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(271);
			_la = _input.LA(1);
			if ( !(_la==T__35 || _la==T__36) ) {
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
		enterRule(_localctx, 60, RULE_dom);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(273);
			match(T__37);
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
	public static class UbopContext extends ParserRuleContext {
		public UbopContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_ubop; }
	}

	public final UbopContext ubop() throws RecognitionException {
		UbopContext _localctx = new UbopContext(_ctx, getState());
		enterRule(_localctx, 62, RULE_ubop);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(275);
			match(T__38);
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
		public NapisContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_napis; }
	}

	public final NapisContext napis() throws RecognitionException {
		NapisContext _localctx = new NapisContext(_ctx, getState());
		enterRule(_localctx, 64, RULE_napis);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(277);
			match(T__39);
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
		enterRule(_localctx, 66, RULE_ustaw);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(279);
			match(T__40);
			setState(280);
			wyrazenie();
			setState(281);
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
		enterRule(_localctx, 68, RULE_losowo);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(283);
			match(T__4);
			setState(284);
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
		enterRule(_localctx, 70, RULE_dla);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(286);
			match(T__41);
			setState(287);
			match(T__6);
			setState(288);
			nazwa();
			setState(289);
			wyrazenie();
			setState(290);
			wyrazenie();
			setState(291);
			wyrazenie();
			setState(292);
			match(T__7);
			setState(293);
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
		enterRule(_localctx, 72, RULE_kwadrat);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(295);
			match(T__42);
			setState(296);
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
		enterRule(_localctx, 74, RULE_trojkat);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(298);
			match(T__43);
			setState(299);
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
		enterRule(_localctx, 76, RULE_kolo);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(301);
			match(T__44);
			setState(302);
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
		enterRule(_localctx, 78, RULE_liczba);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(304);
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
		enterRule(_localctx, 80, RULE_komentarz);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(306);
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
		"\u0004\u00013\u0135\u0002\u0000\u0007\u0000\u0002\u0001\u0007\u0001\u0002"+
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
		"(\u0007(\u0001\u0000\u0003\u0000T\b\u0000\u0001\u0000\u0004\u0000W\b\u0000"+
		"\u000b\u0000\f\u0000X\u0001\u0000\u0003\u0000\\\b\u0000\u0001\u0000\u0001"+
		"\u0000\u0001\u0001\u0004\u0001a\b\u0001\u000b\u0001\f\u0001b\u0001\u0001"+
		"\u0003\u0001f\b\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0003\u0001"+
		"k\b\u0001\u0001\u0001\u0003\u0001n\b\u0001\u0001\u0002\u0001\u0002\u0001"+
		"\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001"+
		"\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001"+
		"\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001"+
		"\u0002\u0003\u0002\u0085\b\u0002\u0001\u0003\u0001\u0003\u0005\u0003\u0089"+
		"\b\u0003\n\u0003\f\u0003\u008c\t\u0003\u0001\u0004\u0001\u0004\u0001\u0004"+
		"\u0005\u0004\u0091\b\u0004\n\u0004\f\u0004\u0094\t\u0004\u0001\u0004\u0003"+
		"\u0004\u0097\b\u0004\u0001\u0004\u0003\u0004\u009a\b\u0004\u0001\u0004"+
		"\u0004\u0004\u009d\b\u0004\u000b\u0004\f\u0004\u009e\u0001\u0004\u0001"+
		"\u0004\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0005\u0005\u00a7"+
		"\b\u0005\n\u0005\f\u0005\u00aa\t\u0005\u0001\u0006\u0001\u0006\u0001\u0007"+
		"\u0001\u0007\u0001\u0007\u0001\u0007\u0001\b\u0001\b\u0004\b\u00b4\b\b"+
		"\u000b\b\f\b\u00b5\u0001\b\u0001\b\u0001\t\u0001\t\u0001\t\u0001\t\u0001"+
		"\n\u0001\n\u0001\n\u0001\n\u0001\u000b\u0001\u000b\u0001\f\u0001\f\u0001"+
		"\f\u0001\f\u0001\r\u0001\r\u0001\r\u0003\r\u00cb\b\r\u0001\u000e\u0001"+
		"\u000e\u0001\u000e\u0005\u000e\u00d0\b\u000e\n\u000e\f\u000e\u00d3\t\u000e"+
		"\u0001\u000e\u0001\u000e\u0001\u000f\u0001\u000f\u0001\u0010\u0001\u0010"+
		"\u0001\u0010\u0003\u0010\u00dc\b\u0010\u0001\u0011\u0005\u0011\u00df\b"+
		"\u0011\n\u0011\f\u0011\u00e2\t\u0011\u0001\u0011\u0001\u0011\u0001\u0011"+
		"\u0003\u0011\u00e7\b\u0011\u0001\u0012\u0001\u0012\u0001\u0012\u0005\u0012"+
		"\u00ec\b\u0012\n\u0012\f\u0012\u00ef\t\u0012\u0001\u0013\u0001\u0013\u0001"+
		"\u0013\u0005\u0013\u00f4\b\u0013\n\u0013\f\u0013\u00f7\t\u0013\u0001\u0014"+
		"\u0001\u0014\u0001\u0014\u0001\u0015\u0001\u0015\u0001\u0015\u0001\u0016"+
		"\u0001\u0016\u0001\u0016\u0001\u0017\u0001\u0017\u0001\u0017\u0001\u0018"+
		"\u0001\u0018\u0001\u0018\u0001\u0019\u0001\u0019\u0001\u001a\u0001\u001a"+
		"\u0001\u001b\u0001\u001b\u0001\u001c\u0001\u001c\u0001\u001d\u0001\u001d"+
		"\u0001\u001e\u0001\u001e\u0001\u001f\u0001\u001f\u0001 \u0001 \u0001!"+
		"\u0001!\u0001!\u0001!\u0001\"\u0001\"\u0001\"\u0001#\u0001#\u0001#\u0001"+
		"#\u0001#\u0001#\u0001#\u0001#\u0001#\u0001$\u0001$\u0001$\u0001%\u0001"+
		"%\u0001%\u0001&\u0001&\u0001&\u0001\'\u0001\'\u0001(\u0001(\u0001(\u0000"+
		"\u0000)\u0000\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018"+
		"\u001a\u001c\u001e \"$&(*,.02468:<>@BDFHJLNP\u0000\r\u0001\u0000\n\f\u0001"+
		"\u0000\b\b\u0001\u0000\u000f\u0010\u0001\u0000\u0011\u0012\u0001\u0000"+
		"\u0013\u0014\u0001\u0000\u0015\u0016\u0001\u0000\u0017\u0018\u0001\u0000"+
		"\u0019\u001a\u0001\u0000\u001b\u001d\u0001\u0000\u001e\u001f\u0001\u0000"+
		" !\u0001\u0000\"#\u0001\u0000$%\u0139\u0000V\u0001\u0000\u0000\u0000\u0002"+
		"m\u0001\u0000\u0000\u0000\u0004\u0084\u0001\u0000\u0000\u0000\u0006\u0086"+
		"\u0001\u0000\u0000\u0000\b\u008d\u0001\u0000\u0000\u0000\n\u00a2\u0001"+
		"\u0000\u0000\u0000\f\u00ab\u0001\u0000\u0000\u0000\u000e\u00ad\u0001\u0000"+
		"\u0000\u0000\u0010\u00b1\u0001\u0000\u0000\u0000\u0012\u00b9\u0001\u0000"+
		"\u0000\u0000\u0014\u00bd\u0001\u0000\u0000\u0000\u0016\u00c1\u0001\u0000"+
		"\u0000\u0000\u0018\u00c3\u0001\u0000\u0000\u0000\u001a\u00c7\u0001\u0000"+
		"\u0000\u0000\u001c\u00cc\u0001\u0000\u0000\u0000\u001e\u00d6\u0001\u0000"+
		"\u0000\u0000 \u00db\u0001\u0000\u0000\u0000\"\u00e0\u0001\u0000\u0000"+
		"\u0000$\u00e8\u0001\u0000\u0000\u0000&\u00f0\u0001\u0000\u0000\u0000("+
		"\u00f8\u0001\u0000\u0000\u0000*\u00fb\u0001\u0000\u0000\u0000,\u00fe\u0001"+
		"\u0000\u0000\u0000.\u0101\u0001\u0000\u0000\u00000\u0104\u0001\u0000\u0000"+
		"\u00002\u0107\u0001\u0000\u0000\u00004\u0109\u0001\u0000\u0000\u00006"+
		"\u010b\u0001\u0000\u0000\u00008\u010d\u0001\u0000\u0000\u0000:\u010f\u0001"+
		"\u0000\u0000\u0000<\u0111\u0001\u0000\u0000\u0000>\u0113\u0001\u0000\u0000"+
		"\u0000@\u0115\u0001\u0000\u0000\u0000B\u0117\u0001\u0000\u0000\u0000D"+
		"\u011b\u0001\u0000\u0000\u0000F\u011e\u0001\u0000\u0000\u0000H\u0127\u0001"+
		"\u0000\u0000\u0000J\u012a\u0001\u0000\u0000\u0000L\u012d\u0001\u0000\u0000"+
		"\u0000N\u0130\u0001\u0000\u0000\u0000P\u0132\u0001\u0000\u0000\u0000R"+
		"T\u0003\u0002\u0001\u0000SR\u0001\u0000\u0000\u0000ST\u0001\u0000\u0000"+
		"\u0000TU\u0001\u0000\u0000\u0000UW\u00052\u0000\u0000VS\u0001\u0000\u0000"+
		"\u0000WX\u0001\u0000\u0000\u0000XV\u0001\u0000\u0000\u0000XY\u0001\u0000"+
		"\u0000\u0000Y[\u0001\u0000\u0000\u0000Z\\\u0003\u0002\u0001\u0000[Z\u0001"+
		"\u0000\u0000\u0000[\\\u0001\u0000\u0000\u0000\\]\u0001\u0000\u0000\u0000"+
		"]^\u0005\u0000\u0000\u0001^\u0001\u0001\u0000\u0000\u0000_a\u0003\u0004"+
		"\u0002\u0000`_\u0001\u0000\u0000\u0000ab\u0001\u0000\u0000\u0000b`\u0001"+
		"\u0000\u0000\u0000bc\u0001\u0000\u0000\u0000ce\u0001\u0000\u0000\u0000"+
		"df\u0003P(\u0000ed\u0001\u0000\u0000\u0000ef\u0001\u0000\u0000\u0000f"+
		"n\u0001\u0000\u0000\u0000gn\u0003P(\u0000hj\u0003\u001a\r\u0000ik\u0003"+
		"P(\u0000ji\u0001\u0000\u0000\u0000jk\u0001\u0000\u0000\u0000kn\u0001\u0000"+
		"\u0000\u0000ln\u0003\b\u0004\u0000m`\u0001\u0000\u0000\u0000mg\u0001\u0000"+
		"\u0000\u0000mh\u0001\u0000\u0000\u0000ml\u0001\u0000\u0000\u0000n\u0003"+
		"\u0001\u0000\u0000\u0000o\u0085\u0003\u000e\u0007\u0000p\u0085\u0003*"+
		"\u0015\u0000q\u0085\u0003,\u0016\u0000r\u0085\u0003.\u0017\u0000s\u0085"+
		"\u00030\u0018\u0000t\u0085\u00032\u0019\u0000u\u0085\u00034\u001a\u0000"+
		"v\u0085\u00036\u001b\u0000w\u0085\u00038\u001c\u0000x\u0085\u0003:\u001d"+
		"\u0000y\u0085\u0003<\u001e\u0000z\u0085\u0003@ \u0000{\u0085\u0003B!\u0000"+
		"|\u0085\u0003\u0018\f\u0000}\u0085\u0003\u0006\u0003\u0000~\u0085\u0003"+
		"\u0012\t\u0000\u007f\u0085\u0003>\u001f\u0000\u0080\u0085\u0003F#\u0000"+
		"\u0081\u0085\u0003H$\u0000\u0082\u0085\u0003J%\u0000\u0083\u0085\u0003"+
		"L&\u0000\u0084o\u0001\u0000\u0000\u0000\u0084p\u0001\u0000\u0000\u0000"+
		"\u0084q\u0001\u0000\u0000\u0000\u0084r\u0001\u0000\u0000\u0000\u0084s"+
		"\u0001\u0000\u0000\u0000\u0084t\u0001\u0000\u0000\u0000\u0084u\u0001\u0000"+
		"\u0000\u0000\u0084v\u0001\u0000\u0000\u0000\u0084w\u0001\u0000\u0000\u0000"+
		"\u0084x\u0001\u0000\u0000\u0000\u0084y\u0001\u0000\u0000\u0000\u0084z"+
		"\u0001\u0000\u0000\u0000\u0084{\u0001\u0000\u0000\u0000\u0084|\u0001\u0000"+
		"\u0000\u0000\u0084}\u0001\u0000\u0000\u0000\u0084~\u0001\u0000\u0000\u0000"+
		"\u0084\u007f\u0001\u0000\u0000\u0000\u0084\u0080\u0001\u0000\u0000\u0000"+
		"\u0084\u0081\u0001\u0000\u0000\u0000\u0084\u0082\u0001\u0000\u0000\u0000"+
		"\u0084\u0083\u0001\u0000\u0000\u0000\u0085\u0005\u0001\u0000\u0000\u0000"+
		"\u0086\u008a\u0003\u001e\u000f\u0000\u0087\u0089\u0003&\u0013\u0000\u0088"+
		"\u0087\u0001\u0000\u0000\u0000\u0089\u008c\u0001\u0000\u0000\u0000\u008a"+
		"\u0088\u0001\u0000\u0000\u0000\u008a\u008b\u0001\u0000\u0000\u0000\u008b"+
		"\u0007\u0001\u0000\u0000\u0000\u008c\u008a\u0001\u0000\u0000\u0000\u008d"+
		"\u008e\u0005\u0001\u0000\u0000\u008e\u0092\u0003\u001e\u000f\u0000\u008f"+
		"\u0091\u0003\n\u0005\u0000\u0090\u008f\u0001\u0000\u0000\u0000\u0091\u0094"+
		"\u0001\u0000\u0000\u0000\u0092\u0090\u0001\u0000\u0000\u0000\u0092\u0093"+
		"\u0001\u0000\u0000\u0000\u0093\u0096\u0001\u0000\u0000\u0000\u0094\u0092"+
		"\u0001\u0000\u0000\u0000\u0095\u0097\u00052\u0000\u0000\u0096\u0095\u0001"+
		"\u0000\u0000\u0000\u0096\u0097\u0001\u0000\u0000\u0000\u0097\u009c\u0001"+
		"\u0000\u0000\u0000\u0098\u009a\u0003\u0002\u0001\u0000\u0099\u0098\u0001"+
		"\u0000\u0000\u0000\u0099\u009a\u0001\u0000\u0000\u0000\u009a\u009b\u0001"+
		"\u0000\u0000\u0000\u009b\u009d\u00052\u0000\u0000\u009c\u0099\u0001\u0000"+
		"\u0000\u0000\u009d\u009e\u0001\u0000\u0000\u0000\u009e\u009c\u0001\u0000"+
		"\u0000\u0000\u009e\u009f\u0001\u0000\u0000\u0000\u009f\u00a0\u0001\u0000"+
		"\u0000\u0000\u00a0\u00a1\u0005\u0002\u0000\u0000\u00a1\t\u0001\u0000\u0000"+
		"\u0000\u00a2\u00a3\u0005\u0003\u0000\u0000\u00a3\u00a8\u0003\u001e\u000f"+
		"\u0000\u00a4\u00a5\u0005\u0004\u0000\u0000\u00a5\u00a7\u0003\n\u0005\u0000"+
		"\u00a6\u00a4\u0001\u0000\u0000\u0000\u00a7\u00aa\u0001\u0000\u0000\u0000"+
		"\u00a8\u00a6\u0001\u0000\u0000\u0000\u00a8\u00a9\u0001\u0000\u0000\u0000"+
		"\u00a9\u000b\u0001\u0000\u0000\u0000\u00aa\u00a8\u0001\u0000\u0000\u0000"+
		"\u00ab\u00ac\u0005\u0005\u0000\u0000\u00ac\r\u0001\u0000\u0000\u0000\u00ad"+
		"\u00ae\u0005\u0006\u0000\u0000\u00ae\u00af\u0003N\'\u0000\u00af\u00b0"+
		"\u0003\u0010\b\u0000\u00b0\u000f\u0001\u0000\u0000\u0000\u00b1\u00b3\u0005"+
		"\u0007\u0000\u0000\u00b2\u00b4\u0003\u0004\u0002\u0000\u00b3\u00b2\u0001"+
		"\u0000\u0000\u0000\u00b4\u00b5\u0001\u0000\u0000\u0000\u00b5\u00b3\u0001"+
		"\u0000\u0000\u0000\u00b5\u00b6\u0001\u0000\u0000\u0000\u00b6\u00b7\u0001"+
		"\u0000\u0000\u0000\u00b7\u00b8\u0005\b\u0000\u0000\u00b8\u0011\u0001\u0000"+
		"\u0000\u0000\u00b9\u00ba\u0005\t\u0000\u0000\u00ba\u00bb\u0003\u0014\n"+
		"\u0000\u00bb\u00bc\u0003\u0010\b\u0000\u00bc\u0013\u0001\u0000\u0000\u0000"+
		"\u00bd\u00be\u0003&\u0013\u0000\u00be\u00bf\u0003\u0016\u000b\u0000\u00bf"+
		"\u00c0\u0003&\u0013\u0000\u00c0\u0015\u0001\u0000\u0000\u0000\u00c1\u00c2"+
		"\u0007\u0000\u0000\u0000\u00c2\u0017\u0001\u0000\u0000\u0000\u00c3\u00c4"+
		"\u0005\r\u0000\u0000\u00c4\u00c5\u0005.\u0000\u0000\u00c5\u00c6\u0003"+
		" \u0010\u0000\u00c6\u0019\u0001\u0000\u0000\u0000\u00c7\u00ca\u0005\u000e"+
		"\u0000\u0000\u00c8\u00cb\u0003 \u0010\u0000\u00c9\u00cb\u0003\u001c\u000e"+
		"\u0000\u00ca\u00c8\u0001\u0000\u0000\u0000\u00ca\u00c9\u0001\u0000\u0000"+
		"\u0000\u00cb\u001b\u0001\u0000\u0000\u0000\u00cc\u00d1\u0005\u0007\u0000"+
		"\u0000\u00cd\u00d0\u0003\u001c\u000e\u0000\u00ce\u00d0\b\u0001\u0000\u0000"+
		"\u00cf\u00cd\u0001\u0000\u0000\u0000\u00cf\u00ce\u0001\u0000\u0000\u0000"+
		"\u00d0\u00d3\u0001\u0000\u0000\u0000\u00d1\u00cf\u0001\u0000\u0000\u0000"+
		"\u00d1\u00d2\u0001\u0000\u0000\u0000\u00d2\u00d4\u0001\u0000\u0000\u0000"+
		"\u00d3\u00d1\u0001\u0000\u0000\u0000\u00d4\u00d5\u0005\b\u0000\u0000\u00d5"+
		"\u001d\u0001\u0000\u0000\u0000\u00d6\u00d7\u0005/\u0000\u0000\u00d7\u001f"+
		"\u0001\u0000\u0000\u0000\u00d8\u00dc\u0005.\u0000\u0000\u00d9\u00dc\u0003"+
		"&\u0013\u0000\u00da\u00dc\u0003(\u0014\u0000\u00db\u00d8\u0001\u0000\u0000"+
		"\u0000\u00db\u00d9\u0001\u0000\u0000\u0000\u00db\u00da\u0001\u0000\u0000"+
		"\u0000\u00dc!\u0001\u0000\u0000\u0000\u00dd\u00df\u0007\u0002\u0000\u0000"+
		"\u00de\u00dd\u0001\u0000\u0000\u0000\u00df\u00e2\u0001\u0000\u0000\u0000"+
		"\u00e0\u00de\u0001\u0000\u0000\u0000\u00e0\u00e1\u0001\u0000\u0000\u0000"+
		"\u00e1\u00e6\u0001\u0000\u0000\u0000\u00e2\u00e0\u0001\u0000\u0000\u0000"+
		"\u00e3\u00e7\u0003N\'\u0000\u00e4\u00e7\u0003(\u0014\u0000\u00e5\u00e7"+
		"\u0003\f\u0006\u0000\u00e6\u00e3\u0001\u0000\u0000\u0000\u00e6\u00e4\u0001"+
		"\u0000\u0000\u0000\u00e6\u00e5\u0001\u0000\u0000\u0000\u00e7#\u0001\u0000"+
		"\u0000\u0000\u00e8\u00ed\u0003\"\u0011\u0000\u00e9\u00ea\u0007\u0003\u0000"+
		"\u0000\u00ea\u00ec\u0003\"\u0011\u0000\u00eb\u00e9\u0001\u0000\u0000\u0000"+
		"\u00ec\u00ef\u0001\u0000\u0000\u0000\u00ed\u00eb\u0001\u0000\u0000\u0000"+
		"\u00ed\u00ee\u0001\u0000\u0000\u0000\u00ee%\u0001\u0000\u0000\u0000\u00ef"+
		"\u00ed\u0001\u0000\u0000\u0000\u00f0\u00f5\u0003$\u0012\u0000\u00f1\u00f2"+
		"\u0007\u0002\u0000\u0000\u00f2\u00f4\u0003$\u0012\u0000\u00f3\u00f1\u0001"+
		"\u0000\u0000\u0000\u00f4\u00f7\u0001\u0000\u0000\u0000\u00f5\u00f3\u0001"+
		"\u0000\u0000\u0000\u00f5\u00f6\u0001\u0000\u0000\u0000\u00f6\'\u0001\u0000"+
		"\u0000\u0000\u00f7\u00f5\u0001\u0000\u0000\u0000\u00f8\u00f9\u0005\u0003"+
		"\u0000\u0000\u00f9\u00fa\u0003\u001e\u000f\u0000\u00fa)\u0001\u0000\u0000"+
		"\u0000\u00fb\u00fc\u0007\u0004\u0000\u0000\u00fc\u00fd\u0003&\u0013\u0000"+
		"\u00fd+\u0001\u0000\u0000\u0000\u00fe\u00ff\u0007\u0005\u0000\u0000\u00ff"+
		"\u0100\u0003&\u0013\u0000\u0100-\u0001\u0000\u0000\u0000\u0101\u0102\u0007"+
		"\u0006\u0000\u0000\u0102\u0103\u0003&\u0013\u0000\u0103/\u0001\u0000\u0000"+
		"\u0000\u0104\u0105\u0007\u0007\u0000\u0000\u0105\u0106\u0003&\u0013\u0000"+
		"\u01061\u0001\u0000\u0000\u0000\u0107\u0108\u0007\b\u0000\u0000\u0108"+
		"3\u0001\u0000\u0000\u0000\u0109\u010a\u0007\t\u0000\u0000\u010a5\u0001"+
		"\u0000\u0000\u0000\u010b\u010c\u0007\n\u0000\u0000\u010c7\u0001\u0000"+
		"\u0000\u0000\u010d\u010e\u0007\u000b\u0000\u0000\u010e9\u0001\u0000\u0000"+
		"\u0000\u010f\u0110\u0007\f\u0000\u0000\u0110;\u0001\u0000\u0000\u0000"+
		"\u0111\u0112\u0005&\u0000\u0000\u0112=\u0001\u0000\u0000\u0000\u0113\u0114"+
		"\u0005\'\u0000\u0000\u0114?\u0001\u0000\u0000\u0000\u0115\u0116\u0005"+
		"(\u0000\u0000\u0116A\u0001\u0000\u0000\u0000\u0117\u0118\u0005)\u0000"+
		"\u0000\u0118\u0119\u0003&\u0013\u0000\u0119\u011a\u0003&\u0013\u0000\u011a"+
		"C\u0001\u0000\u0000\u0000\u011b\u011c\u0005\u0005\u0000\u0000\u011c\u011d"+
		"\u0003&\u0013\u0000\u011dE\u0001\u0000\u0000\u0000\u011e\u011f\u0005*"+
		"\u0000\u0000\u011f\u0120\u0005\u0007\u0000\u0000\u0120\u0121\u0003\u001e"+
		"\u000f\u0000\u0121\u0122\u0003&\u0013\u0000\u0122\u0123\u0003&\u0013\u0000"+
		"\u0123\u0124\u0003&\u0013\u0000\u0124\u0125\u0005\b\u0000\u0000\u0125"+
		"\u0126\u0003\u0010\b\u0000\u0126G\u0001\u0000\u0000\u0000\u0127\u0128"+
		"\u0005+\u0000\u0000\u0128\u0129\u0003&\u0013\u0000\u0129I\u0001\u0000"+
		"\u0000\u0000\u012a\u012b\u0005,\u0000\u0000\u012b\u012c\u0003&\u0013\u0000"+
		"\u012cK\u0001\u0000\u0000\u0000\u012d\u012e\u0005-\u0000\u0000\u012e\u012f"+
		"\u0003&\u0013\u0000\u012fM\u0001\u0000\u0000\u0000\u0130\u0131\u00050"+
		"\u0000\u0000\u0131O\u0001\u0000\u0000\u0000\u0132\u0133\u00051\u0000\u0000"+
		"\u0133Q\u0001\u0000\u0000\u0000\u0017SX[bejm\u0084\u008a\u0092\u0096\u0099"+
		"\u009e\u00a8\u00b5\u00ca\u00cf\u00d1\u00db\u00e0\u00e6\u00ed\u00f5";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}