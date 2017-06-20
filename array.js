function suma(...numbers) {	
	return numbers.reduce(function (acum, numbers){
		acum += numbers
		return acum
	}, 0)
}

/*
function dobles(...numbers){
	cosnt resultado = []
	for (let i=0; i<numbers.length; i++){
		resultado.push(numbers[i] * 2)
	}
	return resultado;
} */

//o arrow function retornando dobles y usando el metodo map

const dobles = (...numbers) => numbers.map(numbers => numbers*2)

//metodo filter para encontrar los numeros pares del arreglo
//Forma 1
function pares(...numbers){
	const resultado = []
	const length = numbers.length
	for(let i=0; i < length; i++){
		const number = numbers[i]
		if(number % 2 == 0){
			resultado.push(number)
		}
	}
	return resultado
}
//Forma 2
function pares(...numbers){
	return numbers.filter(function (number) {
		return number % 2 == 0
	})
}

//Forma 3 ARROW FUNCTION
const pares = (...numbers) => numbers.filter(number => number % 2 == 0 )


pares(4, 8, 12, 8954, 7)
dobles(5, 10, 15, 20, 30)