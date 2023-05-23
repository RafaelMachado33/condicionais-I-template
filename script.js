const booleano = true;
const booleano2 = false;


/*if (booleano) {
    alert("Booleano1 true");
}else{
    alert("Booleano1 false");
}*/

/*const idade = 17

if (idade >= 18) {
    alert("Pode votar!");
} else {
    const autorização = confirm("Você tem autorização dos pais?");
    if (autorização) {
        alert("Pode votar com a autorização dos pais!");
    } else {
        alert("Não pode votar!Lamento.");
    }
}*/

const média = Number(prompt("Fale a média de suas notas:"));

if (média >= 5) {
    alert("Aprovado");
} else if (média >= 3) {
    alert("Você está em recuperação.");
} else if (média < 3) {
    alert("Estudante Reprovado");
} else {
    alert("Dado inválido.");
}
