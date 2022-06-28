// Desafio 11
function generatePhoneNumber(array) {
  let ddd = `(${array[0]}${array[1]}) `;
  let phone = `${array[2]}${array[3]}${array[4]}${array[5]}${array[6]}-${array[7]}${array[8]}${array[9]}${array[10]}`;
  let quantidade = {};
  array.forEach(function (x) { quantidade[x] = (quantidade[x] || 0) + 1; });
  if (array.length !== 11) {
    return 'Array com tamanho incorreto.';
  } for (let index = 0; index < array.length; index += 1) {
    if (array[index] < 0 || array[index] > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    } if (Object.values(quantidade)[index] === 3) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  } return ddd + phone;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let soma1 = lineA + lineB;
  let soma2 = lineA + lineC;
  let soma3 = lineB + lineC;
  let diferença1 = lineA - lineB;
  let diferença2 = lineA - lineC;
  let diferença3 = lineB - lineC;
  if(lineA < soma3 && lineA > Math.abs(diferença3)){
    return true;
  }
	 if( lineB < soma2 && lineB > Math.abs(diferença2)){
    return true;
  }
  if(lineC  < soma1 && lineC > Math.abs(diferença1)){
    return true;
  }
  return false;
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
