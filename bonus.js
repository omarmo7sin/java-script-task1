function createCounter(x){
   let count = x;
   return {
    increment :createCounter.increment=function(){
    count++;
    return count;
   },
   decrement :createCounter.decrement=function(){
    count--;
    return count;
   },
   reset :createCounter.reset=function(){
    count=x;
    return count;
   }
   }
   
}
const counter = createCounter(1);

console.log(counter.increment())
console.log(counter.decrement())
console.log(counter.reset())