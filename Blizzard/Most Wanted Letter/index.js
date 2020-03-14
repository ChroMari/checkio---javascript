function mostWanted(data) {
    data = data.toLowerCase();
    
    let res_str = [];
    let res_num = [];
    let count;
    let abc = 'qwertyuiopasdfghjklzxcvbnm';
    
    for (let i = 0; i < data.length; i++){
        count = 0;
        
        if (res_str.indexOf(data[i]) == -1 && abc.indexOf(data[i]) != -1){
        
            for (let j = 0; j < data.length; j++){
            
                if (data[j] == data[i]) count = count + 1;
            }
            
            res_str.push(data[i]);
            res_num.push(count);
        }
        
    }
    
    let max = Math.max(...res_num);
    let res = [];
    
    for (let i = 0; i < res_num.length; i++){
    
        if (res_num[i] == max){
            res.push(res_str[i]);
        }
        
    }
    return res;
}
