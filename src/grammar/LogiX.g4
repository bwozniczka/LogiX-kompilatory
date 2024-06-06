grammar LogiX;

prog: (linia? EOL)+ linia? EOF;

linia:
	polecenia+ komentarz?
	| komentarz
	| wypisz_ komentarz?
	| deklaracjaProcedury;

polecenia:
	powtorz
	| np // naprzod
	| ws // wstecz
	| pw // prawo
	| lw // lewo
	| wy // wyczysc
	| pb // podnies bobra
	| ob // opusc bobra
	| sb // schowaj bobra
	| ub // ukaz bobra
	| dom // cofnij do punktu 0 0
	| napis
	| ustaw // ustaw pozycję x y
	| wywolanieProcedury
	| jesli //?
	| dla //?
	| kwadrat //tworzy kwadrat o podanym boku
	| trojkat //tworzy trojkat rownoboczny o podanym boku
	| kolo; //tworzy kolo o podanym promieniu

wywolanieProcedury: nazwa wyrazenie*;

deklaracjaProcedury:
	'to' nazwa deklaracjeParametrow* EOL? (linia? EOL)+ 'end';

deklaracjeParametrow: ':' nazwa (',' deklaracjeParametrow)*;

func_: (
		losowo
		| pierwszy
		| glowa
		| ogon
		| ostatni
		| element
		| elementWielowymiaru
		| wybierz
		| usun
		| unikalna
	);

powtorz: 'powtorz' liczba blok;

blok: '[' polecenia+ ']';

jesli: 'jesli' porownanie blok;

porownanie: wyrazenie operatorPorownania wyrazenie;

operatorPorownania: '<' | '>' | '=' | '<=' | '>=';

wypisz_: 'wypisz' (wartosc | lancuchZnakowy);

pierwszy: 'pierwszy' lista;

glowa: 'glowa' lista;

ogon: 'ogon' lista;

ostatni: 'ostatni' lista;

element: 'element' liczba lista;

elementWielowymiaru: 'elementww' lista mdlista;

wybierz: 'wybierz' lista;

usun: 'usun' wartosc lista;

unikalna: 'unikalna' lista;

lista: '[' wartosc (',' wartosc)* ']';

mdlista: '[' (mdlista | lista) ', ' (mdlista | lista)* ']';

lancuchZnakowy: '[' (lancuchZnakowy | ~ ']')* ']';

nazwa: LANCUCH;

wartosc: LITERAL_WYRAZU | wyrazenie | odwolanie;

wyrazenieZnaku: (('+' | '-'))* (liczba | odwolanie | func_);

wielokrotneWyrazenie:
	wyrazenieZnaku (('*' | '/') wyrazenieZnaku)*;

wyrazenie:
	wielokrotneWyrazenie (('+' | '-') wielokrotneWyrazenie)*;

odwolanie: ':' nazwa;

np: ('np' | 'naprzod') wyrazenie;

ws: ('ws' | 'wstecz') wyrazenie;

pw: ('pw' | 'prawo') wyrazenie;

lw: ('lw' | 'lewo') wyrazenie;

wy: 'wy' | 'wyczysc' | 'wyczyscekran';

pb: 'pb' | 'podniesbobra';

ob: 'ob' | 'opuscbobra';

sb: 'sb' | 'schowajbobra';

ub: 'ub' | 'ukazbobra';

dom: 'dom';

napis: 'napis' LITERAL_WYRAZU;

ustaw: 'ustaw' wyrazenie wyrazenie;

losowo: 'losowo' wyrazenie;

dla: 'dla' '[' nazwa wyrazenie wyrazenie wyrazenie ']' blok;

kwadrat: 'kwadrat' wyrazenie;

trojkat: 'trojkat' wyrazenie;

kolo: 'kolo' wyrazenie;

liczba: CYFRA;

komentarz: KOMENTARZ;

LITERAL_WYRAZU: '"' .*? '"';

LANCUCH: [a-zA-Z] [a-zA-Z0-9_]*;

CYFRA: [0-9]+;

KOMENTARZ: ';' ~ [\r\n]*;

EOL: '\r'? '\n';

BIALY_ZNAK: [ \t\r\n] -> skip;