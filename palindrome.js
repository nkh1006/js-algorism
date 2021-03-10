function palindrome(value) {
   var reg = "/[\W_]g";
   var str = value.toLowerCase().replace(reg,"");
   var reversed = str.split("").reverse().join("");
   return reversed === str ? true : false;   
}

palindrome("eye");

