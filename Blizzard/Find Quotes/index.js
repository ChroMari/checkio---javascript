function findQuotes(a) {
    let flag = 0;
    let str = '';
    let arr = [];
    
    for (let i = 0; i < a.length; i++){
    
        if (a[i] == '"'){
            flag = flag + 1;
        }
        
        else if (flag == 1){
            str = str + a[i];
        }
        
        if (flag == 2){
            arr.push(str);
            flag = 0
            str = '';
        }
        
    }
    return arr;
}
