aUsuarios = [];
totalUsuarios = 0;


function criarUsuario() 
       
{
let usuario = document.getElementById("usuario").value;
let u = {nome:usuario};

var destino = document.getElementById("lista");
document.getElementById("selecione").innerHTML += "<option value='" + totalUsuarios + "'>" + usuario ;
destino.innerHTML += "<option value='" + totalUsuarios + "'>" + usuario + "</option>";
totalUsuarios++;
}

function envia()
{
	let usuario = document.getElementById("usuario").value;
	let telefone = document.getElementById("telefone").value;
    let dataSemFormatação = document.getElementById("data").value;
    let nota = document.getElementById("nota").value;
    let cidade = document.getElementById("cidade").value;
    let email = document.getElementById("email").value;
    let sexo = document.getElementById("sexo").value;
    var destino = document.getElementById("saida");

    var dataFormatada = dataSemFormatação.split("-");

    destino.innerHTML += "<br>" + "Aluno:" + usuario + "<br>" + "Telefone:" + telefone + "<br>" + "Data de Nascimento:" + dataFormatada[2]+ "/" + dataFormatada[1] + "/"+ dataFormatada[0] + "<br>" + "Nota Final:" + nota + "<br>" + "Cidade:" + cidade + "<br>" + "Sexo:" + sexo + "<br>" + "Email:" + email + "<br>";
    
   
    alert ("Dados enviados ! ")
    

}

