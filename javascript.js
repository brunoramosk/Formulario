(aUsuarios = []), (totalUsuarios = 0);
function criarUsuario() {
  let a = document.getElementById("usuario").value;
  var b = document.getElementById("lista");
  (document.getElementById("selecione").innerHTML +=
    "<option value='" + totalUsuarios + "'>" + a),
    (b.innerHTML += "<option value='" + totalUsuarios + "'>" + a + "</option>"),
    totalUsuarios++;
}
function envia() {
  let a = document.getElementById("usuario").value,
    b = document.getElementById("telefone").value,
    c = document.getElementById("data").value,
    d = document.getElementById("nota").value,
    e = document.getElementById("cidade").value,
    f = document.getElementById("email").value,
    g = document.getElementById("sexo").value;
  var h = document.getElementById("saida"),
    i = c.split("-");
  (h.innerHTML +=
    "<br>Aluno:" +
    a +
    "<br>Telefone:" +
    b +
    "<br>Data de Nascimento:" +
    i[2] +
    "/" +
    i[1] +
    "/" +
    i[0] +
    "<br>Nota Final:" +
    d +
    "<br>Cidade:" +
    e +
    "<br>Sexo:" +
    g +
    "<br>Email:" +
    f +
    "<br>"),
    alert("Dados enviados ! ");
}
