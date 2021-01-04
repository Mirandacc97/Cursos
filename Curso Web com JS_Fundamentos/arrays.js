//DECLARANDO
const valores = [7.7, 8.9, 6.3, 9.2];
console.log(valores);
//ALTERANDO POR LOCAL
valores[4] = 10;
console.log(valores);
//ADICIONANDO
valores.push({ id: 3 }, false, null, 'teste');
console.log(valores);
//REMOVENDO
console.log(valores.pop());
//DELETANDO
delete valores[0];
console.log(valores);
//INFORMANDO QUE ARRAYS SÃO DO TIPO OBJETO
console.log(typeof(valores));