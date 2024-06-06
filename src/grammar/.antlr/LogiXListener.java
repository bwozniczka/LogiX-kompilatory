// Generated from c:/Users/wiech/Studia/kompilatory/LogiX-javascript/src/grammar/LogiX.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.tree.ParseTreeListener;

/**
 * This interface defines a complete listener for a parse tree produced by
 * {@link LogiXParser}.
 */
public interface LogiXListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by {@link LogiXParser#prog}.
	 * @param ctx the parse tree
	 */
	void enterProg(LogiXParser.ProgContext ctx);
	/**
	 * Exit a parse tree produced by {@link LogiXParser#prog}.
	 * @param ctx the parse tree
	 */
	void exitProg(LogiXParser.ProgContext ctx);
	/**
	 * Enter a parse tree produced by {@link LogiXParser#linia}.
	 * @param ctx the parse tree
	 */
	void enterLinia(LogiXParser.LiniaContext ctx);
	/**
	 * Exit a parse tree produced by {@link LogiXParser#linia}.
	 * @param ctx the parse tree
	 */
	void exitLinia(LogiXParser.LiniaContext ctx);
	/**
	 * Enter a parse tree produced by {@link LogiXParser#polecenia}.
	 * @param ctx the parse tree
	 */
	void enterPolecenia(LogiXParser.PoleceniaContext ctx);
	/**
	 * Exit a parse tree produced by {@link LogiXParser#polecenia}.
	 * @param ctx the parse tree
	 */
	void exitPolecenia(LogiXParser.PoleceniaContext ctx);
	/**
	 * Enter a parse tree produced by {@link LogiXParser#wywolanieProcedury}.
	 * @param ctx the parse tree
	 */
	void enterWywolanieProcedury(LogiXParser.WywolanieProceduryContext ctx);
	/**
	 * Exit a parse tree produced by {@link LogiXParser#wywolanieProcedury}.
	 * @param ctx the parse tree
	 */
	void exitWywolanieProcedury(LogiXParser.WywolanieProceduryContext ctx);
	/**
	 * Enter a parse tree produced by {@link LogiXParser#deklaracjaProcedury}.
	 * @param ctx the parse tree
	 */
	void enterDeklaracjaProcedury(LogiXParser.DeklaracjaProceduryContext ctx);
	/**
	 * Exit a parse tree produced by {@link LogiXParser#deklaracjaProcedury}.
	 * @param ctx the parse tree
	 */
	void exitDeklaracjaProcedury(LogiXParser.DeklaracjaProceduryContext ctx);
	/**
	 * Enter a parse tree produced by {@link LogiXParser#deklaracjeParametrow}.
	 * @param ctx the parse tree
	 */
	void enterDeklaracjeParametrow(LogiXParser.DeklaracjeParametrowContext ctx);
	/**
	 * Exit a parse tree produced by {@link LogiXParser#deklaracjeParametrow}.
	 * @param ctx the parse tree
	 */
	void exitDeklaracjeParametrow(LogiXParser.DeklaracjeParametrowContext ctx);
	/**
	 * Enter a parse tree produced by {@link LogiXParser#func_}.
	 * @param ctx the parse tree
	 */
	void enterFunc_(LogiXParser.Func_Context ctx);
	/**
	 * Exit a parse tree produced by {@link LogiXParser#func_}.
	 * @param ctx the parse tree
	 */
	void exitFunc_(LogiXParser.Func_Context ctx);
	/**
	 * Enter a parse tree produced by {@link LogiXParser#powtorz}.
	 * @param ctx the parse tree
	 */
	void enterPowtorz(LogiXParser.PowtorzContext ctx);
	/**
	 * Exit a parse tree produced by {@link LogiXParser#powtorz}.
	 * @param ctx the parse tree
	 */
	void exitPowtorz(LogiXParser.PowtorzContext ctx);
	/**
	 * Enter a parse tree produced by {@link LogiXParser#blok}.
	 * @param ctx the parse tree
	 */
	void enterBlok(LogiXParser.BlokContext ctx);
	/**
	 * Exit a parse tree produced by {@link LogiXParser#blok}.
	 * @param ctx the parse tree
	 */
	void exitBlok(LogiXParser.BlokContext ctx);
	/**
	 * Enter a parse tree produced by {@link LogiXParser#jesli}.
	 * @param ctx the parse tree
	 */
	void enterJesli(LogiXParser.JesliContext ctx);
	/**
	 * Exit a parse tree produced by {@link LogiXParser#jesli}.
	 * @param ctx the parse tree
	 */
	void exitJesli(LogiXParser.JesliContext ctx);
	/**
	 * Enter a parse tree produced by {@link LogiXParser#porownanie}.
	 * @param ctx the parse tree
	 */
	void enterPorownanie(LogiXParser.PorownanieContext ctx);
	/**
	 * Exit a parse tree produced by {@link LogiXParser#porownanie}.
	 * @param ctx the parse tree
	 */
	void exitPorownanie(LogiXParser.PorownanieContext ctx);
	/**
	 * Enter a parse tree produced by {@link LogiXParser#operatorPorownania}.
	 * @param ctx the parse tree
	 */
	void enterOperatorPorownania(LogiXParser.OperatorPorownaniaContext ctx);
	/**
	 * Exit a parse tree produced by {@link LogiXParser#operatorPorownania}.
	 * @param ctx the parse tree
	 */
	void exitOperatorPorownania(LogiXParser.OperatorPorownaniaContext ctx);
	/**
	 * Enter a parse tree produced by {@link LogiXParser#wypisz_}.
	 * @param ctx the parse tree
	 */
	void enterWypisz_(LogiXParser.Wypisz_Context ctx);
	/**
	 * Exit a parse tree produced by {@link LogiXParser#wypisz_}.
	 * @param ctx the parse tree
	 */
	void exitWypisz_(LogiXParser.Wypisz_Context ctx);
	/**
	 * Enter a parse tree produced by {@link LogiXParser#lancuchZnakowy}.
	 * @param ctx the parse tree
	 */
	void enterLancuchZnakowy(LogiXParser.LancuchZnakowyContext ctx);
	/**
	 * Exit a parse tree produced by {@link LogiXParser#lancuchZnakowy}.
	 * @param ctx the parse tree
	 */
	void exitLancuchZnakowy(LogiXParser.LancuchZnakowyContext ctx);
	/**
	 * Enter a parse tree produced by {@link LogiXParser#nazwa}.
	 * @param ctx the parse tree
	 */
	void enterNazwa(LogiXParser.NazwaContext ctx);
	/**
	 * Exit a parse tree produced by {@link LogiXParser#nazwa}.
	 * @param ctx the parse tree
	 */
	void exitNazwa(LogiXParser.NazwaContext ctx);
	/**
	 * Enter a parse tree produced by {@link LogiXParser#wartosc}.
	 * @param ctx the parse tree
	 */
	void enterWartosc(LogiXParser.WartoscContext ctx);
	/**
	 * Exit a parse tree produced by {@link LogiXParser#wartosc}.
	 * @param ctx the parse tree
	 */
	void exitWartosc(LogiXParser.WartoscContext ctx);
	/**
	 * Enter a parse tree produced by {@link LogiXParser#wyrazenieZnaku}.
	 * @param ctx the parse tree
	 */
	void enterWyrazenieZnaku(LogiXParser.WyrazenieZnakuContext ctx);
	/**
	 * Exit a parse tree produced by {@link LogiXParser#wyrazenieZnaku}.
	 * @param ctx the parse tree
	 */
	void exitWyrazenieZnaku(LogiXParser.WyrazenieZnakuContext ctx);
	/**
	 * Enter a parse tree produced by {@link LogiXParser#wielokrotneWyrazenie}.
	 * @param ctx the parse tree
	 */
	void enterWielokrotneWyrazenie(LogiXParser.WielokrotneWyrazenieContext ctx);
	/**
	 * Exit a parse tree produced by {@link LogiXParser#wielokrotneWyrazenie}.
	 * @param ctx the parse tree
	 */
	void exitWielokrotneWyrazenie(LogiXParser.WielokrotneWyrazenieContext ctx);
	/**
	 * Enter a parse tree produced by {@link LogiXParser#wyrazenie}.
	 * @param ctx the parse tree
	 */
	void enterWyrazenie(LogiXParser.WyrazenieContext ctx);
	/**
	 * Exit a parse tree produced by {@link LogiXParser#wyrazenie}.
	 * @param ctx the parse tree
	 */
	void exitWyrazenie(LogiXParser.WyrazenieContext ctx);
	/**
	 * Enter a parse tree produced by {@link LogiXParser#odwolanie}.
	 * @param ctx the parse tree
	 */
	void enterOdwolanie(LogiXParser.OdwolanieContext ctx);
	/**
	 * Exit a parse tree produced by {@link LogiXParser#odwolanie}.
	 * @param ctx the parse tree
	 */
	void exitOdwolanie(LogiXParser.OdwolanieContext ctx);
	/**
	 * Enter a parse tree produced by {@link LogiXParser#np}.
	 * @param ctx the parse tree
	 */
	void enterNp(LogiXParser.NpContext ctx);
	/**
	 * Exit a parse tree produced by {@link LogiXParser#np}.
	 * @param ctx the parse tree
	 */
	void exitNp(LogiXParser.NpContext ctx);
	/**
	 * Enter a parse tree produced by {@link LogiXParser#ws}.
	 * @param ctx the parse tree
	 */
	void enterWs(LogiXParser.WsContext ctx);
	/**
	 * Exit a parse tree produced by {@link LogiXParser#ws}.
	 * @param ctx the parse tree
	 */
	void exitWs(LogiXParser.WsContext ctx);
	/**
	 * Enter a parse tree produced by {@link LogiXParser#pw}.
	 * @param ctx the parse tree
	 */
	void enterPw(LogiXParser.PwContext ctx);
	/**
	 * Exit a parse tree produced by {@link LogiXParser#pw}.
	 * @param ctx the parse tree
	 */
	void exitPw(LogiXParser.PwContext ctx);
	/**
	 * Enter a parse tree produced by {@link LogiXParser#lw}.
	 * @param ctx the parse tree
	 */
	void enterLw(LogiXParser.LwContext ctx);
	/**
	 * Exit a parse tree produced by {@link LogiXParser#lw}.
	 * @param ctx the parse tree
	 */
	void exitLw(LogiXParser.LwContext ctx);
	/**
	 * Enter a parse tree produced by {@link LogiXParser#wy}.
	 * @param ctx the parse tree
	 */
	void enterWy(LogiXParser.WyContext ctx);
	/**
	 * Exit a parse tree produced by {@link LogiXParser#wy}.
	 * @param ctx the parse tree
	 */
	void exitWy(LogiXParser.WyContext ctx);
	/**
	 * Enter a parse tree produced by {@link LogiXParser#pb}.
	 * @param ctx the parse tree
	 */
	void enterPb(LogiXParser.PbContext ctx);
	/**
	 * Exit a parse tree produced by {@link LogiXParser#pb}.
	 * @param ctx the parse tree
	 */
	void exitPb(LogiXParser.PbContext ctx);
	/**
	 * Enter a parse tree produced by {@link LogiXParser#ob}.
	 * @param ctx the parse tree
	 */
	void enterOb(LogiXParser.ObContext ctx);
	/**
	 * Exit a parse tree produced by {@link LogiXParser#ob}.
	 * @param ctx the parse tree
	 */
	void exitOb(LogiXParser.ObContext ctx);
	/**
	 * Enter a parse tree produced by {@link LogiXParser#sb}.
	 * @param ctx the parse tree
	 */
	void enterSb(LogiXParser.SbContext ctx);
	/**
	 * Exit a parse tree produced by {@link LogiXParser#sb}.
	 * @param ctx the parse tree
	 */
	void exitSb(LogiXParser.SbContext ctx);
	/**
	 * Enter a parse tree produced by {@link LogiXParser#ub}.
	 * @param ctx the parse tree
	 */
	void enterUb(LogiXParser.UbContext ctx);
	/**
	 * Exit a parse tree produced by {@link LogiXParser#ub}.
	 * @param ctx the parse tree
	 */
	void exitUb(LogiXParser.UbContext ctx);
	/**
	 * Enter a parse tree produced by {@link LogiXParser#dom}.
	 * @param ctx the parse tree
	 */
	void enterDom(LogiXParser.DomContext ctx);
	/**
	 * Exit a parse tree produced by {@link LogiXParser#dom}.
	 * @param ctx the parse tree
	 */
	void exitDom(LogiXParser.DomContext ctx);
	/**
	 * Enter a parse tree produced by {@link LogiXParser#napis}.
	 * @param ctx the parse tree
	 */
	void enterNapis(LogiXParser.NapisContext ctx);
	/**
	 * Exit a parse tree produced by {@link LogiXParser#napis}.
	 * @param ctx the parse tree
	 */
	void exitNapis(LogiXParser.NapisContext ctx);
	/**
	 * Enter a parse tree produced by {@link LogiXParser#ustaw}.
	 * @param ctx the parse tree
	 */
	void enterUstaw(LogiXParser.UstawContext ctx);
	/**
	 * Exit a parse tree produced by {@link LogiXParser#ustaw}.
	 * @param ctx the parse tree
	 */
	void exitUstaw(LogiXParser.UstawContext ctx);
	/**
	 * Enter a parse tree produced by {@link LogiXParser#losowo}.
	 * @param ctx the parse tree
	 */
	void enterLosowo(LogiXParser.LosowoContext ctx);
	/**
	 * Exit a parse tree produced by {@link LogiXParser#losowo}.
	 * @param ctx the parse tree
	 */
	void exitLosowo(LogiXParser.LosowoContext ctx);
	/**
	 * Enter a parse tree produced by {@link LogiXParser#dla}.
	 * @param ctx the parse tree
	 */
	void enterDla(LogiXParser.DlaContext ctx);
	/**
	 * Exit a parse tree produced by {@link LogiXParser#dla}.
	 * @param ctx the parse tree
	 */
	void exitDla(LogiXParser.DlaContext ctx);
	/**
	 * Enter a parse tree produced by {@link LogiXParser#kwadrat}.
	 * @param ctx the parse tree
	 */
	void enterKwadrat(LogiXParser.KwadratContext ctx);
	/**
	 * Exit a parse tree produced by {@link LogiXParser#kwadrat}.
	 * @param ctx the parse tree
	 */
	void exitKwadrat(LogiXParser.KwadratContext ctx);
	/**
	 * Enter a parse tree produced by {@link LogiXParser#trojkat}.
	 * @param ctx the parse tree
	 */
	void enterTrojkat(LogiXParser.TrojkatContext ctx);
	/**
	 * Exit a parse tree produced by {@link LogiXParser#trojkat}.
	 * @param ctx the parse tree
	 */
	void exitTrojkat(LogiXParser.TrojkatContext ctx);
	/**
	 * Enter a parse tree produced by {@link LogiXParser#kolo}.
	 * @param ctx the parse tree
	 */
	void enterKolo(LogiXParser.KoloContext ctx);
	/**
	 * Exit a parse tree produced by {@link LogiXParser#kolo}.
	 * @param ctx the parse tree
	 */
	void exitKolo(LogiXParser.KoloContext ctx);
	/**
	 * Enter a parse tree produced by {@link LogiXParser#liczba}.
	 * @param ctx the parse tree
	 */
	void enterLiczba(LogiXParser.LiczbaContext ctx);
	/**
	 * Exit a parse tree produced by {@link LogiXParser#liczba}.
	 * @param ctx the parse tree
	 */
	void exitLiczba(LogiXParser.LiczbaContext ctx);
	/**
	 * Enter a parse tree produced by {@link LogiXParser#komentarz}.
	 * @param ctx the parse tree
	 */
	void enterKomentarz(LogiXParser.KomentarzContext ctx);
	/**
	 * Exit a parse tree produced by {@link LogiXParser#komentarz}.
	 * @param ctx the parse tree
	 */
	void exitKomentarz(LogiXParser.KomentarzContext ctx);
}