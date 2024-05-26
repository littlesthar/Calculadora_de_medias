function calcular() { 
    let n1 = Number(document.getElementById('nota1').value);   
    let n2 = Number(document.getElementById('nota2').value);
    let n3 = Number(document.getElementById('nota3').value);
    let n4 = Number(document.getElementById('nota4').value);
    let res = document.querySelector('div#resultado');
    let aluno = document.getElementById('aluno').value;
    let turma = document.getElementById('turma').value;

    let media = ((n1 + n2 + n3 + n4) / 4).toFixed(1);
    
    if (media >= 0 && media <= 4.9) {
        res.innerHTML = `<strong>REPROVADO!</strong> Porém possui direito a exames de recuperação escolar!`;
    } else if (media >= 5) {
        res.innerHTML = `<strong>APROVADO!</strong> O aluno atingiu a média mínima para aprovação.`;
    }  
    
    res.innerHTML += `<p>Aluno <strong>${aluno}(${turma})</strong> obteve a média final <strong>${media}</strong></p>`;
}
