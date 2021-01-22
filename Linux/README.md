# Linux

## Conteúdo
<ul>
  <li>
  <a href ="#OqueE"> O que é ? 🐧 </a>
  </li>
    <li>
  <a href ="#Windows"> Usando Linux no Windows </a>
  </li>
   <li>
  <a href ="#Terminal"> Entendendo o Terminal </a>
  </li>
     <li>
  <a href ="#Comandos"> Comandos Linux </a>
  </li>
     <li>
  <a href ="#Terminal"> Entendendo o Terminal </a>
  </li>
</ul>

<hr>

<section> <h1 id="OqueE">O que é?</h1>

  É um sistema operacional gratuito, onde contém código aberto, ou seja, qualquer pessoa pode criar e distribuir aplicações. Existem inúmeras versões do sistem operacional como Ubuntu, debian, Linux Mint etc.
  O sistema operacional contém um terminal (shell), onde através de comandos pode acessar as camadas de mais baixo nível do sistema, assim fazendo atualizações ou modificações. Além disto pode andar em diretórios diretamente por comandos, criar arquivos de texto, entre outras coisas.

</section>
 
 <section> <p id = "Windows">Usando Linux no Windows</p>
  Hoje é possivel rodar um simulador de terminal de Linux no windows sem precisar necessariamente instalar o Linux como segundo sistema operacional. 
  Veja o tutorial no site: https://www.ssl.com/pt/como/ativar-o-subsistema-linux-instalar-o-ubuntu-windows-10/
 </section>

<section>  <p id = "Terminal"> Entendendo o Terminal </p>
  Assim que abrimos o terminal nos deparamos com algo do tipo:
  

  <img src="src/terminalInicial.png" width="500" title="hover text">


  O nome antes do @ na imagem significa o nome do usuário da máquina, já o nome após o @ é o nome da própria maquina. Neste caso o usuário é <i>daiane</i> e o nome da máquina é <i>CRED-DH4Rf73</i>
  
  O simbolo <b>~</b> significa que esta na pasta do usuário, já o simbolo <b>$</b> significa que é um usuário limitado, ou seja não consegue fazer tudo que o administrador faz
 </section>
 <hr>
 <section>
 <p id = "Comandos">Comandos Linux</p>
  
  Irei listar os principais comandos utilizados no terminal do linux, e logo após uma breve explicação.
  
  
  * pwd  --> Mostra em qual pasta você está, se mostrar apenas uma barra ( / ), quer dizer que está na raiz do terminal.
   
  * ls
  --> Mostra quais arquivos e pastas estão no diretório
  * ls -al 
  --> Vai listar todos os arquivos e diretórios com informações detalhadas como permissões, tamanho, proprietário, etc.
  * clear
  --> Limpa todos os comandos do terminal
   
  * su root
  --> Entrar como administrador, vai solicitar do administrador.
  
  * mkdir <i>NOME DA PASTA</i>
  --> Comando para criar pastas, so funcionará se tiver permissão de administrador
  O Linux permite que seja criado pastas com nomes iguais desde que tenham diferença de maiúsculo ou minúsculo, 
   <img src="src/pastasComMesmoNome.png" width="500" title="Pastas com Mesmo Nome">
  
  * rmdir <i>NOME DA PASTA</i>
  --> Comando para apagar uma pasta. Se deseja apagar uma pasta que está dentro de outra, deve-se ir atéo diretório que a pasta se encontra.
  
  * cd <i>NOME DA PASTA</i>
  --> Comando para abrir uma pasta
  
  * cd ..
  --> Comando para sair daquela pasta e ir para a anterior dela
    
</section>
