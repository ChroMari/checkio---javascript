function isAscending(items) {

    for (let i = 0; i < items.length; i++){
    
        if (items[i] >= items[i + 1]) return false;
        
    }
    
    return true;
}
