/*Escreva uma função que, dados os três lados de um triângulo, retorne o
tipo do triângulo através de um número.
O retorno pode ser: 0 – não é um triângulo,
1 – triângulo equilátero,
2 – triângulo isósceles,
3 – triângulo escaleno.
Definições (a, b e c são os lados do triângulo):
Triângulo: (a < b + c) .e. (b < a + c) .e. (c < a + b)
Equilátero: (a == b) .e. (b == c)
Isósceles: (a == b) .ou. (a == c) .ou. (b == c)
Escaleno: (a != b) .e. (b != c) .e. (c != a)*/

function principal() { 
	var a = parseInt(document.getElementById("ladoA").value); 
	var b = parseInt(document.getElementById("ladoB").value);
	var c = parseInt(document.getElementById("ladoC").value);
	
	triangulo(a, b, c);
}

function triangulo(a,b,c){
	
	
	if	((a < b + c) && (b < a + c) && (c < a + b)){
		

		if ((a == b)&&(b == c)){
			
			document.getElementById("res").value ='1 – triângulo equilátero.';
			
		} else if /*((a == b) || (a == c) || (b == c))*/
			((a == b) || (b == c) || (c == a)){
				
			document.getElementById("res").value = "2 – triângulo isósceles.";

		} else {
			
			document.getElementById("res").value ="3 – triângulo escaleno.";
		
		} /*fim if 4*/	
	} 
	
	/*if ((a >= b + c) || (b >= a + c) || (c >= a + b))*/ else {
			
			document.getElementById("res").value ="0 – não é um triângulo.";
	}

}/*fim da função*/