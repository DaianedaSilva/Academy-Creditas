# HTML

## Conteúdo
<dl>
<dt>
     <a href="#HTML">- O que é HTML?</a>
</dt>
<dt>
     <a href="#TAG">- O que são TAGS?</a>
</dt>
<dt>
     <a href="#PrincTags">- Principais tags</a>
</dt>
        <dd> 
             <a href="#doctype">- < !doctype html ></a>
        </dd>
        <dd>
             <a href="#htmlTag">- <  html ></a>
        </dd>
        <dd>
             <a href="#headTag">- < head ></a>
        </dd>
        <dd>
             <a href="#charsetTag">- < meta charset = "utf-8" >  </a>
        </dd>
        <dd>
             <a href="#bodyTag">- < body ></a>
        </dd>
	<dd>
             <a href="#pTag">- < p ></a>
        </dd>
        <dd>
             <a href="#aTag">- < a ></a>
        </dd>
	<dd>
             <a href="#hrTag">- < hr ></a>
        </dd>
	<dd>
             <a href="#brTag">- < br ></a>
        </dd>
		<dd>
             <a href="#comentTag">- < ! Comentário ></a>
        </dd>
   <dt>
     <a href="#formatTag">- Formatando Texto</a>
   </dt>
   
   <dt>
     <a href="#cabecalhosTag">- Cabeçalhos</a>
   </dt>
   
   <dt>
     <a href="#listasTag">- Listas</a>
   </dt>
		   <dd>
				 <a href="#lo">Lista Ordenada - ul </a>
			</dd>
			<dd>
			<a href="#lno">Lista Não Ordenada - ol </a>
			</dd>
			<dd>
			<a href="#ld">Lista de Defnição - dl</a>
			</dd>   
   <dt>
     <a href="#tabelasTag">- Tabelas</a>
   </dt>
   
   <dt>
     <a href="#formTag">- Formulários</a>
   </dt>
</dl>


 <h1 id="HTML"> O QUE É HTML?</h1>
Html é uma **linguagem de marcação de hipertexto.** É o componente mais importante para web, onde as págians web utiliza dele para organizar as informações na página.
Sem ele o navegor não sabe identificar o que é parágrafo, imagem, video, título, etc.


 <h1 id="TAG"> O QUE SÃO TAGS?</h1>
 
**É o principal componente do HTML**, é a base do HTML, onde forma o corpo básico da maioria das páginas. 

Sempre ficam entre **< >**

Geralmente se apresentam em pares, como < body > e < /body >, sendo que: 
- A primeira tag (< body >) : é a tag inicial, ou de abertura.
- A segunda  (< /body >): é a de fechamento, sempre terá uma /.

Existem as chamas ***TAGS ESPECIAIS***, chamadas ABERTAS OU VAZIAS, que não possuem fechamento, (ex:  < br>, < a>) 

***OBESERVAÇÕES:***
   < P >  e < p > são a mesma coisa, HTML não diferencia maiúsculo de minúsculo .
   
 Sujestão: USAR SEMPRE MINÚSCULO 


**SIXTÁXE:**

	< TagName > CONTEÚDO  <\TagName> 

 <h1 id="PrincTags"> Principais Tags</h1>
 
A baixo temos as principais tags que utilizamos na web.

<h2 id="doctype"> < !doctype html > </h2>
É a tag responsável por declarar ao navegador que o arquivo é um arquivo HTML.


***É a primeira tag que deve aparecer.***

**SIXTÁXE:**

		< !doctype html > 

<h2 id="htmlTag"> <  html > </h2>
É a tag onde todo o documento HTML é formulado, todo conteudo da página deve ficar dentro dele.

Tem tag de abertura e de fechamento.

Apresenta junto a lingua em que o arquivo foi escrito.

**SIXTÁXE:**

	< html lang="pt-br"> Conteúdo </ html > 

<h2 id="headTag"> <  head >  </h2>

