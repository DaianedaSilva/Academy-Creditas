# Java Script


## Conteúdo
<dl>
	<dt>
		 <a href="#HTML">- O que é JavaScript?</a>
	</dt>
	<dt>
		 <a href="#TAG">- Variáveis</a>
	</dt>
	<dt>
		 <a href="#TAG">- Formatação</a>
	</dt>
	<dt>
		 <a href="#PrincTags">- Opções de Laço</a>
	</dt>
	<dt>
		 <a href="#PrincTags">- Comentários</a>
	</dt>
	<dt> 
	<a href="#doctype">- Switch</a>
	</dt>
	<dt>
	<a href="#htmlTag">- Array</a>
	</dt>
	<dt>
	<a href="#htmlTag">- Usando o Browser</a>
	</dt>
		<dd>
		<a href="#htmlTag">- A tag < script ></a>
		</dd>
		<dd>
		<a href="#htmlTag">-alert()</a>
		</dd>
		<dd>
		<a href="#htmlTag">- prompt</a>
		</dd>
<dl>

</dl>

O valor “nulo”
O nullvalor especial não pertence a nenhum dos tipos descritos acima.

Ele forma um tipo separado que contém apenas o nullvalor:

let age = null;
Em JavaScript, nullnão é uma “referência a um objeto não existente” ou um “ponteiro nulo” como em algumas outras linguagens.

É apenas um valor especial que representa “nada”, “vazio” ou “valor desconhecido”.

O código acima afirma que ageé desconhecido.

O valor “indefinido”
O valor especial undefinedtambém se destaca. Ele cria um tipo próprio, assim como null.

O significado de undefinedé “valor não atribuído”.

Se uma variável for declarada, mas não atribuída, seu valor será undefined:

let age;

alert(age); // shows "undefined"
Tecnicamente, é possível atribuir explicitamente undefineda uma variável:

let age = 100;

// change the value to undefined
age = undefined;

alert(age); // "undefined"
… Mas não recomendamos fazer isso. Normalmente, usa-se nullpara atribuir um valor “vazio” ou “desconhecido” a uma variável, enquanto undefinedé reservado como um valor inicial padrão para coisas não atribuídas.

 operador typeof
O typeofoperador retorna o tipo do argumento. É útil quando queremos processar valores de tipos diferentes de maneira diferente ou apenas fazer uma verificação rápida.

Ele suporta duas formas de sintaxe:

Como um operador: typeof x.
Como uma função: typeof(x).
Em outras palavras, funciona com parênteses ou sem eles. O resultado é o mesmo.

A chamada para typeof xretorna uma string com o nome do tipo:


esumo
Existem 8 tipos de dados básicos em JavaScript.

numberpara números de qualquer tipo: inteiro ou ponto flutuante, os inteiros são limitados por .±(253-1)
bigint é para números inteiros de comprimento arbitrário.
stringpara cordas. Uma string pode ter zero ou mais caracteres, não existe um tipo de caractere único separado.
booleanpara true/ false.
nullpara valores desconhecidos - um tipo autônomo que possui um único valor null.
undefinedpara valores não atribuídos - um tipo autônomo que possui um único valor undefined.
object para estruturas de dados mais complexas.
symbol para identificadores exclusivos.
O typeofoperador nos permite ver qual tipo está armazenado em uma variável.

Duas formas: typeof xou typeof(x).
Retorna uma string com o nome do tipo, como "string".
Para nulldevoluções "object"- isso é um erro na linguagem, não é realmente um objeto.


Existem duas limitações nos nomes de variáveis ​​em JavaScript:

O nome deve conter apenas letras, dígitos ou os símbolos $e _.
O primeiro caractere não deve ser um dígito.
Exemplos de nomes válidos:

let userName;
let test123;
Quando o nome contém várias palavras, camelCase é comumente usado. Ou seja: palavras ir um após o outro, cada palavra, exceto primeira partida com uma letra maiúscula: myVeryLongName.

O que é interessante - o cifrão '$'e o sublinhado '_'também podem ser usados ​​em nomes. Eles são símbolos regulares, assim como as letras, sem nenhum significado especial.

Constantes
Para declarar uma variável constante (imutável), use em constvez de let:

const myBirthday = '18.04.1982';
Variáveis ​​declaradas usando constsão chamadas de “constantes”. Eles não podem ser reatribuídos. Uma tentativa de fazer isso causaria um erro:

const myBirthday = '18.04.1982';

myBirthday = '01.01.2001'; // error, can't reassign the constant!
Quando um programador tem certeza de que uma variável nunca mudará, ele pode declará-la constpara garantir e comunicar claramente esse fato a todos.


Podemos declarar variáveis para armazenar dados usando os var, letou constpalavras-chave.

let - é uma declaração de variável moderna.
var- é uma declaração de variável da velha escola. Normalmente não o usamos, mas abordaremos as diferenças sutis letno capítulo O antigo "var" , caso você precise deles.
const- é semelhante let, mas o valor da variável não pode ser alterado.
As variáveis ​​devem ser nomeadas de uma forma que nos permita entender facilmente o que está dentro delas.

Constantes
Para declarar uma variável constante (imutável), use em constvez de let:

const myBirthday = '18.04.1982';
Variáveis ​​declaradas usando constsão chamadas de “constantes”. Eles não podem ser reatribuídos. Uma tentativa de fazer isso causaria um erro:

