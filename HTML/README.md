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
   <dt>
     <a href="#formatTag">- Formatando Texto</a>
   </dt>
   
   <dt>
     <a href="#cabecalhosTag">- Cabeçalhos</a>
   </dt>
   
   <dt>
     <a href="#listasTag">- Listas</a>
   </dt>
   
   <dt>
     <a href="#tabelasTag">- Tabelas</a>
   </dt>
   
   <dt>
     <a href="#FormulariosTag">- Formulários</a>
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

<h2 id="formatTag"> Formatando Texto </h2>
Abaixo serão listados as principais tags utilizadas para estilizar textos, onde na maioria das vezes é usada dentro da tag de parágrafo <i>< p > </i> .

* < b >    NEGRITO </ b > 

	<b>    NEGRITO </b> 

* < strong > TEXTO EM NEGRITO DADO COM IMPORTANTE </ strong > 

	<strong> TEXTO EM NEGRITO DADO COM IMPORTANTE </strong> 
	
* < em > TEXTO USANDO EMPHISIZED </ em > 
	
	<em> TEXTO USANDO EMPHISIZED </em> 
	
* < i > TEXTO EM ITÁLICO  </ i > 

	<i> TEXTO EM ITÁLICO  </i> 

*< small > texto com a letra pequena  </ small > 
	<small> texto com a letra pequena  </small> 
