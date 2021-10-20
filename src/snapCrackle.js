/* Escreva uma função chamada snapCrackle que leva um parâmetro denominado: maxValue.
Esta função deve fazer um loop de 1 até maxValue (inclusive) 
e montar uma string com as seguintes condições para cada número:

Se o número for ímpar, no lugar dele, concatenar "Snap" no final da string.
Se o número for múltiplo de 5, no lugar dele, concatenar "Crackle" 
no final da string.
Se o número for tanto ímpar quanto múltiplo de 5, no lugar dele, 
concatenar "SnapCrackle" no final da string.
Se número não for nem ímpar e nem múltiplo de 5, 
concatenar o próprio número no final da string.
Seus itens devem ser separados sempre por vírgula e espaço (veja o exemplo).
Esta função deve retornar a string obtida */

function snapCrackle(maxvalue){
    let scList = "";
    for(let counter = 1; counter <= maxvalue; counter++)
        if(counter % 5 === 0 && counter % 2 === 1){
            scList = scList + "snapCrackle ,"
        }
            else if(counter % 5 === 0){
            scList = scList + "Crackle ,"
        }
            else if(counter % 2 === 1){
            scList = scList + "snap ,"
        }
            else if(counter)
            scList = scList + "" + counter + " ,"
    return scList;
}
console.log(snapCrackle(12))