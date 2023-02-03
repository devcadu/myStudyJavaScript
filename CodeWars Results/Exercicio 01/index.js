//Codewars 30/01/2023
//Clock shows h hours, m minutes and s seconds after midnight.
//Your task is to write a function which returns the time since midnight in milliseconds.
//Input constraints:
//0 <= h <= 23
//0 <= m <= 59
//0 <= s <= 59

function past(h, m, s){
    let horas = h * 60 * 60 * 1000;
     let minutos = m * 60 * 1000;
     let segundos = s * 1000;
     let res = horas + minutos + segundos;
     return res
   }
   console.log (past(0,1,1));
   






