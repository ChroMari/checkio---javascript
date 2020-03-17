function mostFrequentDays(a) {
    let d = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (new Date(a, 1, 29).getMonth() == 1) d[1] = 29;
    
    let obj = {};
    let date;
    let s;
    for (let i = 0; i < 12; i++){
        for (let j = 1; j <= d[i]; j++){
            
            if (a < 100 && a > 10){ 
            
                if ((i + 1) < 10){
                    if (j < 10){
                        s = '00' + a + '-0' + (i + 1) + '-0' + j;
                        date = new Date(s);
                    }
                    
                    else{
                        s = '00' + a + '-0' + (i + 1) + '-' + j;
                        date = new Date(s);
                    }
                }
                
                else{
                    if (j < 10){
                        s = '00' + a + '-' + (i + 1) + '-0' + j;
                        date = new Date(s);
                    }
                    
                    else{
                        s = '00' + a + '-' + (i + 1) + '-' + j;
                        date = new Date(s);
                    }
                }
       
            }
            else if (a < 10){
            
                if ((i + 1) < 10){
                    s = '000' + a + '-0' + (i + 1) + '-0' + j;
                    
                    if (j < 10){
                        s = '000' + a + '-0' + (i + 1) + '-0' + j;
                        date = new Date(s);
                    }
                    
                    else{
                        s = '000' + a + '-0' + (i + 1) + '-' + j;
                        date = new Date(s);
                    }
                }
                
                else{
                    if (j < 10){
                        s = '000' + a + '-' + (i + 1) + '-0' + j
                        date = new Date(s);
                    }
                    else{
                        s = '000' + a + '-' + (i + 1) + '-' + j
                        date = new Date(s);
                    }
                }
            }
            
            else date = new Date(a, i, j);
            
            let item;
  
            if (date.getDay() == 0) item = 6;
            
            else item = date.getDay() - 1;
            
            
            if (obj[item] === undefined) obj[item] = 1;
            else obj[item] = obj[item] + 1;
        }
    }
    let m =['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    
    let res = [];
    for (var key in obj){
        res.push(obj[key]);
    }
    
    let arr = [];
    for (var key in obj){
        if (obj[key] == Math.max(...res)){
            arr.push(m[Number(key)]);
        }
    }
    return arr;
}
