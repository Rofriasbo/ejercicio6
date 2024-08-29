// 6. Filtrado de elementos en un arreglo
function filtrarMayoresQue(arr, valor) {
    // Filtrar y contar los elementos que son mayores que el valor dado
    const filtrado = arr.filter(num => num > valor);
    return {
        filtrado,
        cantidad: filtrado.length
    };
}
console.log(filtrarMayoresQue([2, 6, 8, 3, 9, 7, 15, 26, 10, 14, 36, 20, 26, 101,  17], 9)); // Salida: { filtrado: [ 15, 26,  10, 14, 36,20, 26, 101, 17 ], cantidad: 4 }