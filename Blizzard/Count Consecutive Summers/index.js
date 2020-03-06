function countConsecutiveSummers(num) {
    let i = 1;
    let flag = 0;
    
    while (i < num){
        let sum = 0;
        let i_col = i;
        
        while (sum < num){
            sum = sum + i_col;
            i_col = i_col + 1;
        }
        
        if (sum == num){
            flag = flag + 1;
            i = i + 1;
        }
        else{
            i = i + 1;
        }
        
    }
    return flag + 1;
}
