function corrigir(){
	
	var questoes= (document.getElementById("nQuestoes").value);
	var gabarito= (document.getElementById("gabarito").value).split('');
	var resposta=(document.getElementById("resposta").value).split('');
	var acertos=0, qtd=gabarito.length;	
	
	
		for (var i = 0; i < qtd; i++) {
			if(gabarito[i]===resposta[i]){
				acertos+=1;
			console.log('i: '+i);	
			console.log('gabarito[i]: '+gabarito[i]);
			console.log('resposta[i]: '+resposta[i]);
			console.log('GABARITO: '+gabarito);
			console.log('RESPOSTA: '+resposta);
		}
			
		}
		certas.innerHTML = 'ACERTOS: '+ acertos;
		console.log('NÚMERO DE QUESTÕES: '+questoes); 
		console.log(gabarito);
		console.log(resposta);
		console.log('ACERTOS: '+acertos);
	}
		/*quantidade.innerHTML = 'NÚMERO DE QUESTÕES: '+ questoes;
		gab.innerHTML = 'GABARITO: '+ gabarito;	
		
		resp.innerHTML = 'RESPOSTA DO ALUNO: '+ resposta;
		*/	
		 
		/*console.log('GABARITO [2][0] '+gabarito[2][0]); 
		console.log('RESPOSTA [0][0] '+resposta[0][0]);
		/*GABARITO[Nº DA POSIÇÃO DO ELEMENTO][Nº DA POSIÇÃO DOS ALGARISMO DO ELEMENTO]*/
