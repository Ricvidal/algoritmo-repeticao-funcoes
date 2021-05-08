/*O trecho de programa abaixo usa
 o algoritmo da “ordenação por
inserção” para colocar em ordem 
crescente os elementos de uma lista.
a) Ordene uma lista de inteiros 
(variável lista) a partir deste 
programa. A lista pode ser criada
 manualmente (constante) ou 
 construída.
b) Imprima a lista ordenada.*/


var j=1, 
	i=0, 
	x=0, 
	auxiliar=[], 
	lista=prompt('Digite os números da lista separados por ",":');

	auxiliar=lista.split(',');

	lista=lista.split(',');

while (j < lista.length) { 
 			x = parseInt(lista[j]);
 			i = j - 1;
 		while (i >= 0 && lista[i] > x) {
 				lista[i+1] = lista[i];
 				i = i - 1;
 		}

 	lista[i+1] = x;
 	j = j + 1;
}
	document.write('<p>A lista desordenada é: </p>'+auxiliar);
	document.write('<p>A lista ORDENADA é: </p>'+lista);