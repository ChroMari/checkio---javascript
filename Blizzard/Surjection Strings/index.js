function isometricStrings(str1, str2) {

   if (str1.length != str2.length) return false;
   else{
   
       for (let i = 0; i < str1.length; i++){
           if (str2[str1.indexOf(str1[i])] != str2[i]) return false
       }
       
       return true;
   }
}
