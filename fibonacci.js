/*2. A função de Fibonacci é definida assim: 
F(0) = 0, F(1) = 1 e 
F(n) = F(n-1) + F(n-2) para n > 1
f(4) = f(3)+f(2)
Faça uma função que receba um número inteiro n (n >=0) e devolva o 
valor de Fibonacci. 
Exemplo: 0 1 1 2 3 5 8 13
fib(3) = 2
fib(6) = 8*/
function auxiliar(){
		var n=document.getElementById("num").value;
		
		fibonacci(n);
}
function fibonacci(num){
	var n=parseInt(num);
	var fn, fib=[];
	var fibon=[0,1,1];
	if (n>=0){
			if(n==0||n==1){
			fn=-n*((n-1)+(n-2));
			document.getElementById("resposta").value= fn;	
			}else if(n>1){
					for (var i = 2; i <=n; i++) {
						fib=parseInt(fibon[i-1])+parseInt(fibon[i-2]);
						fibon[i]=fib;
						/*fib+=fibon[i-1]+fibon[i-2]*/;
						console.log('fib'+fib);
						console.log('fibon'+fibon)
					}
					
					document.getElementById("resposta").value= fibon[n];	
			}
	} else {
		document.getElementById("resposta").value= 'DIGITO INVÁLIDO!!!';
	}
}