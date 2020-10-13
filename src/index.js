module.exports = function check(str, bracketsConfig) {
  let newArr = [];
  if (str.length % 2){
    return false;
  }
  for (let i = 0; i < str.length; i++) {
     for (let j = 0; j < bracketsConfig.length; j++) {
         if (str[i] === bracketsConfig[j][1] && newArr[newArr.length - 1] === bracketsConfig[j][0]){
          newArr.pop();
         }else if (str[i] === bracketsConfig[j][0]){
              newArr.push(str[i]);
             }
         }
   }
 return newArr.length === 0;
}


