function confirmaSenha() {
	
	var senh=document.getElementById("senha").value;
	var confSenha=document.getElementById("confirma").value;
	
	var teste = iguais(senh, confSenha);

	if (teste){
		 
	alert('Senha confirmada com sucesso!!!');
		
		console.log('Confere!');
	}
	
	else {	
		alert('As senhas não coincidem, DIGITE NOVAMENTE!!!');
		console.log('Não confere!');
	}
}

function iguais(senha, cf_senha) {
	if (senha === cf_senha){
		 return true;
	}
	return false;
}