const myBirthday = '18.04.1982';

myBirthday = '01.01.2001'; // error, can't reassign the constant!
Quando um programador tem certeza de que uma variável nunca mudará, ele pode declará-la constpara garantir e comunicar claramente esse fato a todos.


Podemos declarar variáveis para armazenar dados usando os var, letou constpalavras-chave.

let - é uma declaração de variável moderna.
var- é uma declaração de variável da velha escola. Normalmente não o usamos, mas abordaremos as diferenças sutis letno capítulo O antigo "var" , caso você precise deles.
const- é semelhante let, mas o valor da variável não pode ser alterado.
As variáveis ​​devem ser nomeadas de uma forma que nos permita entender facilmente o que está dentro delas.
Comentários
Conforme o tempo passa, os programas tornam-se cada vez mais complexos. Torna-se necessário adicionar comentários que descrevam o que o código faz e por quê.

Os comentários podem ser colocados em qualquer lugar de um script. Eles não afetam sua execução porque o mecanismo simplesmente os ignora.

Os comentários de uma linha começam com dois caracteres de barra //.

O resto da linha é um comentário. Pode ocupar uma linha inteira própria ou seguir uma declaração.

Como aqui:
// This comment occupies a line of its own
alert('Hello');

alert('World'); // This comment follows the statement
Os comentários de várias linhas começam com uma barra e um asterisco /*e terminam com um asterisco e uma barra */.

Como isso:

/* An example with two messages.
This is a multiline comment.
*/
alert('Hello');
alert('World');



Scripts externos
Se tivermos muito código JavaScript, podemos colocá-lo em um arquivo separado.

Os arquivos de script são anexados ao HTML com o srcatributo:

<script src="/path/to/script.js"></script>
Aqui, /path/to/script.jsestá um caminho absoluto para o script a partir da raiz do site. Também é possível fornecer um caminho relativo a partir da página atual. Por exemplo, src="script.js"significaria um arquivo "script.js"na pasta atual.

Podemos fornecer um URL completo também. Por exemplo:

<script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js"></script>

Se srcestiver definido, o conteúdo do script será ignorado.
Uma única <script>tag não pode conter o srcatributo e o código.

Isso não vai funcionar:

<script src="file.js">
  alert(1); // the content is ignored, because src is set
</script>
Devemos escolher um externo <script src="…">ou regular <script>com código.

O exemplo acima pode ser dividido em dois scripts para funcionar:

<script src="file.js"></script>
<script>
  alert(1);
</script>
 
 
 
 O modo moderno, "use estrito"
Por muito tempo, o JavaScript evoluiu sem problemas de compatibilidade. Novos recursos foram adicionados ao idioma, enquanto a funcionalidade anterior não mudou.

Isso teve a vantagem de nunca quebrar o código existente. Mas a desvantagem era que qualquer erro ou uma decisão imperfeita feita pelos criadores do JavaScript ficava presa na linguagem para sempre.

Este foi o caso até 2009, quando o ECMAScript 5 (ES5) apareceu. Ele adicionou novos recursos ao idioma e modificou alguns dos existentes. Para manter o código antigo funcionando, a maioria dessas modificações está desativada por padrão. Você precisa ativá-los explicitamente com uma directiva especial: "use strict".

“Usar estrito”
A diretiva se parece com uma string: "use strict"ou 'use strict'. Quando está localizado no topo de um script, todo o script funciona da maneira “moderna”.

Por exemplo:

"use strict";

// this code works the modern way
...
Em breve aprenderemos funções (uma forma de agrupar comandos), portanto, vamos observar com antecedência que "use strict"podem ser colocadas no início de uma função. Isso ativa o modo estrito apenas nessa função. Mas geralmente as pessoas usam para todo o script.

Certifique-se de que "usar estrito" está no topo
Certifique-se de que "use strict"está na parte superior de seus scripts, caso contrário, o modo estrito pode não ser habilitado.

O modo estrito não está habilitado aqui:

alert("some code");
// "use strict" below is ignored--it must be at the top

"use strict";

// strict mode is not activated
Apenas comentários podem aparecer acima "use strict".



FORMATAÇÃO
Corda
Uma string em JavaScript deve estar entre aspas.

let str = "Hello";
let str2 = 'Single quotes are ok too';
let phrase = `can embed another ${str}`;
Em JavaScript, existem 3 tipos de citações.

Aspas: "Hello".
Aspas simples: 'Hello'.
Backticks: `Hello`.
As aspas simples e duplas são aspas “simples”. Praticamente não há diferença entre eles em JavaScript.

Backticks são citações de “funcionalidade estendida”. Eles nos permitem incorporar variáveis ​​e expressões em uma string, envolvendo-as ${…}, por exemplo:

let name = "John";

// embed a variable
alert( `Hello, ${name}!` ); // Hello, John!

// embed an expression
alert( `the result is ${1 + 2}` ); // the result is 3
A expressão interna ${…}é avaliada e o resultado torna-se parte da string. Podemos colocar qualquer coisa lá: uma variável como nameou uma expressão aritmética como 1 + 2ou algo mais complexo.

Observe que isso só pode ser feito em crases. Outras citações não têm essa funcionalidade de incorporação!

alert( "the result is ${1 + 2}" ); // the result is ${1 + 2} (double quotes do nothing)
Abordaremos strings mais detalhadamente no capítulo Strings .
