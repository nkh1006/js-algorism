function factorialize(value) {
   var sum = 1;
   for(var i = 1; i <= value; i++) {
      sum *= i;
   }
   console.log(sum);
   return sum;
}

factorialize(5);