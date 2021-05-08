/*1. Faça uma função que receba duas listas de mesmo tamanho e devolva uma lista contendo a soma 
dos elementos correspondentes. 
Exemplo: Entrada: [1, 3, 4, 5]
[3, 4, 0, 9]
Saída: [4, 7, 4, 14]*/

function auxiliar(){
		var lista1=document.getElementById("list1").value;
		var lista2=document.getElementById("list2").value;
		
		somaVetor(lista1, lista2);
}

function somaVetor(lista1,lista2){
	
	 var l1=lista1.split('');
	 var l2=lista2.split('');
	
	var tam=l1.length;
	var soma=[];
	
		if (l2.length==tam){
								
				for (var i = 0; i < tam; i++) {

					soma[i]=parseFloat(l1[i])+parseFloat(l2[i]);
					
				}
			document.getElementById("resposta").value=(soma);
		} else{ 
			document.getElementById("resposta").value=('Tamanho das listas incompatíveis!!!');		
	}
}

