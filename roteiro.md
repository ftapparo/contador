
1 - Fazer FORK do repositorio do Github https://github.com/ftapparo/contador.git


2 - Fazer clone para seu computador

  git clone https://github.com/seu-usuario/seu-repositorio.git


3 - Criar um branch para correção

  git branch bugfix/erro1

  git checkout bugfix/erro1


4 - Corrigir o problema

  git add .

  git commit -m "Correção do erro bla bla bla"


5 - Repetir passo anterior 3 e 4 para cada erro

6 - Por fim subir para o repositorio

  git branch nome-ra

  git checkout nome-ra

  git push -f origin nome-ra

7 - Criar um PR (Pull Request com o fonte original)
