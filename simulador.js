class client {
    constructor(fName, email,){
    this.fName = fName
    this.email = email
};
}

const InterestRate = 2

// Obtener el nombre del usuario

let getName = prompt('Bienvenido a E-Bank, porfavor introduce tu nombre completo');

if (getName != ''){
    alert('Muchas gracias ' + getName + ' ahora continuemos con el proceso');
}else{
    alert('Upps!, no puedes dejar este dato en blanco');
    do {
        getName = prompt('Por favor introduce tu nombre completoe');
    } while (getName == '');
}

//Obtener direcicón email del usuario

let getEmail = prompt('Ahora, incluye tu dirección de email')

if (getEmail != ''){
    alert('Excelente, continuemos con el proceso');
}else{
    alert('Upps!, no puedes dejar este dato en blanco');
    do {
        getEmail = prompt('Por favor, introduce tu dirección de email');
    } while (getEmail == '');
}

//Crear un nuevo usuario

let NewClient = new client (getName, getEmail);

// Selecciona los Meses de tu crédito

    let getMonths = parseFloat(prompt("¡Felicidades, tienes derecho a un nuevo crédito!. Puedes escoger entre 12, 24 y 36 meses para pagar. \n ¿Cúantos meses deseas para tú crédito?"));
    if ((getMonths == 12) || (getMonths == 24) || (getMonths == 36)){

    }else{
        do{
            getMonths = parseFloat(prompt('Porfavor, selecciona entre 12, 24 y 36 meses (solo introduce el número)'))

        } while (getMonths != 12 && getMonths != 24 && getMonths != 36);
    }
    let getAmount = 0; 
    let totalAmount = 0;
    let AmountPmonth = 0;

    switch (getMonths){
        case 12:
            alert ('Seleccionaste un plaso de 12 meses. Esta opción te otorga un crédito de hasta  $20,000 pesos')
            getAmount = parseFloat(prompt( NewClient.fName + ', ¿Cuál es el monto que quieres solicitar para tu crédito? solo introduce números*'));
            if (getAmount <= 20000){
                alert('Seleccionaste un monto de '+ getAmount +' , continuemos con el proceso');
            }else {
                do{
                    getAmount = parseFloat(prompt("Upps, tu monto no puede ser mayor a  $20,000 pesos. Por favor digita un monto correcto"));
                }while (getAmount > 20000);
            }
        
            totalAmount = getAmount + (getAmount * InterestRate)
            AmountPmonth = totalAmount / 12
    
            alert('Tu crédito esta listo, escogiste tomar un monto de ' + getAmount + ' con 12 meses para pagar. \n estarás pagando ' + AmountPmonth + ' mensualmente, con un monto final a pagar de ' + totalAmount)
            alert('Enviaremos toda la información correspondiente a tu dirección de correo electrónico: ' + NewClient.email )
            break;
        
        case 24:
            alert ('Seleccionaste un plaso de 24 meses. Esta opción te otorga un crédito de hasta  $40,000 pesos')
            getAmount = parseFloat(prompt( NewClient.fName + ', ¿Cuál es el monto que quieres solicitar para tu crédito? solo introduce números*'));
            if (getAmount <= 40000){
                alert('Seleccionaste un monto de '+ getAmount +' continuemos con el proceso');
            }else {
                do{
                    getAmount = parseFloat(prompt("Upps, tu monto no puede ser mayor a  $40,000 pesos. Por favor digita un monto correcto"));
                }while (getAmount > 40000);
            }
        
            totalAmount = getAmount + (getAmount * InterestRate)
            AmountPmonth = totalAmount / 24
    
            alert('Tu crédito esta listo, escogiste tomar un monto de ' + getAmount + ' con 24 meses para pagar. \n estarás pagando ' + AmountPmonth + ' mensualmente, con un monto final a pagar de ' + totalAmount)
            alert('Enviaremos toda la información correspondiente a tu dirección de correo electrónico: ' + NewClient.email )
            break;
    
        case 36:
            alert ('Seleccionaste un plaso de 36 meses. Esta opción te otorga un crédito de hasta  $80,000 pesos')
            getAmount = parseFloat(prompt( NewClient.fName + ', ¿Cuál es el monto que quieres solicitar para tu crédito? solo introduce números*'));
            if (getAmount <= 80000){
                alert('Seleccionaste un monto de '+ getAmount +' continuemos con el proceso');
            }else {
                do{
                    getAmount = parseFloat(prompt("Upps, tu monto no puede ser mayor a  $80,000 pesos. Por favor digita un monto correcto"));
                }while (getAmount > 80000);
            }
        
            totalAmount = getAmount + (getAmount * InterestRate)
            AmountPmonth = totalAmount / 36
    
            alert('Tu crédito esta listo, escogiste tomar un monto de ' + getAmount + ' con 36 meses para pagar. \n estarás pagando ' + AmountPmonth + ' mensualmente, con un monto final a pagar de ' + totalAmount)
            alert('Enviaremos toda la información correspondiente a tu dirección de correo electrónico: ' + NewClient.email )
            break;
    
        default:
            alert("You havent choose a correct answer and this pircess will be finished")
            break;
    }




