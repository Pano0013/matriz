let matriz = [];
let columnas, filas;
let sumaDiagonales = {derecha: 0, izquierda: 0};

columnas =parseInt(prompt("ingrese el numero de columnas"));
filas =parseInt(prompt("ingrese el numero de filas"));

if(columnas % 1 == 0 && filas % 1 == 0) {

    for(let i = 0; i <columnas; i++) {
        let nuevaFila = [];
        for(let j = 0; j <filas; j++) {
        nuevaFila.push(Math.round(Math.random() *100));
        }
        matriz.push(nuevaFila);
    }
    console.log(matriz);
    for (var i = 0; i < matriz.length; i++) {
        sumaDiagonales.izquierda += matriz[i][i];
        sumaDiagonales.derecha += matriz[i][matriz.length-i-1];
    }
    console.log("La diagonal de izquierda a derecha suma: " + sumaDiagonales.izquierda);
    console.log("La diagonal de derecha a izquierda suma: " + sumaDiagonales.derecha);
}
else{
    console.log("insertaste un numero decimal");
}

