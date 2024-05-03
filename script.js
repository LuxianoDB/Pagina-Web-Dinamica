function GetSeed(){
    let seed = parseInt(document.getElementById("seed").value);
    if(seed >= 1 && seed < 10000){
        GetSecuence(seed);
    }
}

function GetSecuence(seed){
    let length = 1;
    let mayor = 0;
    let matriz = new Array(0);
    matriz.push(seed);
    while(seed != 1){
        let valor = seed / 2;

        if((seed%2) != 0){
            valor = (seed * 3) + 1; 
        }

        length++;
        seed = valor;
        matriz.push(seed);

        if(seed > matriz[mayor]){
            mayor = length-1;
        }
    }
    matriz.push(seed);
    
    alert("Longitud de la secuencia: " + length + "\n" + "Numero mas grande: " + matriz[mayor]);
}