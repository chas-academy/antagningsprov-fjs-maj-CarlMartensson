
function uppg9 (){
 
    let numbers = [1,2,3,4,5,6]

    for(let num of numbers) {
       if (num % 2 ===0) {
        console.log(num, " jämt")
       } else {
        console.log(num, " udda")
       }
       }
    }
   
module.exports = { uppg9 };

uppg9()