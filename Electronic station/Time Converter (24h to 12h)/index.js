function timeConverter(dayTime) {
    dayTime = dayTime.split(':');
    
    if (Number(dayTime[0]) == 0) return  '12:' + dayTime[1] + ' a.m.';
    
    if (Number(dayTime[0]) < 12) return Number(dayTime[0]) + ':' + dayTime[1] + ' a.m.';
    
    else{
        if (Number(dayTime[0]) == 13) dayTime[0] = 1;
        else if (Number(dayTime[0]) == 14) dayTime[0] = 2;
        else if (Number(dayTime[0]) == 15) dayTime[0] = 3;
        else if (Number(dayTime[0]) == 16) dayTime[0] = 4;
        else if (Number(dayTime[0]) == 17) dayTime[0] = 5;
        else if (Number(dayTime[0]) == 18) dayTime[0] = 6;
        else if (Number(dayTime[0]) == 19) dayTime[0] = 7;
        else if (Number(dayTime[0]) == 20) dayTime[0] = 8;
        else if (Number(dayTime[0]) == 21) dayTime[0] = 9;
        else if (Number(dayTime[0]) == 22) dayTime[0] = 10;
        else if (Number(dayTime[0]) == 23) dayTime[0] = 11;
        
        return dayTime[0] + ':' + dayTime[1] + ' p.m.';
    }
    
}
