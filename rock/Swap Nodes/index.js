function swapNodes(a) {
    let i = 0;
    
    if (a.length % 2 == 0){
    
        while (i < a.length){
            let k = a[i];
            a[i] = a[i + 1];
            a[i + 1] = k;
            i = i + 2;
        }
        
    }
    
    else{
    
        while (i < a.length - 1){
            let k = a[i];
            a[i] = a[i + 1];
            a[i + 1] = k;
            i = i + 2; 
        }
        
    }
    
    return a; 
}