Tag responsável por indicar ao anvegador os elementos do cabeçalho da página .

Aqui é onde incluirmos o titulo da página, incluir scripts, instruir o navegador onde deve se encontrar as folhas de estilo utilizadas (css), informações meta etc.

**SIXTÁXE:**

	< head > Conteúdo </ head > 


As principais tags que se usa dentro da tag head são:
<table> 
<tr>
      <th><  title > Titulo  < / title ></th> 
       <td> define o titulo do documento (Nome que aparece na aba do navegador) </td >
</tr> 
<tr>
  <th> <  style >  </th> 
  <td> define informações de estilo de um documento HTML  </td >
</tr> 
<tr>
<th>< meta >Conteúdo < / meta> </th>
      <td> essa tag contém elementos que são usados para especificar o comportamento e a descrição da página,  as palavras-chaves, o autor do documento, a última modificação, entre outros METADADOS. Podem ser utilizados pelos navegadores (como exibir conteúdo ou pagina recuperada), pelos motores de busca (palavras-chaves) </td>
</tr>
<tr>
	<th> < link ></th>
	<td> É mais usado para buscar as orientações de estilo de páginas  em outros arquivos  </td>
</tr>

<tr>
	<th> < script >< /script ></th>
<td>É usado para definir um script do lado do cliente, como um JavaScript. Os usos comuns para Java Script são manipulação de imagem, validação de formulários e mudanças dinâmicas do conteúdo </td>
</tr>

</table> 

<h2 id="charsetTag"> < meta charset = "utf-8">   </h2>
Uma tag que fica dentro do <i>< head ></i> muito importante.

O navegador sempre tentará decodificar o que foi escrito no padrão americano ANSI, que não contém caracteres como o ç, para que ele possa entender usamos o padrão latino UTF-8, e declaramos isto através desta tag.

**SIXTÁXE:**

	< head >
        <meta charset = "utf-8"> 
	</ head >


<h2 id="bodyTag"> <  body >  </h2>
É a tag responsável por definir o corpo do HTML, dentro dele vamos ter todas as outras tags, ou seja, todo o conteúdo do HTML.

***É UMA TAG OBRIGATÓRIA***


**SIXTÁXE:**

	< body > Conteúdo </ body > 

<h2 id="pTag"> < p >   </h2>
Tag responsável para a criação de um parágrafo sintaticamente, ou seja, tudo que estiver dentro desta tag o navegador entende que é um texto. 

Se você criar um texto sem tag ele também aparecerá no navegador, porém sem valor sintactico, o que está errado.


***Para quebrar linha entre os parágrafos pode ser usado a tag < br >***


**SIXTÁXE:**

	< p > Este é um parágrafo. < /p > 

<h2 id="aTag"> < a >   </h2>
Tag de âncora utilizada para criação de links.  Utilizamos o atributo <i>href</i>, onde colocamos para qual id queremos ir ou link externo. 

Outro atributo que pode ser usado também junto com a tag  <i>a</i> é o <i> target="_blank"</i>. Ele é responsável por quando a pessoa clicar na âncora a nova página aparece em uma nova gia.

Para ir ao um id da página utilizamos o # antes, ele irá procurar em qual tag tem o id informado e a tela irá até aquela posição da página.

**SIXTÁXE:**

	< a href = "https://www.creditas.com/"> Site Creditas Abrindo em Cima do Site</a>  
		< a href = "https://www.creditas.com/" target="_blank" > Site Creditas Abrindo em Outra Guia </a>  
	< a href = "#tagP"> Ir para o tag com o id="tagP" </a> 


<h2 id="hrTag"> < hr >   </h2>
A tag <i>hr</i> é uma tag sem fechamento responsável por divisão de temas, visualmente. Ela cria uma linha horizontal a página

**SIXTÁXE:**

	< p > TEXTO 1 < / p>
	 < hr >
	< p > TEXTO 2< / p>

<h2 id="brTag"> < br >   </h2>
Tag responsável por quebrar linhhas.

