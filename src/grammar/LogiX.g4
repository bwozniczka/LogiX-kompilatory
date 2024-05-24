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
	| zrob //?
	| wywolanieProcedury
	| jesli //?
	| ubop //?
	| dla //?
	| kwadrat //tworzy kwadrat o podanym boku
	| trojkat //tworzy trojkat rownoboczny o podanym boku
	| kolo; //tworzy kolo o podanym promieniu

wywolanieProcedury: nazwa wyrazenie*;

deklaracjaProcedury:
	'to' nazwa deklaracjeParametrow* EOL? (linia? EOL)+ 'end';

deklaracjeParametrow: ':' nazwa (',' deklaracjeParametrow)*;

func_: 'losowo';

powtorz: 'powtorz' liczba blok;

blok: '[' polecenia+ ']';

jesli: 'jesli' porownanie blok;

porownanie: wyrazenie operatorPorownania wyrazenie;

operatorPorownania: '<' | '>' | '=';

zrob: 'zrob' LITERAL_WYRAZU wartosc;

wypisz_: 'wypisz' (wartosc | lancuchZnakowy);

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

ubop: 'ubop';

napis: 'napis';

ustaw: 'ustaw' wyrazenie wyrazenie;

losowo: 'losowo' wyrazenie;

dla: 'for' '[' nazwa wyrazenie wyrazenie wyrazenie ']' blok;

kwadrat: 'kwadrat' wyrazenie;

trojkat: 'trojkat' wyrazenie;

kolo: 'kolo' wyrazenie;

liczba: CYFRA;

komentarz: KOMENTARZ;

LITERAL_WYRAZU: '"' LANCUCH;

LANCUCH: [a-zA-Z] [a-zA-Z0-9_]*;

CYFRA: [0-9]+;

KOMENTARZ: ';' ~ [\r\n]*;

EOL: '\r'? '\n';

BIALY_ZNAK: [ \t\r\n] -> skip;