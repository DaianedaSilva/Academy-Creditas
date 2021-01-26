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
               <a href="#headTag">- <  head ></a>
         </dd>

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

**SIXTÁXE:**

	< html > Conteúdo </ html > 

<h2 id="headTag"> <  head >  </h2>

Tag responsável por indicar ao anvegador os elementos do cabeçalho da página .

Aqui é onde incluirmos o titulo da página, incluir scripts, instruir o navegador onde deve se encontrar as folhas de estilo utilizadas (css), informações meta etc.

**SIXTÁXE:**

	< head > Conteúdo </ head > 


As principais tags que se usa dentro da tag head são:
<table> 
<tr>
  <th><  title ></th> 
  <td> define o titulo do documento (Nome que aparece na aba do navegador) </td >
</tr> 
</table> 

 