**SIXTÁXE:**

	< p > TEXTO 1
	 < br>
	 TEXTO 2< / p>

<h2 id="comentTag"><! Comentários > </h2>
As tags de comenatários são usadas para inserir informações e orientações do documento escrito, para quanto visto dps saber o que se tem ali. 

<i>PS: COMENTÁRIOS NÃO SÃO EXIBIDOS PELO NAVEGADOR, É APENAS PARA O DEV</i> 

**SIXTÁXE:**

	< p > TEXTO 1< / p> < ! texto discritivo >

<h2 id="formatTag"> Formatando Texto </h2>
Abaixo serão listados as principais tags utilizadas para estilizar textos, onde na maioria das vezes é usada dentro da tag de parágrafo <i>< p > </i> .

* < b >    NEGRITO </ b > 

	<b>NEGRITO</b> 

* < strong > TEXTO EM NEGRITO DADO COM IMPORTANTE </ strong > 

* < em > TEXTO USANDO EMPHISIZED </ em > 
* < i > TEXTO EM ITÁLICO  </ i > 
*< small > texto com a letra pequena  </ small > 

<h2 id="cabecalhosTag"> Cabeçalhos h1 - h6 </h2>
A criação de cabeçalho permite hierarquizar os diferentes títulos de uma página, isso faz com que os mecanismos de busca consigam identificar quais são os títulos mais importantes da publicação , facilitando a lietura e a indexação do conteudo . Muito usado para títulos separando o conteúdo do site.

<i><b>O HTML permite até  6 tipos de cabeçalhos, sendo o 1º  quando deseja definir maior nível de importância , e o último o menor nível </b></i>

**SIXTÁXE:**

	<h1> Cabeçalho 1 </h1> 
	<h2> Cabeçalho 2 </h2> 
	<h3> Cabeçalho 3 </h3> 
	<h4> Cabeçalho 4 </h4> 
	<h5> Cabeçalho 5 </h5> 
	<h6> Cabeçalho 6 </h6> 

<h2 id="listasTag"> Listas </h2>
É uma sequência encadeada a qual contém mais de um elemento que você precisa exibir em sua página 

No HTML existem 3 TIPOS DE LISTAS :
<b>
* <a href="#lno">Lista Não Ordenada - ul </a>
* <a href="#lo">Lista Ordenada - ol </a>
* <a href="#ld">Lista de Defnição - dl</a>
</b>

<h3 id="lno" >Lista Não Ordenada -  ul</h3>
Esta lista apresenta os itens com marcadores.

Cada < li >< / li > dentro do < ul > < / ul >, corresponde a 1 marcador, ou seja, um item, que será exibido em cada linha da lista.

Dentro de uma < ul > pode-se usar infinitas  < li >

**SIXTÁXE:**

		< ul >   
		< li >  item  1 </ li >  
		< li >  item 2  </ li > 
		</ ul > 

<ul>   
<li>  item  1 </li>  
<li>  item 2  </li> 
</ul> 

Podemos ter várias < ul > dentro de outras < ul >:

**SIXTÁXE:**

		< ul >   
		< li >  item  1 </ li >  
		< li >  item 2  </ li > 
		< ul >   
		< li >  item  2.1 </ li >  
		< li >  item 2 .2 </ li > 
		< ul >   
		< li >  item  2.2.1 </ li >  
		< li >  item 2.2.2  </ li > 
		 </ ul > 
		 </ ul > 
		< li > item 3 </ li > 
		 </ ul > 

<ul>   
<li>  item  1 </li>  
<li>  item 2  </li> 
<ul>   
<li>  item  2.1 </li>  
<li>  item 2 .2 </li> 
<ul>   
<li>  item  2.2.1 </li>  
<li>  item 2.2.2  </li> 
 </ul> 
 </ul> 
<li> item 3 </li> 
 </ul> 
 
 
