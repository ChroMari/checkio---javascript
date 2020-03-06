function endZeros(a) {
    a = a + '';
    a = a.split('').reverse().join('');
    let i = 0;
    let sum = 0;
    
    while (Number(a[i]) == 0){
        sum = sum + 1;
        i = i + 1;
    }
    
    return sum;
}
