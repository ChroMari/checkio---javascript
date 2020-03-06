function backwardStringByWord(a) {
    a = a.split(' ');
    
    for (let i = 0; i < a.length; i++){
        a[i] = a[i].split('').reverse().join('');
    }
    
    return a.join(' ');
}
