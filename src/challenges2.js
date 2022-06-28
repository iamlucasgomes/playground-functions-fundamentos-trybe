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
function triangleCheck() {
  // seu código aqui
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