<h3 id="lo" >Lista Ordenada  -ol</h3>
A lista ordenada apresenta seus itens numerados. 

Cada < li >< / li > dentro do < ol > < / ol >, corresponde a 1 marcador, ou seja, um item, que será exibido em cada linha da lista.

Dentro de uma < ol > pode-se usar infinitas  < li >

**SIXTÁXE:**

		<ol> 
		<li> Item 1 </li> 
		<li> Item2 </li> 
		<li> Item 3 </li> 
		</ol> 

<ol> 
<li> Item 1 </li> 
<li> Item2 </li> 
<li> Item 3 </li> 
</ol> 


Podemos mudar o número que a lista inicia, com: 

	* < ol Start = " numero que deseja "> 

Cuidado, pois se ficar uma nova lista dentro desta ela n seguirar a numeração, começará do 1 novamente .

	<ol start="10"> 
		<li>Hot Dog </li> 
		<li> Churrasco </li> 
			<ol> 
				<li>Suco de Uva </li> 
				<li> Cerveja </li> 
				</ol>
	</ol> 

<ol start="10"> 
	<li>Hot Dog </li> 
	<li> Churrasco </li> 
		<ol> 
			<li>Suco de Uva </li> 
			<li> Cerveja </li> 
			</ol>
</ol> 

Outras funcionalidade é reverter a numeração, usando de trás para frente: 

		< ol reversed > 

		<ol reverse> 
			<li> Item 1 </li> 
			<li> Item 2 </li> 
				<ol> 
					<li> Item 3 </li> 
					<li> Item 4 </li> 
					</ol>
		</ol> 

<ol reverse> 
	<li> Item 1 </li> 
	<li> Item 2 </li> 
		<ol> 
			<li> Item 3 </li> 
			<li> Item 4 </li> 
			</ol>
</ol> 

Podemos mudar os números que aparecem por outra coisa, como algoritmos romanos, para isso usamos o atributo  TYPE 

<table>
<tr>
	<th>Atributos</th>
	<th>Tipos de Numeração </th>
	<th>Saída </th>
</tr>
<tr>
	<th>1</th>
	<th>Número Arábicos</th>
	<th>1,2,3...</th>
</tr>
<tr>
	<th>a</th>
	<th>Letras Minúsculas </th>
	<th>a,b,c...</th>
</tr>
<tr>
	<th>A</th>
	<th>Letras Maiúsculas </th>
	<th>A,B,C....</th>
</tr>
<tr>
	<th>i</th>
	<th>Números Romanos em Minúsculos</th>
	<th>i, ii, iii,.... </th>
</tr>
<tr>
	<th>I (i maiusculo) </th>
	<th>Números Romanos em Maiúsculos </th>
	<th>I, II, III, .... </th>
</tr>
</table>

	<ol type="I"> 
		<li> Item 1 </li> 
		<li> Item 2 </li> 
	</ol> 

<ol type="I"> 
	<li> Item 1 </li> 
	<li> Item 2 </li> 
</ol> 



<h3 id="ld" >Lista de Definição - dl </h3>
Este tipo de lista Não utiliza marcadores ou número 

Deve ser usada quando somente se deseja descrever um termo < dt > e suas descrições < dd > 
<b>
	OBS: 
		Dentro de um item da lista vc pode colocar texto, quebras de linha, imagens, links, outras listas, etc. 
</b>

**SINTÁXE:**

	<dl> 
		<dt> Termo 1</dt> 
			</dd> Descrição 1</dd> 
		<dt> Termo 2</dt> 
			</dd> Descrição 2</dd> 
	</dl> 

<dl> 
	<dt> Termo 1</dt> 
		</dd> Descrição 1</dd> 
	<dt> Termo 2</dt> 
		</dd> Descrição 2</dd> 
</dl> 


