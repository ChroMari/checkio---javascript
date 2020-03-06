function expandIntervals(items) {
    let res = [];
    
    for (let i = 0; i < items.length; i++){
    
        while (items[i][0] <= items[i][1]){
            res.push(items[i][0]);
            items[i][0] = items[i][0] + 1;
        }
    }
    
    return res;
}
