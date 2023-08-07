module.exports = function check(str, bracketsConfig) {
  
function findEndBrs(arr, symbol){  
  for (let i = 0; i < arr.length; i++){
  if (arr[i][0] === symbol)  {
      return arr[i][1];
    }
  }
}


function getOpenedBrs(arr){
  let result = [];
  for (let i = 0; i < arr.length; i++){
    result.push(arr[i][0]);
  }
  return result;
}

function getIdenticalBrs(arr){
  let result = [];
  for (let i = 0; i < arr.length; i++){
    if (arr[i][0] === arr[i][1])  {
         result.push(arr[i][0]);
      }
    }

    return result;
}



  let openBrs = getOpenedBrs(bracketsConfig);

  let identicalBrs = getIdenticalBrs(bracketsConfig);

  let arr = [];  

  for (i = 0; i < str.length; i++){   
    let bracket = str[i];

    if (openBrs.includes(bracket)) {

      if(identicalBrs.includes(bracket)) {
        if (arr[arr.length-1] === bracket) {
          arr.pop(); 
        } else{
          arr.push(bracket);
        }
      } else {
          endBr = findEndBrs(bracketsConfig, bracket);
          arr.push(endBr);
      }
    } else {
      if (arr[arr.length-1] === bracket) {
        arr.pop(); 
      } else return false;
    }       

  }
  console.log(arr);

  if (arr.length != 0) return false;

  return true;




  // your solution
}