<h3 id="combinandoListas" >Combinando Listas</h3>
Podemos criar uma única lista usando as 3 juntas, uma dentro da outra .

	<p>Receita de Omelete</p>

	<dl>
		<dt>Ingredientes</dt>
			<ul>
				<li>2 ovos</li>
				<li>Queijo</li>
				<li>Sal</li>
				<li>Tomare cortado</li>
			</ul>
		<dt>Preparos</dt>
			<ol>
				<li>Bata os 2 ovos</li>
				<li>Coloque-os na frigideira já untada com óleo</li>
				<li>Coloque o sal, o presunto e o queijo</li>
				<li>Ao fim acreste o tomate.</li>
			</ol>
	</dl>

<p>Receita de Omelete</p>

<dl>
	<dt>Ingredientes</dt>
		
		<ul>
			<li>2 ovos</li>
			<li>Queijo</li>
			<li>Sal</li>
			<li>Tomare cortado</li>
		</ul>
	<dt>Prepardos</dt>
		
		<ol>
			<li>Bata os 2 ovos</li>
			<li>Coloque-os na frigideira já untada com óleo</li>
			<li>Coloque o sal, o presunto e o queijo</li>
			<li>Ao fim acreste o tomate.</li>
		</ol>
</dl>

<h2 id="tabelas"> Tabelas </h2>
Forma de apresentar informações através de tabelas 

Cada < tr > é uma linha, onde tem < th >  e/ou < td > que representam as células da tabela.

Os < th > são os títulos e os < td > as descrições

Tabela na vertical:

	<table border= "1" >
			<tr>
				<th> Titulo </th>
				<th> Titulo </th>
			</tr>
			<tr>
				<td> descrição </td >
				<td> descrição </td >
			</tr>
	</table>

<table border= "1" >
        <tr>
            <th> Titulo </th>
            <th> Titulo </th>
        </tr>
        <tr>
            <td> descrição </td >
            <td> descrição </td >
        </tr>
</table>

Tabela na horizontal:

	<table border= "1" >
			<tr>
				<th> Titulo </th>
				<td> descrição </td >
			</tr>
			<tr>
			   <th> Titulo </th>
				<td> descrição </td >
			</tr>
	</table>
<table border= "1" >
        <tr>
            <th> Titulo </th>
			<td> descrição </td >
        </tr>
        <tr>
           <th> Titulo </th>
            <td> descrição </td >
        </tr>
</table>


<h2 id="formTag" >Formulários</h2>
A tag responsável por criar formulários em HTML é o:
		<form> Elememento de entrada <form>

Um formulário HTML pode conter elementos de entrada, como campos de texto, caixas de seleção, botões de rádio etc.

Ele é composto por outras tags, cada uma responsável por uma parte do formulário

<h3> < label > </h3>
A tag < label > é um elemento de entrada que define um rótulo para um elemento que será digitado 

É o nome que identifica a entrada de dados: 

**SINTÁXE:**

        < form >
		<label for = "nome do rótulo"> Descrição do rótulo </label> 
        <label for="nome_dono">Nome:</label>  
    </form>

<form>
<label for = "nome do rótulo"> Descrição do rótulo </label> 
		<label for="nome_dono">Nome:</label>  
</form>

<h3> < input > </h3>
A tag < input > é um elemento de entrada que especifica um campo de entrada onde o usuário deve inserir dados.

 Deve ser utilizado junto com a tag < label >

 É o elemento mais importante do formulario

Todas as informações do usuário virão por meio dele

Esse elemento pode variar e ter várias formas

dependendo do atributo, põe exemplo, pode ser :  campo de texto, caixa de verificação, senha, botão de rádio, botão enviar, etc

**SINTÁXE: **

	<form>
	<label for=""> TEXTO </label>
	<input type="tipo" name ="nome" size="tamanho" maxkength="maximo de caracteres" placeholder="nome que fica de exemplo">
	</form>

<form>
<label for=""> TEXTO </label>
<input type="tipo" name ="nome" size="tamanho" maxlength="maximo de caracteres" placeholder="nome que fica de exemplo">
</form>
