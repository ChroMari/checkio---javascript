
function canBalance(weights) {
    if (weights.length == 1) return 0;
    for (let i = 1; i < weights.length; i++){
        let arr1 = [];
        let i1 = 0;
        
        while (i1 < i){
            arr1.push(weights[i1]);
            i1 = i1 + 1;
        }
        
        let arr2 = [];
        let i2 = i + 1;
        
        while (i2 < weights.length){
            arr2.push(weights[i2]);
            i2 = i2 + 1;
        }
        
        arr1 = arr1.reverse();
        let sum1 = 0;
        for (let j = 0; j < arr1.length; j++){
            sum1 = sum1 + arr1[j] * (j + 1);
        }
        
        let sum2 = 0;
        for (let j = 0; j < arr2.length; j++){
            sum2 = sum2 + arr2[j] * (j + 1);
        }
        if (sum1 == sum2) return i;
    }
    return -1;
}
