function reverseString(value) {
   // return value.split('').reverse().join('');
   
   var final = '';
   for (var i = str.length - 1; i >= 0; i --) {
      final += str[i];
   }
   return final;
}

reverseString("hello");