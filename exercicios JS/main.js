  alert(`Hello world`)
  console.log(alert)


  let number1 = prompt(`Enter the first number`)
  let number2 = prompt(`Enter the second number`)
  

  number1 = Number(number1)
  number2 = Number(number2)
 

  const adi = number1 + number2
  const sub = number1 - number2
  const multi = number1 * number2
  const div = number1 / number2
  const restDiv = number1 % number2
  const escr = number1 + number2
  

  function miss(escr) {
  if (escr === "string") {
    return "É uma string"
  } else {
    return "Não é uma string"
  }
}
  
  function ok(adi) {

    if (typeof adi === "boolean") {
      return "É um booleano"
    } else {
      return "Não é um booleano"
    }
  }
  
  function checkOddOrEven(adi) {
    if(adi %2 === 0) {
      return "É um número Par"
    } else {
      return "É um número Impar"
    }
  }
  
  function result(adi){
    if (typeof adi === "number") {
      return("É um número");
    } else {
      return("Não é um número");
    }
  }
  
  
  
  if (typeof valor === "boolean") {
    console.log("É um booleano");
  } else {
    console.log("Não é um booleano");
  }
  
  
  alert(`Sum result : ` + adi)
  alert('Subtracion: ' + sub)
  alert('Multiplication: ' + multi)
  alert('Division: ' + div)
  alert('remainder of the division: ' + restDiv)
  alert(`O resultado da soma é:  ` + checkOddOrEven(adi))
  alert(`O resultado da soma é:  ` + result(adi))
  alert(`O resultado da soma é:  ` + ok(adi))
  alert(`A escrita é:  ` + miss(escr))